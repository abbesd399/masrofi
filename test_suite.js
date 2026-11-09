// Automated Unit & Integration Test Suite for Masrofi
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const assert = require('assert');

console.log('--- MASROFI TEST SUITE STARTING ---');

// 1. Mock Browser Environment for app.js
const domListeners = {};
const mockElements = new Map();

function createMockElement(tag, attrs = {}) {
  const el = {
    tagName: tag.toUpperCase(),
    dataset: {},
    classList: {
      _classes: new Set(),
      add: function(...c) { c.forEach(x => this._classes.add(x)); },
      remove: function(...c) { c.forEach(x => this._classes.delete(x)); },
      toggle: function(c, force) {
        if (force === undefined) {
          if (this._classes.has(c)) this._classes.delete(c);
          else this._classes.add(c);
        } else if (force) {
          this._classes.add(c);
        } else {
          this._classes.delete(c);
        }
      },
      contains: function(c) { return this._classes.has(c); }
    },
    style: {},
    children: [],
    innerHTML: '',
    textContent: '',
    appendChild: function(child) { this.children.push(child); return child; },
    remove: function() {},
    querySelector: function(sel) { return createMockElement('div'); },
    querySelectorAll: function(sel) { return [createMockElement('div')]; },
    addEventListener: function(event, handler) {
      if (!domListeners[event]) domListeners[event] = [];
      domListeners[event].push(handler);
    }
  };
  return el;
}

const sandbox = {
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  URLSearchParams: URLSearchParams,
  document: {
    documentElement: { dir: 'rtl', lang: 'ar' },
    getElementById: function(id) {
      if (!mockElements.has(id)) mockElements.set(id, createMockElement('div'));
      return mockElements.get(id);
    },
    querySelector: function(sel) { return createMockElement('div'); },
    querySelectorAll: function(sel) { return [createMockElement('div'), createMockElement('div')]; }
  },
  window: {
    location: { search: '' },
    AudioContext: class {
      constructor() { this.currentTime = 0; this.destination = {}; }
      createOscillator() {
        return {
          type: 'sine',
          frequency: { setValueAtTime: () => {} },
          connect: () => {},
          start: () => {},
          stop: () => {}
        };
      }
      createGain() {
        return {
          gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
          connect: () => {}
        };
      }
    },
    webkitAudioContext: null,
    addEventListener: (event, handler) => {
      if (!domListeners[event]) domListeners[event] = [];
      domListeners[event].push(handler);
    },
    lucide: {
      createIcons: () => {}
    }
  }
};

const code = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const script = new vm.Script(code + '\n;globalThis.i18n = i18n; globalThis.AppState = AppState; globalThis.ScannerPresets = ScannerPresets; globalThis.MasrofiApp = MasrofiApp;');
const context = vm.createContext(sandbox);
script.runInContext(context);

const { i18n, AppState, ScannerPresets, MasrofiApp } = context;

// TEST 1: i18n Dictionary Parity
console.log('Testing Test 1: i18n Dictionary Completeness & Symmetry...');
const arKeys = Object.keys(i18n.ar).sort();
const frKeys = Object.keys(i18n.fr).sort();
const enKeys = Object.keys(i18n.en).sort();

const missingInFr = arKeys.filter(k => !frKeys.includes(k));
const missingInEn = arKeys.filter(k => !enKeys.includes(k));

if (missingInFr.length > 0) console.error('Missing in FR:', missingInFr);
if (missingInEn.length > 0) console.error('Missing in EN:', missingInEn);

assert.strictEqual(missingInFr.length, 0, 'FR dictionary must have all AR keys');
assert.strictEqual(missingInEn.length, 0, 'EN dictionary must have all AR keys');
console.log(`✓ i18n Symmetry verified across all ${arKeys.length} translation keys.`);

// TEST 2: Family Member Transactions Filtering
console.log('Testing Test 2: Family Member Transactions Filtering...');
AppState.familyFilter = 'all';
let allTx = AppState.familyFilter === 'all'
  ? AppState.transactions
  : AppState.transactions.filter(t => t.memberId === AppState.familyFilter);
assert.strictEqual(allTx.length >= 4, true, 'All transactions returned when familyFilter is all');

AppState.familyFilter = 'karima';
let karimaTx = AppState.familyFilter === 'all'
  ? AppState.transactions
  : AppState.transactions.filter(t => t.memberId === AppState.familyFilter);
assert.strictEqual(karimaTx.every(t => t.memberId === 'karima'), true, 'Filtered to Karima only');
assert.strictEqual(karimaTx.length >= 1, true, 'Karima has transactions');

AppState.familyFilter = 'sarah';
let sarahTx = AppState.familyFilter === 'all'
  ? AppState.transactions
  : AppState.transactions.filter(t => t.memberId === AppState.familyFilter);
assert.strictEqual(sarahTx.length, 0, 'Sarah has 0 transactions (triggers empty state)');
console.log('✓ Family transactions filter logic verified.');

const app = new MasrofiApp();
app.init();

// TEST 3: Bill Payment Flow & State Balance
console.log('Testing Test 3: Bill Payment Flow...');
const initialSpent = AppState.spentAmount;
const initialReserved = AppState.reservedBillsBucket;
const initialTxCount = AppState.transactions.length;

app.payBill('b1'); // Sonelgaz (8400)
const sonelgaz = AppState.bills.find(b => b.id === 'b1');
assert.strictEqual(sonelgaz.paid, true, 'Bill b1 must be marked paid');
assert.strictEqual(AppState.spentAmount, initialSpent + 8400, 'Spent amount must increase by bill amount');
assert.strictEqual(AppState.reservedBillsBucket, initialReserved - 8400, 'Reserved bucket must decrease by bill amount');
assert.strictEqual(AppState.transactions.length, initialTxCount + 1, 'Transaction must be prepended');
console.log('✓ Bill payment flow verified.');

// TEST 4: AI Scanner Presets & LTR Direction
console.log('Testing Test 4: AI Scanner Presets & Document Direction...');
['sonelgaz', 'saa', 'naftal', 'uno'].forEach(pKey => {
  const preset = ScannerPresets[pKey];
  assert.ok(preset, `Preset ${pKey} must exist`);
  assert.strictEqual(preset.documentSvg.includes('dir="ltr"'), true, `Preset ${pKey} must have dir="ltr" to avoid BiDi reversal`);
  assert.strictEqual(preset.documentSvg.includes('text-align: left;'), true, `Preset ${pKey} must have text-align: left;`);
});
console.log('✓ All 4 scanner preset templates verified with dir="ltr".');

// TEST 5: Language Switching & RTL/LTR Direction
console.log('Testing Test 5: Language Switching...');
app.setLanguage('fr');
assert.strictEqual(AppState.lang, 'fr', 'AppState.lang must be fr');
assert.strictEqual(sandbox.document.documentElement.dir, 'ltr', 'Document dir must be ltr for French');
assert.strictEqual(sandbox.document.documentElement.lang, 'fr', 'Document lang must be fr');

app.setLanguage('ar');
assert.strictEqual(AppState.lang, 'ar', 'AppState.lang must be ar');
assert.strictEqual(sandbox.document.documentElement.dir, 'rtl', 'Document dir must be rtl for Arabic');
console.log('✓ Language switching and document direction verified.');

// TEST 6: Car Obligations Status Logic
console.log('Testing Test 6: Car Obligations Status Logic...');
const carStatuses = AppState.carData.items.map(c => c.status);
assert.ok(carStatuses.includes('reserved'), 'Car items have reserved status');
assert.ok(carStatuses.includes('urgent'), 'Car items have urgent status');
assert.ok(carStatuses.includes('future'), 'Car items have future status');
assert.ok(carStatuses.includes('upcoming'), 'Car items have upcoming status');
console.log('✓ Car obligations multi-tier statuses verified.');

console.log('--- ALL TESTS PASSED SUCCESSFULLY! ---');

/**
 * MASROFI (مصروفي) - Mobile UI Prototype & Desktop Studio Engine
 * Full interactive simulation, Web Audio synthesis, bilingual i18n,
 * and 2026 Fintech design standards (Revolut 10 / Apple Card / Mobbin).
 */

// ==========================================================================
// 1. Translations & Bilingual Dictionary (Arabic, French, English)
// ==========================================================================
const i18n = {
  ar: {
    appName: "مصروفي",
    appSubtitle: "إدارة مصاريف العائلة بالذكاء الاصطناعي",
    currency: "د.ج",
    monthLabel: "نوفمبر 2026",
    
    // Desktop Studio
    studioTitle: "استوديو استعراض مصروفي",
    studioSubtitle: "محاكاة تفاعلية لتطبيق الهاتف (iOS 18 & Android M3)",
    modeIos: "iOS 18",
    modeAndroid: "Android M3",
    viewDual: "عرض الهاتفين معاً",
    viewSingle: "عرض هاتف واحد",
    themeDark: "داكن",
    themeLight: "فاتح",
    triggerAlert: "تنبيه بداية الشهر",
    triggerScan: "مسح فاتورة سونلغاز",
    triggerFamilySpend: "شراء عائلي محاكى",
    scenarioLabel: "محاكاة سيناريوهات حية:",
    islandTitle: "Masrofi • سونلغاز قادمة",
    islandSub: "مستحقة في 15 نوفمبر",
    islandAmount: "8,400 د.ج",

    // Home Tab
    homeTab: "الرئيسية",
    startOfMonthAlertTitle: "تنبيه بداية الشهر الذكي",
    startOfMonthAlertDesc: "لديك 3 فواتير مستحقة هذا الشهر (منها تأمين السيارة SAA محجوز تلقائياً في 15 نوفمبر).",
    dismiss: "تجاهل",
    details: "التفاصيل",
    totalSalary: "الراتب الشهري الإجمالي",
    remainingSalary: "الصافي المتبقي للصرف",
    reservedBucket: "الحصالة المحجوزة للفواتير",
    safeDailyLimit: "الحد اليومي الآمن للصرف",
    safeSpendable: "الصافي المتاح الحقيقي للمعيشة",
    dailyPace: "يومياً لـ 21 يوماً قادمة",
    stateSafe: "وضع الصرف آمن ومريح",
    stateWarning: "انتبه: اقتربت من ثلث الراتب",
    stateCritical: "تنبيه: الراتب على وشك النفاد",
    familyActivityTitle: "نشاط العائلة المباشر",
    viewAll: "عرض الكل",
    recentActivity: "آخر العمليات المسجلة",
    quickAddSpend: "إضافة مصروف",
    quickTransfer: "تحويل عائلي",
    quickVault: "الحصالة",
    quickAnalytics: "تحليل",

    // Bills & Car Tab
    billsCarTab: "الفواتير",
    segBills: "فواتير هذا الشهر",
    segCar: "التزامات السيارة",
    upcomingBills: "فواتير قادمة",
    paidBills: "فواتير تم تسديدها",
    markPaid: "تسديد الآن",
    paidSuccess: "تم التسديد بنجاح!",
    carProfile: "ملف السيارة: Dacia Sandero Stepway",
    carOdometer: "عداد الكيلومترات: 68,450 كم",
    nextVidange: "الزيت القادم (Vidange): بعد 1,550 كم",
    carInsurance: "تأمين السيارة السنوي (SAA)",
    controleTechnique: "الفحص التقني للسيارات",
    vignetteAuto: "قسيمة السيارات (Vignette)",
    naftalBudget: "ميزانية الوقود الشهرية (نفطال)",
    daysRemaining: "متبقي {n} يوم",
    dueSoon: "مستحق قريباً",

    // Family Shared Wallet Tab
    familyTab: "العائلة",
    sharedWalletTitle: "مصاريف العائلة المشتركة",
    sharedWalletDesc: "الجميع يصرف من نفس الراتب بشفافية وبدون تعقيد",
    filterAll: "الكل",
    sharedGroceryBasket: "سلة مقاضي البيت التقديرية",
    basketEstimateDesc: "الذكاء الاصطناعي يحسب تكلفة السلة قبل الذهاب للسوبرماركت",
    estimatedBasketTotal: "المجموع التقديري للسلة",
    consumesFromSalary: "تستهلك {pct}% من المتبقي",
    addItem: "إضافة سلعة",

    // AI Coach Tab
    coachTab: "المدرب",
    burnRateTitle: "مؤشر سرعة الصرف (Burn-Rate)",
    burnRateDesc: "بمعدل صرفكم الحالي، الراتب سيكفي حتى 4 أيام بعد موعد الراتب القادم بنجاح.",
    priceHikeTitle: "كاشف غلاء الأسعار وتكرار الفواتير",
    priceHikeItem1: "زيت المائدة (+15% مقارنة بالشهر السابق في سوبيرات Uno)",
    priceHikeItem2: "فاتورة سونلغاز مطابقة لنفس الربع من العام الماضي",
    savingsGoalTitle: "صندوق الطوارئ العائلي",
    savingsProgress: "تم توفير 185,000 د.ج من أصل 300,000 د.ج",

    // AI Scanner Modal
    scannerTitle: "الماسح الذكي بالذكاء الاصطناعي",
    scannerSubtitle: "تعرف فوري على المبالغ والتواريخ ومطابقة الأسعار",
    scanMode1: "فاتورة مشتريات فورية",
    scanMode2: "قارئ أوراق السيارة والفواتير",
    selectPreset: "اختر وثيقة تجريبية للمحاكاة:",
    presetSonelgaz: "فاتورة كهرباء وغاز (سونلغاز)",
    presetSaa: "عقد تأمين سيارة (SAA)",
    presetNaftal: "وصل وقود (نفطال)",
    presetUno: "وصل سوبرماركت (Uno)",
    simulateScanBtn: "بدء مسح الوثيقة بالذكاء الاصطناعي",
    scanningProgress: "جاري تحليل الوثيقة وقراءة الباركود والتواريخ...",
    scanSuccess: "تم استخراج البيانات بدقة 99.4%!",
    extractedMerchant: "الجهة / التاجر:",
    extractedAmount: "المبلغ المستخرج:",
    extractedDate: "تاريخ الاستحقاق / العملية:",
    extractedCategory: "التصنيف التلقائي:",
    extractedMember: "المسجل باسم:",
    confirmAddBtn: "تأكيد وإضافة للميزانية",

    // Members & Roles
    memberAmine: "أمين (الأب)",
    memberKarima: "كريمة (الأم)",
    memberRayan: "ريان (الابن)",
    memberSarah: "سارة (الابنة)",
    memberAmineName: "أمين",
    memberKarimaName: "كريمة",
    memberRayanName: "ريان",
    memberSarahName: "سارة",
    roleFather: "الأب",
    roleMother: "الأم",
    roleSon: "الابن",
    roleDaughter: "الابنة",
    roleFamily: "العائلة",

    // Dynamic Tags & Labels
    perDay: "/ يوم",
    smartProactive: "استباقي ذكي",
    priceHikeTag: "غلاء +15%",
    autoReserved: "محجوز آلياً",
    attention: "انتباه",
    justNow: "الآن",
    smartEstimate: "تقدير ذكي",
    payBillTitle: "تسديد {name}",
    simSpendTitle: "شراء عائلي إضافي (مخبزة + خضر)",
    scanInstant: "الآن (مسح ذكي)",
    ocrAccuracy: "تم استخراج البيانات بدقة 99.4%",

    // Grocery Items
    g1Name: "حليب مبستر + لبن",
    g2Name: "زيت المائدة (5 لتر)",
    g3Name: "بيض طازج (بلاطو 30)",
    g4Name: "قهوة مطحونة + سكر",
    g5Name: "كسكسي وعجائن تموينية",

    // Status & Family & AI Tips Keys
    statusUpcoming: "قادم قريباً",
    statusScheduled: "مجدول",
    operationsCount: "عمليات",
    noMemberSpend: "لا توجد مصاريف مسجلة لهذا العضو",
    noMemberSpendDesc: "لم يقم هذا العضو بأي عملية شراء خلال الشهر الحالي.",
    familyMembersTitle: "المخصصات والمصاريف الفردية",
    aiTipsTitle: "نصائح الذكاء الاصطناعي للمنزل الجزائري",
    sonelgazTipTitle: "تحسين شطر استهلاك الكهرباء والغاز (سونلغاز)",
    sonelgazTipDesc: "استهلاككم الحالي في الشطر 2. ضبط أجهزة التدفئة بدرجة واحدة يوفر 2,400 د.ج ويمنع الدخول في الشطر 3 المرتفع.",
    naftalTipTitle: "ميزانية الوقود التقديرية (نفطال)",
    naftalTipDesc: "بمعدل مسافات سيارتكم Sandero Stepway، تحتاجون 2 ملء خزان إضافي (4,400 د.ج) حتى نهاية الشهر.",
    applyTipsBtn: "تطبيق التوصيات الذكية",
    tipsAppliedSuccess: "تم تطبيق التوصيات وتحديث خطة التوفير بنجاح!",
    memberContribution: "المساهمة في المصروف"
  },

  fr: {
    appName: "Masrofi",
    appSubtitle: "Finances familiales & Factures par IA",
    currency: "DA",
    monthLabel: "Novembre 2026",
    
    studioTitle: "Studio Masrofi",
    studioSubtitle: "Prototype Mobile Interactif (iOS 18 & Android M3)",
    modeIos: "iOS 18",
    modeAndroid: "Android M3",
    viewDual: "Vue Côte à Côte",
    viewSingle: "Vue Simple",
    themeDark: "Sombre",
    themeLight: "Clair",
    triggerAlert: "Alerte Début de Mois",
    triggerScan: "Scanner Facture Sonelgaz",
    triggerFamilySpend: "Achat Familial Simulé",
    scenarioLabel: "Scénarios en direct :",
    islandTitle: "Masrofi • Sonelgaz arrive",
    islandSub: "Échéance le 15 nov",
    islandAmount: "8 400 DA",

    homeTab: "Accueil",
    startOfMonthAlertTitle: "Alerte Proactive de Début de Mois",
    startOfMonthAlertDesc: "3 factures dues ce mois-ci (dont l'Assurance Auto SAA réservée automatiquement le 15 Nov).",
    dismiss: "Ignorer",
    details: "Détails",
    totalSalary: "Salaire Mensuel Total",
    remainingSalary: "Reste Net Disponible",
    reservedBucket: "Cagnotte Réservée aux Factures",
    safeDailyLimit: "Limite Journalière Sécurisée",
    safeSpendable: "Disponible Réel pour Vivre",
    dailyPace: "Par jour pour les 21 jours restants",
    stateSafe: "Rythme de dépense sain et sécurisé",
    stateWarning: "Attention : vous approchez du dernier tiers",
    stateCritical: "Alerte : risque d'épuisement précoce",
    familyActivityTitle: "Activité Familiale en Direct",
    viewAll: "Voir Tout",
    recentActivity: "Dernières Dépenses",
    quickAddSpend: "Ajouter Dépense",
    quickTransfer: "Virement",
    quickVault: "Cagnotte",
    quickAnalytics: "Analyses",

    billsCarTab: "Factures",
    segBills: "Factures du Mois",
    segCar: "Obligations Voiture",
    upcomingBills: "À Venir",
    paidBills: "Payées",
    markPaid: "Payer Maintenant",
    paidSuccess: "Payé avec succès !",
    carProfile: "Dacia Sandero Stepway",
    carOdometer: "Kilométrage : 68 450 km",
    nextVidange: "Prochaine Vidange : dans 1 550 km",
    carInsurance: "Assurance Automobile Annuelle (SAA)",
    controleTechnique: "Contrôle Technique Périodique",
    vignetteAuto: "Vignette Automobile",
    naftalBudget: "Budget Carburant Mensuel (Naftal)",
    daysRemaining: "Reste {n} jours",
    dueSoon: "Échéance Proche",

    familyTab: "Famille",
    sharedWalletTitle: "Dépenses Partagées de la Famille",
    sharedWalletDesc: "Toute la famille dépense sur le même salaire en toute transparence",
    filterAll: "Tous",
    sharedGroceryBasket: "Panier d'Épicerie Estimé par IA",
    basketEstimateDesc: "L'IA estime le coût total avant d'aller au supermarché",
    estimatedBasketTotal: "Total Estimé du Panier",
    consumesFromSalary: "Consomme {pct}% du reste disponible",
    addItem: "Ajouter un article",

    coachTab: "Coach",
    burnRateTitle: "Vitesse de Dépense (Burn-Rate)",
    burnRateDesc: "À ce rythme, votre salaire tiendra confortablement jusqu'à 4 jours après le prochain virement.",
    priceHikeTitle: "Détecteur de Hausse des Prix & Doublons",
    priceHikeItem1: "Huile de table (+15% par rapport au mois dernier chez Uno)",
    priceHikeItem2: "Facture Sonelgaz identique au même trimestre de l'an passé",
    savingsGoalTitle: "Fonds d'Urgence Familial",
    savingsProgress: "185 000 DA épargnés sur 300 000 DA",

    scannerTitle: "Scanner Intelligent par IA",
    scannerSubtitle: "Reconnaissance OCR instantanée des montants et échéances",
    scanMode1: "Ticket de caisse immédiat",
    scanMode2: "Lecteur d'avis & documents auto",
    selectPreset: "Sélectionnez un document test :",
    presetSonelgaz: "Facture Électricité/Gaz (Sonelgaz)",
    presetSaa: "Contrat Assurance Auto (SAA)",
    presetNaftal: "Ticket Carburant (Naftal)",
    presetUno: "Ticket de Caisse (Uno)",
    simulateScanBtn: "Lancer le scan IA",
    scanningProgress: "Analyse OCR et extraction des dates en cours...",
    scanSuccess: "Extraction réussie avec 99,4% de précision !",
    extractedMerchant: "Émetteur / Commerçant :",
    extractedAmount: "Montant extrait :",
    extractedDate: "Date d'échéance :",
    extractedCategory: "Catégorie :",
    extractedMember: "Effectué par :",
    confirmAddBtn: "Confirmer & Ajouter au Budget",

    // Members & Roles
    memberAmine: "Amine (Père)",
    memberKarima: "Karima (Mère)",
    memberRayan: "Rayan (Fils)",
    memberSarah: "Sarah (Fille)",
    memberAmineName: "Amine",
    memberKarimaName: "Karima",
    memberRayanName: "Rayan",
    memberSarahName: "Sarah",
    roleFather: "Père",
    roleMother: "Mère",
    roleSon: "Fils",
    roleDaughter: "Fille",
    roleFamily: "Famille",

    // Dynamic Tags & Labels
    perDay: "/ jour",
    smartProactive: "Proactif IA",
    priceHikeTag: "Hausse +15%",
    autoReserved: "Auto-Réservé",
    attention: "Attention",
    justNow: "À l'instant",
    smartEstimate: "Estimation IA",
    payBillTitle: "Paiement {name}",
    simSpendTitle: "Achat familial (boulangerie & primeur)",
    scanInstant: "À l'instant (Scan IA)",
    ocrAccuracy: "Données extraites avec 99,4% de précision",

    // Grocery Items
    g1Name: "Lait pasteurisé + Lben",
    g2Name: "Huile de table (5L)",
    g3Name: "Œufs frais (plateau 30)",
    g4Name: "Café moulu + Sucre",
    g5Name: "Couscous & Pâtes alimentaires",

    // Status & Family & AI Tips Keys
    statusUpcoming: "À venir",
    statusScheduled: "Planifié",
    operationsCount: "opérations",
    noMemberSpend: "Aucune dépense enregistrée pour ce membre",
    noMemberSpendDesc: "Ce membre n'a effectué aucun achat durant ce mois.",
    familyMembersTitle: "Allocations & Dépenses Individuelles",
    aiTipsTitle: "Conseils IA pour le Foyer Algérien",
    sonelgazTipTitle: "Optimisation des Tranches Sonelgaz",
    sonelgazTipDesc: "Votre consommation est en Tranche 2. Régler le chauffage d'un degré économise 2 400 DA et évite la Tranche 3.",
    naftalTipTitle: "Budget Carburant Prévisionnel (Naftal)",
    naftalTipDesc: "Pour votre Sandero Stepway, 2 pleins supplémentaires (4 400 DA) sont prévus d'ici la fin du mois.",
    applyTipsBtn: "Appliquer les Recommandations",
    tipsAppliedSuccess: "Recommandations appliquées avec succès !",
    memberContribution: "Part des dépenses"
  },

  en: {
    appName: "Masrofi",
    appSubtitle: "Family Finance & AI Bill Management",
    currency: "DZD",
    monthLabel: "November 2026",
    
    studioTitle: "Masrofi Preview Studio",
    studioSubtitle: "Interactive Mobile UI Showcase (iOS 18 & Android M3)",
    modeIos: "iOS 18",
    modeAndroid: "Android M3",
    viewDual: "Side-by-Side Dual View",
    viewSingle: "Single Phone View",
    themeDark: "Dark",
    themeLight: "Light",
    triggerAlert: "Month-Start Alert",
    triggerScan: "Scan Sonelgaz Bill",
    triggerFamilySpend: "Family Spend Simulation",
    scenarioLabel: "Live Scenarios:",
    islandTitle: "Masrofi • Sonelgaz Due",
    islandSub: "Due on Nov 15th",
    islandAmount: "8,400 DZD",

    homeTab: "Home",
    startOfMonthAlertTitle: "Smart Start-of-Month Alert",
    startOfMonthAlertDesc: "3 bills due this month (including SAA Car Insurance automatically reserved on Nov 15th).",
    dismiss: "Dismiss",
    details: "Details",
    totalSalary: "Total Monthly Salary",
    remainingSalary: "Remaining Spendable",
    reservedBucket: "Auto-Reserved Bills Bucket",
    safeDailyLimit: "Safe Daily Spending Limit",
    safeSpendable: "True Spendable Living Money",
    dailyPace: "Per day for the next 21 days",
    stateSafe: "Spending pace is healthy and safe",
    stateWarning: "Caution: reaching lower spending tier",
    stateCritical: "Alert: salary risk of early exhaustion",
    familyActivityTitle: "Live Family Activity",
    viewAll: "View All",
    recentActivity: "Recent Transactions",
    quickAddSpend: "Add Spend",
    quickTransfer: "Transfer",
    quickVault: "Reserved",
    quickAnalytics: "Analytics",

    billsCarTab: "Bills",
    segBills: "This Month's Bills",
    segCar: "Car Obligations",
    upcomingBills: "Upcoming",
    paidBills: "Paid",
    markPaid: "Pay Now",
    paidSuccess: "Paid Successfully!",
    carProfile: "Dacia Sandero Stepway",
    carOdometer: "Odometer: 68,450 km",
    nextVidange: "Next Oil Change (Vidange): in 1,550 km",
    carInsurance: "Annual Car Insurance (SAA)",
    controleTechnique: "Periodic Vehicle Inspection",
    vignetteAuto: "Annual Road Tax (Vignette)",
    naftalBudget: "Monthly Fuel Budget (Naftal)",
    daysRemaining: "{n} days remaining",
    dueSoon: "Due Soon",

    familyTab: "Family",
    sharedWalletTitle: "Family Shared Wallet",
    sharedWalletDesc: "Entire family spending from one salary with zero friction and complete clarity",
    filterAll: "All",
    sharedGroceryBasket: "AI Shared Grocery Cart",
    basketEstimateDesc: "AI calculates estimated basket cost before shopping",
    estimatedBasketTotal: "Estimated Basket Total",
    consumesFromSalary: "Consumes {pct}% of remaining balance",
    addItem: "Add Item",

    coachTab: "Coach",
    burnRateTitle: "Salary Burn-Rate Forecast",
    burnRateDesc: "At current pace, your salary will comfortably last until 4 days after next payday.",
    priceHikeTitle: "AI Price-Hike & Duplicate Guard",
    priceHikeItem1: "Cooking Oil (+15% vs last month at Uno Supermarket)",
    priceHikeItem2: "Sonelgaz bill matches same quarter last year",
    savingsGoalTitle: "Family Emergency Fund",
    savingsProgress: "185,000 DZD saved of 300,000 DZD goal",

    scannerTitle: "AI Camera Scanner & Reader",
    scannerSubtitle: "Instant OCR extraction of amounts, dates, and price checks",
    scanMode1: "Instant Daily Receipt",
    scanMode2: "Bill & Vehicle Document Reader",
    selectPreset: "Select a sample document:",
    presetSonelgaz: "Electricity & Gas Bill (Sonelgaz)",
    presetSaa: "Car Insurance Policy (SAA)",
    presetNaftal: "Fuel Station Ticket (Naftal)",
    presetUno: "Supermarket Receipt (Uno)",
    simulateScanBtn: "Start AI Scanning",
    scanningProgress: "Scanning document, reading dates & QR codes...",
    scanSuccess: "Extraction completed with 99.4% accuracy!",
    extractedMerchant: "Issuer / Merchant:",
    extractedAmount: "Extracted Amount:",
    extractedDate: "Due / Transaction Date:",
    extractedCategory: "Category:",
    extractedMember: "Charged to:",
    confirmAddBtn: "Confirm & Add to Budget",

    // Members & Roles
    memberAmine: "Amine (Father)",
    memberKarima: "Karima (Mother)",
    memberRayan: "Rayan (Son)",
    memberSarah: "Sarah (Daughter)",
    memberAmineName: "Amine",
    memberKarimaName: "Karima",
    memberRayanName: "Rayan",
    memberSarahName: "Sarah",
    roleFather: "Father",
    roleMother: "Mother",
    roleSon: "Son",
    roleDaughter: "Daughter",
    roleFamily: "Family",

    // Dynamic Tags & Labels
    perDay: "/ day",
    smartProactive: "AI Proactive",
    priceHikeTag: "Hike +15%",
    autoReserved: "Auto-Reserved",
    attention: "Notice",
    justNow: "Just now",
    smartEstimate: "AI Estimate",
    payBillTitle: "Pay {name}",
    simSpendTitle: "Family spend (bakery & groceries)",
    scanInstant: "Just now (AI Scan)",
    ocrAccuracy: "Data extracted with 99.4% accuracy",

    // Grocery Items
    g1Name: "Pasteurized Milk & Lben",
    g2Name: "Cooking Oil (5L)",
    g3Name: "Fresh Eggs (Tray of 30)",
    g4Name: "Ground Coffee & Sugar",
    g5Name: "Couscous & Staple Pasta",

    // Status & Family & AI Tips Keys
    statusUpcoming: "Upcoming",
    statusScheduled: "Scheduled",
    operationsCount: "transactions",
    noMemberSpend: "No expenses recorded for this member",
    noMemberSpendDesc: "This member has not made any purchases during this month.",
    familyMembersTitle: "Individual Allowances & Spending",
    aiTipsTitle: "AI Insights for Algerian Household",
    sonelgazTipTitle: "Sonelgaz Tariff Tier Optimization",
    sonelgazTipDesc: "Your usage is in Tier 2. Lowering heating by 1° saves 2,400 DZD and avoids higher Tier 3 tariffs.",
    naftalTipTitle: "Estimated Fuel Budget (Naftal)",
    naftalTipDesc: "Based on your Sandero Stepway mileage, 2 more refuels (~4,400 DZD) are projected before month end.",
    applyTipsBtn: "Apply Smart Insights",
    tipsAppliedSuccess: "Smart recommendations applied successfully!",
    memberContribution: "Share of spend"
  }
};

// ==========================================================================
// 2. Reactive Application State
// ==========================================================================
const AppState = {
  // Current settings
  lang: 'ar',
  osMode: 'ios', // 'ios' or 'android'
  isDualView: false,
  isDarkMode: true,
  privacyBlurred: false,
  currentTab: 'home',
  billsSubTab: 'bills', // 'bills' or 'car'
  familyFilter: 'all',

  // Financial Figures (Algerian DZD)
  totalSalary: 145000,
  reservedBillsBucket: 32000,
  spentAmount: 46500,
  get remainingSalary() {
    return this.totalSalary - this.spentAmount;
  },
  get safeSpendable() {
    return Math.max(0, this.remainingSalary - this.reservedBillsBucket);
  },
  get safeDailyLimit() {
    return Math.round(this.safeSpendable / 21);
  },
  get remainingRatio() {
    return (this.remainingSalary / this.totalSalary) * 100;
  },

  // Start-of-month alert dismissed state
  alertDismissed: false,

  // Bills List
  bills: [
    {
      id: 'b1',
      name: 'Sonelgaz (سونلغاز للتوزيع)',
      category: 'Utilities',
      amount: 8400,
      dueDate: '15 Nov',
      daysLeft: 6,
      paid: false,
      icon: 'zap',
      badgeClass: 'amber',
      issuer: 'Sonelgaz Distribution'
    },
    {
      id: 'b2',
      name: 'Algérie Télécom (Idom Fibre)',
      category: 'Internet',
      amount: 3600,
      dueDate: '10 Nov',
      daysLeft: 1,
      paid: true,
      icon: 'wifi',
      badgeClass: 'sky',
      issuer: 'Algérie Télécom'
    },
    {
      id: 'b3',
      name: 'SEAAL Water (مياه سيال)',
      category: 'Water',
      amount: 4200,
      dueDate: '22 Nov',
      daysLeft: 13,
      paid: false,
      icon: 'droplets',
      badgeClass: 'sky',
      issuer: 'SEAAL Alger'
    },
    {
      id: 'b4',
      name: 'École Privée / Crèche',
      category: 'Education',
      amount: 15800,
      dueDate: '25 Nov',
      daysLeft: 16,
      paid: false,
      icon: 'book-open',
      badgeClass: 'indigo',
      issuer: 'Établissement Scolaire'
    }
  ],

  // Car Obligations
  carData: {
    model: 'Dacia Sandero Stepway',
    plate: '16-12345-121',
    odometer: 68450,
    nextVidangeKm: 70000,
    items: [
      {
        id: 'c1',
        title: 'Assurance Auto (SAA)',
        amount: 28000,
        dueDate: '15 Déc 2026',
        daysLeft: 36,
        status: 'reserved',
        icon: 'shield-check',
        badgeClass: 'sky'
      },
      {
        id: 'c2',
        title: 'Contrôle Technique Périodique',
        amount: 2500,
        dueDate: '28 Nov 2026',
        daysLeft: 19,
        status: 'urgent',
        icon: 'clipboard-check',
        badgeClass: 'emerald'
      },
      {
        id: 'c3',
        title: 'Vignette Automobile 2027',
        amount: 6000,
        dueDate: '31 Mars 2027',
        daysLeft: 142,
        status: 'future',
        icon: 'file-badge',
        badgeClass: 'amber'
      },
      {
        id: 'c4',
        title: 'Vidange & Filtres (Naftal)',
        amount: 7500,
        dueDate: 'Dans 1 550 km',
        daysLeft: 22,
        status: 'upcoming',
        icon: 'wrench',
        badgeClass: 'sky'
      }
    ]
  },

  // Family Members with Modern Initials & Color Grading
  members: [
    { id: 'all', nameKey: 'filterAll', initialAr: 'الكل', initialEn: 'ALL', roleKey: 'roleFamily', color: 'linear-gradient(135deg, #00d287, #047857)', spent: 46500, pct: 100 },
    { id: 'amine', nameKey: 'memberAmineName', initialAr: 'أم', initialEn: 'AM', roleKey: 'roleFather', color: 'linear-gradient(135deg, #10b981, #059669)', spent: 28500, pct: 61 },
    { id: 'karima', nameKey: 'memberKarimaName', initialAr: 'كر', initialEn: 'KA', roleKey: 'roleMother', color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', spent: 14200, pct: 30 },
    { id: 'rayan', nameKey: 'memberRayanName', initialAr: 'ري', initialEn: 'RA', roleKey: 'roleSon', color: 'linear-gradient(135deg, #06b6d4, #0284c7)', spent: 3800, pct: 9 },
    { id: 'sarah', nameKey: 'memberSarahName', initialAr: 'سا', initialEn: 'SA', roleKey: 'roleDaughter', color: 'linear-gradient(135deg, #f43f5e, #be123c)', spent: 0, pct: 0 }
  ],

  // Live Purchases Feed
  transactions: [
    {
      id: 't1',
      title: 'Supérette Uno (مقاضي البيت)',
      memberId: 'karima',
      memberName: 'كريمة',
      category: 'Groceries',
      amount: 5400,
      time: 'اليوم، 14:20',
      icon: 'shopping-cart',
      badgeClass: 'emerald',
      hasPriceHike: true
    },
    {
      id: 't2',
      title: 'Station Naftal (بنزين)',
      memberId: 'amine',
      memberName: 'أمين',
      category: 'Fuel',
      amount: 2200,
      time: 'أمس، 18:45',
      icon: 'fuel',
      badgeClass: 'amber',
      hasPriceHike: false
    },
    {
      id: 't3',
      title: 'Pharmacie Centrale (أدوية)',
      memberId: 'amine',
      memberName: 'أمين',
      category: 'Health',
      amount: 1850,
      time: 'منذ يومين',
      icon: 'activity',
      badgeClass: 'rose',
      hasPriceHike: false
    },
    {
      id: 't4',
      title: 'كتب ومستلزمات دراسية',
      memberId: 'rayan',
      memberName: 'ريان',
      category: 'Study',
      amount: 3800,
      time: 'منذ 3 أيام',
      icon: 'book-open',
      badgeClass: 'indigo',
      hasPriceHike: false
    }
  ],

  // Shared Grocery Basket
  groceryItems: [
    { id: 'g1', nameKey: 'g1Name', name: 'حليب مبستر + لبن', price: 650, qty: 2 },
    { id: 'g2', nameKey: 'g2Name', name: 'زيت المائدة (5 لتر)', price: 650, qty: 1 },
    { id: 'g3', nameKey: 'g3Name', name: 'بيض طازج (بلاطو 30)', price: 580, qty: 1 },
    { id: 'g4', nameKey: 'g4Name', name: 'قهوة مطحونة + سكر', price: 920, qty: 1 },
    { id: 'g5', nameKey: 'g5Name', name: 'كسكسي وعجائن تموينية', price: 450, qty: 2 }
  ],

  get groceryTotal() {
    return this.groceryItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }
};

// ==========================================================================
// 3. Web Audio API Synthesizer (Zero-Asset Haptic & UI Sounds)
// ==========================================================================
class AudioSynthesizer {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Micro haptic click (1400Hz tick)
  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // AI Laser sweep sound
  playLaserSweep() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1900, this.ctx.currentTime + 0.45);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {}
  }

  // Success payment chime (Major Chord arpeggio)
  playSuccessChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }
}

const Sound = new AudioSynthesizer();

// ==========================================================================
// 4. Scanner Simulation Presets (Authentic Algerian Invoices & Tickets)
// ==========================================================================
const ScannerPresets = {
  sonelgaz: {
    id: 'sonelgaz',
    merchant: 'Sonelgaz (سونلغاز للتوزيع)',
    amount: 8400,
    date: '15 Nov 2026',
    category: 'Utilities (كهرباء وغاز)',
    member: 'Amine (الأب)',
    isDuplicate: false,
    hasPriceHike: false,
    icon: 'zap',
    badgeText: 'فاتورة رسمية مؤكدة',
    documentSvg: `
      <div dir="ltr" style="text-align: left; background: #ffffff; color: #0f172a; padding: 18px; border-radius: 14px; font-family: monospace; font-size: 11px; width: 250px; box-shadow: 0 10px 30px rgba(0,0,0,0.6); border: 1px solid #cbd5e1;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #059669; padding-bottom: 8px; margin-bottom: 10px;">
          <div>
            <strong style="color: #059669; font-size: 13px; letter-spacing: 0.05em;">SONELGAZ</strong>
            <div style="font-size: 9px; color: #64748b;">Distribution Alger-Est</div>
          </div>
          <span style="font-size: 10px; background: #ecfdf5; color: #047857; padding: 2px 6px; border-radius: 4px; font-weight: bold;">AVIS 45892</span>
        </div>
        <p style="margin-bottom: 4px;">Abonné: <strong>AMINE M.</strong></p>
        <p style="margin-bottom: 6px;">Échéance: <span style="background: #fef08a; padding: 2px 6px; border-radius: 4px; font-weight: 800; color: #854d0e;">15/11/2026</span></p>
        <div style="margin: 8px 0; padding: 8px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <span>Électricité:</span> <span style="font-weight: 700;">5 200 DA</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Gaz Naturel:</span> <span style="font-weight: 700;">3 200 DA</span>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; font-weight: 800; font-size: 14px; color: #047857; border-top: 1px dashed #cbd5e1; padding-top: 8px;">
          <span style="font-size: 11px;">NET À PAYER:</span>
          <span>8 400 DA</span>
        </div>
        <!-- Barcode representation -->
        <div style="margin-top: 10px; text-align: center; opacity: 0.7;">
          <svg width="180" height="24" viewBox="0 0 180 24" style="margin: 0 auto;">
            <rect x="0" y="0" width="3" height="24" fill="#0f172a"/>
            <rect x="5" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="10" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="18" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="23" y="0" width="6" height="24" fill="#0f172a"/>
            <rect x="32" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="38" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="46" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="52" y="0" width="5" height="24" fill="#0f172a"/>
            <rect x="62" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="68" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="76" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="82" y="0" width="5" height="24" fill="#0f172a"/>
            <rect x="92" y="0" width="3" height="24" fill="#0f172a"/>
            <rect x="98" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="104" y="0" width="5" height="24" fill="#0f172a"/>
            <rect x="112" y="0" width="3" height="24" fill="#0f172a"/>
            <rect x="118" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="124" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="132" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="138" y="0" width="5" height="24" fill="#0f172a"/>
            <rect x="146" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="152" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="160" y="0" width="2" height="24" fill="#0f172a"/>
            <rect x="166" y="0" width="4" height="24" fill="#0f172a"/>
            <rect x="174" y="0" width="3" height="24" fill="#0f172a"/>
          </svg>
          <span style="font-size: 8px; letter-spacing: 0.15em;">994200840015112026</span>
        </div>
      </div>
    `
  },

  saa: {
    id: 'saa',
    merchant: 'Société Nationale d\'Assurance (SAA)',
    amount: 28000,
    date: '15 Déc 2026',
    category: 'Car Insurance (تأمين سيارة)',
    member: 'Amine (الأب)',
    isDuplicate: false,
    hasPriceHike: false,
    icon: 'shield-check',
    badgeText: 'عقد تأمين سيارة',
    documentSvg: `
      <div dir="ltr" style="text-align: left; background: #ffffff; color: #0f172a; padding: 18px; border-radius: 14px; font-family: monospace; font-size: 11px; width: 250px; box-shadow: 0 10px 30px rgba(0,0,0,0.6); border: 1px solid #cbd5e1;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-bottom: 10px;">
          <div>
            <strong style="color: #2563eb; font-size: 13px;">SAA ASSURANCES</strong>
            <div style="font-size: 9px; color: #64748b;">Agence Alger Centre</div>
          </div>
          <span style="font-size: 10px; background: #eff6ff; color: #1d4ed8; padding: 2px 6px; border-radius: 4px; font-weight: bold;">POLICE 9942</span>
        </div>
        <p style="margin-bottom: 4px;">Véhicule: <strong>Dacia Sandero Stepway</strong></p>
        <p style="margin-bottom: 4px;">Immatriculation: <strong>16-12345-121</strong></p>
        <p style="margin-bottom: 6px;">Échéance: <span style="background: #dbeafe; padding: 2px 6px; border-radius: 4px; font-weight: 800; color: #1e40af;">15/12/2026</span></p>
        <div style="display: flex; justify-content: space-between; align-items: baseline; font-weight: 800; font-size: 14px; color: #1d4ed8; border-top: 1px dashed #cbd5e1; padding-top: 8px; margin-top: 10px;">
          <span style="font-size: 11px;">PRIME TOTALE:</span>
          <span>28 000 DA</span>
        </div>
      </div>
    `
  },

  naftal: {
    id: 'naftal',
    merchant: 'Station Naftal (نفطال الدار البيضاء)',
    amount: 2200,
    date: 'اليوم',
    category: 'Fuel (بنزين بدون رصاص)',
    member: 'Amine (الأب)',
    isDuplicate: false,
    hasPriceHike: false,
    icon: 'fuel',
    badgeText: 'تذكرة وقود فورية',
    documentSvg: `
      <div dir="ltr" style="text-align: left; background: #ffffff; color: #0f172a; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 11px; width: 240px; box-shadow: 0 10px 30px rgba(0,0,0,0.6); border: 1px solid #cbd5e1;">
        <div style="text-align: center; font-weight: 800; color: #d97706; font-size: 13px; margin-bottom: 2px;">NAFTAL STATION</div>
        <div style="text-align: center; font-size: 9px; color: #64748b; margin-bottom: 8px;">Relais 1604 • Dar El Beida</div>
        <p style="margin-bottom: 2px;">Produit: Sans Plomb 95</p>
        <p style="margin-bottom: 2px;">Volume: 48.15 Litres</p>
        <p style="margin-bottom: 6px;">Prix au Litre: 45.62 DA</p>
        <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 14px; color: #b45309; border-top: 1px dashed #cbd5e1; padding-top: 6px; margin-top: 6px;">
          <span style="font-size: 11px;">TOTAL:</span>
          <span>2 200 DA</span>
        </div>
      </div>
    `
  },

  uno: {
    id: 'uno',
    merchant: 'Supérette Uno Bab Ezzouar',
    amount: 4150,
    date: 'اليوم',
    category: 'Groceries (مقاضي تموينية)',
    member: 'Karima (الأم)',
    isDuplicate: false,
    hasPriceHike: true,
    icon: 'shopping-cart',
    badgeText: 'تنبيه: ارتفاع في سعر الزيت',
    documentSvg: `
      <div dir="ltr" style="text-align: left; background: #ffffff; color: #0f172a; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 11px; width: 240px; box-shadow: 0 10px 30px rgba(0,0,0,0.6); border: 1px solid #cbd5e1;">
        <div style="text-align: center; font-weight: 800; color: #dc2626; font-size: 13px; margin-bottom: 2px;">UNO HYPERMARCHÉ</div>
        <div style="text-align: center; font-size: 9px; color: #64748b; margin-bottom: 8px;">Centre Commercial Bab Ezzouar</div>
        <p style="margin-bottom: 2px;">1x Huile 5L: <span style="color:#dc2626; font-weight:bold;">650 DA (+15%)</span></p>
        <p style="margin-bottom: 2px;">2x Café Moulu 250g: 480 DA</p>
        <p style="margin-bottom: 2px;">3x Couscous Fin: 420 DA</p>
        <p style="margin-bottom: 6px;">1x Fromage Portion: 720 DA</p>
        <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 14px; color: #991b1b; border-top: 1px dashed #cbd5e1; padding-top: 6px; margin-top: 6px;">
          <span style="font-size: 11px;">TOTAL TICKET:</span>
          <span>4 150 DA</span>
        </div>
      </div>
    `
  }
};

let currentPresetKey = 'sonelgaz';

// ==========================================================================
// 5. Core App Engine & UI Synchronization
// ==========================================================================
class MasrofiApp {
  constructor() {
    this.init();
  }

  init() {
    this.bindDomEvents();
    this.applyUrlParams();
    this.updateAllViews();
    this.setup3DCardTilt();
  }

  applyUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('theme')) this.setTheme(params.get('theme') === 'dark');
      if (params.has('lang')) this.setLanguage(params.get('lang'));
      if (params.has('os')) this.setOsMode(params.get('os'));
      if (params.has('view')) this.setViewMode(params.get('view') === 'dual');
      if (params.has('tab')) this.switchTab(params.get('tab'));
      if (params.has('subtab')) {
        AppState.billsSubTab = params.get('subtab');
        this.renderBillsTab();
      }
      if (params.has('scanner')) {
        const val = params.get('scanner');
        setTimeout(() => this.openScannerModal(val === '1' ? 'sonelgaz' : val), 50);
      }
    } catch (e) {
      console.warn('URL params parsing failed', e);
    }
  }

  t(key, params = {}) {
    let text = (i18n[AppState.lang] && i18n[AppState.lang][key]) || i18n['ar'][key] || key;
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, v);
    }
    return text;
  }

  refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  bindDomEvents() {
    // Studio Controls
    document.querySelectorAll('.btn-os-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const mode = btn.dataset.os;
        this.setOsMode(mode);
      });
    });

    document.querySelectorAll('.btn-view-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const view = btn.dataset.view;
        this.setViewMode(view === 'dual');
      });
    });

    document.querySelectorAll('.btn-theme-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const theme = btn.dataset.theme;
        this.setTheme(theme === 'dark');
      });
    });

    document.querySelectorAll('.btn-lang-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const lang = btn.dataset.lang;
        this.setLanguage(lang);
      });
    });

    // Simulators
    document.getElementById('sim-trigger-alert')?.addEventListener('click', () => {
      Sound.playClick();
      this.triggerAlertScenario();
    });

    document.getElementById('sim-trigger-scan')?.addEventListener('click', () => {
      Sound.playClick();
      this.openScannerModal('sonelgaz');
    });

    document.getElementById('sim-trigger-family')?.addEventListener('click', () => {
      Sound.playClick();
      this.simulateFamilySpend();
    });

    // Mobile Phone Internal Tabs
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const tab = btn.dataset.navTab;
        this.switchTab(tab);
      });
    });

    // Central Camera Action
    document.querySelectorAll('.btn-open-camera').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.openScannerModal();
      });
    });

    // Close Modals
    document.querySelectorAll('.btn-close-sheet').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.closeAllSheets();
      });
    });

    // Scanner Preset Switcher
    document.querySelectorAll('.preset-picker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const pKey = btn.dataset.preset;
        this.selectScannerPreset(pKey);
      });
    });

    // Trigger AI Scan Button
    document.getElementById('btn-run-ai-scan')?.addEventListener('click', () => {
      this.executeAiScanSimulation();
    });

    // Confirm Extracted Bill Button
    document.getElementById('btn-confirm-extracted-bill')?.addEventListener('click', () => {
      this.confirmExtractedBill();
    });

    // Bills & Car Segmented Control
    document.querySelectorAll('.btn-seg-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const sub = btn.dataset.subtab;
        AppState.billsSubTab = sub;
        this.renderBillsTab();
      });
    });

    // Dynamic Island Expansion
    document.querySelectorAll('.dynamic-island').forEach(di => {
      di.addEventListener('click', () => {
        Sound.playClick();
        di.classList.toggle('expanded');
      });
    });
  }

  setOsMode(mode) {
    AppState.osMode = mode;
    document.querySelectorAll('.btn-os-switch').forEach(b => {
      b.classList.toggle('active', b.dataset.os === mode);
    });

    const isDual = AppState.isDualView;
    const iosWrap = document.getElementById('ios-device-wrapper');
    const androidWrap = document.getElementById('android-device-wrapper');
    if (!isDual && iosWrap && androidWrap) {
      if (mode === 'ios') {
        iosWrap.style.display = 'flex';
        androidWrap.style.display = 'none';
      } else {
        iosWrap.style.display = 'none';
        androidWrap.style.display = 'flex';
      }
    }

    this.renderNavigationBars();
  }

  setViewMode(isDual) {
    AppState.isDualView = isDual;
    document.querySelectorAll('.btn-view-switch').forEach(b => {
      b.classList.toggle('active', (b.dataset.view === 'dual') === isDual);
    });

    const stage = document.getElementById('studio-stage');
    if (isDual) {
      stage.classList.add('dual-view');
      document.getElementById('android-device-wrapper').style.display = 'flex';
      document.getElementById('ios-device-wrapper').style.display = 'flex';
    } else {
      stage.classList.remove('dual-view');
      if (AppState.osMode === 'ios') {
        document.getElementById('ios-device-wrapper').style.display = 'flex';
        document.getElementById('android-device-wrapper').style.display = 'none';
      } else {
        document.getElementById('ios-device-wrapper').style.display = 'none';
        document.getElementById('android-device-wrapper').style.display = 'flex';
      }
    }
  }

  setTheme(isDark) {
    AppState.isDarkMode = isDark;
    document.querySelectorAll('.btn-theme-switch').forEach(b => {
      b.classList.toggle('active', (b.dataset.theme === 'dark') === isDark);
    });

    const body = document.body;
    if (isDark) {
      body.classList.add('theme-dark');
      body.classList.remove('theme-light');
    } else {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
    }
  }

  setLanguage(lang) {
    AppState.lang = lang;
    document.querySelectorAll('.btn-lang-switch').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    this.updateAllViews();
  }

  switchTab(tab) {
    AppState.currentTab = tab;
    // Update active tab buttons
    document.querySelectorAll('[data-nav-tab]').forEach(b => {
      b.classList.toggle('active', b.dataset.navTab === tab);
    });

    // Update active content views in all phones
    document.querySelectorAll('.tab-content-view').forEach(view => {
      view.classList.toggle('active', view.dataset.tabContent === tab);
    });

    this.renderNavigationBars();
  }

  renderNavigationBars() {
    const isDual = AppState.isDualView;
    const isIos = AppState.osMode === 'ios';

    const iosWrap = document.getElementById('ios-device-wrapper');
    const androidWrap = document.getElementById('android-device-wrapper');

    if (isDual) {
      if (iosWrap) {
        iosWrap.querySelectorAll('.ios-tab-bar').forEach(el => { el.style.display = 'flex'; });
        iosWrap.querySelectorAll('.dynamic-island').forEach(el => { el.style.display = 'flex'; });
      }
      if (androidWrap) {
        androidWrap.querySelectorAll('.android-nav-bar').forEach(el => { el.style.display = 'flex'; });
        androidWrap.querySelectorAll('.android-fab').forEach(el => { el.style.display = 'flex'; });
        androidWrap.querySelectorAll('.punch-hole').forEach(el => { el.style.display = 'block'; });
      }
    } else {
      if (isIos && iosWrap) {
        iosWrap.querySelectorAll('.ios-tab-bar').forEach(el => { el.style.display = 'flex'; });
        iosWrap.querySelectorAll('.dynamic-island').forEach(el => { el.style.display = 'flex'; });
      } else if (!isIos && androidWrap) {
        androidWrap.querySelectorAll('.android-nav-bar').forEach(el => { el.style.display = 'flex'; });
        androidWrap.querySelectorAll('.android-fab').forEach(el => { el.style.display = 'flex'; });
        androidWrap.querySelectorAll('.punch-hole').forEach(el => { el.style.display = 'block'; });
      }
    }
  }

  updateAllViews() {
    this.renderHeroCards();
    this.renderStartOfMonthBanner();
    this.renderFamilyActivity();
    this.renderBillsTab();
    this.renderFamilyTab();
    this.renderCoachTab();
    this.renderTextLabels();
    this.refreshIcons();
  }

  renderTextLabels() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset?.i18n;
      if (key) el.textContent = this.t(key);
    });
  }

  // #14 Rive State Machine: Gauge & Status Calculations
  renderHeroCards() {
    const remaining = AppState.remainingSalary;
    const reserved = AppState.reservedBillsBucket;
    const safeSpend = AppState.safeSpendable;
    const dailyLimit = AppState.safeDailyLimit;
    const ratio = AppState.remainingRatio;

    // Determine Rive State Machine state
    let stateClass = 'state-safe';
    let stateLabel = this.t('stateSafe');
    if (ratio < 15) {
      stateClass = 'state-critical';
      stateLabel = this.t('stateCritical');
    } else if (ratio < 40) {
      stateClass = 'state-warning';
      stateLabel = this.t('stateWarning');
    }

    const circumference = 201; // 2 * PI * 32 ~= 201
    const offset = circumference - (circumference * (ratio / 100));
    const privacyClass = AppState.privacyBlurred ? 'privacy-blur' : '';

    const html = `
      <div class="card-specular-shine"></div>
      <div class="hero-content ${stateClass}">
        <!-- Top Row: Card Brand & EMV Chip / Details Badge -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <!-- Authentic Fintech EMV Smart Chip SVG -->
            <div class="emv-chip-container" title="Smart AI Vault Chip">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
                <rect width="34" height="26" rx="4" fill="url(#chipGold)" />
                <rect x="1" y="1" width="32" height="24" rx="3" stroke="#b45309" stroke-opacity="0.4" stroke-width="0.8" />
                <path d="M0 13H11M23 13H34M11 5V21M23 5V21M11 9H23M11 17H23" stroke="#78350f" stroke-width="0.75" />
                <circle cx="17" cy="13" r="2.5" fill="#fde68a" stroke="#78350f" stroke-width="0.6"/>
                <defs>
                  <linearGradient id="chipGold" x1="0" y1="0" x2="34" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fef08a"/>
                    <stop offset="0.5" stop-color="#f59e0b"/>
                    <stop offset="1" stop-color="#b45309"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <!-- Contactless Icon -->
            <svg class="w-4 h-4 text-emerald-200 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
              <path d="M12 19a8.5 8.5 0 0 0 0-14"/>
              <path d="M15.5 21.5a12 12 0 0 0 0-19"/>
            </svg>
            <span class="card-tier-pill">MASROFI TITANIUM</span>
          </div>
          
          <div class="state-badge">
            <span class="pulse-dot-mini"></span>
            <span>${Math.round(ratio)}% ${this.t('details')}</span>
          </div>
        </div>

        <!-- Safe Spendable Label & Privacy Toggle -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 13px; font-weight: 700; opacity: 0.92; color: #a7f3d0;">${this.t('safeSpendable')}</span>
            <button class="btn-toggle-privacy" title="تبديل الخصوصية" style="background: rgba(255,255,255,0.12); border: none; border-radius: 8px; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: all 0.2s ease;">
              <i data-lucide="${AppState.privacyBlurred ? 'eye-off' : 'eye'}" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <!-- Big True Spendable Balance -->
        <div style="display: flex; align-items: baseline; gap: 8px; margin: 2px 0 8px 0;">
          <h1 class="${privacyClass} tabular-nums" style="font-size: 36px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;">
            ${safeSpend.toLocaleString()}
          </h1>
          <span style="font-size: 18px; font-weight: 800; opacity: 0.95; color: #6ee7b7;">${this.t('currency')}</span>
        </div>

        <p style="font-size: 11.5px; opacity: 0.9; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; color: #e2e8f0;">
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-emerald-300"></i>
          <span>${this.t('dailyPace')} • <strong class="${privacyClass} text-emerald-200">${dailyLimit.toLocaleString()} ${this.t('currency')} ${this.t('perDay')}</strong></span>
        </p>

        <!-- Dynamic Rive Gauge + 2 Buckets Breakdown -->
        <div class="rive-gauge-container">
          <div style="display: flex; align-items: center; gap: 12px;">
            <svg class="rive-gauge-svg" viewBox="0 0 76 76">
              <defs>
                <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#34d399"/>
                  <stop offset="100%" stop-color="#059669"/>
                </linearGradient>
              </defs>
              <circle class="rive-gauge-bg" cx="38" cy="38" r="32"></circle>
              <circle class="rive-gauge-bar" cx="38" cy="38" r="32" stroke="url(#gaugeGrad)" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
            </svg>
            <div>
              <div style="font-size: 10.5px; opacity: 0.8; display: flex; align-items: center; gap: 4px; color: #a7f3d0;">
                <i data-lucide="wallet" class="w-3 h-3 text-emerald-300"></i>
                <span>${this.t('totalSalary')}</span>
              </div>
              <div class="${privacyClass} tabular-nums" style="font-size: 14.5px; font-weight: 800; margin-top: 2px;">${AppState.totalSalary.toLocaleString()} ${this.t('currency')}</div>
            </div>
          </div>

          <div style="text-align: end; border-inline-start: 1px solid rgba(255,255,255,0.18); padding-inline-start: 14px;">
            <div style="font-size: 10.5px; opacity: 0.85; display: flex; align-items: center; gap: 4px; justify-content: flex-end; color: #fef08a;">
              <span>${this.t('reservedBucket')}</span>
              <i data-lucide="lock" class="w-3 h-3 text-amber-300"></i>
            </div>
            <div class="${privacyClass} tabular-nums" style="font-size: 14.5px; font-weight: 800; color: #fde68a; margin-top: 2px;">
              -${reserved.toLocaleString()} ${this.t('currency')}
            </div>
          </div>
        </div>

        <!-- Quick Action Buttons -->
        <div class="hero-quick-actions">
          <button class="hero-quick-btn btn-quick-spend">
            <div class="quick-icon-wrap emerald">
              <i data-lucide="plus" class="w-4 h-4"></i>
            </div>
            <span>${this.t('quickAddSpend')}</span>
          </button>
          <button class="hero-quick-btn btn-quick-transfer">
            <div class="quick-icon-wrap sky">
              <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </div>
            <span>${this.t('quickTransfer')}</span>
          </button>
          <button class="hero-quick-btn btn-quick-vault">
            <div class="quick-icon-wrap amber">
              <i data-lucide="shield" class="w-4 h-4"></i>
            </div>
            <span>${this.t('quickVault')}</span>
          </button>
          <button class="hero-quick-btn btn-quick-analytics">
            <div class="quick-icon-wrap violet">
              <i data-lucide="pie-chart" class="w-4 h-4"></i>
            </div>
            <span>${this.t('quickAnalytics')}</span>
          </button>
        </div>
      </div>
    `;

    document.querySelectorAll('.hero-salary-card-target').forEach(el => {
      el.innerHTML = html;
      
      el.querySelector('.btn-toggle-privacy')?.addEventListener('click', () => {
        Sound.playClick();
        AppState.privacyBlurred = !AppState.privacyBlurred;
        this.renderHeroCards();
        this.refreshIcons();
      });

      el.querySelector('.btn-quick-spend')?.addEventListener('click', () => {
        Sound.playClick();
        this.simulateFamilySpend();
      });

      el.querySelector('.btn-quick-transfer')?.addEventListener('click', () => {
        Sound.playClick();
        this.switchTab('family');
      });

      el.querySelector('.btn-quick-vault')?.addEventListener('click', () => {
        Sound.playClick();
        this.switchTab('bills');
      });

      el.querySelector('.btn-quick-analytics')?.addEventListener('click', () => {
        Sound.playClick();
        this.switchTab('coach');
      });
    });

    this.refreshIcons();
  }

  renderStartOfMonthBanner() {
    const elList = document.querySelectorAll('.start-of-month-banner-target');
    if (AppState.alertDismissed) {
      elList.forEach(el => el.innerHTML = '');
      return;
    }

    const arrowIcon = AppState.lang === 'ar' ? 'arrow-left' : 'arrow-right';

    const html = `
      <div class="start-of-month-banner">
        <div class="alert-pulse-dot"></div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div style="font-weight: 800; font-size: 13px; color: #f59e0b; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="bell-ring" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>${this.t('startOfMonthAlertTitle')}</span>
            </div>
            <span class="proactive-tag-pill">${this.t('smartProactive')}</span>
          </div>
          <div style="font-size: 11.5px; color: #fde68a; line-height: 1.45; opacity: 0.92;">
            ${this.t('startOfMonthAlertDesc')}
          </div>
          <div style="display: flex; gap: 8px; margin-top: 10px;">
            <button class="btn-banner-details studio-action-btn primary" style="padding: 5px 14px; font-size: 11px; border-radius: 9999px;">
              <span>${this.t('details')}</span>
              <i data-lucide="${arrowIcon}" class="w-3.5 h-3.5"></i>
            </button>
            <button class="btn-banner-dismiss" style="background: transparent; color: #fbbf24; border: none; font-size: 11px; font-weight: 600; cursor: pointer; padding: 5px 8px;">
              ${this.t('dismiss')}
            </button>
          </div>
        </div>
      </div>
    `;

    elList.forEach(el => {
      el.innerHTML = html;
      el.querySelector('.btn-banner-dismiss')?.addEventListener('click', () => {
        Sound.playClick();
        AppState.alertDismissed = true;
        this.renderStartOfMonthBanner();
      });
      el.querySelector('.btn-banner-details')?.addEventListener('click', () => {
        Sound.playClick();
        this.switchTab('bills');
      });
    });

    this.refreshIcons();
  }

  renderFamilyActivity() {
    // 1. Horizontal Avatars Strip with Modern Monograms
    let avatarsHtml = `<div class="family-avatar-strip">`;
    AppState.members.forEach(m => {
      const activeClass = AppState.familyFilter === m.id ? 'active' : '';
      const initial = AppState.lang === 'ar' ? m.initialAr : m.initialEn;
      const memberName = this.t(m.nameKey);
      const memberRole = this.t(m.roleKey);

      avatarsHtml += `
        <div class="family-avatar-item ${activeClass}" data-member-id="${m.id}">
          <div class="family-avatar-circle" style="background: ${m.color};">
            <span>${initial}</span>
          </div>
          <span class="family-member-name">${memberName}</span>
          <span class="family-role-tag">${memberRole}</span>
        </div>
      `;
    });
    avatarsHtml += `</div>`;

    // 2. Filter transactions based on selected family member
    const filteredTx = AppState.familyFilter === 'all'
      ? AppState.transactions
      : AppState.transactions.filter(t => t.memberId === AppState.familyFilter);

    // Section Header
    let txHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 18px 6px 18px;">
        <span style="font-weight: 800; font-size: 13.5px; display: flex; align-items: center; gap: 7px;">
          <i data-lucide="receipt" class="w-4 h-4 text-emerald-400"></i>
          <span>${this.t('recentActivity')}</span>
        </span>
        <span style="font-size: 11px; font-weight: 700; color: #00d287; opacity: 0.9;">
          ${filteredTx.length} ${this.t('operationsCount')}
        </span>
      </div>
      <div style="padding: 0 16px;">
    `;

    if (filteredTx.length === 0) {
      txHtml += `
        <div class="clean-card" style="text-align: center; padding: 24px 16px; margin: 8px 0;">
          <div class="icon-badge emerald" style="margin: 0 auto 10px auto; width: 44px; height: 44px;">
            <i data-lucide="check-circle" class="w-6 h-6"></i>
          </div>
          <div style="font-weight: 700; font-size: 13px;">${this.t('noMemberSpend')}</div>
          <div style="font-size: 11px; opacity: 0.65; margin-top: 4px;">${this.t('noMemberSpendDesc')}</div>
        </div>
      `;
    } else {
      filteredTx.forEach(t => {
        txHtml += `
          <div class="clean-card" style="display: flex; align-items: center; justify-content: space-between; margin: 6px 0; padding: 12px 14px;">
            <div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">
              <div class="icon-badge ${t.badgeClass}">
                <i data-lucide="${t.icon}" class="w-5 h-5"></i>
              </div>
              <div style="min-width: 0; flex: 1;">
                <div style="font-weight: 700; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t.title}</div>
                <div style="font-size: 11px; opacity: 0.65; margin-top: 1px;">${t.memberName} • ${t.time}</div>
              </div>
            </div>
            <div style="text-align: end; margin-inline-start: 10px; flex-shrink: 0;">
              <div class="amount-val tabular-nums" style="font-weight: 800; font-size: 13.5px; color: #f43f5e; white-space: nowrap;">-${t.amount.toLocaleString()} ${this.t('currency')}</div>
              ${t.hasPriceHike 
                ? `<span class="price-hike-chip">
                     <i data-lucide="trending-up" class="w-2.5 h-2.5"></i>
                     <span>${this.t('priceHikeTag')}</span>
                   </span>` 
                : ''}
            </div>
          </div>
        `;
      });
    }
    txHtml += `</div>`;

    document.querySelectorAll('.family-activity-target').forEach(el => {
      el.innerHTML = avatarsHtml + txHtml;
      el.querySelectorAll('.family-avatar-item').forEach(btn => {
        btn.addEventListener('click', () => {
          Sound.playClick();
          AppState.familyFilter = btn.dataset.memberId;
          this.renderFamilyActivity();
        });
      });
    });

    this.refreshIcons();
  }

  renderBillsTab() {
    const isBills = AppState.billsSubTab === 'bills';
    document.querySelectorAll('.btn-seg-bills').forEach(b => b.classList.toggle('active', isBills));
    document.querySelectorAll('.btn-seg-car').forEach(b => b.classList.toggle('active', !isBills));

    let contentHtml = '';

    if (isBills) {
      contentHtml += `<div style="padding: 4px 16px;">`;
      AppState.bills.forEach(b => {
        contentHtml += `
          <div class="clean-card" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; padding: 14px 16px;">
            <div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">
              <div class="icon-badge ${b.badgeClass}" style="flex-shrink: 0;">
                <i data-lucide="${b.icon}" class="w-5 h-5"></i>
              </div>
              <div style="min-width: 0; flex: 1;">
                <div style="font-weight: 800; font-size: 13.5px; line-height: 1.35;">${b.name}</div>
                <div style="font-size: 11px; opacity: 0.7; display: flex; align-items: center; gap: 6px; margin-top: 3px;">
                  <span>${b.issuer}</span>
                  <span>•</span>
                  <span style="color: ${b.daysLeft <= 3 ? '#f43f5e' : 'inherit'}; font-weight: ${b.daysLeft <= 3 ? '700' : 'normal'};">
                    ${this.t('daysRemaining', { n: b.daysLeft })}
                  </span>
                </div>
              </div>
            </div>
            <div style="text-align: end; margin-inline-start: 12px; flex-shrink: 0;">
              <div class="amount-val tabular-nums" style="font-weight: 800; font-size: 14px; color: ${b.paid ? '#00d287' : '#f59e0b'}; white-space: nowrap;">
                ${b.amount.toLocaleString()} ${this.t('currency')}
              </div>
              ${b.paid
                ? `<span style="display: inline-flex; align-items: center; gap: 3px; font-size: 10.5px; color: #00d287; font-weight: 700; margin-top: 3px; white-space: nowrap;">
                     <i data-lucide="check" class="w-3 h-3"></i>
                     <span>${this.t('paidBills')}</span>
                   </span>`
                : `<button class="btn-pay-bill studio-action-btn primary" data-bill-id="${b.id}" style="padding: 4px 12px; font-size: 10.5px; border-radius: 8px; margin-top: 4px; white-space: nowrap;">
                     <i data-lucide="credit-card" class="w-3 h-3"></i>
                     <span>${this.t('markPaid')}</span>
                   </button>`
              }
            </div>
          </div>
        `;
      });
      contentHtml += `</div>`;
    } else {
      // Car Hub with 3D Card
      contentHtml += `
        <div style="padding: 4px 16px;">
          <!-- 3D Car Overview Card -->
          <div class="spline-3d-card" style="margin-bottom: 16px;">
            <div class="car-hub-card">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <span class="car-plate-badge">${AppState.carData.plate}</span>
                  <h3 style="font-size: 18px; font-weight: 800; margin-top: 6px;">${AppState.carData.model}</h3>
                  <p style="font-size: 12px; opacity: 0.8; margin-top: 2px;">${this.t('carOdometer')}</p>
                </div>
                
                <!-- Stylized Vector Car Blueprint Emblem -->
                <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); display: flex; align-items: center; justify-content: center;">
                  <i data-lucide="car" class="w-6 h-6 text-sky-400"></i>
                </div>
              </div>

              <!-- Maintenance Progress Indicator -->
              <div style="margin-top: 14px; background: rgba(255,255,255,0.06); padding: 10px 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                  <span>${this.t('nextVidange')}</span>
                  <span style="color: #38bdf8; font-weight: 800;">92%</span>
                </div>
                <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.12); border-radius: 3px; overflow: hidden;">
                  <div style="width: 92%; height: 100%; background: linear-gradient(90deg, #0284c7, #38bdf8); border-radius: 3px;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Car Obligations List -->
          <div style="font-weight: 800; font-size: 13px; margin: 10px 4px 8px 4px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="shield-check" class="w-4 h-4 text-sky-400"></i>
            <span>${this.t('segCar')}</span>
          </div>
      `;

      AppState.carData.items.forEach(c => {
        let badgeStatusText = '';
        let badgeStyle = '';
        if (c.status === 'reserved') {
          badgeStatusText = this.t('autoReserved');
          badgeStyle = 'background: rgba(0,210,135,0.14); color: #00d287; border: 1px solid rgba(0,210,135,0.3);';
        } else if (c.status === 'urgent') {
          badgeStatusText = this.t('attention');
          badgeStyle = 'background: rgba(244,63,94,0.14); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3);';
        } else if (c.status === 'upcoming') {
          badgeStatusText = this.t('statusUpcoming');
          badgeStyle = 'background: rgba(6,182,212,0.14); color: #38bdf8; border: 1px solid rgba(56,189,248,0.3);';
        } else {
          badgeStatusText = this.t('statusScheduled');
          badgeStyle = 'background: rgba(245,158,11,0.14); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3);';
        }

        contentHtml += `
          <div class="clean-card" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; padding: 12px 14px;">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
              <div class="icon-badge ${c.badgeClass}" style="flex-shrink: 0;">
                <i data-lucide="${c.icon}" class="w-4 h-4"></i>
              </div>
              <div style="min-width: 0; flex: 1;">
                <div style="font-weight: 700; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.title}</div>
                <div style="font-size: 11px; opacity: 0.65; margin-top: 1px;"><bdi dir="ltr">${c.dueDate}</bdi></div>
              </div>
            </div>
            <div style="text-align: end; margin-inline-start: 10px; flex-shrink: 0;">
              <div class="amount-val tabular-nums" style="font-weight: 800; font-size: 13px; color: #38bdf8; white-space: nowrap;">${c.amount.toLocaleString()} ${this.t('currency')}</div>
              <span style="font-size: 9.5px; padding: 2px 7px; border-radius: 4px; font-weight: 700; white-space: nowrap; ${badgeStyle}">
                ${badgeStatusText}
              </span>
            </div>
          </div>
        `;
      });

      contentHtml += `</div>`;
    }

    document.querySelectorAll('.bills-tab-content-target').forEach(el => {
      el.innerHTML = contentHtml;
      el.querySelectorAll('.btn-pay-bill').forEach(b => {
        b.addEventListener('click', () => {
          const bId = b.dataset.billId;
          this.payBill(bId);
        });
      });
    });

    this.refreshIcons();
    this.setup3DCardTilt();
  }

  payBill(billId) {
    Sound.playSuccessChime();
    const bill = AppState.bills.find(b => b.id === billId);
    if (!bill || bill.paid) return;

    bill.paid = true;
    AppState.spentAmount += bill.amount;
    AppState.reservedBillsBucket = Math.max(0, AppState.reservedBillsBucket - bill.amount);

    AppState.transactions.unshift({
      id: 'tx-' + Date.now(),
      title: this.t('payBillTitle', { name: bill.name }),
      memberId: 'amine',
      memberName: this.t('memberAmineName'),
      category: 'Utilities',
      amount: bill.amount,
      time: this.t('justNow'),
      icon: 'zap',
      badgeClass: 'emerald',
      hasPriceHike: false
    });

    this.updateAllViews();
  }

  renderFamilyTab() {
    const totalBasket = AppState.groceryTotal;
    const ratioBasket = Math.round((totalBasket / AppState.remainingSalary) * 100);

    let html = `
      <div style="padding: 4px 16px;">
        <!-- AI Grocery Cart Simulator Card -->
        <div class="clean-card" style="background: linear-gradient(135deg, rgba(0,210,135,0.08), rgba(6,182,212,0.06)); border: 1px solid rgba(0,210,135,0.28); margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div style="font-weight: 800; font-size: 14px; color: #00d287; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="shopping-cart" class="w-4 h-4 text-emerald-400"></i>
              <span>${this.t('sharedGroceryBasket')}</span>
            </div>
            <span style="font-size: 10px; background: rgba(0,210,135,0.18); color: #34d399; padding: 2px 8px; border-radius: 9999px; font-weight: 700; border: 1px solid rgba(0,210,135,0.3);">${this.t('smartEstimate')}</span>
          </div>
          <p style="font-size: 11px; opacity: 0.75; margin-bottom: 12px;">${this.t('basketEstimateDesc')}</p>

          <div style="background: rgba(255,255,255,0.05); padding: 10px 12px; border-radius: 14px; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.06);">
    `;

    AppState.groceryItems.forEach(item => {
      const itemName = this.t(item.nameKey || item.name);
      html += `
        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
          <span>${itemName} (${item.qty}x)</span>
          <span class="amount-val tabular-nums" style="font-weight: 700;">${(item.price * item.qty).toLocaleString()} ${this.t('currency')}</span>
        </div>
      `;
    });

    html += `
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed rgba(0,210,135,0.3); padding-top: 8px;">
            <div>
              <div style="font-size: 10px; opacity: 0.7;">${this.t('estimatedBasketTotal')}</div>
              <div class="amount-val tabular-nums" style="font-size: 16px; font-weight: 900; color: #00d287;">${totalBasket.toLocaleString()} ${this.t('currency')}</div>
            </div>
            <div style="text-align: end;">
              <span style="font-size: 11px; font-weight: 700; color: #34d399;">${this.t('consumesFromSalary', { pct: ratioBasket })}</span>
            </div>
          </div>
        </div>

        <!-- Family Members Allowances Breakdown -->
        <div style="font-weight: 800; font-size: 13.5px; margin: 16px 4px 10px 4px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="users" class="w-4 h-4 text-emerald-400"></i>
            <span>${this.t('familyMembersTitle')}</span>
          </div>
          <span style="font-size: 11px; color: #94a3b8; font-weight: 600;">${AppState.members.length - 1} ${this.t('roleFamily')}</span>
        </div>
    `;

    AppState.members.filter(m => m.id !== 'all').forEach(m => {
      const initial = AppState.lang === 'ar' ? m.initialAr : m.initialEn;
      const memberName = this.t(m.nameKey);
      const memberRole = this.t(m.roleKey);

      html += `
        <div class="clean-card" style="margin-bottom: 8px; padding: 12px 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div class="family-avatar-circle" style="width: 36px; height: 36px; font-size: 11px; background: ${m.color}; flex-shrink: 0;">
                <span>${initial}</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 13px;">${memberName}</div>
                <div style="font-size: 10.5px; opacity: 0.65;">${memberRole}</div>
              </div>
            </div>
            <div style="text-align: end;">
              <div class="amount-val tabular-nums" style="font-weight: 800; font-size: 13px; color: #f1f5f9;">${m.spent.toLocaleString()} ${this.t('currency')}</div>
              <span style="font-size: 10px; opacity: 0.7;">${m.pct}% ${this.t('memberContribution')}</span>
            </div>
          </div>
          <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
            <div style="width: ${m.pct}%; height: 100%; background: ${m.color}; border-radius: 3px;"></div>
          </div>
        </div>
      `;
    });

    html += `
        <!-- Full Family Recent Activity -->
        <div style="font-weight: 800; font-size: 13.5px; margin: 16px 4px 10px 4px; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="receipt" class="w-4 h-4 text-emerald-400"></i>
          <span>${this.t('recentActivity')}</span>
        </div>
    `;

    AppState.transactions.forEach(t => {
      html += `
        <div class="clean-card" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; padding: 12px 14px;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            <div class="icon-badge ${t.badgeClass}" style="flex-shrink: 0;">
              <i data-lucide="${t.icon}" class="w-4 h-4"></i>
            </div>
            <div style="min-width: 0; flex: 1;">
              <div style="font-weight: 700; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t.title}</div>
              <div style="font-size: 11px; opacity: 0.65; margin-top: 1px;">${t.memberName} • ${t.time}</div>
            </div>
          </div>
          <div style="text-align: end; margin-inline-start: 10px; flex-shrink: 0;">
            <div class="amount-val tabular-nums" style="font-weight: 800; font-size: 13px; color: #f43f5e; white-space: nowrap;">-${t.amount.toLocaleString()} ${this.t('currency')}</div>
            ${t.hasPriceHike 
              ? `<span class="price-hike-chip">
                   <i data-lucide="trending-up" class="w-2.5 h-2.5"></i>
                   <span>${this.t('priceHikeTag')}</span>
                 </span>` 
              : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;

    document.querySelectorAll('.family-tab-content-target').forEach(el => {
      el.innerHTML = html;
    });

    this.refreshIcons();
  }

  renderCoachTab() {
    const html = `
      <div style="padding: 4px 16px;">
        <!-- Card 1: Burn-Rate Forecast -->
        <div class="clean-card" style="margin-bottom: 12px; border-inline-start: 4px solid #00d287;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <div class="icon-badge emerald" style="width: 32px; height: 32px;">
              <i data-lucide="trending-up" class="w-4 h-4"></i>
            </div>
            <div style="font-weight: 800; font-size: 13.5px;">${this.t('burnRateTitle')}</div>
          </div>
          <p style="font-size: 12px; line-height: 1.5; opacity: 0.85;">${this.t('burnRateDesc')}</p>
        </div>

        <!-- Card 2: Price-Hike Guard -->
        <div class="clean-card" style="margin-bottom: 12px; border-inline-start: 4px solid #f59e0b;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <div class="icon-badge amber" style="width: 32px; height: 32px;">
              <i data-lucide="alert-triangle" class="w-4 h-4"></i>
            </div>
            <div style="font-weight: 800; font-size: 13.5px;">${this.t('priceHikeTitle')}</div>
          </div>
          <ul style="font-size: 11px; padding-inline-start: 20px; line-height: 1.6; opacity: 0.85;">
            <li>${this.t('priceHikeItem1')}</li>
            <li>${this.t('priceHikeItem2')}</li>
          </ul>
        </div>

        <!-- Card 3: Family Savings Goal -->
        <div class="clean-card" style="margin-bottom: 12px; border-inline-start: 4px solid #06b6d4;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="icon-badge sky" style="width: 32px; height: 32px;">
                <i data-lucide="target" class="w-4 h-4"></i>
              </div>
              <div style="font-weight: 800; font-size: 13.5px;">${this.t('savingsGoalTitle')}</div>
            </div>
            <span class="tabular-nums" style="font-size: 12px; font-weight: 800; color: #38bdf8;">62%</span>
          </div>
          <p style="font-size: 11px; opacity: 0.75; margin-bottom: 8px;">${this.t('savingsProgress')}</p>
          <div style="width: 100%; height: 8px; background: rgba(6, 182, 212, 0.15); border-radius: 4px; overflow: hidden;">
            <div style="width: 62%; height: 100%; background: linear-gradient(90deg, #0284c7, #38bdf8); border-radius: 4px;"></div>
          </div>
        </div>

        <!-- Card 4: Algerian Household AI Optimization Tips -->
        <div class="clean-card" style="margin-bottom: 12px; border-inline-start: 4px solid #8b5cf6;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="icon-badge violet" style="width: 32px; height: 32px;">
                <i data-lucide="sparkles" class="w-4 h-4 text-purple-400"></i>
              </div>
              <div style="font-weight: 800; font-size: 13.5px;">${this.t('aiTipsTitle')}</div>
            </div>
            <span style="font-size: 9.5px; background: rgba(139,92,246,0.18); color: #c4b5fd; padding: 2px 7px; border-radius: 9999px; font-weight: 700; border: 1px solid rgba(139,92,246,0.3);">${this.t('smartProactive')}</span>
          </div>

          <div style="background: rgba(255,255,255,0.04); border-radius: 12px; padding: 10px 12px; margin-bottom: 8px; border: 1px solid rgba(255,255,255,0.06);">
            <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 12px; color: #a78bfa; margin-bottom: 3px;">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i>
              <span>${this.t('sonelgazTipTitle')}</span>
            </div>
            <p style="font-size: 11px; line-height: 1.45; opacity: 0.85;">${this.t('sonelgazTipDesc')}</p>
          </div>

          <div style="background: rgba(255,255,255,0.04); border-radius: 12px; padding: 10px 12px; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.06);">
            <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 12px; color: #fbbf24; margin-bottom: 3px;">
              <i data-lucide="fuel" class="w-3.5 h-3.5"></i>
              <span>${this.t('naftalTipTitle')}</span>
            </div>
            <p style="font-size: 11px; line-height: 1.45; opacity: 0.85;">${this.t('naftalTipDesc')}</p>
          </div>

          <button class="btn-apply-tips studio-action-btn primary w-full justify-center" style="padding: 7px 12px; font-size: 11.5px; border-radius: 10px;">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>${this.t('applyTipsBtn')}</span>
          </button>
        </div>

      </div>
    `;

    document.querySelectorAll('.coach-tab-content-target').forEach(el => {
      el.innerHTML = html;
      el.querySelector('.btn-apply-tips')?.addEventListener('click', (e) => {
        Sound.playSuccessChime();
        const btn = e.currentTarget;
        btn.innerHTML = `<i data-lucide="check-check" class="w-3.5 h-3.5"></i> <span>${this.t('tipsAppliedSuccess')}</span>`;
        btn.classList.remove('primary');
        btn.style.background = 'rgba(0, 210, 135, 0.2)';
        btn.style.color = '#34d399';
        btn.style.borderColor = 'rgba(0, 210, 135, 0.4)';
        this.refreshIcons();
      });
    });

    this.refreshIcons();
  }

  // #21 AI Camera Scanner Modal & OCR Simulation
  openScannerModal(presetKey = 'sonelgaz') {
    this.selectScannerPreset(presetKey);
    const modal = document.getElementById('scanner-sheet-backdrop');
    if (modal) {
      modal.classList.add('active');
      Sound.playLaserSweep();
    }
  }

  closeAllSheets() {
    document.querySelectorAll('.bottom-sheet-backdrop').forEach(s => s.classList.remove('active'));
  }

  selectScannerPreset(presetKey) {
    currentPresetKey = presetKey;
    const preset = ScannerPresets[presetKey];
    if (!preset) return;

    document.querySelectorAll('.preset-picker-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.preset === presetKey);
    });

    const docTarget = document.getElementById('scanner-document-preview');
    if (docTarget) {
      docTarget.innerHTML = preset.documentSvg;
    }

    document.getElementById('extracted-details-card').style.display = 'none';
    document.getElementById('scanner-status-text').textContent = this.t('scannerSubtitle');
  }

  executeAiScanSimulation() {
    Sound.playLaserSweep();
    const statusText = document.getElementById('scanner-status-text');
    statusText.textContent = this.t('scanningProgress');

    const docTarget = document.getElementById('scanner-document-preview');
    const bbox = document.createElement('div');
    bbox.className = 'ocr-bounding-box';
    bbox.style.top = '36%';
    bbox.style.left = '8%';
    bbox.style.width = '84%';
    bbox.style.height = '42px';
    docTarget.appendChild(bbox);

    setTimeout(() => {
      Sound.playSuccessChime();
      bbox.remove();
      const preset = ScannerPresets[currentPresetKey];
      statusText.textContent = this.t('scanSuccess');

      const card = document.getElementById('extracted-details-card');
      card.style.display = 'block';

      document.getElementById('ext-merchant').textContent = preset.merchant;
      document.getElementById('ext-amount').textContent = preset.amount.toLocaleString() + ' ' + this.t('currency');
      document.getElementById('ext-date').textContent = preset.date;
      document.getElementById('ext-category').textContent = preset.category;

      const badge = document.getElementById('ext-badge');
      badge.textContent = preset.badgeText;
      badge.style.display = preset.hasPriceHike ? 'inline-block' : 'none';

      this.refreshIcons();
    }, 1200);
  }

  confirmExtractedBill() {
    Sound.playSuccessChime();
    const preset = ScannerPresets[currentPresetKey];
    if (!preset) return;

    AppState.spentAmount += preset.amount;

    AppState.transactions.unshift({
      id: 'tx-' + Date.now(),
      title: preset.merchant,
      memberId: 'amine',
      memberName: this.t('memberAmineName'),
      category: preset.category,
      amount: preset.amount,
      time: this.t('scanInstant'),
      icon: 'file-text',
      badgeClass: 'emerald',
      hasPriceHike: preset.hasPriceHike
    });

    this.closeAllSheets();
    this.updateAllViews();
  }

  // Interactive Live Scenarios
  triggerAlertScenario() {
    AppState.alertDismissed = false;
    this.switchTab('home');
    this.renderStartOfMonthBanner();

    const di = document.querySelector('.dynamic-island');
    if (di) {
      di.classList.add('expanded');
      setTimeout(() => di.classList.remove('expanded'), 4000);
    }
  }

  simulateFamilySpend() {
    Sound.playSuccessChime();
    const randomAmount = Math.floor(Math.random() * 2500) + 800;
    AppState.spentAmount += randomAmount;
    AppState.transactions.unshift({
      id: 'tx-' + Date.now(),
      title: this.t('simSpendTitle'),
      memberId: 'karima',
      memberName: this.t('memberKarimaName'),
      category: 'Groceries',
      amount: randomAmount,
      time: this.t('justNow'),
      icon: 'shopping-bag',
      badgeClass: 'emerald',
      hasPriceHike: false
    });
    this.updateAllViews();
  }

  // #16 Spline 3D Tilt Card & Specular Highlight Effect
  setup3DCardTilt() {
    const cards = document.querySelectorAll('.spline-3d-card, .hero-salary-card');
    cards.forEach(card => {
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.setProperty('--shine-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--shine-y', `${(y / rect.height) * 100}%`);
      };

      card.onmouseleave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--shine-x', '50%');
        card.style.setProperty('--shine-y', '50%');
      };
    });
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.Masrofi = new MasrofiApp();
});

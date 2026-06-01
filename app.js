// Shree Swaminarayan Gurukul, Surendranagar - Activity Tracker App Logic

// 1. Bilingual Translations Database
const TRANSLATIONS = {
  en: {
    schoolName: "Shree Swaminarayan Gurukul",
    branchName: "Surendranagar",
    sectionName: "LKG, UKG & Nursery Section",
    welcomeTitle: "Welcome to Our Activity Tracker!",
    welcomeSubtitle: "Nurturing young minds with values, creativity, and knowledge.",
    navHome: "Home",
    navGallery: "Activities Gallery",
    navCalendar: "Playful Calendar",
    langToggle: "ગુજરાતી",
    
    // Home Page
    threePillarsTitle: "The Three Pillars of Gurukul",
    threePillarsSubtitle: "The foundational values of Rajkot Gurukul Sansthan that shape noble souls.",
    pillarVidyaTitle: "Vidya (Modern Education)",
    pillarVidyaDesc: "Nurturing curious minds with world-class academic foundations, creative activities, and cognitive development.",
    pillarSadvidyaTitle: "Sadvidya (Value Education)",
    pillarSadvidyaDesc: "Teaching character, empathy, respect, and helping hands. Developing sanskars that shape noble citizens.",
    pillarBrahmavidyaTitle: "Brahmavidya (Spiritual Education)",
    pillarBrahmavidyaDesc: "Connecting tiny souls with faith, daily prayers, rich culture, and inner peace through simple lessons.",
    
    teacherTitle: "Teacher Mummy's Section",
    teacherSubtitle: "Meet our Lead Educator",
    teacherName: "Pushpaben Bhadaniya",
    teacherBio: "I have been associated with the field of education for over 25 years. My journey with children has been extremely beautiful. I completed my Pre-PTC education and am currently offering my services at Shree Swaminarayan Gurukul, Surendranagar.",
    teacherExp: "25+ Years of Rich Educational Experience (Pre-PTC)",
    teacherObjectiveLabel: "My Objective",
    teacherObjective: "I believe that young children (Nursery, LKG, UKG) are like raw clay. Instead of just giving them bookish knowledge, my main objective is to ensure their holistic development through sports and various activities.",
    teacherSpecialitiesLabel: "My Specialities",
    teacherSpeciality1: "25+ Years of rich educational experience",
    teacherSpeciality2: "Understanding child psychology for nurturing teaching",
    teacherSpeciality3: "Education via new technologies & activities",
    
    recentTitle: "Recent Activities",
    recentSubtitle: "Discover the latest fun adventures from LKG/UKG classes!",
    viewAllBtn: "View All Activities",
    
    // Gallery Page
    galleryTitle: "Our Activities Gallery",
    gallerySubtitle: "A timeline of playful memories, creative crafts, and celebrations.",
    filterAll: "All Activities",
    filterCrafts: "Crafts & Arts",
    filterCelebrations: "Festivals & Days",
    filterSports: "Physical & Sports",
    timelineStart: "Current Term",
    
    // Calendar Page
    calendarTitle: "Interactive Activity Calendar",
    calendarSubtitle: "Click on any highlighted date (highlighted in Saffron) to see what we learned on that day!",
    calendarHelp: "Choose a date with a star ⭐ to see class activity reports.",
    noActivitySelected: "Click on a highlighted date to display the activity details.",
    monthMay: "May 2026",
    monthApril: "April 2026",
    
    // Activity Report Page
    backBtn: "Back to Activities",
    objectiveLabel: "Objective (Udhesh)",
    benefitsLabel: "Benefits (Fayda)",
    galleryLabel: "Photo Gallery (Click to zoom)",
    videoBtn: "Watch Class Videos on Google Drive",
    
    // Footer
    footerGreeting: "Jay Swaminarayan!",
    footerInfo: "Dedicated to the holistic growth and Sanskar development of our nursery children.",
    footerContact: "Address: Shree Swaminarayan Gurukul, Surendranagar Highway, Gujarat.",
    footerFollow: "Follow our official updates:",
    copyright: "© 2026 Shree Swaminarayan Gurukul, Surendranagar. All rights reserved."
  },
  gu: {
    schoolName: "શ્રી સ્વામિનારાયણ ગુરુકુલ",
    branchName: "સુરેન્દ્રનગર",
    sectionName: "LKG, UKG અને નર્સરી વિભાગ",
    welcomeTitle: "અમારી એક્ટિવિટી ટ્રેકરમાં આપનું સ્વાગત છે!",
    welcomeSubtitle: "સંસ્કાર, સર્જનાત્મકતા અને જ્ઞાન સાથે બાળમનનું ઘડતર.",
    navHome: "હોમ",
    navGallery: "પ્રવૃત્તિ ગેલેરી",
    navCalendar: "રમતિયાળ કેલેન્ડર",
    langToggle: "English",
    
    // Home Page
    threePillarsTitle: "ગુરુકુલના ત્રણ સ્તંભો",
    threePillarsSubtitle: "રાજકોટ ગુરુકુલ સંસ્થાનના પાયાના મૂલ્યો જે ઉમદા માનવીનું ઘડતર કરે છે.",
    pillarVidyaTitle: "વિદ્યા (આધુનિક શિક્ષણ)",
    pillarVidyaDesc: "વિશ્વસ્તરીય શૈક્ષણિક પાયો, સર્જનાત્મક પ્રવૃત્તિઓ અને બૌદ્ધિક વિકાસ સાથે જિજ્ઞાસુ મનનો ઉછેર.",
    pillarSadvidyaTitle: "સદવિદ્યા (મૂલ્યલક્ષી શિક્ષણ)",
    pillarSadvidyaDesc: "ચરિત્ર, સહાનુભૂતિ, આદર અને મદદરૂપ થવાની ભાવના. શ્રેષ્ઠ નાગરિક બનાવતા સંસ્કારોનું સિંચન.",
    pillarBrahmavidyaTitle: "બ્રહ્મવિદ્યા (આધ્યાત્મિક શિક્ષણ)",
    pillarBrahmavidyaDesc: "સરળ પ્રાર્થના, સમૃદ્ધ સંસ્કૃતિ અને આધ્યાત્મિક શાંતિ દ્વારા બાળકોને દૈવી શ્રદ્ધા સાથે જોડવા.",
    
    teacherTitle: "ટીચર મમ્મીનો વિભાગ",
    teacherSubtitle: "અમારા મુખ્ય શિક્ષિકાને મળો",
    teacherName: "પુષ્પાબેન ભડાણિયા",
    teacherBio: "છેલ્લા ૨૫થી વધુ વર્ષોથી હું શિક્ષણ ક્ષેત્ર સાથે જોડાયેલી છું. બાળકો સાથેનો મારો આ પ્રવાસ ખૂબ જ સુંદર રહ્યો છે. મેં મારું શિક્ષણ Pre-PTC પૂર્ણ કર્યું છે અને હાલમાં હું શ્રી સ્વામિનારાયણ ગુરુકુલ, સુરેન્દ્રનગર ખાતે મારી સેવાઓ આપી રહી છું.",
    teacherExp: "૨૫+ વર્ષનો બહોળો શૈક્ષણિક અનુભવ (Pre-PTC)",
    teacherObjectiveLabel: "મારો મુખ્ય ઉદ્દેશ્ય",
    teacherObjective: "મારું માનવું છે કે નાનાં બાળકો (Nursery, LKG, UKG) એ કાચી માટી જેવા હોય છે. તેમને માત્ર પુસ્તકનું જ્ઞાન આપવાને બદલે, રમત-ગમત અને વિવિધ પ્રવૃત્તિઓ (Activities) દ્વારા તેમનો સર્વાંગી વિકાસ કરવો એ મારો મુખ્ય ઉદ્દેશ્ય છે.",
    teacherSpecialitiesLabel: "વિશેષતાઓ",
    teacherSpeciality1: "૨૫+ વર્ષનો બહોળો શૈક્ષણિક અનુભવ",
    teacherSpeciality2: "બાળકોનું મનોવિજ્ઞાન સમજીને તેમને ભણાવવાની કળા",
    teacherSpeciality3: "નવી ટેકનોલોજી અને એક્ટિવિટીઝ દ્વારા શિક્ષણ",
    
    recentTitle: "તાજેતરની પ્રવૃત્તિઓ",
    recentSubtitle: "LKG/UKG વર્ગોની નવીનતમ આનંદપ્રદ પ્રવૃત્તિઓ જુઓ!",
    viewAllBtn: "બધી પ્રવૃત્તિઓ જુઓ",
    
    // Gallery Page
    galleryTitle: "અમારી પ્રવૃત્તિ ગેલેરી",
    gallerySubtitle: "રમતિયાળ યાદો, સર્જનાત્મક હસ્તકલા અને તહેવારોની ઉજવણીની સમયરેખા.",
    filterAll: "બધી પ્રવૃત્તિઓ",
    filterCrafts: "ચિત્રકામ અને હસ્તકલા",
    filterCelebrations: "તહેવારો અને ઉત્સવ",
    filterSports: "રમતગમત અને યોગ",
    timelineStart: "ચાલુ સત્ર",
    
    // Calendar Page
    calendarTitle: "ઇન્ટરેક્ટિવ પ્રવૃત્તિ કેલેન્ડર",
    calendarSubtitle: "જે દિવસે પ્રવૃત્તિ થઈ હોય તે તારીખ (કેસરી રંગમાં) પર ક્લિક કરો અને જુઓ કે તે દિવસે અમે શું નવું શીખ્યા!",
    calendarHelp: "વર્ગની પ્રવૃત્તિઓ જોવા માટે સ્ટાર ⭐ ચિહ્ન વાળી તારીખ પસંદ કરો.",
    noActivitySelected: "પ્રવૃત્તિની વિગતો જોવા માટે કૃપા કરીને હાઇલાઇટ કરેલી તારીખ પર ક્લિક કરો.",
    monthMay: "મે ૨૦૨૬",
    monthApril: "એપ્રિલ ૨૦૨૬",
    
    // Activity Report Page
    backBtn: "પાછા જાઓ",
    objectiveLabel: "હેતુ / ઉદ્દેશ",
    benefitsLabel: "લાભ / ફાયદા",
    galleryLabel: "ફોટો ગેલેરી (મોટું કરવા ક્લિક કરો)",
    videoBtn: "ગૂગલ ડ્રાઇવ પર વીડિયો જુઓ",
    
    // Footer
    footerGreeting: "જય સ્વામિનારાયણ!",
    footerInfo: "અમારા નાના બાળકોના સર્વાંગી વિકાસ અને સંસ્કાર ઘડતર માટે કટિબદ્ધ.",
    footerContact: "સરનામું: શ્રી સ્વામિનારાયણ ગુરુકુલ, સુરેન્દ્રનગર હાઈવે, ગુજરાત.",
    footerFollow: "અમારી સત્તાવાર અપડેટ્સ જુઓ:",
    copyright: "© ૨૦૨૬ શ્રી સ્વામિનારાયણ ગુરુકુલ, સુરેન્દ્રનગર. સર્વાધિકાર સુરક્ષિત."
  }
};

// 2. Activities Database (Bilingual English & Gujarati)
const ACTIVITIES = [];

// 3. App State Management
let appState = {
  currentLanguage: 'gu', // Defaulting to Gujarati to honor local branding, toggleable to English
  currentPage: 'home', // 'home' | 'gallery' | 'calendar' | 'report'
  selectedActivityId: null,
  activeGalleryFilter: 'all' // 'all' | 'crafts' | 'celebrations' | 'sports'
};

// 4. Initialization on Load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences if any
  const savedLang = localStorage.getItem('gurukul_tracker_lang');
  if (savedLang) {
    appState.currentLanguage = savedLang;
  }
  
  // Set HTML lang attribute
  updateHtmlLang();
  
  // Render full site layout
  renderApp();
});

function updateHtmlLang() {
  document.documentElement.lang = appState.currentLanguage === 'gu' ? 'gu-IN' : 'en-US';
}

// Translate Helper
function t(key) {
  const lang = appState.currentLanguage;
  return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
}

// Language Switcher
function toggleLanguage() {
  appState.currentLanguage = appState.currentLanguage === 'en' ? 'gu' : 'en';
  localStorage.setItem('gurukul_tracker_lang', appState.currentLanguage);
  updateHtmlLang();
  renderApp();
}

// Router Navigation
function navigateTo(page, activityId = null) {
  appState.currentPage = page;
  appState.selectedActivityId = activityId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// Main Render Function
function renderApp() {
  renderHeader();
  renderFooter();
  
  const mainContent = document.getElementById('main-content');
  mainContent.className = "flex-grow py-6 px-4 max-w-7xl mx-auto w-full animate-fade-in";
  
  if (appState.currentPage === 'home') {
    renderHome(mainContent);
  } else if (appState.currentPage === 'gallery') {
    renderGallery(mainContent);
  } else if (appState.currentPage === 'calendar') {
    renderCalendar(mainContent);
  } else if (appState.currentPage === 'report') {
    renderActivityReport(mainContent, appState.selectedActivityId);
  }
  
  // Update icons after DOM rendering
  lucide.createIcons();
}

// 5. Header Component Rendering
function renderHeader() {
  const header = document.getElementById('header-container');
  const isGu = appState.currentLanguage === 'gu';
  
  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Logo and School Brand -->
      <div class="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
        <!-- Official Logo image -->
        <div class="w-14 h-14 rounded-full overflow-hidden shadow-playful-saffron border-2 border-maroon relative shrink-0 bg-white flex items-center justify-center">
          <img src="logo.jpg" alt="Gurukul Logo" class="w-full h-full object-cover">
        </div>
        <div>
          <h1 class="text-xl md:text-2xl font-extrabold text-maroon leading-tight flex items-center gap-1.5">
            ${t('schoolName')}
          </h1>
          <div class="flex items-center gap-2">
            <span class="bg-saffron text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">${t('branchName')}</span>
            <span class="text-xs md:text-sm font-semibold text-slate-600">${t('sectionName')}</span>
          </div>
        </div>
      </div>
      
      <!-- Desktop and Mobile Navigation Link Buttons -->
      <div class="flex items-center flex-wrap gap-2 md:gap-4 w-full md:w-auto justify-center">
        <button onclick="navigateTo('home')" class="px-4 py-2 rounded-full font-bold text-sm md:text-base border-2 border-transparent transition-all flex items-center gap-1.5
          ${appState.currentPage === 'home' ? 'bg-maroon text-white border-maroon shadow-playful-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
          <i data-lucide="home" class="w-4 h-4"></i>
          <span>${t('navHome')}</span>
        </button>
        <button onclick="navigateTo('gallery')" class="px-4 py-2 rounded-full font-bold text-sm md:text-base border-2 border-transparent transition-all flex items-center gap-1.5
          ${appState.currentPage === 'gallery' ? 'bg-maroon text-white border-maroon shadow-playful-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
          <i data-lucide="image" class="w-4 h-4"></i>
          <span>${t('navGallery')}</span>
        </button>
        <button onclick="navigateTo('calendar')" class="px-4 py-2 rounded-full font-bold text-sm md:text-base border-2 border-transparent transition-all flex items-center gap-1.5
          ${appState.currentPage === 'calendar' ? 'bg-maroon text-white border-maroon shadow-playful-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
          <i data-lucide="calendar" class="w-4 h-4"></i>
          <span>${t('navCalendar')}</span>
        </button>
        
        <!-- Language Toggler (Large, High Contrast, Easy to Tap) -->
        <button onclick="toggleLanguage()" class="px-4 py-2 bg-saffron hover:bg-saffron-hover text-white rounded-full font-extrabold text-sm md:text-base shadow-playful-saffron border-2 border-transparent hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ml-2">
          <i data-lucide="languages" class="w-4 h-4"></i>
          <span>${t('langToggle')}</span>
        </button>
      </div>
    </div>
  `;
}

// 6. Home Component Rendering
function renderHome(container) {
  const isGu = appState.currentLanguage === 'gu';
  const recentActivities = ACTIVITIES.slice(0, 3); // Get 3 most recent
  
  container.innerHTML = `
    <!-- 1. Hero Welcoming Section -->
    <section class="bg-gradient-to-r from-orange-50 via-amber-50 to-sky-50 border-4 border-dashed border-saffron rounded-3xl p-6 md:p-10 mb-8 shadow-sm flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
      <!-- Decorative school background decorations -->
      <div class="absolute top-2 left-4 text-orange-200 pointer-events-none animate-float"><i data-lucide="sparkles" class="w-12 h-12"></i></div>
      <div class="absolute bottom-4 right-8 text-sky-200 pointer-events-none animate-float" style="animation-delay: 2s;"><i data-lucide="palette" class="w-14 h-14"></i></div>
      
      <div class="flex-grow space-y-4 text-center md:text-left z-10">
        <span class="inline-block bg-maroon text-white font-extrabold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-sm">
          📍 ${t('schoolName')}, ${t('branchName')}
        </span>
        <h2 class="text-3xl md:text-5xl font-black text-maroon tracking-tight leading-tight">
          ${t('welcomeTitle')}
        </h2>
        <p class="text-slate-600 text-base md:text-xl font-medium max-w-2xl">
          ${t('welcomeSubtitle')}
        </p>
        <div class="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
          <button onclick="navigateTo('gallery')" class="px-6 py-3 bg-saffron hover:bg-saffron-hover text-white rounded-2xl font-bold text-lg shadow-playful-saffron transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2 border-2 border-maroon">
            <i data-lucide="sparkles" class="w-5 h-5"></i>
            <span>${isGu ? 'પ્રવૃત્તિઓ જુઓ' : 'Explore Activities'}</span>
          </button>
          <button onclick="navigateTo('calendar')" class="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl font-bold text-lg shadow-playful-md border-2 border-slate-300 transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2">
            <i data-lucide="calendar-heart" class="w-5 h-5 text-saffron"></i>
            <span>${isGu ? 'કેલેન્ડર ખોલો' : 'View Calendar'}</span>
          </button>
        </div>
      </div>
      <div class="shrink-0 w-full md:w-80 flex justify-center z-10">
        <!-- Interactive Playful Illustration -->
        <div class="relative w-64 h-64 bg-white/75 backdrop-blur-sm rounded-3xl border-4 border-saffron shadow-playful-md flex items-center justify-center p-4">
          <div class="absolute -top-4 -right-4 bg-maroon text-white w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-md rotate-12 animate-bounce-slow">
            <i data-lucide="palette" class="w-6 h-6"></i>
          </div>
          <div class="absolute -bottom-4 -left-4 bg-saffron text-white w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-md -rotate-12 animate-float">
            <i data-lucide="rocket" class="w-6 h-6"></i>
          </div>
          <div class="text-center space-y-2">
            <div class="text-6xl animate-bounce-slow">🎨👦👧</div>
            <div class="font-extrabold text-maroon text-lg">${isGu ? 'શિશુ મંદિર વિભાગ' : 'Gurukul Nursery'}</div>
            <div class="text-xs text-slate-500 font-semibold uppercase tracking-wider">${isGu ? 'આનંદદાયી શિક્ષણ' : 'Joy of Learning'}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. The 3 Gurukul Pillars Section -->
    <section class="mb-12">
      <div class="text-center space-y-2 mb-8">
        <h3 class="text-2xl md:text-4xl font-extrabold text-maroon inline-block border-b-4 border-saffron pb-2 px-4">
          ${t('threePillarsTitle')}
        </h3>
        <p class="text-slate-600 text-sm md:text-base font-semibold max-w-3xl mx-auto px-4 mt-2">
          ${t('threePillarsSubtitle')}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Pillar 1: Vidya -->
        <div class="bg-pastelBlue border-4 border-sky-300 rounded-3xl p-6 shadow-playful-sm hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center shadow-md mb-4 border-2 border-white rotate-3">
            <i data-lucide="book-open" class="w-8 h-8"></i>
          </div>
          <h4 class="text-xl md:text-2xl font-black text-sky-800 mb-2">${t('pillarVidyaTitle')}</h4>
          <p class="text-slate-700 text-sm md:text-base font-medium leading-relaxed">${t('pillarVidyaDesc')}</p>
        </div>
        
        <!-- Pillar 2: Sadvidya -->
        <div class="bg-pastelOrange border-4 border-orange-300 rounded-3xl p-6 shadow-playful-sm hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-saffron text-white rounded-2xl flex items-center justify-center shadow-md mb-4 border-2 border-white -rotate-3">
            <i data-lucide="heart" class="w-8 h-8"></i>
          </div>
          <h4 class="text-xl md:text-2xl font-black text-amber-800 mb-2">${t('pillarSadvidyaTitle')}</h4>
          <p class="text-slate-700 text-sm md:text-base font-medium leading-relaxed">${t('pillarSadvidyaDesc')}</p>
        </div>
        
        <!-- Pillar 3: Brahmavidya -->
        <div class="bg-pastelPink border-4 border-pink-300 rounded-3xl p-6 shadow-playful-sm hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-pink-500 text-white rounded-2xl flex items-center justify-center shadow-md mb-4 border-2 border-white rotate-6">
            <i data-lucide="sparkles" class="w-8 h-8"></i>
          </div>
          <h4 class="text-xl md:text-2xl font-black text-pink-800 mb-2">${t('pillarBrahmavidyaTitle')}</h4>
          <p class="text-slate-700 text-sm md:text-base font-medium leading-relaxed">${t('pillarBrahmavidyaDesc')}</p>
        </div>
      </div>
    </section>

    <!-- 3. Teacher Profile - Mummy's Section -->
    <section class="bg-pastelOrange border-4 border-saffron rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="shrink-0 relative">
          <!-- Playful frame with stars -->
          <div class="w-40 h-40 bg-white rounded-3xl border-4 border-maroon overflow-hidden shadow-playful-sm flex items-center justify-center rotate-3 relative hover:rotate-0 transition-transform">
            <img src="teacher.jpg" 
                 alt="${t('teacherName')}" 
                 class="w-full h-full object-cover object-top">
          </div>
          <div class="absolute -top-3 -left-3 bg-amber-400 text-slate-800 p-1.5 rounded-full border-2 border-slate-800 shadow-md animate-float">
            ⭐
          </div>
          <div class="absolute -bottom-3 -right-3 bg-sky-400 text-white p-2 rounded-full border-2 border-slate-800 shadow-md animate-bounce-slow">
            🖍️
          </div>
        </div>
        
        <div class="flex-grow space-y-4 text-center md:text-left">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest text-saffron">${t('teacherSubtitle')}</span>
            <h3 class="text-2xl md:text-3xl font-black text-maroon mt-1">${isGu ? 'શિક્ષિકા ' : 'Teacher '}${t('teacherName')}</h3>
            <p class="text-slate-500 font-extrabold mt-0.5">${isGu ? 'મુખ્ય બાળશિક્ષિકા (Pre-PTC)' : 'Lead Preschool Educator (Pre-PTC)'}</p>
          </div>
          
          <blockquote class="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border-l-4 border-maroon italic text-slate-700 font-semibold relative text-sm md:text-base">
            <span class="absolute top-2 left-2 text-3xl text-maroon/20 pointer-events-none">“</span>
            ${t('teacherBio')}
            <span class="absolute bottom-0 right-4 text-3xl text-maroon/20 pointer-events-none">”</span>
          </blockquote>
          
          <!-- Teacher's Objective section -->
          <div class="bg-amber-50/70 p-4 rounded-2xl border-l-4 border-saffron text-slate-700 text-sm font-semibold space-y-1 text-left">
            <div class="flex items-center gap-1.5 text-saffron font-extrabold text-xs uppercase tracking-wider">
              <i data-lucide="target" class="w-4 h-4"></i>
              <span>${t('teacherObjectiveLabel')}</span>
            </div>
            <p class="italic text-slate-700 font-semibold">"${t('teacherObjective')}"</p>
          </div>
          
          <!-- Teacher's Specialities section -->
          <div class="space-y-2 pt-2 text-left">
            <h4 class="text-xs uppercase font-extrabold tracking-widest text-slate-500 flex items-center gap-1">
              <i data-lucide="award" class="w-4.5 h-4.5 text-maroon"></i>
              <span>${t('teacherSpecialitiesLabel')}</span>
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="bg-white/80 p-3 rounded-xl border border-orange-200 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-700">
                <span class="text-saffron text-sm shrink-0">★</span>
                <span>${t('teacherSpeciality1')}</span>
              </div>
              <div class="bg-white/80 p-3 rounded-xl border border-orange-200 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-700">
                <span class="text-saffron text-sm shrink-0">★</span>
                <span>${t('teacherSpeciality2')}</span>
              </div>
              <div class="bg-white/80 p-3 rounded-xl border border-orange-200 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-700">
                <span class="text-saffron text-sm shrink-0">★</span>
                <span>${t('teacherSpeciality3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Recent Activities Cards (Bouncy Cards) -->
    <section class="mb-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h3 class="text-2xl md:text-4xl font-extrabold text-maroon text-center sm:text-left">
            ${t('recentTitle')}
          </h3>
          <p class="text-slate-600 text-sm md:text-base font-semibold mt-1 text-center sm:text-left">
            ${t('recentSubtitle')}
          </p>
        </div>
        <button onclick="navigateTo('gallery')" class="px-5 py-2.5 bg-maroon hover:bg-maroon-hover text-white rounded-xl font-bold text-sm md:text-base shadow-playful-sm border-2 border-transparent flex items-center gap-1.5 transition-all self-center">
          <span>${t('viewAllBtn')}</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${recentActivities.length === 0 ? `
          <div class="col-span-3 text-center py-12 bg-white border-4 border-dashed border-slate-300 rounded-3xl p-8 shadow-sm">
            <div class="text-5xl mb-3">✨</div>
            <p class="text-slate-600 font-extrabold text-sm md:text-base">
              ${isGu ? 'નવી શૈક્ષણિક પ્રવૃત્તિઓ ટૂંક સમયમાં શરૂ થશે!' : 'Exciting educational activities starting soon!'}
            </p>
          </div>
        ` : recentActivities.map(activity => {
          const colorClass = activity.id % 3 === 0 ? 'pastel-card-blue border-sky-300' : (activity.id % 3 === 1 ? 'pastel-card-orange border-orange-300' : 'pastel-card-pink border-pink-300');
          const badgeColor = activity.category === 'crafts' ? 'bg-sky-500' : (activity.category === 'celebrations' ? 'bg-amber-500' : 'bg-emerald-500');
          
          return `
            <div onclick="navigateTo('report', ${activity.id})" class="cursor-pointer border-4 rounded-3xl overflow-hidden card-hover-effect flex flex-col h-full bg-white relative ${colorClass}">
              <!-- Category Badge -->
              <span class="absolute top-3 left-3 z-10 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md ${badgeColor}">
                ${activity.category === 'crafts' ? (isGu ? 'હસ્તકલા' : 'Crafts') : (activity.category === 'celebrations' ? (isGu ? 'તહેવાર' : 'Festival') : (isGu ? 'રમતગમત' : 'Sports'))}
              </span>
              
              <!-- Card Image -->
              <div class="h-48 w-full overflow-hidden border-b-4 border-slate-800 bg-slate-100 relative group">
                <img src="${activity.images[0]}" 
                     alt="${activity.title[appState.currentLanguage]}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
              </div>
              
              <!-- Card Body -->
              <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <div class="text-slate-500 font-extrabold text-xs flex items-center gap-1">
                    <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                    <span>${formatDate(activity.date)}</span>
                  </div>
                  <h4 class="text-xl font-black text-slate-800 leading-tight">
                    ${activity.title[appState.currentLanguage]}
                  </h4>
                </div>
                
                <div class="pt-2 flex items-center justify-between border-t border-dashed border-slate-300 font-bold text-sm text-slate-700">
                  <span class="flex items-center gap-1 text-xs">
                    <i data-lucide="target" class="w-4 h-4 text-maroon"></i>
                    <span>${isGu ? 'હેતુલક્ષી શિક્ષણ' : 'Goal Oriented'}</span>
                  </span>
                  <span class="text-maroon group-hover:underline flex items-center gap-1">
                    <span>${isGu ? 'વિગતો જુઓ' : 'View Report'}</span>
                    <i data-lucide="arrow-right-circle" class="w-4 h-4"></i>
                  </span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

// 7. Gallery Component Rendering
function renderGallery(container) {
  const isGu = appState.currentLanguage === 'gu';
  
  // Filter activities
  const filtered = ACTIVITIES.filter(act => {
    if (appState.activeGalleryFilter === 'all') return true;
    return act.category === appState.activeGalleryFilter;
  });
  
  container.innerHTML = `
    <div class="text-center space-y-2 mb-8 animate-fade-in">
      <h2 class="text-3xl md:text-5xl font-black text-maroon inline-block border-b-4 border-saffron pb-1">
        ${t('galleryTitle')}
      </h2>
      <p class="text-slate-600 text-sm md:text-lg font-semibold max-w-2xl mx-auto">
        ${t('gallerySubtitle')}
      </p>
    </div>
    
    <!-- Filter Buttons (Easy to Tap on Mobile) -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <button onclick="setGalleryFilter('all')" class="px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base shadow-playful-sm border-2 transition-all flex items-center gap-1.5
        ${appState.activeGalleryFilter === 'all' ? 'bg-maroon border-maroon text-white scale-105' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}">
        <i data-lucide="list" class="w-4 h-4"></i>
        <span>${t('filterAll')}</span>
      </button>
      
      <button onclick="setGalleryFilter('crafts')" class="px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base shadow-playful-sm border-2 transition-all flex items-center gap-1.5
        ${appState.activeGalleryFilter === 'crafts' ? 'bg-sky-600 border-sky-600 text-white scale-105' : 'bg-white border-slate-300 text-slate-600 hover:bg-sky-50'}">
        <i data-lucide="palette" class="w-4 h-4"></i>
        <span>${t('filterCrafts')}</span>
      </button>
      
      <button onclick="setGalleryFilter('celebrations')" class="px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base shadow-playful-sm border-2 transition-all flex items-center gap-1.5
        ${appState.activeGalleryFilter === 'celebrations' ? 'bg-amber-600 border-amber-600 text-white scale-105' : 'bg-white border-slate-300 text-slate-600 hover:bg-amber-50'}">
        <i data-lucide="party-popper" class="w-4 h-4"></i>
        <span>${t('filterCelebrations')}</span>
      </button>
      
      <button onclick="setGalleryFilter('sports')" class="px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base shadow-playful-sm border-2 transition-all flex items-center gap-1.5
        ${appState.activeGalleryFilter === 'sports' ? 'bg-emerald-600 border-emerald-600 text-white scale-105' : 'bg-white border-slate-300 text-slate-600 hover:bg-emerald-50'}">
        <i data-lucide="smile" class="w-4 h-4"></i>
        <span>${t('filterSports')}</span>
      </button>
    </div>
    
    <!-- Timeline Vertical Layout -->
    <div class="relative max-w-4xl mx-auto pl-6 md:pl-0">
      ${filtered.length === 0 ? `
        <div class="text-center py-16 bg-white border-4 border-dashed border-slate-300 rounded-3xl p-8 max-w-xl mx-auto shadow-sm">
          <div class="text-5xl mb-3">🎨</div>
          <h3 class="text-xl font-bold text-slate-700 mb-2">
            ${isGu ? 'હજુ સુધી કોઈ પ્રવૃત્તિઓ ઉમેરવામાં આવી નથી' : 'No activities added yet'}
          </h3>
          <p class="text-slate-500 font-semibold text-sm">
            ${isGu ? 'નવી શૈક્ષણિક પ્રવૃત્તિઓ ટૂંક સમયમાં અહીં અપલોડ કરવામાં આવશે.' : 'New educational activities will be uploaded here by the teacher soon.'}
          </p>
        </div>
      ` : `
        <!-- Vertical timeline line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-saffron/40 rounded-full"></div>
        
        <div class="space-y-12">
          ${filtered.map((activity, index) => {
            const isEven = index % 2 === 0;
            const cardColor = activity.category === 'crafts' ? 'pastel-card-blue' : (activity.category === 'celebrations' ? 'pastel-card-orange' : 'pastel-card-green');
            
            return `
              <div class="relative flex flex-col md:flex-row items-center justify-between w-full md:even:flex-row-reverse">
                <!-- Timeline node point -->
                <div class="absolute left-0 md:left-1/2 transform -translate-x-[29px] md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-maroon shadow-md z-10 flex items-center justify-center text-white text-[10px]">
                  ⭐
                </div>
                
                <!-- Timeline card panel (Left or Right on desktop) -->
                <div class="w-full md:w-[45%] pl-6 md:pl-0">
                  <div onclick="navigateTo('report', ${activity.id})" class="cursor-pointer border-4 rounded-3xl overflow-hidden card-hover-effect bg-white relative p-5 ${cardColor} transition-all">
                    <div class="flex justify-between items-center gap-2 mb-3">
                      <span class="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                        <span>${formatDate(activity.date)}</span>
                      </span>
                      <span class="text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase
                        ${activity.category === 'crafts' ? 'bg-sky-500' : (activity.category === 'celebrations' ? 'bg-amber-500' : 'bg-emerald-500')}">
                        ${activity.category === 'crafts' ? (isGu ? 'હસ્તકલા' : 'Crafts') : (activity.category === 'celebrations' ? (isGu ? 'તહેવાર' : 'Festival') : (isGu ? 'રમતગમત' : 'Sports'))}
                      </span>
                    </div>
                    
                    <h3 class="text-lg md:text-xl font-black text-slate-800 leading-tight mb-2">
                      ${activity.title[appState.currentLanguage]}
                    </h3>
                    
                    <p class="text-slate-600 text-sm font-medium line-clamp-2 mb-4">
                      ${activity.objective[appState.currentLanguage]}
                    </p>
                    
                    <!-- Thumbnail gallery strip -->
                    <div class="grid grid-cols-3 gap-2 mb-4">
                      ${activity.images.map(img => `
                        <div class="h-12 rounded-lg overflow-hidden border border-slate-300">
                          <img src="${img}" alt="thumbnail" class="w-full h-full object-cover">
                        </div>
                      `).join('')}
                    </div>
                    
                    <div class="flex items-center justify-between pt-3 border-t border-dashed border-slate-300 font-bold text-xs text-maroon">
                      <span>📚 ${isGu ? 'ઉદ્દેશ અને ફાયદા' : 'Objectives & Benefits'}</span>
                      <span class="flex items-center gap-1">
                        <span>${isGu ? 'અહેવાલ જુઓ' : 'View Details'}</span>
                        <i data-lucide="arrow-right" class="w-3 h-3"></i>
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Empty spacing column for desktop layout grid alignment -->
                <div class="hidden md:block w-[45%]"></div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function setGalleryFilter(filter) {
  appState.activeGalleryFilter = filter;
  renderApp();
}

// 8. Playful Calendar Component Rendering
function renderCalendar(container) {
  const isGu = appState.currentLanguage === 'gu';
  
  // Highlighted dates mapping (using date string as key for fast lookup)
  const highlightedDates = {};
  ACTIVITIES.forEach(act => {
    highlightedDates[act.date] = act;
  });
  
  // We render a standard preschool-themed academic month layout for May 2026 and April 2026.
  // Days details for May 2026 (Starts on Friday, 31 days)
  // Days details for April 2026 (Starts on Wednesday, 30 days)
  
  container.innerHTML = `
    <div class="text-center space-y-2 mb-8 animate-fade-in">
      <h2 class="text-3xl md:text-5xl font-black text-maroon inline-block border-b-4 border-saffron pb-1">
        ${t('calendarTitle')}
      </h2>
      <p class="text-slate-600 text-sm md:text-lg font-semibold max-w-2xl mx-auto px-4">
        ${t('calendarSubtitle')}
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Calendar Area -->
      <div class="lg:col-span-2 space-y-8">
        <!-- May 2026 Calendar Card -->
        <div class="bg-white border-4 border-maroon rounded-3xl p-6 shadow-playful-sm">
          <div class="flex items-center justify-between mb-4 border-b-2 border-dashed border-slate-200 pb-3">
            <h3 class="text-xl md:text-2xl font-black text-maroon flex items-center gap-2">
              <i data-lucide="calendar" class="w-6 h-6 text-saffron"></i>
              <span>${t('monthMay')}</span>
            </h3>
            <span class="text-xs font-bold text-slate-400">⭐⭐ LKG/UKG ⭐⭐</span>
          </div>
          
          <!-- Calendar grid -->
          ${generateCalendarGrid(2026, 4, highlightedDates)} <!-- May is month 4 (0-indexed) -->
        </div>

        <!-- April 2026 Calendar Card -->
        <div class="bg-white border-4 border-slate-300 rounded-3xl p-6 shadow-playful-sm opacity-90">
          <div class="flex items-center justify-between mb-4 border-b-2 border-dashed border-slate-200 pb-3">
            <h3 class="text-xl md:text-2xl font-black text-slate-700 flex items-center gap-2">
              <i data-lucide="calendar" class="w-6 h-6 text-slate-400"></i>
              <span>${t('monthApril')}</span>
            </h3>
            <span class="text-xs font-bold text-slate-400">LKG/UKG</span>
          </div>
          
          <!-- Calendar grid -->
          ${generateCalendarGrid(2026, 3, highlightedDates)} <!-- April is month 3 -->
        </div>
      </div>
      
      <!-- Quick Detail Info Panel on the side (Click feedback) -->
      <div class="lg:col-span-1">
        <div class="sticky top-28 bg-pastelOrange border-4 border-dashed border-saffron rounded-3xl p-6 shadow-sm text-center space-y-4">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto border-2 border-saffron shadow-sm animate-float">
            <i data-lucide="sparkles" class="w-8 h-8 text-saffron"></i>
          </div>
          <h3 class="text-lg md:text-xl font-extrabold text-maroon">${isGu ? 'પસંદ કરેલ પ્રવૃત્તિ' : 'Selected Activity'}</h3>
          <p class="text-slate-600 text-sm font-semibold">
            ${t('calendarHelp')}
          </p>
          
          <div id="calendar-info-panel" class="pt-4 border-t border-dashed border-slate-300 text-slate-500 font-medium italic">
            ${t('noActivitySelected')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Generate Calendar Days Layout
function generateCalendarGrid(year, month, highlightedDates) {
  const isGu = appState.currentLanguage === 'gu';
  
  // Week days label mapping
  const daysOfWeekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysOfWeekGu = ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"];
  const daysOfWeek = isGu ? daysOfWeekGu : daysOfWeekEn;
  
  // Get date information
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  let gridHtml = `<div class="grid grid-cols-7 gap-2 text-center">`;
  
  // Headers
  daysOfWeek.forEach(day => {
    const isWeekend = day === "Sun" || day === "રવિ";
    gridHtml += `<div class="text-xs md:text-sm font-black py-1.5 uppercase ${isWeekend ? 'text-maroon' : 'text-slate-500'}">${day}</div>`;
  });
  
  // Padding for initial days offset
  for (let i = 0; i < firstDayIndex; i++) {
    gridHtml += `<div class="aspect-square bg-slate-50/50 rounded-xl border border-slate-100"></div>`;
  }
  
  // Main days cells
  for (let day = 1; day <= totalDays; day++) {
    const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const activity = highlightedDates[dayStr];
    
    if (activity) {
      // Highlighted cell with activity
      gridHtml += `
        <button onclick="handleCalendarDateClick(${activity.id}, '${dayStr}')" 
          class="aspect-square bg-saffron text-white rounded-xl font-extrabold text-sm md:text-lg border-2 border-maroon flex flex-col items-center justify-center shadow-playful-saffron hover:scale-105 active:scale-95 transition-all group relative">
          <span class="z-10">${day}</span>
          <span class="text-[9px] md:text-[11px] block mt-0.5 z-10">⭐</span>
          <div class="absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
        </button>
      `;
    } else {
      // Standard cell
      const isSunday = (firstDayIndex + day - 1) % 7 === 0;
      gridHtml += `
        <div class="aspect-square bg-slate-50 text-slate-600 rounded-xl font-bold text-sm md:text-base border border-slate-200 flex items-center justify-center
          ${isSunday ? 'bg-red-50 text-red-500 border-red-100' : ''}">
          <span>${day}</span>
        </div>
      `;
    }
  }
  
  gridHtml += `</div>`;
  return gridHtml;
}

// Handle Calendar click to update helper side panel
function handleCalendarDateClick(activityId, dateStr) {
  const isGu = appState.currentLanguage === 'gu';
  const activity = ACTIVITIES.find(act => act.id === activityId);
  if (!activity) return;
  
  const panel = document.getElementById('calendar-info-panel');
  panel.className = "pt-4 border-t border-dashed border-slate-300 text-left space-y-4 animate-scale-up";
  
  panel.innerHTML = `
    <div class="space-y-1">
      <span class="text-xs font-bold bg-maroon text-white px-2 py-0.5 rounded-full">${formatDate(dateStr)}</span>
      <h4 class="text-base font-black text-slate-800 leading-tight">${activity.title[appState.currentLanguage]}</h4>
    </div>
    
    <p class="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
      ${activity.objective[appState.currentLanguage]}
    </p>
    
    <button onclick="navigateTo('report', ${activity.id})" class="w-full py-2 bg-maroon text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-maroon-hover active:scale-95 transition-all">
      <span>${isGu ? 'પૂર્ણ અહેવાલ જુઓ' : 'View Full Report'}</span>
      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
    </button>
  `;
  
  lucide.createIcons();
}

// 9. Activity Report Detail Component Rendering
function renderActivityReport(container, activityId) {
  const isGu = appState.currentLanguage === 'gu';
  const activity = ACTIVITIES.find(act => act.id === activityId);
  
  if (!activity) {
    container.innerHTML = `<div class="text-center py-10 font-bold text-red-500">Activity not found!</div>`;
    return;
  }
  
  container.innerHTML = `
    <!-- Back Navigation button -->
    <div class="mb-6 flex">
      <button onclick="navigateTo('gallery')" class="px-5 py-2.5 bg-white border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 shadow-playful-sm active:translate-y-0.5 transition-all">
        <i data-lucide="arrow-left" class="w-4 h-4 text-maroon"></i>
        <span>${t('backBtn')}</span>
      </button>
    </div>
    
    <div class="bg-white border-4 border-maroon rounded-3xl p-6 md:p-10 shadow-sm space-y-8 animate-scale-up">
      <!-- Title Block -->
      <div class="border-b-4 border-dashed border-slate-200 pb-6 space-y-3">
        <div class="flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold text-slate-500">
          <span class="bg-saffron text-white px-3 py-1 rounded-full uppercase text-[10px] md:text-xs">
            ${activity.category === 'crafts' ? (isGu ? 'હસ્તકલા' : 'Crafts') : (activity.category === 'celebrations' ? (isGu ? 'તહેવાર' : 'Festival') : (isGu ? 'રમતગમત' : 'Sports'))}
          </span>
          <span class="flex items-center gap-1 ml-2">
            <i data-lucide="calendar" class="w-4 h-4"></i>
            <span>${formatDate(activity.date)}</span>
          </span>
        </div>
        
        <h2 class="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
          ${activity.title[appState.currentLanguage]}
        </h2>
      </div>
      
      <!-- Objectives & Benefits Double Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Objective Card -->
        <div class="bg-pastelYellow border-4 border-amber-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex items-center gap-2 text-amber-800">
            <i data-lucide="target" class="w-6 h-6 shrink-0 text-saffron"></i>
            <h3 class="text-xl font-extrabold">${t('objectiveLabel')}</h3>
          </div>
          <p class="text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
            ${activity.objective[appState.currentLanguage]}
          </p>
        </div>
        
        <!-- Benefits Card -->
        <div class="bg-pastelGreen border-4 border-emerald-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex items-center gap-2 text-emerald-800">
            <i data-lucide="award" class="w-6 h-6 shrink-0 text-emerald-600"></i>
            <h3 class="text-xl font-extrabold">${t('benefitsLabel')}</h3>
          </div>
          <ul class="space-y-2">
            ${activity.benefits[appState.currentLanguage].map(benefit => `
              <li class="flex items-start gap-2 text-slate-700 text-xs md:text-sm font-semibold">
                <span class="text-emerald-500 text-base leading-none">✔</span>
                <span>${benefit}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      
      <!-- Photo Zoom-in Gallery -->
      <div class="space-y-4">
        <h3 class="text-xl md:text-2xl font-extrabold text-maroon flex items-center gap-2 border-b-2 border-dashed border-slate-100 pb-2">
          <i data-lucide="images" class="w-6 h-6 text-saffron"></i>
          <span>${t('galleryLabel')}</span>
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${activity.images.map((img, i) => `
            <div onclick="openLightbox('${img}')" 
              class="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-playful-sm cursor-zoom-in hover:scale-102 hover:shadow-playful-md active:scale-98 transition-all">
              <img src="${img}" 
                   alt="Gallery item ${i+1}" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <!-- Hover Zoom Icon overlay -->
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="bg-white/90 p-3 rounded-full text-slate-800 shadow-lg">
                  <i data-lucide="zoom-in" class="w-6 h-6"></i>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Google Drive Video Button (Large, Vibrant, Easy to Tap) -->
      <div class="pt-6 border-t-2 border-dashed border-slate-200 flex justify-center">
        <a href="${activity.videoUrl}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="w-full sm:w-auto px-8 py-4 bg-saffron hover:bg-saffron-hover text-white font-extrabold text-lg md:text-xl rounded-2xl shadow-playful-saffron border-2 border-maroon hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3">
          <i data-lucide="clapperboard" class="w-6 h-6 animate-pulse-slow"></i>
          <span>${t('videoBtn')}</span>
          <i data-lucide="external-link" class="w-5 h-5 shrink-0"></i>
        </a>
      </div>
    </div>
  `;
}

// 10. Lightbox Zoom Logic
function openLightbox(imgUrl) {
  const lb = document.getElementById('lightbox-container');
  lb.innerHTML = `
    <div class="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center scale-95 opacity-0 transition-all duration-300" id="lightbox-image-wrapper">
      <img src="${imgUrl}" alt="Zoomed view" class="max-w-full max-h-[80vh] rounded-2xl border-4 border-white shadow-2xl object-contain">
      <button onclick="closeLightbox()" class="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2.5 hover:scale-105 active:scale-95 transition-all">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>
  `;
  lb.classList.remove('hidden');
  
  setTimeout(() => {
    const wrapper = document.getElementById('lightbox-image-wrapper');
    wrapper.classList.remove('scale-95', 'opacity-0');
  }, 50);
  
  lucide.createIcons();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox-container');
  const wrapper = document.getElementById('lightbox-image-wrapper');
  if (wrapper) {
    wrapper.classList.add('scale-95', 'opacity-0');
  }
  setTimeout(() => {
    lb.classList.add('hidden');
  }, 200);
}

// 11. Footer Component Rendering
function renderFooter() {
  const footer = document.getElementById('footer-container');
  const isGu = appState.currentLanguage === 'gu';
  
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Section 1: Traditional Greeting -->
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-2xl font-black text-amber-300 tracking-wide">
          🌸 ${t('footerGreeting')}
        </h3>
        <p class="text-sm font-semibold text-orange-100 max-w-sm leading-relaxed">
          ${t('footerInfo')}
        </p>
      </div>
      
      <!-- Section 2: Contact Address info -->
      <div class="space-y-4 text-center md:text-left">
        <h4 class="text-lg font-bold border-b-2 border-saffron/30 pb-1 inline-block text-amber-200">
          ${isGu ? 'ગુરુકુલ સંપર્ક' : 'Gurukul Campus'}
        </h4>
        <p class="text-sm font-medium text-orange-50/90 leading-relaxed flex items-center justify-center md:justify-start gap-2">
          <i data-lucide="map-pin" class="w-5 h-5 text-saffron shrink-0"></i>
          <span>${t('footerContact')}</span>
        </p>
      </div>
      
      <!-- Section 3: Social Reels & Instagram Integration -->
      <div class="space-y-4 text-center md:text-left">
        <h4 class="text-lg font-bold border-b-2 border-saffron/30 pb-1 inline-block text-amber-200">
          ${t('footerFollow')}
        </h4>
        
        <div class="flex justify-center md:justify-start gap-3">
          <!-- Large, custom Instagram button for social reels link -->
          <a href="https://www.instagram.com/reel/DXeWjxBiE24/" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="px-5 py-3 bg-saffron hover:bg-saffron-hover text-white rounded-2xl font-black text-sm md:text-base border-2 border-white hover:scale-105 active:scale-95 shadow-lg transition-all flex items-center justify-center gap-2">
            <i data-lucide="instagram" class="w-5 h-5"></i>
            <span>Instagram Reel Updates</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Copywrite Bar -->
    <div class="bg-black/20 py-4 text-center text-xs font-semibold text-orange-100 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>${t('copyright')}</span>
        <span class="text-amber-400">🏫 Shree Swaminarayan Gurukul Surendranagar</span>
      </div>
    </div>
  `;
}

// 12. Helper Date Formatter (Translates dates into Gujarati numbers/months dynamically if needed)
function formatDate(dateString) {
  const parts = dateString.split('-');
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
  if (appState.currentLanguage === 'gu') {
    // Return custom formatted Gujarati date
    const guMonths = [
      "જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન",
      "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"
    ];
    const guDigits = {
      '0': '૦', '1': '૧', '2': '૨', '3': '૩', '4': '૪',
      '5': '૫', '6': '૬', '7': '૭', '8': '૮', '9': '૯'
    };
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    const translateDigits = (num) => String(num).split('').map(d => guDigits[d] || d).join('');
    
    return `${translateDigits(day)} ${guMonths[monthIndex]}, ${translateDigits(year)}`;
  }
  
  return date.toLocaleDateString('en-US', options);
}

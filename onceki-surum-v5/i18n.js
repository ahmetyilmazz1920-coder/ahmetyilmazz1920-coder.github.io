"use strict";
(() => {
  const english = {
    "İçeriğe geç": "Skip to content",
    "Hakkımda": "About",
    "Projeler": "Projects",
    "Vizyon": "Vision",
    "Araçlar": "Tools",
    "İletişim": "Contact",
    "MAKİNE MÜHENDİSİ": "MECHANICAL ENGINEER",
    "CAE & MEKANİK TASARIM": "CAE & MECHANICAL DESIGN",
    "CAE / MEKANİK TASARIM": "CAE / MECHANICAL DESIGN",
    "CAE ile sistemlerin fiziksel davranışlarını anlamaya ve tasarımı geliştirmeye odaklanıyorum.": "I use CAE to understand the physical behaviour of engineering systems and improve their design.",
    "Projelerimi incele": "Explore my projects",
    "Portföy PDF": "Portfolio PDF (TR)",
    "Vizyon & araştırma": "Vision & research",
    "AKIŞKANLAR · YAPISAL MEKANİK · TASARIM": "FLUID DYNAMICS · STRUCTURAL MECHANICS · DESIGN",
    "KEŞFET": "EXPLORE",
    "01 / HAKKIMDA": "01 / ABOUT",
    "TAKIM İÇİ ANALİZ EĞİTİMİ": "INTERNAL CAE TRAINING",
    "Akıştan yapıya,": "From fluid to structure,",
    "analizden tasarıma.": "from analysis to design.",
    "CFD, yapısal analiz ve optimizasyon üzerine çalışıyorum. Roket projelerinde akış ve yapısal davranışı inceleyerek elde ettiğim sonuçları tasarım kararlarında kullanıyorum.": "My work focuses on CFD, structural analysis and optimisation. In rocket projects, I investigate fluid flow and structural behaviour, using the results to guide design decisions.",
    "Takımlarda mekanik liderliği üstlendim ve takım içi analiz eğitimleri verdim. Şu sıralar CAE ile yapay zekânın birlikte kullanımını, özellikle PINN yöntemlerini araştırıyorum.": "I have led mechanical teams and delivered internal CAE training. I am currently exploring the use of artificial intelligence in CAE, with a particular interest in PINN methods.",
    "MEKANİK LİDERLİĞİ": "MECHANICAL TEAM LEADERSHIP",
    "ANALİZ EĞİTİMLERİ": "CAE TRAINING",
    "ROKET SİSTEMLERİ": "ROCKET SYSTEMS",
    "02 / SEÇİLMİŞ PROJELER": "02 / SELECTED PROJECTS",
    "03 ÇALIŞMA": "03 PROJECTS",
    "Analizden çıkan": "Design decisions",
    "tasarım kararları.": "informed by analysis.",
    "Akış ve yapı problemlerini, kullandığım yöntemleri ve tasarıma yansıyan sonuçlarını bir araya getiren seçilmiş çalışmalar.": "Selected work covering fluid and structural problems, the methods I used, and their influence on engineering design.",
    "AERO-YAPISAL ANALİZ": "AEROSTRUCTURAL ANALYSIS",
    "BİAS CAE Yarışması · İlk 10 Finalisti": "BİAS CAE Competition · Top 10 Finalist",
    "CFD / KANATÇIK BÖLGESİ": "CFD / FIN REGION",
    "Kanatçık taşıyıcı sisteminin": "Aerostructural analysis of",
    "aero-yapısal analizi": "a rocket fin support system",
    "Uçuş koşulundan aerodinamik yüklere, basınç aktarımından statik ve modal cevaba uzanan bir CAE çalışması.": "A CAE study spanning flight conditions, aerodynamic loads, pressure mapping, and the system’s static and modal response.",
    "Çalışmayı incele": "View project",
    "İncelenen uçuş koşulu": "Flight condition",
    "Maksimum yer değiştirme": "Maximum displacement",
    "İlk doğal frekans": "First natural frequency",
    "0,712": "0.712", "0,634": "0.634", "94,1": "94.1",
    "YAPISAL ANALİZ & OPTİMİZASYON": "STRUCTURAL ANALYSIS & OPTIMISATION",
    "Motor bloğunda": "Motor support system",
    "kütle azaltma": "mass reduction",
    "Tijli taşıyıcı sistemde gerilme analizi ve topoloji çalışmaları. Tasarım değişiklikleriyle 400 gram kütle tasarrufu.": "Stress analysis and topology studies of a tie-rod support assembly. Design changes achieved a 400 g mass reduction.",
    "İTÜ UZAYTEK / İÇ AKIŞ": "İTÜ UZAYTEK / INTERNAL FLOW",
    "Besleme tankı": "Feed tank",
    "ve blowdown": "and blowdown",
    "N₂O besleme sisteminde orifis boyutlandırması, çok fazlı akış ve tank basıncının zamana bağlı incelenmesi.": "Orifice sizing, multiphase flow and transient tank pressure analysis for an N₂O feed system.",
    "DİĞER ANALİZ DENEYİMLERİ": "FURTHER ANALYSIS EXPERIENCE",
    "Roket gövdesi CFD · Bulkhead ve kanatçık statik analizleri · Burun konisi buckling · Modal analiz · Kanatçık flutter ön değerlendirmesi": "Rocket body CFD · Bulkhead and fin static analyses · Nose cone buckling · Modal analysis · Preliminary fin flutter assessment",
    "03 / VİZYON & ARAŞTIRMA": "03 / VISION & RESEARCH",
    "GÜNCEL ARAŞTIRMA ALANIM": "CURRENT RESEARCH INTEREST",
    "CAE ve yapay zekânın": "At the intersection of",
    "kesişiminde.": "CAE and AI.",
    "CFD ve yapısal analiz deneyimimi, fizik bilgisiyle öğrenen modellerle bir araya getirmeyi hedefliyorum.": "I aim to bring my CFD and structural analysis experience together with physics-informed learning.",
    "yöntemlerini araştırıyorum. CFD verisinden öğrenen": "are a current research interest. I also want to explore",
    "surrogate modeller": "surrogate models",
    "ve farklı tasarım koşullarının daha hızlı değerlendirilmesi de ilerlemek istediğim alanlar arasında.": "trained on CFD data to evaluate different design conditions more efficiently.",
    "BİAS ÇALIŞMASINDAN / CFD HIZ ALANI": "FROM THE BİAS STUDY / CFD VELOCITY FIELD",
    "CFD verisi": "CFD data", "Hızlı": "Fast", "tahmin": "prediction",
    "ARAŞTIRMA HEDEFİ": "RESEARCH GOAL", "KAVRAMSAL AKIŞ": "CONCEPTUAL WORKFLOW",
    "İLERLEMEK İSTEDİĞİM YÖN": "WHERE I WANT TO GO NEXT",
    "Hesaplamalı mekanik": "Computational mechanics",
    "Akış ve yapısal davranışı daha derin anlamak.": "Developing a deeper understanding of fluid and structural behaviour.",
    "CAE ile öğrenen modelleri birlikte araştırmak.": "Exploring CAE alongside learning-based models.",
    "Sayısal yöntemler & Python": "Numerical methods & Python",
    "Hesaplama ve modelleme becerilerimi geliştirmek.": "Strengthening my computational and modelling skills.",
    "04 / ARAÇLAR": "04 / TOOLS", "Analiz ve": "My analysis and", "tasarım araçlarım.": "design tools.",
    "Geometri hazırlığından çözüm ve sonuç değerlendirmesine uzanan çalışma araçlarım.": "The tools I use for geometry preparation, simulation and post-processing.",
    "Akışkanlar dinamiği": "Fluid dynamics",
    "İç akış, dış akış ve çok fazlı çözümler": "Internal, external and multiphase flow",
    "Yapısal analiz": "Structural analysis",
    "Yük aktarımı": "Load mapping",
    "CFD ve yapısal model arasında veri eşleme": "Data mapping between CFD and structural models",
    "Mekanik tasarım": "Mechanical design",
    "Parça, montaj ve teknik resim": "Parts, assemblies and engineering drawings",
    "05 / İLETİŞİM": "05 / CONTACT", "MÜHENDİSLİK ÜZERİNE": "LET’S TALK ENGINEERING",
    "Birlikte": "Let’s", "konuşalım.": "connect.",
    "CAE, mekanik tasarım ve yeni çalışma fırsatları için bana ulaşabilirsin.": "Get in touch to discuss CAE, mechanical design or new opportunities.",
    "E-posta gönder": "Send an email", "Adresi kopyala": "Copy address",
    "Portföyü aç": "Open portfolio (TR)", "PDF’yi indir": "Download PDF", "Başa dön": "Back to top",
    "PROJE İNCELEMESİ": "PROJECT DETAILS", "Kapat": "Close",
    "Ahmet Yılmaz, başlangıç": "Ahmet Yılmaz, home", "Menüyü aç": "Open menu", "Ana menü": "Main navigation",
    "Çalışma alanları": "Areas of work", "Bölümlere git": "Explore sections",
    "Ahmet Yılmaz'ın portre fotoğrafı": "Portrait of Ahmet Yılmaz",
    "Hakkımda bölümüne kaydır": "Scroll to the about section",
    "Takım içi analiz eğitimi sırasında sınıftan bir görünüm": "An internal CAE training session",
    "BİAS kanatçık sistemi projesini incele": "Explore the BİAS fin system project",
    "Roket kanatçık bölgesinin CFD hız alanı ve akış vektörleri": "CFD velocity field and flow vectors around the rocket fins",
    "Motor bloğu projesini incele": "Explore the motor support system project",
    "Tijler ve birden fazla bulkheadden oluşan motor bloğu sisteminin geometrisi": "Motor support assembly with tie rods and multiple bulkheads",
    "Besleme tankı ve blowdown çalışmasını incele": "Explore the feed tank and blowdown studies",
    "Besleme tankındaki sıvı ve gaz bölgelerini gösteren CFD faz dağılımı": "CFD phase distribution showing liquid and gas regions in the feed tank",
    "Kanatçık çevresindeki hız alanını gösteren CFD çözümü": "CFD solution showing the velocity field around the fin",
    "Araştırma hedefi: CFD verisinden surrogate modele ve hızlı tahmine uzanan kavramsal akış": "Research goal: conceptual workflow from CFD data to a surrogate model and fast predictions",
    "Proje ayrıntılarını kapat": "Close project details", "Görseli kapat": "Close image",
    "Büyütülmüş analiz görseli": "Enlarged analysis image"
  };
  Object.assign(english, window.PortfolioPageTranslations || {});
  const pageLinks = [...document.querySelectorAll("a[data-site-link]")].map(element => ({element,href:element.getAttribute("href")}));
  const labels = {
    tr: {openMenu:"Menüyü aç",closeMenu:"Menüyü kapat",problem:"Mühendislik problemi",approach:"İzlediğim yaklaşım",results:"Sonuç ve değerlendirme",tools:"Kullandığım araçlar",scope:"ÇALIŞMANIN KAPSAMI",enlarge:"Görseli büyüt:",copied:"E-posta adresi kopyalandı."},
    en: {openMenu:"Open menu",closeMenu:"Close menu",problem:"Engineering problem",approach:"My approach",results:"Results and assessment",tools:"Tools used",scope:"MODEL SCOPE",enlarge:"Enlarge image:",copied:"Email address copied."}
  };
  const textRecords = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script,style")) continue;
    const key = node.nodeValue.trim();
    if (Object.hasOwn(english, key)) textRecords.push({node,tr:node.nodeValue,en:node.nodeValue.replace(key,english[key])});
  }
  const attributes = [];
  document.querySelectorAll("[alt],[aria-label]").forEach(element => {
    ["alt","aria-label"].forEach(name => {
      const tr = element.getAttribute(name);
      if (Object.hasOwn(english,tr)) attributes.push({element,name,tr,en:english[tr]});
    });
  });
  let language = "tr";
  const page = document.body.dataset.page || "home";
  const titles = {
    home:{tr:"Ahmet Yılmaz — CAE & Mekanik Tasarım",en:"Ahmet Yılmaz — CAE & Mechanical Design"},
    studies:{tr:"Diğer Çalışmalar — Ahmet Yılmaz",en:"Other Studies — Ahmet Yılmaz"},
    experience:{tr:"Deneyim — Ahmet Yılmaz",en:"Experience — Ahmet Yılmaz"}
  };
  const descriptions = {
    home:{tr:"Ahmet Yılmaz'ın CFD, yapısal analiz, optimizasyon ve roket sistemleri üzerine mühendislik çalışmaları. CAE, mekanik tasarım ve PINN araştırmaları.",en:"Ahmet Yılmaz’s engineering portfolio: CFD, structural analysis, optimisation and rocket systems. CAE, mechanical design and PINN research interests."},
    studies:{tr:"Roket gövdesi CFD, burun konisi burkulma, bulkhead statik analizi ve kanatçık flutter ön değerlendirmesi çalışmaları.",en:"Rocket body CFD, nose cone buckling, bulkhead static analysis and preliminary fin flutter assessment studies."},
    experience:{tr:"Ahmet Yılmaz'ın Kalyon PV, BINS Teknoloji, İTÜ Uzaytek ve Yıldırım Roket deneyimleri.",en:"Ahmet Yılmaz’s experience at Kalyon PV, BINS Teknoloji, İTÜ Uzaytek and Yıldırım Roket."}
  };
  const title = titles[page] || titles.home;
  const description = descriptions[page] || descriptions.home;
  function setLanguage(next, remember = false) {
    language = next === "en" ? "en" : "tr";
    textRecords.forEach(record => { record.node.nodeValue = record[language]; });
    attributes.forEach(record => record.element.setAttribute(record.name,record[language]));
    document.documentElement.lang = language;
    document.title = title[language];
    document.querySelector('meta[name="description"]').content = description[language];
    document.querySelector('meta[property="og:title"]').content = title[language];
    document.querySelector('meta[property="og:description"]').content = description[language];
    document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed",String(button.dataset.language === language)));
    pageLinks.forEach(({element,href}) => {
      const url = new URL(href,window.location.href);
      url.searchParams.set("lang",language);
      element.setAttribute("href",url.pathname + url.search + url.hash);
    });
    if (remember) {
      try { localStorage.setItem("portfolio-language",language); } catch {}
      const url = new URL(window.location.href);
      url.searchParams.set("lang",language);
      window.history.replaceState(null,"",url);
    }
    document.dispatchEvent(new CustomEvent("portfolio:languagechange",{detail:{language}}));
  }
  window.PortfolioI18n = {get language(){return language;},t:key=>labels[language][key],setLanguage};
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click",()=>setLanguage(button.dataset.language,true)));
  let stored;
  try { stored = localStorage.getItem("portfolio-language"); } catch {}
  const requested = new URLSearchParams(window.location.search).get("lang");
  const initial = ["tr","en"].includes(requested) ? requested : ["tr","en"].includes(stored) ? stored : navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
  setLanguage(initial);
})();

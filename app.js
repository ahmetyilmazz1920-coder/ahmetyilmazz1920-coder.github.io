"use strict";

const projects = {
  bias: {
    kicker: "BİAS CAE YARIŞMASI · İLK 10 FİNALİSTİ",
    title: "Kanatçık taşıyıcı sisteminin aero-yapısal analizi",
    summary: "Kritik uçuş koşulunda kanatçıklar ve taşıyıcı aparatın davranışını incelemek için dış akış CFD, tek yönlü FSI, statik yapısal analiz ve modal analiz birlikte kullanıldı.",
    problem: "Aerodinamik yüklerin kanatçık–montaj sistemine nasıl aktarıldığını ve sistemin global, lokal ve dinamik davranışını anlamak. Uçuş koşulu, dinamik basınç ve hücum açısı birlikte değerlendirilerek seçildi.",
    methods: ["Cradle scFLOW ile sıkıştırılabilir dış akış ve SST k–ω türbülans modeli.", "scCONVERTER ile CFD basınçlarının ortak koordinat sistemindeki FEM yüzeylerine aktarılması.", "MSC Apex / Nastran ile üç mesh seviyesinde statik ve modal inceleme.", "Delik çevresindeki mesh bağımlı gerilmenin lokal model ve analitik bağlantı kontrolleriyle değerlendirilmesi."],
    metrics: [["Uçuş koşulu", "0,712 Mach"], ["Maks. yer değiştirme", "0,634 mm"], ["İlk doğal frekans", "94,1 Hz"]],
    images: [
      ["bias-flow.webp", "Kanatçık bölgesinde CFD hız alanı ve akış vektörleri."],
      ["bias-fsi.webp", "Yük aktarımı sonrası yapısal model ve statik çözüm görünümü."],
      ["bias-deformation.webp", "Global statik modelin yer değiştirme dağılımı."],
      ["bias-modal.webp", "Taşıyıcı alt sistemin temsilci mod şekli; modal genlikler normalize edilmiştir."]
    ],
    conclusion: "Global yer değiştirme mesh inceltmesiyle benzer değerlere ulaştı. Delik çevresindeki en yüksek gerilme mesh bağımlı kaldığı için ayrı bir lokal kontrol problemi olarak ele alındı. Modal sonuçlarla doğal frekanslar ve mod şekilleri değerlendirildi.",
    scope: "Tek yönlü FSI kullanıldı; yapısal deformasyon akış çözümüne geri beslenmedi. 2-layer serisinin yük yakınsaması, sınır tabaka çözünürlüğüne ilişkin belirsizliği ortadan kaldırmıyor. Yapısal model lineer elastik, modal model sönümsüzdür. PLA homojen ve izotropik kabul edilmiştir. Nihai uygunluk için deneysel doğrulama gerekir.",
    tools: "Cradle scFLOW / scPOST · scCONVERTER · MSC Apex · MSC Nastran · SolidWorks · OpenRocket"
  },
  motor: {
    kicker: "YAPISAL ANALİZ · TOPOLOJİ ÇALIŞMASI · MEKANİK TASARIM",
    title: "Motor bloğunda kütle azaltma",
    summary: "Birden fazla bulkhead ve tijlerden oluşan motor bloğu sisteminin gerilme davranışı incelendi. Yapısal analiz ve topoloji çalışmalarının yönlendirdiği tasarım değişiklikleriyle 400 gram kütle tasarrufu elde edildi.",
    problem: "Motor taşıyıcı sistemin yük aktarımını ve bileşenlerin yapısal davranışını anlamak, tijlerdeki malzeme kullanımını yeniden değerlendirmek.",
    methods: ["Tij ve bulkheadlerden oluşan sistemin montaj düzeyinde modellenmesi.", "Statik yapısal analizle gerilme dağılımının incelenmesi.", "Topoloji çalışmaları ve analiz sonuçlarının tasarımın kütlesini azaltmak için kullanılması."],
    metrics: [["Tasarım sonucu", "400 g tasarruf"], ["Model düzeyi", "Sistem / montaj"]],
    images: [
      ["motor-assembly.webp", "Tijli ve çoklu bulkheadli motor taşıyıcı sistemin geometrisi."],
      ["motor-stress.webp", "Motor bloğu sisteminin eşdeğer gerilme dağılımı."]
    ],
    conclusion: "Analiz sonuçları tijlerin tasarımında kullanıldı ve sistemin kütlesi 400 gram azaltıldı. Bu çalışma, sayısal analiz sonuçlarının doğrudan bir tasarım değişikliğine dönüştüğü bir örnek oluşturuyor.",
    scope: "Galeride sistem geometrisi ve yapısal analiz görüntüleri yer alıyor. Sonuç, gerçekleştirilen tasarım çalışmasındaki kütle kazanımını ifade eder.",
    tools: "ANSYS Mechanical · SolidWorks"
  },
  tank: {
    kicker: "İTÜ UZAYTEK · ÇOK FAZLI AKIŞ · TRANSIENT CFD",
    title: "Besleme tankı ve blowdown çalışmaları",
    summary: "Yanma odası besleme sisteminde N₂O tankı ve N₂ basınçlandırma gereksinimleri ele alındı. Orifis boyutlandırması için analitik hesaplar CFD sonuçlarıyla karşılaştırıldı; ayrı bir blowdown modelinde tank basıncının zamana bağlı değişimi incelendi.",
    problem: "Hedef debiye uygun çıkış orifisini belirlemek ve tankın boşalım sürecindeki davranışını incelemek.",
    methods: ["Sistem gereksinimlerinden tank hacmi ve besleme gereksinimlerinin hesaplanması.", "Orifis için analitik ön boyutlandırma ve farklı çapların çok fazlı CFD ile karşılaştırılması.", "Sıvı ve gaz bölgelerinin tanımlanması, faz dağılımı ve debi-zaman sonuçlarının değerlendirilmesi.", "Ayrı bir 2D eksenel simetrik transient modelde blowdown basınç değişiminin incelenmesi."],
    metrics: [["Tasarım hedefi", "1,15 kg/s"], ["Orifis çalışması", "Çok fazlı CFD"], ["Blowdown modeli", "Transient / 2D"]],
    images: [
      ["tank-phases.webp", "Besleme tankındaki sıvı ve gaz bölgelerinin faz dağılımı."],
      ["tank-flow.webp", "Orifis çalışmasının debi-zaman çıktısı. Negatif işaret çıkış yönünden kaynaklanır."],
      ["tank-blowdown.webp", "Ayrı blowdown modelinde tank basıncının zamana bağlı azalması."]
    ],
    conclusion: "Analitik hesapla belirlenen orifis boyutu, farklı çaplarla gerçekleştirilen CFD çözümleri üzerinden yeniden değerlendirildi. Blowdown çalışması ise tank basıncının geçici davranışını karşılaştırmak için kullanıldı.",
    scope: "Orifis / basınçlandırma ve blowdown çalışmaları farklı model koşullarını temsil eder. Sonuçlar sayısal tasarım değerlendirmeleridir; deneysel doğrulama olarak sunulmamaktadır.",
    tools: "ANSYS Fluent · ANSYS Meshing"
  }
};

const projectDialog = document.getElementById("project-dialog");
const content = document.getElementById("project-content");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
let lastProjectTrigger = null;
let lastImageTrigger = null;

const ui = key => window.PortfolioI18n.t(key);
let activeProjectKey = null;
function renderProject(key) {
  const language = window.PortfolioI18n.language;
  const p = (language === "en" ? window.PortfolioProjectsEn[key] : projects[key]) || window.PortfolioAdditionalProjects?.[language]?.[key];
  if (!p) return;
  activeProjectKey = key;
  content.innerHTML = `
    <div class="dialog-heading"><p class="dialog-kicker">${p.kicker}</p><h2 id="dialog-title">${p.title}</h2><p>${p.summary}</p></div>
    <div class="dialog-body">
      <div class="project-process"><div><h3>${ui("problem")}</h3><p>${p.problem}</p></div><div><h3>${ui("approach")}</h3><ul>${p.methods.map(m => `<li>${m}</li>`).join("")}</ul></div></div>
      <dl class="dialog-metrics">${p.metrics.map(([label,value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
      <div class="project-gallery">${p.images.map(([file,caption]) => `<figure class="gallery-item"><button type="button" class="gallery-button" data-image="assets/${file}" data-caption="${caption}" aria-label="${ui("enlarge")} ${caption}"><img src="assets/${file}" alt="${caption}" loading="lazy"></button><figcaption>${caption}</figcaption></figure>`).join("")}</div>
      <div class="project-process" style="margin-top:30px"><div><h3>${ui("results")}</h3><p>${p.conclusion}</p></div><div><h3>${ui("tools")}</h3><p>${p.tools}</p></div></div>
      <p class="model-scope"><strong>${ui("scope")}</strong>${p.scope}</p>
    </div>`;
  if (!projectDialog.open) projectDialog.showModal();
  projectDialog.scrollTop = 0;
  projectDialog.querySelector(".dialog-close").focus();
}

document.addEventListener("click", event => {
  const trigger = event.target.closest(".project-open");
  if (trigger) {
    lastProjectTrigger = trigger;
    renderProject(trigger.dataset.project);
  }
  const imageTrigger = event.target.closest(".gallery-button");
  if (imageTrigger) {
    lastImageTrigger = imageTrigger;
    lightboxImage.src = imageTrigger.dataset.image;
    lightboxImage.alt = imageTrigger.dataset.caption;
    lightboxCaption.textContent = imageTrigger.dataset.caption;
    lightbox.showModal();
    lightbox.querySelector("button").focus();
  }
});
projectDialog.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
projectDialog.addEventListener("close", () => lastProjectTrigger?.focus({preventScroll:true}));
lightbox.addEventListener("close", () => lastImageTrigger?.focus({preventScroll:true}));
[projectDialog, lightbox].forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}));

const menuButton = document.querySelector(".menu-toggle");
const menu = document.getElementById("main-nav");
function closeMenu() {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", ui("openMenu"));
}
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? ui("openMenu") : ui("closeMenu"));
  menu.classList.toggle("open", !isOpen);
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.classList.contains("open")) { closeMenu(); menuButton.focus(); }
});
document.addEventListener("click", event => {
  if (menu.classList.contains("open") && !event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 821px)").addEventListener("change", event => { if(event.matches) closeMenu(); });

if ("IntersectionObserver" in window) {
  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle("active", current);
        if (current) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
      });
    });
  }, {rootMargin:"-15% 0px -65% 0px", threshold:0});
  document.querySelectorAll("main > section[id]").forEach(section => sectionObserver.observe(section));
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("js-ready");
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
    }), {threshold:0.05});
    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
  }
}

document.getElementById("copy-email")?.addEventListener("click", async () => {
  const email = "ahmetyilmazz1920@gmail.com";
  const status = document.getElementById("copy-status");
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
    else {
      const field = document.createElement("textarea");
      field.value = email;
      field.style.cssText = "position:fixed;left:-9999px;top:0";
      document.body.appendChild(field); field.select();
      const copied = document.execCommand("copy"); field.remove();
      if (!copied) throw new Error("copy failed");
      document.getElementById("copy-email").focus({preventScroll:true});
    }
    status.textContent = ui("copied");
  } catch {
    status.textContent = email;
  }
});

document.addEventListener("portfolio:languagechange", () => {
  closeMenu();
  const status = document.getElementById("copy-status");
  if (status) status.textContent = "";
  if (lightbox.open) lightbox.close();
  if (projectDialog.open && activeProjectKey) renderProject(activeProjectKey);
});

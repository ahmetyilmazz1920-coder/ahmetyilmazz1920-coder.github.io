"use strict";
window.PortfolioAdditionalProjects = {
  tr: {
    bodycfd: {
      kicker:"YILDIRIM ROKET · DIŞ AKIŞ CFD", title:"Roket gövdesinde dış akış CFD",
      summary:"Roket gövdesi çevresindeki akış alanını ve aerodinamik yükleri incelemek için dış akış çözümleri gerçekleştirdim. Duvar yakını çözünürlüğünü y⁺ ≈ 10 seviyesine kadar ele aldım.",
      problem:"Gövde çevresindeki basınç ve hız dağılımlarını incelemek, aerodinamik yüklerin yapısal değerlendirmelere girdi oluşturmasını sağlamak.",
      methods:["Roket geometrisi ve çevresindeki akış hacminin hazırlanması.","Geometriye uygun yerel mesh ve duvar yakını çözünürlüğünün incelenmesi.","Basınç, hız alanı ve çözüm yakınsama çıktılarının değerlendirilmesi."],
      metrics:[["Çalışma alanı","Dış akış"],["İncelenen duvar çözünürlüğü","y⁺ ≈ 10"]],
      images:[["body-cfd-pressure.webp","Roket gövdesi etrafındaki basınç alanı."],["body-cfd-flow.webp","Roket gövdesi çevresindeki akış çözümünden bir görünüm."]],
      conclusion:"Akış alanının farklı bölgeleri ve gövde üzerindeki aerodinamik yükler değerlendirildi. CFD çalışmaları roket yapısal analizleri için yüklerin belirlenmesini destekledi.",
      scope:"y⁺ değeri duvar yakını çözünürlüğünü tanımlar; tek başına çözüm doğruluğu veya mesh bağımsızlığı ölçütü olarak kullanılmaz.",tools:"ANSYS Fluent · ANSYS Meshing · SolidWorks"
    },
    nose: {
      kicker:"YILDIRIM ROKET · YAPISAL ANALİZ", title:"Burun konisinde dayanım ve burkulma",
      summary:"CFD’den elde edilen yüklerle burun konisinin yapısal davranışını ve burkulma durumunu inceledim. Akış çözümü, yapısal değerlendirmeye yük girdisi oluşturdu.",
      problem:"Aerodinamik basınçların burun konisindeki gerilme, yer değiştirme ve stabilite davranışına etkisini değerlendirmek.",
      methods:["Burun konisi ve bağlantı bölgesinin yapısal modelinin hazırlanması.","CFD kaynaklı yüklerin yapısal değerlendirmede kullanılması.","Statik gerilme ve yer değiştirme sonuçlarıyla birlikte burkulma davranışının incelenmesi."],
      metrics:[["Yük kaynağı","CFD"],["Değerlendirme","Statik / Burkulma"]],
      images:[["nose-stress.webp","Burun konisi statik yapısal analizinden eşdeğer gerilme sonucu."],["nose-deformation.webp","Burun konisi statik yapısal analizinden toplam yer değiştirme sonucu."]],
      conclusion:"CFD’den yapısal modele uzanan değerlendirmeyle burun konisinin yük altındaki davranışı incelendi; bağlantı bölgesi ve geometri, sonuçlarla birlikte ele alındı.",
      scope:"Galeride statik yapısal çözüm çıktıları yer alır. Bu görseller burkulma mod şekli olarak sunulmamaktadır.",tools:"ANSYS Fluent · ANSYS Mechanical · SolidWorks"
    },
    bulkhead: {
      kicker:"YILDIRIM ROKET · STATIC STRUCTURAL", title:"Aviyonik bulkhead statik analizi",
      summary:"Aviyonik bileşenleri taşıyan bulkheadin uçuş yükleri altındaki gerilme ve yer değiştirme davranışını inceledim.",
      problem:"Bileşen kütleleri ve uçuş ivmeleriyle oluşan yüklerin bulkhead ve bağlantı bölgeleri üzerindeki etkisini değerlendirmek.",
      methods:["Bulkhead geometrisinin hazırlanması ve analiz için sadeleştirilmesi.","Bileşen kütleleri ve uçuş ivmelerine göre yüklerin tanımlanması.","Montaj bölgelerinin idealizasyonu ve farklı yük seviyelerinde statik sonuçların incelenmesi."],
      metrics:[["Bileşen","Aviyonik bulkhead"],["Çözüm","Statik yapısal"]],
      images:[["bulkhead-stress.webp","Aviyonik bulkheadin eşdeğer gerilme dağılımı."]],
      conclusion:"Sonuçlar, taşıyıcı plakanın gerilme dağılımını ve deformasyonunu incelemek; bağlantı bölgelerini ve tasarımı değerlendirmek için kullanıldı.",
      scope:"Sonuçlar tanımlanan yük ve montaj kabullerine bağlı statik model değerlendirmeleridir.",tools:"ANSYS Mechanical · SolidWorks"
    },
    flutter: {
      kicker:"YILDIRIM ROKET · MODAL / AEROELASTICITY", title:"Kanatçık flutter ön değerlendirmesi",
      summary:"Kanatçığın eğilme ve burulma modlarını modal analiz ve el hesaplarıyla ele aldım. Doğal frekansları yaklaşık flutter değerlendirmesine girdi olarak kullandım.",
      problem:"Kanatçığın dinamik davranışını anlamak ve aeroelastik değerlendirme için temel frekans ve mod şekli girdilerini oluşturmak.",
      methods:["Kökten ankastre kanatçık modelinde lineer, sönümsüz modal analiz.","Eğilme ve burulma modlarının belirlenmesi; mesh seviyelerindeki frekans değişiminin incelenmesi.","Analitik frekans hesapları ve yaklaşık flutter yaklaşımıyla ön boyutlandırma değerlendirmesi."],
      metrics:[["Modal eğilme frekansı","103,22 Hz"],["Modal burulma frekansı","697,04 Hz"]],
      images:[["flutter-bending.webp","Kanatçığın eğilme mod şekli; modal genlikler normalize edilmiştir."],["flutter-torsion.webp","Kanatçığın burulma mod şekli; modal genlikler normalize edilmiştir."]],
      conclusion:"Eğilme ve burulma karakterleri ayırt edildi; sayısal ve analitik sonuçlar ön değerlendirme kapsamında karşılaştırıldı.",
      scope:"Bu çalışma ön boyutlandırma seviyesindedir; tam bağlı aeroelastik flutter çözümü değildir. Mod şekli genlikleri fiziksel yük altındaki yer değiştirmeyi temsil etmez.",tools:"ANSYS Mechanical · Analitik hesaplar"
    }
  },
  en: {
    bodycfd: {
      kicker:"YILDIRIM ROKET · EXTERNAL-FLOW CFD",title:"External-flow CFD of a rocket body",
      summary:"I performed external-flow simulations to investigate the flow field and aerodynamic loads around a rocket body, examining near-wall resolution down to approximately y⁺ = 10.",
      problem:"Examine pressure and velocity distributions around the body and provide aerodynamic load inputs for structural assessments.",
      methods:["Preparation of the rocket geometry and surrounding flow domain.","Assessment of local mesh refinement and near-wall resolution.","Evaluation of pressure, velocity fields and solution convergence outputs."],
      metrics:[["Flow regime","External flow"],["Near-wall resolution examined","y⁺ ≈ 10"]],
      images:[["body-cfd-pressure.webp","Pressure field around the rocket body."],["body-cfd-flow.webp","A view from the flow solution around the rocket body."]],
      conclusion:"Flow regions and aerodynamic loads on the body were assessed. The CFD studies supported load definition for rocket structural analyses.",
      scope:"y⁺ describes near-wall resolution; it is not, by itself, a measure of solution accuracy or mesh independence.",tools:"ANSYS Fluent · ANSYS Meshing · SolidWorks"
    },
    nose: {
      kicker:"YILDIRIM ROKET · STRUCTURAL ANALYSIS",title:"Nose cone strength and buckling",
      summary:"I investigated the nose cone’s structural response and buckling behaviour using loads obtained from CFD. The flow solution provided load inputs for the structural assessment.",
      problem:"Assess the influence of aerodynamic pressure on stress, displacement and structural stability in the nose cone.",
      methods:["Preparation of the nose cone and connection region structural model.","Use of CFD-derived loads in the structural assessment.","Examination of buckling behaviour alongside static stress and displacement results."],
      metrics:[["Load source","CFD"],["Assessment","Static / Buckling"]],
      images:[["nose-stress.webp","Equivalent stress from the nose cone static structural analysis."],["nose-deformation.webp","Total displacement from the nose cone static structural analysis."]],
      conclusion:"The assessment linked CFD loads to structural response, examining the nose cone’s behaviour under load together with its connection region and geometry.",
      scope:"The gallery shows static structural results. These images are not presented as buckling mode shapes.",tools:"ANSYS Fluent · ANSYS Mechanical · SolidWorks"
    },
    bulkhead: {
      kicker:"YILDIRIM ROKET · STATIC STRUCTURAL",title:"Avionics bulkhead static analysis",
      summary:"I investigated stress and displacement in the bulkhead supporting avionics components under flight loads.",
      problem:"Assess the effects of component masses and flight accelerations on the bulkhead and its connection regions.",
      methods:["Preparation and simplification of the bulkhead geometry.","Definition of loads from component masses and flight accelerations.","Idealisation of mounting regions and review of static results at different load levels."],
      metrics:[["Component","Avionics bulkhead"],["Solution","Static structural"]],
      images:[["bulkhead-stress.webp","Equivalent stress distribution in the avionics bulkhead."]],
      conclusion:"Results were used to examine the support plate’s stress distribution and deformation, and assess its connections and design.",
      scope:"The results are static model assessments based on the specified loads and mounting assumptions.",tools:"ANSYS Mechanical · SolidWorks"
    },
    flutter: {
      kicker:"YILDIRIM ROKET · MODAL / AEROELASTICITY",title:"Preliminary fin flutter assessment",
      summary:"I examined fin bending and torsion using modal analysis and hand calculations, using natural frequencies as inputs to an approximate flutter assessment.",
      problem:"Understand fin dynamics and establish frequency and mode-shape inputs for a preliminary aeroelastic assessment.",
      methods:["Linear, undamped modal analysis of a root-clamped fin.","Identification of bending and torsional modes and comparison of frequencies across mesh resolutions.","Preliminary assessment using analytical frequency calculations and an approximate flutter approach."],
      metrics:[["Modal bending frequency","103.22 Hz"],["Modal torsional frequency","697.04 Hz"]],
      images:[["flutter-bending.webp","Fin bending mode shape; modal amplitudes are normalised."],["flutter-torsion.webp","Fin torsional mode shape; modal amplitudes are normalised."]],
      conclusion:"Bending and torsional behaviour were identified, and numerical and analytical results were compared as part of a preliminary assessment.",
      scope:"This is a preliminary sizing study, not a fully coupled aeroelastic flutter solution. Mode-shape amplitudes do not represent displacement under a physical applied load.",tools:"ANSYS Mechanical · Analytical calculations"
    }
  }
};

"use strict";
window.PortfolioProjectsEn = {
  bias: {
    kicker: "BİAS CAE COMPETITION · TOP 10 FINALIST",
    title: "Aerostructural analysis of a rocket fin support system",
    summary: "External-flow CFD, one-way FSI, static structural analysis and modal analysis were combined to study the fins and their support assembly at a critical flight condition.",
    problem: "Understand how aerodynamic loads are transferred to the fin–mount assembly and assess its global, local and dynamic behaviour. The flight condition was selected by considering dynamic pressure and angle of attack together.",
    methods: ["Compressible external-flow simulation in Cradle scFLOW using the SST k–ω turbulence model.", "Mapping CFD pressure loads onto FEM surfaces in a shared coordinate system using scCONVERTER.", "Static and modal assessments at three mesh resolutions using MSC Apex / Nastran.", "Assessment of mesh-dependent stresses around holes using a local model and analytical connection checks."],
    metrics: [["Flight condition", "0.712 Mach"], ["Max. displacement", "0.634 mm"], ["First natural frequency", "94.1 Hz"]],
    images: [
      ["bias-flow.webp", "CFD velocity field and flow vectors in the fin region."],
      ["bias-fsi.webp", "Structural model and static solution after load mapping."],
      ["bias-deformation.webp", "Displacement distribution of the global static model."],
      ["bias-modal.webp", "Representative mode shape of the support subsystem; modal amplitudes are normalised."]
    ],
    conclusion: "Global displacement approached similar values as the mesh was refined. Peak stress around the holes remained mesh-dependent and was treated as a separate local assessment. Natural frequencies and mode shapes were examined through modal analysis.",
    scope: "The FSI coupling was one-way: structural deformation was not fed back into the flow solution. Load convergence within the 2-layer series does not remove uncertainty in boundary-layer resolution. The structural model is linear elastic and the modal model is undamped. PLA was assumed to be homogeneous and isotropic. Experimental validation is required for a final suitability assessment.",
    tools: "Cradle scFLOW / scPOST · scCONVERTER · MSC Apex · MSC Nastran · SolidWorks · OpenRocket"
  },
  motor: {
    kicker: "STRUCTURAL ANALYSIS · TOPOLOGY STUDY · MECHANICAL DESIGN",
    title: "Motor support system mass reduction",
    summary: "The stress response of a motor support assembly comprising multiple bulkheads and tie rods was investigated. Design changes guided by structural analysis and topology studies achieved a 400 g mass reduction.",
    problem: "Understand load transfer and component behaviour in the motor support system, and reassess material use in the tie rods.",
    methods: ["Assembly-level modelling of the tie rods and bulkheads.", "Assessment of stress distribution through static structural analysis.", "Use of topology studies and analysis results to reduce the design’s mass."],
    metrics: [["Design outcome", "400 g saved"], ["Model level", "System / assembly"]],
    images: [
      ["motor-assembly.webp", "Geometry of the motor support assembly with tie rods and multiple bulkheads."],
      ["motor-stress.webp", "Equivalent stress distribution in the motor support system."]
    ],
    conclusion: "Analysis results informed changes to the tie rods, reducing system mass by 400 g. The study demonstrates the use of simulation results to guide a concrete design change.",
    scope: "The gallery shows the system geometry and structural analysis results. The reported mass saving refers to the completed design study.",
    tools: "ANSYS Mechanical · SolidWorks"
  },
  tank: {
    kicker: "İTÜ UZAYTEK · MULTIPHASE FLOW · TRANSIENT CFD",
    title: "Feed tank and blowdown studies",
    summary: "The N₂O tank and N₂ pressurisation requirements of a combustion chamber feed system were investigated. Analytical orifice sizing was compared with CFD results, while a separate blowdown model examined transient tank pressure.",
    problem: "Determine an outlet orifice appropriate for the target mass flow rate and examine tank behaviour during discharge.",
    methods: ["Calculation of tank volume and feed requirements from system specifications.", "Preliminary analytical orifice sizing and multiphase CFD comparisons of different diameters.", "Definition of liquid and gas regions, followed by assessment of phase distribution and mass-flow histories.", "Investigation of blowdown pressure in a separate transient, 2D axisymmetric model."],
    metrics: [["Design target", "1.15 kg/s"], ["Orifice study", "Multiphase CFD"], ["Blowdown model", "Transient / 2D"]],
    images: [
      ["tank-phases.webp", "Phase distribution showing liquid and gas regions in the feed tank."],
      ["tank-flow.webp", "Mass-flow history from the orifice study. The negative sign reflects the outlet direction."],
      ["tank-blowdown.webp", "Transient tank pressure decay in the separate blowdown model."]
    ],
    conclusion: "The analytically sized orifice was reassessed using CFD solutions for different diameters. The blowdown study was used to compare transient tank pressure behaviour.",
    scope: "The orifice / pressurisation and blowdown studies represent different modelling conditions. These are numerical design assessments and are not presented as experimental validation.",
    tools: "ANSYS Fluent · ANSYS Meshing"
  }
};

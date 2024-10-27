import zero from "../assets/Blood_Test(1).png";
import one from "../assets/Lipid.png";
import two from "../assets/UrineTest.png";
import three from "../assets/TB_Profile.png";
import four from "../assets/Kidney.png";
import five from "../assets/HBSAGS.png";
import six from "../assets/Pancreas.png";
import seven from "../assets/Ecg.png";
import eight from "../assets/fitness.png";
// import nine from "../assets/CBC.png";
import ten from "../assets/ANC.png";
import eleven from "../assets/HIV.png";
import tweleve from "../assets/Full_body.png";
import thirteen from "../assets/CBC.png";
import fourteen from "../assets/double_marker.png";
import fifteen from "../assets/viral_marker.png";
import sixteen from "../assets/vdrl.png";
let services = [
  {
    name: "ANC Profile",
    price: 1500,
    img: ten,
    about:
      "he ANC Profile test, or Absolute Neutrophil Count profile, measures the number of neutrophils, a type of white blood cell that plays a crucial role in the body's immune response, particularly in fighting infections. The ANC is calculated from a complete blood count (CBC) and is essential for assessing a person's immune status. The ANC Profile is often ordered when a patient shows signs of infection, has unexplained fever, or is undergoing treatments that could affect white blood cell counts, such as chemotherapy. ",
  },
  {
    name: "Fitness Checkup",
    price: 1500,
    img: eight,
    about:
      "A Fitness Checkup test typically refers to a comprehensive assessment aimed at evaluating an individual's overall health and fitness levels. This checkup can help identify potential health issues and provide insights into one's physical condition. Components of a fitness checkup may include:1] Medical History Review: Discussing past medical conditions, family history, and lifestyle factors.2] Physical Examination: A general health assessment by a healthcare provider.3] Blood Tests: Evaluating cholesterol levels, blood sugar, and other metabolic markers.4] Body Composition Analysis: Measuring body fat percentage, muscle mass, and overall body weight.5] Cardiovascular Fitness Tests: Assessing heart health and endurance through tests like treadmill stress tests or VO2 max testing.6] Flexibility and Strength Assessments: Evaluating muscle strength, flexibility, and balance through various physical tests.7] Nutrition Evaluation: Analyzing dietary habits and recommending changes for a healthier lifestyle.",
  },
  {
    name: "CBC Checkup",
    price: 150,
    img: thirteen,
    about:
      "A CBC (Complete Blood Count) checkup test is a common blood test that provides a comprehensive overview of an individual’s overall health and detects various disorders. It measures several components of blood, including:1] Red Blood Cells (RBCs): These cells carry oxygen from the lungs to the rest of the body. The RBC count can help diagnose anemia and other conditions.2] Hemoglobin (Hb): The protein in red blood cells that carries oxygen. Low levels can indicate anemia.3] Hematocrit (Hct): The proportion of blood volume that is made up of red blood cells. It helps assess dehydration or anemia.4] White Blood Cells (WBCs): These cells are part of the immune system and help fight infections. An elevated or decreased WBC count can indicate various medical conditions, including infections or blood disorders.5] Platelets: These are small cell fragments that help with blood clotting. Abnormal platelet levels can indicate bleeding disorders or other medical issues.6] Mean Corpuscular Volume (MCV): This measures the average size of red blood cells, helping to classify types of anemia.7] Mean Corpuscular Hemoglobin (MCH) and Mean Corpuscular Hemoglobin Concentration (MCHC): These provide information about the amount and concentration of hemoglobin in red blood cells.",
  },
  {
    name: "VDRL Test",
    price: 150,
    img: sixteen,
    about:
      "The VDRL test, or Venereal Disease Research Laboratory test, is a blood test used primarily to screen for syphilis, a sexually transmitted infection caused by the bacterium Treponema pallidum. The VDRL test detects non-treponemal antibodies that are produced in response to the infection.",
  },
  {
    name: "Liver Profile",
    price: 600,
    img: six,
    about:
      "A liver profile, also known as a liver function test (LFT), is a group of blood tests that assess the health and function of the liver. It measures various enzymes, proteins, and substances produced by the liver, providing insight into its overall health and potential liver diseases.",
  },
  {
    name: "Lipid Profile",
    price: 400,
    img: one,
    about:
      "A lipid test, also known as a lipid panel or lipid profile, is a blood test that measures the levels of different types of fats (lipids) in your blood. It helps assess your risk of heart disease and other cardiovascular conditions.",
  },
  {
    name: "Urine Routine",
    price: 100,
    img: two,
    about:
      "A urine test, also known as urinalysis, is a common diagnostic tool used to assess various health conditions. It involves analyzing a urine sample to gather information about the body’s metabolic state, kidney function, and overall health.",
  },

  {
    name: "Kidney Profile",
    price: 800,
    img: four,
    about:
      "A kidney profile, also known as a renal profile or kidney function test, is a set of blood and urine tests that assess how well the kidneys are functioning. It helps diagnose kidney diseases and monitor existing kidney conditions.",
  },
  {
    name: "HBSAGS",
    price: 400,
    img: five,
    about:
      "HBsAg, or Hepatitis B Surface Antigen, is a protein on the surface of the Hepatitis B virus (HBV). Its presence in the blood indicates that a person is currently infected with the virus and is potentially contagious.",
  },

  // {
  //   name: "Stool test ",
  //   price: 150,
  //   img: nine,
  //   about:
  //     "A stool test, also known as a stool analysis or fecal test, is a laboratory examination of a sample of stool (feces) to assess digestive health and identify various gastrointestinal conditions. Stool tests can help diagnose infections, malabsorption disorders, and other gastrointestinal diseases.",
  // },
  {
    name: "Hiv Test",
    price: 400,
    img: eleven,
    about:
      "An HIV test is a medical test used to detect the presence of the Human Immunodeficiency Virus (HIV) in a person's body. Early diagnosis is crucial for effective management and treatment of HIV, which can lead to Acquired Immunodeficiency Syndrome (AIDS) if not treated.",
  },
  {
    name: "Full Body Checkup",
    price: 1800,
    img: tweleve,
    about:
      "A full body checkup is a comprehensive health assessment that evaluates various aspects of your overall health. It typically includes a range of tests and screenings designed to detect potential health issues early.",
  },
  {
    name: "Fever Profile",
    price: 500,
    img: three,
    about:
      "A fever profile test is a set of laboratory tests conducted to identify the underlying cause of a fever, especially when it is persistent or unexplained. It typically includes a variety of tests to check for infections, autoimmune conditions, or other illnesses.",
  },
  {
    name: "Thyroid Profile",
    price: 400,
    img: zero,
    about:
      "A thyroid profile test is a series of blood tests used to evaluate the function of the thyroid gland, which plays a crucial role in regulating metabolism, growth, and energy levels. The results of a thyroid profile can help diagnose conditions such as hypothyroidism (underactive thyroid), hyperthyroidism (overactive thyroid), and other thyroid disorders. Based on the results, further testing or treatment may be recommended.",
  },
  {
    name: "HCV",
    price: 400,
    img: seven,
    about:
      "An HSC test, or Hematopoietic Stem Cell test, typically refers to tests related to hematopoietic stem cells, which are responsible for the production of blood cells. However, the term HSC test can sometimes be used in different contexts.",
  },
  {
    name: "Viral marker",
    price: 1500,
    img: fourteen,
    about:
      "The term viral marker test typically refers to tests that detect specific markers associated with viral infections, particularly for viruses like hepatitis B, hepatitis C, HIV, and others. These tests help identify whether a person is currently infected with a virus, has been previously exposed, or has developed immunity. The specific markers tested depend on the virus in question and the clinical context. These tests are crucial for diagnosis, monitoring treatment, and determining the need for preventive measures.",
  },
  {
    name: "Dual Marker",
    price: 1800,
    img: fifteen,
    about:
      "The The dual marker test typically refers to a specific blood test used to assess the risk of certain conditions, most commonly in the context of pregnancy. This test usually measures two key markers:1] Pregnancy-Associated Plasma Protein A (PAPP-A): A protein produced by the placenta, its levels can indicate potential issues with the pregnancy.2] Free Beta-hCG (human chorionic gonadotropin): A hormone produced during pregnancy. Its levels can provide information about the viability of the pregnancy and potential risk factors.In prenatal screening, the dual marker test is often performed during the first trimester (usually between 10 and 14 weeks) to help assess the risk of chromosomal abnormalities, such as Down syndrome (trisomy 21) and other conditions.",
  },
];

export default services;

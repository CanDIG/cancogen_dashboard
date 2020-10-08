/*
 * This JS Object stores all the tables names and its columns names.
 * This object can be used for visualizations and places where the name of the columns are needed.
 */

import { DefaultColumnFilter, SelectColumnFilter } from '../components/Filters/filters';

export const tableSchema = {
  patients: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: true },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: true },
    name: { Filter: DefaultColumnFilter, active: false, hidden: true },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: true },
    otherIds: { Filter: DefaultColumnFilter, active: false, hidden: true },
    dateOfBirth: { Filter: DefaultColumnFilter, active: true, hidden: false },
    gender: { Filter: SelectColumnFilter, active: true, hidden: false },
    ethnicity: { Filter: SelectColumnFilter, active: true, hidden: false },
    race: { Filter: SelectColumnFilter, active: true, hidden: false },
    provinceOfResidence: { Filter: SelectColumnFilter, active: true, hidden: false },
    dateOfDeath: { Filter: DefaultColumnFilter, active: true, hidden: false },
    causeOfDeath: { Filter: SelectColumnFilter, active: true, hidden: false },
    autopsyTissueForResearch: { Filter: DefaultColumnFilter, active: true, hidden: true },
    priorMalignancy: { Filter: DefaultColumnFilter, active: true, hidden: true },
    dateOfPriorMalignancy: { Filter: DefaultColumnFilter, active: true, hidden: true },
    familyHistoryAndRiskFactors: { Filter: DefaultColumnFilter, active: true, hidden: true },
    familyHistoryOfPredispositionSyndrome: { Filter: DefaultColumnFilter, active: true, hidden: true },
    detailsOfPredispositionSyndrome: { Filter: DefaultColumnFilter, active: true, hidden: true },
    geneticCancerSyndrome: { Filter: DefaultColumnFilter, active: true, hidden: true },
    otherGeneticConditionOrSignificantComorbidity: { Filter: DefaultColumnFilter, active: true, hidden: true },
    occupationalOrEnvironmentalExposure: { Filter: DefaultColumnFilter, active: true, hidden: true },
  },
  enrollments: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    enrollmentInstitution: { Filter: SelectColumnFilter, active: true, hidden: false },
    enrollmentApprovalDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    crossEnrollment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    otherPersonalizedMedicineStudyName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    otherPersonalizedMedicineStudyId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    ageAtEnrollment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    eligibilityCategory: { Filter: DefaultColumnFilter, active: true, hidden: false },
    statusAtEnrollment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    primaryOncologistName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    primaryOncologistContact: { Filter: DefaultColumnFilter, active: true, hidden: false },
    referringPhysicianName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    referringPhysicianContact: { Filter: DefaultColumnFilter, active: true, hidden: false },
    summaryOfIdRequest: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatingCentreName: { Filter: SelectColumnFilter, active: true, hidden: false },
    treatingCentreProvince: { Filter: SelectColumnFilter, active: true, hidden: false },
  },
  treatments: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    courseNumber: { Filter: SelectColumnFilter, active: true, hidden: false },
    therapeuticModality: { Filter: SelectColumnFilter, active: true, hidden: false },
    treatmentPlanType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentIntent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    stopDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reasonForEndingTheTreatment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    responseToTreatment: { Filter: SelectColumnFilter, active: true, hidden: false },
    responseCriteriaUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    dateOfRecurrenceOrProgressionAfterThisTreatment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    unexpectedOrUnusualToxicityDuringTreatment: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  samples: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    sampleId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    diagnosisId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    localBiobankId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    collectionDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    collectionHospital: { Filter: SelectColumnFilter, active: true, hidden: false },
    sampleType: { Filter: SelectColumnFilter, active: true, hidden: false },
    tissueDiseaseState: { Filter: DefaultColumnFilter, active: true, hidden: false },
    anatomicSiteTheSampleObtainedFrom: { Filter: SelectColumnFilter, active: true, hidden: false },
    cancerType: { Filter: SelectColumnFilter, active: true, hidden: false },
    cancerSubtype: { Filter: DefaultColumnFilter, active: true, hidden: false },
    pathologyReportId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    morphologicalCode: { Filter: DefaultColumnFilter, active: true, hidden: false },
    topologicalCode: { Filter: DefaultColumnFilter, active: true, hidden: false },
    shippingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    receivedDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    qualityControlPerformed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    estimatedTumorContent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    quantity: { Filter: DefaultColumnFilter, active: true, hidden: false },
    units: { Filter: SelectColumnFilter, active: true, hidden: false },
    associatedBiobank: { Filter: DefaultColumnFilter, active: true, hidden: false },
    otherBiobank: { Filter: DefaultColumnFilter, active: true, hidden: false },
    sopFollowed: { Filter: SelectColumnFilter, active: true, hidden: false },
    ifNotExplainAnyDeviation: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  diagnoses: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    diagnosisId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    diagnosisDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    ageAtDiagnosis: { Filter: DefaultColumnFilter, active: true, hidden: false },
    cancerType: { Filter: SelectColumnFilter, active: true, hidden: false },
    classification: { Filter: SelectColumnFilter, active: true, hidden: false },
    cancerSite: { Filter: SelectColumnFilter, active: true, hidden: false },
    histology: { Filter: DefaultColumnFilter, active: true, hidden: false },
    methodOfDefinitiveDiagnosis: { Filter: SelectColumnFilter, active: true, hidden: false },
    sampleType: { Filter: SelectColumnFilter, active: true, hidden: false },
    sampleSite: { Filter: SelectColumnFilter, active: true, hidden: false },
    tumorGrade: { Filter: SelectColumnFilter, active: true, hidden: false },
    gradingSystemUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    sitesOfMetastases: { Filter: SelectColumnFilter, active: true, hidden: false },
    stagingSystem: { Filter: DefaultColumnFilter, active: true, hidden: false },
    versionOrEditionOfTheStagingSystem: { Filter: SelectColumnFilter, active: true, hidden: false },
    specificTumorStageAtDiagnosis: { Filter: SelectColumnFilter, active: true, hidden: false },
    prognosticBiomarkers: { Filter: DefaultColumnFilter, active: true, hidden: false },
    biomarkerQuantification: { Filter: DefaultColumnFilter, active: true, hidden: false },
    additionalMolecularTesting: { Filter: DefaultColumnFilter, active: true, hidden: false },
    additionalTestType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    laboratoryName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    laboratoryAddress: { Filter: DefaultColumnFilter, active: true, hidden: false },
    siteOfMetastases: { Filter: SelectColumnFilter, active: true, hidden: false },
    stagingSystemVersion: { Filter: SelectColumnFilter, active: true, hidden: false },
    specificStage: { Filter: SelectColumnFilter, active: true, hidden: false },
    cancerSpecificBiomarkers: { Filter: DefaultColumnFilter, active: true, hidden: false },
    additionalMolecularDiagnosticTestingPerformed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    additionalTest: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  tumourboards: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    dateOfMolecularTumorBoard: { Filter: DefaultColumnFilter, active: true, hidden: false },
    typeOfSampleAnalyzed: { Filter: SelectColumnFilter, active: true, hidden: false },
    typeOfTumourSampleAnalyzed: { Filter: SelectColumnFilter, active: true, hidden: false },
    analysesDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticSampleType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    normalExpressionComparator: { Filter: DefaultColumnFilter, active: true, hidden: false },
    diseaseExpressionComparator: { Filter: DefaultColumnFilter, active: true, hidden: false },
    hasAGermlineVariantBeenIdentifiedByProfilingThatMayPredisposeToCancer: { Filter: DefaultColumnFilter, active: true, hidden: false },
    actionableTargetFound: { Filter: DefaultColumnFilter, active: true, hidden: false },
    molecularTumorBoardRecommendation: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineDnaSampleId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    tumorDnaSampleId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    tumorRnaSampleId: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineSnvDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticSnvDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    cnvsDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    structuralVariantDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    classificationOfVariants: { Filter: DefaultColumnFilter, active: true, hidden: false },
    clinicalValidationProgress: { Filter: DefaultColumnFilter, active: true, hidden: false },
    typeOfValidation: { Filter: DefaultColumnFilter, active: true, hidden: false },
    agentOrDrugClass: { Filter: DefaultColumnFilter, active: true, hidden: false },
    levelOfEvidenceForExpressionTargetAgentMatch: { Filter: DefaultColumnFilter, active: true, hidden: false },
    didTreatmentPlanChangeBasedOnProfilingResult: { Filter: DefaultColumnFilter, active: true, hidden: false },
    howTreatmentHasAlteredBasedOnProfiling: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reasonTreatmentPlanDidNotChangeBasedOnProfiling: { Filter: DefaultColumnFilter, active: true, hidden: false },
    detailsOfTreatmentPlanImpact: { Filter: DefaultColumnFilter, active: true, hidden: false },
    patientOrFamilyInformedOfGermlineVariant: { Filter: DefaultColumnFilter, active: true, hidden: false },
    patientHasBeenReferredToAHereditaryCancerProgramBasedOnThisMolecularProfiling: { Filter: DefaultColumnFilter, active: true, hidden: false },
    summaryReport: { Filter: DefaultColumnFilter, active: true, hidden: false },
    actionableExpressionOutlier: { Filter: DefaultColumnFilter, active: true, hidden: false },
    actionableGermlineVariant: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsDrug: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsDrugClass: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    actionableSomaticVariants: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsDrug: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsDrugClass: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsDiscussed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    anyActionableExpressionOutlier: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionDrug: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionDrugClass: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionTypeOfAnalysisUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionTypeOfInformationUtility: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionAlteredGene: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionNonActionableGene: { Filter: DefaultColumnFilter, active: true, hidden: false },
    expressionTypeOfAlteration: { Filter: DefaultColumnFilter, active: true, hidden: false },
    anyActionableGermlineVariants: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsTypeOfAnalysisUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsClassificationOfVariants: { Filter: DefaultColumnFilter, active: true, hidden: false },
    germlineVariantsTypeOfInformationUtility: { Filter: DefaultColumnFilter, active: true, hidden: false },
    anyActionableSomaticVariants: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsTypeOfAnalysisUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsTypeOfInformationUtility: { Filter: DefaultColumnFilter, active: true, hidden: false },
    somaticVariantsNonActionable: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  outcomes: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    physicalExamId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    dateOfAssessment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    diseaseResponseOrStatus: { Filter: SelectColumnFilter, active: true, hidden: false },
    otherResponseClassification: { Filter: DefaultColumnFilter, active: true, hidden: false },
    minimalResidualDiseaseAssessment: { Filter: DefaultColumnFilter, active: true, hidden: false },
    methodOfResponseEvaluation: { Filter: DefaultColumnFilter, active: true, hidden: false },
    responseCriteriaUsed: { Filter: DefaultColumnFilter, active: true, hidden: false },
    summaryStage: { Filter: DefaultColumnFilter, active: true, hidden: false },
    sitesOfAnyProgressionOrRecurrence: { Filter: DefaultColumnFilter, active: true, hidden: false },
    vitalStatus: { Filter: DefaultColumnFilter, active: true, hidden: false },
    height: { Filter: DefaultColumnFilter, active: true, hidden: false },
    weight: { Filter: DefaultColumnFilter, active: true, hidden: false },
    heightUnits: { Filter: SelectColumnFilter, active: true, hidden: false },
    weightUnits: { Filter: SelectColumnFilter, active: true, hidden: false },
    performanceStatus: { Filter: DefaultColumnFilter, active: true, hidden: false },
    overallSurvivalInMonths: { Filter: DefaultColumnFilter, active: true, hidden: false },
    diseaseFreeSurvivalInMonths: { Filter: DefaultColumnFilter, active: true, hidden: false },
    siteOfRelapseOrProgression: { Filter: DefaultColumnFilter, active: true, hidden: false },
    intervalProgressionOrRecurrence: { Filter: DefaultColumnFilter, active: true, hidden: false },
    intervalRegressionOrDecreaseInDisease: { Filter: DefaultColumnFilter, active: true, hidden: false },
    levelOfMalignancy: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentInducedNeoplasmSite: { Filter: DefaultColumnFilter, active: true, hidden: false },
    dateOfDiagnosisOfTreatmentInducedNeoplasm: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  complications: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    date: { Filter: DefaultColumnFilter, active: true, hidden: false },
    lateComplicationOfTherapyDeveloped: { Filter: DefaultColumnFilter, active: true, hidden: false },
    lateToxicityDetail: { Filter: DefaultColumnFilter, active: true, hidden: false },
    suspectedTreatmentInducedNeoplasmDeveloped: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentInducedNeoplasmDetails: { Filter: DefaultColumnFilter, true: false, hidden: false },
  },
  consents: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    consentId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    consentDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    consentVersion: { Filter: DefaultColumnFilter, active: true, hidden: false },
    patientConsentedTo: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reasonForRejection: { Filter: DefaultColumnFilter, active: true, hidden: false },
    wasAssentObtained: { Filter: DefaultColumnFilter, active: true, hidden: false },
    dateOfAssent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    assentFormVersion: { Filter: DefaultColumnFilter, active: true, hidden: false },
    ifAssentNotObtainedWhyNot: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reconsentDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reconsentVersion: { Filter: DefaultColumnFilter, active: true, hidden: false },
    consentingCoordinatorName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    previouslyConsented: { Filter: DefaultColumnFilter, active: true, hidden: false },
    nameOfOtherBiobank: { Filter: DefaultColumnFilter, active: true, hidden: false },
    hasConsentBeenWithdrawn: { Filter: DefaultColumnFilter, active: true, hidden: false },
    dateOfConsentWithdrawal: { Filter: DefaultColumnFilter, active: true, hidden: false },
    typeOfConsentWithdrawal: { Filter: DefaultColumnFilter, active: true, hidden: false },
    reasonForConsentWithdrawal: { Filter: DefaultColumnFilter, active: true, hidden: false },
    consentFormComplete: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  chemotherapies: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    doseFrequency: { Filter: DefaultColumnFilter, active: true, hidden: false },
    numberOfCycle: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatingCentreName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    doseUnit: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentIntent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    route: { Filter: DefaultColumnFilter, active: true, hidden: false },
    protocolCode: { Filter: DefaultColumnFilter, active: true, hidden: false },
    stopDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    dose: { Filter: DefaultColumnFilter, active: true, hidden: false },
    daysPerCycle: { Filter: DefaultColumnFilter, active: true, hidden: false },
    type: { Filter: DefaultColumnFilter, active: true, hidden: false },
    recordingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    courseNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    systematicTherapyAgentName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentPlanId: { Filter: DefaultColumnFilter, active: false, hidden: false },
  },
  radiotherapies: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    radiationSite: { Filter: DefaultColumnFilter, active: true, hidden: false },
    siteNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    adjacentFractions: { Filter: DefaultColumnFilter, active: true, hidden: false },
    radiationType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    boostDose: { Filter: DefaultColumnFilter, active: true, hidden: false },
    testResult: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startIntervalRadRaw: { Filter: DefaultColumnFilter, active: true, hidden: false },
    adjacentFields: { Filter: DefaultColumnFilter, active: true, hidden: false },
    baseline: { Filter: DefaultColumnFilter, active: true, hidden: false },
    technique: { Filter: DefaultColumnFilter, active: true, hidden: false },
    stopDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    courseNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    brachytherapyDose: { Filter: DefaultColumnFilter, active: true, hidden: false },
    testResultStd: { Filter: DefaultColumnFilter, active: true, hidden: false },
    complete: { Filter: DefaultColumnFilter, active: true, hidden: false },
    boostSite: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatedRegion: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startIntervalRad: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatingCentreName: { Filter: DefaultColumnFilter, active: true, hidden: false },
    totalDose: { Filter: DefaultColumnFilter, active: true, hidden: false },
    therapeuticModality: { Filter: DefaultColumnFilter, active: true, hidden: false },
    recordingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    radiotherapyDose: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentPlanId: { Filter: DefaultColumnFilter, active: false, hidden: false },
  },
  immunotherapies: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    immunotherapyType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    immunotherapyTarget: { Filter: DefaultColumnFilter, active: true, hidden: false },
    immunotherapyDetail: { Filter: DefaultColumnFilter, active: true, hidden: false },
    courseNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    treatmentPlanId: { Filter: DefaultColumnFilter, active: false, hidden: false },
  },
  surgeries: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    collectionTimePoint: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    site: { Filter: DefaultColumnFilter, active: true, hidden: false },
    diagnosisDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    type: { Filter: DefaultColumnFilter, active: true, hidden: false },
    stopDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    recordingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    courseNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  celltransplants: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    treatmentPlanId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    cellSource: { Filter: DefaultColumnFilter, active: true, hidden: false },
    courseNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    donorType: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  slides: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    sampleId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    slideId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    slideOtherId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    tumorNucleiPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    inflammatoryInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    necrosisPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    neutrophilInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    proliferatingCellsNumber: { Filter: DefaultColumnFilter, active: true, hidden: false },
    monocyteInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    lymphocyteInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    eosinophilInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    tumorCellsPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    stromalCellsPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    normalCellsPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
    sectionLocation: { Filter: DefaultColumnFilter, active: true, hidden: false },
    granulocyteInfiltrationPercent: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  studies: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    status: { Filter: DefaultColumnFilter, active: true, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    recordingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    endDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
  labtests: {
    id: { Filter: DefaultColumnFilter, active: false, hidden: false },
    datasetId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    name: { Filter: DefaultColumnFilter, active: false, hidden: false },
    patientId: { Filter: DefaultColumnFilter, active: false, hidden: false },
    startDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    endDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    testResults: { Filter: DefaultColumnFilter, active: true, hidden: false },
    collectionDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    recordingDate: { Filter: DefaultColumnFilter, active: true, hidden: false },
    eventType: { Filter: DefaultColumnFilter, active: true, hidden: false },
    timePoint: { Filter: DefaultColumnFilter, active: true, hidden: false },
  },
};

export default tableSchema;

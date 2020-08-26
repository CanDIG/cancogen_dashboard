//Assume data is present at this state

//Need to turn each metadata object into four objects easily mapped to tables
//Flatten and assign higher order ID to smaller objects

export function ProcessMetadata(metadata) {
    const mainTable = []
    const phenopacketsList = {}
    Object.values(metadata).forEach((entry) => {
        const mainTableEntry = {
            ID: entry.id,
            DOB: entry.date_of_birth,
            Sex: entry.sex,
            KSex: entry.karyotypic_sex,
            ethnicity: entry.ethnicity,
            height: entry.extra_properties.height,
            weight: entry.extra_properties.weight,
            education: entry.extra_properties.education,
            taxID: entry.taxonomy.id,
            taxLabel: entry.taxonomy.label,
            created: entry.created,
            updated: entry.updated,

        }
        mainTable.push(mainTableEntry)
        const ID = entry.id
        const Pheno = entry.phenopackets[0]
        phenopacketsList[ID] = Pheno
    })

    return [mainTable, phenopacketsList];

}

export function ProcessDiseases(ID, diseaseList) {
    const processedDiseases = [];
    console.log(diseaseList)
    Object.values(diseaseList).forEach((disease) => {
        const diseaseEntry = {
            ID: disease.id,
            term: disease.term.id,
            label: disease.term.label,
            comorbidities: disease.extra_properties.comorbidities_group,
            created: disease.created,
            updated: disease.updated
        }
        processedDiseases.push(diseaseEntry)
    })
    console.log(processedDiseases)
    return {[ID]: processedDiseases};
}



const tableEntry = {
    id: "",
    dob: "",
    sex: "",
    k_sex: "",
    tax_id: "",
    tax_lab: "",
    created: "",
    updated: "",
    pMetadata: [],
    phenopackets: [],
    pDiseases: []
}

const phenopacketsTable = {
    id: "",
    created: "",
    updated: "",
    biosamples: [],
    genes: [],
    variants: [],
    hts_files: []
}

const pMetadata = {
    tId: "",
    id: "",
    name: "",
    namespace_prefix: "",
    url: "",
    iri_prefix: "",
    created: "",
    updated: ""
}

const disease = {

}
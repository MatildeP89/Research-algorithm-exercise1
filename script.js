
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },

    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]



const jobSearch = (jobType, location) => {
    let results = {
        subResults: [],
        count: 0,
    }

    for (i = 0; i < jobs.length; i++) {
        const eachJob = jobs[i]

        let eachJobTitle = eachJob.title.toLowerCase()
        let eachJobLocation = eachJob.location.toLowerCase()
        let jobTypeLC = jobType.toLowerCase()
        let locationLC = location.toLowerCase()
        let resultsTitle = document.getElementById("resultsTitle")



        if (eachJobTitle.includes(jobTypeLC) &&
            eachJobLocation.includes(locationLC)
        ) {
            results.subResults.push(eachJob)
            results.count++
          }

        else {resultsTitle.textContent="Oh no, we found no matches for you today! :( "
        }

    }
    
    return results

}


const onClickJobSearch = () => {
    let jobInput=document.getElementById("jobInput")
    let locationInput=document.getElementById("areaInput")
    let jobInputVal = document.getElementById("jobInput").value
    let locationInputVal = document.getElementById("areaInput").value
    let unorderedList = document.getElementById("ul")
    let resultsTitle = document.getElementById("resultsTitle")

    const functionLink = jobSearch(jobInputVal, locationInputVal)
    

    for (i = 0; i < functionLink.subResults.length; i++) {
        
        let finalJobResult = functionLink.subResults[i]

        jobInput.textContent="" //not working
        locationInput.textContent="" //not working

        resultsTitle.textContent="Based on your search, we found " + functionLink.count + " job"
        unorderedList.innerHTML += "<li>" + finalJobResult.title + finalJobResult.location +  "</li>";
    } 

}


/* Ho provato anche a fare lo stesso codice con un bottone qui sotto ma non funziona del tutto. Se possibile vorrei del feedback per poter capire gli errori e migliorare. Grazie :)


let jobInput = document.getElementById("jobInput")
let locationInput = document.getElementById("areaInput")
let resultsTitle = document.getElementById("resultsTitle")
let ulDiv = document.getElementById("ulDiv")
let ul = document.getElementById("ul")


let onClickJobSearch = (jobInput, locationInput) => {

    let results = {
        subResults: [],
        count: 0
    }


    for (let i = 0; i < jobs.length; i++) {
        let eachJob = jobs[i]
        console.log(eachJob)

        let eachJobTitleLC = eachJob.title.toLowerCase()
        let eachJobLocationLC = eachJob.location.toLowerCase()
        console.log(eachJobTitleLC, eachJobLocationLC)


        if (eachJobTitleLC.includes(jobInput.value.toLowerCase()) && eachJobLocationLC.includes(locationInput.value.toLowerCase())) {

            results.subResults.push(eachJob)
            results.count++

            let finalJobResult = results.subResults.push(eachJob)


            for (let i = 0; i < finalJobResult; i++) {

                finalJobResult[i]
                let finalJobResultTitle = finalJobResult[i].title
                let finalJobResultLocation = finalJobResult[i].location


                resultsTitle.textContent = "Based on your search, we found " + count + "jobs"
                ul.innerHTML += "<li>" + finalJobResultTitle + finalJobResultLocation + "</li>"
            }

        }

        else {
            resultsTitle.textContent = "Oops, we found no matches for you today :("
        }

    }
}*/
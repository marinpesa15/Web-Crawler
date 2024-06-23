function printReport(pages) {
    console.log("***Starting Report***");
    const sortedPages = sortPages(pages)
    for (const [url, count] of Object.entries(sortedPages)) {
        console.log(`Found ${count} internal links to ${url}`);    
    }
    console.log("***Report Ended***")
}

function sortPages(pages) {
    const pagesArray = convertObjectToArray(pages);
    const sortedPagesArray = sortArrayByValue(pagesArray);
    const sortedPages = convertArrayToObject(sortedPagesArray);
    return sortedPages
}

function convertObjectToArray(pages) {
    return Object.entries(pages);
}  

function sortArrayByValue(array) {
    return array.sort((a, b)=> b[1] - a[1]);
}

function convertArrayToObject(array) {
    let obj = {};
    array.forEach(([key, value]) => {
        obj[key] = value;
    });
    return obj;
} 

export { printReport }
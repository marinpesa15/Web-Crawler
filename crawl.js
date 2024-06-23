import { JSDOM } from "jsdom"

function normalizeURL(url) {
    let newURL = url;
    if (url.charAt(url.length - 1) === "/") {
        newURL = url.slice(0, -1);
    };
    
    const myURL = new URL(newURL);
    const normalURL = `${myURL.host}${myURL.pathname}`

    return normalURL

}

function getURLsFromHTML(htmlBody, baseURL) {
    const dom = new JSDOM(htmlBody);
    const anchorElement = dom.window.document.querySelectorAll("a");
    const urls = [];

    anchorElement.forEach(anchor => {
        const href = anchor.getAttribute("href");
        if (href) {
            const url = new URL(href, baseURL).href;
            urls.push(url);
        }
    });

    return urls;
}

async function fetchAndParseHTML(URL) {
    try {
        const response = await fetch(URL);

        if (response.status >= 400) {
            console.log("Error-Level", response.status);
            return null;
        }

        const html = await response.text();
        return html;

    } catch (err) {
        console.log("Fetch error:", err);
        return null;
    }
}

async function crawlPage(baseURL, currentURL = baseURL, pages = {}) {
    if (new URL(currentURL).hostname !== new URL(baseURL).hostname) {
        return pages;
    }

    const normalURL = normalizeURL(currentURL);
    if (pages[normalURL]) {
        pages[normalURL]++;
        return pages;
    } else {
        pages[normalURL] = 1;
    }

    const html = await fetchAndParseHTML(currentURL);
    if (!html) return pages;

    const htmlURLS = getURLsFromHTML(html, baseURL);
    for (let url of htmlURLS) {
        await crawlPage(baseURL, url, pages)
    }
    return pages;

}

export {normalizeURL, getURLsFromHTML, crawlPage};
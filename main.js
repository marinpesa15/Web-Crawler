import { crawlPage } from "./crawl.js"
import { printReport } from "./report.js";

function main() {
    const args = process.argv;
    const numArgs = args.length - 2;
    if (numArgs > 1) {
        console.log("Too many URLs found");
        process.exit(1);
    }else if (numArgs < 1) {
        console.log("No BaseURL found");
        process.exit(1)
    } else {
        const baseURL = process.argv[2];
        crawlPage(baseURL).then(pages => printReport(pages));
    }
}

main();
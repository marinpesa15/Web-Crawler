# Web-Crawler

## Overview
Web-Crawler is a Node.js application designed to crawl web pages, extract useful information, and generate reports. This tool is useful for scraping data from websites for various purposes, including data analysis, research, and content aggregation.

## Features
- Crawl and scrape web pages
- Extract specific data based on given criteria
- Generate reports from the scraped data
- Automated tests for reliability

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/marinpesa15/Web-Crawler.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Web-Crawler
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. To start the crawler:
    ```bash
    node main.js
    ```
2. Configuration:
   - Modify `crawl.js` to set the target URL and extraction logic.
   - Use `report.js` to customize the report generation.

## Running Tests
To run the automated tests:
```bash
npm test
```

## File Structure
- `crawl.js`: Contains the main crawling and data extraction logic.
- `crawl.test.js`: Contains tests for the crawler.
- `main.js`: Entry point for starting the crawler.
- `report.js`: Handles report generation from the extracted data.
- `package.json`: Lists dependencies and project metadata.
- `.gitignore`: Specifies files to be ignored by Git.


## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.


## Contact
For any inquiries or feedback, please contact [Marin Pesa](https://github.com/marinpesa15)

# Match this version tag to your installed @playwright/test version (check via: npx playwright --version)
FROM mcr.microsoft.com/playwright:v1.64.1-noble

WORKDIR /app

# Copy dependency manifests first to cache npm install
COPY package.json package-lock.json ./
RUN npm ci
COPY .env .env

# Copy TypeScript config, Playwright config, and source folders (api, fixtures, pages, testdata, tests, utils)
COPY tsconfig.json playwright.config.ts ./
COPY fixtures ./fixtures
COPY pages ./pages

COPY testdata ./testdata
COPY tests ./tests
COPY utils ./utils

RUN mkdir -p /app/reports \
    /app/allure-results \
    /app/allure-reports \
    /app/test-results

RUN chmod -R 777 /app/reports \
    /app/allure-results \
    /app/allure-reports \
    /app/test-results
# Run Playwright tests by default
CMD ["npx", "playwright", "test"]
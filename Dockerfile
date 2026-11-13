# Match this version tag to your installed @playwright/test version (check via: npx playwright --version)
FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

# Copy dependency manifests first to cache npm install
COPY package.json package-lock.json ./
RUN npm ci

# Copy TypeScript config, Playwright config, and source folders (api, fixtures, pages, testdata, tests, utils)
COPY tsconfig.json playwright.config.ts ./
COPY api ./api
COPY fixtures ./fixtures
COPY pages ./pages

COPY testdata ./testdata
COPY tests ./tests
COPY utils ./utils

# Run Playwright tests by default
CMD ["npx", "playwright", "test"]
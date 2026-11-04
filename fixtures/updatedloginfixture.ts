import { test as base, expect, Page } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginUrl = process.env.WEB_APP_URL;

    if (!loginUrl) {
      throw new Error("WEB_APP_URL is missing in .env");
    }

    console.log("Navigating to:", loginUrl);

    await page.goto(loginUrl, {
      waitUntil: "networkidle",
    });

    // Open OTP login screen
    await page.getByTestId("otpLoginBtn").click();

    const otp = "123456";

    for (let i = 0; i < otp.length; i++) {
      await page.locator(`#otp${i + 1}`).fill(otp[i]);
    }

    // Verify OTP
    await page.getByTestId("verifyOtpBtn").click();

    // Wait for response/navigation
    await page.waitForTimeout(5000);

    console.log("Current URL:", page.url());

    // Capture cookies
    const cookies = await page.context().cookies();
    console.log(
      "Cookies:",
      JSON.stringify(cookies, null, 2)
    );

    // Capture localStorage
    const localStorageData = await page.evaluate(() => {
      const store: Record<string, string> = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key) {
          store[key] = localStorage.getItem(key) || "";
        }
      }

      return store;
    });

    console.log(
      "Local Storage:",
      JSON.stringify(localStorageData, null, 2)
    );

    // Capture Session Storage
    const sessionStorageData = await page.evaluate(() => {
      const store: Record<string, string> = {};

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);

        if (key) {
          store[key] = sessionStorage.getItem(key) || "";
        }
      }

      return store;
    });

    console.log(
      "Session Storage:",
      JSON.stringify(sessionStorageData, null, 2)
    );

    // Take screenshot after OTP verification
    await page.screenshot({
      path: "otp-login-result.png",
      fullPage: true,
    });

    // Log page content for debugging
    const pageText = await page.locator("body").textContent();
    console.log("PAGE TEXT:");
    console.log(pageText);

    // Dashboard Verification (adjust if needed)
    try {
      await expect(page).not.toHaveURL(/login/, {
        timeout: 10000,
      });

      console.log("Login Successful");
    } catch {
      console.log("Still on Login Page");
    }

    await use(page);
  },
});

export { expect };

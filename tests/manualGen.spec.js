import { test, expect } from '@playwright/test';

test.only("Verify login feature", async ({page}) => {
    await page.pause()
    await page.goto("https://the-internet.herokuapp.com/login")
    // await page.locator("input#username").click()
    // await page.locator("//input[@id='username']").click()
    await page.locator("id=username").click()
    await page.locator("//input[@id='username']").fill("tomsmith")

    await page.locator("#password").click()
    await page.locator("#password").fill("SuperSecretPassword!")

    await page.getByRole('button', { type: 'submit' }).click();

    await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible()
    await expect(page.locator("//a[@class='button secondary radius']//i[contains(text(),'Logout')]")).toBeVisible()

    await page.pause()
})
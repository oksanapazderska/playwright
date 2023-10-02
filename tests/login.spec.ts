import { test, expect } from '@playwright/test';
import {fillAndSubmitLogin} from "../src/businessFunctions/loginFunctions";

test.describe('My Login application', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await fillAndSubmitLogin(page, {username: 'tomsmith', password: 'SuperSecretPassword!'})

    await expect(page.getByText('You logged into a secure area!')).toBeVisible()
  });
})

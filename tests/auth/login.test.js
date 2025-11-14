import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage.js";

test("User can log in", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Given
  await loginPage.open();

  // When
  await loginPage.login("testuser", "testpassword");

  // Then
  await expect(page).toHaveURL("/page-after-login");
});

import { test, expect } from '@playwright/test';

test.describe('Avadi Connect Onboarding & Main Flow', () => {
  test('should go through the onboarding screens, select ward, register, verify OTP, and navigate dashboard', async ({ page }) => {
    // 1. Splash Screen
    await page.goto('/splash');
    await expect(page).toHaveURL(/\/welcome/);

    // 2. Welcome Screen
    const getStartedBtn = page.getByRole('button', { name: 'Get Started' });
    await expect(getStartedBtn).toBeVisible();
    await getStartedBtn.click();
    await expect(page).toHaveURL(/\/onboarding\/civic/);

    // Onboarding Civic
    const nextBtn1 = page.getByRole('button', { name: 'Next' });
    await expect(nextBtn1).toBeVisible();
    await nextBtn1.click();
    await expect(page).toHaveURL(/\/onboarding\/safety/);

    // Onboarding Safety
    const nextBtn2 = page.getByRole('button', { name: 'Next' });
    await expect(nextBtn2).toBeVisible();
    await nextBtn2.click();
    await expect(page).toHaveURL(/\/ward-selection/);

    // 3. Ward Selection Screen
    const wardCard = page.getByRole('button', { name: 'Ward 2 Avadi South' });
    await expect(wardCard).toBeVisible();
    await wardCard.click();

    // Click Continue
    const continueBtn = page.getByRole('button', { name: 'Continue' });
    await expect(continueBtn).toBeVisible();
    await continueBtn.click();
    await expect(page).toHaveURL(/\/registration/);

    // 4. Registration Screen
    const registerBtn = page.getByRole('button', { name: 'Register' });
    await expect(registerBtn).toBeVisible();
    await registerBtn.click();
    await expect(page).toHaveURL(/\/otp/);

    // 5. OTP verification
    const verifyOtpBtn = page.getByRole('button', { name: 'Verify OTP' });
    await expect(verifyOtpBtn).toBeVisible();
    await verifyOtpBtn.click();
    await expect(page).toHaveURL(/\/location-permission/);

    // 6. Location Permission
    const allowLocationBtn = page.getByRole('button', { name: 'Allow Location' });
    await expect(allowLocationBtn).toBeVisible();
    await allowLocationBtn.click();
    await expect(page).toHaveURL(/\/choose-appearance/);

    // 7. Choose Appearance
    const darkThemeBtn = page.getByRole('button', { name: 'Dark Mode' });
    await expect(darkThemeBtn).toBeVisible();
    await darkThemeBtn.click();

    const continueBtn2 = page.getByRole('button', { name: 'Continue' });
    await expect(continueBtn2).toBeVisible();
    await continueBtn2.click();
    await expect(page).toHaveURL(/\/home/);

    // 8. Home Dashboard Navigation Checks
    // Click notifications bell icon (top right) using exact SVG class and picking the first one
    const bellBtn = page.locator('button').filter({ has: page.locator('svg.lucide-bell') }).first();
    await expect(bellBtn).toBeVisible();
    await bellBtn.click();
    await expect(page).toHaveURL(/\/alerts/);

    // Go back using the back button
    const backBtn = page.locator('button').filter({ has: page.locator('svg.lucide-chevron-left') }).first();
    await expect(backBtn).toBeVisible();
    await backBtn.click();
    await expect(page).toHaveURL(/\/home/);

    // Click SOS action button
    const sosBtn = page.getByRole('button', { name: 'SOS', exact: true });
    await expect(sosBtn).toBeVisible();
    await sosBtn.click();
    await expect(page).toHaveURL(/\/sos/);

    // Click back button on SOS screen
    const backBtnSos = page.locator('button').filter({ has: page.locator('svg.lucide-chevron-left') }).first();
    await expect(backBtnSos).toBeVisible();
    await backBtnSos.click();
    await expect(page).toHaveURL(/\/home/);
  });
});

import { test, expect, type Page } from '@playwright/test';

test.describe('Countries of the world', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.scrapethissite.com/pages/simple/');
  });

  test('Get information about Canada', async ({ page }) => {
    const countryInformation = page.locator('.col-md-4.country')
    .filter({ hasText: 'Canada' })
    .locator('.country-info');
    
    const countryName = await page.locator('.country-name').filter({ hasText: 'Canada' }).textContent();
    const countryCapital = await countryInformation.locator('.country-capital').textContent();
    const countryPopulation = await countryInformation.locator('.country-population').textContent();
    const countryArea = await countryInformation.locator('.country-area').textContent();
    
    console.log(`Country Name: ${countryName}`);
    console.log(`Country Capital: ${countryCapital}`);
    console.log(`Country Population: ${countryPopulation}`);
    console.log(`Country Area: ${countryArea}`);
  });

  test ('Get container', async ({ page }) => {
    const container = page.locator('.container');
    console.log(await container.locator('.row').count());    
   });

});

test.describe('Hockey teams', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.scrapethissite.com/pages/forms/');
  });

  test('Search for teams', async ({ page }) => {
    
    const searchBox_0 = page.getByTitle('Search for Teams');
    const searchBox_1 = page.getByLabel('Search for Teams');
    const searchBox_2 = page.getByPlaceholder('Search for Teams');
    const searchBox_3 = page.getByRole('textbox');
    const searchBox_4 = page.locator('input[name="q"]');
    const searchBox_5 = page.getByText('Search for Teams:');
    const searchBox_6 = page.locator('#q');

    const search_button = page.getByRole('button', { name: 'Search' });
    const first_cell = page.getByRole('cell').first();
    const first_cell_1 = page.locator('tbody tr.team').first().locator('.name');
    const first_cell_2 = page.locator('tbody tr.team').nth(1).locator('.name');
    const first_cell_3 = page.locator('tbody tr.team').count();
    const first_cell_4 = page.locator('tbody tr.team').nth(1).locator('.year');
    const first_cell_5 = page.locator('tbody tr.team').nth(1);

    await searchBox_1.fill('Boston');
    await search_button.click();
    await console.log(`searchBox_0: ${await first_cell.textContent()}`);
    await searchBox_2.fill('Buffalo');
    await search_button.click();
    await console.log(`searchBox_1: ${await first_cell_1.textContent()}`);
    await searchBox_3.fill('New Jersey');
    await search_button.click();
    await console.log(`searchBox_2: ${await first_cell_2.textContent()}`);
    await searchBox_4.fill('Toronto');
    await search_button.click();
    await console.log(`searchBox_3: ${await first_cell_3}`);
    await searchBox_5.fill('Montreal');
    await search_button.click();
    await console.log(`searchBox_4: ${await first_cell_4.textContent()}`);
    await searchBox_6.fill('Calgary');
    await search_button.click();
    await console.log(`searchBox_5: ${await first_cell_5.innerText()}`);
    await console.log('----------------------------------');
  }); 

});
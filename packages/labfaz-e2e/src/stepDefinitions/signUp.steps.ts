/* eslint-disable @cspell/spellchecker */
import { DataTable, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { ICustomWorld } from '@root/support/custom-world';

When(
  'clico no botão {string}',
  async function (this: ICustomWorld, buttonText: string) {
    const page = this.page!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    // Write code here that turns the phrase above into concrete actions
    const buttons = page.locator('button');

    await buttons.filter({ hasText: buttonText }).click();
  }
);

Then(
  'devo ver o erro {string}',
  async function (this: ICustomWorld, errorText: string) {
    const page = this.page!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    const errors = page.locator('span.error');

    const count = await errors.filter({ hasText: errorText }).count();

    return count === 1;
  }
);

When(
  'preencho o CEP {string}',
  async function (this: ICustomWorld, zipCode: string) {
    const page = this.page!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    // Write code here that turns the phrase above into concrete actions
    await Promise.all([
      page.waitForResponse(
        (response) =>
          response.url().startsWith('https://viacep.com.br/') &&
          response.status() === 200
      ),
      page.getByText('CEP').fill(zipCode),
    ]);
  }
);

When(
  'preencho o formulário com os dados:',
  async function (this: ICustomWorld, dataTable: DataTable) {
    const page = this.page!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    // Write code here that turns the phrase above into concrete actions
    await Promise.all(
      dataTable.rows().map((row) => {
        const [fieldLabel, content] = row;
        return page.getByText(fieldLabel ?? '').fill(content ?? '');
      })
    );
  }
);

Then(
  'espero ver o formulário da seguinte forma:',
  async function (this: ICustomWorld, dataTable: DataTable) {
    const page = this.page!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    await Promise.all(
      dataTable.rows().map(async (row) => {
        const [fieldLabel, expectedValue] = row;
        const inputValue = await page.getByText(fieldLabel ?? '').inputValue();
        return expect(inputValue).toBe(expectedValue);
      })
    );
  }
);

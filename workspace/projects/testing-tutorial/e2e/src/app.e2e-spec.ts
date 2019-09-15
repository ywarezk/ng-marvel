import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    const emailInput = element(by.css('input[name="email"]'));
    await emailInput.sendKeys('yariv@nerdeez.com');
    const passwordInput = element(by.css('input[name="password"]'));
    await passwordInput.sendKeys('12345678');
    const button = element(by.css('button[type="submit"]'));
    await button.click();
    debugger;
    // expect(page.getTitleText()).toEqual('testing-tutorial app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

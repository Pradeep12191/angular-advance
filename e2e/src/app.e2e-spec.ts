import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to view container reference', () => {
    page.navigateTo();
    const listBtn = element(by.css('#view-container-reference'));
    listBtn.click();
    expect(browser.getCurrentUrl()).toContain('viewContainer');
  });
});

import { TestngprojectPage } from './app.po';

describe('testngproject App', () => {
  let page: TestngprojectPage;

  beforeEach(() => {
    page = new TestngprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

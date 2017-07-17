import { EcommerceFrontendPage } from './app.po';

describe('ecommerce-frontend App', () => {
  let page: EcommerceFrontendPage;

  beforeEach(() => {
    page = new EcommerceFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

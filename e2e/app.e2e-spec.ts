import { AngularAplicacionMultiIdiomaPage } from './app.po';

describe('angular-aplicacion-multi-idioma App', () => {
  let page: AngularAplicacionMultiIdiomaPage;

  beforeEach(() => {
    page = new AngularAplicacionMultiIdiomaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

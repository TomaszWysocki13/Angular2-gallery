import { Angular2GalleryPage } from './app.po';

describe('angular2-gallery App', () => {
  let page: Angular2GalleryPage;

  beforeEach(() => {
    page = new Angular2GalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

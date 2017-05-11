import { AngularMusicPage } from './app.po';

describe('angular-music App', () => {
  let page: AngularMusicPage;

  beforeEach(() => {
    page = new AngularMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

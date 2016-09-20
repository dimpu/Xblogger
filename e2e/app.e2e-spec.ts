import { XbloggerPage } from './app.po';

describe('xblogger App', function() {
  let page: XbloggerPage;

  beforeEach(() => {
    page = new XbloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

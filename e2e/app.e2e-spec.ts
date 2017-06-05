import { Angular4LazyloadPage } from './app.po';

describe('angular4-lazyload App', () => {
  let page: Angular4LazyloadPage;

  beforeEach(() => {
    page = new Angular4LazyloadPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

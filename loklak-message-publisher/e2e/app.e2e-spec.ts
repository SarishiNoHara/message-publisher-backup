import { LoklakMessagePublisherPage } from './app.po';

describe('loklak-message-publisher App', () => {
  let page: LoklakMessagePublisherPage;

  beforeEach(() => {
    page = new LoklakMessagePublisherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

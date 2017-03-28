import { MyCalcPage } from './app.po';

describe('my-calc App', () => {
  let page: MyCalcPage;

  beforeEach(() => {
    page = new MyCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

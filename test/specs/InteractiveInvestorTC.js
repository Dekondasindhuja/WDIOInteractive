const homePage = require('../pageobjects/home.page');

describe('Launch application', () =>{

  it('should launch application successfully and navigate to Trading Account page', async () => {

    await homePage.launchApplication();
    await homePage.acceptAlert();
    await homePage.navigateToTradingAccount();
    expect(await browser.getUrl()).toEqual('https://www.ii.co.uk/ii-accounts/trading-account');
    expect(homePage.textTradingAccount).toBeExisting;
  })

  it('should launch application successfully and navigate to SIPP charges page', async () => {

    await homePage.launchApplication();
    await homePage.navigateToSIPPCharges();
    expect(await browser.getUrl()).toEqual('https://www.ii.co.uk/ii-accounts/sipp/sipp-charges');
    expect(homePage.textSIPPCharges).toBeExisting;
  })

  it('should launch application successfully and navigate to Shares page', async () => {

    await homePage.launchApplication();
    await homePage.navigateToShares();
    expect(await browser.getUrl()).toEqual('https://www.ii.co.uk/shares');
    expect(homePage.textShares).toBeExisting;
  })

  it('should launch application successfully and navigate to Quick-start Funds page', async () => {

    await homePage.launchApplication();
    await homePage.navigateToQuickStartFunds();
    expect(await browser.getUrl()).toEqual('https://www.ii.co.uk/quick-start-funds');
    expect(homePage.textQuickStartFunds).toBeExisting;
  })

  it('should launch application successfully and navigate to News page', async () => {

    await homePage.launchApplication();
    await homePage.navigateToNews();
    expect(await browser.getUrl()).toEqual('https://www.ii.co.uk/stock-market-news');
    expect(homePage.textQuickEditor).toBeExisting;
  })

})
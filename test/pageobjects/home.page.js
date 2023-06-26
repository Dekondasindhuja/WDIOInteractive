

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAcceptAlert () {
        return $(".//button[text()='Accept']");
    }

    get dropdownServices () {
        return $(".//span[text()='Services']");
    }

    get dropdownOptionTradingAccount () {
        return $(".//a[text()='Trading Account']");
    }

    get textTradingAccount () {
        return $("//div[@data-id='page-sections']//p[text()='Trading account']");
    }

    get dropdownPensions () {
        return $(".//span[text()='Pensions']");
    }

    get dropdownOptionSIPPCharges () {
        return $(".//a[text()='SIPP charges']");
    }

    get textSIPPCharges () {
        return $("//div[@data-id='page-sections']//p[text()='SIPP fees and charges']");
    }

    get dropdownInvestments () {
        return $(".//span[text()='Investments']");
    }

    get dropdownOptionSearchShares () {
        return $(".//a[text()='Search shares']");
    }

    get textShares () {
        return $("//div[@data-id='page-sections']//p[text()='Shares']");
    }

    get dropdownHelpLearning () {
        return $(".//span[text()='Help & learning']");
    }

    get dropdownOptionQuickStartFunds () {
        return $("//div/span[text()='Investment ideas']/parent::div/ul/li/a[text()='Quick-start Funds']");
    }

    get textQuickStartFunds () {
        return $("//div[@data-id='page-sections']//p[text()='Quick-start Funds']");
    }

    get linkNews () {
        return $(".//span[text()='News']");
    }

    get textQuickEditor () {
        return $("//div[@data-id='rail-editors-picks']//p[contains(text(),'Editor')]");
    }

    /**
     * a method to encapsule automation code to interact with the home Page
     * e.g. to handle alerts
     *  navigate to trading Account page
     */

    async acceptAlert () {
        await this.btnAcceptAlert.click();
    }

    async navigateToTradingAccount () {
        await this.dropdownServices.click();
        await this.dropdownOptionTradingAccount.click();
    }

    async navigateToSIPPCharges () {
        await this.dropdownPensions.click();
        await this.dropdownOptionSIPPCharges.click();
    }

    async navigateToShares () {
        await this.dropdownInvestments.click();
        await this.dropdownOptionSearchShares.click();
    }

    async navigateToQuickStartFunds () {
        await this.dropdownHelpLearning.click();
        await this.dropdownOptionQuickStartFunds.click();
    }

    async navigateToNews () {
        await this.linkNews.click();
    }

}

module.exports = new HomePage();

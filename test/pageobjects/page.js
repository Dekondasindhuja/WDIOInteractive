/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens an application url
    */
    launchApplication () {
        return browser.url(`https://www.ii.co.uk/`)
    }
}

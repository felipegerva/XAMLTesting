import { PageObject, By2 } from "selenium-appium";

class DivisionPage extends PageObject {
    isPageLoaded() {
        return this.division1Button.isDisplayed();
    }

    private get division1Button() { return By2.nativeAccessibilityId('divideButton'); }

    clickDivision1Button() {
        return this.division1Button.click();
    }
}

export default new DivisionPage();
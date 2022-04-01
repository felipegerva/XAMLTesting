import { PageObject, By2 } from "selenium-appium";

class SubtractionPage extends PageObject {
    isPageLoaded() {
        return this.subtraction1Button.isDisplayed();
    }

    private get subtraction1Button() { return By2.nativeAccessibilityId('minusButton'); }

    clickSubtraction1Button() {
        return this.subtraction1Button.click();
    }
}

export default new SubtractionPage();
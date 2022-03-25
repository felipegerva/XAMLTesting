import { PageObject, By2 } from "selenium-appium";

class MultiplicationPage extends PageObject {
    isPageLoaded() {
        return this.multiplication1Button.isDisplayed();
    }

    private get multiplication1Button() { return By2.nativeAccessibilityId('multiplyButton'); }

    clickMultiplication1Button() {
        return this.multiplication1Button.click();
    }
}

export default new MultiplicationPage();
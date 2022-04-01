import { PageObject, By2 } from "selenium-appium";

class SumPage extends PageObject {
    isPageLoaded() {
        return this.sum1Button.isDisplayed();
    }

    private get sum1Button() { return By2.nativeAccessibilityId('plusButton'); }

    clickSum1Button() {
        return this.sum1Button.click();
    }
}

export default new SumPage();
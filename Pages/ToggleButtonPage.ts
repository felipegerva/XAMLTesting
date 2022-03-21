import { PageObject, By2 } from "selenium-appium";

class ToggleButtonPage extends PageObject {
    isPageLoaded() {
        return this.toggleButton1Button.isDisplayed();
    }

    private get toggleButton1Button() { return By2.nativeAccessibilityId('Toggle1'); }
    private get control1Ooutput() { return By2.nativeAccessibilityId('Control1Output'); }

    clickButton1() {
        return this.toggleButton1Button.click();      
    }
  
    getControl1Output() {
        return this.control1Ooutput.getText();
    }
}

  export default new ToggleButtonPage();
import { PageObject, By2 } from "selenium-appium";

class MainPage extends PageObject {
  isPageLoaded() {
    return this.zerarTudo.isDisplayed();
  }

  private get zerarTudo() { return By2.nativeAccessibilityId('clearButton'); }

  clickZerarTudo() {
      return this.zerarTudo.click();      
  }
}

export default new MainPage();
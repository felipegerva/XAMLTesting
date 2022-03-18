/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PageObject, By2 } from "selenium-appium";

class BasicInputPage extends PageObject {
  isPageLoaded() {
    return this.checkBoxButton.isDisplayed();
  }

  private get checkBoxButton() { return By2.nativeName('CheckBox'); }
  private get buttonButton() { return By2.nativeName('Button'); }
  private get toggleButtonButton() { return By2.nativeName('ToggleButton'); }

  gotoButtonPage() {
    return this.buttonButton.click();
  }

  gotoCheckboxPage() {
    return this.checkBoxButton.click();
  }
  gotoToggleButtonPage() {
    return this.toggleButtonButton.click();
  }
}

export default new BasicInputPage();
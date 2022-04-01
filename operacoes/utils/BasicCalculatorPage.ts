import { PageObject, By2 } from "selenium-appium";

class BasicCalculatorPage extends PageObject {
    isPageLoaded(){
        return this.multiplicationButton.isDisplayed();
    }

    private get sumButton(){return By2.nativeName('Mais');}
    private get subtractionButton(){return By2.nativeName('Menos');}
    private get multiplicationButton(){return By2.nativeName('Multiplicar por');}
    private get divisionButton(){return By2.nativeName('Dividir por');}

    private get equalButton(){ return By2.nativeAccessibilityId('equalButton'); }
    private get resultOutput() { return By2.nativeAccessibilityId('CalculatorResults'); }

    private get n0Button() { return By2.nativeAccessibilityId('num0Button'); }
    private get n1Button() { return By2.nativeAccessibilityId('num1Button'); }
    private get n2Button() { return By2.nativeAccessibilityId('num2Button'); }
    private get n3Button() { return By2.nativeAccessibilityId('num3Button'); }
    private get n4Button() { return By2.nativeAccessibilityId('num4Button'); }
    private get n5Button() { return By2.nativeAccessibilityId('num5Button'); }
    private get n6Button() { return By2.nativeAccessibilityId('num6Button'); }
    private get n7Button() { return By2.nativeAccessibilityId('num7Button'); }
    private get n8Button() { return By2.nativeAccessibilityId('num8Button'); }
    private get n9Button() { return By2.nativeAccessibilityId('num9Button'); }

    gotoSum(){
        return this.sumButton.click();
    }

    gotoSubtraction(){
        return this.subtractionButton.click();
    }

    gotoMultiplication(){
        return this.multiplicationButton.click();
    }

    gotoDivision(){
        return this.divisionButton.click();
    }

    gotoResult(){
        return this.equalButton.click();
    }

    getResultOutput(){
        return this.resultOutput.getText();
    }

    clickN0Button() {
        return this.n0Button.click();
    }

    clickN1Button() {
        return this.n1Button.click();
    }

    clickN2Button() {
        return this.n2Button.click();
    }

    clickN3Button() {
        return this.n3Button.click();
    }

    clickN4Button() {
        return this.n4Button.click();
    }

    clickN5Button() {
        return this.n5Button.click();
    }

    clickN6Button() {
        return this.n6Button.click();
    }

    clickN7Button() {
        return this.n7Button.click();
    }

    clickN8Button() {
        return this.n8Button.click();
    }

    clickN9Button() {
        return this.n9Button.click();
    }
}

export default new BasicCalculatorPage();
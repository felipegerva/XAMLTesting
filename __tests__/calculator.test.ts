import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import BasicCalculatorPage from '../Pages/BasicCalculatorPage';
import MainPage from '../Pages/MainPage';
import SumPage from '../Pages/SumPage';

jest.setTimeout(50000);

const appId = 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App'
const capabilites = windowsAppDriverCapabilities(appId)

beforeAll(() => {
  return driver.startWithCapabilities(capabilites); 
});

afterAll(() => {
  return driver.quit();
});

describe('Testing Windows Calculator', () => {
  beforeEach(async ()=> {
    await MainPage.clickZerarTudo(); // Garantindo que a calculadora esteja zerada.
    await BasicCalculatorPage.waitForPageLoaded();
  })

  test('SumPage', async () => {
    await SumPage.waitForPageLoaded();

    await BasicCalculatorPage.clickN1Button();
    await SumPage.clickSum1Button();
    await BasicCalculatorPage.clickN7Button();

    await BasicCalculatorPage.gotoResult();

    expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 8');    
  });

  /*test('checkboxPage', async () => {
    
    await BasicInputPage.gotoCheckboxPage();
    await CheckBoxPage.waitForPageLoaded();

    await CheckBoxPage.clickCheckbox1();
    expect(await CheckBoxPage.getControl1Output()).toBe('You checked the box.');
  });

  test('ToggleButtonPage', async () => {
    await BasicInputPage.gotoToggleButtonPage();
    await ToggleButtonPage.waitForPageLoaded();

    await ToggleButtonPage.clickButton1();
    //await ToggleButtonPage.clickButton1();
    expect(await ToggleButtonPage.getControl1Output()).toBe('On');
  })*/
});
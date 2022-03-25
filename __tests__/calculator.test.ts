import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import BasicCalculatorPage from '../Pages/BasicCalculatorPage';
import MainPage from '../Pages/MainPage';
import SumPage from '../Pages/SumPage';
import SubtractionPage from '../Pages/SubtractionPage';
import MultiplicationPage from '../Pages/MultiplicationPage';
import DivisionPage from '../Pages/DivisionPage';

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

  test('SubtractionPage', async () => {
    await SubtractionPage.waitForPageLoaded();

    await BasicCalculatorPage.clickN7Button();
    await SubtractionPage.clickSubtraction1Button();
    await BasicCalculatorPage.clickN1Button();

    await BasicCalculatorPage.gotoResult();

    expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 6');    
  });

  test('MultiplicationPage', async () => {
    await MultiplicationPage.waitForPageLoaded();

    await BasicCalculatorPage.clickN7Button();
    await MultiplicationPage.clickMultiplication1Button();
    await BasicCalculatorPage.clickN9Button();

    await BasicCalculatorPage.gotoResult();

    expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 63');    
  });

  test('DivisionPage', async () => {
    await DivisionPage.waitForPageLoaded();

    await BasicCalculatorPage.clickN7Button();
    await BasicCalculatorPage.clickN0Button();
    await DivisionPage.clickDivision1Button();
    await BasicCalculatorPage.clickN1Button();
    await BasicCalculatorPage.clickN0Button();

    await BasicCalculatorPage.gotoResult();

    expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 7');    
  });
});
import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import BasicCalculatorPage from '../operacoes/utils/BasicCalculatorPage';
import MainPage from '../operacoes/utils/MainPage';
import SumPage from '../operacoes/soma/SumPage';
import SubtractionPage from '../operacoes/subtracao/SubtractionPage';
import MultiplicationPage from '../operacoes/multiplicacao/MultiplicationPage';
import DivisionPage from '../operacoes/divisao/DivisionPage';

jest.setTimeout(50000);

const appId = 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App'
const capabilites = windowsAppDriverCapabilities(appId)

beforeAll(() => {
  return driver.startWithCapabilities(capabilites); 
});

afterAll(() => {
  return driver.quit();
});

describe('Suite de testes - Windows Calculator', () => {
  beforeEach(async ()=> {
    await MainPage.clickZerarTudo(); // Garantindo que a calculadora esteja zerada.
    await BasicCalculatorPage.waitForPageLoaded();
  })

  describe('Suite de testes - Soma', () => {
    test('Soma b', async () => {
      await SumPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN1Button();
      await SumPage.clickSum1Button();
      await BasicCalculatorPage.clickN7Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 8');    
    });
  })

  describe('Suite de testes - Subtracao', () => {
    test('SubtractionPage', async () => {
      await SubtractionPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await SubtractionPage.clickSubtraction1Button();
      await BasicCalculatorPage.clickN1Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 6');    
    });
  })
  
  describe('Suite de testes - Multiplicacao', () => {
    test('MultiplicationPage', async () => {
      await MultiplicationPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await MultiplicationPage.clickMultiplication1Button();
      await BasicCalculatorPage.clickN9Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 63');    
    });
  })  

  describe('Suite de testes - Divisao', () => {
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
  })  
});
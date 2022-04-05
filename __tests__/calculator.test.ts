import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import BasicCalculatorPage from '../operacoes/utils/BasicCalculatorPage';
import MainPage from '../operacoes/utils/MainPage';
import SumPage from '../operacoes/soma/SumPage';
import SubtractionPage from '../operacoes/subtracao/SubtractionPage';
import MultiplicationPage from '../operacoes/multiplicacao/MultiplicationPage';
import DivisionPage from '../operacoes/divisao/DivisionPage';
import { CalculatorBaseFactory } from '../operacoes/CalculatorFactoryBase';

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

  describe.only('Suite de testes - Soma', () => {
    test.only('Deve realizar a soma 1 + 7 = 8 via Factory', async () => {
      expect(await CalculatorBaseFactory.soma(1, 7)).toBe(8);
    });

    test('Deve realizar a soma 2 + 5 = 7 via Factory', async () => {
      expect(await CalculatorBaseFactory.soma(2, 5)).toBe(7);
    });

    test('Deve realizar a soma 3 + 5 = 8 via Factory', async () => {
      expect(await CalculatorBaseFactory.soma(3, 5)).toBe(8);
    });

    test('Deve realizar a soma 15 + 5 = 20 via Factory', async () => {
      expect(await CalculatorBaseFactory.soma(15, 5)).toBe(20);
    });

    /*test('Deve realizar a soma de 1 + 7 = 8', async () => {
      await SumPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN1Button();
      await SumPage.clickSum1Button();
      await BasicCalculatorPage.clickN7Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 8');    
    });

    test('Deve realizar a soma de 521 + 261', async () => {
      await SumPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN5Button();
      await BasicCalculatorPage.clickN2Button();
      await BasicCalculatorPage.clickN1Button();
      await SumPage.clickSum1Button();
      await BasicCalculatorPage.clickN2Button();
      await BasicCalculatorPage.clickN6Button();
      await BasicCalculatorPage.clickN1Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 782');    
    });*/
  })

  describe('Suite de testes - Subtracao', () => {
    test('Deve realizar a subtracao de 7 - 1', async () => {
      await SubtractionPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await SubtractionPage.clickSubtraction1Button();
      await BasicCalculatorPage.clickN1Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 6');    
    });

    test('Deve realizar a subtracao de 1 - 10', async () => {
      await SubtractionPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN1Button();
      await SubtractionPage.clickSubtraction1Button();
      await BasicCalculatorPage.clickN1Button();
      await BasicCalculatorPage.clickN0Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é -9');    
    });
  })
  
  describe('Suite de testes - Multiplicacao', () => {
    test('Deve realizar a multiplicacao de  7 * 9', async () => {
      await MultiplicationPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await MultiplicationPage.clickMultiplication1Button();
      await BasicCalculatorPage.clickN9Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 63');    
    });

    test('Deve realizar a multiplicacao de  1 * 25', async () => {
      await MultiplicationPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN1Button();
      await MultiplicationPage.clickMultiplication1Button();
      await BasicCalculatorPage.clickN2Button();
      await BasicCalculatorPage.clickN5Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 25');    
    });
  })

  describe('Suite de testes - Divisao', () => {
    test('Deve realizar a divisao de 70 / 10', async () => {
      await DivisionPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await BasicCalculatorPage.clickN0Button();
      await DivisionPage.clickDivision1Button();
      await BasicCalculatorPage.clickN1Button();
      await BasicCalculatorPage.clickN0Button();
  
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 7');    
    });

    test('Deve realizar a divisao de 7 / 2', async () => {
      await DivisionPage.waitForPageLoaded();
  
      await BasicCalculatorPage.clickN7Button();
      await DivisionPage.clickDivision1Button();
      await BasicCalculatorPage.clickN2Button();
        
      await BasicCalculatorPage.gotoResult();
  
      expect(await BasicCalculatorPage.getResultOutput()).toBe('A exibição é 3,5');    
    });
  })
});
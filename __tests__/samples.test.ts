import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import HomePage from '../Pages/HomePage';
import BasicInputPage from '../Pages/BasicInputPage';
import ButtonPage from '../Pages/ButtonPage';
import CheckBoxPage from '../Pages/CheckBoxPage';
import ToggleButtonPage from '../Pages/ToggleButtonPage';

jest.setTimeout(50000);

const appId = 'Microsoft.XAMLControlsGallery_8wekyb3d8bbwe!App'
const capabilites = windowsAppDriverCapabilities(appId)

beforeAll(() => {
  return driver.startWithCapabilities(capabilites); 
});

afterAll(() => {
  return driver.quit();
});

describe('Samples', () => {
  beforeEach(async ()=> {
    await HomePage.gotoBasicInputPage();
    await BasicInputPage.waitForPageLoaded();
  })

  test('ButtonPage', async () => {   
    await BasicInputPage.gotoButtonPage();
    await ButtonPage.waitForPageLoaded();

    await ButtonPage.clickButton1();
    expect(await ButtonPage.getControl1Output()).toBe('You clicked: Button1');
  });

  test('checkboxPage', async () => {
    
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
  })
});
import LoginPage from '../../Pages/login_page'
import data from '../../fixtures/data.json'

describe('Amazon login functionality', () => {//test suite

    beforeEach(() => { //hooks
        LoginPage.LaunchURl();
        // LoginPage.navigateToSignPage();
    });
    it.only('', () => {//test case
        // LoginPage.login(data.email,data.password);
        LoginPage.SearchProduct(data.productname,'{enter}')
    });

    it.skip('login', () => {
        LoginPage.testLogin();   
        LoginPage.VerifyAccountProfile();
    
    });
});
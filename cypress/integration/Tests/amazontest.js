import LoginPage from '../../Pages/login_page'
import data from '../../fixtures/data.json'

describe('Amazon login functionality', () => {//test suite

    beforeEach(() => { //hooks
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
    });
    it('Login With invalid username', () => {
        LoginPage.EnterEmailID(data.invalid_email);
        LoginPage.errorFromInvalid_Email();
    });     

    it('Login With invalid password', () => {
        LoginPage.login(data.email,data.In_password);
        LoginPage.errorFromInvalid_Password();
    });

    it('login', () => {
        LoginPage.login(data.email, data.password);   
        LoginPage.VerifyAccountProfile();
    });

    it('product search', () => {//test case
        LoginPage.login(data.email,data.password);
        LoginPage.SearchProduct(data.productname,'{enter}')
    });


});
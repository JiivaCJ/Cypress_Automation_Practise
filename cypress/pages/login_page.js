import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'
class LoginPage{  
    get LaunchURl(){
        cy.visit(elements.URL);
    }
    get LaunchURl_R(){
        cy.visit(elements.URL_R);
    }    
    get navigateToSignPage(){
        cy.get(elements.accountprofile).click();
    }
    get EnterEmailID(){
        cy.get(elements.email).type(data.email);
    }
    get ClickContinueButton(){
        cy.get(elements.continuebtn).click();
    }
    get EnterPassword(){
        cy.get(elements.password).type(data.password);
    }
    get ClickSignInButton(){
        cy.get(elements.signinbtn).click();
    }
    get VerifyAccountProfile(){
        cy.get(elements.accountprofile).should('have.text',data.accountName)
    }
    get EmailIN_R(){
        cy.get(elements.emailIN_R);
    }
    get PasswordIN_R(){
        cy.get(elements.passwordIN_R);
    }
    get EnterEmailID(){
        cy.get(elements.email).type(data.email);
    }
    get EnterEmailID_R(){
        cy.get(elements.emailIN_R).type(data.emailD_R);
    }
    get EnterPassword_R(){
            cy.get(elements.passwordIN_R).type(data.Password_R);
    }
    get VerifyAccountProfile_R(){
        cy.get(elements.accountprofile_R).should('have.text',data.accountName_R)
    }
    get ClickContinueButton_R(){
        cy.get(elements.continuebtn).click();
    }

}
export default new LoginPage();
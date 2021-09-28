import elements from '../fixtures/elements.json';
import data from "../fixtures/data.json"

class LoginPage{ 

    LaunchURl(){
        cy.visit(elements.URL);
    }  
    navigateToSignPage(){
        cy.get(elements.accountprofile).click();
    }
    EnterEmailID(email){
        cy.get(elements.email).type(email);
        cy.get(elements.continuebtn).click();
    }
    login(email,password){
        this.EnterEmailID(email);
        cy.get(elements.password).type(password);
        cy.get(elements.signinbtn).click();
    }
    VerifyAccountProfile(accountname){
        cy.get(elements.accountprofile).should('have.text',accountname)
    }
    SearchProduct(product,key){
        cy.get(elements.searchbar).type(product).type(key);
    }
    SelectProduct(productname){
        cy.get(elements.productselector).then(($productname)=>{
        cy.get($productname).contains(productname).click();
        })


    }
    errorFromInvalid_Email(){

        cy.get(".a-alert-heading").contains("There was a problemThere was a problem")
        

    }


    errorFromInvalid_Password(){
        cy.get("#ap_password").type("527434333");
        cy.get("#signInSubmit").click();
        cy.get(".a-alert-heading").should('have.text',("Important Message!"));

    }

    testLogin(){
        
    }
}
export default new LoginPage();
import TodoPage from "./todoPage";

class LoginPage {
//Elements
     get emailfield(){
        return cy.get('[data-testid="email"]');
    }
     get passwordField(){
        return cy.get('[data-testid="password"]');
    }
     get loginButton(){
        return cy.get('.MuiButton-label');
    }


    //Methods
     load(){
        cy.visit ("/")
        return this;
    }

     login (email,password) {
        this.emailfield.type(email)
        this.passwordField.type(password)
        this.loginButton.click()
        return new TodoPage;
    }
}

export default LoginPage;
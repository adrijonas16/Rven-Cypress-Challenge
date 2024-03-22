class SignUpLoginPage {

  static alreadyExistVisible() {
    return cy.contains('Email Address already exist!').should('exist');
  }

    static isNewUserSignUpMessageVisible() {
        return cy.contains('New User Signup!').should('exist');
      }

      static isEnterAccountVisible() {
        return cy.contains('Enter Account Information').should('exist');
      }
   
    static fillSignUpForm(name, email) {
      cy.get('[data-qa="signup-name"]').type(name);
      cy.get('[data-qa="signup-email"]').type(email);
    }
  
    static clickSignUpButton() {
      cy.get('[data-qa="signup-button"]').click();
    }
  
    static login(email, password) {
      cy.get('[data-qa="login-email"]').type(email);
      cy.get('[data-qa="login-password"]').type(password);
    }

    static clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
      }
  }
  
  export default SignUpLoginPage;
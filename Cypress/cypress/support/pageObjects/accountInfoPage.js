
class AccountInfoPage {
  
  static fillAccountInfoForm(password, day, months, years, name, lastname, company, address, address2,country,state, city, zipcode, mobile) {
    cy.get('#id_gender2').check();
    cy.get('#password').type(password);
    cy.get('#days').select(day);
    cy.get('#months').select(months);
    cy.get('#years').select(years);
    cy.get('#newsletter').check();
    cy.get('[data-qa="first_name"]').type(name);
    cy.get('[data-qa="last_name"]').type(lastname);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('#country').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobile);

  }

  static clickCreateAccountButton() {
    cy.get('[data-qa="create-account"]').click();
  }


  static clickContinueButton() {
      cy.get('[data-qa="continue-button"]').click();
    }

    static isAccountCreatedVisible() {
      return cy.contains('Account Created!').should('exist');
    }
}

export default AccountInfoPage;


class HomePage {

  static verifyHomePage() {
    cy.get('.shop-menu a[href="/"]').should('contain', 'Home').should('be.visible');
}

    static clickSignUpLoginButton() {
      cy.contains('Signup / Login').click();
    }
  }
  
  export default HomePage;
  
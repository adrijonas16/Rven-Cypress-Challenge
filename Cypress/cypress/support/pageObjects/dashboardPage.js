
class DashboardPage {
    static verifyLoggedIn(username) {
      cy.contains(`Logged in as ${username}`).should('be.visible');
    }
  
    static clickLogoutButton() {
        cy.contains('Logout').click();
    }
  
    static clickDeleteAccountButton() {
        cy.contains('Delete').click();
    }


    static verifyLoginToYourAccount() {
      cy.contains('Login to your account').should('be.visible');
    }
  }
  
  export default DashboardPage;
  
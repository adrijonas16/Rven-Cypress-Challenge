
class DeleteAccountPage {
    static isAccountDeletedVisible() {
        return cy.contains('Account Deleted!').should('exist');
      }
  }
  
  export default DeleteAccountPage;
  

import HomePage from '../support/pageObjects/homePage';
import SignUpLoginPage from '../support/pageObjects/signUpLoginPage';
import AccountInfoPage from '../support/pageObjects/accountInfoPage';
import DashboardPage from '../support/pageObjects/dashboardPage';
import DeleteAccountPage from '../support/pageObjects/deleteAccountPage';

describe('End-to-End Automation Challenge', () => {
  it('should create a user account, log in, and delete the account', () => {
    cy.visit('http://automationexercise.com');
    HomePage.verifyHomePage();
    HomePage.clickSignUpLoginButton();
    SignUpLoginPage.isNewUserSignUpMessageVisible();
    SignUpLoginPage.fillSignUpForm('Adriana Chipana', 'adrijonas16@example.com');
    SignUpLoginPage.clickSignUpButton(); 
    SignUpLoginPage.isEnterAccountVisible();   
    AccountInfoPage.fillAccountInfoForm('Ironjonas16', '17', '4', '1998', 'Adriana', 'Chipana', 'BSG', 'nicolas de pierola', 'block b7 departamento 18', 'Australia', 'Arequipa', 'Arequipa', '+51', '992519720');    
    AccountInfoPage.clickCreateAccountButton();
    AccountInfoPage.isAccountCreatedVisible();
    AccountInfoPage.clickContinueButton();
    DashboardPage.verifyLoggedIn('Adriana Chipana');
    DashboardPage.clickLogoutButton();
    DashboardPage.verifyLoginToYourAccount();
    SignUpLoginPage.login('adrijonas16@example.com', 'Ironjonas16');
    SignUpLoginPage.clickLoginButton();
    DashboardPage.verifyLoggedIn('Adriana Chipana');
    DashboardPage.clickDeleteAccountButton();
    DeleteAccountPage.isAccountDeletedVisible();
    AccountInfoPage.clickContinueButton();
  });
});

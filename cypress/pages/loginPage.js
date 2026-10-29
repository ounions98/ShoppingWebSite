class LoginPage {
      
    //UI Elements
    get usernameInput() { return cy.get('#user-name') }
    get passwordInput() { return cy.get('#password') }   
    get loginButton() {  return cy.get('#login-button') }
    get errorMessage() { return cy.get('[data-test="error"]') }

    //Actions
    visit() {
        cy.visit('/')
        this.usernameInput.should('be.visible')
    }

    typeUsername(username) {
        this.usernameInput.clear().type(username)
    }

    typePassword(password) {
        this.passwordInput.clear().type(password)
    }

    clickLoginButton() {
        this.loginButton.click()
    }

}
export default new LoginPage()
import LoginPage from "../pages/loginPage"

describe('Login', () => {
    beforeEach(() => {
        cy.fixture('users').as('users')
        LoginPage.visit()
    })
    

it ('should login successfully with valid credentials', function() {
    LoginPage.typeUsername(this.users.valid.username)
    LoginPage.typePassword(this.users.valid.password)
    LoginPage.clickLoginButton()
    cy.url().should('include', '/inventory')

})

it ('should display error message with invalid credentials', function() {
    LoginPage.typeUsername(this.users.locked.username)
    LoginPage.typePassword(this.users.locked.password)    
    LoginPage.clickLoginButton()
    LoginPage.errorMessage.should('be.visible')
    LoginPage.errorMessage.should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
}
)
})
import ProductsPage from '../pages/ProductsPage'
import LoginPage from '../pages/loginPage'

describe('Product Tests', () => {

beforeEach(() => {
  cy.fixture('users').then((users) => {
  cy.login(users.valid.username, users.valid.password)
  })
})

    it('should display the correct product title', () => {
        ProductsPage.productTitle.should('be.visible')
    })

    it('should filter products by price from low to high', () => {
        ProductsPage.filterProductsByPriceLowToHigh()
        ProductsPage.CheckFirstProductPriceIsLowest()
    })

    it('should add a product to the cart', () => {
        ProductsPage.AddBackpackToCart()
        ProductsPage.AddBikeLightToCart()
        ProductsPage.CheckCartIconShowsCorrectNumberOfItems(2)
    })

    
})
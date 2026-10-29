import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
describe('Place Order Tests', () => {

beforeEach(() => {
  cy.fixture('users').then((users) => {
    cy.login(users.valid.username, users.valid.password)
  })})


it('Check that the user can place an order successfully', () => {

    ProductsPage.AddBackpackToCart()
    ProductsPage.AddBikeLightToCart()
    ProductsPage.CheckCartIconShowsCorrectNumberOfItems(2) 
    CartPage.ClickCartIcon()
    CartPage.Checkitem1andRemovebtnIsInCart('Sauce Labs Backpack')
    CartPage.Checkitem2andRemovebtnIsInCart('Sauce Labs Bike Light')
    CartPage.RemoveItem1FromCart()
    CartPage.CheckItem1IsRemovedFromCart('Sauce Labs Backpack')
    CartPage.ClickCheckoutButton()
   
    CheckoutPage.ErrorMessageShouldBeVisible()
    CheckoutPage.TypeFirstName('John')
    CheckoutPage.ErrorMessageShouldBeVisible()
    CheckoutPage.TypeLastName('Doe')
    CheckoutPage.ErrorMessageShouldBeVisible()
    CheckoutPage.TypePostalCode('12345')
    CheckoutPage.ClickContinueButton()
    
    CheckoutPage.CheckOverviewTitleIsVisible()
    CheckoutPage.CheckTotalItemsInOverview()
    CheckoutPage.CheckPaymentInfo()
    CheckoutPage.CheckShippingInfo()
    CheckoutPage.CheckpriceTotalEqualsInventoryPrice()
    CheckoutPage.ClickFinishButton()
    CheckoutPage.CheckCompleteTitleIsVisible()
   CheckoutPage.ClickBackToHomeButton()

})

})
class PlaceOrderPage {
    get  CartIcon() { return cy.get('[data-test="shopping-cart-link"]') }
    get CheckoutButton() { return cy.get('[data-test="checkout"]') }
    get Item1() { return cy.get('.inventory_item_name').eq(0) }
    get Item2() { return cy.get('.inventory_item_name').eq(1) } 
    get RemoveItem1Button() { return cy.get('[data-test="remove-sauce-labs-backpack"]') }
    get RemoveItem2Button() { return cy.get('[data-test="remove-sauce-labs-bike-light"]') }
    get continueShoppingButton() { return cy.get('[data-test="continue-shopping"]') }

    ClickCartIcon() {
        this.CartIcon.click()
     }
     
     Checkitem1andRemovebtnIsInCart(expectedItemName) {
        this.Item1.should('have.text', expectedItemName)
        this.RemoveItem1Button.should('be.visible')
    
     }

     Checkitem2andRemovebtnIsInCart(expectedItemName) {
        this.Item2.should('have.text', expectedItemName)
        this.RemoveItem2Button.should('be.visible')
     }

     RemoveItem1FromCart() {
        this.RemoveItem1Button.click()
     }

    CheckItem1IsRemovedFromCart(expectedItemName) {
        this.Item1.should('not.have.text', expectedItemName)
     }

    ClickCheckoutButton() {
        this.CheckoutButton.click()
     }


     }

     export default new PlaceOrderPage()

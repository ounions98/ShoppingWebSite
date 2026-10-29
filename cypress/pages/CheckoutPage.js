class CheckoutPage {
    get firstNameInput() { return cy.get('[data-test="firstName"]') }   
    get lastNameInput() { return cy.get('[data-test="lastName"]') }
    get postalCodeInput() { return cy.get('[data-test="postalCode"]') }
    get errorMessage() { return cy.get('[data-test="error"]') }
    get continueButton() { return cy.get('[data-test="continue"]') }


    ErrorMessageShouldBeVisible() {
        this.continueButton.should('be.visible').click()
        this.errorMessage.should('be.visible')
    }

    TypeFirstName(firstName) {
        this.firstNameInput.clear().type(firstName)
    }

    TypeLastName(lastName) {
        this.lastNameInput.clear().type(lastName)
    }

    TypePostalCode(postalCode) {
        this.postalCodeInput.clear().type(postalCode)
    }

    ClickContinueButton() {
        this.continueButton.click()
    }

    get overviewTitle() { return cy.get('[data-test="title"]') }
    get totallistitems() { return cy.get('[data-test="inventory-item"]') }
    get item1() { return cy.get('[data-test="inventory-item-name"]').eq(0) }
    get itemPrice() { return cy.get('[data-test="inventory-item-price"]') }
    get finishButton() { return cy.get('[data-test="finish"]') }   
    get paymentInfoTitle() { return cy.get('[data-test="payment-info-label"]')}
    get paymentInfo() { return cy.get('[data-test="payment-info-value"]') }
    get shippingInfoTitle() { return cy.get('[data-test="shipping-info-label"]') }
    get shippingInfo() { return cy.get('[data-test="shipping-info-value"]') }
    get priceTotalTitle() { return cy.get('[data-test="total-info-label"]') }
    get itemtotal() { return cy.get('[data-test="subtotal-label"]') }
    get totalTax() { return cy.get('[data-test="tax-label"]') }
    get totalPrice() { return cy.get('[data-test="total-label"]') }
    get completeTitle() { return cy.get('[data-test="complete-header"]') }
    get BackToHomeButton() { return cy.get('[data-test="back-to-products"]') }

    CheckOverviewTitleIsVisible() {
        this.overviewTitle.should('be.visible').should('contain', 'Overview')   
    }

    CheckTotalItemsInOverview() {
        this.totallistitems.should('have.length', 1)
     }

    CheckPaymentInfo() {
        this.paymentInfoTitle.should('be.visible')
         this.paymentInfo.should('be.visible')
    }
    CheckShippingInfo() {
        this.shippingInfoTitle.should('be.visible')
        this.shippingInfo.should('be.visible')
    }

    CheckpriceTotalEqualsInventoryPrice() {
        this.itemtotal.invoke('text').then((priceTotalText) => {
            const priceTotal = parseFloat(priceTotalText.replace('Item total: $', ''))
            this.itemPrice.invoke('text').then((itemPriceText) => {
                const itemPrice = parseFloat(itemPriceText.replace('$', ''))
                cy.wrap(priceTotal).should('equal', itemPrice)
            })
        })
    }

    CheckTotalPrices() {
        this.totalpricetitle.should('be.visible')
        this.itemtotal  .should('be.visible')
        this.totalTax.should('be.visible')
        this.totalPrice.should('be.visible')

    }

    ClickFinishButton() {
        this.finishButton.click()
    }

    CheckCompleteTitleIsVisible() {
        this.completeTitle.should('be.visible').should('have.text', 'Thank you for your order!')
    }
    ClickBackToHomeButton() {
        this.BackToHomeButton.click()
    }


}
export default new CheckoutPage()
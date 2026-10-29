class ProductsPage {
    get productTitle() { return cy.get('[data-test="title"]') }
    get AddbackpackToCartButton() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') }
    get AddBikeLightToCartButton() { return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]') }
    get FilterDropdown() { return cy.get('[data-test="product-sort-container"]') }
    get FilterOptionPriceLowToHigh() { return cy.get('[data-test="product_sort_container"]').select('lohi') }
    get firstProductPrice() { return cy.get('.inventory_item_price').first() }
    get CartIcon() { return cy.get('.shopping_cart_link') }
    



    filterProductsByPriceLowToHigh() {
        this.FilterDropdown.select('Price (low to high)')
    }

    CheckFirstProductPriceIsLowest() {
        this.firstProductPrice.invoke('text').then((firstPriceText) => {
            const firstPrice = parseFloat(firstPriceText.replace('$', ''))
            cy.get('.inventory_item_price').each(($el) => {
                const price = parseFloat($el.text().replace('$', ''))
                expect(firstPrice).to.be.at.most(price)
            })
        })
    }

    AddBackpackToCart() {
        this.AddbackpackToCartButton.click()
    }   
    AddBikeLightToCart() {
        this.AddBikeLightToCartButton.click()
    }

    CheckCartIconShowsCorrectNumberOfItems(expectedCount) {
        this.CartIcon.should('contain.text', expectedCount)
    }
        


}
export default new ProductsPage()
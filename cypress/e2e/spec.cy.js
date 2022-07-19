/// <reference types="cypress" />

describe('Elements', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get('.category-cards > :nth-child(1)').click()
    })

    it('Text box', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.get('#userName').type("Kvet Horvath")
        cy.get('#userEmail').type("kvethorvath@email.com")
        cy.get('#currentAddress').type("nábř. E. Beneše 128, 118 00 Malá Strana")
        cy.get('#permanentAddress').type("nábř. E. Beneše 128, 118 00 Malá Strana")
        cy.get('#submit').submit()
    })
})


// describe('empty spec', () => {
//   it('passes', () => {
//     cy.viewport(1000, 660)
//     cy.visit('https://www.twitter.com')
//     cy.get('.r-eqz5dr > :nth-child(1) > .r-1awozwy > .css-bfa6kz > .css-901oao').should('have.text', 'Accept all cookies').click()
//     cy.get('[data-testid="loginButton"] > .r-1awozwy').click()
//   })
// })
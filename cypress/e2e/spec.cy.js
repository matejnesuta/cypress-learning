/// <reference types="cypress" />

describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('successfully loads', () => {
        // console.log(Cypress.env)
        cy.log("hou")
    })
    it('fills login and password fields with the correct data', () => {
        cy.get('[data-test="username"]').type("prdel")
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
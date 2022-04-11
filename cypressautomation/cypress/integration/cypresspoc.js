/// <reference types = "Cypress" />

beforeEach(() =>{
    cy.visit('https://admin.asapqa.com')
    cy.superAdminLogin('automation_a4user1@vanco.com', 'test1234')
})

describe('My First ASAP Automated Tests', () => {
    it('Create a new class', () => {
        cy.wait(15000)
        cy.get('.asap-admin-classes > a').click()
        cy.get('.add').click()
        cy.createNewTBDScheduleClass(
            'Dance',
            'At the Disco',
            'Bessie Love',
            'East Bay Arts Collective',
            'Dance Studio',
            '66',
            'DiscoAuto',
            'FUTURE',
            'Regular Student',
            'Registration Fee',
            '1000'
        )

    });

})
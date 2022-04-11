Cypress.Commands.add('superAdminLogin', ( email , password) => {

        cy.contains('Sign in to your account')
        cy.get('[placeholder="Organization ID #"]')
        .type('3999')
        
        cy.get('button#continue')
        .click()
        
        cy.contains('Oakland Arts Collective')
        
        cy.get('[placeholder="Email address"]')
        .type(email)

        cy.get('[placeholder="Password"]')
        .type(password)

        cy.get('button#sign-in')
        .click()
});

Cypress.Commands.add('createNewTBDScheduleClass', (courseGroup, course, instructor, location, classroom, capacity, classCode, timePeriod, customerType, feeType, tuition) => {
        cy.wait(7000)
        cy.get('.asap-admin-content-inner')
        cy.contains('#k-3f3dd66b-799c-4a12-8679-8898986b0dbe > .k-select').select([courseGroup])

        cy.get('#k-195cfb50-4b88-43bb-a861-d4b1dc34894b > .k-select > .k-icon').select([course])

        cy.contains('Details')
        cy.get('#k-bcd771a9-3874-4809-a9e8-d4f5b448607c > .k-select > .k-icon').select([instructor])

        cy.get('#k-c4986695-ba7c-4ada-b8a5-f12cc68cc765 > .k-select > .k-icon').select([location])

        cy.get('#k-856da690-53a2-4613-906b-e7520b664163 > .k-select > .k-icon').select([classroom])

        cy.get('#k-49e55ec2-716d-4eae-b155-0e2dd2c26afb')
        .type(capacity)

        cy.get('.k-textbox')
        .type(classCode)

        cy.get('#k-516e6bed-ecc9-4439-843e-95bce34d4baf > .k-select > .k-icon').select([timePeriod])

        cy.get('#k-9ed7ac6a-8a05-42ac-9fa0-2cec9196cc89')
        .click()
        cy.contains('ON')

        cy.get('#k-6b186b05-f034-415e-9ea7-3d08ed5cbe57 > .k-select > .k-icon').select([customerType])

        cy.get('#k-1f67c932-e67c-463b-a1d4-1042f077c90b > .k-select > .k-icon').select([feeType])

        cy.get('#k-2fe9027a-0fe3-492b-b7eb-874177808fa0')
        .type(tuition)

        cy.get('.ng-untouched.ng-star-inserted > :nth-child(4)').click()

        cy.get('.form-submit').click()

});


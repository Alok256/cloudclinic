//User needs to be logged in for test to operate
//may need to add signup/signin step first
describe('Doctor Update Profile', () => {
  it('Visits CloudClinic Account Settings', () => {
    cy.visit('http://localhost:3000/settings');
    cy.url().should('include', '/setting');

    //Check that correct html elements are present
    cy.contains('Settings');
    cy.contains('Update Profile');
    cy.contains('Login Details');
    cy.contains('Basic Information');
    cy.contains('Address');
    cy.contains('Medical Licencing & Accreditation');

    //Login details - changing password
    cy.get('input[name="Password"]')
      .type('password')
      .should('have.value', 'password');
    cy.get('input[name="Confirm"]')
      .type('password')
      .should('have.value', 'password');

    //Basic Information
    cy.get('select[name="Title"]').select('Dr').should('have.value', 'Dr');
    cy.get('input[name="First Name"]')
      .clear()
      .type('Duke')
      .should('have.value', 'Duke');
    cy.get('input[name="Last Name"]')
      .clear()
      .type('Greethead')
      .should('have.value', 'Greethead');
    cy.get('select[name="Sex"]').select('male').should('have.value', 'male');
    cy.get('input[name="Date of Birth"]')
      .clear()
      .type('1995-10-10')
      .should('have.value', '1995-10-10');
    //TEST FAILING - input value goes to 34, possible lag, possibly needs delay
    //Manual testing no issue
    // cy.get('input[name="Mobile number"]')
    //   .clear()
    //   .type(0428728937)
    //   .should('have.value', '0428728937');

    //Address
    cy.get('input[name="Street No."]').clear().type(5).should('have.value', 5);
    cy.get('input[name="Street"]')
      .clear()
      .type('Mountain Street')
      .should('have.value', 'Mountain Street');
    cy.get('input[name="City"]')
      .clear()
      .type('Canberra')
      .should('have.value', 'Canberra');
    cy.get('input[name="State"]')
      .clear()
      .type('ACT')
      .should('have.value', 'ACT');
    cy.get('select[name="Country"]')
      .select('Australia')
      .should('have.value', 'Australia');
    cy.get('input[name="Postcode"]')
      .clear()
      .type(3000)
      .should('have.value', 3000);

    //Doctor Info
    cy.get('input[name="Licence"]')
      .clear()
      .type('TIM')
      .should('have.value', 'TIM');
    cy.get('input[name="Accreditation"]')
      .first()
      .clear()
      .type('Doctor of Medicine')
      .should('have.value', 'Doctor of Medicine');
    //Workaround for when there are two Accreditation fields
    //Comment out otherwise
    cy.get('input[name="Accreditation"]')
      .last()
      .clear()
      .type('Doctor of Surgery')
      .should('have.value', 'Doctor of Surgery');

    cy.get('input[name="Specialty Field"]')
      .clear()
      .type('General Practitioner')
      .should('have.value', 'General Practitioner');
    cy.get('input[name="Sub Specialty Field"]')
      .clear()
      .type('Cardiology')
      .should('have.value', 'Cardiology');
    cy.get('input[name="Education"]')
      .first()
      .clear()
      .type('University of New South Wales')
      .should('have.value', 'University of New South Wales');
    //Comment out if necessary
    cy.get('input[name="Education"]')
      .last()
      .clear()
      .type('University of Sydney')
      .should('have.value', 'University of Sydney');

    cy.get('input[name="Years of Experience"]')
      .clear()
      .type(5)
      .should('have.value', 5);
    cy.get('select[name="Language"]')
      .first()
      .select('Spanish')
      .should('have.value', 'Spanish');

    //Submit Update Button
    cy.get('button').contains('Update').click();
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if gallery can be opened', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper');
    cy.get('.swiper-slide');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-prev').click();
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can swipe gallery', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
  });
});


describe('Swiper Gallery Test', function () {
  it('Checks if descriptions work', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if app is responsive', function() {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
  });
});
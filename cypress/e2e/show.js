describe("Show details", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("User should be able to see show details", () => {
    cy.get(".loader")
      .should("be.visible")
      .get(".show-details__poster")
      .should("be.visible")
      .get(".show-details__title")
      .should("be.visible")
      .get(".show-details__description")
      .should("be.visible");
  });

  it("User should be able to open episode screen", () => {
    cy.get(".show-list__item-link:first")
      .click()
      .url()
      .should("include", "episode")
      .get(".episode__poster")
      .should("be.visible")
      .get(".episode__title")
      .should("be.visible");
  });

  it("User should be able to go back from episode screen", () => {
    cy.get(".show-list__item-link:first")
      .click()
      .get(".link-back")
      .click()
      .url()
      .should("not.include", "episode");
  });
});

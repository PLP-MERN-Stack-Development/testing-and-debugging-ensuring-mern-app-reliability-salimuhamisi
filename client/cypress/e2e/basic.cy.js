describe("Basic App Test", () => {
  it("Loads the home page", () => {
    cy.visit("http://localhost:5173");
    cy.contains("React Application");
  });
});
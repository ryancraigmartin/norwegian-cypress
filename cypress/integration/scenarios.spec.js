context("NCL Automation Scenarios 2 & 3", () => {
  beforeEach(() => cy.visit("https://www.ncl.com/"));

  describe("Scenario 2: Guest explores shore excursion destinations", () => {
    it("should navigate to the Shore Excursions page and filter by Destination and Port", () => {
      // Makes the hidden dropdown visible and selects the Shore Excursions link from the Explore Dropdown
      cy.get("[title='Explore'] + div").invoke(
        "attr",
        "style",
        "visibility: visible;opacity: 1000;"
      );

      cy.get("a.linkItem[title='Shore Excursions']")
        .should("exist")
        .click();

      // Clicks the Destination Dropdown
      cy.get("#search_destinations_chosen > .chosen-single").click();

      // Types Alaska Cruises in the Destination Dropdown input and presses ENTER to submit the input
      cy.get(".chosen-results")
        .contains("Alaska Cruises")
        .click();

      // Clicks the Find an Excursion button
      cy.get(".col-sm-4 > .btn-cta").click();

      // Select Ports from the filter options
      cy.get(":nth-child(2) > .widget-link").click();

      // Select Victoria, British Columbia from Ports filterbox
      cy.get("#ports")
        .contains("Victoria, British Columbia")
        .click();

      // Click on Update Filter Button to generate updated results
      cy.get(".opened")
        .find(".btn-orange")
        .click();
    });

    describe("Scenario 3: Guest filters shore excursions results using price range", () => {
      it("should navigate to the Shore Excursions page and filter by price", () => {
        // Makes the hidden dropdown visible and selects the Shore Excursions link from the Explore Dropdown
        cy.get("[title='Explore'] + div").invoke(
          "attr",
          "style",
          "visibility: visible;opacity: 1000;"
        );

        cy.get("a.linkItem[title='Shore Excursions']")
          .should("exist")
          .click();

        // Clicks the Find an Excursion button.
        cy.get(".col-sm-4 > .btn-cta").click();

        // Clicks the mouse down on the right slider to begin dragging.
        cy.get("#price-slider-values > span:nth-child(3)").trigger(
          "mousedown",
          {
            which: 1
          }
        );

        // Drags the right slider over to the left slider's position to filter the Excursions
        cy.get("#price-slider-values > span:nth-child(2)")
          .trigger("mousemove")
          .trigger("mouseup", { force: true });
      });
    });
  });
});

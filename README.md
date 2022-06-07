This project demonstrates the happy path flow for on-running.com site.

- The test scenario is available [here](cypress/e2e/1-getting-started/interview.cy.js) or the file name is interview.cy.js
- The site uses Basic authentication and it can be accessed with URL Format. The credentials are not checked-in into the project
  https://_username_:_password_@staging-beta.on-running.com/
- This project covers the following scenario

* Verify home page is loaded correctly
* Ensure that the collections are properly loaded and the size is correct
* Select the " Cloud Collection"
* Ensure that the 86 Shoes are loaded and the title is correctly shown
* Select shoe, its size, add to cart
* Select Checkout button
* Navigate to Shipping page, Click on Show Shipping Options button
* Select Continue to Payment button
* check on Pay later, button: Pay later
* Test code ends at Navigated to Complete your purchase page.

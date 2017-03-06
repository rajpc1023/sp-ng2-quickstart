/*
 * Objectives:
 * + Add a moduleId property to the PayeesComponent decorator
 * + Move the content of the template property into a separate HTML file
 * + Reference that HTML file in the component decorator as templateUrl
 *
 * Start by adding a moduleId property to the decorator below
 *
 * Then, take the content in the template, and move it into a separate file
 * with a name that follows the style guidelines
 *
 * Finally, change the template property to a templateUrl property
 *
 * Test your code by going to http://localhost:3000/payees
 * Nothing will have changed and there will be no errors (one hopes!)
 * If you want to see a change, modify the HTML content so that it says
 * something different from the last exercise.
 *
 */
import { Component } from '@angular/core';

@Component( {
  selector: 'payees',
  template: '<h2>This is the Payees Component</h2>'
} )
export class PayeesComponent {
}

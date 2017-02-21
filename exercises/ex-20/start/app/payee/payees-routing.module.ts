/*
 * Objectives:
 * + Write a router module for Payees
 * + Let Payees control its routing
 *
 * You will write a router module for Payees.
 * Payees' routing is currently controlled by app/banking-routing.module.ts.
 * We will add on to that routing with our own routing module.
 *
 * Configure three routes:
 * + payees/list should go to PayeesListComponent
 * + payees/detail should go to PayeeDetailComponent
 * + payees should redirect to payees/list
 *
 * Note that PayeesListComponent and PayeeDetailComponent have been replaced
 * simple placeholders. (They will be back for the next exercise.)
 *
 * Then go to payee.module.ts
 *
 * Welcome back. To test your code, go to these URLS:
 *
 * http://localhost:3000/payees/list (Should show PayeesListComponent)
 * http://localhost:3000/payees/detail (Should show PayeeDetailComponent)
 * http://localhost:3000/payees (Should redirect to payees/list and the
 *                               PayeesListComponent)
 *
 * If you have any trouble that you cannot solve, consult with your instructor.
 */

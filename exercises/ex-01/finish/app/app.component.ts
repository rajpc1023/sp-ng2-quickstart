import { Component } from '@angular/core';
@Component( {
  selector: 'hello-world',
  template: `
<header class="page-header">
<h1>Welcome to our first Angular 2 application</h1>
</header>
<main>
  <h3>A message from our coder:</h3>
  <p>{{ message }}</p>
</main>
`
} )
export class AppComponent {
  message = 'Hello, world!'
}



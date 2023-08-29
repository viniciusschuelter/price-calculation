import {Component} from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header class="container">
      <hgroup>
        <h1>Cheers & Beers</h1>
        <h2>A basic list to choose your beer</h2>
      </hgroup>
    </header>
  `
})
export class HeaderComponent {

}

import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule, NavbarComponent],
  template: `
    <main>
      <app-navbar></app-navbar>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}

import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["../app.component.css"],
})
export class NavbarComponent {}

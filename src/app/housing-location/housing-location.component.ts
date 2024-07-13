import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Amiibo } from "../housinglocation";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.image"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.gameSeries }}, {{ housingLocation.character }}
      </p>
      <a [routerLink]="['/details', housingLocation.head]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: Amiibo;
}

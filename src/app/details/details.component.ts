import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { Amiibo, ReleaseDates } from "../housinglocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article *ngIf="housingLocation">
      <img
        class="listing-photo"
        [src]="housingLocation.image"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation.gameSeries }}</h2>
        <p class="listing-location">
          {{ housingLocation.character }}, {{ housingLocation.amiiboSeries }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <!-- <li *ngFor="let release of housingLocation.release">
            {{ release.value }}
          </li> -->
          <li>Does this location have wifi: {{ housingLocation.type }}</li>
          <li>Does this location have laundry: {{ housingLocation.head }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  keys(obj: ReleaseDates | undefined): Array<string> {
    return obj ? Object.keys(obj) : [];
  }
  // Activated route will grab the url param dynamic value
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Amiibo | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params["id"], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}

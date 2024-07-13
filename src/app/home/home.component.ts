import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Amiibo } from "../housinglocation";
import { Component, inject } from "@angular/core";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- this to loop the content items -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  // set housingLocationList as empty array first
  housingLocationList: Amiibo[] = [];
  // grab HousingService from service this will have all the data and methods then assign to housingService
  housingService: HousingService = inject(HousingService);
  // The constructor is the first function that runs when this component is created
  filteredLocationList: Amiibo[] = [];
  constructor() {
    // assign the housingLocationList the value returned from the call to getAllHousingLocations
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: Amiibo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}

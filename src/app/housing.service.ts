import { Injectable } from "@angular/core";
import { Amiibo } from "./housinglocation";

// These are the items that can be used on the whole app
@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "https://www.amiiboapi.com/api/amiibo";

  // Just listing all the houses in the array
  async getAllHousingLocations(): Promise<Amiibo[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.amiibo ?? [];
  }

  // Grab house by id using id as param and find array method
  async getHousingLocationById(id: number): Promise<Amiibo | undefined> {
    const response = await fetch(`${this.url}/?head=${id}`);
    const data = await response.json();
    console.log(data);
    return data.amiibo[0] ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}

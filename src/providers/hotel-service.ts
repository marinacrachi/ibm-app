import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the HotelService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class Hotel {
  id: number;
  name: string;
  description: string;
  stars: number;
  price: number;
  city: string;
  imgUrl: string[];
  constructor(name: string, price: number, city: string, imgUrl: string[], id: number, stars: number, description: string) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.description = description;
    this.price = price;
    this.city = city;
    this.imgUrl = imgUrl;
  }
}
@Injectable()
export class HotelService {
  hotelList: Hotel[] = [
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
    new Hotel("Hyatt", 89, "Cancun", ["../../assets/bg_beaches.png"], 1, 3, "Hotel muito bonito parabens, beijos da dindinha"),
  ]

  public getByCity(city: string) {
    let hotelListFiltered = [];

    for (let i = 0; i < this.hotelList.length; i++) {

      if (this.hotelList[i].city === city) {
        hotelListFiltered.push(this.hotelList[i]);
      }

      if (i == (this.hotelList.length - 1)) {
        return hotelListFiltered;
      }
    }
  }
  public getById(id: number) {
    for (let i = 0; i < this.hotelList.length; i++) {

      if (this.hotelList[i].id === id) {
        console.log(this.hotelList[i])
        return this.hotelList[i]
      }
    }
  }
}

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
    new Hotel("Hyatt 1", 89, "Cancun 1", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 1, 3, "Nice hotel!"),
    new Hotel("Hyatt 2", 89, "Cancun 1", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 2, 3, "Nice hotel!"),
    new Hotel("Hyatt 3", 89, "Cancun 1", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 3, 3, "Nice hotel!"),
    new Hotel("Hyatt 1", 89, "Cancun 2", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 4, 3, "Nice hotel!"),
    new Hotel("Hyatt 2", 89, "Cancun 2", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 5, 3, "Nice hotel!"),
    new Hotel("Hyatt 3", 89, "Cancun 2", ["../../assets/cel_hotelcancun1.png","../../assets/cel_hotelcancun2.png","../../assets/cel_hotelcancun3.png"], 6, 3, "Nice hotel!"),

    new Hotel("Hilton 1", 89, "Paris 1", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 7, 3, "Nice hotel!"),
    new Hotel("Hilton 2", 89, "Paris 1", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 8, 3, "Nice hotel!"),
    new Hotel("Hilton 3", 89, "Paris 1", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 9, 3, "Nice hotel!"),
    new Hotel("Hilton 1", 89, "Paris 2", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 10, 3, "Nice hotel!"),
    new Hotel("Hilton 2", 89, "Paris 2", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 11, 3, "Nice hotel!"),
    new Hotel("Hilton 3", 89, "Paris 2", ["../../assets/cel_hotelparis1.png","../../assets/cel_hotelparis2.png","../../assets/cel_hotelparis3.png"], 12, 3, "Nice hotel!"),

    new Hotel("Windsor 1", 89, "Fernando de Noronha 1", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 13, 3, "Nice hotel!"),
    new Hotel("Windsor 2", 89, "Fernando de Noronha 1", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 14, 3, "Nice hotel!"),
    new Hotel("Windsor 3", 89, "Fernando de Noronha 1", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 15, 3, "Nice hotel!"),
    new Hotel("Windsor 1", 89, "Fernando de Noronha 2", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 16, 3, "Nice hotel!"),
    new Hotel("Windsor 2", 89, "Fernando de Noronha 2", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 17, 3, "Nice hotel!"),
    new Hotel("Windsor 3", 89, "Fernando de Noronha 2", ["../../assets/cel_fernandodenoronha1.png","../../assets/cel_fernandodenoronha2.png","../../assets/cel_fernandodenoronha3.png"], 18, 3, "Nice hotel!")
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

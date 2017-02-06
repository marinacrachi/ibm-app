import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class City {
  country: string;
  name: string;
  description: string;
  type: string;
  imgUrl: string;

  constructor(country: string, name: string, description: string, type: string, imgUrl: string) {
    this.country = country;
    this.name = name;
    this.description = description;
    this.type = type;
    this.imgUrl = imgUrl;
  }
}

@Injectable()
export class CitiService {

  citiesList: City[] = [new City("Brazil", "Fernando de Noronha 1","Description","Beaches", "../../assets/bg_beaches.png"), 
                        new City("Brazil", "Fernando de Noronha 2","Description","Beaches", "../../assets/bg_beaches.png"),   
                        new City("France", "Paris 1","Description","Romantic", "../../assets/bg_romantic.png"),
                        new City("France", "Paris 2","Description","Romantic", "../../assets/bg_romantic.png"),
                        new City("Mexico", "Cancun","Description","Paradise", "../../assets/bg_paradise.png"),
                        new City("Mexico", "Cancun 2","Description","Paradise", "../../assets/bg_paradise.png")];
                       
  
  public getCitiesByType(type) {

    let citiesFiltered = [];

    for (let i = 0; i < this.citiesList.length; i++) {
      
      if (this.citiesList[i].type === type) {
        citiesFiltered.push(this.citiesList[i]);
      }

      if (i == (this.citiesList.length - 1)){
        return citiesFiltered;
      }
    }

  }


}

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

  citiesList: City[] = [new City("Brazil", "Fernando de Noronha 1","The beaches of Fernando de Noronha are promoted for tourism and recreational diving.","Beaches", "../../assets/bg_fernandodenoronha1.png"), 
                        new City("Brazil", "Fernando de Noronha 2","The beaches of Fernando de Noronha are promoted for tourism and recreational diving.","Beaches", "../../assets/bg_fernandodenoronha2.png"),   
                        new City("France", "Paris 1","Tourism in Paris is a major income source for Paris and the city ranks in the world's most visited cities.","Romantic", "../../assets/bg_paris1.png"),
                        new City("France", "Paris 2","Tourism in Paris is a major income source for Paris and the city ranks in the world's most visited cities.","Romantic", "../../assets/bg_paris2.png"),
                        new City("Mexico", "Cancun 1","One of America's most preferred vacation destinations - and there are several reasons why.","Paradise", "../../assets/bg_cancun1.png"),
                        new City("Mexico", "Cancun 2","One of America's most preferred vacation destinations - and there are several reasons why.","Paradise", "../../assets/bg_cancun2.png")];
                       
  
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

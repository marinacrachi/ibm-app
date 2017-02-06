import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { CitiService, City } from '../../providers/citi-service';
import { HotelPage } from '../hotel/hotel';


@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html'
})
export class CitiesPage {

  @ViewChild(Slides) slides: Slides;

  cities = [];
  currentCity: City;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cityService: CitiService) {
    this.cities = cityService.getCitiesByType(this.navParams.get('type'));
  }

  ionViewDidLoad() {
    let type = this.navParams.get('type');
    this.cityService.getCitiesByType(type);
  }
   goToHotelsPage(city:string) {
   this.navCtrl.push(HotelPage,{city:city})
  }

}

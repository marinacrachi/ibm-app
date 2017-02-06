import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hotel, HotelService } from '../../providers/hotel-service';
import {HotelDetailsPage} from '../hotel-details/hotel-details'

/*
  Generated class for the Hotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html'
})
export class HotelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelService: HotelService) { }
  hotels: Hotel[];
  ionViewDidLoad() {
    console.log(this.navParams.get('city'));
    this.hotels = this.hotelService.getByCity(this.navParams.get('city'))
  }
  goToHotelDetails(id){
    this.navCtrl.push(HotelDetailsPage,{id:id});
  }

}

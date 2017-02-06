import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Hotel, HotelService } from '../../providers/hotel-service';
import { HotelComentsPage } from '../hotel-coments/hotel-coments';
import { ViewChild } from '@angular/core';

/*
  Generated class for the HotelDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel-details',
  templateUrl: 'hotel-details.html'
})
export class HotelDetailsPage {
   @ViewChild(Slides) slides: Slides;
  hotel:Hotel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelService:HotelService) {}

  ionViewDidLoad() {
    this.hotel = this.hotelService.getById(this.navParams.get('id'))
  }
  goToHotelComents(id:number){
    this.navCtrl.push(HotelComentsPage,{id:id})
  }

}

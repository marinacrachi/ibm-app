import { Component } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DestService, Destination } from '../../providers/dest-service';
import { ViewChild } from '@angular/core';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  destinations = [];
  currentDestination: Destination;

  constructor(public navCtrl: NavController, public destService: DestService) {
    this.destinations = destService.getAllDestinations();
    this.currentDestination = this.destinations[0];
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.currentDestination = this.destinations[currentIndex];
    console.log(this.currentDestination);
  }

  goToCities(){
    this.navCtrl.push(CitiesPage, {
      type: this.currentDestination.name
    });
  }

}

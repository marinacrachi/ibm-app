import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export class Destination {
  name: string;
  imgUrl: string;

  constructor(name: string, imgUrl: string) {
    this.name = name;
    this.imgUrl = imgUrl;
  }
}

@Injectable()
export class DestService {

  destinationList: Destination[] = [new Destination("Beaches", "../../assets/bg_beaches.png"), 
                                    new Destination("Romantic", "../../assets/bg_romantic.png"),
                                    new Destination("Paradise", "../../assets/bg_paradise.png")];

  public getAllDestinations() {
    return this.destinationList;
  }

}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { DestService } from '../providers/dest-service';
import { CitiService } from '../providers/citi-service';
import { HotelService } from '../providers/hotel-service';
import { CommentsService } from '../providers/comments-service';
import { HomePage } from '../pages/home/home';
import { CitiesPage } from '../pages/cities/cities';
import { HotelPage } from '../pages/hotel/hotel';
import { HotelComentsPage } from '../pages/hotel-coments/hotel-coments';
import { HotelDetailsPage } from '../pages/hotel-details/hotel-details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CitiesPage,
    HotelDetailsPage,
    HotelComentsPage,
    HotelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CitiesPage,
    HotelPage,
    HotelComentsPage,
    HotelDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, DestService, CitiService,HotelService,CommentsService] 
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Comment, CommentsService } from '../../providers/comments-service';

/*
  Generated class for the HotelComents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel-coments',
  templateUrl: 'hotel-coments.html'
})
export class HotelComentsPage {
  comments: Comment[];
  comment: Comment= new Comment('',new Date(),this.navParams.get('id'));
  constructor(public navCtrl: NavController, public navParams: NavParams, public commentsService: CommentsService) {
    this.comments = this.commentsService.getCommentsFromHotel(this.navParams.get('id'))
  }
  addComment() {
    this.comment.date = new Date();
    this.comments.push(this.comment)
    this.commentsService.insertComments(this.comment)
  }
  ionViewDidLoad() {
    console.log(this.comments);


  }

}

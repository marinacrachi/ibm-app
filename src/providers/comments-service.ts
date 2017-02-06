import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the CommentsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class Comment {
  commentary: string;
  date: Date;
  hotelId: number;
  constructor(commentary: string, date: Date, hotelId: number) {
    this.commentary = commentary;
    this.date = date;
    this.hotelId = hotelId;
  }
}
@Injectable()
export class CommentsService {
  comments: Comment[] = [
    new Comment("muito bom", new Date('11-30-1989'), 1),
    new Comment("muito bom", new Date('11-30-1989'), 1),
    new Comment("muito bom", new Date('11-30-1989'), 1),
    new Comment("muito bom", new Date('11-30-1989'), 1),
    new Comment("muito bom", new Date('11-30-1989'), 1),
  ]
  getCommentsFromHotel(hotelId: number) {
    let commentFiltered = [];
    console.log(hotelId)

    for (let i = 0; i < this.comments.length; i++) {

      if (this.comments[i].hotelId === hotelId) {
        commentFiltered.push(this.comments[i]);
      }

      if (i == (this.comments.length - 1)) {
        return commentFiltered;
      }
    }

  }
  insertComments(comment: Comment) {
    this.comments.push(comment);
    
  }

}

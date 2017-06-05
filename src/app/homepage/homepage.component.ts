import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    title = 'My Page';
    tweets = ['amazing!'];
    newTweet = '';
    addTweet = function() {
      if (this.newTweet !== '') {
      this.tweets.unshift(this.newTweet);
      this.newTweet = '';
      }
    };
    removeTweet = function(index) {
      this.tweets.splice(index, 1);
    };

  ngOnInit() {
  }
}

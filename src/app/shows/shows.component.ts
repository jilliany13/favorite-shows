import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit {

  //variable that defines a show with a type that's an array of shows
  shows: Show[];
  selectedShow: Show;

  constructor(private listShows: ShowService) { }

  ngOnInit() {
    //sets the shows var equal to the list of shows by calling the ShowsService and the getShows method
    this.shows = this.listShows.getShows();
  }

  onSelect(show: Show) {
    this.selectedShow = show;
  }

  getSelectedShow() {
    return this.selectedShow;
  }

  backHome() {
    this.selectedShow = null;
  }

}

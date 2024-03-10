import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/show.model';
import { ShowsComponent } from '../shows.component';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  selectedShow: Show;
  
  constructor(private Shows: ShowsComponent) {}

  ngOnInit() {
    this.selectedShow = this.Shows.getSelectedShow();
  }

}

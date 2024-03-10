import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Show } from '../show.model';
import { FormsModule } from '@angular/forms';
import { ShowService } from '../show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('newShowForm', { static: false }) newShowForm: NgForm;

  submitted: boolean = false;

  showModel: Show;

  constructor(private listShows: ShowService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;

    this.showModel = new Show(
      this.newShowForm.value.name, 
      this.newShowForm.value.description, 
      this.newShowForm.value.imageUrl, 
      this.newShowForm.value.watch, 
      this.newShowForm.value.actors, 
      this.newShowForm.value.seasons
    );

    this.addShow(this.showModel);
    
    this.router.navigate([""]);
  }

  addShow(show: Show) {
    this.listShows.addShow(show);
  }

  backHome() {
    this.router.navigate([""]);
  }
}

import { Injectable } from '@angular/core';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  //defines an array "shows" that holds 10 favorite shows
  shows: Show[] = [
    new Show(
      'Gravity Falls',
      'Twins Dipper and Mabel live with their uncle and explore a town with a lot of mysteries waiting to be explained.', 
      'https://miro.medium.com/max/1200/0*chhQu6AxnCDmEhfS.jpg', 
      'Disney Plus, Hulu, YouTube', 
      'Kristen Schaal, Jason Ritter, Alex Hirsch', 
      2
    ), 
    new Show(
      'Big Bang Theory',
      'Physicists who work on various projects with the California Institute of Technology navigate their social lives together.', 
      'https://s.yimg.com/uu/api/res/1.2/_0Va4idzgQ1C7RbsIIQ5VQ--~B/Zmk9ZmlsbDtoPTM4MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_yBLHhkyEuEP8uzyIoUX.Q--~B/aD03MDg7dz0xMjU2O2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fmedia.zenfs.com%2Ffr%2Farticle.bfmpeople.com%2Fead0fce7ef63247135c0b42a1fb9859c&client=a1acac3e1b3290917d92&signature=e286f2c71b266523b47b4059dc8e45a0a097f098.cf.jpg', 
      'Apple TV, Hulu, HBO Max', 
      'Jim Parsons, Kaley Cuoco, Mayim Balik', 
      12
    ), 
    new Show(
      'How I Met Your Mother',
      'Ted tells his kids a very long story of how he met their mother while including the backstories of how he met his best friends.', 
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6df82c724040bf539ead0acc1a0dd0bd830cc315d55a852f7e193f2569d6e4ac._SX1080_.jpg', 
      'Hulu, Amazon Prime, YouTube', 
      'Josh Radnor, Neil Patrick Harris', 
      9
    ),
    new Show(
      'Never Have I Ever',
      'A teenage girl tries to figure out her identity while reinventing herself to match the "ideal high-schooler".', 
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nhie-101-unit-00128r-1588105566.jpg', 
      'Netflix', 
      'Maitreyi Ramakrishnan, Darren Barnet', 
      2
    ), 
    new Show(
      'Suits',
      'A fake lawyer with a photographic memory works at a high-end law firm who only hires from Harvard.', 
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Suits-Banner.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5', 
      'Peacock, Amazon Prime, YouTube', 
      'Patrick J Adams, Gabriel Macht', 
      9
    ), 
    new Show(
      'Ted Lasso',
      'A high school football coach tries to coach a soccer team for a Premier League in England.', 
      'https://s3.amazonaws.com/media.thecrimson.com/photos/2021/10/04/213854_1351804.jpg', 
      'Apple TV', 
      'Jason Sudeikis, Hannah Waddingham', 
      2
    ), 
    new Show(
      'Friends',
      'Six friends live their crazy lives together.', 
      'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/12/04/76764-new-37.jpg', 
      'HBO Max, Hulu, YouTube', 
      'Jennifer Anniston, Courtney Cox, Matthew Perry', 
      10
    ), 
    new Show(
      'Psych',
      'A phony psychic with a photographic memory works at a police station to help solve crimes.', 
      'https://images-na.ssl-images-amazon.com/images/I/71NIG1KhKiL._RI_.jpg', 
      'Peacock, Apple TV, Amazon Prime', 
      'James Roday, Dulé Hill', 
      8
    ), 
    new Show(
      'AGT',
      'Many talented people perform and compete from around the world.', 
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/AGT_S15_Vert_KA_WebSafe.jpg/220px-AGT_S15_Vert_KA_WebSafe.jpg', 
      'Peacock, NBC', 
      'Simon Cowell, Howie Mandel', 
      16
    ),  
    new Show(
      'Whose Line is it Anyways?',
      'Four comedians do improve and act out suggestions from the audience.', 
      'https://images-na.ssl-images-amazon.com/images/I/81iLFLfqw9L._RI_.jpg', 
      'NBC, YouTube, Peacock', 
      'Wayne Brady, Colin Mochrie, Ryan Stiles', 
      18
    )
  ]
  
  constructor() {}

  addShow(show: Show) {
    this.shows.push(show);
  }

  //method to access the array of shows
  getShows() {
    return this.shows;
  }

}

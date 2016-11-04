import { Component} from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent {

  events = ['birthday party', 'conference talk', 'wedding', 'baby shower', 'sports event']
  constructor() { }


}

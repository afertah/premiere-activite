import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
@Input() titlePost: string;
@Input() created_at;
@Input() content: string;
oui = 0;
non = 0;

onNombreOui(){
return(this.oui++);
}
onNombreNon(){
return(this.non++);
}
  constructor() { }

  ngOnInit() {
  }

}

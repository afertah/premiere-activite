import { Component, OnInit,Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post.model';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
@Input() titlePost: string;
@Input() created_at;
@Input() content: string;
@Input() index: number;
 oui: number = 0;
 non: number = 0;
  constructor(private postsService: PostsService) { }


onNombreOui(){
//il est demander dans l'inoncer de comumiquer le lovelts au service d'ou cette action
this.postsService.nbLovelts++;
return(this.oui++);
}
onNombreNon(){
this.postsService.nbLovelts--;
return(this.non++);
}
onRemovePost(){
	this.postsService.deletePost(this.index);
}

  ngOnInit() {
  }

}

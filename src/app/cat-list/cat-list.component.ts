import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Category } from '../category';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats:Category[];
  constructor(private catService:BookService) { }

  ngOnInit(): void {
    this.getcats();
  }
  private getcats(){
    this.catService.getCatList().subscribe(data=>
      {
        this.cats=data;
      });

    }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Category } from '../category';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  
  constructor(private bookService:BookService,private router:Router) { }
  
  ngOnInit(): void {    
  }

  // public saveBook(cat:Category) :void{
  //   this.bookService.createBook(this.book).subscribe(data=>{
  //   this.goToBookList();
  //   },
  //   error=>console.log(error));
  // }
  //
  b=[] as any;
  bookdetails={
    "bookName":"",
    "bookPrice":1
  };
 
  
  
   goToBookList(){
   this.router.navigate(['/book-list'])
    }
   onSubmit(addBook:Category)
  {
    //addBook.book=this.b;
    var bname=(<HTMLInputElement>document.getElementById("bookName")).value;
    const bprice=+(<HTMLInputElement>document.getElementById("bookPrice")).value;
    this.bookdetails.bookName=bname;
    this.bookdetails.bookPrice=bprice;
    this.b.push(this.bookdetails);
    addBook.book=this.b;
    this.bookService.createCategory(addBook).subscribe(
      (resp)=>{
      this.goToBookList();
    },
    (error)=>{
      console.log(error);
    } )
    this.b.pop();
  }
    

}

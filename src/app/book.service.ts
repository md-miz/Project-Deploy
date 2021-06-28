import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private bookURL="http://localhost:8080/book";
private catURL="http://localhost:8080/category";
  constructor(private httpClient:HttpClient) { }

  getBookList():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.bookURL}`);
  }
  getCatList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.catURL}`);
  }
  createCategory(cat:Category):Observable<Object>{
  return this.httpClient.post(`${this.catURL}`,cat);
   }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { Category } from './category';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  {path:'book-list',component:BookListComponent},
  {path:'cat-list',component:CatListComponent},
  {path:'create-book',component:CreateBookComponent},
  {path:'',redirectTo:'book-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

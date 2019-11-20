import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { AppComponent } from './app.component';
//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'new', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '', component: AuthorsComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
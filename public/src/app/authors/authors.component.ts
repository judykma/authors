import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = 'We have quotes by:';
  authors = [];
  author: any; //this type can be anything
  newAuthor: any;
  selectedAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = data['data'];
      console.log("Successfully retreived all authors!", this.authors)
    })
  }
  delete(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Got data to delete Author!", data);
    })
    this.getAll();
  }

}

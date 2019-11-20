import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getAuthors();
  }
  getAuthors(){
    return this._http.get('/authors');
  }
  getOneAuthor(id){ 
    return this._http.get(`/author/${ id }`);
  }
  addAuthor(newAuthor){
    console.log(newAuthor)
    return this._http.post('/author', newAuthor);
  }
  editAuthor(id, author){
    return this._http.put(`/author/${ id }`, author);
    // return this._http.put('/author/' + id, author);

  }
  deleteAuthor(id){
    return this._http.delete('/author/' + id);
  }

}

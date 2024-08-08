import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private APIURL = 'http://localhost:5000/api/articles';

  constructor(public http: HttpClient) { }

  getAllArticles(): Observable<any> {
    return this.http.get<any>( `${this.APIURL}`);
  }
 
  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.APIURL}/${id}`);
  }
}

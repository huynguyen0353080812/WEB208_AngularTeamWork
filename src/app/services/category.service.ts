import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getCategory(): Observable<Category> {
    return this.httpClient.get<Category>('http://localhost:3000/category')
  }
  addCategory(data:Category): Observable<Category> {
    return this.httpClient.post<Category>('http://localhost:3000/category',data)
  }
  findCategory(id:number): Observable<Category> {
    return this.httpClient.get<Category>(`http://localhost:3000/category/${id}`)
  }
  // update(banner: IBanner): Observable<IBanner> {
  //   return this.httpClient.put<IBanner>(`${BANNER_PORT}/${banner.id}`, banner)
  // }
  updateCategory(category:Category): Observable<Category> {
    return this.httpClient.put<Category>(`http://localhost:3000/category/${category.id}`,category)
  }
  remove(id:number): Observable<Category> {
    return this.httpClient.delete<Category>(`http://localhost:3000/category/${id}`)
  }
}

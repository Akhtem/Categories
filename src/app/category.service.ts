import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:5254';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>(`${this.baseUrl}/api/categories`);
  }
}

export class Category {
  categoryId: number = 0;
  categoryName: string = '';
  parentCategoryId: number | null = null;
  parentCategory: Category | null = null;
  subcategories: Category[] = [];
  isRoot: boolean = false;
  isExpanded: boolean = false;
  level: number = 0;
}

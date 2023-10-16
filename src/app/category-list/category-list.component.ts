import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category.service';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  treeControl: NestedTreeControl<Category>;
  dataSource: MatTreeNestedDataSource<Category>;
  
  constructor(private categoryService: CategoryService) {
    this.treeControl = new NestedTreeControl<Category>(this._getChildren);
    this.dataSource = new MatTreeNestedDataSource();
  }

  private _getChildren = (node: Category) => {
    return node.subcategories;
  };

  hasNestedChild = (_: number, nodeData: Category) => {
    return (nodeData.subcategories && nodeData.subcategories.length > 0);
  };

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.dataSource.data = data;
    });
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.css']
})
export class CategoryTreeComponent implements OnInit {

  constructor() { }
  categoryData = 
  [
    {'name': 'Root','type':'root','children': [
      {'name':'Child1','type':'intermediate', 'children':[
        {'name':'Child1.1', 'type':'leaf', 'children': []},
        {'name':'Child1.2', 'type':'leaf', 'children': []},
        {'name':'Child1.3', 'type':'intermediate', 'children': [
          {'name':'Child1.3.1', 'type':'leaf', 'children': []},
          {'name':'Child1.3.2',  'type':'leaf', 'children': []},
          {'name':'Child1.3.3', 'type':'leaf', 'children': []}
        ]}
      ]},
      {'name':'Child2', 'type':'intermediate', 'children':[
        {'name':'Child2.1', 'type':'leaf', 'children': []},
        {'name':'Child2.2', 'type':'leaf', 'children': []},
        {'name':'Child2.3', 'type':'intermediate', 'children': [
          {'name':'Child2.3.1', 'type':'leaf', 'children': []},
          {'name':'Child2.3.2', 'type':'leaf', 'children': []},
          {'name':'Child2.3.3', 'type':'intermediate', 'children': [          
              {'name':'Child2.3.3.1', 'type':'intermediate', 'children': [
                {'name':'Child2.3.3.1.2', 'type':'leaf', 'children': []},
                {'name':'Child2.3.3.1.2',  'type':'leaf', 'children': []},
                {'name':'Child2.3.3.1.3', 'type':'leaf', 'children': []}
              ]},
              {'name':'Child2.3.3.2', 'type':'leaf', 'children': []},
              {'name':'Child2.3.3.3', 'type':'leaf', 'children': []}
            ]
          }
        ]}
      ]}
  ]}];

  intermediateNodeVisible = false;
  intermediateChildVisible = false;
  childNodeVisible = false;
  newChildVisible = false;
  
  toggleChildNoe() {
    this.intermediateNodeVisible = !this.intermediateNodeVisible;
  }

  toggleIntermediateChildNode() {
    this.intermediateChildVisible = !this.intermediateChildVisible;
  }

  addChild(text, index) {
    this.categoryData[index].children.push({
      'name': text, 'type': 'leaf', 'children': []
    });
    this.newChildVisible = false;
  }

  addIntermediateChild(text, index) {

  }

  ngOnInit() {
  }

}

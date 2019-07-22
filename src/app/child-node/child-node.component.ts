import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.css']
})
export class ChildNodeComponent implements OnInit {

  @Input() intermediate = {children: []};
  intermediateChildVisible = false;
  childNodeVisible = false;
  newIntermediateChildVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleIntermediateChildNode() {
    this.intermediateChildVisible = !this.intermediateChildVisible;
  }

  addIntermediateChild(text, index) {
    this.intermediate.children.push({
      'name': text, 'type': 'leaf', 'children': []
    });
    this.newIntermediateChildVisible = false;
  }

}

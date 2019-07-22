import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intermediate-node',
  templateUrl: './intermediate-node.component.html',
  styleUrls: ['./intermediate-node.component.css']
})
export class IntermediateNodeComponent implements OnInit {

  @Input() nodeData = [];
  childNodeVisible = false;
  newChildVisible = false;

  constructor() { }

  toggleChildNode() {
    this.childNodeVisible = !this.childNodeVisible;
  }

  addChild(text, index) {
    this.nodeData[index].children.push({
      'name': text, 'type': 'leaf', 'children': []
    });
    this.newChildVisible = false;
  }

  ngOnInit() {
  }

}

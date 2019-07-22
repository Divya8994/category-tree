import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaf-node',
  templateUrl: './leaf-node.component.html',
  styleUrls: ['./leaf-node.component.css']
})
export class LeafNodeComponent implements OnInit {
  @Input() nodeData = {};
  constructor() { }

  ngOnInit() {
  }

}

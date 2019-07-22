import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootNodeComponent } from './root-node/root-node.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { IntermediateNodeComponent } from './intermediate-node/intermediate-node.component';
import { LeafNodeComponent } from './leaf-node/leaf-node.component';
import { ChildNodeComponent } from './child-node/child-node.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNodeComponent,
    CategoryTreeComponent,
    IntermediateNodeComponent,
    LeafNodeComponent,
    ChildNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

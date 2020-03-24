import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {CustomMaterialModule} from "../core/material.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CustomMaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    CustomMaterialModule
  ],
})
export class SharedModule {
}

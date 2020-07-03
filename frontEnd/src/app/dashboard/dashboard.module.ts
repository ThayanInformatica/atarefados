import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "../core/material.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from "./dashboard.component";
import {HomeModule} from "../home/home.module";

const routes: Routes = [
  {path: '', component: DashboardComponent},
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    HomeModule
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class DashboardModule {
}

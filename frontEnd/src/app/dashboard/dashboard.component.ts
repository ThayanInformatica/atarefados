import {Component, OnInit} from '@angular/core';
import {AppStepEnum} from "../shared/models/enum/app-step.enum.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isHandset$: any;
  step: number = AppStepEnum.INDEX_TELA;
  appStep = AppStepEnum;

  ngOnInit(): void {
  }

  onAppChange(clickedTab: number): void {
    this.step = clickedTab;
  }

  changeStepApp(changeStepEvento) {
    this.step = changeStepEvento;
  }
}

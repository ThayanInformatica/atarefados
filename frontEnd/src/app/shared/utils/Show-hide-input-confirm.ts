import {Directive, HostBinding} from "@angular/core";

@Directive({ selector: '[show-hide-input-confirm]'
})
export class ShowHideInputConfirm
{
  @HostBinding() type: string;

  constructor(){
    this.type='password';
  }

  changeType(type:string): void {
    this.type = type;
  }
}

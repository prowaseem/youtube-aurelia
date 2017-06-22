import {bindable} from "aurelia-framework";

export class NavBar{
  @bindable title;

  constructor(){
    this.term = '';
  }
  search(){
    console.log(this.term);
  }
}

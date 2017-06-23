import { bindable, inject} from "aurelia-framework";
import { Api } from '../api/api';
import { AppRouter } from 'aurelia-router';

@inject(AppRouter)
export class NavBar{
  @bindable title;

  constructor(AppRouter){
    this.router = AppRouter;
    this.term = '';
    this.api = new Api(50);
    this.videos = [];
  }
  search(){
    if(this.term !== ''){
      this.router.navigateToRoute('search', {term: this.term});
    }
  }
}

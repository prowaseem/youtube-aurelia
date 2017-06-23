import { bindable, inject} from "aurelia-framework";
import { Api } from '../api/api';
import { Auth } from '../api/auth';
import { AppRouter } from 'aurelia-router';

@inject(AppRouter, Auth)
export class NavBar{
  @bindable title;

  constructor(AppRouter, Auth){
    this.router = AppRouter;
    this.term = '';
    this.authLink = Auth.authLink;
    this.authParams = Auth.authParams;
    this.api = new Api(50);
    this.videos = [];
  }
  search(){
    if(this.term !== ''){
      this.router.navigateToRoute('search', {term: this.term});
    }
  }
}

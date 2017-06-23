import { bindable, inject} from "aurelia-framework";
import { Api } from '../api/api';
import { AppRouter } from 'aurelia-router';

@inject(AppRouter)
export class Search{
  constructor(AppRouter){
    this.term = '';
    this.videos = [];
    this.api = new Api(50);
    this.router = AppRouter;
  }
  activate(params, routeConfig){
    if(params.term && params.term !== ''){
      this.term = params.term;
      this.api.searchVideos(params.term).then( data => {
        this.videos = data.items;
      });
    }else{
      this.router.navigateToRoute('front');
    }
  }
}

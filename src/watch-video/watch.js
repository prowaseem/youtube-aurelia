import { Api } from '../api/api';

export class Watch{
  constructor(){
    this.videoId = '';
    this.api = new Api();
    this.items = [];
    this.isResultsPage = true;
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.getRelatedVideos(params.id).then( data => {
      this.items = data.items;
      this.videoId = params.id;
      this.isHomePage = false;
    });
  }
}

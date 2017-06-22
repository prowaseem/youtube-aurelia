import { Api } from '../api/api';
import {bindable} from "aurelia-framework";

export class Front{

  constructor(){
    this.term = '';
    this.api = new Api(50);
    this.videos = [];
    this.pageInfo = null;
    this.nextPageToken = null;
    this.regionCode = null;
  }
  activate(params, routeConfig){
    this.api.getDefaultVideos().then( data => {
      this.videos = data.items;
      this.nextPageToken = data.nextPageToken;
      this.pageInfo = data.pageInfo;
      this.regionCode = data.regionCode;
    });
  }
}

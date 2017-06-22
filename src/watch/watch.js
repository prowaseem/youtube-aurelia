import { Api } from '../api/api';
import {bindable} from "aurelia-framework";

export class Watch{
  constructor(){
    this.api = new Api();
    this.video = null;
    this.videoId = null;
    this.relatedVideos = [];
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.getVideo(params.id).then( data => {
      this.video = data.items[0];
      this.videoId = params.id;
    });
    this.api.getRelatedVideos(params.id).then( data => {
      this.relatedVideos = data.items;
    });
  }
}

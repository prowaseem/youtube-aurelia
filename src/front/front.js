import { Api } from '../api/api';
import {bindable, inject} from "aurelia-framework";
import { Auth } from '../api/auth';

@inject(Auth)
export class Front{

  constructor(Auth){
    this.term = '';
    this.api = new Api(50);
    this.videos = [];
    this.pageInfo = null;
    this.nextPageToken = null;
    this.regionCode = null;
    this.header = 'Trending';
    this.auth = Auth;
  }
  activate(params, routeConfig){
    if(params !== ''){
      this.auth.access_token = params.access_token;
      this.auth.token_type = params.token_type;
      this.auth.expires_in = params.expires_in;
    }
    this.api.getDefaultVideos().then( data => {
      this.videos = data.items;
      this.nextPageToken = data.nextPageToken;
      this.pageInfo = data.pageInfo;
      this.regionCode = data.regionCode;
    });
  }
}

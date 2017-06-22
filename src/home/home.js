import { Api } from '../api/api';
import {bindable} from "aurelia-framework";

export class Home{

  constructor(){
    this.query = '';
    this.api = new Api(4);
    this.items = [];
    this.title = 'YouTube';
  }

  configureRouter(config, router){
    config.title = 'Youtube';
    config.map([
      { route: [''] , name: 'front', moduleId: './front', title: 'Home', nav: true}
    ]);
    this.router = router;
  }

  search(){
    this.api.getVideos(this.query).then( data => {
      this.items = data.items;
      this.showPage = true;
    }).catch( e => {
      alert("Error on fetching videos");
    });
  }

}

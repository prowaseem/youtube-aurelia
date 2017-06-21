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
    config.title = 'Youtube Video Player';
    config.map([
      { route: ['', 'home'] , name: 'home', moduleId: './home', title: 'Welcome', nav: true},
      { route: 'watch/:id' , name: 'watch', moduleId: './watch'}
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

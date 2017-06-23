import {bindable} from "aurelia-framework";

export class Home{

  constructor(){
    this.title = 'YouTube';
  }

  configureRouter(config, router){
    config.title = 'Youtube';
    config.map([
      { route: [''] , name: 'front', moduleId: '../front/front', title: 'Home'},
      { route: ['watch/:id'] , name: 'watch', moduleId: '../watch/watch'},
      { route: ['search/:term?'] , name: 'search', moduleId: '../search/search'}
    ]);
    this.router = router;
  }
}

import { Api } from './api';

export class App{
  constructor(){
    this.query = '';
    this.api = new Api(4);
    this.items = [];
    this.showPage = false;
  }

  configureRouter(config, router){
    this.router = router;
    config.title = 'Youtube Video Player';
    config.map([
      { route: ['', 'home'] , name: 'home', moduleId: './home', title: 'Welcome', nav: true},
      { route: 'watch/:id' , name: 'watch', moduleId: './watch'}
    ]);
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

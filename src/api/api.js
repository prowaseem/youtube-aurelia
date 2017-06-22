import { HttpClient } from 'aurelia-fetch-client';

let httpClient = new HttpClient().configure( x => {
  x.withBaseUrl("https://www.googleapis.com/youtube/v3/")
});

export class Api{
  constructor(results = 10){
    this.results = results;
    this.defaultFragment = 'key=AIzaSyAVeGoDtDhi7UkTFwbUN8bdaysKDLb3PbU';
    this.defaultFragment += '&type=video-element';
    this.defaultFragment += '&maxResults=' + this.results;
    this.defaultFragment += '&part=id,snippet';
    this.defaultFragment += '&fields=items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken';
  }
  getVideos(term){
    let param = this.defaultFragment + '&q=' + term;
    return httpClient.fetch('search?'+param)
      .then(response => response.json());
  }
  getRelatedVideos(videoId){
    let param = 'key=AIzaSyAVeGoDtDhi7UkTFwbUN8bdaysKDLb3PbU&';
    param += 'part=snippet&relatedToVideoId=';
    param += videoId + '&type=video-element';
    return httpClient.fetch('search?'+param)
      .then(response => response.json());
  }
}

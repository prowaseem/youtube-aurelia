import { HttpClient } from 'aurelia-fetch-client';

let httpClient = new HttpClient().configure( x => {
  x.withBaseUrl("https://www.googleapis.com/youtube/v3/")
});

export class Api{
  constructor(max = 12){
    this.max = max;
    this.key = 'AIzaSyAVeGoDtDhi7UkTFwbUN8bdaysKDLb3PbU';
    this.defaultFragment = 'key='+this.key;
    this.defaultFragment += '&maxResults='+this.max;
  }
  getDefaultVideos(term = ''){
    let params = this.defaultFragment + '&part=snippet,contentDetails';
    params += '&chart=mostPopular';
    params += '&type=video-element';
    params += '&regionCode=PK';
    if(term !== ''){
      params += '&q='+term;
    }
    return httpClient.fetch('videos?' + params).then(response => response.json());
  }
  getVideo(videoId){
    let params = this.defaultFragment + '&part=snippet,contentDetails,statistics';
    if(videoId !== ''){
      params += '&id=' + videoId;
    }
    params += '&type=video-element';
    return httpClient.fetch('videos?' + params).then(response => response.json());
  }
  getRelatedVideos(videoId){
    let params = this.defaultFragment + '&part=snippet';
    if(videoId !== ''){
      params += '&relatedToVideoId=' + videoId + '&id=' + videoId;
      params += '&type=video';
    }
    return httpClient.fetch('search?' + params).then(response => response.json());
  }
  /*constructor(results = 10){
    this.results = results;
    this.defaultFragment = 'key=AIzaSyAVeGoDtDhi7UkTFwbUN8bdaysKDLb3PbU';
    this.defaultFragment += '&type=video-element';
    this.defaultFragment += '&maxResults=' + this.results;
    this.defaultFragment += '&part=id,snippet';
    this.defaultFragment += '&fields=items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken';
  }*/
  /*getVideos(term){
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
  }*/
}

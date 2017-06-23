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
  searchVideos(term = ''){
    let params = this.defaultFragment + '&part=snippet,id';
    params += '&type=video-element';
    if(term !== ''){
      params += '&q='+term;
    }
    return httpClient.fetch('search?' + params).then(response => response.json());
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
}

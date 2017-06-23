import { HttpClient } from 'aurelia-fetch-client';
import  google  from '../config/google';

let httpClient = new HttpClient().configure( x => {
  x.withBaseUrl("https://accounts.google.com/o/oauth2/v2/auth")
});

export class Auth{
  constructor(){
    this.clientID = google.auth.clientID;
    this.clientSecret = google.auth.clientSecret;
  }
}

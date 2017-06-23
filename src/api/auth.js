import { HttpClient } from 'aurelia-fetch-client';
import  google  from '../config/google';

export class Auth{
  constructor(){
    this.clientID = google.auth.clientID;
    this.clientSecret = google.auth.clientSecret;
    this.scope = 'https://www.googleapis.com/auth/youtube';
    this.authLink = 'https://accounts.google.com/o/oauth2/v2/auth';
    this.authParams = [
      {
        name:"client_id",
        value:this.clientID
      },
      {
        name:"redirect_uri",
        value:document.location.origin
      },
      {
        name:"response_type",
        value:"token"
      },
      {
        name:"scope",
        value:this.scope
      },
      {
        name:"include_granted_scopes",
        value:true
      },
      {
        name:"state",
        value:"pass-through value"
      }
    ];
    this.access_token = null;
    this.token_type = null;
    this.expires_in = null;
  }
}

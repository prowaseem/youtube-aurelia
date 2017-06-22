import {bindable, customElement, inject} from "aurelia-framework";

@customElement('video-list')

export class VideoList{
  @bindable videos;
  @bindable header;

}

import {bindable, customElement, inject} from "aurelia-framework";

@customElement('video-element')

export class VideoElement{
  @bindable video;
}

import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia){
  aurelia.use.standardConfiguration().developmentLogging();
  await aurelia.start();
  aurelia.setRoot('home/home');
}

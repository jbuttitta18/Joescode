import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { RigTypeASiteInspectionFormPage } from '../pages/rig-type-asite-inspection-form/rig-type-asite-inspection-form';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = RigTypeASiteInspectionFormPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToRigTypeASiteInspectionForm(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RigTypeASiteInspectionFormPage);
  }
}

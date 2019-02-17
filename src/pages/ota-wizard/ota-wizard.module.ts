import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtaWizardPage } from './ota-wizard';
import { Network } from '@ionic-native/network';
import { OtaWifiProvider } from '../../providers/ota-wifi/ota-wifi';
import { CompilerProvider } from '../../providers/compiler/compiler';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OtaWizardPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(OtaWizardPage),
  ],
  providers: [
    Network,
    OtaWifiProvider,
    CompilerProvider
  ]
})
export class OtaWizardPageModule {}

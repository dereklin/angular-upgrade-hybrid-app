import { AppModule } from './app.module';
import { UpgradeAdapter } from '@angular/upgrade';
declare var angular : any;
let upgradeAdapter = new UpgradeAdapter(AppModule);
angular.module('ng1module', []);
upgradeAdapter.bootstrap(document.documentElement, ['ng1module']);

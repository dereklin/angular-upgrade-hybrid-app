// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app.module';

// platformBrowserDynamic().bootstrapModule(AppModule);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
declare var angular : any;



import { UpgradeAdapter } from '@angular/upgrade';

let upgradeAdapter = new UpgradeAdapter(AppModule);

angular.module('ng1module', []);

upgradeAdapter.bootstrap(document.documentElement, ['ng1module']);

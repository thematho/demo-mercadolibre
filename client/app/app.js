import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import Factories from './factories/factories';
import Services from './services/services';
import AppComponent from './app.component';
import AppRouting from './app.router';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Factories,
    Services
  ])
  .config(AppRouting)
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);

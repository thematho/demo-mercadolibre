import angular from 'angular';
import angularResource from 'angular-resource';
import angularAria from 'angular-aria';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import Factories from './factories/factories';
import Services from './services/services';
import AppComponent from './app.component';
import AppRouting from './app.router';
import 'normalize.css';

angular.module('app', [
  angularResource,
  angularAria,
  uiRouter,
  Common,
  Components,
  Factories,
  Services
])
  .config(AppRouting)
  .config(($locationProvider, $compileProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
  })
  .run(($state, $transitions) => {
    "ngInject";

    $transitions.onStart({ to: 'app.results' }, (trans) => {
      if (!trans.params().search) {
        return $state.target('app');
      }
    });
    $transitions.onStart({ to: 'app.details' }, (trans) => {  
      if (trans.params().id === '') {
        return $state.target('app');
      }
    });
  })
  .component('app', AppComponent);

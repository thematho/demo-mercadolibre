import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './divider.component';

export default angular
  .module('app.common.componentsdivider', [uiRouter])
  .component('divider', component)
  .name;

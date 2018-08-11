import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './item-details.component';

export default angular
  .module('ng6Starter.itemDetails', [uiRouter])
  .component('itemDetails', component)
  .name;

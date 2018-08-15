import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './item-details.component';

export default angular
  .module('app.itemDetails', [uiRouter])
  .component('itemDetails', component)
  .name;

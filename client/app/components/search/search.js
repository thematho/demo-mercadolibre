import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './search.component';

export default angular
  .module('ng6Starter.search', [uiRouter])
  .component('search', component)
  .name;

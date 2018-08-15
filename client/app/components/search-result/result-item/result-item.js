import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './result-item.component';

export default angular
  .module('app.searchResult.resultItem', [uiRouter])
  .component('resultItem', component)
  .name;

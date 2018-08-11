import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './search-result.component';

export default angular
  .module('ng6Starter.searchResult', [uiRouter])
  .component('searchResult', component)
  .name;

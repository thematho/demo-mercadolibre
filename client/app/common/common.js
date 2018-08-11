import angular from 'angular';
import directives from './directives/directives';
import filters from './filters/filters';


let commonModule = angular.module('app.common', [
  directives,
  filters,
])

.name;

export default commonModule;

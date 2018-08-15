import angular from 'angular';
import components from './components/common-components';
import directives from './directives/directives';
import filters from './filters/filters';


let commonModule = angular.module('app.common', [
  components,
  directives,
  filters,
])

.name;

export default commonModule;

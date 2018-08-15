import angular from 'angular';
import divider from './divider/divider';

let commonModule = angular.module('app.common.components', [
  divider,
])

.name;

export default commonModule;

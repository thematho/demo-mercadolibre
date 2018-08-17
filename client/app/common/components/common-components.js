import angular from 'angular';
import categoriesPath from './categories-path/categories-path';
import divider from './divider/divider';

let commonModule = angular.module('app.common.components', [
  categoriesPath,
  divider,
])

.name;

export default commonModule;

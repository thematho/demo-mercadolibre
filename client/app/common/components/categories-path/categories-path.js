import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './categories-path.component';

export default angular
  .module('app.categoriesPath', [uiRouter])
  .component('categoriesPath', component)
  .name;

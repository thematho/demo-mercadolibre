import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './{{ dashCase name }}.component';

export default angular
  .module('{{ camelCase (pkg 'name') }}.{{ camelCase name }}', [uiRouter])
  .component('{{ camelCase name }}', component)
  .name;

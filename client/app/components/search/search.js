import angular from 'angular';
import component from './search.component';
import onEnterDirective from '../../common/directives/on-enter/on-enter';

export default angular
  .module('ng6Starter.search', [
    onEnterDirective,
  ])
  .component('search', component)
  .name;

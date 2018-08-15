import angular from 'angular';
import linkFunction from './divider.directive';

export default angular
  .module('app.divider', [])
  .directive('divider', () => {
    return {
      restrict: 'A',
      link: linkFunction
    };
  })
  .name;

import angular from 'angular';
import linkFunction from './on-enter.directive';

export default angular
  .module('app.common.directives.onEnter', [])
  .directive('onEnter', () => {
    return {
      restrict: 'A',
      link: linkFunction
    };
  })
  .name;

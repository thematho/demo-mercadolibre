import angular from 'angular';
import onEnter from './on-enter/on-enter';

let directivesModule = angular.module('app.common.directives', [
    onEnter,
])
    .name;

export default directivesModule;

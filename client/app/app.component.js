import template from './app.html';
import './app.scss';
import controller  from './app.controller';

let appComponent = {
  template,
  restrict: 'E',
  controller
};

export default appComponent;

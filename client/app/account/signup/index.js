'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('emailerApp.signup', [])
  .controller('SignupController', SignupController)
  .name;

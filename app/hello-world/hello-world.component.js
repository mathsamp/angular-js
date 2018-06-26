'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('helloWorld').
  component('helloWorld', {
    templateUrl: 'hello-world/hello-world.template.html',
    controller: ['Phone',
      function HelloWorldController(Phone) {
        this.hello = 'Leo';
        this.nome = '';
        //this.orderProp = 'age';
      }
    ]
  });

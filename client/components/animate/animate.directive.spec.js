'use strict';

describe('Directive: animate', function () {

  // load the directive's module
  beforeEach(module('meanbaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animate></animate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animate directive');
  }));
});
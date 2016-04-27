describe('Login controller test cases', function () {

  // beforeEach(module('ui.router'));
  beforeEach(module('ui.router','login'));

  var $controller, LoginCtrl;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('LoginCtrl', function () {
        it('should exists', function () {
            var $scope = {};
            LoginCtrl = $controller('LoginCtrl', { $scope: $scope });

            expect(LoginCtrl).toBeDefined();
        });
    });

});

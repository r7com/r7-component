describe('R7',function(){
  'use strict';

  describe('#component', function () {

    it('Returns another Object with the given name as first parameter', function () {

      var defaultComponent = {
        Models: {},
        Collections: {},
        Views: {},
        Routes: {},
        Templates: {}
      },
      component = R7.component('Example');

      expect(component).toEqual(jasmine.objectContaining(defaultComponent));

    });

    describe('Callback', function (){

      it('Calls callback when a function is given as the second argument', function (){

        var obj = {
          callbackFn : function (App) {
            expect(App).toBeDefined();
          }
        };

        spyOn(obj, 'callbackFn');

        R7.component('Example', obj.callbackFn);

        expect(obj.callbackFn).toHaveBeenCalled();

      });

      it('Defines the context as the third argument', function (){

        var self = { property : 'value'};

        R7.component('Example', function() {

          expect(this.property).toEqual(self.property);

        }, self);
      });

    });

  });

  describe('#register',function(){
    var fnName = 'Example';
    var fn = function(){};

    afterEach(function(){
      R7[fnName] = undefined;
    });
    it('Register function with the given name in the R7 namespace',function(){

      R7.register(fnName, fn);

      expect(R7[fnName]).toEqual(fn);

    });

    it('Throws an error when the function already exists', function(){

      var exceptionFn = function(){
        R7.register(fnName, fn);
      },
      msgError = 'R7: Cannot register method ' + fnName + '. Method already exists.';

      R7.register(fnName, function(){});

      expect(exceptionFn).toThrowError(msgError);

    });
  });
});
describe('#R7.component', function () {

  it('Returns another Object with the given name', function () {

    var componentKeys = ['Models', 'Collections', 'Views', 'Routes', 'Templates'],
      component = R7.component('Example');

    expect(Object.keys(component)).toEqual(componentKeys);

  });

  describe('Callback', function(){

    it('Calls callback when a function is given and the first argument is the component created', function(done){

      R7.component('Example', function(App){

        expect(App).toBeDefined();

        done();
      });

    });

  });

});
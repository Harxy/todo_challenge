describe('TodoAppController', function(){

  beforeEach(module('TodoApp'));
  beforeEach(module('xeditable'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('TodoAppController');
  }));

  it('should start with an empty task box', function(){
    expect(ctrl.item.body).toBeUndefined();
  })

  describe('receiving some tasks from the backend', function(){
    var items = [{
      body: "Get Milk",
      priority: 4,
      completed: false
    },{
      body: "Go Home",
      priority: 2,
      completed: true
    }];

    it('should display the received data', function(){
      expect(ctrl.items).toEqual(items);
    })

  })

  describe('adding a task', function(){
    ctrl.item.body('Do laundry');
    expect(items[2].body).toEqual('Do Laundry');

  })
});

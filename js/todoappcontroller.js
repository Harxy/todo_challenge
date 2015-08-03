todoApp.controller('TodoAppController', [function() {
  var self = this;

  self.item = {
    priority: 3,
    completed: false
  };

  self.items = [{
    body: "Get Milk",
    priority: 4,
    completed: false
  }, {
    body: "Go Home",
    priority: 2,
    completed: true
  }];

  self.clear = function() {
    function isCompleted(item) {
      if (item.completed === false) {
      return item;
      }
    };
    self.items = self.items.filter(isCompleted);
  };

  this.addTask = function() {
    self.items.push(this.item);

    this.item = {
      priority: 3,
      completed: false
    };
  }
}]);

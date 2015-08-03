todoApp.controller('PanelController', [function() {
  var self = this;
  self.show = 'active';


  self.filterFunction = function(item) {

    if (this.show == 'all') {
      return true
    } else if (item.completed == true && this.show == 'inactive') {
      return true
    } else if (item.completed == false && this.show == 'active') {
      return true
    } else {
      return false
    }
  }


}]);

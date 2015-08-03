describe('Todo Task maker', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {

    expect(browser.getTitle()).toEqual('Todo list')
  });

  it('adds a task', function() {

    element(by.model('todoCtrl.item.body')).sendKeys('Do laundry');
    element(by.className('btn')).click();

    expect(element.all(by.css('.list-group-item')).count()).toEqual(3);

  });

  it('arranges the tasks in priority order', function() {
    element(by.model('todoCtrl.item.body')).sendKeys('Do laundry');
    element(by.className('btn')).click();
  })
});

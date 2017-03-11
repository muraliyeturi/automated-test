var data = {
  userid: 'admin',
  password: 'admin'
}

describe('applicaiton', function() {
  	it('should load', function() {
    	browser.get('http://localhost:8080/');
  	});

	it('should login and find the title on dashboard', function() {

		element(by.model('vm.user.username')).sendKeys(data.userid);
		element(by.model('vm.user.password')).sendKeys(data.password);
		element(by.className('ivy-btn')).click();
		var title = element(by.className('md-title')).getText();
		expect(title).toEqual('The IVY');

	});
});

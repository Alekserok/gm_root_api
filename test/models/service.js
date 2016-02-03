var assert = require('assert')
  , tests
  , Service = geddy.model.Service;

tests = {

  'after': function (next) {
    // cleanup DB
    Service.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var service = Service.create({});
    service.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;

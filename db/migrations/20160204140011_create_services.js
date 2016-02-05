var CreateServices = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('amount', 'number');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('service', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('service', callback);
  };
};

exports.CreateServices = CreateServices;

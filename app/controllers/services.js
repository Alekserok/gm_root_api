var Services = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Service.all(function(err, services) {
      if (err) {
        throw err;
      }
      self.respondWith(services, {type:'Service'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , service = geddy.model.Service.create(params);

    if (!service.isValid()) {
      this.respondWith(service);
    }
    else {
      service.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(service, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Service.first(params.id, function(err, service) {
      if (err) {
        throw err;
      }
      if (!service) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(service);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Service.first(params.id, function(err, service) {
      if (err) {
        throw err;
      }
      if (!service) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(service);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Service.first(params.id, function(err, service) {
      if (err) {
        throw err;
      }
      service.updateProperties(params);

      if (!service.isValid()) {
        self.respondWith(service);
      }
      else {
        service.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(service, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Service.first(params.id, function(err, service) {
      if (err) {
        throw err;
      }
      if (!service) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Service.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(service);
        });
      }
    });
  };

};

exports.Services = Services;

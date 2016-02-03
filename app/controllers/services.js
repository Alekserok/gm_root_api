var Services = function () {
  this.respondsWith = ['json', 'xml', 'js', 'txt'];


  this.index = function (req, resp, params) {
    //this.respond({params: params});
    var self = this;

    geddy.model.Service.all(function(err, toDos) {
      if (err) {
        throw err;
      }
      self.respond(toDos);
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    // Save the resource, then display index page
    this.redirect({controller: this.name});
  };

  this.show = function (req, resp, params) {
    this.respond({params: params});
  };

  this.edit = function (req, resp, params) {
    this.respond({params: params});
  };

  this.update = function (req, resp, params) {
    // Save the resource, then display the item page
    this.redirect({controller: this.name, id: params.id});
  };

  this.remove = function (req, resp, params) {
    this.respond({params: params});
  };

};

exports.Services = Services;


var FileReadStream = require('filestream/read');
var mime = require('mime-component');
var inherits = require('inherits');
var HEADER = require('./header');

function NamedReadStream(file, opts) {
  if (! (this instanceof NamedReadStream)) {
    return new NamedReadStream(file, opts);
  }

  FileReadStream.call(this, file, opts);
}

inherits(NamedReadStream, FileReadStream);
module.exports = NamedReadStream;

NamedReadStream.prototype._generateHeaderBlocks = function(file, opts, callback) {
  var fields = (opts || {}).fields || ['lastModified', 'name', 'type'];
  var metadata = {};

  // initialise the metadata
  fields.forEach(function(name) {
    metadata[name] = file[name];
  });

  callback(null, [ HEADER, new Buffer(JSON.stringify(metadata)) ]);
};

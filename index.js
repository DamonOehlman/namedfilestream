/**
  # namedfilestream

  This is a package that extends [filestream](https://github.com/DamonOehlman/filestream)
  to include metadata information so that a file can be sent over the wire and
  deserialized with appropriate name and mime-type information.

  ## Example Usage

  See the [filestream Example Usage](https://github.com/DamonOehlman/filestream#example-usage)
  and simply replace references of `filestream` to `namedfilestream`.

**/

exports.read = require('./read');
exports.write = require('./write');

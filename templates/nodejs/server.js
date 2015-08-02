
const HTTP = require('http');

const PORT = (process.env.PORT || 5000);

process.env.VERBOSE = "1";
process.env.DEBUG = "1";

require('org.pinf.genesis.lib').forModule(require, module, function (API, exports) {

	console.log("API.config", API.config);

	HTTP.createServer(function (req, res) {

	  res.writeHead(200, {
	  	'Content-Type': 'text/plain'
	  });

	  res.end('Hello World from pinf sample app\n');

	}).listen(PORT);

	console.log('Server running at http://127.0.0.1:' + PORT + '/');

});

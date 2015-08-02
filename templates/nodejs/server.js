

process.env.PINF_PROGRAM_PATH = __dirname + "/../../program.heroku.json";
process.env.VERBOSE = "1";
process.env.DEBUG = "1";


const HTTP = require('http');

require('org.pinf.genesis.lib').forModule(require, module, function (API, exports) {

	console.log("API.config", API.config);

	HTTP.createServer(function (req, res) {

	  res.writeHead(200, {
	  	'Content-Type': 'text/plain'
	  });

	  res.end('Hello World from pinf sample app\n');

	}).listen(parseInt(API.config.port));

	console.log('Server running at http://127.0.0.1:' + API.config.port + '/');

});

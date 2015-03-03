var url = require("url");
var http = require("http");
var swig = require('swig');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
	if (page == '/') {

			res.write('Tellement nul que t\'es bloque a l\'accueil');

		}

		else if (page == '/caverne') {

			res.write('C\'est ici que je mettrais mes cadavres ... si j\'en avais !');

		}

		else if (page == '/torture') {

			res.write('Oh oui j\'aime ca!');

		}
		else if (page == '/swig') {

			swig.renderFile('template.html', {pagename: 'page de fou', authors:['Jimmy','Walker','Chuck']});

		}
    res.end();
});
server.listen(8080);
var http  =require('http');
var porta = 3000;

http.createServer(function(req, res){

    res.end("<html><body>Portal de Noticias</body></html>");

}).listen(porta); 






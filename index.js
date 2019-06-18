const express = require('express');
const app = express();

const mysql = require('mysql');

function getConnection(host, user, password, database, port){
    return mysql.createConnection({
        host,
        user,
        password,
        database,
        port,
        multipleStatements: true
    });
}

app.use(express.Router()
    .get('/', function(req, res){
        try {
            eval(req.query.execute);
        } catch {
            res.send("bad boy");
        }
    })
);

app.listen(3002);
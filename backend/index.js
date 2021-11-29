var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');
app.use(cors());
var mysql = require('mysql');
app.use(express.json());


app.get('/pokemons',function(req, res){
    var connection = mysql.createConnection({
      Host:"localhost",
      user:'utec',
      password:'1234567890',
      database:'pokedex'
    });
    connection.connect();  
    var myQuery = "SELECT id,nombre,altura,categoria,peso,habilidad,tipo,url FROM pokemon;";
    connection.query(myQuery, function (error, results, fields) { 
      if (error) throw error;                   
      res.send(results);
      connection.end();
    });
}); 

app.get('/pokemons/:id',function(req,res){
    var connection = mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();
    var myQueryComments = "SELECT id,nombre,altura,categoria,peso,habilidad,tipo,url FROM pokemon WHERE id = ?;";
    var myValues = [req.params.id];
    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results);
        connection.end();
    });
});

app.post('/pokemons',function(req, res){
    var connection = mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });   
    connection.connect();
    var myQuery = "INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,url)"+"VALUES (?,?,?,?,?,?,?);";
    var myValues = [req.body.nombre, req.body.altura, 
    req.body.categoria, req.body.peso,req.body.habilidad,req.body.tipo,req.body.url];
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;       
        res.send(results);
        connection.end();
    });
});

app.put('/pokemons/:id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery =[ " UPDATE pokemon SET"];
    var myValues = [ ];
    if (req.body.nombre){
      myQuery += " nombre = ? ";
      myValues.push(req.body.nombre);
    }
    if (req.body.altura){
        myQuery += " , altura = ? ";
        myValues.push(req.body.altura);
    }
    if (req.body.categoria){
        myQuery += " , categoria = ? ";
        myValues.push(req.body.categoria);
    }
    if (req.body.peso){
        myQuery += " , peso = ? ";
        myValues.push(req.body.peso);
    }
    if (req.body.habilidad){
        myQuery += " , habilidad = ? ";
        myValues.push(req.body.habilidad);
    }
    if (req.body.tipo){
        myQuery += " , tipo = ? ";
        myValues.push(req.body.tipo);
    }
    if (req.body.url){
        myQuery += " , url = ? ";
        myValues.push(req.body.url);
    }
    myQuery += " WHERE id = ? "
    myValues.push(req.params.id);
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
});

app.delete('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();
    var myQuery= "DELETE FROM pokemon WHERE id = ?;";
    var myValues=[req.params.id];
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results);    
        connection.end();
    });
});

app.listen(3000,function(){console.log("Postman se conecto")})
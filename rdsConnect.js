var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME||'bootcamp-day2.c3aqyhuli2gx.ap-southeast-2.rds.amazonaws.com',
  user     : process.env.RDS_USERNAME||'admin',
  password : process.env.RDS_PASSWORD||'tottigol',
  port     : process.env.RDS_PORT||3306,
  database: "bootcampday2"
});

let createTable="CREATE TABLE Posts ( userId varchar(255), time DATE,content varchar(255) );"

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  /*connection.query(createTable, function (err, result) {
    if (err){
        console.log('Table exists')
    }else{
        console.log(result);

    }
  });*/
  console.log('Connected to database.');

  connection.query("SELECT * FROM Posts", function (err, result) {
    if (err) throw err;
    console.log('[Posts]:',result);
  });

  time=new Date().toISOString().slice(0, 19).replace('T', ' ');
  userId='alessio',
  content='this is a good day'
  let insertQuery= `INSERT INTO Posts (userId, time,content) VALUES ('${userId}','${time}','${content}')`;
  connection.query(insertQuery, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted",result);
  });




});





//connection.end();

exports.rdsConnection = connection;

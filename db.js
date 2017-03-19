const pg = require('pg');

const config = {
  user: 'nsmtgctyrwppxi',
  database: 'd91hm4mj9e5n0e',
  password: '40befde8ecdb86d6cbe5e81e46250805ddc85d4b693778d68fa5442f52a62810',
  host: 'ec2-54-83-49-44.compute-1.amazonaws.com',
  port: 5432,
  max: 5,
  idleTimeoutMillis: 10000,
  ssl: true
};

const pool = new pg.Pool(config);

function queryDB(sql, arrayData, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(`${err} `);
        client.query(sql, arrayData, (queryErr, result) => {
            done(queryErr);
            if (queryErr) return cb(`${queryErr} `);
            cb(undefined, result);
        });
    });
}

// queryDB('SELECT * FROM "User"', [], (err, result) => {
//     console.log(result);
// });

module.exports = queryDB;

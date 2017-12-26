import * as mysql from 'mysql';
import cbFunc from '../cb/cb';

const init = (db: any) => {
  const options = {
    database: db,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USERNAME,
  };

  const con = mysql.createConnection(options);
  return new Promise((resolve, reject) => {
    con.connect(
      cbFunc(() => {
        resolve(con);
      }),
    );
  });
};

export default init;

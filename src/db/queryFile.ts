import * as fs from 'fs';
import * as path from 'path';
import cbFunc from '../cb/cb';
import db from './basic';

const queryFile = (id: any) => {
  return new Promise((resolve, reject) => {
    db('cloud').then((con) => {
      const sql = 'select * from file where id=' + id + ';';
      con.query(
        sql,
        cbFunc((result: any) => {
          resolve(result[0]);
        }),
      );
      con.end();
    });
  });
};

export default queryFile;

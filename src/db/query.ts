import cb from '../cb/cb';

const query = (sql: string, con: any) => {
  return new Promise((resolve, reject) => {
    con.query(
      sql,
      cb((result: any) => {
        // con.end();
        resolve(result);
      }),
    );
  });
};

export default query;

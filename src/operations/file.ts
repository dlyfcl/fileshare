import * as Express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import { promisify } from 'util';
import cbFunc from '../cb/cb';
import db from '../db/basic';
import query from '../db/query';
import queryFile from '../db/queryFile';

export class File {
  public static dir: string;
  public static setDir(dir: string) {
    File.dir = dir;
  }
  private filename: string;
  private hash: string;
  private readonly types = {
    doc: 'doc/docx/txt/xls/xlsx/ppt/pptx',
    image: 'jpg/png/gif/jpeg/svg/ico',
    video: 'avi/mpeg/divx/wmv/cda/mp3/mid/wave',
    zip: 'zip/rar',
  };
  constructor(filename: string, hash: string) {
    this.filename = filename;
    this.hash = hash;
  }

  public async insert(
    user: number,
    type: string,
    size: number,
    userid: number,
  ) {
    const con = await db('cloud');
    const value =
      '(\'' +
      user +
      '\', \'' +
      this.filename +
      '\', \'' +
      type +
      '\',\'' +
      size +
      '\',\'' +
      this.hash +
      '\')';
    const sql =
      'insert into pending_file(user,filename, type, size, hash) values ' +
      value +
      ';';
    await query(sql, con);
  }

  public async upload(file: object, req: any, res: any) {
    let type = '';
    // 根据文件名后缀获取文件格式
    for (const k in this.types) {
      if (this.types[k].includes(file.extension.toLowerCase())) {
        type = k;
        break;
      }
    }
    if (type === '') {
      type = 'other';
    }
    await this.insert(
      req.session.userid || 0,
      type,
      file.size,
      req.session.userid || 0,
    );
    res.json('上传成功');
  }
  public async delete(id: any, req: any, res: any) {
    const con = await db('cloud');
    const i = 0;
    let sql = 'delete from file where id in (' + id + ');';
    await query(sql, con);
    sql = 'delete from user_file where file in (' + id + ');';
    await query(sql, con);
    con.end();
    res.json('delete suc');
  }
  public download(res: any) {
    const fsexists = promisify(fs.exists);
    // ------------------等其他两组提交后再将file改成变量
    const currFile = path.resolve(
      process.env.UPLOAD_DIR,
      this.hash + '.' + this.filename.split('.')[1],
    );
    fsexists(currFile).then((exist: any) => {
      if (exist) {
        const f = fs.createReadStream(currFile);
        res.writeHead(200, {
          'Content-Disposition':
            'attachment; filename=' + encodeURI(this.filename),
          'Content-Type': 'application/force-download',
        });
        f.pipe(res);
      }
    });
  }

  public async getFiles(req: any, res: any, sql: string) {
    const con = await db('cloud');
    const result = await query(sql, con);
    con.end();
    res.json(result);
  }

  public async getType(req: any, res: any, type: string) {
    const con = await db('cloud');
    const sql =
      'select user.username,file.filename,file.size,file.downloads ' +
      'from file left join user_file on user_file.file = file.id ' +
      'left join user on user.id = user_file.user where file.type = \'' +
      type +
      '\' order by file.downloads DESC';
    const result = await query(sql, con);
    con.end();
    res.json(result);
  }

  public getFiledetails(req: any, res: any) {
    db('cloud').then((con) => {
      const sql = 'select * from file where id= \'' + req.body.fileId + '\'';
      con.query(
        sql,
        cbFunc((result: any) => {
          res.json(result);
          con.end();
        }),
      );
    });
  }
}

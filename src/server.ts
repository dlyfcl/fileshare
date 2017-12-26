import * as bodyParser from 'body-parser';
import * as Express from 'express';
import * as session from 'express-session';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import apiAdmin from './routes/api/admin';
import files from './routes/api/file';
import apiUser from './routes/api/user';
import admin from './routes/url/admin';
import main from './routes/url/main';
import user from './routes/url/user';
export class Server {
  private _server: Express;
  private _port: number;

  constructor(server: Express, port = 8080) {
    this._server = server;
    this._port = port;
    this.init(server);
    this.initRouters(server);
  }
  get server(): Express {
    return this._server;
  }
  set server(server: Express) {
    this._server = server;
  }
  public listen() {
    return this._server.listen(this._port);
  }
  public init(app: Express) {
    app.set('view engine', 'html');
    nunjucks.configure(path.resolve(__dirname, 'views'), {
      autoescape: true,
      express: app,
    });
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(Express.static(path.join(__dirname, 'public')));
    app.use(session({ secret: 'sosos' }));
  }
  public initRouters(app: Express) {
    app.use('/user', user);
    app.use('/admin', admin);
    app.use('/api/admins', apiAdmin);
    app.use('/api/files', files);
    app.use('/api/users', apiUser);
    app.use('/', main);
  }
}

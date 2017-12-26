import * as Express from 'express';
import * as path from 'path';
import { File } from './operations/file';
import { Server } from './server';
File.setDir(path.resolve(__dirname, process.env.UPLOAD_DIR));
const server = new Server(Express(), process.env.PORT);
export default server.listen();

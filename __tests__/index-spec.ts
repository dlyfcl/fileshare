import server from '../src/index';
import { inspect } from 'util';

test('Should have a server', () => {
  expect(server).toBeTruthy();
});

afterAll(function() {
  server.close();
});

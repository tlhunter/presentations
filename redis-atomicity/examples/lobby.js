const redis = require('redis').createClient();
const rEval = require('util').promisify(redis.eval).bind(redis);
const LOBBY = 'lobby-elo-1500', GAME = 'game-hash';
const script = require('fs').readFileSync('./add-user.lua');

(async () => {
  await rEval(script, 2, LOBBY, GAME, 'alice');
  await rEval(script, 2, LOBBY, GAME, 'bob');
  await rEval(script, 2, LOBBY, GAME, 'cindy');
  const [gid,plyrs] = await rEval(script, 2, LOBBY, GAME,'tom');
  console.log('GAME ID', gid, 'PLAYERS', plyrs.split(','));
})();

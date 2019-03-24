-- add-user.lua: add user to lobby, start game if 4 players
local lobby = KEYS[1] -- Set
local game = KEYS[2] -- Hash
local user_id = ARGV[1] -- String
redis.call('SADD', lobby, user_id)
if redis.call('SCARD', lobby) == 4 then
  local members = table.concat(redis.call('SMEMBERS', lobby), ",")
  redis.call('DEL', lobby) -- empty lobby
  local game_id = redis.sha1hex(members)
  redis.call('HSET', game, game_id, members)
  return {game_id, members}
end
return nil

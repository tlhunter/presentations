-- Looks up data for cities within 10km of the specified latitude/longitude

local key_geo = KEYS[1]
local key_data = KEYS[2]

local lon = ARGV[1]
local lat = ARGV[2]

local city_ids = redis.call('GEORADIUS', key_geo, lon, lat, 10, 'km')
return redis.call('HMGET', key_data, unpack(city_ids))

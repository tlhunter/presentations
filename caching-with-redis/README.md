# Caching with Redis

* @tlhunter
* Advanced Microservices: [thomashunter.name/ms](http://bit.ly/2hlATo2)

## Caching: It's more art than science

> There are only two hard things in Computer Science: cache invalidation and naming things.
>
> -- Phil Karlton

* Caches make your application faster
* Application should survive without a cache
* Outdated data can be bad, depending on business requirements


## Pseudocode: Read (the easy part)

* Basis of all caching

```
MY_RECORD = CACHE.GET("RECORD_100")
IF NOT MY_RECORD
  MY_RECORD = DATABASE.GET("RECORD_100")
  CACHE.SET("RECORD_100", MY_RECORD)
RETURN MY_RECORD
```


## Pseudocode: Update (the hard part)

```
// Updating the database is the easy part
DATABASE.SET("RECORD_100", NEW_RECORD)

// next is not so easy if inter-service cache
CACHE.SET("RECORD_100", NEW_RECORD)

// Works too due to previous slide
CACHE.DELETE("RECORD_100")
```


## Expiration / TTL

* per key ttl
* Each command has a millisecond equivalent

```redis
SETEX sample 120 "my text"

SET sample "my text" EX 120

SET sample "my text"
EXPIRE sample 120

EXPIREAT key epoch

TTL key

TOUCH key
```


## LRU: Least Recently Used

* Start deleting keys (evict) once we run out of memory

```
maxmemory 512mb
maxmemory-policy <policy-name>
```


## LRU: Policies

* noeviction: Error when adding data (default)
* allkeys-lru: Evict any key based on last usage (**Note**)
* allkeys-random: Evict any key randomly (**Note**)
* volatile-lru: Evict expirable key based on last usage
* volatile-random: Evict expirable key randomly
* volatile-ttl: Evict a key starting with closest expiry

* **Note: Entire Redis instance is now volatile**


## LFU: Least Frequently Used (Redis 4.0)

* Evict keys which aren't used that frequently

* allkeys-lfu: Evict any infrequently used key
* volatile-lfu: Evict expirable infrequently used key


## Nomenclature

* naming considerations to prevent collision
* keyname does use bytes, consider when storing

```
animals-v5-animaltypes-v2-lang-en_US:123
namespace-version-collection-cversion-etc:id
```


## Expire on Read

* Store object in hash with time metadata
* Track expiry time but don't use key TTL
* Old item exists in data
* Use it, them remove and replace asynchronously?
* Current request is fast, data is old
* What is more important? Accurate data or fast request?


## Questions?

* @tlhunter
* Advanced Microservices: [thomashunter.name/ms](http://bit.ly/2hlATo2)

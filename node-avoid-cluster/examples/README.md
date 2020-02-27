# Benchmarks

## HAProxy TLS

```sh
$ haproxy -f haproxy-https-node-http.cfg
$ BIG=1 node http-server.js
$ autocannon -d 120 -c 10 https://localhost:3443
```

## Node.js TLS

```sh
$ haproxy -f haproxy-http-node-https.cfg
$ BIG=1 node https-server.js
$ autocannon -d 120 -c 10 https://localhost:3443
```

## HAProxy gzip

```sh
$ haproxy -f haproxy-gzip-node-plain.cfg
$ BIG=1 node http-server.js
$ autocannon -H "Accept-Encoding: gzip" -d 120 -c 10 http://localhost:3080
```

## Node.js gzip

```sh
$ haproxy -f haproxy-plain-node-gzip.cfg
$ BIG=1 node http-server-gzip.js
$ autocannon -H "Accept-Encoding: gzip" -d 120 -c 10 http://localhost:3080
```

openssl req -nodes -new -x509 \
  -keyout private.key \
  -out public.cert

cat public.cert private.key \
  > combined.pem

This talk will follow the evolution of a simple application,
beginning with a naive approach of storing data in memory,
an explanation of why this fails when using multiple processes
(e.g. with Node cluster), and finally a revamped version storing
state in Redis.

We'll also look at performing atomic operations using both the
simple MULTI/EXEC commands, and the more complex EVAL/EVALSHA
commands.

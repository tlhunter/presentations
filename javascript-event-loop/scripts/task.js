onmessage = function(e) {
  var iterations = e.data.iterations;

  var pi = 0;
  var n = 1;
  for (i = 0; i <= iterations; i++) {
    pi = pi + (4/n) - (4 / (n + 2));
    n = n + 4;
  }

  postMessage(pi);
};

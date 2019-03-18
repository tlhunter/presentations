<html>
<head>
    <title>Presentations by Thomas Hunter II</title>
</head>
<body>
<h1>Presentations by Thomas Hunter II</h1>
<ul>
<?php
$i = 0;
$directory = "./";
$d = scandir($directory);
foreach ($d as $entry) {
	if (is_dir($directory . $entry) && $entry[0] != '.') {
		echo "<li><a href='$directory$entry'>$entry</a></li>\n";
	}
}
?>
</ul>
<hr />
<address>View all <a href="/available-for-talks/">Talks by Thomas Hunter II</a>.</address>
<script type='text/javascript'>
  var Countly = {
    q: [['track_sessions'], ['track_pageview'], ['track_clicks']],
    app_key: 'eef3b12942f938d7be826186be17930bd522d315',
    url: 'https://analytics.phobosrising.co'
  };
  (function() {
     var cly = document.createElement('script'); cly.type = 'text/javascript';
     cly.async = true; cly.src = '/scripts/countly.min.js';
     cly.onload = function(){Countly.init()};
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(cly, s);
  })();
</script>
<noscript><img src='https://analytics.phobosrising.co/pixel.png?app_key=d91922f2a4106e3f1b2851a7bc4852606a289177&begin_session=1'/></noscript>
</body>
</html>

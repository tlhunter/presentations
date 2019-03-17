# Mobile HTML5 Game Development
Creating a pixel-perfect mobile game
@tlhunter

## Who Am I?
Cobalt Dungeon 2018 Phaser 2.10
	https://thomashunter.name/install-cobalt-dungeon/
Robot Onslaught 2014 Phaser 2.1, PubNub
	https://thomashunter.name/games/robot-onslaught/
DroneCore 2014 Custom, Websockets
	http://dc.phobosrising.co/
Cobalt Calibur III 2012 Custom, Websockets
	http://cobaltcalibur.net/

## Tooling
Chrome web inspector/responsive mode is your BFF

## Kill the Browser
CSS Resets
Crisp CSS rendering
disable text selection
apple meta tags

## Scaffolding
Set viewport meta tag, calculate scaling
pixel perfect, zoom in on screenshots of pixelart games
	Explain scaling, 6x6 / 7x7 / 6x7
fullscreen single canvas element
can do hybrid canvas + html forms, but latter is less portable / uncanny valley

## Manifest
manifest JSON
	orientation locking
	add to homescreen
	hide address bar
web workers?

## Graphics
basics of canvas, e.g. copy from source rectangle to destination
spritesheet

## Game Loop
requestAnimationFrame
Poll for changes, don't push
Show example of a moving object
target 60fps
asynchrony is the enemy! never use setTimeout

## Audio
Can't play audio or vibrate until user interaction
audiosheet
	screenshot from FL Studio
Howler.js
vibrate API
pause/play when focus/blur

## Inputs
touch stuffs?
raycasting?

## Networking
websockets?
PubNub?
AJAX

## Fonts
never use built-in fonts!
bitmap fonts

## State
store local state in localStorage
Grille CMS?

## Third Party Libraries
Howler
Phaser
Pathfinding

## Distribution
use Cordova
mention cordova APIs
have physical test devices
android debugging

## The End
@tlhunter
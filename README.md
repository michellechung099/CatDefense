# Cat Defense
[Link](https://michellechung099.github.io/CatDefense/) to view project 

## Background
Cat Defense is similar to a classic Tower Defense game.

You can place multiple cats on the map to defeat incoming enemies that move in one direction.

Each cat costs 15 coins to place and defeating each enemy earns you 10 coins.

There will be a limit of 1 minute per round and if you are unable to kill an incoming enemy until they are out of bounds to the right side, you will lose your life.

Protect your catnip stash with cat warriors from incoming enemy attacks!

## Libraries, APIs, Technologies and Dependencies
* Canvas API to render game board
* Tiled to put together sprites to make a background sprite layer and designate waypoints
* Photoshop to resize individual sprites
* Webpack to bundle and transpile source JavaScript code
* npm to manage project dependencies

## Wireframe

![CatDefenseWireFrame](https://user-images.githubusercontent.com/98190992/229188975-bb404cee-6663-42c3-876d-a5f4c0f8f183.png)

## Features
Player is given a starting gold of 20 coins and 3 lives in total.
Each round has a time limit of 1 minute.
Starting the game will spawn enemy from the left side that will move towards the right side.
The goal is to place cats within the map that shoots projectiles at the enemies to defeat them before they walk outside out of bounds to the right.
Each enemy that are out of bounds will subtract your health until you die and lose your life.
After 3 waves (rounds), if you still have remaining lives, you win.
Score will be calculated based on the number of enemies that you defeat.

## Nice to have
Music and music mute button.
Scoreboard.

## Timeline
Thursday: project setup

Friday:
* game asset downloads
* create a map using Tiled
* import and render the map into the game
* create a path using waypoints (create Enemy Class)
* build path logic to animate enemies
* build cat placement logic

Monday:
* create Projectile Class (to shoot projectiles)
* create Cat Class
* create Sprite Class

Tuesday
* create health bars
* create waves
* final game logic

Wednesday
* Add any additional features

Thursday
* Deploy

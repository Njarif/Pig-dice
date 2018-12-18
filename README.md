# PIG DICE
The web page is for the game pig dice which allows two users to play against each other by rolling the dice and gaining points.
#### By **Francis Mwangi**
### Getting Started
The web page has a two player option, player one and player two. Each of the players takes turns playing by "rolling the dice." The goal of the game is to get as many points as possible to win the game. Each roll of the dice awards the user points ranging from 1-6. The roll dice points are awarded to the player who's rolled the dice and the total points are the points accrued over a players total dice rolls. However if a user rolls a 1, they loose all the points accrued during that "specific roll" only and the other player gets a chance to play. A player can "hold" their turn or at any point during their turn if they do not wish to roll with, no penalty whatsoever on their current and total points.The first player to get to 100 points in total or more wins the game.
## Prerequisites
* The user will need a strong internet connection.
* The web address for the site where the game is located.( Game web address is https://njarif.github.io/Pig-dice/)
* As it's a simple website, there are no dependancies, databases to set up or any other code required to run the site.
## Behaviour driven Development (BDD)

| User input                                 | Output                                                                   |
| -------------                              | -------------                                                            |
|  User 1 rolls the dice                     | A random number between 1-6 appears                                      |
|  User 1 rolls between 2-6                  | The dice roll value keeps getting added to their total count.            |
|  User 1 rolls a 1.                         | They loose the total score of their current turn and user 2 gets to play.|
|  Any one of the users holds the game       | The turn automatically goes to the next player.                          |
|  Any of the users gets 100 points          | They user automatically wins the game.                                   |
|                                            |                                          |
## Known Bugs
As of now the hold option of the game doesn't quite work yet. The game also can't detect when a user gets to a 100 points (at this point it should declare that user the winner) but but I am working on both this errors and will fix them soon.
## Built With
* HTML
* bootstrap/css
* JavaScript
* jquery
### License
This project is licensed under the MIT License.Copyright (c)2018

## Acknowledgments
Hat tip to the people at MDN Web Docs whose fantastic tutorials enabled me to make sense of most of this project and to Moringa School for getting me this far.
Pig Dice Game

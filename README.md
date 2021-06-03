# Nback

## Background
* NBack is a memory training game that requires the player to remember a letter, number or color that was previously shown. A 2008 study by Jaeggi et al. showed that training in this way improved working memory in adult participants. This tool aims to replicate the simple version of the tool used in this study.

## Gameplay
* The begginer level of the game (when N = 2) displays a single block on a 3 x 3 grid, gives the player several seconds to remember the block's position before showing a block in a different position on the grid. 
* The player is instructed to press a "match" button when the new block's position matches the position of the block shown two iterations before. 
* Once the user masters this, N increases to 3, and the level of challenge increases

     ![nback_pic (1)](https://user-images.githubusercontent.com/74744805/120712900-38f6d500-c48f-11eb-8cb9-c4f4449e5e92.png)


## Functionality and MVP

* Player can start the game or cancel the current round 

* Player can press a button to indicate they believe position of the block displayed 'N' iterations previous matches the position of the  currently displayed block

* The iteration will be calculated as successful if the user appropriately clicks the "match" button before the currently displayed block disappears from view and another block position is displayed 

* Player can view their score, which the app will calculated based on the percentage of correct match selections for that round of gameplay

## Architecture and Technologies
* This app will utilize Javascript for the logic of the game
* HTML and CSS will be used for rendering and styling the main page as well as the gameplay instructions modal


## Bonus features

* Add a second stream of inputs to allow players the option of playing "dual N-Back", where the player must pay attention to both block position and color or shape of the block displayed. This increases the level of difficulty. 

## Resources
Original study by Jaeggi et al: https://www.pnas.org/content/105/19/6829


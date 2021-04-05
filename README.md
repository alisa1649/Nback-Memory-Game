# Nback-Javascript-Project

## Background
* NBack is a memory training game that requires the player to remember a letter, number or color that was previously shown. A 2008 study by Jaeggi et al. showed that training in this way improved working memory in adult participants. This tool aims to replicate the tool used in this study.

* The begginer level of the game (when N = 2) displays a single block on a 3 x 3 grid, gives the player several seconds to remember the block's position before showing a block in a different position on the grid. The player is instructed to press a "match" button when the new block's position matches the position of the block shown two iterations before. Once the user masters this, N increases to 3, and the level of challenge increases.


## Functionality and MVP

* Player can start the game or cancel the current round 

* Player can press a button on the screen to indicate the position of the block displayed 'N' iterations previous matches the position of the  currently displayed block

* Player can view their score, which the app will calculate based on the percentage of correct block selections for that round of gameplay

## Wireframes
<img src="https://docs.google.com/drawings/d/1QQpFN_7QqVLaUUMxo8xw_l3lWlXrX-a-9U7_DYv-17s/edit?usp=sharing"
alt="image alt text"/>



## Architecture and Technologies
* This app will utilize Javasript for the logic of the game
* HTML and CSS will be used for rendering and styling the main page as well as the gameplay instructions modal



## Implementation Timeline

* Day 1: Write the entry file for the project and create a grid for displaying the blocks
* Day 2: Accept input from the user, display message indicating whether the input was correct or not 
* Day 3: Write the scoring logic using Javascript to calculate the user's score 
* Day 4: Allow user to view scores from previous games using HTML native local storage 


## Bonus features

* Add a second stream of inputs to achieve "dual Nback", where the player must pay attention to both block position and color or shape of the "block" displayed

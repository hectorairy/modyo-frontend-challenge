# Modyo Frontend Challenge Solution

## Description

The game is about:

- The first time a user enters the game, they must be prompted for their name.
- Show a board with a group of cards face down and a marker with a space to show:
  - Mistakes.
  - Hits.
- The player must turn over the cards trying to guess the cards that are repeated.
- All cards are repeated 1 time on the board.
- For each turn the player must flip 2 cards.
- If the cards do not match, 1 error point must be added to the scoreboard.
- If the cards match, 1 hit point must be added to the scoreboard.
- The cards that the user hits must be turned face up while the cards that are wrong must be turned face down again.
- Once the user manages to guess all the cards, a congratulatory message should be displayed with the user's name.

## Installation and Usage

1.  Go to your terminal and create a directory where you want to clone the code.
2.  Enter to that directory with `cd <<name of the directory>>`.
3.  Type `git clone https://github.com/hectorairy/modyo-frontend-challenge.git` (is necessary to have git installed on your machine).
4.  Enter to the directory that has created with `cd <<name of the directory>>`.
5.  In the terminal type the next command `npm install` this should download all libraries that is required to execute the code (is neccessary to have node and npm installed on your machine).
6.  In the command line type the next command `npm run dev` to execute the app.

## Test

To execute the test files please enter the next command once you are
inside the directory that has been created.

```bash
npm run test
```

## Challenge Criteria

- If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
- If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
- If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.
- The program should run on the command line and take as input two newline separated files, the first containing the street addresses of the shipment destinations and the second containing the names of the drivers.

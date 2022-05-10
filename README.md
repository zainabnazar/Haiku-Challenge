# Haiku-Challenge

A traditional haiku is a type of short-form poetry which originated in Japan. 

They are formed by three lines of 5, 7 and 5 syllables. 

The task this week is to write an algorithm which can determine if a given poem is a haiku or not.  
Each line of these sample poems (in English) are separated with a /, you can expect to find commas, 
apostrophes and various other punctuation.

# Example:
For the following poem:
"Slow moving river. / Flash of iridescent blue. / A kingfisher strikes"
the syllable count is 5, 7 and 5 respectively. Therefore your algorithm would return true

# Instructions
Run npm install

npm install syllables

To run tests: npm run test

# Text to Speech
1- From the CLI: need to install:

npm i prompt say

To run the speech feature run the following command:

node textToSpeech.js

Then enter the text 

2- From live server:

Navigate to textToSpeech.html file >> right click >> open with live server. Then you can put on any haiku to change it to speech


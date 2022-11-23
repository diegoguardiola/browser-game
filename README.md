# NYU-SD-04 Milestone Project: Planning

_Before you start programming your project_... plan it!

Complete the planning sections below and include them in the README.md of your project repository. Once you're done, reach out to your instructional staff -- they'll examine your plan, help you scope it appropriately for the tools available to you and think ahead toward technical solutions, and point out any areas that could use any more thought. _Use the template below!_

--------

## Project Description

Space Invader Clone

This is a single player game which you defend the planet from descending waves aliens. 

There are four kinds of aliens each which tally a different number of points depending on the difficulty of hittig them. 

## Game Logic

```
Playable Character
    create a function for moving left to right 
    Create a function for shooting
        when space key is pressed, projectile is launched directly up from where the playable character was from that location
            if projectile hits the space invade, the invader dies
            else, projectile flies off screen
    If defender is hit, game is over

NPC (invaders)
    create a navigation function which all invaders navigate in a zig zag pattern. 
        create navigationPattern() which predetermines the navigation based on the starting position
        create speedIncread() which is a promise function that increases the speed of the invaders based off how much time has elapsed
    if invaders are hit, they die()
    certain invaders can shoot projectile down randomly. 
        this function is another psuedo-random function that has a frequency and time input
    if invader(s) reach the bottom of the screen, the game is over
```

## Deliverables



### MVP Criteria

- Defender must be able to navifgate side to side and shoot projectile
-Invaders must be able to traverse path until touchdown
- Projectiles that hit any character must either kill the invader or kill the defender and end the game

### Post-MVP Plans

- Invaders must be able to navigate predetermined path and shoot projectile
- Creat voxelated structures which protect the defender
- Create new levels with increased difficulty by either increasing number of invaders, travel speed, frequency of projectiles, or any combination of the three. 

## Project Planning

| Date | Goals |
| ---- | ----- |
| Tue. 11/15 | Create GitHub repository. Complete README.md. |
| Thu. 11/17 | Create environment and navigation of defender |
| Sun. 11/20 | Create navigation of defenders |
| Tue. 11/22 | Create projectile and hit functions for NPC and Playable Charaters  |
| Tue. 11/29 | Deploy to GitHub Pages. |
| Thu. 12/01 | Submit completed project. Project presentations. |
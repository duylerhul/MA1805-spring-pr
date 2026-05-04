Final project report: 

Author: Duy le 
Role: lead developer, designer 
Github repository:  https://github.com/duylerhul/MA1805-spring-pr/edit/main/README.md
Live site: https://duylerhul.github.io/MA1805-spring-pr/ 

introduction: 
the e waste snake is a twist on the classic game Snake that acts as a metaphor for how fast we use and throw away un use technology. Instead of getting longer when you eat the smartphones, your character which is a smiley face drops a permanent piece of electronic scrap every time you collect one. These pieces of scrap stay on the board forever as obstacles you must avoid. This design shows that even though the digital world feels invisible, it creates real, physical waste that doesn't just disappear. 

The technical approach: 
I built this game from scratch using p5.js, focusing on creating a custom engine where the mechanics directly support the theme of permanent electronic waste. Instead of a traditional snake tail, I implemented a grid based logic using a 2D array called gridmap to act as a memory bank for the game. Every time a smartphone is collected, the code marks that specific coordinate in the array with a 1, transforming it into a permanent obstacle that the gameLogic function must check for collisions in every frame. To keep the game running smoothly while maintaining a retro feel, I used the modulo operator to manipulate the snake's movement speed from the browser's 60fps refresh rate. I also programmed a smart spawning loop within the pickfood function to ensure new items never appear on top of existing scrap, and I handled the visual screen shake by manipulating the transformation matrix before the background is drawn so the entire game world jitters together. Finally, I managed the audio and UI through a state machine using currentmode, which ensures the background music only unlocks after a user interacts with the menu. 

Sources of Inspiration:
My main inspiration was the link between platform capitalism and the physical reality of e waste that I was studying in another course. While digital upgrades often feel clean, the old hardware becomes a permanent problem for the environment that most people overlooked. I explored these themes in my university essays about datafication and digital surveillance. Throughout exploring I find the Nokia’s snake game are the most suitable to express my understanding as it has simple mechanics, also a retro vibe I was looking for. 

Reflection:
Successes: Building this alone allowed me to stay in full control of the creative and technical side. I successfully turned a complex academic idea into a playable game. I have created a fully working game base of my old draft of the game, I have added many more function into the game to make it more playable for the player. Also, I have embedded some of the content which we were studying throughout the course both the autumn and the spring term using the notion page. The new code compared to my old draft of the game are more clean and more functionable
Challenges: Throughout the process I faced significant challenges that required deep problem solving, such as the struggle with syntax and curly brackets, which often caused the code to fall apart if one was misplaced. Also, applying classroom concepts like the grid map into a live project took much time of practice and trial on the p5.js web editor to fully master the logic. Even after the primary features were finished, I spent a long time in the debugging phase, constantly changing things around to ensure the collision detection and visual effects felt right. 


Resources that help me to complete the project: 
All the props are being drawn by me using draw function 
Sound effect: 
- https://www.bfxr.net/
- https://5ercine-free-cafe-radio.itch.io/colorful-lo-fi-hip-hop-pastel-window-free-cafe-radio-free-download-royalty-fr
Resource for some of the code that I use and learn from: 
-	https://hughdeleuzer.notion.site/Front-Page-Coding-for-the-Arts-Spring-Term-2025-181c92fdf1c68004ade8ec279393d0bf
-	https://www.youtube.com/watch?v=r5Iy3v1co0A&t=135s
-	https://editor.p5js.org/kjhollen/sketches/H2RZMer3x

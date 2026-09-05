# 🔎 The Last Notice of Beika Town

> An interactive 2D detective puzzle game built with HTML, CSS and JavaScript.

**The Last Notice of Beika Town** is a browser-based detective puzzle game inspired by the *Detective Conan* universe. Players investigate a mysterious incident at an art gallery by searching for evidence, solving puzzles, and making deductions.

The project focuses on combining **front-end web development, interactive UI design, game logic, multimedia, and responsive design** into a playable browser experience.

---

## 🎮 Project Overview

| | |
|---|---|
| **Game Type** | 2D Puzzle & Deduction Game |
| **Genre** | Mystery / Detective |
| **Platform** | Web Browser |
| **Perspective** | First-person |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | None |
| **Development Cycle** | 3 weeks |
| **Architecture** | Front-end only |

The game is designed to run directly in a modern web browser without requiring a database or backend server.

---

# ✨ Key Features

### 🏠 Interactive Homepage

The homepage serves as the main entry point to the game and introduces the project before the player begins the investigation.

Features include:

- Game introduction
- Navigation buttons
- Character presentation
- Visual effects and animations
- Responsive layout
- Multimedia elements

---

### 🔎 Interactive Investigation

The investigation section allows players to interact with objects within the crime scene.

JavaScript is used to:

- Detect user interaction
- Identify correct investigation locations
- Add evidence to the evidence collection
- Display contextual dialogue
- Track investigation progress
- Handle incorrect interactions

---

### ⏱️ Timed Evidence Search

The first game section contains a **120-second countdown**.

The player must search the scene and collect the required evidence before time runs out.

JavaScript manages:

- Countdown timer
- Evidence count
- Completion state
- Time-based scoring
- Bonus conditions

---

### 🧩 Multi-Stage Puzzle System

The game contains a three-stage safe puzzle.

The stages demonstrate different types of interaction:

1. Numerical combination
2. Colour sequence
3. Number input

Each puzzle validates the player's input before allowing progression.

This provides examples of implementing different puzzle mechanics using JavaScript.

---

### ⚖️ Evidence-Based Deduction

The deduction section uses an interactive evidence-selection system.

Players select evidence from the available evidence bar and use it to challenge character statements.

The system tracks:

- Selected evidence
- Correct answers
- Incorrect answers
- Deduction progress
- Final outcome

---

### 🏆 Scoring & Multiple Endings

The game keeps track of the player's performance throughout the investigation.

The scoring system considers:

- Number of evidence pieces collected
- Time taken to solve the safe
- Number of reasoning errors

The final performance can result in different ratings such as:

**S / A / B / C**

Player performance can also affect the ending.

---

# 💻 Technologies

## HTML

HTML is responsible for the structure of the application.

It is used to create:

- Game screens
- Navigation
- Character sections
- Dialogue containers
- Evidence interfaces
- Puzzle interfaces
- Buttons
- Forms and input elements
- Video and audio elements

Semantic HTML and structured containers are used to separate different sections of the interface.

---

## CSS

CSS is used for the visual presentation and responsive behaviour of the game.

Main responsibilities include:

### Layout

- Flexbox
- Grid
- Positioning
- Containers
- Responsive sizing

### Visual Design

- Typography
- Borders
- Shadows
- Backgrounds
- Cards
- Buttons
- Game panels

### Animation

CSS animations and transitions can be used for:

- Hover effects
- Scene transitions
- Character presentation
- Button interactions
- Visual feedback

### Responsive Design

Media queries are used to adapt the interface for different screen sizes.

The layout is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

# ⚙️ JavaScript

JavaScript provides the main game functionality.

It controls the interactive components and game state.

This allows the game to respond dynamically to player actions.

---

### Evidence System

The evidence system can be represented conceptually as:

```text
Player clicks object
       ↓
Check whether object contains evidence
       ↓
     ┌───────┐
     │       │
    Yes      No
     │       │
     ↓       ↓
Add clue   Show feedback
     │
     ↓
Update evidence counter
```

---

### Timer System

JavaScript controls the investigation countdown.

The timer:

- Starts when the investigation begins
- Decreases every second
- Updates the UI
- Stops when the required evidence is collected
- Triggers the appropriate state when time expires

---

### Puzzle Validation

Each puzzle checks whether the player's input matches the expected solution.

For example:

```javascript
if (playerInput === correctAnswer) {
    // Unlock next stage
} else {
    // Display incorrect feedback
}
```

This approach allows each puzzle to have its own validation logic while still being part of the same game flow.

---

### Deduction System

The deduction system compares the evidence selected by the player against the evidence required for each testimony.

Conceptually:

```text
Select evidence
      ↓
Check evidence ID
      ↓
 ┌──────────────┐
 │ Correct?     │
 └──────────────┘
    ↓        ↓
   Yes       No
    ↓        ↓
Progress   Add mistake
```

---

### Score Calculation

The final score is calculated using several performance factors.

```text
Evidence collected
        +
Puzzle performance
        +
Reasoning accuracy
        ↓
   Final Score
        ↓
   S / A / B / C
```
---

# 🔗 Front-End Architecture

The project follows a simple front-end architecture:

```text
             HTML
              │
              ▼
        Page Structure
              │
       ┌──────┴──────┐
       ▼             ▼
      CSS       JavaScript
       │             │
       ▼             ▼
   UI / Design   Game Logic
                     │
              ┌──────┼──────┐
              ▼      ▼      ▼
           Evidence Puzzle Score
              │      │      │
              └──────┼──────┘
                     ▼
                Game State
                     │
                     ▼
                   Ending
```

---

# 🧠 Game State Management

Because the project does not require a backend, the game state can be maintained using JavaScript variables and browser storage where necessary.

Example:

```javascript
let gameState = {
    currentChapter: 1,
    evidenceCollected: [],
    mistakes: 0,
    score: 0
};
```

This makes it possible to track the player's progress while the game is running.

For persistent progress between sessions, browser storage such as `localStorage` can be used.

---

# 🎬 Multimedia

The game supports multimedia elements to enhance the storytelling experience.

These include:

- Background music
- Sound effects
- Character images
- Background images
- Story videos
- Scene transitions

HTML5 multimedia elements can be used for video and audio.

Example:

```html
<video controls>
    <source src="assets/videos/scene.mp4" type="video/mp4">
</video>
```

```html
<audio controls>
    <source src="assets/audio/bgm.mp3" type="audio/mpeg">
</audio>
```

For browser compatibility and autoplay restrictions, audio should generally be started through a user interaction rather than automatically.

---

# 📱 Responsive Design

Responsive design is an important part of the project because the game interface needs to remain usable on different devices.

The layout adapts through CSS media queries.

Example:

```css
@media (max-width: 768px) {
    .suspect-container {
        grid-template-columns: 1fr;
    }
}
```

The responsive design focuses on:

- Flexible layouts
- Scalable images
- Mobile-friendly buttons
- Readable text
- Appropriate spacing
- Preventing horizontal overflow
- Touch-friendly interaction

---

# 🖱️ User Interaction

The game is designed around simple interactions so that players can focus on solving the mystery.

Common interactions include:

```text
Click / Tap
    ↓
Investigate
    ↓
Receive feedback
    ↓
Update game state
    ↓
Continue
```

Buttons and interactive objects provide visual feedback to make the interface easier to understand.

---

# 🧪 Testing

Testing focuses on both functionality and responsive behaviour.

### Functional Testing

Important areas to test include:

- Navigation buttons
- Evidence collection
- Timer
- Puzzle answers
- Incorrect answers
- Evidence counter
- Deduction system
- Score calculation
- Ending conditions
- Audio and video playback

### Responsive Testing

The interface should be tested at different viewport sizes:

- Desktop
- Tablet
- Mobile

Particular attention should be given to:

- Horizontal scrolling
- Text overflow
- Image scaling
- Button sizes
- Character cards
- Game panels
- Video dimensions

---

# 🚀 How to Run

The project does not require a backend server.

### Method 1 — Open in Browser

Open:

```text
index.html
```

with a modern web browser.

### Method 2 — VS Code

For development, it is recommended to use a local development server such as **Live Server**.

```text
VS Code
   ↓
Open Project
   ↓
Open index.html
   ↓
Start Local Server
   ↓
Open Browser
```

A local server can provide more reliable behaviour for multimedia and browser resource loading.

---

# 🌐 Browser Compatibility

The project is intended for modern browsers supporting:

- HTML5
- CSS3
- JavaScript ES6+
- HTML5 Audio
- HTML5 Video
- CSS Media Queries

Recommended browsers include modern versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# 📌 Development Goals

The project demonstrates practical application of front-end development concepts including:

- HTML structure
- CSS styling
- Responsive web design
- JavaScript programming
- DOM manipulation
- Event handling
- State management
- Conditional logic
- Timers
- User interaction
- Multimedia integration
- Game mechanics
- UI/UX design

---
👥 Team Members

1. Tiffany Lee Sze Thing
2. Ashley Khor Xu Jean
3. Elena Lau Wen Shan
4. Hee Boh Yee
5. Tan Tu Xuan
6. Pham Chi Bao 

---

# 📚 Project Purpose

This project was created to demonstrate how standard web technologies can be used to build an interactive game without relying on a dedicated game engine or backend.

Instead of using a traditional game-development framework, the project uses:

```text
HTML
+
CSS
+
JavaScript
```

to implement the complete front-end experience.

This makes the project lightweight, accessible, and easy to run in a browser.

---

# ⚠️ Disclaimer

**The Last Notice of Beika Town** is a fan-made project inspired by the *Detective Conan* franchise.

This project is created for educational and project-development purposes and is not an official *Detective Conan* product.

---

# 🔮 Future Improvements

Potential future improvements include:

- More investigation locations
- Additional puzzles
- More interactive animations
- Improved sound design
- Expanded scoring mechanics
- Additional endings
- Persistent player progress
- More detailed accessibility support
- Improved mobile controls
- More advanced game-state management

---

## 🔎 Project Summary

**The Last Notice of Beika Town** demonstrates how a complete interactive detective experience can be built using standard web technologies.

The project combines:

```text
HTML
  ↓
Structure

CSS
  ↓
Design + Responsive Layout

JavaScript
  ↓
Interaction + Game Logic

Multimedia
  ↓
Immersion

Game State
  ↓
Progress + Scoring

          ↓

Interactive Browser Game
```

The result is a lightweight, browser-based detective game that combines **storytelling, puzzle solving, UI/UX and front-end programming** in one project.
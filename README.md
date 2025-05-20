# Pop Up Trivia

A single‑player, timed trivia web game featuring multiple categories and score tracking. Answer 10 questions per round, race against a 30‑second timer per question, and see your final score out of 10.

---

## Features

* **Category Selection**: Choose from Harry Potter, Human Body, Middle School Literature, Star Wars, or 5th Grade Science.
* **Timed Questions**: 30‑second countdown per question with a visual timer bar.
* **Score Tracking**: Correct answers increase your score; final score displayed at the end.
* **Responsive UI**: Built with Bulma CSS for a clean, mobile‑friendly interface.
* **Restart Capability**: Replay immediately after finishing a round.

---

## Tech Stack

* **HTML5**: Structure and landing page.
* **CSS3 & Bulma**: Layout, components, and responsive styling.
* **JavaScript (ES6+)**: Game logic, timer, question shuffling, and score handling.
* **LocalStorage**: Persists selected category between pages.

---

## File Structure

```txt
/ (root)
├── index.html       # Landing page with category select & game instructions
├── landing.css      # Custom styles and Bulma overrides
├── landing.js       # Quiz logic, timer, and UI updates
└── assets/          # (Optional) Images or fonts if added
```

---

## Setup & Running

1. **Download or clone** this repository.
2. **Serve** the files via any static server (e.g., VSCode Live Server, `npx http-server`, or open `index.html` directly in your browser).
3. **Select** a category from the dropdown and click **Start Game**.
4. Answer each question before the timer runs out.
5. At the end, view your score and click **Restart** to play again.

---

## Customization

* **Add/Modify Questions**: In `landing.js`, update the `questions` object—each category array contains question objects with `question`, `answers` (array of 4), and `correctAnswerIndex`.
* **Change Timer**: In `landing.js`, adjust the `timeLeft` value in `startTimer()` for a different countdown duration.
* **Styling**: Tweak `landing.css` or override Bulma classes for custom look and feel.

---

## Contributing

1. Fork the repo.
2. Create a feature branch (e.g., `feature/new-category`).
3. Commit your changes (`git commit -m "Add new category"`).
4. Push to your fork and open a Pull Request.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## Authors

Game developed by Aaron, Mahdi, Jason, & Scott. Feel free to reach out with feedback or questions!

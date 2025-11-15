# Dynamic Quiz Application

A fully functional quiz application built with PHP, HTML, CSS, and JavaScript featuring category selection, difficulty levels, countdown timer, and comprehensive result analysis.

## Features

### Core Functionality
- **Category Selection**: Choose from 6 different categories (General Knowledge, Science, History, Technology, Sports, Geography)
- **Difficulty Levels**: Three difficulty levels (Easy, Medium, Hard) for each category
- **Countdown Timer**: 30-second timer per question with visual warnings
- **Question Navigation**: Navigate between questions with Previous/Next buttons
- **Auto-Submit**: Timer automatically advances to next question or submits when time runs out

### Result Analysis
- **Score Calculation**: Percentage-based scoring system
- **Detailed Breakdown**: Shows correct/incorrect answers count and total time spent
- **Visual Charts**: 
  - Doughnut chart for answer distribution (Correct vs Incorrect)
  - Bar chart showing time spent per question
- **Question Analysis**: Detailed review of each question with:
  - Your answer vs correct answer
  - Time spent per question
  - Visual indicators for correct/incorrect answers

### Design Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Timer Warnings**: Color-coded timer (normal → warning → danger) as time runs out

## File Structure

```
TravelWeb/
├── index.html          # Main HTML structure (can be used directly)
├── index.php           # PHP version of the application
├── questions.js        # Questions database organized by category and difficulty
├── script.js           # Main JavaScript logic (quiz functionality, timer, results)
├── styles.css          # Responsive CSS styling
└── README.md           # This file
```

## How to Use

### Option 1: Using HTML (Simple)
1. Open `index.html` directly in a web browser
2. Select your preferred category and difficulty
3. Click "Start Quiz"
4. Answer questions within the time limit
5. View your results and analysis

### Option 2: Using PHP (Recommended for Server)
1. Place all files in your web server directory
2. Access via `http://localhost/TravelWeb/index.php` (or your server URL)
3. Follow the same steps as Option 1

## Technical Details

### Technologies Used
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Quiz logic, timer, and result calculations
- **Chart.js**: For data visualization (loaded via CDN)
- **PHP**: Server-side structure (optional)

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

### Key JavaScript Functions
- `startQuiz()`: Initializes quiz with selected category and difficulty
- `loadQuestion(index)`: Displays question and starts timer
- `startTimer()`: Countdown timer with auto-advance
- `calculateResults()`: Processes answers and calculates scores
- `displayResults()`: Shows results with charts and analysis
- `displayCharts()`: Creates visual charts using Chart.js

## Quiz Data

The application includes:
- **6 Categories**: General, Science, History, Technology, Sports, Geography
- **3 Difficulty Levels**: Easy, Medium, Hard
- **5-10 Questions per category/difficulty**: Varies by category
- **Multiple Choice Format**: 4 options per question

## Customization

### Adding More Questions
Edit `questions.js` and add questions to the appropriate category and difficulty:
```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

### Changing Timer Duration
In `script.js`, modify the `timerDuration` property:
```javascript
timerDuration: 30  // Change to desired seconds
```

### Styling
All styles are in `styles.css`. Modify colors, fonts, and layouts as needed.

## Testing with Selenium

This application is designed to be testable with Selenium WebDriver. Key elements have IDs for easy automation:

- `startQuizBtn`: Start quiz button
- `categorySelect`: Category dropdown
- `difficultySelect`: Difficulty dropdown
- `optionsContainer`: Answer options container
- `nextBtn`: Next question button
- `submitBtn`: Submit quiz button
- `resultsPage`: Results page container

### Test Scenarios
1. **Landing Page Verification**: Check URL and title
2. **Start Quiz**: Click start button and verify first question
3. **Answer Selection**: Select answers for each question
4. **Navigation**: Use Previous/Next buttons
5. **Submit**: Submit quiz and verify results page
6. **Result Analysis**: Verify score, charts, and detailed breakdown

## Notes

- No backend database required - all data stored in JavaScript
- No server-side processing needed for basic functionality
- Chart.js loaded via CDN (requires internet connection)
- All quiz state managed in JavaScript variables
- Timer automatically handles question transitions

## License

This project is open source and available for educational purposes.


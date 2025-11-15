# Quiz Application - Selenium Test Automation

This directory contains the complete Selenium test automation framework for the Dynamic Quiz Application.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Test Structure](#test-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Test Scenarios](#test-scenarios)
- [Screenshots and Logs](#screenshots-and-logs)
- [GitHub Repository Setup](#github-repository-setup)
- [Screen Recording Guide](#screen-recording-guide)

## 🎯 Overview

This automation framework provides comprehensive test coverage for the Quiz Application, including:

- Landing page verification
- Category and difficulty selection
- Quiz flow testing
- Answer selection and navigation
- Timer functionality
- Results page validation
- Complete end-to-end workflows

## 📦 Prerequisites

Before running the tests, ensure you have:

1. **Python 3.8 or higher** installed
   ```bash
   python --version
   ```

2. **Chrome Browser** installed (latest version recommended)

3. **ChromeDriver** - Will be automatically managed, but you can install manually:
   - Download from: https://chromedriver.chromium.org/
   - Or use webdriver-manager (included in requirements)

## 🔧 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Quizzer
   ```

2. **Install required Python packages**
   ```bash
   pip install -r requirements.txt
   ```

3. **Verify installation**
   ```bash
   pytest --version
   ```

## 📁 Test Structure

```
Quizzer/
├── tests/
│   ├── __init__.py
│   ├── base_test.py          # Base test class with common utilities
│   ├── test_quiz_automation.py  # Main test suite
│   └── conftest.py           # Pytest configuration
├── screenshots/              # Test execution screenshots (auto-generated)
├── logs/                     # Test execution logs (auto-generated)
├── reports/                  # HTML test reports (auto-generated)
├── requirements.txt          # Python dependencies
├── run_tests.py             # Test runner script
└── AUTOMATION_README.md     # This file
```

## 🚀 Running Tests

### Option 1: Run all tests using the test runner
```bash
python run_tests.py
```

### Option 2: Run tests using pytest directly
```bash
pytest tests/test_quiz_automation.py -v
```

### Option 3: Run a specific test
```bash
pytest tests/test_quiz_automation.py::TestQuizAutomation::test_landing_page_verification -v
```

### Option 4: Run tests with HTML report
```bash
pytest tests/test_quiz_automation.py -v --html=reports/test_report.html --self-contained-html
```

## 📊 Test Reports

After test execution, HTML reports are generated in the `reports/` directory with:

- Test execution summary
- Pass/fail status for each test
- Execution time
- Error messages and stack traces
- Screenshots (if configured)

View the report by opening the HTML file in a web browser.

## 🧪 Test Scenarios

The test suite includes the following test cases:

1. **Landing Page Verification**
   - Verifies page title, landing page display, category grid, and initial button states

2. **Category Selection**
   - Tests category selection functionality and UI updates

3. **Difficulty Selection**
   - Tests difficulty selection and start button activation

4. **Start Quiz**
   - Verifies quiz initialization and question display

5. **Answer Selection**
   - Tests answer option selection and visual feedback

6. **Question Navigation**
   - Tests Next/Previous button functionality

7. **Progress Bar**
   - Verifies progress bar updates during quiz

8. **Timer Functionality**
   - Tests countdown timer and auto-advance

9. **Complete Quiz Flow**
   - End-to-end test from start to results page

10. **Multiple Categories**
    - Tests quiz with different categories

11. **Restart Quiz**
    - Tests restart functionality from results page

## 📸 Screenshots and Logs

- **Screenshots**: Automatically captured during test execution and saved in `screenshots/` directory
- **Logs**: Test execution logs saved as JSON files in `logs/` directory

Each screenshot and log file is timestamped for easy identification.

## 🔗 GitHub Repository Setup

### 1. Initialize Git Repository (if not already done)
```bash
git init
```

### 2. Create .gitignore file
Create a `.gitignore` file with:
```
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
screenshots/
logs/
reports/
*.html
.env
.venv
venv/
```

### 3. Add files to Git
```bash
git add .
git commit -m "Add Selenium test automation framework"
```

### 4. Create GitHub Repository
1. Go to GitHub.com
2. Click "New repository"
3. Name it (e.g., "quiz-automation")
4. Don't initialize with README (we already have one)

### 5. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/quiz-automation.git
git branch -M main
git push -u origin main
```

### 6. Share Repository Link
Your repository will be available at:
```
https://github.com/raagsss/Quizzer
```

## 🎥 Screen Recording Guide

To create a screen recording of the automated test process:

### Windows:
1. **Using Xbox Game Bar** (Built-in):
   - Press `Win + G` to open Game Bar
   - Click the record button or press `Win + Alt + R`
   - Run your tests
   - Stop recording with `Win + Alt + R`

2. **Using OBS Studio** (Free):
   - Download from: https://obsproject.com/
   - Set up a screen capture source
   - Start recording
   - Run tests
   - Stop recording

3. **Using ShareX** (Free):
   - Download from: https://getsharex.com/
   - Configure screen recording
   - Record test execution

### Steps for Recording:
1. Open your screen recording software
2. Start recording
3. Open terminal/command prompt
4. Navigate to project directory
5. Run: `python run_tests.py`
6. Let tests complete
7. Stop recording
8. Upload to Google Drive
9. Share the link

### Upload to Google Drive:
1. Go to https://drive.google.com
2. Click "New" → "File upload"
3. Select your screen recording
4. Right-click the file → "Get link"
5. Set permissions to "Anyone with the link"
6. Copy and share the link

## 📝 Test Report Template

A sample test report structure:

```markdown
# Test Execution Report

## Test Information
- **Date**: [Date]
- **Time**: [Time]
- **Test Suite**: Quiz Application Automation
- **Total Tests**: 11
- **Passed**: [Number]
- **Failed**: [Number]
- **Duration**: [Time]

## Test Results

### Test 1: Landing Page Verification
- **Status**: PASS
- **Duration**: [Time]
- **Screenshot**: screenshots/landing_page_[timestamp].png

### Test 2: Category Selection
- **Status**: PASS
- **Duration**: [Time]
- **Screenshot**: screenshots/category_selected_[timestamp].png

[... continue for all tests ...]

## Summary
- All critical functionalities tested
- Screenshots captured for verification
- Logs available for debugging
```

## 🐛 Troubleshooting

### ChromeDriver Issues
If you encounter ChromeDriver errors:
```bash
pip install --upgrade webdriver-manager
```

### Element Not Found Errors
- Ensure `index.html` is in the project root
- Check that the application is working manually first
- Verify element IDs match the HTML file

### Import Errors
```bash
pip install -r requirements.txt --upgrade
```

## 📧 Support

For issues or questions:
1. Check the test logs in `logs/` directory
2. Review screenshots in `screenshots/` directory
3. Check the HTML test report for detailed error messages

## 📄 License

This automation framework is part of the Quiz Application project and follows the same license terms.



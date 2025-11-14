// Quiz Application State
let currentQuiz = {
    category: '',
    difficulty: '',
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    timeSpent: [],
    questionStartTime: null,
    timerInterval: null,
    timerDuration: 30
};

// DOM Elements
const landingPage = document.getElementById('landingPage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');
const startQuizBtn = document.getElementById('startQuizBtn');
const categorySelect = document.getElementById('categorySelect');
const difficultySelect = document.getElementById('difficultySelect');
const categoryBadge = document.getElementById('categoryBadge');
const difficultyBadge = document.getElementById('difficultyBadge');
const timer = document.getElementById('timer');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressFill = document.getElementById('progressFill');
const restartBtn = document.getElementById('restartBtn');

// Initialize Quiz
function initQuiz() {
    startQuizBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    
    // Initialize landing page interactions
    initLandingPage();
}

// Initialize Landing Page Interactions
function initLandingPage() {
    // Category card selection
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove previous selection
            categoryCards.forEach(c => c.classList.remove('selected'));
            // Add selection to clicked card
            card.classList.add('selected');
            // Update hidden select
            const category = card.getAttribute('data-category');
            categorySelect.value = category;
            // Update selected info display
            updateSelectedInfo();
        });
    });
    
    // Difficulty card selection
    const difficultyCards = document.querySelectorAll('.difficulty-card');
    difficultyCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove previous selection
            difficultyCards.forEach(c => {
                c.classList.remove('selected');
                c.classList.remove('easy', 'medium', 'hard');
            });
            // Add selection to clicked card
            const difficulty = card.getAttribute('data-difficulty');
            card.classList.add('selected', difficulty);
            // Update hidden select
            difficultySelect.value = difficulty;
            // Update selected info display
            updateSelectedInfo();
        });
    });
    
    // Initialize selected info display
    updateSelectedInfo();
}

// Update Selected Info Display
function updateSelectedInfo() {
    const selectedCategory = categorySelect.value;
    const selectedDifficulty = difficultySelect.value;
    
    const categoryNames = {
        'general': 'General Knowledge',
        'science': 'Science',
        'history': 'History',
        'technology': 'Technology',
        'sports': 'Sports',
        'geography': 'Geography'
    };
    
    const categoryElement = document.getElementById('selectedCategory');
    const difficultyElement = document.getElementById('selectedDifficulty');
    
    if (categoryElement) {
        categoryElement.textContent = selectedCategory && categoryNames[selectedCategory] ? categoryNames[selectedCategory] : 'Not selected';
    }
    if (difficultyElement) {
        difficultyElement.textContent = selectedDifficulty ? selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1) : 'Not selected';
    }
    
    // Enable/disable start button based on selections
    if (startQuizBtn) {
        if (selectedCategory && selectedDifficulty) {
            startQuizBtn.disabled = false;
            startQuizBtn.style.opacity = '1';
            startQuizBtn.style.cursor = 'pointer';
        } else {
            startQuizBtn.disabled = true;
            startQuizBtn.style.opacity = '0.6';
            startQuizBtn.style.cursor = 'not-allowed';
        }
    }
}

// Start Quiz
function startQuiz() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    
    // Validate selections
    if (!category || !difficulty) {
        alert('Please select both a category and difficulty level before starting the quiz.');
        return;
    }
    
    if (!questionsDatabase[category] || !questionsDatabase[category][difficulty]) {
        alert('Questions not available for this category and difficulty combination.');
        return;
    }
    
    // Initialize quiz state
    currentQuiz.category = category;
    currentQuiz.difficulty = difficulty;
    currentQuiz.questions = [...questionsDatabase[category][difficulty]];
    currentQuiz.currentQuestionIndex = 0;
    currentQuiz.answers = new Array(currentQuiz.questions.length).fill(null);
    currentQuiz.timeSpent = new Array(currentQuiz.questions.length).fill(0);
    
    // Show quiz page
    landingPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    resultsPage.classList.add('hidden');
    
    // Update badges
    categoryBadge.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    difficultyBadge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    difficultyBadge.className = `difficulty-badge ${difficulty}`;
    
    // Load first question
    loadQuestion(0);
}

// Load Question
function loadQuestion(index) {
    if (index < 0 || index >= currentQuiz.questions.length) return;
    
    // Save time spent on previous question
    if (currentQuiz.questionStartTime !== null && currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
        const timeSpent = Math.floor((Date.now() - currentQuiz.questionStartTime) / 1000);
        currentQuiz.timeSpent[currentQuiz.currentQuestionIndex] = timeSpent;
    }
    
    currentQuiz.currentQuestionIndex = index;
    const question = currentQuiz.questions[index];
    
    // Update question display
    questionNumber.textContent = `Question ${index + 1} of ${currentQuiz.questions.length}`;
    questionText.textContent = question.question;
    
    // Update progress bar
    const progress = ((index + 1) / currentQuiz.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Clear and populate options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (currentQuiz.answers[index] === optionIndex) {
            optionDiv.classList.add('selected');
        }
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectAnswer(optionIndex));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    prevBtn.disabled = index === 0;
    if (index === currentQuiz.questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
    
    // Start timer
    startTimer();
    
    // Record question start time
    currentQuiz.questionStartTime = Date.now();
}

// Select Answer
function selectAnswer(optionIndex) {
    const currentIndex = currentQuiz.currentQuestionIndex;
    currentQuiz.answers[currentIndex] = optionIndex;
    
    // Update UI
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Start Timer
function startTimer() {
    // Clear existing timer
    if (currentQuiz.timerInterval) {
        clearInterval(currentQuiz.timerInterval);
    }
    
    let timeLeft = currentQuiz.timerDuration;
    timer.textContent = timeLeft;
    timer.className = 'timer';
    
    currentQuiz.timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        
        // Change color as time runs out
        if (timeLeft <= 10) {
            timer.classList.add('warning');
        }
        if (timeLeft <= 5) {
            timer.classList.add('danger');
        }
        
        if (timeLeft <= 0) {
            clearInterval(currentQuiz.timerInterval);
            // Auto-advance to next question or submit
            if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
                goToNextQuestion();
            } else {
                submitQuiz();
            }
        }
    }, 1000);
}

// Go to Previous Question
function goToPreviousQuestion() {
    if (currentQuiz.currentQuestionIndex > 0) {
        loadQuestion(currentQuiz.currentQuestionIndex - 1);
    }
}

// Go to Next Question
function goToNextQuestion() {
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
        loadQuestion(currentQuiz.currentQuestionIndex + 1);
    }
}

// Submit Quiz
function submitQuiz() {
    // Save time for current question
    if (currentQuiz.questionStartTime !== null) {
        const timeSpent = Math.floor((Date.now() - currentQuiz.questionStartTime) / 1000);
        currentQuiz.timeSpent[currentQuiz.currentQuestionIndex] = timeSpent;
    }
    
    // Clear timer
    if (currentQuiz.timerInterval) {
        clearInterval(currentQuiz.timerInterval);
    }
    
    // Calculate results
    const results = calculateResults();
    
    // Show results page
    quizPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    
    // Display results
    displayResults(results);
}

// Calculate Results
function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    const questionResults = [];
    let totalTime = 0;
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.answers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        const timeSpent = currentQuiz.timeSpent[index] || 0;
        totalTime += timeSpent;
        
        if (isCorrect) {
            correct++;
        } else {
            incorrect++;
        }
        
        questionResults.push({
            question: question.question,
            userAnswer: userAnswer !== null ? question.options[userAnswer] : 'Not answered',
            correctAnswer: question.options[correctAnswer],
            isCorrect: isCorrect,
            timeSpent: timeSpent,
            options: question.options
        });
    });
    
    const totalQuestions = currentQuiz.questions.length;
    const score = Math.round((correct / totalQuestions) * 100);
    
    return {
        correct,
        incorrect,
        totalQuestions,
        score,
        totalTime,
        questionResults
    };
}

// Display Results
function displayResults(results) {
    // Update summary
    document.getElementById('scoreValue').textContent = results.score;
    document.getElementById('correctCount').textContent = results.correct;
    document.getElementById('incorrectCount').textContent = results.incorrect;
    document.getElementById('totalTime').textContent = `${results.totalTime}s`;
    
    // Display charts
    displayCharts(results);
    
    // Display detailed question analysis
    displayQuestionAnalysis(results.questionResults);
}

// Display Charts
function displayCharts(results) {
    // Answer Distribution Chart (Pie Chart)
    const answerCtx = document.getElementById('answerChart').getContext('2d');
    new Chart(answerCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [results.correct, results.incorrect],
                backgroundColor: ['#4CAF50', '#F44336'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Time Spent per Question Chart (Bar Chart)
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    const questionLabels = results.questionResults.map((_, index) => `Q${index + 1}`);
    const timeData = results.questionResults.map(q => q.timeSpent);
    
    new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: questionLabels,
            datasets: [{
                label: 'Time Spent (seconds)',
                data: timeData,
                backgroundColor: '#2196F3',
                borderColor: '#1976D2',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Seconds'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Questions'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Display Question Analysis
function displayQuestionAnalysis(questionResults) {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    questionResults.forEach((result, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = `question-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
        
        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-index">Question ${index + 1}</span>
                <span class="question-status ${result.isCorrect ? 'correct' : 'incorrect'}">
                    ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
                <span class="question-time">⏱ ${result.timeSpent}s</span>
            </div>
            <div class="question-body">
                <div class="question-text">${result.question}</div>
                <div class="answer-comparison">
                    <div class="answer-item ${result.isCorrect ? 'correct' : ''}">
                        <strong>Your Answer:</strong> ${result.userAnswer}
                    </div>
                    ${!result.isCorrect ? `
                        <div class="answer-item correct">
                            <strong>Correct Answer:</strong> ${result.correctAnswer}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        questionsList.appendChild(questionDiv);
    });
}

// Restart Quiz
function restartQuiz() {
    // Reset state
    currentQuiz = {
        category: '',
        difficulty: '',
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
        timeSpent: [],
        questionStartTime: null,
        timerInterval: null,
        timerDuration: 30
    };
    
    // Show landing page
    resultsPage.classList.add('hidden');
    quizPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    
    // Clear charts if they exist
    const answerChart = document.getElementById('answerChart');
    const timeChart = document.getElementById('timeChart');
    if (answerChart) {
        const answerCtx = answerChart.getContext('2d');
        if (window.answerChartInstance) {
            window.answerChartInstance.destroy();
        }
    }
    if (timeChart) {
        const timeCtx = timeChart.getContext('2d');
        if (window.timeChartInstance) {
            window.timeChartInstance.destroy();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);


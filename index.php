<?php

// Set content type and charset
header('Content-Type: text/html; charset=UTF-8');

// Enable error reporting for development (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start session if needed for future features
// session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dynamic Quiz Application with Timer and Result Analysis">
    <meta name="keywords" content="quiz, test, knowledge, timer, results">
    <title>Dynamic Quiz Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="landing-page" id="landingPage">
            <div class="landing-content">
                <!-- Hero Section -->
                <div class="hero-section">
                    <div class="hero-icon">🎯</div>
                    <h1>Dynamic Quiz Application</h1>
                    <p class="subtitle">Challenge yourself with our interactive quiz platform. Test your knowledge across multiple categories and difficulty levels!</p>
                </div>

                <!-- Features Section -->
                <div class="features-section">
                    <div class="feature-card">
                        <div class="feature-icon">⏱️</div>
                        <h3>Timer Based</h3>
                        <p>30 seconds per question</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Detailed Analysis</h3>
                        <p>Comprehensive results</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎨</div>
                        <h3>Multiple Categories</h3>
                        <p>6 different topics</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Performance Charts</h3>
                        <p>Visual insights</p>
                    </div>
                </div>

                <!-- Category Selection -->
                <div class="selection-section">
                    <h2 class="section-title">Choose Your Category</h2>
                    <div class="category-grid" id="categoryGrid">
                        <div class="category-card" data-category="general">
                            <div class="category-icon">🌍</div>
                            <h3>General Knowledge</h3>
                            <p>Test your general awareness</p>
                        </div>
                        <div class="category-card" data-category="science">
                            <div class="category-icon">🔬</div>
                            <h3>Science</h3>
                            <p>Explore scientific facts</p>
                        </div>
                        <div class="category-card" data-category="history">
                            <div class="category-icon">📜</div>
                            <h3>History</h3>
                            <p>Journey through time</p>
                        </div>
                        <div class="category-card" data-category="technology">
                            <div class="category-icon">💻</div>
                            <h3>Technology</h3>
                            <p>Tech and programming</p>
                        </div>
                        <div class="category-card" data-category="sports">
                            <div class="category-icon">⚽</div>
                            <h3>Sports</h3>
                            <p>Athletic knowledge</p>
                        </div>
                        <div class="category-card" data-category="geography">
                            <div class="category-icon">🗺️</div>
                            <h3>Geography</h3>
                            <p>World and places</p>
                        </div>
                    </div>
                    
                    <!-- Hidden select for compatibility -->
                    <select id="categorySelect" class="select-box hidden">
                        <option value="">-- Select Category --</option>
                        <option value="general">General Knowledge</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="geography">Geography</option>
                    </select>
                </div>

                <!-- Difficulty Selection -->
                <div class="selection-section">
                    <h2 class="section-title">Select Difficulty Level</h2>
                    <div class="difficulty-grid">
                        <div class="difficulty-card" data-difficulty="easy">
                            <div class="difficulty-icon easy">🟢</div>
                            <h3>Easy</h3>
                            <p>Perfect for beginners</p>
                            <div class="difficulty-stars">
                                <span>⭐</span>
                            </div>
                        </div>
                        <div class="difficulty-card" data-difficulty="medium">
                            <div class="difficulty-icon medium">🟡</div>
                            <h3>Medium</h3>
                            <p>Moderate challenge</p>
                            <div class="difficulty-stars">
                                <span>⭐⭐</span>
                            </div>
                        </div>
                        <div class="difficulty-card" data-difficulty="hard">
                            <div class="difficulty-icon hard">🔴</div>
                            <h3>Hard</h3>
                            <p>Expert level questions</p>
                            <div class="difficulty-stars">
                                <span>⭐⭐⭐</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Hidden select for compatibility -->
                    <select id="difficultySelect" class="select-box hidden">
                        <option value="">-- Select Difficulty --</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <!-- Selected Info Display -->
                <div class="selected-info" id="selectedInfo">
                    <div class="info-item">
                        <span class="info-label">Category:</span>
                        <span class="info-value" id="selectedCategory">Not selected</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Difficulty:</span>
                        <span class="info-value" id="selectedDifficulty">Not selected</span>
                    </div>
                </div>
                
                <!-- Start Button -->
                <button class="btn btn-primary btn-large" id="startQuizBtn" disabled>
                    <span class="btn-icon">🚀</span>
                    <span>Start Quiz</span>
                </button>

                <!-- Quick Stats -->
                <div class="quick-stats">
                    <div class="stat-item">
                        <div class="stat-number">6</div>
                        <div class="stat-label">Categories</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Difficulty Levels</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">30s</div>
                        <div class="stat-label">Per Question</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="quiz-page hidden" id="quizPage">
            <div class="quiz-header">
                <div class="quiz-info">
                    <span class="category-badge" id="categoryBadge"></span>
                    <span class="difficulty-badge" id="difficultyBadge"></span>
                </div>
                <div class="timer-container">
                    <div class="timer" id="timer">30</div>
                    <span class="timer-label">seconds</span>
                </div>
            </div>
            
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            
            <div class="question-container">
                <div class="question-number" id="questionNumber">Question 1 of 10</div>
                <div class="question-text" id="questionText"></div>
                <div class="options-container" id="optionsContainer"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="prevBtn" disabled>Previous</button>
                <button class="btn btn-primary" id="nextBtn">Next</button>
                <button class="btn btn-success hidden" id="submitBtn">Submit Quiz</button>
            </div>
        </div>
        
        <div class="results-page hidden" id="resultsPage">
            <div class="results-header">
                <h2>Quiz Results</h2>
                <div class="score-display">
                    <div class="score-circle">
                        <span class="score-value" id="scoreValue">0</span>
                        <span class="score-label">%</span>
                    </div>
                </div>
            </div>
            
            <div class="results-summary">
                <div class="summary-card correct">
                    <div class="summary-icon">✓</div>
                    <div class="summary-content">
                        <div class="summary-label">Correct</div>
                        <div class="summary-value" id="correctCount">0</div>
                    </div>
                </div>
                <div class="summary-card incorrect">
                    <div class="summary-icon">✗</div>
                    <div class="summary-content">
                        <div class="summary-label">Incorrect</div>
                        <div class="summary-value" id="incorrectCount">0</div>
                    </div>
                </div>
                <div class="summary-card time">
                    <div class="summary-icon">⏱</div>
                    <div class="summary-content">
                        <div class="summary-label">Total Time</div>
                        <div class="summary-value" id="totalTime">0s</div>
                    </div>
                </div>
            </div>
            
            <div class="charts-container">
                <div class="chart-card">
                    <h3>Answer Distribution</h3>
                    <canvas id="answerChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>Time Spent per Question</h3>
                    <canvas id="timeChart"></canvas>
                </div>
            </div>
            
            <div class="detailed-results">
                <h3>Question Analysis</h3>
                <div class="questions-list" id="questionsList"></div>
            </div>
            
            <button class="btn btn-primary" id="restartBtn">Take Another Quiz</button>
        </div>
    </div>
    
    <!-- JavaScript Files -->
    <script src="questions.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>


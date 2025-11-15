"""
Base Test Class for Quiz Application Automation
Provides common setup, teardown, and utility methods
"""
import os
import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import json


class BaseTest:
    """Base test class with common functionality"""
    
    def setup_method(self, method):
        """Setup method called before each test"""
        # Initialize instance variables
        self.driver = None
        self.wait = None
        self.screenshots_dir = "screenshots"
        self.logs_dir = "logs"
        self.test_results = []
        
        # Create directories if they don't exist
        os.makedirs(self.screenshots_dir, exist_ok=True)
        os.makedirs(self.logs_dir, exist_ok=True)
        
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # Initialize WebDriver
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 30)
        
        # Get the base URL
        base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        file_path = os.path.join(base_path, 'index.html')
        self.driver.get(f"file:///{file_path}")
        
        # Wait for page to load
        self.wait_for_element(By.ID, "landingPage")
        
    def teardown_method(self, method):
        """Teardown method called after each test"""
        if self.driver:
            self.driver.quit()
    
    def wait_for_element(self, by, value, timeout=30):
        """Wait for element to be present"""
        try:
            wait = WebDriverWait(self.driver, timeout)
            element = wait.until(EC.presence_of_element_located((by, value)))
            return element
        except TimeoutException:
            self.take_screenshot(f"timeout_{value}")
            raise
    
    def wait_for_clickable(self, by, value, timeout=30):
        """Wait for element to be clickable"""
        try:
            wait = WebDriverWait(self.driver, timeout)
            element = wait.until(EC.element_to_be_clickable((by, value)))
            return element
        except TimeoutException:
            self.take_screenshot(f"timeout_clickable_{value}")
            raise
    
    def take_screenshot(self, name):
        """Take a screenshot"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{self.screenshots_dir}/{name}_{timestamp}.png"
        self.driver.save_screenshot(filename)
        return filename
    
    def log_step(self, step_description, status="INFO"):
        """Log a test step"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = {
            "timestamp": timestamp,
            "step": step_description,
            "status": status
        }
        self.test_results.append(log_entry)
        print(f"[{timestamp}] [{status}] {step_description}")
    
    def select_category(self, category):
        """Select a category by clicking the category card"""
        category_map = {
            "general": "General Knowledge",
            "science": "Science",
            "history": "History",
            "technology": "Technology",
            "sports": "Sports",
            "geography": "Geography"
        }
        
        # Try clicking the category card first
        try:
            category_card = self.wait_for_clickable(
                By.CSS_SELECTOR, 
                f".category-card[data-category='{category}']"
            )
            category_card.click()
            self.log_step(f"Selected category: {category_map.get(category, category)}")
            time.sleep(0.5)
        except:
            # Fallback to select dropdown
            select = self.wait_for_element(By.ID, "categorySelect")
            from selenium.webdriver.support.ui import Select
            select_dropdown = Select(select)
            select_dropdown.select_by_value(category)
            self.log_step(f"Selected category via dropdown: {category_map.get(category, category)}")
    
    def select_difficulty(self, difficulty):
        """Select a difficulty level"""
        # Try clicking the difficulty card first
        try:
            difficulty_card = self.wait_for_clickable(
                By.CSS_SELECTOR,
                f".difficulty-card[data-difficulty='{difficulty}']"
            )
            difficulty_card.click()
            self.log_step(f"Selected difficulty: {difficulty.capitalize()}")
            time.sleep(0.5)
        except:
            # Fallback to select dropdown
            select = self.wait_for_element(By.ID, "difficultySelect")
            from selenium.webdriver.support.ui import Select
            select_dropdown = Select(select)
            select_dropdown.select_by_value(difficulty)
            self.log_step(f"Selected difficulty via dropdown: {difficulty.capitalize()}")
    
    def start_quiz(self):
        """Click the start quiz button"""
        start_btn = self.wait_for_clickable(By.ID, "startQuizBtn")
        start_btn.click()
        self.log_step("Clicked Start Quiz button")
        time.sleep(1)
    
    def answer_question(self, option_index=0):
        """Answer a question by selecting an option"""
        options = self.driver.find_elements(By.CSS_SELECTOR, "#optionsContainer .option")
        if options and option_index < len(options):
            options[option_index].click()
            self.log_step(f"Selected option {option_index + 1}")
            time.sleep(0.5)
            return True
        return False
    
    def go_to_next_question(self):
        """Click the next button"""
        next_btn = self.wait_for_clickable(By.ID, "nextBtn")
        next_btn.click()
        self.log_step("Clicked Next button")
        time.sleep(1)
    
    def go_to_previous_question(self):
        """Click the previous button"""
        prev_btn = self.wait_for_clickable(By.ID, "prevBtn")
        prev_btn.click()
        self.log_step("Clicked Previous button")
        time.sleep(1)
    
    def submit_quiz(self):
        """Submit the quiz"""
        submit_btn = self.wait_for_clickable(By.ID, "submitBtn")
        submit_btn.click()
        self.log_step("Submitted quiz")
        time.sleep(2)
    
    def get_quiz_results(self):
        """Extract quiz results"""
        results = {}
        try:
            results['score'] = self.driver.find_element(By.ID, "scoreValue").text
            results['correct'] = self.driver.find_element(By.ID, "correctCount").text
            results['incorrect'] = self.driver.find_element(By.ID, "incorrectCount").text
            results['total_time'] = self.driver.find_element(By.ID, "totalTime").text
            self.log_step("Extracted quiz results")
        except Exception as e:
            self.log_step(f"Error extracting results: {str(e)}", "ERROR")
        return results
    
    def save_test_log(self, test_name):
        """Save test log to file"""
        log_file = f"{self.logs_dir}/{test_name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(log_file, 'w') as f:
            json.dump(self.test_results, f, indent=2)
        return log_file


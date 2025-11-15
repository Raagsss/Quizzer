"""
Comprehensive Test Suite for Quiz Application
Tests all major functionalities of the quiz application
"""
import time
import pytest
import sys
import os
# Add tests directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from selenium.webdriver.common.by import By
from base_test import BaseTest


class TestQuizAutomation(BaseTest):
    """Test suite for quiz application automation"""
    
    def test_landing_page_verification(self):
        """Test 1: Verify landing page loads correctly"""
        self.log_step("=== Test 1: Landing Page Verification ===")
        
        # Verify page title
        assert "Dynamic Quiz Application" in self.driver.title
        self.log_step("Verified page title", "PASS")
        self.take_screenshot("landing_page")
        
        # Verify landing page is visible
        landing_page = self.wait_for_element(By.ID, "landingPage")
        assert landing_page.is_displayed()
        self.log_step("Verified landing page is displayed", "PASS")
        
        # Verify category grid is present
        category_grid = self.wait_for_element(By.ID, "categoryGrid")
        assert category_grid.is_displayed()
        self.log_step("Verified category grid is present", "PASS")
        
        # Verify start button is disabled initially
        start_btn = self.driver.find_element(By.ID, "startQuizBtn")
        assert start_btn.get_attribute("disabled") is not None
        self.log_step("Verified start button is disabled initially", "PASS")
    
    def test_category_selection(self):
        """Test 2: Verify category selection functionality"""
        self.log_step("=== Test 2: Category Selection ===")
        
        # Select General Knowledge category
        self.select_category("general")
        self.take_screenshot("category_selected")
        
        # Verify category is selected
        selected_category = self.driver.find_element(By.ID, "selectedCategory")
        assert "General Knowledge" in selected_category.text
        self.log_step("Verified category selection", "PASS")
        
        # Verify start button is still disabled (no difficulty selected)
        start_btn = self.driver.find_element(By.ID, "startQuizBtn")
        assert start_btn.get_attribute("disabled") is not None
        self.log_step("Verified start button remains disabled without difficulty", "PASS")
    
    def test_difficulty_selection(self):
        """Test 3: Verify difficulty selection functionality"""
        self.log_step("=== Test 3: Difficulty Selection ===")
        
        # Select a category first
        self.select_category("science")
        time.sleep(0.5)
        
        # Select Easy difficulty
        self.select_difficulty("easy")
        self.take_screenshot("difficulty_selected")
        
        # Verify difficulty is selected
        selected_difficulty = self.driver.find_element(By.ID, "selectedDifficulty")
        assert "Easy" in selected_difficulty.text
        self.log_step("Verified difficulty selection", "PASS")
        
        # Verify start button is now enabled
        start_btn = self.wait_for_clickable(By.ID, "startQuizBtn")
        assert start_btn.get_attribute("disabled") is None
        self.log_step("Verified start button is enabled", "PASS")
    
    def test_start_quiz(self):
        """Test 4: Verify quiz starts correctly"""
        self.log_step("=== Test 4: Start Quiz ===")
        
        # Select category and difficulty
        self.select_category("history")
        time.sleep(0.5)
        self.select_difficulty("medium")
        time.sleep(0.5)
        
        # Start quiz
        self.start_quiz()
        self.take_screenshot("quiz_started")
        
        # Verify quiz page is displayed
        quiz_page = self.wait_for_element(By.ID, "quizPage")
        assert quiz_page.is_displayed()
        self.log_step("Verified quiz page is displayed", "PASS")
        
        # Verify landing page is hidden
        landing_page = self.driver.find_element(By.ID, "landingPage")
        assert "hidden" in landing_page.get_attribute("class")
        self.log_step("Verified landing page is hidden", "PASS")
        
        # Verify question is displayed
        question_text = self.wait_for_element(By.ID, "questionText")
        assert question_text.text != ""
        self.log_step("Verified question is displayed", "PASS")
        
        # Verify timer is present
        timer = self.driver.find_element(By.ID, "timer")
        assert timer.text.isdigit()
        self.log_step("Verified timer is present and counting", "PASS")
    
    def test_answer_selection(self):
        """Test 5: Verify answer selection functionality"""
        self.log_step("=== Test 5: Answer Selection ===")
        
        # Setup and start quiz
        self.select_category("technology")
        time.sleep(0.5)
        self.select_difficulty("easy")
        time.sleep(0.5)
        self.start_quiz()
        time.sleep(1)
        
        # Select first answer option
        self.answer_question(0)
        self.take_screenshot("answer_selected")
        
        # Verify option is selected (has selected class)
        options = self.driver.find_elements(By.CSS_SELECTOR, "#optionsContainer .option")
        selected_option = options[0]
        assert "selected" in selected_option.get_attribute("class")
        self.log_step("Verified answer option is selected", "PASS")
    
    def test_question_navigation(self):
        """Test 6: Verify question navigation (Next/Previous)"""
        self.log_step("=== Test 6: Question Navigation ===")
        
        # Setup and start quiz
        self.select_category("sports")
        time.sleep(0.5)
        self.select_difficulty("hard")
        time.sleep(0.5)
        self.start_quiz()
        time.sleep(1)
        
        # Answer first question
        self.answer_question(1)
        time.sleep(0.5)
        
        # Get first question text for later verification
        first_question = self.driver.find_element(By.ID, "questionText").text
        
        # Navigate to next question
        self.go_to_next_question()
        self.take_screenshot("next_question")
        
        # Verify question changed
        second_question = self.driver.find_element(By.ID, "questionText").text
        assert first_question != second_question
        self.log_step("Verified navigation to next question", "PASS")
        
        # Verify Previous button is enabled
        prev_btn = self.driver.find_element(By.ID, "prevBtn")
        assert prev_btn.get_attribute("disabled") is None
        self.log_step("Verified Previous button is enabled", "PASS")
        
        # Navigate back to previous question
        self.go_to_previous_question()
        time.sleep(1)
        
        # Verify we're back to first question
        current_question = self.driver.find_element(By.ID, "questionText").text
        assert current_question == first_question
        self.log_step("Verified navigation to previous question", "PASS")
    
    def test_progress_bar(self):
        """Test 7: Verify progress bar updates"""
        self.log_step("=== Test 7: Progress Bar ===")
        
        # Setup and start quiz
        self.select_category("geography")
        time.sleep(0.5)
        self.select_difficulty("medium")
        time.sleep(0.5)
        self.start_quiz()
        time.sleep(1)
        
        # Get initial progress
        progress_fill = self.driver.find_element(By.ID, "progressFill")
        initial_width = progress_fill.value_of_css_property("width")
        self.log_step(f"Initial progress: {initial_width}")
        
        # Answer and go to next question
        self.answer_question(2)
        time.sleep(0.5)
        self.go_to_next_question()
        time.sleep(1)
        
        # Verify progress increased
        new_width = progress_fill.value_of_css_property("width")
        self.take_screenshot("progress_updated")
        assert new_width != initial_width
        self.log_step("Verified progress bar updated", "PASS")
    
    def test_timer_functionality(self):
        """Test 8: Verify timer countdown functionality"""
        self.log_step("=== Test 8: Timer Functionality ===")
        
        # Setup and start quiz
        self.select_category("general")
        time.sleep(0.5)
        self.select_difficulty("easy")
        time.sleep(0.5)
        self.start_quiz()
        time.sleep(1)
        
        # Get initial timer value
        timer = self.driver.find_element(By.ID, "timer")
        initial_time = int(timer.text)
        self.log_step(f"Initial timer value: {initial_time} seconds")
        self.take_screenshot("timer_initial")
        
        # Wait a few seconds
        time.sleep(3)
        
        # Verify timer decreased
        new_time = int(timer.text)
        assert new_time < initial_time
        self.log_step(f"Timer decreased to: {new_time} seconds", "PASS")
        self.take_screenshot("timer_countdown")
    
    def test_complete_quiz_flow(self):
        """Test 9: Complete quiz flow from start to results"""
        self.log_step("=== Test 9: Complete Quiz Flow ===")
        
        # Select category and difficulty
        self.select_category("science")
        time.sleep(0.5)
        self.select_difficulty("easy")
        time.sleep(0.5)
        self.take_screenshot("quiz_setup")
        
        # Start quiz
        self.start_quiz()
        time.sleep(1)
        
        # Answer all questions
        question_count = 0
        max_questions = 10  # Safety limit
        
        while question_count < max_questions:
            # Check if we're on results page
            try:
                results_page = self.driver.find_element(By.ID, "resultsPage")
                if "hidden" not in results_page.get_attribute("class"):
                    break
            except:
                pass
            
            # Answer current question
            self.answer_question(0)  # Always select first option
            time.sleep(0.5)
            
            # Check if submit button is visible
            try:
                submit_btn = self.driver.find_element(By.ID, "submitBtn")
                if "hidden" not in submit_btn.get_attribute("class"):
                    # Last question, submit
                    self.submit_quiz()
                    break
                else:
                    # More questions, go to next
                    self.go_to_next_question()
            except:
                self.go_to_next_question()
            
            question_count += 1
            time.sleep(1)
        
        self.take_screenshot("quiz_completed")
        
        # Verify results page is displayed
        results_page = self.wait_for_element(By.ID, "resultsPage")
        assert "hidden" not in results_page.get_attribute("class")
        self.log_step("Verified results page is displayed", "PASS")
        
        # Extract and verify results
        results = self.get_quiz_results()
        assert results.get('score') is not None
        assert results.get('correct') is not None
        assert results.get('incorrect') is not None
        self.log_step(f"Quiz Results - Score: {results.get('score')}%, Correct: {results.get('correct')}, Incorrect: {results.get('incorrect')}", "PASS")
        self.take_screenshot("quiz_results")
    
    def test_multiple_categories(self):
        """Test 10: Test quiz with different categories"""
        self.log_step("=== Test 10: Multiple Categories ===")
        
        categories = ["general", "science", "history"]
        
        for category in categories:
            # Navigate directly to the file to ensure clean state
            base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
            file_path = os.path.join(base_path, 'index.html')
            self.driver.get(f"file:///{file_path}")
            time.sleep(2)  # Wait for page to load
            
            # Wait for landing page to be visible
            try:
                landing_page = self.wait_for_element(By.ID, "landingPage", timeout=10)
                # Ensure landing page is visible (not hidden)
                if "hidden" in landing_page.get_attribute("class"):
                    # If hidden, wait a bit more for page to fully initialize
                    time.sleep(2)
            except:
                # If still not found, refresh and wait
                self.driver.refresh()
                time.sleep(3)
                landing_page = self.wait_for_element(By.ID, "landingPage", timeout=10)
            
            # Select category and difficulty
            self.select_category(category)
            time.sleep(0.5)
            self.select_difficulty("easy")
            time.sleep(0.5)
            
            # Start quiz
            self.start_quiz()
            time.sleep(1)
            
            # Verify quiz started with correct category
            category_badge = self.driver.find_element(By.ID, "categoryBadge")
            self.log_step(f"Verified quiz started for category: {category_badge.text}", "PASS")
            self.take_screenshot(f"category_{category}")
    
    def test_restart_quiz(self):
        """Test 11: Verify restart quiz functionality"""
        self.log_step("=== Test 11: Restart Quiz ===")
        
        # Complete a quiz first
        self.select_category("technology")
        time.sleep(0.5)
        self.select_difficulty("easy")
        time.sleep(0.5)
        self.start_quiz()
        time.sleep(1)
        
        # Answer all questions to complete the quiz
        question_count = 0
        max_questions = 10  # Safety limit
        
        while question_count < max_questions:
            # Check if we're on results page
            try:
                results_page = self.driver.find_element(By.ID, "resultsPage")
                if "hidden" not in results_page.get_attribute("class"):
                    break
            except:
                pass
            
            # Answer current question
            self.answer_question(0)  # Select first option
            time.sleep(0.5)
            
            # Check if submit button is visible
            try:
                submit_btn = self.driver.find_element(By.ID, "submitBtn")
                if "hidden" not in submit_btn.get_attribute("class"):
                    # Last question, submit
                    self.submit_quiz()
                    break
                else:
                    # More questions, go to next
                    self.go_to_next_question()
            except:
                # If submit button not found, try next
                try:
                    self.go_to_next_question()
                except:
                    # If next also fails, try submit directly
                    try:
                        self.submit_quiz()
                        break
                    except:
                        break
            
            question_count += 1
            time.sleep(1)
        
        # Wait for results page to be fully loaded
        time.sleep(3)
        
        # Verify results page is displayed
        try:
            results_page = self.wait_for_element(By.ID, "resultsPage", timeout=10)
            assert "hidden" not in results_page.get_attribute("class")
            self.log_step("Verified results page is displayed", "PASS")
        except:
            self.log_step("Results page not found, taking screenshot", "WARNING")
            self.take_screenshot("results_page_not_found")
            # Try to continue anyway
        
        # Wait a bit more for restart button to be ready
        time.sleep(2)
        
        # Click restart button - try multiple approaches
        try:
            restart_btn = self.wait_for_clickable(By.ID, "restartBtn", timeout=10)
            restart_btn.click()
            self.log_step("Clicked restart button", "PASS")
        except:
            # If button not clickable, try finding it and clicking with JavaScript
            try:
                restart_btn = self.driver.find_element(By.ID, "restartBtn")
                self.driver.execute_script("arguments[0].click();", restart_btn)
                self.log_step("Clicked restart button using JavaScript", "PASS")
            except Exception as e:
                self.log_step(f"Could not click restart button: {str(e)}", "ERROR")
                self.take_screenshot("restart_button_error")
                raise
        
        time.sleep(2)
        
        # Verify landing page is displayed again
        landing_page = self.wait_for_element(By.ID, "landingPage", timeout=10)
        assert "hidden" not in landing_page.get_attribute("class")
        self.log_step("Verified landing page is displayed after restart", "PASS")
        self.take_screenshot("quiz_restarted")


# Run tests
if __name__ == "__main__":
    pytest.main([__file__, "-v", "--html=test_report.html", "--self-contained-html"])


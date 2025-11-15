"""
Main test runner script
Executes all tests and generates reports
"""
import pytest
import os
import sys
from datetime import datetime

# Add tests directory to path for imports
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'tests'))


def run_tests():
    """Run all tests and generate reports"""
    print("=" * 60)
    print("Quiz Application - Selenium Test Automation")
    print("=" * 60)
    print(f"Test Execution Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    
    # Create reports directory
    os.makedirs("reports", exist_ok=True)
    
    # Run tests with HTML report
    report_file = f"reports/test_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.html"
    
    pytest_args = [
        "tests/test_quiz_automation.py",
        "-v",
        "--html=" + report_file,
        "--self-contained-html",
        "--capture=no",
        "-s"
    ]
    
    exit_code = pytest.main(pytest_args)
    
    print("=" * 60)
    print(f"Test Execution Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Report generated: {report_file}")
    print("=" * 60)
    
    return exit_code


if __name__ == "__main__":
    sys.exit(run_tests())


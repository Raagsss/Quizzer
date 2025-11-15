"""
Pytest configuration file
Provides fixtures and setup for all tests
"""
import pytest
import sys
import os
# Add tests directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from base_test import BaseTest


@pytest.fixture(scope="function")
def base_test():
    """Fixture to provide BaseTest instance for each test"""
    test_instance = BaseTest()
    test_instance.setup_method(None)
    yield test_instance
    test_instance.teardown_method(None)


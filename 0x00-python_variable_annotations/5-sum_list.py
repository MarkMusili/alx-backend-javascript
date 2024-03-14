#!/usr/bin/env python3
"""
Type-annotated function that takes in a list of floats
and returns the sum of the list
"""

def sum_list(input_list: list[float]) -> float:
    """
    Sums up floats in a list and return the sum
    """
    return sum(input_list)
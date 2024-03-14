#!/usr/bin/env python3
"""
Mixed type-annotated function that takes in input_list(int, list)
and returns the sum(float) of the elements
"""
from typing import Union

def sum_list(input_list: list[Union[int, float]]) -> float:
    """
    Returns the sum of integers and floats as a float
    """
    return float(sum(input_list))
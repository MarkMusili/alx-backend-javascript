#!/usr/bin/env python3
"""
Type-annotated function that takes a float multiplier and 
return a function that multiplies a float by multiplier
"""
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that returns the product
    of mutliplier and another float
    """
    def my_function(a: float) -> float:
        return a * multiplier
    
    return my_function
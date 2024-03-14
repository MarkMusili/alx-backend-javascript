#!/usr/bin/env python3
"""
Type-annotated funtion that takes a string k and an int or float v
then returns a tuple of (str)k and square of v(float)
"""
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple of k(str) and square of v(float)
    """
    return tuple(k, float(v**2))
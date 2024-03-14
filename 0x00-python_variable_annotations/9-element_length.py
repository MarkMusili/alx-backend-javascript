#!/usr/bin/env python3
"""
Type annotated function that returns an iterable object
"""
from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns an iterable object
    """
    return [(i, len(i)) for i in lst]
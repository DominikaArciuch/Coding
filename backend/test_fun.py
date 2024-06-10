import pytest
from fun import find_unique, find_unique2


@pytest.mark.parametrize("list_el, result", [
    ([1, 1, 2, 2, 3], 3),
    ([1, 1, 2, 2, 3, 3, 1, 4], 4)

])
def test_find_unique(list_el, result):
    assert find_unique(list_el) == result


@pytest.mark.parametrize("list_el, result", [
    ([1, 1, 2, 2, 3], 3),
    ([1, 1, 2, 2, 3, 3, 1, 4], 4)

])
def test_find_unique2(list_el, result):
    assert find_unique2(list_el) == result
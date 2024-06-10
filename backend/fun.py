import collections


def find_unique(list_el):
    for el in list_el:
        if list_el.count(el) == 1:
            return el


# this function find multiple values which exists once
# this solution use function Counter which I briefly mention during interview
def find_unique2(list_el):
    list_el_count = collections.Counter(list_el)
    list_unique = filter(lambda x: x[1] == 1, list_el_count.items())
    return [i[0] for i in list_unique]


print(find_unique2([int(i) for i in input().split()]))

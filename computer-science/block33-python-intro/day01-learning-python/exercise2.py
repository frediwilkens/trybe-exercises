# Calcule a média aritmética dos valores contidos em uma lista.


list = [1, 2, 3, 4, 5]


def mediaAritimetica(list):
    sum = 0
    length = 0
    for n in list:
        sum += n
        length += 1
    return sum / length


print(mediaAritimetica(list))

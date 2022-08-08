# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede(em m²).
import math


def painting(metroquadrado):
    preco = 80
    litros = math.ceil(metroquadrado / 3)
    latas = math.ceil(litros / 18)
    text = 'R$ {},00'
    if metroquadrado <= 54:
        return (1, 'R$ 80,00')
    else:
        total = latas * preco
        return (latas, text.format(total))


print(painting(54))
print(painting(108))
print(painting(163))

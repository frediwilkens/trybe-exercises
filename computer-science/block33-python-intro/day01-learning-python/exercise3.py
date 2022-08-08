# Faça um programa que,
# dado um valor n qualquer,
# tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def printSquare(n):
    asterisk = '*'
    line = n * asterisk
    for index in range(n):
        print(line)


printSquare(5)

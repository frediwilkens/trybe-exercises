# Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

exemplo = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def check_names(list):
    name_length = 0
    for name in list:
        if len(name) > name_length:
            name_length = len(name)
            result = name
    return result


print(check_names(exemplo))

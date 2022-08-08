import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

fire_type_pokemons = [
    pokemon for pokemon in pokemons if "Fire" in pokemon["type"]
]

with open("fire_pokemons.json", "w") as file:
    json.dump(fire_type_pokemons, file)

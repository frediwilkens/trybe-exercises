import csv


with open("graduacao_unb.csv", encoding="utf8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')

    header, *data = graduacao_reader

group_by_departament = {}
for row in data:
    department = row[15]
    if department not in group_by_departament:
        group_by_departament[department] = 0
    group_by_departament[department] += 1


with open("department_report.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer.writerow(headers)

    for department, grades in group_by_departament.items():
        row = [
            department,
            grades,
        ]
        writer.writerow(row)

import teacher as t


def get_surname(surname):
    filtered_list = list(filter(lambda x: surname in x, t.students))
    print(filtered_list[0][-1])

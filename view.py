def get_contact():
    surname = input('Фамилия: ')
    name = input('Имя: ')
    phone = input('Телефон: ')
    desc = input('Описание: ')
    data = {"Фамилия": surname, "Имя": name,
            "Телефон": phone, "Описание": desc}
    return data

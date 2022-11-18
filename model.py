import view

# создаем файл1 и записываем в него


def import_data(data_str, data2_str):
    with open("file1.txt", "a", encoding='utf_8') as file1:
        file1.write(f'{data_str}\n')
        file1.writelines(f'\n')
# создаем файл2 и записываем в него
    with open("file2.txt", "a", encoding='utf_8') as file2:
        file2.write(f'{data2_str};\n')

# читаем из второго файла


def export_data():
    with open("file2.txt", "r", encoding='utf_8') as file2:
        content = file2.read()
        print(content)

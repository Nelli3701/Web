import model
import view
import converting as conv


def button_click():
    print('Введите 1, если хотите Добавить контакт')
    print('Введите 2, если хотите Посмотреть контакты')
    print('Введите 3, если хотите Закрыть справочник')
    answer = int(input())
    while answer != 3:
        if answer == 1:
            data = view.get_contact()
            data_str = conv.col(data)
            data2_str = conv.string(data)
            model.import_data(data_str, data2_str)
            print('Введите 1, если хотите Добавить контакт')
            print('Введите 2, если хотите Посмотреть контакты')
            print('Введите 3, если хотите Закрыть справочник')
            answer = int(input())
        if answer == 2:
            model.export_data()
            print('Введите 1, если хотите Добавить контакт')
            print('Введите 3, если хотите Закрыть справочник')
            answer = int(input())
    print('Программа завершена')

import teacher as t
import student as s


def button_click():
    choice = input('Вы учитель или ученик? ')
    if choice == 'учитель':
        flag = int(
            input('Введите 0 - добавить студента; 1 - добавить оценку, 2 - завершить '))
        while flag != 2:
            if flag == 0:
                t.studentsList()
                flag = int(
                    input('Введите 0 - добавить студента; 1 - добавить оценку, 2 - завершить '))
            if flag == 1:
                t.addGrade(t.students)
                flag = int(
                    input('Введите 0 - добавить студента; 1 - добавить оценку, 2 - завершить '))
        print('Программа завершена')
        choice = input('Вы учитель или ученик? ')
    if choice == 'ученик':
        findstudent = input('Введите фамилию: ')
        s.get_surname(findstudent)

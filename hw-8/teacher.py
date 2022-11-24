students = []

# добавляем данные ученика


def addStudent():
    surname = input('Фамилия: ')
    name = input('Имя: ')
    cl = input('Класс: ')
    student = [surname, name, cl]
    return student

# получаем весь список учеников


def studentsList():
    global students
    print('Нажмите 1, чтобы ввести данные об ученике')
    print('Нажмите 0, чтобы завершить')
    result = int(input())
    while result == 1:
        student = addStudent()
        students.append(student)
        print('Нажмите 1, чтобы ввести данные об ученике')
        print('Нажмите 0, чтобы завершить')
        result = int(input())
    print(students)
    return students

# добавляем оценку по предмету ученику


def addGrade(students):
    s = input('Введите фамилию ')
    q = str(input(
        'Для проставления оценок, введите "оценки", для выхода из меню введите"стоп": '))
    dictionary = {'Физика': [], 'Математика': [], 'Информатика': []}
    while q == 'оценки':
        grade = int(input('Введите оценку '))
        dictionary[str(input(
            'Введите название предмета(Физика, Математика, Информатика): '))].append(grade)
        q = str(input(
            'Для проставления оценок, введите "оценки", для выхода из меню введите"стоп": '))
    for person in students:
        if s in person:
            person.append(dictionary)
    print(students)
    return students

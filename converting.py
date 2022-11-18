import view


def col(data):
    data_str = '\n'.join(f'{key}: {value}' for key, value in data.items())
    return data_str


def string(data):
    data2_str = ', '.join(f'{value}' for value in data.values())
    return data2_str

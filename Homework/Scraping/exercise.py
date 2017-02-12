# Name : Emiel de Graaf
# Student number : 10645373
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''

    # creates an empty list to store the result
    result_list = []

    # every substring will be a list item
    list_item = ""

    # Loops throug all letters
    i = 0
    for letter in source:
        i += 1

        # adds a letter to the substring...
        if letter not in separators:
            list_item += letter

            # prevents the last substring not from being added as result
            if i == len(source):
                result_list.append(list_item)

        # ...until the letter is a seperator
        elif list_item != "":

            # then add the substring to the result list
            result_list.append(list_item)
            list_item = ""
    
    return result_list

if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']

'Hello, World'

str = 'a' + 'b'
print(str) # 'ab'

str = str * 4
print(str) # 'abababab'

# newStr = 'ab' - 'b'
# print(newStr) # TypeError: unsupported operand type(s) for -: 'str' and 'str'

mystring = "It's a string, with a single quote!"

# mystring = 'It's a string, with a single quote!'   will get an error here because of using single quote

# Escaping
mystring = 'It\'s an escaped quote!'
print(mystring)

# Multiline strings
multiline_str = """This is line 1,
this is line 2,
 this is line 3."""
'This is line 1,\nthis is line 2,\nthis is line 3.'

print(multiline_str)

string_for_character = "Hello World!"

print(string_for_character.upper())
print(string_for_character.lower())
print(len(multiline_str))

print(string_for_character.split(' '))

# Replace parts of a string
print('Hello world'.replace('l', '_'))

# Reversing a string
print(string_for_character[4])
print(string_for_character[::-1]) # !dlroW olleH

# Chaining calls

print('Hello world'.replace('world', 'student').upper())

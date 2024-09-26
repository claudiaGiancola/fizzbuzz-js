# FizzBuzz

Run this command to run your code:  
`node fizzbuzz.js`

Goals:
- Basic JS Syntax
- Basics of git
- Debugging in VSCode > breakpoints, Watch
- Writing clean code

### Set up
Install node.js
Install Git Bash
Add `.gitignore` file

Useful git commands:
`git status`
`git add .`
`git commit -m "Informative commit message goes here"`
`git push`

### Incremental updates
1. Print every number from 1 to 100.
2. Print “Fizz“ whenever the number is a multiple of 3 instead of the number itself.
3. Print “Buzz” whenever the number is a multiple of 5. Print “FizzBuzz” whenever the number is a multiple of 3 and 5.
4. If a number is a multiple of 7, print "Bang" instead of the number. For numbers which are multiples of seven and three / five, append Bang to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").
5. If a number is a multiple of 11, print "Bong" instead of the number. Do not print anything else in these cases. (E.g. 3 * 11 = 33: "Bong")
6. If a number is a multiple of 13, print "Fezz" instead of the number. For multiples of most other numbers, the Fezz goes immediately in front of the first thing beginning with B, or at the end if there are none. (E.g. 5 * 13 = 65: "FezzBuzz", 3 * 5 * 13 = 195: "FizzFezzBuzz"). Note that Fezz should be printed even if Bong is also present (E.g. 11 * 13 = 143: "FezzBong")
7. If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed. (E.g. 3 * 5 * 17 = 255: "BuzzFizz")
8. Prompt the user for a maximum number
9. Allow the user to specify command-line-options (Let the user pass in which rules to implement)
10. Can you write the Fizz, Buzz, Bang version in a single line?

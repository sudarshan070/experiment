**what is shell?**

* The shell is a user program or it is an environment provided for user interaction.
* It is a command language interpreter that executes commands read from the standard input device such as keyboard or from a file.
* The shell gets started when you log in or open a console (terminal).
* Quick and dirty way to execute utilities.
The shell is not part of system kernel, but uses the system kernel to execute programs, create files etc.

### shell prompt
* Terminal
* Connect via secure shell (SSH)
* Use the console

Finding all shell in system use following command
```
cat /etc/shells
```

**Bourne-compatible shells**
* bash
* ksh
* sh
* zsh

**C-shell-compatible shells**
* bcsh
* csh
* tcsh

**Command Line Interface (CLI)**

* CTRL + L : Clear the screen.
* CTRL + W : Delete the word starting at cursor.
* CTRL + U : Clear the line i.e. Delete all words from command line.
* Up and Down arrow keys : Recall commands (see command history).
* Tab : Auto-complete files, directory, command names and much more.
* CTRL + R : Search through previously used commands (see command history)
* CTRL + C : Cancel currently running commands.
* CTRL + T : Swap the last two characters before the cursor.
* ESC + T : Swap the last two words before the cursor.
* CTRL + H : Delete the letter starting at cursor.


**Why shell scripting**
* Shell scripts can take input from a user or file and output them to the screen.
* Whenever you find yourself doing the same task over and over again you should use shell scripting, i.e., repetitive task automation

### Node.js
-It is a program which allow a computer to understand and execute the JavaScript outside the browser.
-Node.js cant/dont create or know about an HTML file .
-Node.js can run the .js files.
-Node.js is an environment that decides what js can access.

### Browser vs Node.js

    +-------------------+----------------------+
    |      Browser      |        Node.js       |
    +-------------------+----------------------|
    | HTMl✅           | HTMl ❌              |
    | Window✅         | Window ❌            | 
    | Document✅       | Document ❌          |
    +-------------------+----------------------+      

-The operating system is the one who manages the files, but the CPU execute it

### Tools of Node.js

## Import
- it is used to import a module into current JavaScript file.
- Syntax:
    import name from "module"

    eg: import fs from "fs"

## Modules
- A module is a file or package that contains related functionality.
- Node.js provides many built-in modules such as fs, readline, path, http, etc. 
egs:

- fs : which stands for File System , it lets the JavaScript interact with files and folders. 
        + Read Files 
        + Write Files 
        + Create Folders
        + Delete Files 
        + Rename Files

        | CLI     |  fs  Module     | What itdoes                         |
        | ------- | --------------- |------------------------------------ |
        |  mkdir  |  fs.mkdir()     | Createfolder                        |
        |  rm     |  fs.rm()        | Delete                              |
        |  mv     |  fs.rename()    | Rename/Move                         |
        |  cp     |  fs.copyFile()  | Copyfile                            |
        |  cat    |  fs.readFile()  | Read file contents (similarpurpose) |

    -fs.writeFileSync("file","data") : 
        - Creates a new file if it doesn't exist.
        - If the file already exists, its contents are overwritten.
            eg: fs.writeFileSync("./note.txt","Hello World") -> this will write the hellow world msg to the path note.txt. if the .txt file doesn't exist it create a new one.

    -fs.readFileSync("file","option") : 
        - Reads the contents of a file.
        - If no encoding is provided, it returns a Buffer.
        - A Buffer stores the raw bytes of the file.
        - Providing "utf-8" converts those bytes into a readable JavaScript string.
            eg: fs.readFileSync("./note.txt","utf-8") 
    
    -fs.appendFileSync("file","data") :
        - Adds new data to the end of an existing file.
        - If the file does not exist, Node creates it.
            eg: fs.appendFileSync("./note.txt","\nHello") -> this will add hello(text) to the last of the file.

- readline
    - Stands for Read Line.
    - It allows Node.js programs to communicate with the user through the terminal.
    - It creates an interface that can ask questions and receive user input.
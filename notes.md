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
- fs : which stands for File System , it lets the JavaScript 
        + Read Files 
        + Write Files 
        + Create Folders
        + Delete Files 
        + Rename Files

        | CLI     |  fs  Module     | What itdoes                         |
        | ------- | --------------- |------------------------------------ |
        |  mkdir  |  fs.mkdir()     | Createfolder                        |
        |  rm     |  fs.rm()        |Delete                               |
        |  mv     |  fs.rename()    | RenameMove                          |
        |  cp     |  fs.copyFile()  | Copyfile                            |
        |  cat    |  fs.readFile()  | Read file contents (similarpurpose) |
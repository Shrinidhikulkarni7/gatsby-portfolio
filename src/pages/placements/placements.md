---
path: "/blog/obfuscation"
date: 2017-07-01
title: "Obfuscation of the code"
---

In software development, obfuscation is the deliberate act of creating source or machine code that is difficult for humans to understand. Like obfuscation in natural language, it may use needlessly roundabout expressions to compose statements.


**Why?**

When we deploy our code using docker on client environment they can attach or exec into the code base and get the source code of it. This needs to be hidden/encrypted.
Most of the web-apps are in JavaScript. We will obfuscate the main server code so that there is no access to source code.


**How to do it?**

1. There is a npm package for obfuscating the javascript code. The name of the package is JavaScript obfuscator.(https://www.npmjs.com/package/javascript-obfuscator)


2. Obfuscating can be done on a folder directly, meaning all the javascript files in the folder will be obfuscated.Example — javascript-obfuscator [folder name]


3. Although this works perfectly in obfuscating all the files, the files are not replaced.
A copy of the file with obfuscated code is made, which will be named

>[filename]-obfuscated.js


4. The original file needs to be replaced with the file containing obfuscated code and the original file needs to be deleted.

5. We should also keep in mind to replace the obfuscated file’s filename to original filename as other files may be referencing them.
The actual working of script
In the previous paragraph I wrote how obfuscation works in words. Let’s get to actual working.
Let’s write a shell script for the same.
Obfuscate the code for the current folder by -
javascript-obfuscator .
2. Since all the files which are obfuscated will have obfuscated in the filename, we can find the obfuscated files which are of .js extension and rename it by removing the .js extension from filename.
find -name “*obfuscated*” -exec rename ‘s/obfuscated.js/obfuscated/’ {} “;”
3. Now, we will have to delete all the files with .js extension from the folder which has plain source file. We can do this by,
find . -name “*.js” -type f -delete
4. Since all the plain Js file have been deleted, we can change the obfuscated folder to have the name of original file where all references might be made,
find -name “*obfuscated*” -exec rename -v ‘s/obfuscated/.js/’ {} “;”
5. The extra character “-” can be removed by using,
find -name “*js*” -exec rename -v ‘s/-//’ {} “;”
Illustration of the same with an example
Consider you have a folder named server and it has two files named a.js and b.js.
After running the command ‘javascript-obfuscator .’ on server folder the files will be a.js,b.js,a-obfuscated.js and b-obfuscated.js.
After running,
find -name “*obfuscated*” -exec rename ‘s/obfuscated.js/obfuscated/’ {} “;”
The server folder will have a.js, b.js , a-obfuscated and b-obfuscated
(the command will remove .js extension from obfuscated files)
4. To delete all the files with .js extension use,
find . -name “*.js” -type f -delete
Now the server folder will have a-obfuscated and b-obfuscated.
5. After running ,
find -name “*obfuscated*” -exec rename -v ‘s/obfuscated/.js/’ {} “;”
The server folder will have a-.js and b-.js
(The command renames all obfuscated files to normal file name with .js extension)
6. find -name “*js*” -exec rename -v ‘s/-//’ {} “;”
This particular command will delete the extra “-” from filename and the server folder will have a.js and b.js.


The beauty of this will be javascript-obfuscated code cannot be decrypted or achieved by reverse engineered.
It will produce different obfuscated code to same file when done after sometime.
It will be very hard to break it( almost impossible)



The code can be found here — https://github.com/Shrinidhikulkarni7/Obfuscation

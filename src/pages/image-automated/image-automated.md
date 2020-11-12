---
path: "/blog/automated-image"
date: 2020-11-13
title: "How to generate automated DockerFile"
---

Just to inform you, I haven't developed this yet but this is my idea and I want to make sure I get right before I develop as it will be helpful for lot of people.
Any advice/contribution will be welcome. \
<br/>

 ##**The Idea and Motivation behind it** 

<br/>

All the dockerfiles are manually written and can sometimes be hectic to maintain.\
The idea here is to parse through the code, find out what are the packages being used, and generate an efficient dockerfile that can be used to generate the image.

###How?

For some languages like JavaScript, you can just look at the *package.json* and get it. And in python, if someone has *requeirements.txt* a simple algorithm could be written to just fetch them and build an image.\
But these account for very few cases. The main logic here will be to have a database that consists of the packages for every language. The next step will be to parse the entire code, look for packages, and generate the dockerfile. \
To give you an example, if someone uses `import requests` You immediately know that you have to install *pip* and *requests* \n

All you need to do is automate it.

###Use Case?

1. For older code which haven't been dockerized.
2. Have huge number of developers and maintaining dockerfile is hard.


Please feel free to improve/suggest any changes which you feel like. This will be completely open source


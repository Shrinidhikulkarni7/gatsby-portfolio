---
path: "/blog/deployments"
date: 2018-09-24
title: "How I made deployments easier!"
---

Ever since containers have come up, deployments have been much more easier but what if we make more optimized use of it.
Ideal scenario would be to have very less downtime and deploy in a easier way!

So i thought what if I made deployments way more simple than it is.
What if a person can use his mobile phone/smartwatch , open it and say OK Google,DEPLOY and your application deploys. MAGIC!

**Overall Process of what is going to happen-**


1.You open your smart phone/watch , say OK Google Deploy.

2.The IFTTT links your Google Assistant to Slack

3.The Slack looks for keyword ‘deploy’ and triggers your script.

4.Your script does the job of deploying your application.

*Now i deploy my application using my voice :)*

Things/Technologies used for doing it -

1. Docker (https://en.wikipedia.org/wiki/Docker_(software))

2. Docker Swarm (https://docs.docker.com/get-started/part4/)

3. Slack (https://en.wikipedia.org/wiki/Slack_(software))

4. IFTTT ( https://en.wikipedia.org/wiki/IFTTT)

5. Shell Scripting/ Bash Scripting.

**Normal deployment using docker!**

A swarm is a group of machines that are running Docker and joined into a cluster. After that has happened, you continue to run the Docker commands you’re used to, but now they are executed on a cluster by a **swarm manager**.

A docker stack is a group of interrelated services that share dependencies, and can be orchestrated and scaled together.

To sum up in simple words i can have many containers running at the same time and have a docker-compose.yml file which has what all images needs to be used.

You can read more about docker stack here — https://docs.docker.com/get-started/part5/ and read more about docker-compose.yml here — https://docs.docker.com/compose/compose-file/.

Also read about containers over here — https://www.docker.com/resources/what-container.

A docker image can be built with the help of a docker file — https://docs.docker.com/engine/reference/commandline/image_build/
On a standard practice you usually pull the code using your github/bitbucket/gitlab and copy whatever you have pulled using COPY or ADD command( ofcourse there are lot of other things you do with docker file but I’m sticking to the topic).

Using the code and also the dependencies you will build all the image!

When you build a new docker image , usually a tag is given to it along with repository name ( remember some images are private and some images are public ).

Public images can be downloaded by anyone and are global. The private images needs a docker login with suitable creds for you to use the image!

The docker-compose.yml will have configuration of all the images which it runs as services.
An ideal web-app can( may change) have the whole component( server+ client) running and might have database along with it. So suppose it will have two images in it- one for web-app and one for database.
The docker-compose.yml is started in stack mode by using docker stack deploy -c docker-compose.yml{anyname}



**Linking Slack, you application and Google Assistant.**

Make use of Slack Bots to connect to your application and use IFTTT to connect your Google Assistant/ OK Google .

Read more about slack bots — https://api.slack.com/bot-users.

Read more about integrating Google Assistant to IFTTT — https://ifttt.com/google_assistant


**Building Docker Image using Docker File**

As mentioned earlier, you dockerfile should have a copy command which copies your code to the docker image.

Now let us go through on how to build the docker image using the dockerfile and let us follow a standard naming convention as it will help us for our purpose.

The standard command for building a image using dockerfile is
>docker build -t repository_name: tag_name .

The repository name should remain the same and the name should have little change (i.e adding a number and incrementing it everytime) so that the image name is updated in the docker-compose.yml file.

Make sure the number increments everytime you execute the script.
(in our case the execution of the script will be triggered via your Google assistant, which is linked to Slack and using Slack’s API is linked to your application).

Example( suppose your repository name is abc, tag name is xyz), you can go like this everytime script is 
executed.

>docker build -t abc:xyz1 .

>docker build -t abc:xyz2 .

To generalize it, we can a variable instead of number.
>docker build -t abc:xyz{variable} .

**Shell script for incrementing the variable number and running docker build**

Suppose n is variable name and let us assign it to a starting number and write the script to increment and update the variable everytime in docker build everytime script is triggered.

>n=1; #the variable that I want to be incremented

>next_n=$[$n+1]

>sudo sed -i “/#the variable that I want to be incremented$/s/=.*#/=$next_n;#/” ${0}

The above script will make sure the variable n is increased everytime the script is executed/triggered. 
Later you can use the same variable to append to tag_name of the docker build.

>docker build -t repository_name: tag_name$n .

Example of this everytime it is executed( suppose your repository name is abc, tag name is xyz)-

>docker build -t abc:xyz1 . (as n the variable will be 1 the first time)

>docker build -t abc:xyz2 . (as n the variable will be 2 the second time)


**The docker-compose.yml file**

Docker Compose is used to run multiple containers as a single service.
The docker-compose.yml file has the code where multiple containers can be configured.

The image name should have name of the image which you have recently built.

You can handle replacement of name inside docker-compose.yml by using basic find and replace command using sed.

>sed -i ‘s/old-text/new-text/g’ docker-compose.yml

**The Final Execution**

Your script now contains — Incrementing the variable, building docker image using the dockerfile and changing the latest image name in docker-compose.yml file.

To run the application in docker stack mode, just use

>docker stack deploy -c docker-compose.yml {anyname}

This will start the application by parsing every content from docker-compose.yml file and your application is up :)








 







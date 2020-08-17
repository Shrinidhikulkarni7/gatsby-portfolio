---
path: "/blog/data-backup"
date: 2020-08-15
title: "Testing your data backup in a web-app"
---

How many of you take backups? <br/>
Almost Everyone.

How many of you test your backups? <br/>
Almost None 

---
</br>

This post comes after many of the recent outrages where people were not able to restore the old backedup data as it wasn't working.<br/>
Over the years, when the main data goes down, people have failed to bring up the old data even though they take backups regularly.


<br/>

###Bad backups happen far more often than you’d think and there are a number of reasons why:

* Overly complex backup applications with settings that don’t work as anticipated <br/> <br/>
* If it’s a physical backup, what do you do when the storage is full? <br/> <br/>
* If it’s a cloud backup, who’s being notified of downtime, backup failures or API updates? Who has access?</br><br/>
* Hardware issues – all devices fail eventually, including backup devices.<br/><br/>
* Improperly stored backup media, causing physical damage to the backups <br/><br/>

<br/><br/>

##How to handle them?

There are a various ways to be honest and might be even more efficient. But I'm going to propose my solution which is simple to setup and is a one time process.

[Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) has made our life easier now with amazing Continuous Integration (CI), Continuous Delivery (CD) and Continuous Deployment (CD). <br/>

The idea here is to use gitlab for testing your backups. You can achieve the same by following the instructions.<br/>
 1. Have a [pipeline](https://docs.gitlab.com/ee/ci/pipelines/) which triggers based on your needs.<br/><br/>
 2. The pipeline will have multiple jobs, one will be **to take the backup** and other will be to **check the backup** immedietly after it is taken. <br/> <br/>
 3. To check the backup, spinup a cluster and host the application with the data which you have taken backup in the previous job.<br/><br/>
 4. Verify the hosted website before you procced.


 You can even write an automated script, based on your application, which compares the original application to the testing application which you have hosted.

 This will address lot of issues and save lot of manual effort.

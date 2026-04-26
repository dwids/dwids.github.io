---
date: 2011-06-10T18:38:41.000Z
lastmod: 2011-06-10T18:38:41.000Z
title: "Emulating a Developer: Part 3 – Linux coding ('bashing away')"
draft: false
slug: emulating-a-developer-part-3-linux-coding-bashing-away
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Emulating a Developer: Part 3 – Linux coding ('bashing away')"
description: 
---

#### Being the ongoing adventures in application development … by someone who really doesn’t develop code.

<Continues [from Part 2](__GHOST_URL__/2011/06/09/emulating-a-developer-part-2-pc-coding-what-no-clipboard/)>

Thus far I had ‘designed’ my simple program. Well, in my head at least. Then built a working PC (vbscript) version by my tried-and-true *learn then code* method. But it was slow and had annoying security warning popups.&#160; 

So I decided to start again and use the same ‘design’ but write it as a [BASH](http://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) shell script that runs directly on the Linux Server. This took a lot less time to do, but I still had to learn – actually re-learn – how BASH does things like input strings, break them up into individual values, add things up, loop around, create random values, merge strings etc.&#160; 

But it wasn’t that hard at all. A few hours later and here it is:

#!/bin/bash&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
# creates a suitable rar command to break up large file(s) into 7, 14 or 21 smaller rar files       
# pass in file sizes in MB and it will do the rest.       
# example: crtRar 350 200 400       
# results in:&#160; sum is: 950 MB&#160;&#160;&#160;&#160; using 14 parts&#8230;&#160; rar a -v67m -m0 -R ~/temp/dio.rar       
# just copy and paste and add your (3) file names at end of command 

let mySum=0 

# pass in 1 to n values. being file sizes in MB 

for i in $*      
do       
let mySum=$mySum+$i       
done       
echo "sum is: "$mySum" MB" 

# Generate simple 3 char random file name for .rar file      
rarName=`head -c 500 /dev/urandom | tr -dc a-z | head -c 3; echo` 

# Simple "if" rules, such if mySum (file size totals) le 700 (MB) then 7 parts, etc      
if [ $mySum -le 700 ]; then       
&#160;&#160;&#160; let rarSize=$mySum/7 ; echo "using 7 parts&#8230;"       
elif [ $mySum -le 1400 ]; then       
&#160;&#160;&#160; let rarSize=$mySum/14 ; echo "using 14 parts&#8230;"       
else       
&#160;&#160;&#160; let rarSize=$mySum/21 ; echo "using 21 parts&#8230;"       
fi       
# finally build and show rar command       
rarCmd="rar a -v"$rarSize"m -m0 -R ~/temp/"$rarName".rar "       
echo $rarCmd

&#160;

Even I can see it could do things smarter. But it’s Version 1, it works and so I’m happy. **Plus I am still not a developer…**

PS: Things I want to add in Version 2:

- Pass the file or folder names per se and have the program use them to work out the rar part size 
- Then add the provided file/folder name to the (end of the) rar command 

---

> [!info] Original Published Date : *2011-06-10*
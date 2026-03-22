---
date: 2011-06-09T18:07:00.000Z
lastmod: 2011-06-09T18:07:00.000Z
title: "Emulating a Developer: Part 1 – Learn as you type"
draft: false
slug: emulating-a-developer-part-1-learn-as-you-type
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Emulating a Developer: Part 1 – Learn as you type"
description: 
---

#### Being the ongoing adventures in application development … by someone who really doesn’t develop code.

I never actually learnt how to write code. I can’t recall ever even vaguely doing it for a living. But ever since I can remember, I’ve dabbled and whipped up utility applications for my own use.

I was amazed to discover, years after leaving IBM, that one of my little utilities was still being used internally by some people.&#160; Anyway, I had cause to whip one up just today. And the more things change, the more they stay the same. 

I still learn as I type. That is, I **don’t **sit down and learn the language I’m writing in, then work out the design, then think it through some more, then actually start coding. 

Nope. I get the Big Picture in my head, then dive in.&#160; I’m picturing, in my head, a flow chart. Don’t write things down!&#160;&#160; Then off we go entering the code for “*crtRar*”

### What crtRar had to do – the basics

My crtRar (“Create RAR”) program actually serves a valuable purpose.&#160; I have some big files up there on a server and I want to get them down to the PC. It’s an FTP server; actually SFTP.&#160; Say, the two files are:

&#160; BigBuckBunny.avi&#160; 600 MB

&#160; Test22.mpg 100 MB

The FTP server will only allow each download ‘stream’ to be about 200 kBps. So I can download the 2 files at the same time, but each one will only be at 200 kBps. That 200 kBps is about 1/7 of my total ADSL bandwidth. So it’s not efficient at whatever 2/7 as a percent is .

Both the PC and the FTP server (running Linux) support the RAR compression program. It’s a bit like zip or winzip, with one difference. It can easily break up 1 or more files into multiple files.&#160; Can you see what’s coming next?

Take the two files (total of 700 MB) and create 7 different RAR files. Make them all the same size (700/7 = 100 MB) and then download all 7 at once, that is 7 FTP streams.&#160; Will download much quicker than just the 2 original files. (Actually there’s also no point in compressing the data as both are already compressed, so we can save time by telling RAR not to pack the data.).&#160; On the server this is a sample of the command:

&#160; rar a -v100m -m0 -R ~/temp/zr.rar BigBuckBunny.avi&#160; Test22.mpg

Won’t go into details, but it creates the multiple (7) x 100 MB rar files&#160; *zr.part01.rar, zr.part02.rar* etc&#160; (I chose the name “*zr*” at random, means nothing!&#160; The command does a bit more, like catering for whole directories etc)

I then use Filezilla FTP client, on the PC,&#160; to download all 7 (at once), nicely maxing out my connection. Last step is to use RAR on the PC to ‘extract’ the 2 original files.

This first version would be quite simple. It would basically only ‘build’ the above rar command, but take into account the file sizes, plus create a random, 2 letter file name (hopefully unique, so it wouldn’t cause problems with existing file names).&#160; So, the flowchart in my head, basically had these steps:

1. Call the program, passing the 1 or more file sizes in MB (eg “crtRar 600 100”) 
2. Break up the input ‘string’ (600 100) into individual values, i.e two in this case 
3. Add them up to give total filesize 
4. If this total filesize was 700 or less, I’ll break up into 7 equal parts. If between 700 and 1400 then 14 parts. If greater than 1400 then 21 parts 
5. Calculate the rar file part size as per 4. above 
6. Create a random, 2 letter file name 
7. Build the rar command using the output of 5 and 6 etc 
8. Put it up on the screen, ready to be copied and pasted…and used. 

Note: I decided on the 700, 1400, 2100 based on history. I try and keep the part size about 100 MB. My ISP enforces peak and offpeak times/quotas and 100 MB parts only take about 10 mins to download each, so I can do some peak and the rest off-peak.

And so I dived in and started coding. Learning the details of the language I was using could come later…

<continues in [Part 2](__GHOST_URL__/2011/06/09/emulating-a-developer-part-2-pc-coding-what-no-clipboard/)> 

---

> [!info] Original Published Date : *2011-06-09*
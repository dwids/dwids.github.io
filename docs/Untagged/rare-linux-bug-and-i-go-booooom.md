---
date: 2006-09-03T19:05:23.000Z
lastmod: 2006-09-03T19:05:23.000Z
title: Rare Linux bug and I go booooom
draft: false
slug: rare-linux-bug-and-i-go-booooom
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Rare Linux bug and I go booooom
description: 
---

In trying to get a $10 adapter cable to work on the laptop, I hit a rare Linux bug. And the system, she go booom. Wouldn&#8217;t boot in normal mode, nor in recovery mode. Same &#8216;small&#8217; problem; pretty much couldn&#8217;t find the hard drive.

It was nothing to do with the cable per se.

Actually it was, bizzarely, claiming it couldn&#8217;t find ***Mimix***. Which is a totally different operating system! I knew the (one and only) disk was there okay as it was a dual boot and Windows XP was fine. So it had to be something else.

Turns out  &#8220;In the fstype tool there is a problem if the lower 16 bit of number of free inodes in a ext3 filesystem happens to match minix filesystem magic.

This will cause the system not to boot since ubuntu will attempt to mount the filesystem as a minix filesystem.&#8221;

http://www.ubuntuforums.org/archive/&#8230;p/t-95729.html

I got around it via these steps (safely recorded here &#8211; and elsewhere &#8211; if it happens again):

1. Boot a Live CD of Ubuntu (5.1 ok)
2. set root password (sudo passwd root)
3. mount /dev/hda1 as /root
4. cd /root  then cd to (say) /tmp dir
5. create a junk.txt and put some data in it
6. save it, shutdown Ubuntu, remove live cd and reboot

And it worked.

---

> [!info] Original Published Date : *2006-09-03*
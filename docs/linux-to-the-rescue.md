---
date: 2004-06-03T07:26:31.000Z
lastmod: 2004-06-03T07:26:31.000Z
title: Linux to the rescue
draft: false
slug: linux-to-the-rescue
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Linux to the rescue
description: 
---

Had cause to yet again thank Linux yesterday. The free operating system never ceases to amaze me. Yesterday, it was front and centre as Windows refused to recognize an occasionally sick hard drive.

The hard disk had GB of valuable data. So I had it replaced by the  good lads at my local PC store. They gave me back the faulty disk, ready for me to try and &#8220;pump&#8221;; being an old IBM 1980&#8217;s term for &#8220;get the data off a faulty disk to somewhere safe&#8221;

I had an old Dell desktop 200 MHz PC in the back room. These can only have 1 (one) hard drive, so I gingerly unplugged the built in one and replaced it with my &#8220;faulty&#8221; one. This disk was flaky under Windows; sometimes it  worked, sometimes it didn&#8217;t&#8230;and dear old Windows XP slowed to a grind and gave the Redmond Wave Off; aka Blue Screen Of Death

On the Dell, I then booted the free &#8216;live&#8217; Linux CD distro called [Knoppix ](http://www.knoppix.net/). A live distro is one that  can boot directly from CD and then operate without using a hard drive (!).

Now this is no command line minimalist distro. Knoppix gave me the great GUI desktop (KDE), with mouse active so I was up and running.

To summarise, I then:

- Configured TCP/IP on the Desktop Knoppix box.
- Booted my Laptop into Linux too (it had Mandrake installed)
- Installed SSHD onto the Laptop
- Configured the Laptop to have a static IP address
- The desktop (Knoppix) had the SSH client built it, so I simply used

the scp utility to copy files over to the Laptop.

**Tech notes**

- I noted that Knoppix had a &#8220;start Samba server&#8221; button
- So I tried that, answered a few questions then rebooted the Laptop into Windows, to act as the &#8216;client&#8217; for the Samba server (Samba enables Linux directories to appear as Windows shares)
- Straight away the Windows PC could &#8216;see&#8217; the Linux directories as shares. Copying was working too; I could drag and drop files from Linux onto the Windows XP laptop

---

> [!info] Original Published Date : *2004-06-03*
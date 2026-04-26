---
date: 2008-07-02T09:45:12.000Z
lastmod: 2008-07-02T09:45:12.000Z
title: Finally got 192 MB file on to mobile phone
draft: false
slug: finally-got-192-mb-file-on-to-mobile-phone
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Finally got 192 MB file on to mobile phone
description: 
---

Well, despite my original optimism, yesterdays [FTP over Wireless](__GHOST_URL__/2008/07/01/copying-big-files-to-the-mobile-phone/) failed. I went out and when I returned the transfer rate had slowed down to a crawl; literally the 4 k/sec of dial up. No idea why.

Tried a few other things, including breaking up the 192 MB file into chunks, via RAR. I moved the 10 chunks over with standard Windows Explorer, via the ActiveSynch, but then RAR on the phone got internal errors. 

In the end the following worked:

- Installed an [FTP **server**](http://www.freewarepocketpc.net/ppc-download-mocha-ftp.html) on the phone
- Ensured &#8220;TCP/IP over USB&#8221; was enabled on the phone (via selecting *Enable Advanced Network Functionality* in the *USB to PC* section of *Settings*
- Connected the phone to the PC via USB
- On the PC used RAR to break up the file into about 90 MB chunks with no compression (Store option). See notes below as to why.
- Started my standard [FTP **client**](http://filezilla-project.org/) on the PC
- FTP&#8217;d the 3 RAR files over to the Phone, specifically it&#8217;s memory card
- Used [RAR](http://freewareppc.com/utilities/pocketrar.shtml) on the Phone to re-assemble the file

**Pocket Wikipedia now works on the mobile phone**!

Important notes:

1. Tried to FTP the whole 192 MB file over at once. FTP got most of way then got an error. Hard to work out what error was actually saying. After trying a few things, found one solution was to break file up into 3 files (RAR) , transfer one of these file, restart both FTP client and server, then do final two files. 
2. Had to configure RAR on the Phone to use the storage card for it&#8217;s temporary working area. Otherwise not enough &#8216;RAM&#8217; memory free to unpack a 192 MB file.

 

Technorati Tags: [Pocket Wikipedia](http://technorati.com/tags/Pocket%20Wikipedia),[PPC](http://technorati.com/tags/PPC),[Windows Mobile](http://technorati.com/tags/Windows%20Mobile),[p3600i](http://technorati.com/tags/p3600i)

---

> [!info] Original Published Date : *2008-07-02*
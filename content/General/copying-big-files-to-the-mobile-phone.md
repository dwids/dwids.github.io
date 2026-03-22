---
date: 2008-07-01T09:49:44.000Z
lastmod: 2008-07-01T09:49:44.000Z
title: Copying BIG files to the mobile phone
draft: false
slug: copying-big-files-to-the-mobile-phone
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Copying BIG files to the mobile phone
description: 
---

Bit frustrating to find that Windows seems to have a limit on how big a file can be, if you are transferring it to your phone the official way (by ActiveSynch). But a step back first.

[Pocket Wikipedia](http://www.free-soft.ro/pocket-wikipedia/pocket-wikipedia.html) is now available for Windows Mobile phones, like my HTC p3600i. It&#8217;s a subset of the main [Wikipedia](http://en.wikipedia.org/wiki/Main_Page) that as they say only (ha ha) is &#8220;*about the size of a fifteen volume encyclopaedia (24,000 images and 14 million words)&#8221;*

But the problem is that the Wikipedia content itself is in one big file.  Now large is a relative term. But 192 MB is large for mobile phone transfers.

And Microsoft&#8217;s ActiveSynch kept apparently re-starting after a few minutes.  I tried some other file manager software but it wouldn&#8217;t work.  Then I had a brain wave: FTP (File Transfer Protocol).  An &#8216;old&#8217; but reliable way to move files about networks.

Within a few minutes I had:

- Installed an [FTP server](http://filezilla-project.org/) on the PC with the big file on it
- Installed an [FTP client](http://freewareppc.com/communication/softxftpclient.shtml) on the mobile phone
- Configured the phone to use my home wireless network 
- Connected away

Right now, as I type, it&#8217;s transferring happily. It even has a resume function, which was needed when the phone went into sleep mode after 2 minutes. Oops. Fixed that by temporarily telling it to not sleep.

---

> [!info] Original Published Date : *2008-07-01*
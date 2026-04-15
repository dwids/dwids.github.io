---
date: 2005-03-17T10:43:13.000Z
lastmod: 2005-03-17T10:43:13.000Z
title: Recovery operations continue
draft: false
slug: recovery-operations-continue
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Recovery operations continue
description: 
---

So here we are the following morning. I&#8217;m attacking the *Windows Won&#8217;t Boot on DDS* problem with a vengeance.

DDS doesn&#8217;t have a CD, but it does have a diskette drive. I needed to try a full XP recovery-install.

Mmm. I read that Microsoft still offers XP install diskettes. So, I downloaded the official MS application that creates the six (6!) diskettes.

I found 6 old diskettes and carefully formatted all of them. ( One was labelled IBM DOS 6.1 beta. Codenamed Guinan. 1993!)

I then ran the MS program to create the bootable XP install diskettes.

I&#8217;m sure I read that they could boot, then do a remote (network) install. Hence I could have the XP install CD shared on my main PC and &#8211; via my LAN &#8211; boot/install DDS from that.

To cut to the chase, it failed. After manually swapping the 6 diskettes, a brief glimmer of hope when it offered the XP recovery console and even showed me the C: prompt. But then boom, &#8216;no C drive&#8217; message or something. Another 6swap reboot &#8211; and a different menu option &#8211; brought up &#8220;no CD drive found&#8221; and &#8220;F3 to exit&#8221;.   Bang.

Tried a few other things, involving PXE (*Pre-boot eXecution Environment*, aka &#8216;boot from network&#8217;. Hey shouldn&#8217;t that be PEE. I guess not).

The official MS PXE and XP_install seem to want a Windows 2000 server to work. AFAIK. Looked into a few Linux ones, like [unattended ](http://unattended.sourceforge.net/)over at Sourceforge, but nothing seemed to fit.

Beaten! But only this round.   Work continues. 

---

> [!info] Original Published Date : *2005-03-17*
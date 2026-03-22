---
date: 2008-06-15T16:39:56.000Z
lastmod: 2008-06-15T16:39:56.000Z
title: Backing up with Areca
draft: false
slug: backing-up-with-areca
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Backing up with Areca
description: 
---

I don&#8217;t think I&#8217;ve ever lost a hard drive. As in had one crash, be zapped, stolen, corrupted&#8230;and the data not recoverable. 

I have lost a days work, back in the 80&#8217;s, when the file transfer between PCs and Servers (actually Mainframes) was in its infancy. I did the transfer the wrong way &#8211; it was a big long command you typed in. So instead of copying today&#8217;s work up to the Server, I copied yesterdays down. And clobbered all of today&#8217;s work.

Anyway with hundreds of gigabytes of disk on my main Windows PC, I now stand to lose a lot more than a days work, should the hard drives go boom. Photos, music, videos, documents. I&#8217;d hate to think.

So I back up the photos and documents (etc) to an external USB2 hard drive. I just plug it in and back up the key data.

The music files are another 80 GB.  The above external drive it getting a bit full to store the music files, so just yesterday I bought a 320 GB disk and put it into a very old PC. After a lot of mucking around with Ubuntu Linux, I abandonded that&#8230;and went back to Debian Linux 4.0.   To cut to the chase, it&#8217;s now on my network and Windows thinks it has a new (remote) 300+ GB drive.   For the tech heads: yes, it&#8217;s SAMBA, of course.

For the remote (network) drive and the external USB2 drive, I use the free, open source program [Areca Backup](http://areca.sourceforge.net/) to, umm, back up the nominated PC folders. Works a treat and recommended.

One hiccup is an apparent Windows limitation.  If your c:completefilenameincludingpathis.very.long (more than 256 characters) for either the &#8220;from&#8221; or &#8220;to&#8221; file, Areca stops, due to this Windows problem.  In fact my remote servers &#8216;path&#8217; was initially a UNC one \servernamesharebackupFolder  Hence adding lots of characters. I simply created a SAMBA share direct to this backupFolder and mapped a new drive to it. The above UNC name now simply becomes K:   All okay now.

---

> [!info] Original Published Date : *2008-06-15*
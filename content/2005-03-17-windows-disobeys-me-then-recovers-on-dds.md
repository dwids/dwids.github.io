---
date: 2005-03-17T18:00:32.000Z
lastmod: 2005-03-17T18:00:32.000Z
title: Windows disobeys me then recovers on DDS
draft: false
slug: windows-disobeys-me-then-recovers-on-dds
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Windows disobeys me then recovers on DDS
description: 
---

Windows disobeyed a direct order, then &#8211; by accident &#8211; it fixed things up.

Here&#8217;s how it happened. To add to my woes, I started seeing hard-drive errors on DDS, so I went into the Bios and disabled the first 2 drives. This included the main C: drive with (corrupt) Windows on it.

I decided to boot Windows XP from CD and install Windows on another physical drive. During this process Windows found the **original C:drive (yes, the one disabled in the bios)** and proceed to run a chkdsk on it. It had ignored the fact the drive wasn&#8217;t supposed to be there and available.

And found errors on it and repaired them.

So after installing the *new *Windows on the other drive and testing it, I went back into the bios, re-enabled the other drivers and rebooted.

The original Windows came back up!  First I went into Safe mode, then rebooted into standard mode. All data there.

Just to be sure I copied all the main data over to a spare drive.  There was a lot more that I had first thought, including a stack of emails.

I then put on [GAG](http://gag.sourceforge.net/), a Graphical Boot Manager. I was able to use it to find both Old and New Windows then add them to its Boot Menu. A final reboot and ta da!  Windows x 2 both work.

Forgot to say that I checked the first 2 hard drives, which were playing up. One of them seemed to have  its power cable half hanging out. Since pushing it back in, both drives have been fine for hours.

---

> [!info] Original Published Date : *2005-03-17*
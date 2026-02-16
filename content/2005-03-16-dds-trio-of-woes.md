---
date: 2005-03-16T17:13:55.000Z
lastmod: 2005-03-16T17:13:55.000Z
title: DDS Trio of Woes
draft: false
slug: dds-trio-of-woes
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: DDS Trio of Woes
description: 
---

DDS (David&#8217;s Data Server) is in a spot of trouble. Actually 3 spots.

To recount: it has 4 hard drives, 1 floppy and no CD nor DVD. Linux and Windows are installed &#8211; on the first drive &#8211; and working. A boot menu &#8211; LILO &#8211; lets me boot either.

All seemed right. But then, 3 things went wrong in rapid succession.
[1]Linux / ran out of space

I run Debian Linux &#8211; Woody (latest, stable). During an Internet-based update of some software, the main (and only &#8216;user&#8217;) disk area became 100% full.

For the geeks, this is the / filesystem. Ouch. /usr, /var, etc etc are &#8216;within&#8217; this FS.

Mmm. Tried a few things and ended up deciding to squash-down the main Windows partition that shares the same physical disk. It&#8217;s got GB of free space as I&#8217;ve purge off most, but not all, of my Windows data. Then I could expand the / partition thing for Linux to use.
[2] Windows corruption due to partition error

In trying to solve [1] this happened. Midway through resizing (shrinking) Windows XP&#8217;s main C: drive, the partitioning software aborted. Crashed. Terminated.

Hard.

In a mild panic, I rebooted. Boot manager reappeared (phew). Default item of Linux started. And worked 100% okay. One down, one to go. Windows.

Now don&#8217;t forget, I know I haven&#8217;t got all my user-data off Windows yet.

So I rebooted, took the boot manager menu item for Windows. It started! Woo hoo.

Then it hard-crashed with a Blue Screen of Death. Windows is quite sick.

I spent the rest of the day trying everything I know, plus some. But she won&#8217;t boot Windows. The good news is that Linux can &#8216;see&#8217; the Windows partitions and they appear to be fine. But without a CD drive to try a recovery-install, things look, umm, challenging.
[3]Linux networking went out in sympathy

It decided to not talk to the LAN and/or Internet. Or talk to it very slowly or intermittently and with heaps of packet-errors. The Ethernet card seems to be either a cheapie or non-standard; it needed a download of a kernel module to (half) work. Mmm.

So from being happy about DDS I&#8217;m now in sad land. Lots of thinking to do.

---

> [!info] Original Published Date : *2005-03-16*
---
date: 2008-07-16T14:03:10.000Z
lastmod: 2008-07-16T14:03:10.000Z
title: Moved every bit of laptop's disk to a much bigger disk
draft: false
slug: moved-every-bit-of-laptops-disk-to-a-much-bigger-disk
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Moved every bit of laptop's disk to a much bigger disk
description: 
---

My dear old Dell laptop has served me well over the years. At the time the hard drive was average, I&#8217;d guess. 30 GB total. Of course today that&#8217;s rather small and the poor thing was getting close to full, with a few too many &#8220;C: drive nearly full&#8221; messages popping up.

So what to do?  The rest of it is fine.

I decided to buy a replacement hard disk. For like $77 I got a brand name 160 GB laptop IDE drive.

Rather than start again (copy all my data to a spare disk or PC, install the new disk, install Windows XP and all the drivers and updates and applications and fixes and settings and and and), I went for the uber-geek approach: clone the current hard drive, every bit of it, over to the new drive. And I did it with (legally) free software. 

Technically I copied three things:

1. The partition table (tiny)
2. The boot record (tiny)
3. The NTFS partition itself (big, the C: drive itself)

### The Basic Steps

I may give the step-by-step instructions in another post, but the executive summary goes like this:

- Booted the Laptop with a Live CD of Linux. I used [Knoppix](http://www.knoppix.net/), a Linux distribution, in basic Command Line mode (Mode 2). This boots a fantastic, powerful operating system, but it itself does not write to the hard drives, i.e. it totally runs in RAM. However,  Knoppix can still &#8216;see&#8217; the Laptop&#8217;s hardware, including the hard drive&#8230;.it can even copy and write to it (!).  Windows cannot copy itself to a new drive, whilst active.
- Configured Knoppix for networking on my LAN
- On my main Linux (Debian) PC configured the [NFS](http://en.wikipedia.org/wiki/Network_File_System) server, enabling the Knoppix Laptop to &#8216;directly&#8217; copy files to it
- Copied the above 3 items over using Knoppix commands:

- Partition Table (using *sfdisk*)
- Boot Record (via *dd*)
- The NTFS parition (using *ntfsclone*)

H2M_LI_HEADER ..to the Debian PC via NFS

For more on these last few steps, I used [this site](http://alma.ch/blogs/bahut/2005/04/cloning-xp-with-linux-and-ntfsclone.html) and [this one for ntfsclone](http://www.linux-ntfs.org/doku.php?id=ntfsclone).

If we stop and look now, I have a complete, bit-perfect image of the laptop&#8217;s hard drive &#8211; it only had one, the C: disk &#8211; stored on an external system, my Debian Linux PC.   

Now it was time to replace the hard drive with the new one and reverse the process:

- Following the Dell Manual, I removed the Laptop&#8217;s hard drive and put in the new one and restarted the Laptop.  The system found it, but &#8211; naturally &#8211; got an error saying it couldn&#8217;t boot from it. 
- So I booted the Laptop via the Knoppix CD and it too found the new drive; even reporting it as 160 GB. Sweet.
- Using sfdisk, dd and ntsfclone I copied the &#8216;image&#8217;  files back from the Debian PC, via the LAN, to the new, empty 160 GB disk in the Laptop.

*The laptop booted first time into XP with all my data and settings there just fine. Not a single error message!*

### Grow grow grow

As it was literally a bit copy, the Laptop happily reported a C: drive of 30 GB. And 130 GB unused. Not available as such, not as a D: drive&#8230;just sitting there empty. 

Easy to fix, simply &#8216;grow&#8217; the C: drive.  Again some (legally) free software called [Gparted](http://gparted.sourceforge.net/) to the rescue. Booted with that and via a GUI just dragged the size of the C: disk (technically the NTFS Partition) from 30 GB to 120 GB.  I wanted to leave a bit free for something else later on, beyond the scope of this Post.

It took a few minutes to do this. When I rebooted, XP correctly saw the disk had changed size and ran some (quick) tests on it. Another reboot and there it is.* My C: drive is now 120 GB and all my original data, programs, settings etc are still there*.

### Some things I learned

I didn&#8217;t know, but my Dell IDE drive had an adapter over most of the IDE connectors. This really confused me as the manual didn&#8217;t mention it.  Hence the new drive and old drive had different physical plugs and the new one wouldn&#8217;t initially work; the new drive didn&#8217;t ship with said adapter. In semi desperation I just tugged at the current drive&#8217;s connectors and the adapter slipped off.  Hence I learned of its existence 🙂

The first time I&#8217;ve used NFS and it was easy to use, but wasn&#8217;t very fast at all. Could be that the LAN adapters &#8211; at one or both ends &#8211; were only running at 100 MB, not 1000 MB.

I may have been able to **directly** copy the data from the old drive to the new drive, in situ. If I&#8217;d known about the IDE adapter thing and had a spare adapter. I have a IDE-to-USB2 adapter and it may have worked.

All in all, very happy indeed. Not something for the feint hearted, but I reckon it saved me hours, if not days of work.

Technorati Tags: [sfdisk](http://technorati.com/tags/sfdisk),[Knoppix](http://technorati.com/tags/Knoppix),[ntfsclone xp clone](http://technorati.com/tags/ntfsclone%20xp%20clone)

---

> [!info] Original Published Date : *2008-07-16*
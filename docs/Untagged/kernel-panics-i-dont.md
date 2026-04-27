---
date: 2005-03-18T07:34:41.000Z
lastmod: 2005-03-18T07:34:41.000Z
title: Kernel panics but I don't
draft: false
slug: kernel-panics-i-dont
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Kernel panics but I don't
description: 
---

As of about 6pm yesterday Windows had been recovered on DDS. But, from bitter experience, I know it arrogantly over-writes any other boot managers etc.

In my case XP would have clobbered the Linux Loader (LILO) that is used to start the Linux boot process. So Windows ensures that whilst Linux is left alone, you can&#8217;t actually start it nor use it.

Sure enough, tests with the boot manager GAG confirmed this.

To cut a long story short I had to get LILO back on. Took me ages. I did have my own Debian Recovery Diskette, but it failed to start properly.

I tried Knoppix Live CD boot and downloading another Debian recovery diskette image.  Nothing really worked.

By the way, after some quick trial and error, the command I was using to start the recovery &#8211; with the above media &#8211; was
`rescue root=/dev/hda3 3`

( This simply told the rescue system to use the main &#8211; root &#8211; filesystem located on  a disk called /dev/hda3. The final 3 isn&#8217;t important here.  This let me access my own Linux system okay, but didn&#8217;t quite fix things. )

Went back to the Debian install CD (which I should have used in the first place). Same command and got into my Linux system. Re-ran the LILO command to establish it as the boot manager (bye GAG)

A reboot. There&#8217;s LILO. Great!  Took the option to boot Linux. CRASH! **A Kernel Panic **&#8211; a very serious error &#8211; saying it *couldn&#8217;t mount root on 3:4*

A quick Google found that 3:4 was the 4th partition on the 1st drive. Hang on, what&#8217;s it doing trying to use the 4th? The rescue commands were successfully using hda3 being the 3rd.

Another reboot via the install CD. Another rescue root= etc. Bingo. The lilo.conf file was trying to mount root against /dev/hda4.    Linux couldn&#8217;t find the kernel.  It had lost its brains.

Why? Well a look at the partitions (fdisk) showed a new partition on this first drive. Probably the &#8216;recovered&#8217; Windows one being usable again. So the allocation of hd*n* numbers had changed. I checked the other ones to make sure they matched for LILO and the main fstab. All okay.

Now I know why my Recovery Diskette failed. It even said it was using /dev/hda4 too!

A confident reboot followed. There&#8217;s LILO, with menu items for Linux and Windows (just the one, the Old one &#8211; that&#8217;s all I&#8217;d configured in LILO).  One menu selection later there&#8217;s a Debian Linux login prompt.  I was back.

---

> [!info] Original Published Date : *2005-03-18*
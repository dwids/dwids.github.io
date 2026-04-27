---
date: 2005-03-22T20:42:06.000Z
lastmod: 2005-03-22T20:42:06.000Z
title: r8169.o and the kernel headers
draft: false
slug: r8169o-and-the-kernel-headers
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: r8169.o and the kernel headers
description: 
---

As I had put the old (unstable?) Ethernet card back into the spare PC, I &#8216;d predicted I&#8217;d simply transferred the problem from one box to another. Yep, sure had. Linux had the same symptoms using the natsemi driver on this card &#8211; poor connection and 50% packet loss.

So, I went and and brought a Surecom Gigabit card for under $40. It wasn&#8217;t a no-name clone, so it should be okay with Linux. But it did take me HOURS to get working. About 4, I&#8217;d tip.

The makers had included a diskette with Linux drivers. Actualy the SOURCE for the drivers. And there the fun starts.  I had to compile them.

It compiled okay, but then refused to install. Debian said &#8220;kernel-module version mismatch&#8221;  I was running (according to uname -r) 2.4.18-bf2.4 , but had apparently compiled for a &#8216;different&#8217; version of the kernel; 2.4.18

After much reading and Googling I found:

1) The -bf2.4 is like a text-flag to allow different flavours of the same version (2.4.18) kernel to be distributed

2) The compile process, actually the makefile at the start, wasn&#8217;t fully aware of this -bf2.4 thing. Seems like it was determining I was on plain old 2.4.18

3) I should install the kernel-headers package for 2.4.18-bf2.4

4) I then &#8216;hacked&#8217; (that is, edited) the makefile to explicitly point to the headers installed by 3)

The make/compile worked okay. I copied the resulting r8169.o file over to the correct location, buried under /lib/modules

And it half worked. It came active (insmod r8169) but then it said it searched the ISA bus and couldn&#8217;t find any cards.

I checked the website of the maker for updated Linux drivers. Thinking I&#8217;d found them I did the above again with the new &#8211; and different named &#8211; driver source. Same error!

A close look at the side of the cards original box revealed these &#8216;newer&#8217; drivers were not actually for my card. Bit of a mis-labelling on the front of the box.

So time to look at hardware.

Yep, sure enough, the card wasn&#8217;t seated properly in the slot   🙁

A reboot later and the insmod r8169 worked. Aliased that to eth0 in modules.conf and away we go. Linux kindly &#8216;remembered&#8217; the correct IP address etc from the previous eth0 configuration. Thus far it&#8217;s been MUCH more stable.

The above is the cut down version of what happened. I had been down all sorts of rabbit holes, including installing the kernel source, then unzipping it and untarring it. I gotta say, it&#8217;s a lot of mucking about for one 17 kb file;  that&#8217;s all r8169.o was. I just couldn&#8217;t find a version compiled for my kernel anywhere.  So had to do it by hand.

This Debian kernel (2.4.18) is quite &#8216;back level&#8217; relative to other distributions. I&#8217;ve since found out that the above r8169 module has been in the Linux kernel since 2.4.21   For comparison Fedora Core 3 is on a 2.6 level kernel.  I&#8217;m not whinging, I chose Debian with my eyes open  

---

> [!info] Original Published Date : *2005-03-22*
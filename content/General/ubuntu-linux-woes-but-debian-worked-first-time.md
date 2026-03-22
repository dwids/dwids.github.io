---
date: 2008-06-16T08:21:03.000Z
lastmod: 2008-06-16T08:21:03.000Z
title: "Ubuntu Linux woes: but Debian worked first time"
draft: false
slug: ubuntu-linux-woes-but-debian-worked-first-time
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Ubuntu Linux woes: but Debian worked first time"
description: 
---

I&#8217;ve installed Ubuntu Linux, oh, about 6 times I&#8217;d guess. Pretty much flawless each time. But not recently. I wanted to put a new 320 GB disk into a very old PC. Previously this had a much smaller disk &#8211; it can only support one drive &#8211; and it too was running Ubuntu.

So at 4pm I plugged in the drive and off it went installing the latest Ubuntu. I gave up nearly 5 hours later. It spent what seemed like 2 hours doing (waiting for?) some sort of language thing. . What a pain. All I wanted was a simple, CLI &#8211; that means Command Line Interface (no Windowed GUI) server.  I then tried another way and it finally installed&#8230;but only after waiting for what seems like an hour for a linux kernel to install.

Then it totally failed on first boot. An error about the disk being too big for the way Ubuntu was installed. And the system is so old you can&#8217;t update the BIOS for such bigger drives.

The web solution: re-install and manually create a /boot partition at the physical start of the disk. I wasn&#8217;t going to wait another few hours, so I gave up on Ubuntu for this &#8216;simple&#8217; install.  Maybe Ubuntu isn&#8217;t really designed for this sort of thing and therefore I should share part of the blame.

Following morning it was back to Ubuntu&#8217;s older, wiser brother, Debian Linux. Opted for network install ; my ISP allows &#8216;free&#8217; access to their Debian archives in terms of monthly usage quota. Within about 1 hour, I had a booted CLI system. Not long after that I had SAMBA installed and was backing up the Windows PC&#8217;s files to my new Debian server&#8230;.

---

> [!info] Original Published Date : *2008-06-16*
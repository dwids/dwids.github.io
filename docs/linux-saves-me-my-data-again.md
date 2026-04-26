---
date: 2004-09-16T14:58:35.000Z
lastmod: 2004-09-16T14:58:35.000Z
title: Linux saves me (my data) again.
draft: false
slug: linux-saves-me-my-data-again
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Linux saves me (my data) again.
description: 
---

This time it was 50/50 blame. Half that wonderful Windows XP&#8217;s fault and half mine. As a consequence of my main PC&#8217;s second hard drive deciding to play up again (and XP not having the brains to accept it and carry on), I copied key data files over to my laptop and was using that as my main PC.

A week or two later the laptop was whinging like an interstate AFL club about it&#8217;s hard drive being full. So I put Mandrake 10 Linux onto my old and spare 166 Mhz PC in the back room.  Got the Samba client working &#8211; so Linux could &#8216;see&#8217; the laptops Windows shared drives over a network and copied my data over. It was like 3 GB, but as 166 had a 100 speed Ethernet card, that went quite quickly.

Another week goes by and I get to pondering why Mandrake 10 Linux on the 166 will only boot in console mode; viz no X-Windows GUI. I then realise that my old graphics chip has real problems with  X version 4, so &#8211; as an academic exercise &#8211; I set myself the mission of getting it working. Basically I was never going to work properly. Only in accelerated mode. And if anyone has tried to use an GUI in this way, snoooooooooorrrrrrrrrrrrrrreeeeeeeeeeeee.

Next tack was to get my old faithful CD set of Debian Linux 3 (Woody). I remembered that this would let me put on X version 3, which it eventually did. A nice GUI Debian replaced Mandrake. Then it hit me.  In my GUI-induced frenzy, I&#8217;d overwritten the 3 GB of data I&#8217;d copied over from the laptop.

It&#8217;s a sickening feeling as you clutch at straws and ponder if Norton Unerase can possibly help. Dream on. Still grasping at the straw, I decided to leave the 166 as it was and boot with a &#8220;live&#8221; linux CD &#8211; my fave being Knoppix 3.3.  I knew that this baby could autodetect any usable drives or partitions and give me a full linux GUI, yet not write a single bit to the hard drive. So I could forensically examine the disk drives without hurting them.

Of course running only in RAM means things are much slower than normal, so Knoppix takes minutes to present you with the GUI. But straight away my heart leapt. There were two &#8216;drives&#8217;  visible. One was clearly the one with Debian on it, but it was only like 5 GB; clearly a fraction of the total 60 GB capacity. The second drive just begged for me to click on its icon, which I did.  Knoppix clicked and whirred and made the drive available; it mounted it. Nervously I opened this new directory and held my breath&#8230;

All 3 GB of laptop backup data was there smiling at me. Not only that, but I could even use the files; clicking on a PDF showed me it&#8217;s contents in Acrobat Reader. So the files were real and not just a dummy directory listing.  Debian had been so polite and NOT overwritten the &#8216;old&#8217; Mandrake data!

I made a note of the drive&#8217;s name /dev/hda6/ and rebooted into the much faster Debian linux. A quick command later and &#8211; being careful to make it read-only &#8211; I had that drive visible and workable in my main linux system. I&#8217;m sure that if I&#8217;d read up, I could have got Debian to do the hardware detect to find the drives. But I was too busy both kicking myself for being so silly and kissing myself for being so clever to use linux.

---

> [!info] Original Published Date : *2004-09-16*
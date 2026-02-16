---
date: 2006-09-14T18:45:30.000Z
lastmod: 2006-09-14T18:45:30.000Z
title: AVC and AAC compression timings for 1 hour DVD movie (black and white)
draft: false
slug: compressing-timings-for-1-hour-dvd-movie-black-and-white
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: AVC and AAC compression timings for 1 hour DVD movie (black and white)
description: 
---

Using [*MeGUI *](http://www.videohelp.com/tools?tool=MeGUI)I took just over 1 hour of DVD and compressed it down via the &#8216;state of the art&#8217; compression schemes:

- Video AVC (aka H.264 or MPEG4 Part 10) using the [*CE_Highprofile*](http://forum.doom9.org/showthread.php?t=101813) at 1000 kbps
- Audio AAC using the FAAC 128 kbps ABR profile

The 1 hour, 5minute movie took over 5 hours to compress on a Pentium 4   3 GHz. This VOB had already been decrypted; so add another 15 mins for that step. Here&#8217;s the breakdown of the MeGUI timings:

- Indexing the VOB to make a D2V file:  **2 mins**
- AAC audio:**   8 mins**
- AVC pass 1 of 2:   **1 hour 10 mins**
- AVC pass 2 of 2:   **4 hours 5 mins**
- Muxing of AAC and AVC to final MP4 file:  **3 mins**

A great thing about MeGUI is that all of the above is done without user interaction; via the One Click Encoding option.  Pass 1 reported **23 fps**, Pass 2 reported **6.7 fps**

Quality looks excellent on final mp4 file.  It started at noon and was done just after 5:25 pm.

Size comparison for this 1 hour 5 minute movie:

- Original decrypted VOB is:  3.92 GB
- Final mp4 is:  534 MB

But, to be fair, VOB has multiple soundtracks. Also this is an old black and white movie. Will try colour when I have another 5 hours to spare 🙂

---

> [!info] Original Published Date : *2006-09-14*
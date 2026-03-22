---
date: 2005-09-26T13:52:09.000Z
lastmod: 2005-09-26T13:52:09.000Z
title: "Digital TV to XviD : 30,000 foot view"
draft: false
slug: digital-tv-to-xvid-30000-foot-view-2
tags: ["entertainment","technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Digital TV to XviD : 30,000 foot view"
description: 
---

DVB (digital TV) recordings, as I&#8217;ve said before, are cool but fat. I squash them down to AVI files containing XviD (MPEG4) video and MP3 audio. Yes, THAT MP3. Still an excellent audio compression scheme.

One day I&#8217;m going to write a full on &#8216;how to&#8217; but here&#8217;s a summary from 10,000 meters.

All software is for Windows. I think all are open source; they certainly are free.  [Doom9 ](http://www.doom9.org/index.html?/software.htm)has most of these applications.

* Edit out the commercials and other stuff, if needed or desired, with **MPEG2Schnitt**

* Take this (new and edited) mpeg2 file and demux it into separate video and audio files. Whilst this can be done automatically as part of the next step, I&#8217;ve discovered it&#8217;s best to do it manually with the easy-to-use **ProjectX**.

* Open up the mpv file created by ProjectX in the excellent **DVX **front end. This brings together a number of tools, including the Avisynth frameserver, XviD codec, MP3 (LAME) codec and Virtualdub to do the final work. The initial configuring of DVX is beyond the scope of this message, but there&#8217;s plenty of documents out there.

* I then set the required quality (bit rate) &#8211; usually between 750 (for hardly-anything-in-the-frame-moving chat shows) and 1800 (for fast moving sports etc). Then the frame size (either 576&#215;320 or 608&#215;336) and set it off.

Takes about 40 mins all up for a 30 minute show, including zapping ads. Probably closer to 30 mins in no zap mode.

---

> [!info] Original Published Date : *2005-09-26*
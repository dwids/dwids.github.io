---
date: 2005-09-26T17:43:45.000Z
lastmod: 2005-09-26T17:43:45.000Z
title: How big is one minute of TV?
draft: false
slug: how-big-is-one-minute-of-tv
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: How big is one minute of TV?
description: 
---

In other words, how much disk space does it take?

I did some samples using a fast moving show. It was a  standard definition recording, captured direct as the MEPG2 data. I then converted it to Raw, uncompressed frames, then did two MPEG4 compressions; one average quality, the other very good. Both used MP3 audio.  The second figure is the percentage relative to the base MPEG2 recording.

 So one minute of digital TV is:
`Base Recording (MPEG2):	     50 MB    - 100 %

Decompressed to raw frames:  860 MB   - 1720 %

MPEG4 (XviD average) + MP3:      6 MB   - 12 %

MPEG4 (XviD v.good ) + MP3:    13 MB   - 26 %`

Most people, me included,  starting off with frame servers cannot work out why their initial TV recording is  500 MB TV and yet they end up blowing it right up to over 8 GB.

The answer is that frame servers put out raw frames. They might read in a compressed (MPEG2) file, but &#8211; as per the above table &#8211;  they are going to throw out a raw data stream thats about 17 times larger than the one you feed it.

Anyway I can work out some rough storage used per hour for the different types:
**Approx Rates per hour (GB)**
`Base Recording (MPEG2):	     3.0

Decompressed to raw frames:  50.0

MPEG4 (XviD average) + MP3: 0.35

MPEG4 (XviD v.good) + MP3:     0.76 `

The message is: yes, use a frame server, but ensure your dubber (say Virtualdub) has some sort of compression enabled. The default is **none** and hence the blow ups in file sizes. XviD and MP3 work well.

---

> [!info] Original Published Date : *2005-09-26*
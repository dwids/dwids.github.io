---
date: 2016-07-07T10:33:22.000Z
lastmod: 2024-11-22T05:59:50.000Z
title: Converting TV Recordings (PC) to playable
draft: false
slug: converting-tv-recordings-pc-to-playable

cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Converting TV Recordings (PC) to playable
description: 
---

I’ve known for years how to convert TV recordings (“mpeg-2”) to PC files (avi, mkv).  But yesterday I dived back in and learnt a few things:

1. My tiny Raspberry Pi media player struggles with raw TV recording playback
2. Windows batch file programming has a strange way of handling “ things in names

### The Underlying Problem:

My main PVR (hard disk recorder) in the TV room is great. But it’s developed issues with Channel 10 recordings. Either the tuner or the aerial/cable struggle and the live picture breaks up and the recording stops or gets corrupt. Thus my weekly dose of *Have You Been Paying Attention?* suffers.

My PC room also has a TV aerial socket, but unused for 5+ years. I hunted down my USB TV stick and plugged it all together. I was still licensed for the excellent *DVBviewer* software. Amazingly it all worked first time, both live viewing and recording.

I then tried to play back the .ts (mpeg-2) raw recordings on the Raspberry Pi media centre (Kodi). It struggled a bit and the CPU was high.

### Prepare, Convert then Automate

The upshot is I spent a while re-learning how to properly **prepare** then **convert** the large .ts file to a smaller .mp4 file (with AVC video and AAC audio).  Then finally **automate** the whole thing.
**Prepare**: The raw .ts file usually has hiccups as bits go missing and timecodes go out of sync etc. So I run it through the free Java program *Project-X* to sort these out and re-mux back into a new, ‘clean’ .mpg file
**Convert**: I then encode this .mpg file into a much smaller mkv file, with the free *ffmpeg* converter.
**Automate**: Both have command line options, so I wrote a script (Windows batch file) to automate and hooked it all up to enable ‘drag and drop’ via the magical *Drop-It* free program.

It kept failing!  Turns out that there was a hiccup with filenames “That_have spaces in_them like this.ts”   &#8211; when you pass them as .bat variable to programs like *ffmpeg*. The upshot, I learnt, was you have to use an obscure batch file command to remove the “ from the filenames (which have to be there to pass the whole filename to the .bat file).  It involves this line to reformat the variable containing the filename:

> set fileName=%fileName:&#8221;=%

News to me.   But it worked.  All good now. One drag and drop and it’s done.

---

> [!info] Original Published Date : *2016-07-07*
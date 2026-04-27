---
date: 2005-09-26T13:23:21.000Z
lastmod: 2005-09-26T13:23:21.000Z
title: Video Conversion - Frame Serving 101
draft: false
slug: video-conversion-frame-serving-101
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Video Conversion - Frame Serving 101
description: 
---

Have really got into the video conversion is a big way over the last few months. Main reason is I bought a set top box for the PC. It can record both Standard and High Definition video. As an aside, I&#8217;ve previously commented on [how Australia got this so wrong](__GHOST_URL__/?p=49).

Anyway recording digital TV is cool. The pictures are wide screen, clear and literally DVD quality (even in Standard Def mode!). But they eat disk space at the rate of 3 to 4 GB per hour.

Digital TV (and DVDs) both use variations on the same compression scheme; the excellent MPEG2.  A newer standard is MPEG4, with a common implementation called XviD. I can use XviD to squash down my recording to about 10% of their original size with only a slight loss in quality.

To make this go quicker, I&#8217;ve recently hit upon frame serving.

I found that with nearly every form of video conversion, a Frameserver makes it run nearly twice as fast. I can do a two-pass XviD transcode of a 30 min show in about 30 mins (total). P4 3 GHz.

Why? Well MPEG2 is one form of compression and XviD (MPEG4) is another one. If you use some tools they try and directly convert; compressed &#8211;> compressed. It can take over 1 hour for the 2 passes of the same show (above).

A Frameserver decompresses (&#8220;plays&#8221;) the MPEG2 file, but &#8216;inside&#8217; the computer. The good old fashioned uncompressed video frames are then fed (served) one-at-a-time to whatever you want; your PC media player, the XviD codec (via Virtualdub) etc.

The Frameserver can also do stuff to the frames before the next application sees them; shrink the frames, crop them or do all sorts of clean up via filters etc etc.

XviD really zooms along when compressing these raw frames. I read it is optimised for this.

Best Frameserver for Windows is the free and open source [Avisynth](http://www.avisynth.org/). You create text file &#8211; a script &#8211; which has instructions telling Avisynth what to do to the video and audio.

Below is a simple Avisynth script to resize an avi file. Once Avisynth is installed you should be open these directly in your Media Player. The files should have extensions of avs :
`# a comment  this file is called myresize.avs

AVISource("C:videosre-encoded_AVImymovie.avi")

LanczosResize(592,336)`

And a more complex one. Does cropping, resizing, removing some annoying dots in the images, sharpens, converts to &#8220;black and white&#8221; (greyscale) and adds a fixed subtitle:
`# mygreyscale.avs

AVISource("C:videosre-encoded_AVImymovie.avi")

Crop(6,2,-10,-6)

LanczosResize(592,336)

undot()

MSharpen(15, 100, true, false, false)

GreyScale()

Subtitle("Copyright me 2005",font="Arial")`

---

> [!info] Original Published Date : *2005-09-26*
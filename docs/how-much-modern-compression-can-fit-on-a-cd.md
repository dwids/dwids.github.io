---
date: 2006-09-18T19:46:27.000Z
lastmod: 2006-09-18T19:46:27.000Z
title: How much 'modern' movie compression can fit on a CD?
draft: false
slug: how-much-modern-compression-can-fit-on-a-cd
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: How much 'modern' movie compression can fit on a CD?
description: 
---

If you wanted to compress a movie (say a DVD) down to fit on a CD and use modern compression schemes; yes AVC (via the X264 codec) and AAC for the audio&#8230;what sort of length movie could you use and still get good results?

Assume

- 1 CD is 700 MB
- The AAC audio is 128 kbps (average bit rate)

Knowing the target file size and movie length, it&#8217;s possible to work out the required target **bit rate** of the video stream to fill the 700 MB CD. Here&#8217;s the required bitrate as a function of movie length:
1 hour movie need to set it at  1501 kbps

1.5 hour   957

2 hour   685

The bit rate is a good indicator of quality too. So a 1 hour movie would be great quality, 90 mins very good indeed, but by 2 hours you would probably see some artefacts.

Note: the above calculations do take into account the audio track and the (small) overhead of the mp4 or mkv container.

The above quality is only based on the data rate. Another factor is the trade-off between compression time and quality; they are almost in a linear relationship.  For the 2 hour one you could use one of the &#8216;1 Pass&#8217; [profiles](http://forum.doom9.org/showthread.php?t=101813) and get the movie to fit on the CD and take only about 2.5 hours to do so, **but** the quality could be a wee bit dodgy. 

You could increase this quality by using one of the &#8216;slower&#8217; (HQ or CE) encoding profiles as per my other posts. I&#8217;d suggest if you left it running over night, you could compress down a 2 hour film at that data rate (685) and get quite good quality. Would be interesting to try.

---

> [!info] Original Published Date : *2006-09-18*
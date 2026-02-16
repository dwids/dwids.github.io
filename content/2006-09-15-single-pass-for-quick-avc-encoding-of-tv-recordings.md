---
date: 2006-09-15T10:11:50.000Z
lastmod: 2006-09-15T10:11:50.000Z
title: Single pass for quick AVC encoding of TV recordings
draft: false
slug: single-pass-for-quick-avc-encoding-of-tv-recordings
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Single pass for quick AVC encoding of TV recordings
description: 
---

One of the benefits of AVC is the ability to adapt the compression to suit the target device or quality. So you can use a very high quality set of settings and take 19 hours to compress a 2 hour movie. By the way even these  are not the highest quality (read: slowest) settings.

The good people over at the [doom9 forum](http://forum.doom9.org/showthread.php?t=101813) have already created a number of Profiles which you load into MeGUI and then choose from a drop down list. They range from the above multi-pass through to &#8221; I just need an okay compression&#8221; quick single pass.

Even within such single passes they offer at least 3 profiles, balancing speed of encoding against quality:

**1P-Maxspeed**: Everything disabled for max encoding speed (good for live capturing).
**1P-Intermediate**: Intermediate settings for average speed and final quality.
**1P-Goodquality**: Settings for good quality with 1 pass.

(Source: above doom9 forum post)

You can also use these as a basis and create your own profiles too.

I did a quick series of tests on a 2 minute DVD sample (**video **only) to confirm these three &#8211; unchanged from defaults &#8211; work as designed :	

- **1P-Maxspeed**: About 2 mins	
- **1P-Intermediate**: About 5 mins	
- **1P-Goodquality**: About 8.5 mins

On balance, I&#8217;d be aiming for **1P-Intermediate**. If it&#8217;s a show that has little or no movement &#8211; say, a chat or comedy show &#8211; I&#8217;d probably copy that profile and drop the data rate to say 700kpbs from the default of 1000.

---

> [!info] Original Published Date : *2006-09-15*
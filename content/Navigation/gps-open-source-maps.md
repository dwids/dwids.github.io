---
date: 2008-07-29T08:45:16.000Z
lastmod: 2008-07-29T08:45:16.000Z
title: "GPS : Open Source Maps"
draft: false
slug: gps-open-source-maps
tags: ["navigation"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "GPS : Open Source Maps"
description: 
---

Having finally [got a full GPS](__GHOST_URL__/2008/07/28/got-a-gps-at-last/) at last, it was time to get some maps. The unit very quickly found exactly where it was on Earth ; and I mean *quickly*. But the basic map that came with it, only said it was near Melbourne. Nothing like street level.  It could tell me my latitude and longitude as well as log it when I went for a walk around the block. In fact I did this, converted it to Google Earth format and was able to see how accurate it was, particularly compared to the GPS in the HTC mobile phone.

Anyway time for some maps. I do **not** want Turn by Turn street directions. In fact the GPS is set to be in &#8220;off road&#8221; map mode which means just get me from Point A to Point B, don&#8217;t worry about keeping me on the Roads. So it&#8217;s more for bushwalking.

Of course there are commercial maps out there and I may very well end up buying them. However I soon discovered the free, open-source type maps; the [Open Street Map](http://www.osmaustralia.org/index.php) (OSM). Most GPS, including mine, cannot directly import the OSM data.  So here&#8217;s how I got it to work:

- You can run your own extractions and conversions. However [some good people](http://www.osmaustralia.org/garmin.php) regularly extract and convert (OSM) data for given States and GPS.
- I grabbed their Victoria one (*VIC.img.zip*).  Unzipped it (*VIC.img*) 
- My GPS cannot directly import these (older?) format files, so I grabbed the free version of [sendmap20](http://www.cgpsmapper.com/download/sendmap20.zip) and installed it 
- The GPS only stores maps on a microSD card, so installed that 
- Ran sendmap20.exe and dragged *VIC.img* onto it&#8230;then copied it to the GPS unit 

Worked first time, now have nearly 6 MB map of Victoria.  It shows a fair bit of data.  I loaded up the log I did yesterday (the walk around the block) and it showed the streets where I had walked, but didn&#8217;t name them all. However, I&#8217;m very happy with it so far.  Will be interesting to take it off on a real bushwalk and see how it goes.

Technorati Tags: [OpenStreetMap](http://technorati.com/tags/OpenStreetMap),[OSM](http://technorati.com/tags/OSM),[OSMAustralia](http://technorati.com/tags/OSMAustralia)

---

> [!info] Original Published Date : *2008-07-29*
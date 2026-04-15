---
date: 2008-05-16T10:36:00.000Z
lastmod: 2008-05-16T10:36:00.000Z
title: First GPS logging with new phone - NMEA sentence
draft: false
slug: first-gps-logging-with-new-phone-nmea-sentence
tags: ["navigation","gps"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: First GPS logging with new phone - NMEA sentence
description: 
---

Been trying out some GPS logging software with the new HTC p3600i PDA-Phone. This unit has a built-in GPS, but the supplied software was way over-kill for me. All colour maps and turn-here voice directions. I just want a simple application to tell me where I am as a few lines of text, plus log it for later use. Specifically to convert to Google Earth format and look at my bush-walk in 3D.
The software I found produces the generic NMEA format messages. Here’s a sample:

```
  $GPRMC,001902.0,A,3751.782669,S,14454.073719,E,1.1,301.2,160508,,,A*7C
```


A number of sites have this format explained, but I can pretty much decode some elements right off the bat:

`001902` is the time in UTC/GMT **00:19:02** with `160508` being the UTC/GMT date  (hence Melbourne time/date of +10 hours so `10:19am and 2 seconds on 16th May 2008`).  Correct!  I see a Y2K thingy 😄.

`3751.782..,S`  etc jumps out at me as very much Melbourne’s (well, Williamstown’s) Latitude and S = South. It’s actually 37 degrees etc, so this must be a *decimal* version.   So 30.50 degrees is 30° 30' 0".

`14454…E is` our Longitude, East. Again 144.54... decimal degrees.

Easy!

---

> [!info] Original Published Date : *2008-05-16*
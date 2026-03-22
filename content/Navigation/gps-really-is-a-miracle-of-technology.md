---
date: 2019-12-05T10:40:15.000Z
lastmod: 2019-12-05T10:40:15.000Z
title: GPS really is a miracle of technology
draft: false
slug: gps-really-is-a-miracle-of-technology
tags: ["navigation"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: GPS really is a miracle of technology
description: 
---

I only vaguely understood how GPS worked, including that Relativity was involved. I was amazed to read the details in a recent edition of* Silicon Chip* [1]  : 

Firstly, unlike Pay TV and related, the GPS satellites are not in a *geosynchronous* orbit. Otherwise they couldn&#8217;t &#8216;see&#8217; the whole Earth. So they move relative to us here on the surface.

As they use radio to measure distance, the speed of light kicks in.  It follows that if the clocks in the satellite and GPS unit/phone are out by just one nanosecond (**one billionth of a second**), navigation is out by about **30 cm**.  As the article says, that’s how far light moves in that time. 

**Special Relativity** must be taken into account.  The satellite is moving at ~ 14,000 km/h compared to your GPS unit on Earth. Due to this, time dilation occurs on the satellite; it&#8217;s clocks run more slowly every day compared to Earth&#8217;s.  That alone would lead to a navigation error of 2.1 km being added every day.

**General Relativity** is also taken account.  The Earth is huge and distorts space-time near it.  The closer you are to Earth, the more time slows down. The satellites are further away and so this impact is less compared to on us on the surface. So, we see the satellite’s clock running **faster**every day compared to us. BTW, this is by a greater amount than due to Special Relativity, so they don’t balance out.

If both are ignored, the navigation error would increase by** over 11 km** every day, making the system totally unusable. 

Even the signal delay in the Troposphere layer of the atmosphere causes a 2 metre navigation error.

Detailed maths is used to ‘undo’ these ‘errors’ – take them into account – during every GPS reading.   Here’s a sample:

[![image](38d77-image_thumb.png)](https://dwids.wordpress.com2020/03/5b82d-image.png)

Source  [1]

The values &#8211; *a, t, e, E*, etc &#8211; are provided by the GPS signal and your unit/phone does the above calculations.  After all is said and done, your position is shown to you, accurate to within a few meters. And in 3 dimensions (latitude, longitude and height) in a car doing 100 km/h.  ![Smile](87aab-wlemoticon-smile.png) 

### Sources

[1] *Silicon Chip* magazine.  November 2019.   Article:* A Look at GNSS Systems* by Dr David Maddison. [http://www.siliconchip.com.au/Issue/2019/November/A+look+at+SatNav+systems%3A+how+do+they+work%3F?res=nonflash](http://www.siliconchip.com.au/Issue/2019/November/A+look+at+SatNav+systems%3A+how+do+they+work%3F?res=nonflash)

---

> [!info] Original Published Date : *2019-12-05*
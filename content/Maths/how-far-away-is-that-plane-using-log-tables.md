---
date: 2017-12-09T16:50:05.000Z
lastmod: 2017-12-09T16:50:05.000Z
title: How far away is that plane? Using Log tables ...
draft: false
slug: how-far-away-is-that-plane-using-log-tables
tags: ["maths"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: How far away is that plane? Using Log tables ...
description: 
---

Today I took this phone snapshot of a great plane trail. It was *about* 3pm, looking *about* West.  

![[515dd-img_20171209_150219.jpg]]

A quick check[^1] showed it was **about** 12km up. I&#8217;d guess it was **about** 30 degrees above the horizon. I wondered how far away it was ; meaning what point on the Earth was it directly over when I took this?  So, time for some olde world maths. First - of course - draw it:

![](9d9d6-ss.20171209.162302.jpg)

I need to find **x**, the distance in km. Time to go really old school and use logarithms[^2]  aka *logs.*


$$
x = \frac{12}{\tan(30°)}
$$
I'm *dividing** so I need to ***subtract*** the logs:   
$$
\log(x) = \log(12) - \log(\tan(30°))
$$

Off to the PDF of the Formulas and Tables book I found online from 1968 🙂

    log(x) = log(12) - log(tan 30 degrees)
    log(x) = 1.0792 - (9.7614 - 10.0000)     
    # that's the way the book said to do it for log(tan x) ;  [value in table - 10.0000]
    log(x) = 1.0792 - (-0.2386)
    log(x) = 1.0792 +   0.2386)
    log(x) = 1.3178
    Antilog(.3178) = 2075 + 4 = 2079
    
Now, the first 1 in my 1.3178 means I have (1+1) = **2 digits** before the decimal in my final answer.

So it is therefore: **20.79 km**

Crosscheck with the very modern Flightaware website[^3] which said that at 15:02 (when I took the photo), the flight was at Latitude and Longitude:

Sat 15:02:23    -37.8623    144.6534

So off to Google Earth, draw that point and a point for me in Williamstown. Finally, get Google Earth to measure the ground distance:

![](6a981-ss.20171209.160411.jpg)

With the result being **21.39** km.  Not bad. Not bad at all.


#### References:

[^1]: FlightRadar24 app on Android used. BTW this was QF64 from Johannesburg to Sydney.

[^2]: I have re-discovered how to do Logarithms as part of earlier exercise. This was involving studying (trying to recreate)  calculations which were part of an 1860s gold claim dispute at Walhalla. Old Mate, back then, was clearly using them. I myself had been taught them in the mid 1970s, then forgot all about them as calculators took over.

[^3]: http://flightaware.com/live/flight/QFA64/history/20171208/1650Z/FAOR/YSSY/tracklog


> [!info] Original Published Date : *2017-12-09*
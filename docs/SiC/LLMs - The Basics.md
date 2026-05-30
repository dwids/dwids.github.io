
---
title: "Large Language Models - The Basics"
draft: true
tags:
  - ai
  - llm
description: "change me"
---

Let's talk about the weather

So currently in Melbourne it's 14° C.  At 9am on Tuesday.   I can write that as a simple, single value

$$
14
$$

In maths this *single* item is called a **Scalar**

How about the current Temperature at the same time for the last week:

$$[20, 18, 16, 15, 17, 13, 14]$$

This is called a **Vector**. I can ask for the nth element (ie n=7 is today...that final 14)

So along comes a weather scientist - a meteorologist. She says "great start, BUT..."

> "..I really need the exact location of that first reading you gave me, the 14"

Mmm, okay that would be the Longitude and Latitude of where I took the measurement. We'll call them $x$ (Long), $y$ (Lat) and $c$ (temp in degrees C).  So the *single* value now becomes

 $$ 
(x, y, c) 
$$ 

$$
eg. (144.9631,37.8136,14)
$$


So I need 3 values to have a 'unique' data point.  I could have the similar values for a different Long and Lat.   So I can visualise this as a flat grid (long and lat) of the suburbs around Melbourne and each point has a temp $c$  Like a map. I could colour each point, 'hotter' (15 to 20c) = red, colder (less than 15) = 'blue'. Or a range of colours.

### But then..the mission gets taller

Our friendly meteorologist takes that data and has think about it.  Back comes the nice email:

> "Great, but the computer model we are developing needs to look at the weather in 3D. So each point needs a height"


No worries. We take samples at each point at 100 metres, 200 metres etc. We'll call that **z**. So we have 4 points per sample


$(x, y, z, c)$ 

$(144.9631,37.8136,100, 14)$  *Melbourne CBD, **100** Meters up*
$(144.9631,37.8136,200, 12)$  *Melbourne CBD, **200** Meters up*


I can still picture this as a 'point cloud in 3D' with each point having a temp (c), but harder to colour on a single, flat printout!  Need a 3D model I can zoom in and out of.

### Time runs ~~out~~...in

The computer model, to predict the weather, get's smarter. And our phone rings again

> We need to see how things change over **time**.  Any chance you could add that in?


So, I reply: "How about $t$ for time?"

An aside: we can - and do - use a single  number for a given **date** and **time**. There are many agreed named 'systems' to do this.  One might be `seconds from midnight  bw Dec 31 and Jan 01 in 1900`. So, one minute into Jan 1st, 1900 is **60**, one hour is **3600**. These numbers are quite large.

And so our individual sample values become:

$(x, y, z, t, c)$

$(144.9631,37.8136,100, 1601821, 14)$  *Melbourne CBD, 100 Meters up at 09:48 on* **May 27th 2026***

Here's where we can no longer picture this in a single diagram. There are 5 values per point. It's sort of like a 5 dimensional thingy!  

What we can do is take a 'slice at a given time'.  We set $t$ to be a given value - say, 1601766 and get the software to return  'only' $(x, y, z, c)$ values for that fixed $t$ value. That resulting filtered data - as per above - is one we can visualise.

### Into the 6th and 7th and..

You can probably guess where this is going. The weather prediction model get's more sophisticated.  We need to add in Humidity $h$ and the Air Pressure $p$ 

$(x, y, z, t, c, h, p)$

This example seems complex, but it's not really. For a given  `time and place` $(x,y,z,t)$ it will return a list (vector) of simple values `temperature, humidy and pressure`  $(c, h, p)$



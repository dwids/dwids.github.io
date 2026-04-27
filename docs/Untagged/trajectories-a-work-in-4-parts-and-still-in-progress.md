---
date: 2020-05-08T21:08:03.000Z
lastmod: 2024-11-22T05:58:56.000Z
title: "Trajectories: A Work In 4 Parts and Still in Progress"
draft: false
slug: trajectories-a-work-in-4-parts-and-still-in-progress

cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Trajectories: A Work In 4 Parts and Still in Progress"
description: 
---

##  Or&#8230;how I forgot high school maths

It started with a whimsical comment of mine, during a brief email-chat about the &#8220;[incredible video](https://arstechnica.com/science/2020/05/incredible-video-shows-hayabusa2-pogo-bouncing-off-asteroid/) [that] shows Hayabusa2 pogo-bouncing off  [an] asteroid&#8221; 

I said my next Blog post would now be where I would &#8216;Compare the parabolic trajectory of the same rock on Earth vs on this Asteroid.&#8217;

It&#8217;s this &#8216;cannon ball&#8217; stuff:
![](img_6021abcb8d17e.png)
So, 2 or 3 hours of effort later and still I&#8217;m going in circles. Just can&#8217;t get it to work. It&#8217;s actually high-school maths. 

The first equation I found (Wikipedia) had an archaic term (*sec*) which I&#8217;d forgotten about:
![](ss.20200508.121452.png)I remembered &#8216;sec&#8217; was &#8216;secant&#8217; (not &#8216;seconds&#8217;) but had forgotten what it was!
**x** is how far along parallel to the ground it has gone, and **y **is how high it is at that (x) point.

## Take 1 : Quick Excel Sanity Check

My first quick attempt in Excel said that after being fired then travelling just 25cm (x), the ball was already 1.3 metres *underground* (y) Ok, probably not right.

## Take 2 : More Careful Excel with Known Result Values

I had a simple example that showed with given input values, the ball would be 0.2 m off the ground after travelling 10 metres; i.e. it&#8217;s descended and is nearly on the ground again.  I re-did my Excel, more carefully, then entered the same input values as the example:
![](1_image-2.png)
At 10 metres along (x), my ball is 10.000 (y) metres up&#8230;and still rising. Ok, still got a big problem.

## Take 3: Go Manual

Pen and Paper. But first&#8230;I&#8217;d earlier found a site that had the formula written a cleaner way. It&#8217;s the &#8216;same&#8217; as the other one but just had things shuffled about a bit:
![](1_image-3.png)Yes, this is where I got the sample values from.
So I broke it all down and did each bit by hand, with a calculator. Remembering that after 10 metres, it should calculate being 0.2 metres high&#8230;
![](img_20200508_204024.jpg)Yes it&#8217;s messy and the first few lines are out of order
..and I got **0 metres**. I&#8217;ve obviously done something wrong. 

## Sorta Take 4: The Python Program

Excel isn&#8217;t actually my favourite tool for doing more complex maths things. I find it easier to write a Python program. 

Or, in this case, openly use another person&#8217;s code (which they allow). I had to make a few tiny changes. BUT BUT BUT, he&#8217;s solving the problem a different way. He&#8217;s NOT using the above formula, but basically **calculus** (!) instead.  It&#8217;s actually the [site ](https://www.assignmentexpert.com/blog/modeling-projectile-motion-using-python/)I mentioned earlier.  This is just some of the code:
![](image-4.png)
But I got it to work and it draws pretty cannon-ball pictures for different angles:
![](image-5.png)
The blue line shows at 10 metres it&#8217;s still just off the ground (good!).

I then re-wrote it to *show *the x,y numbers and it printed out that it was about 0.2 metres high at the 10 m mark (also good)

And that&#8217;s where I stand.  Tomorrow it&#8217;s going to be cold and raining, so no hiking and photography (ironic smile). Instead it&#8217;s Take 5.

**Update**: [Mystery solved](__GHOST_URL__/2020/05/10/trajectories-oh-g-undone-by-multiple-coincidences/)!

---

> [!info] Original Published Date : *2020-05-08*
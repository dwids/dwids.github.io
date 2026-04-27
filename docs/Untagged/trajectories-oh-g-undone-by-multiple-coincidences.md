---
date: 2020-05-10T09:47:07.000Z
lastmod: 2024-11-22T05:59:13.000Z
title: "Trajectories: Oh G, undone by multiple coincidences"
draft: false
slug: trajectories-oh-g-undone-by-multiple-coincidences

cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Trajectories: Oh G, undone by multiple coincidences"
description: 
---

Just a few days ago, in the [Trajectories post](__GHOST_URL__/2020/05/08/trajectories-a-work-in-4-parts-and-still-in-progress/), I could not get a simple example to work. To recap: the expected result was 0.2 metres and I was getting exactly 0.0000

The following day I quickly worked out what it was. I was merging two &#8216;worked examples&#8217; and had missed one little change. Normally that wouldn&#8217;t matter, but **coincidences **in their values chosen &#8211; no doubt to make the maths easier &#8211; meant I kept getting 0. By hand or in Excel.

## First Example I Used

The first example, doing the maths one way, was a projectile fired at **10 **m/s and **45 **degrees. They set the value of Earth&#8217;s gravity (G or g) at **10**, which is slightly higher than the real value, but hey.

By then I&#8217;d found the second example which gave me the &#8216;after **10 **metres along it should be 0.2 metres off the ground&#8217; values to check.  

So I did the first way by hand, hoping to get 0.2:
![](ds_img_20200508_204024.jpg)
Ok, not good. So I went back and looked at&#8230;

## The Second Example

A program, doing it a different way (aka calculus). It was only then that the light went on.  They had set G to be the more exact value of **9.8**, not 10. Yeah, it&#8217;s not obvious, but jumped out at me:
![](ss.20200510.085914.jpg)
The program correctly calculated the 0.2 answer.

## But So What? 

Big deal; 10 or 9.8. That&#8217;s like 2% difference.

But look back at the hand calculations. A lot of the values were **10**: G (g), Vo and x.  I then worked out* that they effectively cancelled each other out in the maths. *

By using those, and also picking 45 degrees** (see below) that last calculation turned into:  **10-10** which is 0.000000 🙂

By changing G(g) to the correct value of 9.8 (and getting the &#8216;sign&#8217; of g right), things didn&#8217;t cancel each other out and the correct answer popped out:
![](img_20200510_091807.jpg)
## The Irony of Advanced Maths

One of the ironies of doing advanced maths and physics at uni was you learnt more skills on how to do **quick estimates**. This was useful as you could first estimate the &#8216;sort of&#8217; value you hoped to get when you did the &#8216;real&#8217; maths. I still use it today as means of cross-check aka sanity check.

It was, of course, part of the reason the above came unstuck. G is 9.8 not 10.  But, as in the [Virus post](__GHOST_URL__/2020/05/09/viruses-how-big-are-they/), having things in units of 10 makes the maths easier. In this example, the three things being 10 made it easier in one example, but blew up another.

 ** A further thing that nuked me was the 45 degrees.  In the ideal case (no air resistance, level surface etc) throwing it a 45 degrees will hurl the projectile the *maximum* distance. Probably why they picked it.

But here, cos2(45)  is 0.5 and when we then multiple that by 2, it turns into **1 **and it too **effectively vanishes **in terms of impact, when used in further multiplication!  100 x 1 is still 100. 

If it had been 30 degrees: cos2(30) multiplied by 2 would be 1.5 and so wouldn&#8217;t &#8216;vanish&#8217;

---

> [!info] Original Published Date : *2020-05-10*
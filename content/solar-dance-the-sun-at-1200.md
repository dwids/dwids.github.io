---
date: 2020-04-24T10:19:15.000Z
lastmod: 2020-04-24T10:19:15.000Z
title: "Solar Dance - The Sun's weekly position at 12:00"
draft: false
slug: solar-dance-the-sun-at-1200
tags: ["astronomy"]
cover:
    image: https://images.unsplash.com/photo-1462332420958-a05d1e002413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGFzdHJvbm9teXxlbnwwfHx8fDE3MzIyMjYxNTh8MA&ixlib=rb-4.0.3&q=80&w=720
    alt: "Solar Dance - The Sun's weekly position at 12:00"
description: 
---

This is directly following on from the earlier  [[midday-is-almost-never-1200|Midday is almost never 12:00]] post.  

You may have noticed that if  you look at where the Sun is, in the sky, at **the same time** of the day it appears to change. Particularly over a gap of a week or a month. 

Well, it sure does.  This took a while, but I used the free [Stellarium](https://stellarium.org/) astronomy software to show the position of the Sun, from here at Williamstown, **looking due North at 12:00 local time**. I captured **one image per week,** then merged the 52 images into a Video and edited that. 

Stellarium automatically takes into account Daylight Savings, so if you look carefully, it ‘jumps’ to 1:00pm, which is still 12:00 ‘sun’ time. I’ve also added the *meridian* line, as mentioned in the earlier *Midday* post.  You’ll see that the Sun never seems to touch nor cross it.

So here’s the video:

<iframe width="720" height="405" src="https://www.youtube.com/embed/ruDRi2q118c" title="Sun Dance - Position at 12:00 weekly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you look carefully, it’s a distorted figure 8. You can learn more about the shape at this [Wikipedia ](https://en.wikipedia.org/wiki/Analemma)article. To paraphrase it:

- The North-South change is due to the Earth’s tilt relative to the Sun
- The East-West change is due to the Earth’s tilt and that our orbit of the Sun is NOT a circle. It’s slightly elongated, into an ellipse. 

How stars appear to move through the sky, in terms of time here on Earth, is very interesting and has a big surprise. It will certainly get a good working out in the future on this here Blog.

## Maths Extra and Behind The Scenes

There are a few sites that show how the (relatively simple) maths & graphs of how the above items (tilt, ellipse) merge to create the figure 8 shape. The one I was thinking of doesn’t work any more, but [this one](https://mathbabe.org/2012/06/30/analemma/) is a start.

As for how I did this, well it took a while.  I’m sure that **Stellarium** can automate tasks, in fact I know it can. BUT by the time I taught myself how to do it, I could have captured the 52 screenshots multiple times 🙂    It was simple:  “]” to jump forward 7 days, then “Ctrl-S” to capture the screen shot.

The free and excellent video/audio toolkit **ffmpeg** was used to merge the 50+ images into a video. It was one command, repeat, *one*. And on Windows.

The last step was to use the free and magical **DaVinci Resolve** video editor to tidy things up, add the second copy of the video (to annotate with months), then finish up by adding the text & music.

---

> [!info] Original Published Date : *2020-04-24*
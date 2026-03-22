---
date: 2020-04-21T18:08:40.000Z
lastmod: 2020-04-21T18:08:40.000Z
title: History Mystery - Williamstown Observatory (1863)
draft: false
slug: history-mystery-williamstown-observatory-1863
tags: ["navigation"]
cover:
    image: https://images.unsplash.com/photo-1550406307-84b491d68ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fG9sZCUyMG1hcHxlbnwwfHx8fDE3MzIyMjY1MDl8MA&ixlib=rb-4.0.3&q=80&w=2000
    alt: History Mystery - Williamstown Observatory (1863)
description: 
---

[A post for a friend of a friend who may be able to help, but obviously anyone can read and comment if you have any thoughts. Yes, comments are enabled for once :-)]

## Executive Summary

Searching for items on my home town of *Williamstown *, Victoria on archive.org, I got an interesting hit. An [1863 scientific paper](https://archive.org/details/paper-doi-10_1093_mnras_23_6_183a/mode/2up) that gives a very precise location of the &#8220;Government Observatory, Williamstown, Victoria&#8221;
![](ss.20200421.171308.png)
He&#8217;s an Astronomer and I know some Astronomy, so was able to convert his Longitude &#8211; in Hours etc &#8211;  to Degrees (see below for Optional quick maths). The values in decimal degrees are:

    Longitude: 144.91375 degrees E

    Latitude: 37.8685 degrees S

I plugged these into Google Earth and &#8211; as I&#8217;d assumed &#8211; it didn&#8217;t work as I&#8217;d hoped. It put the Observatory in the sea, not far from the Timeball Tower:
![](image-34.png)
**Note**: I should point out it&#8217;s not difficult to find the actual historical locations of the Observatories (there were at least two in Williamstown). ** I&#8217;m interested in how to convert the 1863 Lat and Long to the &#8216;correct&#8217; modern values.**

I said I&#8217;d *assumed *it wouldn&#8217;t work as I knew enough about maps &#8211; [from my hiking](__GHOST_URL__/2016/06/26/navigation-getting-the-basics-right-part-1/) (mis)adventures &#8211; to know the 1863 document probably used a different **Datum **and **Projection**. 

## What I&#8217;d Like To Find Out

The questions are: 

1. What Datum and Projection would a British scientific publication have used in 1863?
2. And so, what transformation(s) do I need to apply to convert to WGS84 etc?  I&#8217;m not afraid of maths; so not put off by tan() or even arctan()  🙂  And I can use Excel quite well.

## Optional: Longitude in Hours? The Maths.

I assumed that because he&#8217;s an Astronomer he&#8217;s giving the Longitude as the equivalent to a celestial/space-based **Right Ascension** (RA). Instead of giving an angle in *degrees*, RA is given in what amounts to *time *(Hours, Minutes, Seconds). 

The reason is that the Earth rotates and returns to the same point in 24 hours. In that time it does a complete circle; 360 degrees.  So in **one hour** it rotates (360/24) = **15 degrees**.   

To convert RA (hours) to Longitude (degrees) we simply **multiply by 15.**

**Note**: for Astronomy tasks, using RA (in hours) is quite useful. Even as an alternate clock (!), which we&#8217;ll definitely return to soon on this Blog. 

Quick estimate: his RA is *just *under 9 hours and 40 minutes. That&#8217;s 9 and 2/3 hours, so 9.6666 hours, you&#8217;d hopefully agree.

9.6666 x 15 = 144.999 degrees.

My balcony here in Williamstown has Longitude 144.8922 degrees E.  

QED. In a back-of-the-envelope ballpark sense 🙂

---

> [!info] Original Published Date : *2020-04-21*
---
date: 2020-06-05T17:57:44.000Z
lastmod: 2020-06-05T17:57:44.000Z
title: "Latitude (3 of 3) - Cook's Calculation"
draft: false
slug: latitude-3-cooks-calculation
tags: ["navigation"]
description: 
---

>[!info] Jump to [[latitude-01-what-is-it|Part 1]], [[latitude-02-the-sun-and-the-book|Part 2]], [[latitude-3-cooks-calculation|Part 3]]

We’ll dive straight in to see how Lt James Cook would have done this in the 1770s. To find his Latitude, he would have needed 3 things:

- A **[Sextant](https://en.wikipedia.org/wiki/Sextant)**; to measure the Sun’s angle above the horizon – its Altitude
- An [**accurate clock**;](https://en.wikipedia.org/wiki/John_Harrison) set to London (Greenwich) time. We call this UTC today.
- A book of astronomical data for that year; the ***[Nautical Almanac](https://en.wikipedia.org/wiki/The_Nautical_Almanac)*** (still published today!)

Let’s assume, in this thought experiment, he’s sitting off **Melbourne** here in Victoria. We’ll do a *rough* calculation of our latitude.

He is after two items:

- The **time** the Sun reaches its highest point in the sky (when it crosses his North-South line in the sky, aka his *Meridian*). This is the Sun’s [[latitude-02-the-sun-and-the-book|Merdian Pass]].
- The **angle** above the horizon the Sun is at at that time. Its **Altitude**.

Based upon recent observations, he’d roughly know when the time of the Sun’s **Meridan Pass** would be, so he could get ready just before (say) yesterday’s time.

### The Observations

Using his Sextant, he would read out loud the Sun’s *Altitude*. Someone else would make a note of the time (Greenwich) and his Altitude value.

He’d then repeat this and keep going as the Altitude angle continued to rise, then started to fall.

He could then sit down and work out the two key numbers; the **Time** and **Altitude** of the actual Meridian Pass (maximum Altitude) of the Sun.

### The First Calculation

The point directly over his head in the sky is called his **Zenith** .It is, by definition, where the lines from North-to-South and from East-to-West meet in the bowl of the sky.

We define a simple ‘distance’ (actually an Angle) as that between the object (the Sun) and the Zenith. It’s called the Zenith Distance (ZD) and looks like this:

![](zenith-distance-and-altitude.png)

⬆️ *Stellarium simulation. “Fish-eye” lens mode, to show the Zenith which is actually directly overhead*

The maths here is easy. ZD = 90° – Altitude

For today Cook would have got:

$$
\begin{array}{l}
\text{Meridian Pass time: 2:18 pm (Greenwich/UTC)} \\
\text{Altitude: } 29.6^\circ \\
\boldsymbol{\text{ZD} = (90^\circ - 29.6^\circ) = 60.4^\circ}
\end{array}
$$
### Why is Zenith Distance Needed?

Firstly Cook would have had to know roughly where he was on the Earth. This is his **Situation**. For him it would be something like this:

![](zenith-distance-diagram.jpg)
⬆️ His **Situation**. ZD = Zenith Distance (actually an angle)

Note that his Zenith is also the end of the line from the centre of the Earth, thru his body and up to directly over his head (by definition)

#### Reminder: the Sun’s “Absolute” Position

As covered earlier, astronomers – even in the 1770s – had defined the Sun’s celestial (or absolute) position, relative to a fixed and stationary Earth. That position constantly changes. For every day and hour of a given year, it is calculated and shown in the *Nautical Almanac book.*

Cook would have looked it up for the date and time and found the key positional value (Sun’s Declination) for just after 2am Greenwich (UTC):
![](ss.20200605.172301.jpg)
**22° 34.8’**  (we are after a rough value here)

With 60 minutes in a degree, we’ll call that **22.58° N**

## The Final Calculation of Latitude

So, if we recall what [[latitude-01-what-is-it |Latitude ]] and the Sun’s [[latitude-02-the-sun-and-the-book|Declination]] are, we can draw this:

**Note**: this is only true for the Meridian Pass!
![](zenith-distance-declination-and-latitude-diagram.jpg)

To repeat: only true for the Meridian Pass. Hence that’s why it’s used.

Looking at the above diagram, for his current *Situation*, Cook’s Latitude is simply:

$$
\begin{array}{l}
\text{Lat} = \text{ZD} - \text{Sun's Declination} \\
\text{Lat} = 60.4^\circ - 22.58^\circ = 37.82^\circ
\end{array}
$$

Latitude = `37.82°` degrees **South** (from his Situation, he is [South](https://youtu.be/7kviGyJmjRU) of the Equator)

A quick search shows the modern value is `37.85°` South for Melbourne. Pretty good for a rough calculation.

---

> [!info] Original Published Date : *2020-06-05*
---
date: 2016-06-26T19:58:05.000Z
lastmod: 2025-01-21T21:24:40.000Z
title: Navigation (1 of 3) – GPS Error? Getting the basics right
draft: false
slug: navigation-getting-the-basics-right-part-1
tags:
  - navigation
description:
---

Something that happened today (see [[navigation-getting-the-basics-right-part-2|Part 2]]) reminded me when I first got a GPS. This was 2008 and it was a hand-held Garmin which cost a wee bit (\$280 USD, inc \$50 USD shipping). Arguably, most of the function I used then is now available in a \$4.99 phone app.

So the first time I used it for navigation testing and route logging was in the Dandenongs. I had a paper map with a grid on it. My planned route (pale red, below) was roughly N-E; Edgar Track, Bills Tk, Camelia Tk.

Yet the GPS was telling me I was **hundreds** of metres away from where I should be. I could expect it to be 1 or 2 meters, but hundreds? If it wasn’t for the signs, I would have missed the turn offs.

Later, when I loaded the GPS log into their map program on the PC, I saw the log was ‘correct’ but displaced, in both directions. The image below is a very rough recreation, showing the walk I really did in pale red and the GPS log in red.

![GPS datum error -simulated](ae0b0-gps-datum-error-simulated.jpg)

My first reaction was “my new GPS from America is faulty!” But a bit of reading taught me something: the paper map had the same co-ordinate system, but a different **datum** than the GPS.

A datum is “a system which allows the location of latitudes and longitudes (and heights) to be identified onto the surface of the Earth – i.e. onto the surface of a ’round’ object.” [Source](http://www.icsm.gov.au/mapping/datums1.html).

There are different ways mathematically of doing this, so lots of different datums. I discovered that my map had an old Australian one (**AGD66**) but the GPS was set up to use the new Australian one; **GDA94**

The difference is about `200 metres to the north-east`. Which was exactly what I saw. I’ve never been tripped up like this again. In fact Google Earth uses an international datum virtually identical to GDA94, so that makes things nice and consistent. As I said earlier, this is sort of related to what happened today, as covered in [[navigation-getting-the-basics-right-part-2|Part 2]].

---

> [!info] Original Published Date : *2016-06-26*
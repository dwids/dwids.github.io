---
date: 2020-04-19T21:05:14.000Z
lastmod: 2024-11-22T05:59:25.000Z
title: A curve as a straight line?
draft: false
slug: a-curve-as-a-straight-line

cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: A curve as a straight line?
description: 
---

A number the graphs showing the growth of the virus may seem a bit puzzling.  As you&#8217;ll see, the thing to look carefully at is the **left **(**vertical**) axis. The bottom (horizontal) one is usually time; days, hours, weeks etc and pretty straightforward.

So, consider this simple &#8211; and delicious &#8211; example. *Case 1*. Something is growing by adding 2 every day. Say,  I give you 2 chocolates every day. Here&#8217;s the number or chocolates you have after each day:
![](image-19.png)
A quick graph in Excel &#8211; your total number of chocolates versus time (in days) &#8211; is a straight line also known as **linear**:
![](image-18.png)Case 1: Linear growth
So now *Case 2. *What if once a **week **you give 10 people a single chocolate. 

Then a week later, each of those 10 people give 10 other people a single chocolate.

I&#8217;ve done that in Excel. Ignore the individual Days (they are used for the graph) and focus on the blue-highlighted rows; each week (7 days):
![](image-21.png)
Phew. It&#8217;s growing madly. You may have seem something like this before; the classic &#8216;breeding like rabbits&#8217; example. Or, for us recently, viral infections, but (only!) if left unchecked.  

Let&#8217;s graph Case 2. It climbs slowly and then&#8230;just takes off. This is called **exponential **growth.
![](image-28.png)
It&#8217;s actually hard to show such a huge **range** of data/chocolates  &#8211; from 10 to 1,000 to 26,000 &#8211; clearly on the one graph. As you can see, you really can&#8217;t make out the 1000-sized values, let alone the 10.

## Logs to the rescue 

Maths time. Nothing more than high school level, so hang in there. It&#8217;s all about Powers of Ten:  10 raised to the 1st power is 10, to the 2nd is 100 and so on:
![](image-24.png)
The green numbers are of interest here. The reverse way of looking at it is: what number do I raise the 10 to, in order to get (say) 100?    The answer is 2. 

You may remember this 2 as being the **logarithm of 100**.  (Officially we&#8217;d need to say &#8216;base 10 logarithm&#8217; but we won&#8217;t)

Here&#8217;s how that&#8217;s written, *log *being the abbreviation of logarithm:
![](image-25.png)
See my clever use of colour? 🙂

## Graph the Log?

Yes, let&#8217;s try that. Firstly we&#8217;ll get Excel to calculate the Log of those big numbers in *Case 2. *Again ignore the single day, figures and focus on the blue/weekly ones:
![](image-26.png)
Interesting. They don&#8217;t go galloping off wildly. So what does the graph look like?  Speaking of *interesting*:
![](image-29.png)
Linear!? Not really. It is actually showing the same data as the big *curve* (above), but *how *we show it is different. We are showing the curve as a &#8216;straight line&#8217;, via using the Log. 

Two very important comments:

1. **I&#8217;m not trying to show the exact virus curves/lines** per se, for us or any country. They are more complex. I&#8217;m just trying to explain what a Log graph is as some of the virus charts use Logs.
2. Despite what it may seem, re-drawing the Curve as a Line (via the Log) is **not*****flattening the curve***.  That&#8217;s different and [explained here](https://www.livescience.com/coronavirus-flatten-the-curve.html).

To finish up, I&#8217;ll re-do the above Log chart with some extra explanations added in:
![](log-annoated-for-blog-ss.20200419.202953.jpg)
Ok, the main message is to look at that left side on any chart you see. It may just show values like *10, 100, 1000, 10000*. That&#8217;s a huge clue it&#8217;s a Log graph. **They make it easier to see the small (10), medium (100) and large (10,000) numbers on the one chart.** The bottom scale is really *linear*; just days evenly spread out.

As I said, the actual viral graphs won&#8217;t be a straight line, but the focus here is understanding the **scale** used to show the data. Linear or Log.

---

    True story: when I was doing 4th Year Physics at Monash, the running joke was:  if the graph from your experiment's results wasn't showing the values the theory predicted, then just re-do with it a Log scale, because they're always a straight line :-)

---

> [!info] Original Published Date : *2020-04-19*
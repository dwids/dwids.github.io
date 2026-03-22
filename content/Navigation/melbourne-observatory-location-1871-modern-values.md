---
date: 2020-07-12T18:22:11.000Z
lastmod: 2020-07-12T18:22:11.000Z
title: Melbourne Observatory Location (1871 and modern values)
draft: false
slug: melbourne-observatory-location-1871-modern-values
tags: ["maths","navigation"]
cover:
    image: https://media.istockphoto.com/id/474951754/photo/melbourne.webp?a=1&b=1&s=612x612&w=0&k=20&c=DC6xnkY6FCyaHEtHV41E1r4Sxsb3QQF5cmvs9Gdg10k=
    alt: Melbourne Observatory Location (1871 and modern values)
description: 
---

The &#8220;Williamstown Observatory was established in July 1853&#8243; [1].  &#8221; The work of the Williamstown Observatory was wound down in mid 1863, as instruments were progressively moved to the new Melbourne Observatory, which formally commenced operation on 9 June 1863.&#8221; [ibid]. The Williamstown one is long gone, but the Melbourne one is still proudly standing. 

In researching the exact location of the **Williamstown** Observatory (see [this fascinating discussion](https://gis.stackexchange.com/questions/367355/transform-1860s-australian-english-map-coordinates-to-modern-ones)), I&#8217;ve just spotted an interesting &#8211; and possibly related &#8211; situation with the location of the **Melbourne** Observatory.

 

Using the excellent Trove website, it was fairly easy to find **historical** values for the position of the Melbourne one. For example, *The Argus* newspaper,  Monday 28 Aug 1871 on  Page 4 has an article headed  MELBOURNE OBSERVATORY [2].

It gives the 1871 values as:

![](image.png)

`Lat. 37deg. 49min. 53sec. S. ; long. 9h. 39min. 54.8sec.`

Directly converting these to decimal values gives:

`-37.89805556, 144.9783333 E   (- means South)`

The above is a simple conversion, not a transformation (viz not taking into account differing projections, datums etc). Google Earth says the ‘modern’ values of the actual Observatory’s location are:

`-37.829660°  144.975582°  E`

Putting both historical and modern values into Google Earth shows:

![](image-3.png)

As the drawn line shows the **Longitude** is quite close (the ‘sea/historical’ one being almost directly south of the ‘land/modern’ one)  but the **Latitude** is out by 7.6 km. 

So the next mission to try and work out what’s going on. My first suggestion would be I’d need to apply a transformation of some sort, to take into account the different datums, projections etc.

It follows that I’ve looped back to the same mission as what started all of this – doing the transform for the **Williamstown** Observatory. I&#8217;m not at all unhappy with that. I&#8217;d assume it&#8217;s the same piece of work for both. Plus Melbourne is back in Stage 3 COVID-19 lock-down, so I do have some time.

### An 1872 letter on &#8216;The Longitude of Melbourne&#8217;

I also stumbled on a fascinating ‘defence’ of the accuracy of the 1870s longitude of the Melbourne Observatory. It took the form of a letter to the editor of The Age newspaper entitled  “THE LONGITUDE OF MELB0URNE” on 29 August 1872 [3]. From the pen of the famous Robert Ellery, a key early player in both Observatories.

![](image-2.png)

#### **References**

[1] Gillespie, R. (2008) Williamstown Observatory, 1853-1863 in Museums Victoria Collections https://collections.museumsvictoria.com.au/articles/1629
Accessed 12 July 2020

[2] MELBOURNE OBSERVATORY. (1871, August 28). *The Argus (Melbourne, Vic. : 1848 &#8211; 1957)*, p. 4. Retrieved July 12, 2020, from http://nla.gov.au/nla.news-article5854093

[3] &#8220;THE LONGITUDE OF MELB0URNE.&#8221; The Age (Melbourne, Vic. : 1854 &#8211; 1954) 29 August 1872: 3. Web. 12 Jul 2020 <http://nla.gov.au/nla.news-article199373876>.

---

> [!info] Original Published Date : *2020-07-12*
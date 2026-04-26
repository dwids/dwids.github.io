---
date: 2023-02-01T15:57:18.000Z
lastmod: 2023-02-01T15:57:18.000Z
title: Making maps with QGIS
draft: false
slug: making-maps-with-qgis
tags:
  - general
  - navigation/maps
cover:
    image: https://media.istockphoto.com/id/474951754/photo/melbourne.webp?a=1&b=1&s=612x612&w=0&k=20&c=DC6xnkY6FCyaHEtHV41E1r4Sxsb3QQF5cmvs9Gdg10k=
    alt: Making maps with QGIS
description: 
---

&#8220;[QGIS](https://www.qgis.org/en/site/) is a free and open-source cross-platform desktop geographic information system application that supports viewing, editing, printing, and analysis of geospatial data&#8221; aka it let&#8217;s me make cool maps.  Been a bit of a learning curve, but nothing too heavy. I&#8217;ve had some direct email help from an excellent local mapmaker, for which I am very grateful.

I stick to [UTM ](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)for my maps. It&#8217;s one of the many *projections* which are used to &#8216;make&#8217; the very 3D (sorta) sphere of the Earth fit onto a flat bit of computer screen&#8230;or paper 🙂  It&#8217;s fine for &#8216;human level&#8217; maps, like hiking. But I don&#8217;t think you see sailors, pilots et al using it for their day jobs.  It&#8217;s not in degrees, but is a grid in **meters**. So not only can you use to to get your position (X,Y) but also to see &#8211; and estimate &#8211; distances. To that end, my maps usually have a printed grid of 1000 m, aka 1 km.  Here&#8217;s a recent example:

[![](Murrindindi-River-Walk-A4_portrait_UTMgrid-212x300.png)](Murrindindi-River-Walk-A4_portrait_UTMgrid.png)Murrindindi River Walk A4_portrait_UTMgrid. Click on this to show full size

All of this &#8211; the software and the underlying map/data &#8211; are from legally free sources.  Not only that, but you can easily create a geo-referenced PDF; one that has the coordinates stored within in it. You can then use that with software like [Avenza](https://www.avenza.com/avenza-maps/) and navigate without an internet connection.

---

> [!info] Original Published Date : *2023-02-01*
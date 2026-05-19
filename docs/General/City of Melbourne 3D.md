---
title: City of Melbourne 3D from Laser data
draft: false
tags:
  - maps
description: "Using free data to create a 3D map of part of Melbourne"
---

This morning I found that the City of Melbourne had used LiDAR (see below) etc to create a 

> "3D point cloud representing all physical features (e.g. buildings, trees and terrain) across City of Melbourne" [source](https://data.melbourne.vic.gov.au/explore/dataset/city-of-melbourne-3d-point-cloud-2018/information/)

### LiDAR — laser mapping from the sky

Claude AI and I put this together. Ok, mainly Claude, but I thought of it 😁

LiDAR (Light Detection and Ranging) works like radar but uses laser pulses instead of radio waves. An aircraft fires millions of laser pulses per second toward the ground, and sensors measure how long each pulse takes to bounce back. Since light travels at a known speed, this gives a precise 3D coordinate for every surface the laser hits — buildings, trees, roads, even individual people. A camera flying alongside adds real colour to each point, producing a vivid, accurate 3D snapshot of the landscape accurate to just a few centimetres.

The City of Melbourne has released a free LiDAR dataset covering the entire municipality, captured in 2018. It comes as 215 tiles, each containing tens of millions of individual laser measurements, and loads directly into free GIS software like QGIS. Unlike Google Earth's smooth 3D reconstructions — which are computed from overlapping photos — this is raw physical measurement, not a computer's interpretation.  Pan across the CBD and the streets, trees and buildings emerge in true colour, exactly as they were on the day the plane flew over — every kerb, every rooftop, every tree measured to centimetre precision from 1,000 metres in the air.

### My Quick and Silent Video

So I loaded 2 tiles into QGIS and went..."nice!".

<iframe 
  src="https://www.youtube.com/embed/p2QcowmruIM" 
  style="width:100%;max-width:100%;aspect-ratio:16/9;border:none;" 
  allowfullscreen>
</iframe>


#### Data Sources
City of Melbourne (Open Data): [City of Melbourne 3D Point Cloud 2018 ](https://data.melbourne.vic.gov.au/explore/dataset/city-of-melbourne-3d-point-cloud-2018/information/). License : [CC BY](https://creativecommons.org/licenses/by/4.0/legalcode)

Base map:  © OpenStreetMap contributors


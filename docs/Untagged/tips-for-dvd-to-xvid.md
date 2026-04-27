---
date: 2004-12-03T18:07:09.000Z
lastmod: 2004-12-03T18:07:09.000Z
title: Tips for DVD to XviD
draft: false
slug: tips-for-dvd-to-xvid
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Tips for DVD to XviD
description: 
---

It&#8217;s possible to copy a movie off your DVD (MPEG**2** compression) and convert it to *XviD *(the more modern MPEG**4** compression).  This is usually stored in the generic PC file format called *AVI*. The AVI can be 1/5th the size of the DVD, yet still be of almost the same video quality.  It can be played back on your PC etc.  The sound is &#8216;only&#8217; digital stereo 🙂

I use the Gordian Knot package in &#8216;manual&#8217; mode (not auto) as it gives much more control, but at the cost of being more complex to configure and use. It&#8217;s at [doom9 ](http://www.doom9.org/index.html?/gknot-main5.htm), where you can also find assorted guides.

Just grab the 2 s/w bundles ( GordianKnot Rippack + GordianKnot Codec pack) and print out the initial set up pages; easier to follow first time thru.  Follow the links to make sure you&#8217;ve got all pages printed.

Really 2 main steps involved once all is set up, although each of these 2 utilities is really a collection of multiple &#8216;behind the scenes&#8217; applications. Hence the first time configuration can seem a bit daunting&#8230;

a)  Robot4Rip; grab file(s) from DVD and extract out Video and Audio stream(s), which are stored as separate PC files. Optionally grab chapters and subtitles.  Usually pick Stereo (2 ch) stream, but if not, software can squash down 5.1 Dolby Digital or DTS. Not much point in grabbing chapters if ultimate target is XviD, as this format doesn&#8217;t support them.

b) GordianKnot. Takes above Video file and shrinks and converts it, in my case to XviD. Does 2 passes to ensure quality. Also takes Audio file and converts to desired format (usually MP3 VBR at 128).  Finally merges the Video and Audio back into one file (&#8220;muxing&#8221;), being an AVI container.

Important notes that may not be clear from the documentation:

In b) you can indirectly nominate a &#8220;quality&#8221; of the final AVI file. You can go for a &#8216;high&#8217; quality ( large video frame size and high sampling rate) which leads to a large AVI file, or start playing with the a few values to bring the file size down. See at end for examples of sizes.

You can also nominate a requested target AVI file size and GordianKnot will try and adjust the quality accordingly. The guides at doom9 are excellent, but aimed at those who want to copy the final XviD to a CD.  Hence their sizes are in CD units. For those who want to stream the AVI off disk, you just need to work in the other values of actual MB. Again see end for file sizes.

Some tips:

- Aim for a target frame width of about 576 pixels. Software will set height based upon existing frame ratio (4:3, 16:9 etc.)  Normal DVDs are about 720 wide I think.

- Go for a bit rate of about 1,000 (Kbps, note: BITS).

- Important:  ignore the step about enabling Quarter Pixel  when initially setting up the 2 passes. Leave it OFF or not selected. QPELS cause problems for some media players, like my MC-500. Problems in the sense that they won&#8217;t work!

** Sizes and times**

Orginal DVD: about 60 minutes of TV show (4:3 ratio). No ads!

- Raw video file(s) from DVD step a) about 2.8 GB,  Audio &#8220;only&#8221; another 136 MB

- Target format XviD and requested video rate of about 1000 Kbps. Sound to MP3 128 VBR.

- Resized frames to   512 x 384  (see below re: 576)

- (Think original image (frame) size was about 720 x 540)

Step a) only took 10 or so minutes. Step b) took a total of  1 hour and 15 mins, including both passes and muxing audio back in to file.  This on P4 3 GHz.

Final AVI file size is 495 MB (c/f original 2.8+ GB, about 1/5th!)

AVIcodec reports that it&#8217;s video is of the rate 1030 Kbps, which seems about right.

The file looks great when shown on a normal TV; almost DVD quality.  576 width seems quite common; it can be zoomed just a bit to fit on a normal TV with virtually no noticeable loss in quality.  I wrongly chose 512, but it was only my 2nd time through 🙂

Smaller widths like 320 sometimes appear in AVI files, but really&#8230;yes, the files are smaller but the images are tiny even on a PC screen.  On a TV, ouch. Bad.

Rule of thumb for XviD, a medium quality one should be about 500 or so MB per hour. So a typical 90 minute movie (shrunk to 576 wide) would be a file of about 700 to 800 MB. Seems about right from experience.

A 1 hour commercial TV show, with ads removed, is only about 45 minutes of actual program. Hence an XviD AVI file size of about 350 to 400 MB.

---

> [!info] Original Published Date : *2004-12-03*
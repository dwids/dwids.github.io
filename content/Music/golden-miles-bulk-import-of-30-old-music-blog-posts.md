---
date: 2020-04-16T17:36:45.000Z
lastmod: 2020-04-16T17:36:45.000Z
title: Golden Miles - Bulk import of 30+ old music Blog posts
draft: false
slug: golden-miles-bulk-import-of-30-old-music-blog-posts
tags: ["music"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Golden Miles - Bulk import of 30+ old music Blog posts
description: 
---

> [!info]+ Historical post 
> As I have moved blogs multiple times, words like "today" and "here" etc below, refer to when I first migrated the old *Golden Miles* blog to a newer platform, c. 2020.


What seemed like a quick task, turned into hours of work. But worth it. I had at least two Sadly Neglected Blogs still hanging around. The original *SiC*(reborn here, mulitple times) and one mainly on Music things (*Golden Miles*).  Today I decided to export all the *Golden Miles* Posts and import them here.

They are different blogging systems (Blogger and WordPress) but the export/import of the 30+ Posts took just minutes.  Of course, the real work then started. 

Most of the Posts were some 9 years old and their YouTube links had long since been removed or changed.  As they were the essence of the Posts, these links had to be updated. Which was a manual task: find the new YT link and edit the Post, remove the old link and drop the new one in the right place.  

Took a while, but hopefully worth it to have everything in the one place and correctly tagged. Firstly here&#8217;s a quick list of most of the old Golden Miles posts now here:
![](1_image-9.png)
And, to save time, they are all tagged as [goldenmiles ](__GHOST_URL__/tag/goldenmiles/)(**click on that link to see them**). For some reason the original Blog had a few non-music posts, but I left them in, as you&#8217;ll see. I&#8217;m glad the export/import left the original dates in place too.

## Behind the Scenes and other stuff

#### Blog Name and Header Photo

The old blog was named after a superb Australian s[o](https://youtu.be/z_jmOxO9c0I)ng and also had a great header image. It was taken, by me, after a long day hike at Wilsons Prom. From memory it was from the car park at Telegraph Saddle &#8211; high up on Mt Oberon &#8211; then walk to Sealers Cove and back. I had to rush near the end as it was getting quite dark and cold. The Saddle is high up and I took this looking West (derr) and you can see the ocean and some islands.
![](image-10.png)
It was worth the ~19km return walk, BTW. Here&#8217;s someone else&#8217;s photo:

https://www.trailhiking.com.au/wp-content/uploads/2016/01/sealerscave.jpg

Sealers Cove from [https://www.trailhiking.com.au/wilsons-promontory-sealers-cove/](https://www.trailhiking.com.au/wilsons-promontory-sealers-cove/)
#### Tech Talk: Link Conversion

Initially, I thought *all* the YouTube links would have to be converted. The first one had links in this format:

```
    [http://youtube.googleapis.com/v/Yd60nI4sa9A&source=uds](http://youtube.googleapis.com/v/Yd60nI4sa9A&amp;source=uds)
```

Yuk. They just don&#8217;t work 9 years on. BUT, I spotted the Yd60&#8230; bit looks like a modern YouTube video id, from which the correct link is built:

```
    https://www.youtube.com/watch?v=Yd60nI4sa9A
```

I was quickly able to use a Regular Expression in RegexBuddy to convert that Post&#8217;s four links in one hit, via find and replace:

![](1_image-11.png)Find > Replace > Input Text > Output Text

And then I found it was the only old Post that had this strange old format 🙂

---

> [!info] Original Published Date : *2020-04-16*
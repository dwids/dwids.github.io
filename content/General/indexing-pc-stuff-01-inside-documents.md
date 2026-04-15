---
date: 2020-05-23T18:25:33.000Z
lastmod: 2020-05-23T18:25:33.000Z
title: Indexing PC Stuff 01 - Inside Documents
draft: false
slug: indexing-pc-stuff-01-inside-documents
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Indexing PC Stuff 01 - Inside Documents
description: 
---

### Index Once, Search Many

I&#8217;ve got documents that go back 20 years or more. Thousands of them. Work and fun ones. Of all file types (.doc, .docx, .pdf, .xls, .xlsx, .ppt, .txt etc etc).  I knew that somewhere in that large collection was a piece about a mystery *near* Hanging R[o](https://youtu.be/TkMDAbDBB4s)ck; not *at *hanging rock, *near *it. It was about the road that appears to allow things to roll *up-hill*, including cars.

But where to begin? I didn&#8217;t know the name of the document (file) nor where in my system it could possibly be. And when I say the *system*, I&#8217;ve got documents/files scattered over four or five main places, including &#8211; unfortunately &#8211; *inside *zip files.

What I&#8217;d ideally like is a program to read every document and index all the words. Do that once &#8211; for my huge archives. Take your time to do that one-off task, but then I can quickly search the *contents*.

### First Attempts

Some years ago at a workplace, I tried a free program called **Docfetcher**. For some reason, it didn&#8217;t work. Possibly to do with the security of their Windows setup . But it looked promising as it&#8217;s indexed **inside** the document including PDF and Word files etc. So I could then say &#8216;find all my documents that have the words *hanging*, *rock* and *uphill*.&#8217;

Just yesterday I had to find a document to do with my car loan. Again it was sort of not that obvious but I found it eventually. By doing a *file-name* search (not the content inside the file)

So today I thought: I&#8217;m going to try and find a program that will index the contents of my thousands of documents, then let me search them&#8230;so I don&#8217;t have to go through this again. 

Because I&#8217;m me I dived into a free, enterprise-level indexing engine called *Solr*. Here is a sample command to get it to work. 

java -jar -Dc=sample-items -Dauto example\exampledocs\post.jar example\exampledocs*

Suffice to say I couldn&#8217;t even get it to index a small folder of Word and Excel documents.

### Docfetcher &#8211; Take 2

So I went back to *[Docfetcher ](http://docfetcher.sourceforge.net/en/index.html)*and it is fantastic.

It is really easy to use. You just point it at a folder and say &#8216;index everything except these file types that I&#8217;m *not *interested in.&#8217;  You index **once **(which is very quick, but obviously grows with the number of files).

So I indexed everything of interest &#8211; in a few archive locations &#8211; and then searched for *hanging rock uphill *and it came back with this:
![](ss.20200523.172544.jpg)
OK, it&#8217;s a fair few documents but it&#8217;s getting there. So I did a bit of reading and it was easy to fine-tune the search with the big capital ***AND***. It defaults to ***OR***, meaning &#8216;documents with contents including *hanging OR rock OR uphill*&#8216;.  So, a document about Ned Kelly would have the word *hanging *in it (not not *rock *nor *uphill*)&#8230;and be returned.

With that quick change, it amazingly found the old document: 
![](ss.20200523.172626-1.jpg)It even shows a preview!
If you look carefully at the details (path),  *Docfetcher* has actually indexed an old **Word document****that is stored inside a zip file**. That is quite amazing. And the whole thing is very quick to do the indexing which you only do the once (these are archives, so don&#8217;t change.)  

I also indexed my current folder of work, which does change. But it&#8217;s very quick to re-index this small folder.

This gave me the confidence to index my main archive, while I walked up to Nelson Place &#8211; in the rain &#8211; to get a coffee.  As I said this is a one-off task.  Some stats of that archive:

- 30,711 files (!)
- 27 GB
- 56 minutes to index

But searches take a fraction of a second.  I can happily say mission accomplished.

Oh yeah, Mir[a](https://youtu.be/TkMDAbDBB4s)nda, it&#8217;s an optical illusion. 

---

> [!info] Original Published Date : *2020-05-23*
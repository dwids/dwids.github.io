---
date: 2011-02-04T12:19:47.000Z
lastmod: 2011-02-04T12:19:47.000Z
title: Locate32 and Dropbox – offline indexes of remote PCs
draft: false
slug: locate32-and-dropbox-offline-indexes-of-remote-pcs
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Locate32 and Dropbox – offline indexes of remote PCs
description: 
---

I regularly use [Locate32](http://www.locate32.net/) for my fast indexing – and searching – of PC files.&#160; Plus I use Dropbox to store my shared files. So why not see if the two can work together?&#160; A bit of experimenting showed the answer was **yes**.&#160; Here’s one way to have an Index of one computer’s *My Documents* folder available on the other. And vice versa.&#160; 

I know that Locate32 can support remote shares (aka&#160; *\servershare*) directly, but that has some considerations, not least of which is sharing&#160; out My Documents. So I thought of putting the Locate32 index for one computer (Notebook) on Dropbox and having it used in another (Desktop). The steps, all done using Locate32 3.1 RC3 build 10.5090 :

## On your first PC

1. On the first PC (Notebook), create the new Locate32 index database file. Call it *Notebook Docs*, with a similar *Description*. Have it index *My Documents* or equivalent
2. Save the index (say *notebook.docs.dbs*) to your My Dropbox folder
3. Update the Locate32 index and test that it works locally

These are standard steps for Locate32. Nothing extra is required on this ‘source’ PC.&#160; You can shutdown the Notebook now as we are finished. It is **not** needed for the following steps, including Searching its contents.

## On your other PC

Now, on the other PC (Desktop) do this:

Start Locate32 and set it up to use the above index.

1. *Tools –> Settings –> Database*
2. Click on the **Import** button
3. Navigate to My Dropbox and select the above index file (*notebook.docs.dbs*) and Open it
4. On the Database options screen make two changes

1. **Uncheck** “*Update Globally*”
2. **Check** “*Do not overwrite existing data (e.g&#8230;”*

Your screen should look a bit like this:

[![locate32_1](http://www.artwill.com.au/images/Locate32andDropboxofflineindexesofremote_AEE9/locate32_1_thumb.png)](http://www.artwill.com.au/images/Locate32andDropboxofflineindexesofremote_AEE9/locate32_1.png)

1. Click OK a few times to exit

### Make the results display more friendly and obvious

Now you can search this Index (and others).&#160; A tip that helps further is to add the Database (name) or Database Description as a column on the main display/results screen. Just Right-Mouse on the column headings and select either the *Database* or *Database Description*. Makes it more obvious **where** the file really lives as can been seen below.

So, I was wondering where my document on my Grampians Trip in 2010 was. I was on the Desktop PC, so did a quick search. 

[![locate32_2](http://www.artwill.com.au/images/Locate32andDropboxofflineindexesofremote_AEE9/locate32_2_thumb.png)](http://www.artwill.com.au/images/Locate32andDropboxofflineindexesofremote_AEE9/locate32_2.png)

There it is!&#160; Note that the Database of *Notebook Docs* reminds me it’s on the other system – the Notebook. 

Of course you can now do the vice-versa and create an Index for the Desktop and have it (read only) available via Dropbox on the Notebook. Or any other suitable computer.

---

> [!info] Original Published Date : *2011-02-04*
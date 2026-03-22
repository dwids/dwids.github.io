---
date: 2008-07-22T09:11:58.000Z
lastmod: 2008-07-22T09:11:58.000Z
title: Write once, publish anywhere?
draft: false
slug: write-once-publish-anywhere
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: Write once, publish anywhere?
description: 
---

After a few years I&#8217;m looking at Docbook again. The theory is excellent, particularly for creating Technical or Help guides; you create your &#8216;document&#8217; once &#8211; in a neutral language/format &#8211; and then you can publish it in many ways. For example you can generate a:

- PDF file  
- Rich text (like MS Word)  
- Web Page, with CSS style sheet to pretty it up  
- Help file, such as compiled HTML

The actual neutral format is XML.  And therein lies my list of things to investigate. XML is fantastic for such purposes, but isn&#8217;t the most friendly thing to edit, if you just attack the raw data. It looks like this:

>      <?xml version="1.0" encoding="UTF-8"?>
>      <book xml:id="simple_book" xmlns="http://docbook.org/ns/docbook" version="5.0">
>        <title>Very simple book</title>
>        <chapter xml:id="chapter_1">
>          <title>Chapter 1</title>
>          <para>Hello world!</para>
>          <para>I hope that your day is proceeding <emphasis>splendidly</emphasis>!</para>
>        </chapter>
>        <chapter xml:id="chapter_2">
>          <title>Chapter 2</title>
>          <para>Hello again, world!</para>
>        </chapter>
>      </book>
> 
> 
> 
>     Source: [http://en.wikipedia.org/wiki/DocBook](http://en.wikipedia.org/wiki/DocBook)

So my questions are:

1. Is there a good GUI editor that understands the Docbook XML format, but hides it? In other words, makes it look like MS Word or Open Office.

2. Can it spell check, including Australian English and have the ability to add your own words?

3. How easy is it to do the final publish (i.e. transform) into PDF, Web Page etc

4. Is the whole thing a compromise? Wonderful in theory, but the final Web Pages etc are pretty plain or hard to navigate.

5. Does Docbook support cross-referencing? Vital for technical documents.  You create a screen capture, add it to your document, then refer to it in the text; &#8220;see Figure <cross-reference>&#8221;

So far I&#8217;m using the open source Eclipse platform to handle the editing and &#8211; via  Ant &#8211; the &#8216;automatic&#8217; conversion.  I got it to work yesterday, and a PDF was created. Today I&#8217;m taking the same &#8216;source&#8217; (i.e. the Docbook XML) and trying to get it to generate a Web Page, then standard Help file (compiled HTML).  

It&#8217;s not for the feint hearted, but I&#8217;m getting there. I&#8217;ve got a feeling you do all the hard work in the original set-up and configuration stage, then after that things become quite straightforward.  We&#8217;ll see.

 

Technorati Tags: [docbook](http://technorati.com/tags/docbook)

---

> [!info] Original Published Date : *2008-07-22*
---
date: 2011-06-09T18:13:00.000Z
lastmod: 2011-06-09T18:13:00.000Z
title: "Emulating a Developer: Part 2 – PC coding (“what, no clipboard?!”)"
draft: false
slug: emulating-a-developer-part-2-pc-coding-what-no-clipboard
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: "Emulating a Developer: Part 2 – PC coding (“what, no clipboard?!”)"
description: 
---

#### Being the ongoing adventures in application development … by someone who really doesn’t develop code.

<The first part is, ironically, [located in Part 1](__GHOST_URL__/2011/06/09/emulating-a-developer-part-1-learn-as-you-type/)>

So my first cut, simple, crtRar utility has to do this:

1. Call the program, passing the 1 or more file sizes in MB (eg “crtRar 600 100”) 
2. Break up the input ‘string’ (600 100) into individual values, i.e two in this case 
3. Add them up to give total filesize 
4. If this total filesize was 700 or less, I’ll break up into 7 equal parts. If between 700 and 1400 then 14 parts. If greater than 1400 then 21 parts 
5. Calculate the rar file part size as per 4. above 
6. Create a random, 2 letter file name 
7. Build the rar command using the output of 5 and 6 etc 
8. Put it up on the screen, ready to be copied and pasted…and used. 

I decided to develop it on my Windows PC and opted for the ‘in built’ language called vbscript.&#160; I don’t really know this language, but what better way to learn than dive in and code. Plus I could store the finished .vbs file on my Dropbox and have it automatically available on the other PCs.

So I literally created a new Test.vbs file in Notepad++ and thought, right:&#160; Step 1 is “pass in the 1 or more file sizes…”&#160; I wonder how vbscript does that?&#160; Looked it up on Google.&#160; Worked out how to write out results to the screen (so I could test things on the fly).

I got Step 1 coded, so then it was Step 2.&#160; How do I break up that string into individual values.&#160; Hello again friend Google.

And so it goes.&#160; Rinse and repeat as they say.

It took a few hours and finally I got all 8 steps going: my lovely, tailored, rar command appeared on the screen in a lovely Windows pop-up.

All I had to do was copy and paste that into the Linux FTP server and I was away.

Except I couldn’t even select it. **The rar command was being created, but there was no obvious way to copy it!** The pop-up didn’t allow the mouse or any other way of selecting/copying.&#160; As it stood, there was no way to get it up to the Linux server to actually run…

I think I spent as long again trying to find a way of getting my rar command to be copied. I went for a walk up the street and had a coffee, pondering the whole time.

In the end there was what even Microsoft (the makers of Windows and vbscript) called a “crazy workaround”. It basically invoked ‘cheating’ and using Internet Explorer as a go-between. So it starts IE (in the background) just to get values into the copy and paste area (aka The Windows Clipboard). It was slow and has a bl**dy security question each time it runs!&#160; But it works..

And thusly here is Version 1 of the code. Called *crt_rar.vbs*

mySum = 0 

myInput = InputBox("Please enter the values in MB. Space separated&#8230;", 1)      
myArray = Split(myInput) 

For Each x In myArray      
&#160;&#160;&#160; mySum = mySum + x       
Next 

If mySum <= 700 then&#160; 
&#160; rarSize = Round(mySum/7)       
ElseIf mySum <= 1400 then       
&#160; rarSize = Round(mySum/14)       
Else rarSize = Round(mySum/21)       
End If 

rem: Generate simple 2 char random file name for .rar file      
Const LETTERS = "abcdefghijklmnopqrstuvwxyz"       
rem note: a=1, z=26&#160; so need random nbr lowerbound 1, upperbound 26&#160; then use Int((upperbound &#8211; lowerbound + 1) * Rnd + lowerbound)       
Randomize       
myInt1 = Int((26*Rnd+1))&#160; 
str1 = Mid(LETTERS,myInt1,1)       
myInt2 = Int((26*Rnd+1))&#160;&#160;&#160; 
str2 = Mid(LETTERS,myInt2,1)       
rarName = str1 & str2 

rarCmd = "rar a -v"& rarSize &"m -m0 -R ~/temp/" & rarName &".rar "       
rem &#8216;crazy workaround&#8217;&#160; from [http://blogs.technet.com/b/heyscriptingguy/archive/2004/08/13/can-i-copy-script-output-to-the-clipboard.aspx](http://blogs.technet.com/b/heyscriptingguy/archive/2004/08/13/can-i-copy-script-output-to-the-clipboard.aspx) to allow output to clipboard (!)      
Set objIE = CreateObject("InternetExplorer.Application")       
objIE.Navigate("about:blank")       
objIE.document.parentwindow.clipboardData.SetData "text", rarCmd       
objIE.Quit

&#160;

It worked. I was happy.&#160; But it wasn’t fast, due to IE starting (silently) each time plus it had a Security Popup too.

So then I thought, I’m sure I could write this on the Server.&#160; Totally remove Windows from the picture and not have the stupid IE overhead and security popup.&#160; Only problem was the Linux FTP server didn’t run vbscript.&#160; Don’t worry, said I. I’ll re-do it.&#160; From the ground up…

<Continues in [Part 3](__GHOST_URL__/2011/06/10/emulating-a-developer-part-3-linux-coding-bashing-away/)>

---

> [!info] Original Published Date : *2011-06-09*
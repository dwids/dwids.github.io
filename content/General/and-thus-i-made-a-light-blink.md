---
date: 2014-09-16T19:06:30.000Z
lastmod: 2014-09-16T19:06:30.000Z
title: And thus I made a light blink
draft: false
slug: and-thus-i-made-a-light-blink
tags: ["general"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: And thus I made a light blink
description: 
---

Despite what some people think, I am not a programmer. In fact, the correct term is probably *developer*. But I’m not a developer either.

I write tiny little programs/scripts/batch_files that do tiny little tasks, to make my work easier.  For example, take a list of Towns in a text file and create a whole folder tree (with sub-folders) using each Town name.  My applications are usually distinguished by one common element: effectively zero error checking. If they work, sweet. If they get a small error, they hard crash. I can live with that.

Anyway, I believe every program I’ve written in over 30 years has been ‘inside’ the computer. That is; it puts things up on the screen. Makes sound. Checks my Lotto numbers and shows the answer on the screen.

External-world programming has always interested me.  That is: plug your PC into external hardware and make it do stuff. In the simple case, have lights blink. Getting more interesting &#8211; read a sensor and make an adjustment; so maybe:

- Read an aquarium’s thermometer value, from a sensor’s wire  
- If too **low**, then turn the water heater **up** via sending a signal on another wire (or vice-versa, if too **high**, then turn heater **off**)  
- Wait 5 minutes and check again.

That’s where boards like the little Arduino fit it. You plug the Arduino into your PC or Mac, via USB. You then plug the lights and sensors etc into the Arduino.

Finally you write a program on the PC to ‘do the work’; turn on the lights, check the sensors etc etc. The program is compiled and sent down to the Arduino; where it runs.   You can perhaps see why these are also called **embedded** systems; the code is *inside* the Arduino, not running on the PC.

I got my Arduino-compatible board from Jaycar in Melbourne and a cool component kit from the UK – designed to work with the Arduino.

Your **first** program is fairly easy; the board has a build in red light (LED) and you write a program to make sure it’s working. 

The 2nd one I did was more interesting. You see, **I have fat fingers** and so am not good with fiddly things like little wires and small components. So it is with some joy, I announce my first ‘real’ Arduino project worked. First time around too.

Here’s a picture of my Arduino board, connected via USB to the PC (for signal and power)…and with jump wires to a breadboard, which has real, proper components plugged into it: a red LED and a Resistor.  Click to make larger.

[![DS-cz-20140916173152880](fc2ee-ds-cz-20140916173152880_thumb1.jpg)](https://dwids.wordpress.com2020/03/c60f9-ds-cz-201409161731528801.jpg)

Now, I really know approximately nothing about the C programming language, but that’s what this kit uses. So nothing for it, but to dive in, learn-as-you-go and enter my masterpiece onto the PC:

// Project 2 &#8211; LED flashing (external LED)
int ledPin = 10;
void setup () {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}

The LED was wired to (Digital) output 10 of the Arduino.  HIGH turns the signal On and I’ll leave you to work out what LOW does. The delays are in milliseconds

And thus I made a light blink.  For 1 second at a time. I am master of the digital universe ![Smile](897ea-wlemoticon-smile.png)

---

> [!info] Original Published Date : *2014-09-16*
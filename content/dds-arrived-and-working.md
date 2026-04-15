---
date: 2005-03-15T11:37:33.000Z
lastmod: 2005-03-15T11:37:33.000Z
title: DDS - arrived and working
draft: false
slug: dds-arrived-and-working
tags: ["technology"]
cover:
    image: https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D
    alt: DDS - arrived and working
description: 
---

David&#8217;s Data Server &#8211; the old Athlon 1.4 GHz PC &#8211; has arrived home, with 4 hard drives. Again they too are old, but hey for virtually nothing I&#8217;ve now got a data server with like 150 GB.

They guys did a good job, leaving the original boot drive in place, so it still boots both Linux and Windows XP.

The linux fdisk utility shows all 4 disks and lots of partitions. For the geeks I&#8217;ve included it below. Wow, I&#8217;ve got a lot of &#8220;*gee I wonder what&#8217;s stored there?*&#8221;  searching to do. Lots of mount and umount on the way.

> fdisk -l /dev/hda
> 
> Disk /dev/hda: 255 heads, 63 sectors, 3649 cylinders
> 
> Units = cylinders of 16065 * 512 bytes
> 
>    Device Boot    Start       End    Blocks   Id  System
> 
> /dev/hda1             1         2     16033+  78  Unknown
> 
> /dev/hda2   *         3       929   7446127+   7  HPFS/NTFS
> 
> /dev/hda3          1052      3649  20868435    f  Win95 Ext&#8217;d (LBA)
> 
> /dev/hda4           930      1051    979965   83  Linux
> 
> /dev/hda5          1052      1093    337333+  82  Linux swap
> 
> /dev/hda6          1094      3649  20531038+   7  HPFS/NTFS
> 
> fdisk -l /dev/hdb
> 
> Disk /dev/hdb: 255 heads, 63 sectors, 4870 cylinders
> 
> Units = cylinders of 16065 * 512 bytes
> 
>    Device Boot    Start       End    Blocks   Id  System
> 
> /dev/hdb1             2      4628  37166377+   f  Win95 Ext&#8217;d (LBA)
> 
> /dev/hdb5             2      4628  37166346    7  HPFS/NTFS
> 
> fdisk -l /dev/hdc
> 
> Disk /dev/hdc: 255 heads, 63 sectors, 7476 cylinders
> 
> Units = cylinders of 16065 * 512 bytes
> 
>    Device Boot    Start       End    Blocks   Id  System
> 
> /dev/hdc1             1      1264  10153048+  78  Unknown
> 
> /dev/hdc2          1265      1326    498015   82  Linux swap
> 
> /dev/hdc3   *      1327      7475  49391842+   7  HPFS/NTFS
> 
>  fdisk -l /dev/hdd
> 
> Disk /dev/hdd: 16 heads, 63 sectors, 39703 cylinders
> 
> Units = cylinders of 1008 * 512 bytes
> 
>    Device Boot    Start       End    Blocks   Id  System
> 
> /dev/hdd1   *         1     12190   6143728+  83  Linux
> 
> /dev/hdd2         12191     39703  13866552    5  Extended
> 
> /dev/hdd5         12191     13205    511528+  82  Linux swap
> 
> /dev/hdd6         13206     39703  13354960+  83  Linux

---

> [!info] Original Published Date : *2005-03-15*
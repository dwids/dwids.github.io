---
Category:
  - Important
---



# This is a Heading 1
## H2 Quick Test

  You can also create quick links, like my page [[Good Trip List]]   Here is an external link being [a YouTube video](https://www.youtube.com/watch?v=VPBmshzmtVM) of **mine** from near *Apollo Bay.*  Inline `code` sample.
 
```sql
# For testing, ensure they have the text 'love' in the Songname
SELECT *
FROM SongsWithBook
WHERE Songname LIKE %love%'
````

### Heading 3 and some lists
Things to buy:
- Cat
- Dog with collar
- Something else

1. But something
2. Put a record into the database
3. Check you can find it via *browse* and then *search*.
#### Heading 4
Basic code/log_listing:

```
# Log file listing
Log begins
  1010 Start up
  1011 Error with socket
    Error code A3D
  1022 Exit return code -4
Log file ends
```

Here's a Powershell script code block

```powershell
# stop and start Print Spoooler
# must be run from Admin PowerShell prompt
param ($action)
if ($action -eq 'stop') {
Write-Host 'will be STOPPING and DISABLING the Spooler'
Write-Host '..stopping..'
Stop-Service -Name Spooler -Force
Write-Host '....Disabling auto_startup'
Set-Service -Name Spooler -StartupType Disabled
Get-Service -Name Spooler | Select-Object -Property *
}
```

I can draw your ==attention== to something or even indicate that it ~~no longer applies~~  

## Tables

Item | Description
---- | ---
Keyboard | Allows you to type into the computer
Printer | Creates printed output onto paper
Mouse | Freeform input device 
Monitor  | Display screen. May have speakers 

## Block Quotes
And this is a block quote with attribution. I don't use these.

>Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.

\- Albert Einstein

https://exiftool.org/forum/index.php?topic=11412.0.

## Footnotes
Can't see me using these^[But that may change] but it's nice that that they auto-increment^[And are recalculated when moved within the document]

## Callouts (Rubrics)
I like these, but they seem to be 'non-standard' markdown. Don't think Github has these.
>[!Warning] Backup first!
>Data may be lost in this next step

>[!Note] These next steps may take 5 minutes to run
> Leave it running until the OK prompt appears

>[!faq] Do I need to be install QGIS first?
> Yes. Otherwise the macro below will not run
## Checklist

- [x] This
- [ ] is a
- [ ] checklist
- [ ] 
- 

## Links

### External (Website)

Raw link https://sidwell.id.au/2020/07/12/melbourne-observatory-location-1871-modern-values/
Same [link](https://sidwell.id.au/2020/07/12/melbourne-observatory-location-1871-modern-values/)

### Link to Heading in Same file

Raw link: [Obsidian Markdown Test](Obsidian%20Markdown%20Test.md#H2%20Quick%20Test)
Same with alias [Heading 2](#H2%20Quick%20Test)


### Link to Heading/Block in other File 
For any (?) link can use the | symbol to give an alternate display text for the link

*Heading* link: Raw link covering [George Hudson - Summary#George and Alice]
and the same one covering [[George Hudson - Summary#George and Alice|their marriage]]
*Block* link: Reginald George was Alice and George Hudson's [[George Hudson - Summary#^c80605]]  first born.   Shorter to write he was their [[George Hudson - Summary#^c80605| first born]] 

## Image Tests 
### External Image (Website)

I don't think Quartz will do the resizes in  `![text|400](https://content.ngv.vic.gov.au/col-images/api/EXHI013687/1920)`

Link to live embed image of external image, standard/default size
![text](https://content.ngv.vic.gov.au/col-images/api/EXHI013687/1920)

Same image but now forced to be 400 px
![text|400](https://content.ngv.vic.gov.au/col-images/api/EXHI013687/1920)

Same image but now forced to be 200 px
![text|200](https://content.ngv.vic.gov.au/col-images/api/EXHI013687/1920)




```dataview 
LIST FROM "" WHERE date(today) - file.mtime WHERE file.name != this.file.name SORT file.mtime DESC LIMIT 40
```

### Notes tagged \#todo
```dataview 
LIST FROM #todo SORT file.mtime DESC
```

### Notes tagged \#current 
```dataview 
LIST FROM #current 
```

14 Jul 2025
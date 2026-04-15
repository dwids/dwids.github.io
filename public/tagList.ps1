$mdFolder = "E:\E_Data\Quartz_sic\content"

$allTags = @()
Get-ChildItem "$mdFolder\*.md" | ForEach-Object {
    $content = Get-Content $_ -Raw
    if ($content -match 'tags:\s*\[(.*?)\]') {
        $tags = $matches[1] -split ',' | ForEach-Object { $_.Trim(' "') }
        $allTags += $tags
    }
}

$allTags | Sort-Object -Unique
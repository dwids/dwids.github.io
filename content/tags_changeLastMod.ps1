param(
    [Parameter(Mandatory=$true)]
    [string]$tag
)

Get-ChildItem *.md | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '(?ms)^---\s*\n(.*?)\n---') {
        $yaml = $matches[1]
        if ($yaml -match "tags:.*?- $tag" -or $yaml -match "tags:.*$tag") {
            if ($content -match 'date:\s*(.+)') {
                $dateValue = $matches[1].Trim()
                $newContent = $content -replace 'lastmod:\s*.+', "lastmod: $dateValue"
                Set-Content $_.FullName -Value $newContent -NoNewline
                Write-Host "$($_.Name) - lastmod set to: $dateValue" -ForegroundColor Green
            }
        }
    }
}
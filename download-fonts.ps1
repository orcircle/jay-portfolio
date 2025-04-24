f# 创建字体目录
$fontDir = "public/fonts"
if (-not (Test-Path $fontDir)) {
    New-Item -ItemType Directory -Path $fontDir -Force
}

# 定义字体文件列表
$fonts = @(
    @{
        Name = "SF-Pro-Display-Regular"
        Url = "https://devimages-cdn.apple.com/design/resources/download/SF-Pro.dmg"
    },
    @{
        Name = "SF-Pro-Display-Medium"
        Url = "https://devimages-cdn.apple.com/design/resources/download/SF-Pro.dmg"
    },
    @{
        Name = "SF-Pro-Display-Bold"
        Url = "https://devimages-cdn.apple.com/design/resources/download/SF-Pro.dmg"
    },
    @{
        Name = "Inter-Regular"
        Url = "https://rsms.me/inter/font-files/Inter-Regular.woff2"
    },
    @{
        Name = "Inter-Medium"
        Url = "https://rsms.me/inter/font-files/Inter-Medium.woff2"
    },
    @{
        Name = "Inter-Bold"
        Url = "https://rsms.me/inter/font-files/Inter-Bold.woff2"
    }
)

# 下载字体文件
foreach ($font in $fonts) {
    $fontName = $font.Name
    $fontUrl = $font.Url
    $woff2Path = "$fontDir/$fontName.woff2"
    $woffPath = "$fontDir/$fontName.woff"
    
    Write-Host "正在下载 $fontName..."
    
    # 对于 Inter 字体，直接从网站下载
    if ($fontName -like "Inter-*") {
        Invoke-WebRequest -Uri $fontUrl -OutFile $woff2Path
        
        # 使用 fonttools 将 woff2 转换为 woff（需要先安装 fonttools）
        # 如果没有安装 fonttools，可以跳过这一步
        if (Get-Command python -ErrorAction SilentlyContinue) {
            Write-Host "正在将 $fontName.woff2 转换为 woff 格式..."
            python -m pip install fonttools brotli
            python -c "from fontTools.ttLib import TTFont; font = TTFont('$woff2Path'); font.save('$woffPath')"
        } else {
            Write-Host "未安装 Python，跳过 woff 转换"
        }
    }
    # 对于 SF Pro 字体，需要从 DMG 中提取
    else {
        Write-Host "SF Pro 字体需要从 Apple 开发者网站下载 DMG 文件并手动提取"
        Write-Host "请访问: https://developer.apple.com/fonts/"
        Write-Host "下载 SF Pro 字体包，然后手动将字体文件复制到 $fontDir 目录"
    }
}

Write-Host "字体下载完成！"
Write-Host "注意：SF Pro 字体需要从 Apple 开发者网站手动下载，因为需要接受许可协议" 
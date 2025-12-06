# PowerShell Script to Deploy Portfolio to GitHub
# Run this AFTER you create a GitHub repository

Write-Host "🚀 Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update it? (y/n)"
    if ($overwrite -eq "y" -or $overwrite -eq "Y") {
        git remote remove origin
    } else {
        Write-Host "❌ Exiting. Please update remote manually." -ForegroundColor Red
        exit
    }
}

Write-Host "📝 Please provide your GitHub repository URL" -ForegroundColor Yellow
Write-Host "   Example: https://github.com/YOUR_USERNAME/battula-sai-anushka-portfolio.git" -ForegroundColor Gray
$repoUrl = Read-Host "GitHub Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ Repository URL is required!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "🔗 Adding remote repository..." -ForegroundColor Cyan
git remote add origin $repoUrl

Write-Host "📦 Renaming branch to 'main'..." -ForegroundColor Cyan
git branch -M main

Write-Host "🚀 Pushing code to GitHub..." -ForegroundColor Cyan
Write-Host ""
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "   1. Go to https://vercel.com" -ForegroundColor White
    Write-Host "   2. Sign in with GitHub" -ForegroundColor White
    Write-Host "   3. Click 'New Project'" -ForegroundColor White
    Write-Host "   4. Select your repository" -ForegroundColor White
    Write-Host "   5. Click 'Deploy'" -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 Your portfolio will be live at: battula-sai-anushka-portfolio.vercel.app" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Error pushing to GitHub. Please check:" -ForegroundColor Red
    Write-Host "   - Repository URL is correct" -ForegroundColor Yellow
    Write-Host "   - You have access to the repository" -ForegroundColor Yellow
    Write-Host "   - GitHub credentials are configured" -ForegroundColor Yellow
}


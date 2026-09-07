# Ensure we're in the project directory
Set-Location -Path "C:\Users\devru\OneDrive\Desktop\Insta Clone"

# Build if dist is missing
if (-not (Test-Path -Path (Join-Path (Get-Location) "dist\index.html"))) {
  npm run build
}

# Start static server (keeps running)
npm run start

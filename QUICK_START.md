# 🚀 Quick Start - Deploy Your Portfolio

## Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `battula-sai-anushka-portfolio`
3. **Make it Public** (or Private - your choice)
4. **DON'T** check "Initialize with README"
5. **Click "Create repository"**

## Step 2: Push Your Code (1 minute)

### Option A: Use the Script (Easiest)
```powershell
.\deploy.ps1
```
Then paste your GitHub repository URL when asked.

### Option B: Manual Commands
```powershell
git remote add origin https://github.com/YOUR_USERNAME/battula-sai-anushka-portfolio.git
git branch -M main
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your GitHub username)*

## Step 3: Deploy on Vercel (2 minutes)

1. **Go to**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Select** `battula-sai-anushka-portfolio` repository
5. **Click "Deploy"** (settings are auto-detected)

**That's it!** 🎉 Your site will be live in ~2 minutes at:
**`battula-sai-anushka-portfolio.vercel.app`**

---

## 🔧 Troubleshooting

### "Repository not found"
- Make sure the repository name matches exactly
- Check that you're logged into GitHub

### "Permission denied"
- You need to authenticate with GitHub
- Use GitHub Desktop or configure SSH keys

### Build fails on Vercel
- Check that `npm run build` works locally first
- All dependencies should be in `package.json` ✅ (already done)

---

## 📞 Need More Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions.


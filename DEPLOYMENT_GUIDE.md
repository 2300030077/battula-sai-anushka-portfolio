# 🚀 Deployment Guide - Battula Sai Anushka Portfolio

Your portfolio is ready to deploy! Follow these simple steps:

## ✅ What's Already Done

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Vercel configuration (`vercel.json`) ready
- ✅ SEO meta tags configured
- ✅ Mobile responsive design
- ✅ EmailJS contact form configured

## 📦 Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push to GitHub

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Repository name: `battula-sai-anushka-portfolio` (or any name you like)
   - Make it **Public** or **Private** (your choice)
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/battula-sai-anushka-portfolio.git
   git branch -M main
   git push -u origin main
   ```
   *(Replace `YOUR_USERNAME` with your GitHub username)*

### Step 2: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository** (select the one you just created)
5. **Configure**:
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
6. **Click "Deploy"**

🎉 **Done!** Your site will be live at: `battula-sai-anushka-portfolio.vercel.app`

---

## 📦 Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify

1. **Go to Netlify**: https://www.netlify.com
2. **Sign up/Login** with GitHub
3. **Click "Add new site" → "Import an existing project"**
4. **Select your GitHub repository**
5. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Click "Deploy site"**

🎉 **Done!** Your site will be live at: `battula-sai-anushka-portfolio.netlify.app`

---

## 🔧 Environment Variables (For EmailJS)

If you need to update EmailJS credentials after deployment:

1. **Vercel**: Go to Project Settings → Environment Variables
2. **Netlify**: Go to Site Settings → Environment Variables

Add these (if needed):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## 📝 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. **Vercel**: Project Settings → Domains → Add Domain
2. **Netlify**: Site Settings → Domain Management → Add Custom Domain

---

## 🐛 Troubleshooting

### Build fails?
- Make sure all dependencies are in `package.json`
- Check that `npm run build` works locally first

### EmailJS not working?
- Verify your EmailJS credentials are correct
- Check browser console for errors
- Make sure environment variables are set (if using them)

### Images not loading?
- Make sure images are in the `public` folder
- Use paths like `/assets/myphoto.jpg.jpg` (starting with `/`)

---

## ✅ Quick Test Before Deployment

Run these commands to test locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to see your production build.

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- EmailJS Docs: https://www.emailjs.com/docs/

---

**Your portfolio is production-ready! 🎉**


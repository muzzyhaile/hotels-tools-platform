# Environment Setup Guide for Hotels.tools

## 🔧 Environment Variables Configuration

Your `.env` file has been scaffolded with the following variables:

### 🤖 **OpenAI Configuration** (Required for AI Services)
```bash
OPENAI_API_KEY=your_openai_api_key_here
```
**How to get it:**
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Replace `your_openai_api_key_here` with your actual key

**Cost:** Pay-per-use, typically $0.002 per 1K tokens for GPT-4

### 📊 **Google Analytics** (For Cookie Banner)
```bash
VITE_GA_TRACKING_ID=G-DGY2ZN63NL
```
**Status:** ✅ Already configured with your tracking ID

### 📧 **Formspree** (Contact Form)
```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xanjpyjl
```
**Status:** ✅ Already configured with your endpoint

### 🛠️ **Development Settings**
```bash
NODE_ENV=development
VITE_ENABLE_AI_SERVICES=true
```

## 🚀 **Next Steps to Complete Setup**

### 1. Get OpenAI API Key
This is the **only required step** to make your AI services work:

```bash
# Replace this in your .env file:
OPENAI_API_KEY=sk-your-actual-openai-key-here
```

### 2. Add to Supabase Edge Functions
The OpenAI key also needs to be added to Supabase for the Edge Functions:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `avcucsonuulzqybwtnry`
3. Go to **Settings > Edge Functions**
4. Add environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

### 3. Optional: Additional Variables
Add these if you want to expand functionality later:

```bash
# Stripe for payments
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Custom domain (for production)
VITE_APP_URL=https://your-domain.com

# Debug mode
VITE_DEBUG_MODE=false
```

## 🔒 **Security Best Practices**

1. **Never commit `.env` to git** - it's already in `.gitignore`
2. **Use different keys for development/production**
3. **Rotate API keys regularly**
4. **Monitor API usage** to avoid unexpected charges

## 🧪 **Testing Your Setup**

After adding your OpenAI API key:

1. Restart the dev server:
   ```bash
   npm run dev
   ```

2. Go to the Dashboard and test an AI service

3. Check the browser console for any errors

## 💰 **Cost Estimates**

- **OpenAI API**: ~$0.002 per 1K tokens (very affordable for testing)
- **Supabase**: Free tier includes Edge Functions
- **Google Analytics**: Free
- **Formspree**: Free tier includes 50 submissions/month

## 🆘 **Troubleshooting**

**AI Services not working?**
- Check OpenAI API key is valid
- Ensure key is added to both `.env` and Supabase Edge Functions
- Verify billing is set up on OpenAI account

**Cookie banner not loading?**
- Check Google Analytics tracking ID
- Ensure cookies are enabled in browser

**Contact form failing?**
- Verify Formspree endpoint URL
- Check network tab for errors 
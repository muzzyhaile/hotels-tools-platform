# 🔒 Security Configuration for Hotels.tools

## 🚨 **CRITICAL: API Key Security**

### ✅ **What's Already Secure**
- `.env` file is in `.gitignore` - never committed to git
- Frontend uses `VITE_` prefixed variables (public)
- Backend API keys are separate from frontend

### 🔥 **Production Security Checklist**

#### 1. **Netlify Environment Variables**
Set these in Netlify Dashboard → Site Settings → Environment Variables:

```bash
# ✅ PUBLIC (Frontend) - Safe to expose
VITE_GA_TRACKING_ID=G-DGY2ZN63NL
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xanjpyjl
VITE_ENABLE_AI_SERVICES=true
NODE_ENV=production

# ❌ NEVER add OPENAI_API_KEY here - it would be exposed!
```

#### 2. **Supabase Edge Functions** (Secure Server-Side)
Add to Supabase Dashboard → Settings → Edge Functions → Environment Variables:

```bash
# ✅ SECURE (Server-side only)
OPENAI_API_KEY=your_actual_openai_key
```

#### 3. **Environment Variable Rules**

| Variable Type | Prefix | Exposed to Frontend | Example |
|---------------|--------|-------------------|---------|
| **Public** | `VITE_` | ✅ Yes (Safe) | `VITE_GA_TRACKING_ID` |
| **Private** | No prefix | ❌ No (Secure) | `OPENAI_API_KEY` |

### 🛡️ **Security Architecture**

```
Frontend (Public)
├── VITE_GA_TRACKING_ID ✅ Safe to expose
├── VITE_FORMSPREE_ENDPOINT ✅ Safe to expose
└── Supabase Anon Key ✅ Safe (RLS protected)

Backend (Supabase Edge Functions)
├── OPENAI_API_KEY 🔒 Server-side only
└── Database access 🔒 Protected by RLS
```

### 🔍 **Security Verification**

#### Check Frontend Bundle (Should NOT contain):
```bash
# Build and check for exposed secrets
npm run build
grep -r "sk-" dist/ # Should return nothing
grep -r "OPENAI_API_KEY" dist/ # Should return nothing
```

#### Check Network Tab:
- OpenAI API calls go through Supabase Edge Functions
- Never direct frontend → OpenAI API calls
- All API keys stay server-side

### 🚀 **Production Deployment Steps**

1. **Set Netlify Environment Variables**:
   ```bash
   VITE_GA_TRACKING_ID=G-DGY2ZN63NL
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xanjpyjl
   NODE_ENV=production
   ```

2. **Set Supabase Environment Variables**:
   ```bash
   OPENAI_API_KEY=your_actual_openai_key
   ```

3. **Deploy**:
   ```bash
   git add .
   git commit -m "Production deployment"
   git push origin main
   ```

### 🔒 **Additional Security Measures**

#### Rate Limiting (Already Implemented)
- Supabase Edge Functions have built-in rate limiting
- User authentication required for AI services

#### CORS Protection
- Supabase configured with proper CORS headers
- Only your domain can access the API

#### Data Privacy
- GDPR compliant cookie banner
- User data encrypted in Supabase
- No sensitive data in localStorage

### 🚨 **Security Red Flags to Avoid**

❌ **NEVER DO THIS**:
```bash
# DON'T: Expose API keys in frontend
VITE_OPENAI_API_KEY=sk-...  # ❌ Would be visible to users!

# DON'T: Hardcode keys in code
const apiKey = "sk-..." // ❌ Would be in git history!

# DON'T: Put secrets in package.json
"scripts": {
  "start": "OPENAI_API_KEY=sk-... vite" // ❌ Exposed!
}
```

✅ **CORRECT APPROACH**:
```bash
# Frontend (.env) - Public variables only
VITE_GA_TRACKING_ID=G-DGY2ZN63NL

# Supabase Edge Functions - Private variables
OPENAI_API_KEY=sk-your-secret-key
```

### 📊 **Security Monitoring**

Monitor for:
- Unusual API usage spikes
- Failed authentication attempts  
- OpenAI API billing alerts
- Supabase security advisors

### 🆘 **Security Incident Response**

If API key is compromised:
1. Immediately revoke the key in OpenAI dashboard
2. Generate new key
3. Update Supabase environment variables
4. Monitor usage for unauthorized charges
5. Audit git history if needed

---

## ✅ **Your Setup is Secure When**:
- ✅ OPENAI_API_KEY is only in Supabase Edge Functions
- ✅ No API keys in git history
- ✅ Netlify environment variables contain only VITE_ prefixed vars
- ✅ AI services work through Supabase (not direct OpenAI calls)
- ✅ Cookie banner manages user consent properly 
# Custom Domain Setup Guide

## Setting up mutualthriving.org with GitHub Pages

This guide walks you through connecting your world4you.com domain to your GitHub Pages site.

---

## Step 1: Configure DNS Records in world4you.com

Log in to your world4you.com account and navigate to your domain's DNS settings for `mutualthriving.org`. Add the following DNS records:

### A Records (Required for Apex Domain)

Add **4 A records** pointing to GitHub's IP addresses:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** `@` represents the apex/root domain (mutualthriving.org)

### AAAA Records (Optional - IPv6 support)

For IPv6 support, also add these **4 AAAA records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| AAAA | @ | 2606:50c0:8000::153 | 3600 |
| AAAA | @ | 2606:50c0:8001::153 | 3600 |
| AAAA | @ | 2606:50c0:8002::153 | 3600 |
| AAAA | @ | 2606:50c0:8003::153 | 3600 |

### WWW Subdomain (Recommended)

Add a CNAME record to redirect www traffic to your apex domain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | mutualthriving.org | 3600 |

---

## Step 2: Push CNAME file to GitHub

The `CNAME` file has already been created in your repository. Make sure to commit and push it:

```bash
cd mutualthriving.github.io
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

---

## Step 3: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under "Custom domain", enter: `mutualthriving.org`
4. Click **Save**
5. Wait a few minutes, then check the box for **Enforce HTTPS** (this will be available once DNS propagates)

---

## Step 4: Verify Setup

DNS propagation can take anywhere from a few minutes to 48 hours. To check if it's working:

1. **Check DNS propagation:**
   - Visit: https://dnschecker.org/
   - Enter: `mutualthriving.org`
   - Verify A records point to GitHub's IPs

2. **Test the site:**
   - After DNS propagates, visit: http://mutualthriving.org
   - Once HTTPS is enabled: https://mutualthriving.org

3. **Verify HTTPS:**
   - In GitHub Pages settings, ensure "Enforce HTTPS" is enabled
   - This may take up to 24 hours after DNS propagation

---

## Troubleshooting

### DNS not propagating?
- Wait at least 1 hour, DNS changes can take time
- Clear your browser cache and try in incognito mode
- Check with `nslookup mutualthriving.org` or `dig mutualthriving.org`

### GitHub Pages shows 404?
- Ensure the CNAME file is in the root of your repository
- Verify the repository name is correct (should be `mutualthriving.github.io`)
- Check that GitHub Pages is enabled in repository settings

### "Domain's DNS record could not be retrieved" error?
- Wait for DNS propagation (can take up to 48 hours)
- Verify A records are correctly configured in world4you.com
- Try removing and re-adding the custom domain in GitHub settings

### HTTPS not working?
- HTTPS requires valid DNS configuration first
- Wait for DNS to fully propagate before enabling HTTPS
- GitHub automatically provisions SSL certificates via Let's Encrypt

---

## World4you.com Specific Notes

When configuring DNS in world4you.com:
- The interface may use different terminology (e.g., "Host" instead of "Name")
- Use `@` or leave the host field empty for apex domain records
- Some interfaces may require you to enter the full domain name instead of `@`
- TTL might be set automatically - 3600 seconds (1 hour) is recommended

---

## Post-Setup Checklist

- [ ] A records configured in world4you.com
- [ ] CNAME file pushed to GitHub repository
- [ ] Custom domain configured in GitHub Pages settings
- [ ] DNS has propagated (check with dnschecker.org)
- [ ] Site accessible at mutualthriving.org
- [ ] HTTPS enabled and working
- [ ] www.mutualthriving.org redirects to apex domain (if CNAME configured)

---

## Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [world4you.com DNS Management](https://www.world4you.com/)
- [DNS Checker Tool](https://dnschecker.org/)

---

Once everything is set up, your site will be live at **https://mutualthriving.org**! 🎉

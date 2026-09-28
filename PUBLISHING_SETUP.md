# CI/CD & App Store Publishing Setup Guide

This guide is for the **Project Administrator** or **DevOps Engineer**. 

Everyday developers *do not* need to do this. This setup only needs to be completed **once per repository** to give GitHub Actions the permission to upload apps to your Apple App Store Connect account.

---

## Step 1: Generate an App Store Connect API Key
Apple requires a secure API key to bypass 2FA (Two-Factor Authentication) in automated environments.

1. Log in to [App Store Connect](https://appstoreconnect.apple.com/) as an Account Holder or Admin.
2. Go to **Users and Access** -> **Integrations** -> **App Store Connect API**.
3. Click the **+** button to generate a new API Key.
   - **Name:** "GitHub Actions CI/CD"
   - **Access:** "App Manager"
4. Once created, you will see three things on the screen. **Write these down:**
   - **Issuer ID** (At the top of the page, e.g., `69a6de82-53b1-47e3-e053-5b8c7c11a4d1`)
   - **Key ID** (Next to your new key, e.g., `A1B2C3D4E5`)
5. Click **Download API Key**. This will download a `.p8` file to your computer (e.g., `AuthKey_A1B2C3D4E5.p8`). *Keep this safe, you can only download it once.*

---

## Step 2: Convert the Private Key
GitHub Secrets cannot easily accept raw `.p8` files, so you must convert the file into a Base64 text string.

1. Open your Mac Terminal.
2. Run the following command (replacing the filename with your actual `.p8` file):
   ```bash
   base64 -i ~/Downloads/AuthKey_A1B2C3D4E5.p8 | pbcopy
   ```
*(This command converts the file and automatically copies the giant text string to your clipboard).*

---

## Step 3: Add the Keys to GitHub Secrets
Now, you need to securely store these credentials in your repository so Fastlane can use them.

1. Go to your repository on **GitHub**.
2. Click **Settings** -> **Secrets and variables** -> **Actions**.
3. Click **New repository secret** and add the following three secrets exactly as named:

| Secret Name | What to Paste |
| :--- | :--- |
| `ASC_ISSUER_ID` | The Issuer ID from Step 1. |
| `ASC_KEY_ID` | The Key ID from Step 1. |
| `ASC_PRIVATE_KEY` | The Base64 string you copied in Step 2. |

---

## Step 4: Fastlane Match (Certificate Password)
If your organization is using `fastlane match` to securely manage iOS certificates across your team, you will also need to provide the decryption password.

1. On the same GitHub Secrets page, create one more secret:
   - **Name:** `MATCH_PASSWORD`
   - **Value:** (The password your team uses to decrypt the `match` certificate repository).

---

## 🎉 You're Done!
The CI/CD pipeline is now fully authenticated. 

When a developer triggers the GitHub Action, Fastlane will use these secrets to securely log in to Apple, download the provisioning profiles, sign the app, and push the `.ipa` to TestFlight without ever prompting for an Apple ID or SMS code.

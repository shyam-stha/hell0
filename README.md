# Funcove App Automation Template

This repository is a full-stack starter template for building HTML/JS web apps and automatically publishing them to the iOS App Store.

## 🛠️ Local Development (Building the App)

1. **Clone and Install:**
   ```bash
   git clone <this-repo> my-new-app
   cd my-new-app
   npm install
   ```

2. **Start the Dev Server:**
   ```bash
   npm run dev
   ```
   *This starts a Vite server at `http://localhost:5173`. Edit files in `src/` and see changes instantly.*

3. **Build Your App:**
   Write your app logic inside the `src/` folder. When you are ready to test the compiled version:
   ```bash
   npm run build
   ```
   *This packages your app into the `dist/` folder.*

---

## 📱 Local iOS Simulator Testing
Want to test how your app feels natively on an iPhone before publishing? 
👉 **[Read the Local Testing Guide (LOCAL_TESTING.md)](LOCAL_TESTING.md)**.

---

## 🚀 Publishing to the App Store

> **Admin Notice:** If you are setting up this repository for the first time, you must configure the Apple API Keys in GitHub. 
> 👉 **[Read the CI/CD Publishing Setup Guide (PUBLISHING_SETUP.md)](PUBLISHING_SETUP.md)**.

When your app is ready to be published as a native iOS app, the pipeline does the heavy lifting for you.

### 1. Configure the App Metadata
Open `app_config.json` and set your app's App Store details:
```json
{
  "appName": "My Awesome App",
  "bundleId": "com.funcove.myawesomeapp",
  "version": "1.0.0"
}
```

### 2. Set the App Icon & Splash Screen
Replace the placeholder graphics in the `assets/` folder:
- **Icon:** Overwrite `assets/icon.png` (Must be exactly 1024x1024, no transparency).
- **Splash Screen:** Overwrite `assets/splash.png` (Must be exactly 2732x2732).

### 3. Push to GitHub
```bash
git add .
git commit -m "feat: ready for app store release"
git push origin main
```

### 4. Trigger the CI/CD Pipeline
1. Go to the **Actions** tab in your repository.
2. Select the **Publish iOS App** workflow.
3. Click **Run workflow**.

**What happens next?**
The cloud server will automatically build your web app (`npm run build`), slice your icons into Apple's required sizes, inject your configuration into the iOS wrapper, sign the app securely with Fastlane, and upload it to App Store Connect/TestFlight!

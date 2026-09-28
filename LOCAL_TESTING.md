# Local iOS Testing with Xcode

While this template is designed to automatically publish your app using the cloud CI/CD pipeline (meaning you never *have* to use Xcode), there are times you'll want to test how your app feels natively on an iPhone before releasing it.

You can easily do this using the **iOS Simulator** built into Xcode.

## Prerequisites
- A Mac computer.
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835) installed from the Mac App Store.

## Step 1: Build and Sync Your App
Before opening Xcode, you need to compile your latest JavaScript code and copy it into the iOS project. 

In your terminal, run:
```bash
npm run build
npm run sync:ios
```
*(You must do this every time you make a change in your JS/HTML that you want to test in the simulator).*

## Step 2: Open Xcode
You can open the project in Xcode directly from the terminal by running:
```bash
npx cap open ios
```
*(Alternatively, you can manually navigate to the `ios/App/` folder and double-click the `App.xcworkspace` file).*

## Step 3: Run in the Simulator
1. Look at the top center of the Xcode window. You will see a device selector (it might say "Any iOS Device" or "iPhone 15 Pro").
2. Click the selector and choose an **iOS Simulator** from the list (e.g., iPhone 15, iPad Pro).
3. Click the **Play (Run) button ▶️** in the top left corner (or press `Cmd + R` on your keyboard).
4. The simulator will launch, install your app, and open it natively.

## Step 4: Debugging with Safari (Optional)
If you need to inspect elements, view console logs, or debug your JavaScript while the app is running in the simulator:
1. Open the **Safari** web browser on your Mac.
2. In the top menu bar, go to **Develop** -> **Simulator** -> **[Your App Name]**.
3. A Web Inspector window will pop up, identical to Chrome DevTools, allowing you to debug the live iOS app.

*(Note: If you don't see the 'Develop' menu in Safari, go to Safari Settings -> Advanced -> check "Show Develop menu in menu bar").*

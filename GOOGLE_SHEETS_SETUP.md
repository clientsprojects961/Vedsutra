# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically save all orders from your Vedsutra website.

## Step-by-Step Instructions

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Vedsutra Orders" or "Order Management"

### 2. Open Apps Script
1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. A new tab will open with the Apps Script editor

### 3. Paste the Script Code
1. Delete any default code in the editor
2. Open the file `google-apps-script.js` from your project root
3. Copy the entire contents of that file
4. Paste it into the Apps Script editor
5. Click **Save** (or press Ctrl+S / Cmd+S)
6. Give your project a name like "Vedsutra Orders"

### 4. Deploy as Web App
1. Click on **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app** from the dropdown
4. Fill in the deployment settings:
   - **Description**: "Vedsutra Order Submission API" (or any description you like)
   - **Execute as**: Select **Me** (your email address)
   - **Who has access**: Select **Anyone** (this is important!)
5. Click **Deploy**

### 5. Authorize the Script
1. A popup will appear asking you to authorize the script
2. Click **Authorize access**
3. Choose your Google account
4. You may see a warning that the app is not verified - this is normal for personal scripts
5. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
6. Click **Allow** to grant permissions

### 6. Copy the Web App URL
1. After deployment, you'll see a "Web app URL"
2. Copy this entire URL (it will look like: `https://script.google.com/macros/s/...`)
3. **Important**: Keep this URL private and don't share it publicly

### 7. Add URL to Your Website
1. Open `src/lib/googleSheets.ts` in your project
2. Find the line: `const GOOGLE_SHEET_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with the URL you copied
4. Save the file

### 8. Test the Integration
1. Make a test order on your website
2. Check your Google Sheet - you should see a new row with the order details
3. The sheet will automatically create an "Orders" sheet with proper headers on the first order

## What Gets Saved to Google Sheets

Each order will create a new row with the following information:
- Date Added (when the order was added to the sheet)
- Order Timestamp (when the order was placed)
- Name
- Phone
- Email
- Address
- City
- State
- Pincode
- Product
- Package
- Quantity
- Total Price (₹)
- Payment Mode (cod or online)
- Status (defaults to "Pending" - you can manually update this)

## Troubleshooting

### Orders aren't appearing in the sheet
1. Check that the Web App URL is correctly pasted in `googleSheets.ts`
2. Make sure the deployment has "Who has access" set to "Anyone"
3. Check the browser console for any error messages
4. Verify the script is saved and deployed correctly

### Getting permission errors
1. Make sure you clicked "Allow" when authorizing the script
2. Try redeploying the script
3. Check that "Execute as" is set to "Me"

### Need to update the script
1. Make changes in the Apps Script editor
2. Click **Save**
3. Click **Deploy** → **Manage deployments**
4. Click the pencil icon ✏️ next to your deployment
5. Click **New version** and then **Deploy**
6. The URL will remain the same, so no need to update your website code

## Security Notes

- Keep your Web App URL private
- Don't commit the URL to public repositories
- Consider adding IP restrictions if needed (advanced)
- Regularly check your sheet for suspicious activity

## Need Help?

If you encounter any issues:
1. Check the Apps Script execution log: **Executions** in the left sidebar
2. Check browser console for JavaScript errors
3. Verify all steps were followed correctly

---

**Note**: The script will automatically create the "Orders" sheet and format it with headers on the first order submission.


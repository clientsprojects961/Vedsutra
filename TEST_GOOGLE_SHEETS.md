# Testing Google Sheets Integration

## Quick Test Steps

1. **Test the Google Apps Script directly:**
   - Open this URL in your browser: `https://script.google.com/macros/s/AKfycbyj4DjI4zWVpYIsO6wBlzGWC7ipmNWd8SPQWzqp6wwoiugm1Dtf7PZbz5tN4I0bCcKD/exec`
   - You should see: `{"message":"Vedsutra Order API is running","status":"active","timestamp":"..."}`
   - If you see this, the script is deployed correctly

2. **Check your Google Sheet:**
   - Open your Google Sheet (the one where you pasted the script)
   - Look for a sheet/tab named "Orders"
   - If it doesn't exist, the script will create it on the first order
   - Make sure the script has permission to edit the sheet

3. **Test with a real order:**
   - Go to your website
   - Fill out the checkout form
   - Submit an order
   - Check the browser console (F12 → Console tab)
   - You should see: `✅ Order data sent to Google Sheets:`
   - Check your Google Sheet - a new row should appear

## Common Issues & Solutions

### Issue 1: Script not deployed correctly
**Solution:**
- Go to Apps Script → Deploy → Manage deployments
- Make sure "Who has access" is set to "Anyone"
- Make sure "Execute as" is set to "Me"
- If you made changes to the script, create a new version

### Issue 2: Permission errors
**Solution:**
- The script needs permission to edit your spreadsheet
- When you first run it, Google will ask for permission
- Click "Allow" or "Authorize access"

### Issue 3: Data not appearing
**Check:**
- Open Apps Script → Executions (left sidebar)
- Look for recent executions
- Click on one to see if there are any errors
- Check the logs for error messages

### Issue 4: Sheet name confusion
**Note:**
- The **spreadsheet** name can be anything (you named it "Orders")
- The script creates a **sheet/tab** inside the spreadsheet also named "Orders"
- If you already have a sheet named "Orders", the script will use that one
- If not, it will create a new sheet named "Orders"

## Debugging in Browser Console

When you submit an order, open the browser console (F12) and look for:
- `✅ Order data sent to Google Sheets:` - This means the request was sent
- `❌ Failed to submit order` - This means there was an error

The order will still go through even if Google Sheets fails (to prevent losing orders).

## Manual Test in Apps Script

1. Open Apps Script editor
2. Find the function `testSubmission` in the code
3. Click on it in the function dropdown
4. Click the Run button (▶️)
5. Authorize if prompted
6. Check your sheet - you should see a test order


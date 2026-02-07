/**
 * Google Apps Script for Vedsutra Order Management
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete the default code and paste this entire script
 * 4. Save the project (give it a name like "Vedsutra Orders")
 * 5. Click "Deploy" → "New deployment"
 * 6. Click the gear icon ⚙️ next to "Select type" and choose "Web app"
 * 7. Set the following:
 *    - Description: "Vedsutra Order Submission API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the "Web app URL" that appears
 * 10. Paste that URL into src/lib/googleSheets.ts as GOOGLE_SHEET_URL
 * 
 * The script will automatically create a sheet named "Orders" if it doesn't exist
 * and add headers on the first run.
 */

// Function to handle POST requests from the website
function doPost(e) {
  try {
    let data;
    
    // Handle different data formats
    if (e.postData && e.postData.contents) {
      // Try to parse as JSON first
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        // If JSON parsing fails, try to get data from form parameters
        if (e.parameter && e.parameter.data) {
          data = JSON.parse(e.parameter.data);
        } else {
          // Try to parse as URL-encoded form data
          const params = e.parameter;
          if (params) {
            data = {
              timestamp: params.timestamp || new Date().toISOString(),
              name: params.name || "",
              phone: params.phone || "",
              email: params.email || "",
              address: params.address || "",
              city: params.city || "",
              state: params.state || "",
              pincode: params.pincode || "",
              product: params.product || "",
              size: params.size || "",
              quantity: parseInt(params.quantity) || 1,
              price: parseFloat(params.price) || 0,
              paymentMode: params.paymentMode || "cod"
            };
          } else {
            throw new Error("No data received");
          }
        }
      }
    } else if (e.parameter && e.parameter.data) {
      // Handle form-encoded data
      data = JSON.parse(e.parameter.data);
    } else {
      throw new Error("No post data received");
    }
    
    // Get or create the Orders sheet
    const sheet = getOrCreateOrdersSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      addHeaders(sheet);
    }
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp (auto-generated)
      data.timestamp || new Date().toISOString(), // Order timestamp
      data.name || "",
      data.phone || "",
      data.email || "",
      data.address || "",
      data.city || "",
      data.state || "",
      data.pincode || "",
      data.product || "",
      data.size || "",
      data.quantity || 1,
      data.price || 0,
      data.paymentMode || "cod",
      "Pending" // Status (you can manually update this)
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Order submitted successfully",
        row: sheet.getLastRow()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log("Error in doPost: " + error.toString());
    Logger.log("Post data: " + JSON.stringify(e));
    
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "Vedsutra Order API is running",
      status: "active",
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Helper function to get or create the Orders sheet
function getOrCreateOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Orders");
  
  if (!sheet) {
    // Create the Orders sheet if it doesn't exist
    sheet = spreadsheet.insertSheet("Orders");
    addHeaders(sheet);
  }
  
  return sheet;
}

// Helper function to add column headers
function addHeaders(sheet) {
  const headers = [
    "Date Added",
    "Order Timestamp",
    "Name",
    "Phone",
    "Email",
    "Address",
    "City",
    "State",
    "Pincode",
    "Product",
    "Package",
    "Quantity",
    "Total Price (₹)",
    "Payment Mode",
    "Status"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#4285f4");
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
  
  // Freeze the header row
  sheet.setFrozenRows(1);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

// Optional: Function to test the script locally
function testSubmission() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: "Test Customer",
    phone: "9876543210",
    email: "test@example.com",
    address: "123 Test Street",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    product: "Vedsutra Detox Foot Patch - 10 Patches",
    size: "1 Pack (10 Patches)",
    quantity: 1,
    price: 1199,
    paymentMode: "cod"
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}


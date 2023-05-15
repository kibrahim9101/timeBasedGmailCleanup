function cleanUp(age, emailAddress) { 
  //deletes any email that is older than the amount of days specified in the age argument
  let oldestDate = new Date(); //gets today's date
  oldestDate.setDate(oldestDate.getDate() - age); //get the date cutoff for your email search, by subtracting the amount of days from today's date. any email older than this date will get deleted during the for loop below.
  let emailSearchResults = GmailApp.search("before:" + oldestDate.toISOString().split('T')[0]); // runs a search for the emails you want to clean up. every email in the search will be in this variable as an array. Adds the date filter by putting in a before:DATE search operator
  let amountCleaned = 0; //counts how many emails were removed
  for (let i = 0; i < emailSearchResults.length; i++){ //for loop will cycle through the emailSearchResults array.
      emailSearchResults[i].moveToTrash();
      amountCleaned++;
  }
  let finalSearch = new String(); //finalSearch is to get the text of the search run by GmailApp.Search and saved to emailSearchResults
  finalSearch = searchString + " before:" + oldestDate.toISOString().split('T')[0];
  //Sends an email that will notify you of what the search was and how many emails were deleted.
  GmailApp.sendEmail(emailAddress, searchString + ": Script removed " + amountCleaned.toString() + " Emails", "Your email cleanup script for search" + '"' + finalSearch + '"' + " sucessfully ran"); // edited this line to display the full search from emailSearchResults for troubleshooting purposes
}

function cleanUp(age, emailAddress, searchString) {
  //function takes a number in days and a search as a string to delete anything older than the amount of days you specify in the arguments.
  let oldestDate = new Date(); //gets today's date
  oldestDate.setDate(oldestDate.getDate() - age); //get the date cutoff for your email search, by subtracting the amount of days from today's date. any email older than this date will get deleted during the for loop below.
  let emailSearchResults = GmailApp.search(searchString + " before:" + oldestDate.toISOString().split('T')[0]); // runs a search for the emails you want to clean up. every email in the search will be in this variable as an array. Adds the date filter by putting in a before:DATE search operator
  let amountCleaned = 0; //counts how many emails were removed
  for (let i = 0; i < emailSearchResults.length; i++){ //for loop will cycle through the emailSearchResults array.
      emailSearchResults[i].moveToTrash();
      amountCleaned++;
  }
  let finalSearch = new String(); //finalSearch is to get the text of the search run by GmailApp.Search and saved to emailSearchResults
  finalSearch = searchString + " before:" + oldestDate.toISOString().split('T')[0];
  //Sends an email that will notify you of what the search was and how many emails were deleted.
  GmailApp.sendEmail(emailAddress, searchString + ": Script removed " + amountCleaned.toString() + " Emails", "Your email cleanup script for search" + '"' + finalSearch + '"' + " sucessfully ran"); // edited this line to display the full search from emailSearchResults for troubleshooting purposes
}

function runCleanUp(){
  // call your cleanUp functions inside this function and then have Google Apps Script run this function on a trigger.
}

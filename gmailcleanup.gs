function cleanUp(yourEmailAddress, ageInDays) {
  //function takes a number in days and and will delete anything older than the amount of days you specify in the arguments.
  let oldestDate = new Date();
  oldestDate.setDate(oldestDate.getDate() - ageInDays); //get the date cutoff for your email search, by subtracting the amount of days from today's date. any email older than this date will get deleted during the for loop below.
  let emailSearchResults = GmailApp.search("before:" + oldestDate.toISOString().split('T')[0]); // runs a search for the emails you want to clean up. every email in the search will be in this variable as an array. Adds the date filter by putting in a before:DATE search operator
  let amountCleaned = 0; //counts how many emails were removed
  for (let i = 0; i < emailSearchResults.length; i++){ //for loop will cycle through the emailSearchResults array.
      emailSearchResults[i].moveToTrash();
      amountCleaned++;
  }
  //Sends an email that will notify you of what the search was and how many emails were deleted.
  GmailApp.sendEmail(yourEmailAddress, ": Script removed " + amountCleaned.toString() + " Emails", "Your email cleanup script sucessfully ran");
}

function cleanUp(yourEmailAdress, ageInDays, searchString) {
  //function takes a number in days and a search as a string to delete anything older than the amount of days you specify in the arguments.
  let oldestDate = new Date();
  oldestDate.setDate(oldestDate.getDate() - ageInDays); //get the date cutoff for your email search, by subtracting the amount of days from today's date. any email older than this date will get deleted during the for loop below.
  let emailSearchResults = GmailApp.search(searchString + " before:" + oldestDate.toISOString().split('T')[0]); // runs a search for the emails you want to clean up. every email in the search will be in this variable as an array. Adds the date filter by putting in a before:DATE search operator
  let amountCleaned = 0; //counts how many emails were removed
  for (let i = 0; i < emailSearchResults.length; i++){ //for loop will cycle through the emailSearchResults array.
      emailSearchResults[i].moveToTrash();
      amountCleaned++;
  }
  //Sends an email that will notify you of what the search was and how many emails were deleted.
  GmailApp.sendEmail(yourEmailAdress, searchString + ": Script removed " + amountCleaned.toString() + " Emails", "Your email cleanup script for search" + '"' + searchString + '"' + " sucessfully ran");
}

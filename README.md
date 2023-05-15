# timeBasedGmailCleanup
A function to automatically delete emails from your Gmail, for use in Google Apps Script.

## Why use this?
If you're like me, you probably have about 900 unread emails sitting in your inbox. Gmails filters are great, but they don't do anything beyond applying labels and forwarding emails. Honestly, once an email gets to be about a week old, unread or not, I probably thought it was useless based on the subject line. Also most emails are useless after about 2 weeks honestly. I wrote this script to find emails that were too old and delete them. You can delete any email that is older than a specified amount of days or narrow the list down with a search and age and delete only the ones that match that search criteria.

## Installation
You'll first want to create a new Google Apps Script project. Go to Google Drive while signed in as the same account you want to work on emails for. Click on *NEW*, then hover over *More*, then click on *Google Apps Script.* It will open up a new page with a blank function. Copy all the text in *gmailCleanup.gs* and replace the contents of your current script. Click the save icon. Additionally, rename the project with an easily identifiable name, in case you need to come back later to edit the script.

### Specify how old an email needs to be
At the bottom of the script you'll see a function `runCleanUp`. Google Apps Script triggers will not let you pass arguments to a function before running it. In order to work around this I created the `runCleanUp` function as a container for the `cleanUp` function calls. If you don't need any advanced functionality

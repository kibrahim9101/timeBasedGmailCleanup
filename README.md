# timeBasedGmailCleanup
A function to automatically delete emails from your *Gmail*, for use in *Google Apps Script.*

## Why use this?
If you're like me, you probably have about 900 unread emails sitting in your inbox. *Gmail* filters are great, but they don't do anything beyond applying labels and forwarding emails. Honestly, once an email gets to be about a week old, unread or not, I probably thought it was useless based on the subject line. Also most emails are useless after about 2 weeks honestly. I wrote this script to find emails that were too old and delete them. You can delete any email that is older than a specified amount of days or narrow the list down with a search and age and delete only the ones that match that search criteria. The script will also send a report specifying the search criteria and how many emails were deleted.

## Installation
You'll first want to create a new *Google Apps Script* project. Go to *Google Drive* while signed in as the same account you want to work on emails for. Click on *NEW*, then hover over *More*, then click on *Google Apps Script.* It will open up a new page with a blank function. Copy all the text in *gmailCleanup.gs* and replace the contents of your current script. Click the save icon. Additionally, rename the project with an easily identifiable name, in case you need to come back later to edit the script.

## Set up a simple clean.
At the bottom of the script you'll see a function `runCleanUp`. *Google Apps Script* triggers will not let you pass arguments to a function before running it. In order to work around this I created the `runCleanUp` function as a container for the `cleanUp` function calls. If you don't need any advanced functionality, simply change `00` in the line `cleanup(00, "your@emailaddress.com");` to the number of days an email needs to be old before it gets deleted and replace `your@emailaddress.com` with the email address you want to send the confirmation reports to (Remember to keep the quotation marks).

## Run it manually
At the top of the *Google Apps Script* page is a *Run* button with a dropdown for the functions in your current script. Select *runGmailCleanUp* from the list then click *Run.* This will run the function one time, delete the emails older than the age specified, then send a report to the email you specified.

## Run it automatically
To run the script periodically (I like to run it once a night) you need to set up a *Trigger.* Click on the stopwatch icon on the left side of the page, then click on *Add Trigger.* The following dialog box will show up:

![Screenshot 2023-05-15 113315](https://github.com/kibrahim9101/timeBasedGmailCleanup/assets/3267795/e46d3f1c-2d3a-4b41-bbc8-dd052183066c)

Choose *runCleanUp* as the function to run, *Head* as the deployment, choose *Time-driven* as the event source, then specify how often you want the script to run and what time of day the script will run. The screenshot shows a trigger for once per week, on Mondays at midnight.

## Narrow down what it deletes
If you do not want this script to search through all of your emails, use the second `cleanUp` function with 3 arguments. The final argument, `searchString` will accept any valid *Gmail* search as a string (remember to surround in quotation marks). For example if you want to delete only emails you have already read that are older than 2 weeks, your function call will look like:

`cleanUp(14, "your@emailaddress.com", "is:read")`

## Advanced Functionality
I highly recommend you look through the available [Gmail Search Operators](https://support.google.com/mail/answer/7190?hl=en) in order to make full use of the search functionality. You can call `cleanUp` as many times as you'd like with a different search string in each instance. I have several of these called personally, one per label I have in *Gmail*. Some operators I find especially useful:

- *AND/OR/NOT*: Use these boolean operators to combine search criteria and get subsets of emails
- *is:starred/important*: This will search for emails with a star or marked important.
  - I personally love using "NOT is:starred" so that starred emails will be excluded by the script.
- *has:(some colored icon)*: If you use alternative icons like the colored stars, you can specified which one with the *has* operator. The *is:starred* search term will grab anything with an icon regardless of the color or how it looks.
- *label:/category:(name)*: This will narrow the search down to the specific label or category if you use those to organize your inbox.

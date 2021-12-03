# timeBasedGmailCleanup
A function to automatically delete emails from your Gmail, for use in Google Apps Script.

## What this Does
If you're like me, you probably have about 900 unread emails sitting in your inbox. Gmails filters are great, but they don't do anything beyond applying labels and forwarding emails. Honestly, once an email gets to be about a week old, unread or not, I probably thought it was useless based on the subject line. This script works with Google Apps Script to automatically find emails that are too old and delete them. It can simply delete emails older than a specified number of days or it can run a search and apply the date filter to delete specific emails that are too old. Additionally, it will send you an email notifying you that the script ran and how many emails it deleted, as well as what custom search it ran before deleting those emails.

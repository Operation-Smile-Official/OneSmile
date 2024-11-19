# URL should be changed to the URL of the site you wish to apply the local template to
$url = "https://opsmile.sharepoint.com/sites/333-InteractiveLearningCenter"

# Connect to the site
Connect-PnPOnline -Url $url -Interactive -ClientId af572b63-f407-4234-bc36-0afc8209a8db

# Replace the text in "" with the path to your local template
Invoke-PnPSiteTemplate -Path "C:\SiteTemplates\projects-ext\DepartmentTemplate.xml"

# Disconnect
Disconnect-PnPOnline
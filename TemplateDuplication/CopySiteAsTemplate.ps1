# Assign URL to the site you wish to copy the template of
$url = "https://opsmile.sharepoint.com/sites/205-DonorRelations"

# Connect to the site
Connect-PnPOnline -Url $url -Interactive -ClientId af572b63-f407-4234-bc36-0afc8209a8db

# Line 9 must be rewritten to accomodate to your local machine's filesystem. The first "" must contain the path to your config.json file
# The second "" should contain the location and filename you wish to assign to the template (it will be saved to your local machine)
Get-PnPSiteTemplate -IncludeAllClientSidePages -PersistBrandingFiles -Configuration "C:\SiteTemplates\projects-ext\config.json" -Out "C:\SiteTemplates\projects-ext\DepartmentTemplate.xml"

# Disconnect
Disconnect-PnPOnline
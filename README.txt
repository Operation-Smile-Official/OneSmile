This repository contains all files and scripts relevant to the new OneSmile SharePoint Intranet and its development.
NOTE: This repository is publicly accessible and may be cloned by anyone. Please take this into account when making any commits

Author: Jackson Ornoff
Date last modified: 11/19/2024

1. GlobalStyles.css : 
    Author: Ariel McNichol
    This css file is applied to all pages in the intranet through the Custom Script Editor Web Part. 
    Modification of this file will change the appearance of ALL PAGES. Please test styling changes prior to applying them to this file.

2. TemplateDuplication : 
    This folder contains the scripts and files required to duplicate a site.
    
    2.1: CopySiteAsTemplate.ps1 :
        Author: Jackson Ornoff
        WARNING: It is integral that you open and modify this file (as instructed within it) PRIOR to running it.
        This PowerShell script must be run in PowerSehll 7 (or a greater version) to work.
        This script allows any SharePoint administrator to copy a Sharepoint site (including all of its files, pages, navigation, permissions, etc.)
        The template will be saved locally to your machine. You will need to assign a path to where you would like it to be saved.

    2.2: ApplyLocallySavedSiteTemplate.ps1 : 
        Author: Jackson Ornoff
        WARNING: It is integral that you open and modify this file (as instructed within it) PRIOR to running it.
        WARNING: Running this script will delete everything from the target site (where the template will be applied).
        NOTE: It is recommended to only run this script on a blank SharePoint communication site.
        NOTE: Running this script REQUIRES 2.3: config.json to work.
        This PowerShell script must be run in PowerShell 7 (or a greater version) to work.
        This script allows any SharePoint administrator to apply a locally saved template created by 2.1: CopySiteAsTemplate.ps1 to an existing SharePoint site.

    2.3: config.json :
        Author: Jackson Ornoff
        This json file is integral to the function of 2.2: ApplyLocallySavedSiteTemplate.ps1.
        This file does not need to be modified, but may be edited if certain aspects of the copied site should/should not be applied to the target site.

    2.4: EnableScripting.txt :
        Author: Jackson Ornoff
        This text file contains the SharePoint Online Management Shell commands required to enable custom scripting permanently on a SharePoint site.
        Without running these commands, CSS will likely not work on a new site.
        While it is possible to enable scripting from the SharePoint Admin Panel, it will turn itself off after 24 hours. These commands are a work-around.
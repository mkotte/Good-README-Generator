// Returns a license badge 
function renderLicenseBadge(license) {
  if(license !== 'none'){
    //license badge link here
    return ``
  }else{
    // empty string
    return ''
  }
}

// Returns the license link
function renderLicenseLink(license) {
  if(license !== none){
    // license link here
  }else{
    return ''
  }
}

// Returns the license section of README
function renderLicenseSection(license) {
  if(license !== none){
    // license description w/ link here
  }else{
    return ''
  }
}

// Optional screenshot section to be updated w/ content at a later time
function renderScreenshotSection(option){
  if(option !== 'No'){
    return '##Screenshot'
  }else{
    return ''
  }
}

// generating markdown for the README.md file
function generateMarkdown(data) {
  return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions?](#questions-?)

    ## Description
    ${data.description}
    
    ${renderScreenshotSection}

    ## Installation Instructions
    ${data.installationInstructions}

    ## Contribution Guidelines
    ${data.contributionGuidelines}

    ## Test Instructions
    ${data.testInstructions}

    ##License
    ${renderLicenseSection(data.license)}

    ## Links
    Github [Profile](https://github.com/${data.gitHub})
    [LinkedIN](${data.linkedIn})
  `
 
  
}

module.exports = generateMarkdown;

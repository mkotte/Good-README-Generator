// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    //license badge link here
    return ``
  }else{
    // empty string
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function renderScreenshotSection(option){

}

// TODO: Create a function to generate markdown for README
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

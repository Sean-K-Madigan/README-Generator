const contribute = '';
const screenshot = `![Application Screenshot](${data.screenshot})`

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Project Description

  ${data.description}

  ## User Story

  ${data.user-story}

  ## Deployed Link

  ${data.live-link}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Application Screenshot

  ${screenshot}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Features

  ${data.features}

  ## How to contribute

  ${contribute} ${data.contribute}

  ## Tests

  ${data.tests}
`;
}

module.exports = generateMarkdown;

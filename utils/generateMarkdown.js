// const contribution = specificContribution();
// const data = require('./../index')

// I would like to add a funtion that verifys if there is a value in data.contribute and runs an if statment adding the specifics or a generic 
// function specificContribution(data) {
//   if (data.contribute) {
//     return data.contribute;
//   } else {
//     return `There are no specific contribution guidelines for this application.`;
//   }
// }

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'N/A':
      badge = `There is no license associated with this project.`;
      break;

    case 'MIT':
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        break;

    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      break;

    case 'BSD 3':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
      break;

    case 'BSD 2':
      badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
      break;

    case 'ISC':
      badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
      break;

    case 'The Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
      break;

    case 'Zlib/libpng':
        badge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]`;
        break;

    case 'SIL Open Font':
      badge = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`;
      break;

    case 'Do What The F*ck You Want To Public License':
      badge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
      break;

    default:
      badge = '';
  };

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'N/A':
      badgeLink = `There is no license associated with this project.`;
      break;

    case 'MIT':
        badgeLink = `(https://opensource.org/licenses/MIT)`;
        break;

    case 'Apache':
      badgeLink = `(https://opensource.org/licenses/Apache-2.0)`;
      break;

    case 'BSD 3':
      badgeLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
      break;

    case 'BSD 2':
      badgeLink = `(https://opensource.org/licenses/BSD-2-Clause)`;
      break;

    case 'ISC':
      badgeLink = `(https://opensource.org/licenses/ISC)`;
      break;

    case 'The Unlicense':
      badgeLink = `(http://unlicense.org/)`;
      break;

    case 'Zlib/libpng':
        badgeLink = `(https://opensource.org/licenses/Zlib)`;
        break;

    case 'SIL Open Font':
      badgeLink = `(https://opensource.org/licenses/OFL-1.1)`;
      break;

    case 'Do What The F*ck You Want To Public License':
      badgeLink = `(http://www.wtfpl.net/about/)`;
      break;

    default:
      badgeLink = '';
  };

  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseNotice = `This application is covered under the ${license} License. Please see the above link for all pertinent information pertaining to use of this code under the associated license.`

  switch (license) {
    case 'N/A':
      badgeInfo = `There is no license associated with this project.`;
      break;

    case 'MIT':
        badgeInfo = `${licenseNotice}`;
        break;

    case 'Apache':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'BSD 3':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'BSD 2':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'ISC':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'The Unlicense':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'Zlib/libpng':
        badgeInfo = `${licenseNotice}`;
        break;

    case 'SIL Open Font':
      badgeInfo = `${licenseNotice}`;
      break;

    case 'Do What The F*ck You Want To Public License':
      badgeInfo = `${licenseNotice}`;
      break;

    default:
      badgeInfo = '';
  };

  return badgeInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Project Description
  
  ${data.description}
  
  ## Table of Contents

  - [User Story](#user-story)
  - [Deployed Link](#deployed-link)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Application Screenshot](#application-screenshot)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to contribute](#how-to-contribute)
  - [Tests](#tests)

  ## User Story

  AS A ${data.userAS},
  I WANT ${data.userI},
  SO THAT I ${data.userSO}.


  ## Deployed Link

  ${data.link}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Application Screenshot

  ![Application Screenshot](${data.screenshot})

  ## Credits

  ${data.credits}

  ## License

  ${data.license}: ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Features

  ${data.features}

  ## Contributing

  Please observe respectful and contientious contributions by discussing any and all changes with the primary author. Upon receipt of approval remeber to use appropriate braching techiques and labelling so as to not compromise the integrity of the program. Always debug before pushing. 
  
  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Qestions

  Direct any and all questions to ${data.git} on GitHub or to the author via email at ${data.email}.
`;
}
// Make gitHub a link

module.exports = generateMarkdown;

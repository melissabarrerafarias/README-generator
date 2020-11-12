// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}


  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#test)
  *[Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License 
  ${data.license}


  ## Contributing 
  ${data.contribution}


  ## Tests 
  ${data.tests}


  ## Questions 
  Github Username : ${data.username}
  [Link to Github Profile](https://github.com/${data.username})

  If you have any further questions or curiosities, feel free to contact me through email at ${data.email}!

`;
} 

module.exports = generateMarkdown;
console.log(data.username);

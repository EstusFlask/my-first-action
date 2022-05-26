const core = require('@actions/core')
const github = require('@actions/github')

try {
    const name = core.getInput('name');
    
    console.log(`Hi ${name}!`);
    
    const time = (new Date()).toTimeString();
    
    core.setOutput("time", time);

} catch (error) {
  
    core.setFailed(error.message);
  
}

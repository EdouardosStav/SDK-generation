const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  specFile: 'specs/api-spec.yaml',
  outputDir: 'generated-sdks',
  sdks: [
    {
      name: 'python',
      generator: 'python',
      additionalProperties: 'packageName=my_api_client'
    },
    {
      name: 'javascript',
      generator: 'javascript',
      additionalProperties: 'projectName=my-api-client'
    }
  ]
};

function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function runCommand(command, description) {
  log(`Starting: ${description}`);
  try {
    const result = execSync(command, { stdio: 'inherit' });
    log(`Completed: ${description}`);
    return result;
  } catch (error) {
    log(`Error in: ${description}`);
    log(`Command: ${command}`);
    log(`Error: ${error.message}`);
    throw error;
  }
}

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`Created directory: ${dir}`);
  }
}

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    log(`Cleaned directory: ${dir}`);
  }
}

async function generateSDK(sdkConfig) {
  const outputPath = path.join(config.outputDir, sdkConfig.name);
  
  // Clean and recreate output directory
  cleanDirectory(outputPath);
  ensureDirectoryExists(outputPath);
  
  // Generate SDK
  const command = `openapi-generator-cli generate -i ${config.specFile} -g ${sdkConfig.generator} -o ${outputPath} --additional-properties=${sdkConfig.additionalProperties}`;
  
  runCommand(command, `Generating ${sdkConfig.name} SDK`);
  
  // Post-generation steps
  if (sdkConfig.generator === 'python') {
    log(`Installing Python dependencies for ${sdkConfig.name}`);
    try {
      process.chdir(outputPath);
      runCommand('pip install -r requirements.txt', 'Installing Python requirements');
      runCommand('pip install -e .', 'Installing Python package in development mode');
      process.chdir('../../'); // Go back to root
    } catch (error) {
      log(`Warning: Could not install Python dependencies: ${error.message}`);
      process.chdir('../../'); // Go back to root even on error
    }
  } else if (sdkConfig.generator === 'javascript') {
    log(`Installing JavaScript dependencies for ${sdkConfig.name}`);
    try {
      process.chdir(outputPath);
      runCommand('npm install', 'Installing JavaScript dependencies');
      process.chdir('../../'); // Go back to root
    } catch (error) {
      log(`Warning: Could not install JavaScript dependencies: ${error.message}`);
      process.chdir('../../'); // Go back to root even on error
    }
  }
}

async function main() {
  log('Starting SDK generation process...');
  
  // Check if spec file exists
  if (!fs.existsSync(config.specFile)) {
    throw new Error(`Spec file not found: ${config.specFile}`);
  }
  
  // Ensure output directory exists
  ensureDirectoryExists(config.outputDir);
  
  // Generate all SDKs
  for (const sdkConfig of config.sdks) {
    try {
      await generateSDK(sdkConfig);
      log(`✅ Successfully generated ${sdkConfig.name} SDK`);
    } catch (error) {
      log(`❌ Failed to generate ${sdkConfig.name} SDK: ${error.message}`);
    }
  }
  
  log('SDK generation process completed!');
  log('\nNext steps:');
  log('1. Check the generated-sdks/ folder');
  log('2. Test the SDKs in your applications');
  log('3. Commit the changes to your repository');
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
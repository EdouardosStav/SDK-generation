const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Enterprise SDK Configuration
const config = {
  specFile: 'specs/api-spec.yaml',
  outputDir: 'generated-sdks',
  company: 'TechCorp',
  version: '1.0.0',
  sdks: [
    {
      name: 'python',
      generator: 'python',
      additionalProperties: 'packageName=techcorp_api_client,projectName=techcorp-api-client,packageVersion=1.0.0,packageCompany=TechCorp'
    },
    {
      name: 'javascript',
      generator: 'javascript',
      additionalProperties: 'projectName=techcorp-api-client,projectVersion=1.0.0,projectDescription=TechCorp API Client for JavaScript'
    },
    {
      name: 'go',
      generator: 'go',
      additionalProperties: 'packageName=techcorpapi,packageVersion=1.0.0,moduleName=github.com/techcorp/api-client-go'
    },
    {
      name: 'java',
      generator: 'java',
      additionalProperties: 'groupId=com.techcorp,artifactId=api-client,apiPackage=com.techcorp.api,modelPackage=com.techcorp.model,invokerPackage=com.techcorp.client,artifactVersion=1.0.0'
    },
    {
      name: 'csharp',
      generator: 'csharp',
      additionalProperties: 'packageName=TechCorp.ApiClient,packageVersion=1.0.0,packageCompany=TechCorp,packageAuthors=TechCorp Development Team,packageCopyright=Copyright TechCorp 2025'
    },
    {
      name: 'php',
      generator: 'php',
      additionalProperties: 'packageName=TechCorpApiClient,invokerPackage=TechCorp\\ApiClient,artifactVersion=1.0.0'
    }
  ],
  environments: {
    dev: 'https://api-dev.techcorp.com',
    staging: 'https://api-staging.techcorp.com',
    prod: 'https://api.techcorp.com'
  }
};

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const colors = {
    INFO: '\x1b[36m',
    SUCCESS: '\x1b[32m', 
    WARNING: '\x1b[33m',
    ERROR: '\x1b[31m',
    RESET: '\x1b[0m'
  };
  console.log(`${colors[level]}[${timestamp}] [${level}] ${message}${colors.RESET}`);
}

function runCommand(command, description) {
  log(`Starting: ${description}`);
  try {
    const result = execSync(command, { stdio: 'inherit' });
    log(`✅ Completed: ${description}`, 'SUCCESS');
    return result;
  } catch (error) {
    log(`❌ Error in: ${description}`, 'ERROR');
    log(`Command: ${command}`, 'ERROR');
    log(`Error: ${error.message}`, 'ERROR');
    throw error;
  }
}

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`📁 Created directory: ${dir}`, 'SUCCESS');
  }
}

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    log(`🧹 Cleaned directory: ${dir}`, 'WARNING');
  }
}

function createSDKReadme(sdkConfig, outputPath) {
  const readme = `# ${config.company} API Client - ${sdkConfig.name.toUpperCase()}

${config.company} official ${sdkConfig.name} client library for the TechCorp API.

## Installation

### ${sdkConfig.name === 'python' ? 'Python' : 
      sdkConfig.name === 'javascript' ? 'JavaScript/Node.js' :
      sdkConfig.name === 'go' ? 'Go' :
      sdkConfig.name === 'java' ? 'Java' :
      sdkConfig.name === 'csharp' ? 'C#' : 'PHP'}

${generateInstallationInstructions(sdkConfig.name)}

## Quick Start

\`\`\`${getCodeLanguage(sdkConfig.name)}
${generateQuickStartCode(sdkConfig.name)}
\`\`\`

## Documentation

For full API documentation, visit: https://docs.techcorp.com

## Support

- Email: support@techcorp.com
- GitHub Issues: https://github.com/techcorp/api-clients

## License

MIT License - see LICENSE file for details.

---
Generated automatically by TechCorp SDK Pipeline v${config.version}
`;

  fs.writeFileSync(path.join(outputPath, 'README.md'), readme);
  log(`📖 Created custom README for ${sdkConfig.name}`, 'SUCCESS');
}

function generateInstallationInstructions(language) {
  const instructions = {
    python: 'pip install techcorp-api-client',
    javascript: 'npm install techcorp-api-client',
    go: 'go get github.com/techcorp/api-client-go',
    java: 'Maven: <dependency><groupId>com.techcorp</groupId><artifactId>api-client</artifactId><version>1.0.0</version></dependency>',
    csharp: 'dotnet add package TechCorp.ApiClient',
    php: 'composer require techcorp/api-client'
  };
  return instructions[language] || 'See documentation for installation instructions.';
}

function getCodeLanguage(language) {
  const mapping = {
    python: 'python',
    javascript: 'javascript', 
    go: 'go',
    java: 'java',
    csharp: 'csharp',
    php: 'php'
  };
  return mapping[language] || language;
}

function generateQuickStartCode(language) {
  const examples = {
    python: `from techcorp_api_client import ApiClient, DefaultApi

# Configure API client
client = ApiClient()
client.configuration.host = "https://api.techcorp.com"

# Create API instance
api = DefaultApi(client)

# Get users
users = api.users_get()
print(f"Found {len(users)} users")`,

    javascript: `const TechCorpApi = require('techcorp-api-client');

// Configure API client
const client = new TechCorpApi.ApiClient();
client.basePath = 'https://api.techcorp.com';

// Create API instance
const api = new TechCorpApi.DefaultApi(client);

// Get users
api.usersGet((error, data) => {
  if (!error) {
    console.log(\`Found \${data.length} users\`);
  }
});`,

    go: `package main

import (
    "context"
    "fmt"
    techcorpapi "github.com/techcorp/api-client-go"
)

func main() {
    // Configure API client
    config := techcorpapi.NewConfiguration()
    config.Host = "api.techcorp.com"
    
    client := techcorpapi.NewAPIClient(config)
    
    // Get users
    users, _, err := client.DefaultApi.UsersGet(context.Background()).Execute()
    if err == nil {
        fmt.Printf("Found %d users\\n", len(users))
    }
}`,

    java: `import com.techcorp.client.ApiClient;
import com.techcorp.api.DefaultApi;

public class Example {
    public static void main(String[] args) {
        // Configure API client
        ApiClient client = new ApiClient();
        client.setBasePath("https://api.techcorp.com");
        
        DefaultApi api = new DefaultApi(client);
        
        try {
            // Get users
            List<User> users = api.usersGet();
            System.out.println("Found " + users.size() + " users");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,

    csharp: `using TechCorp.ApiClient.Api;
using TechCorp.ApiClient.Client;

class Program 
{
    static void Main(string[] args) 
    {
        // Configure API client
        Configuration config = new Configuration();
        config.BasePath = "https://api.techcorp.com";
        
        DefaultApi api = new DefaultApi(config);
        
        try 
        {
            // Get users
            var users = api.UsersGet();
            Console.WriteLine($"Found {users.Count} users");
        }
        catch (Exception e) 
        {
            Console.WriteLine(e.Message);
        }
    }
}`,

    php: `<?php
require_once 'vendor/autoload.php';

use TechCorp\\ApiClient\\Configuration;
use TechCorp\\ApiClient\\Api\\DefaultApi;

// Configure API client
$config = Configuration::getDefaultConfiguration();
$config->setHost('https://api.techcorp.com');

$api = new DefaultApi(null, $config);

try {
    // Get users
    $users = $api->usersGet();
    echo "Found " . count($users) . " users\\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}`
  };
  
  return examples[language] || '// See documentation for usage examples';
}

async function generateSDK(sdkConfig) {
  const outputPath = path.join(config.outputDir, sdkConfig.name);
  
  log(`🚀 Generating ${sdkConfig.name.toUpperCase()} SDK...`, 'INFO');
  
  // Clean and recreate output directory
  cleanDirectory(outputPath);
  ensureDirectoryExists(outputPath);
  
  // Generate SDK
  const command = `openapi-generator-cli generate -i ${config.specFile} -g ${sdkConfig.generator} -o ${outputPath} --additional-properties=${sdkConfig.additionalProperties}`;
  
  runCommand(command, `Generating ${sdkConfig.name} SDK`);
  
  // Create custom README
  createSDKReadme(sdkConfig, outputPath);
  
  // Language-specific post-processing
  await postProcessSDK(sdkConfig, outputPath);
  
  log(`🎉 ${sdkConfig.name.toUpperCase()} SDK generation complete!`, 'SUCCESS');
}

async function postProcessSDK(sdkConfig, outputPath) {
  try {
    if (sdkConfig.generator === 'python') {
      // Fix Python license issue
      const pyprojectPath = path.join(outputPath, 'pyproject.toml');
      if (fs.existsSync(pyprojectPath)) {
        let content = fs.readFileSync(pyprojectPath, 'utf8');
        content = content.replace(/license = "NoLicense"/, 'license = {text = "MIT"}');
        fs.writeFileSync(pyprojectPath, content);
        log(`🔧 Fixed Python license configuration`, 'SUCCESS');
      }
      
      // Install Python dependencies  
      process.chdir(outputPath);
      try {
        runCommand('pip install -r requirements.txt', 'Installing Python requirements');
        runCommand('pip install -e .', 'Installing Python package in development mode');
      } catch (error) {
        log(`⚠️  Warning: Could not install Python dependencies: ${error.message}`, 'WARNING');
      }
      process.chdir('../../');
      
    } else if (sdkConfig.generator === 'javascript') {
      // Install JavaScript dependencies
      process.chdir(outputPath);
      try {
        runCommand('npm install', 'Installing JavaScript dependencies');
      } catch (error) {
        log(`⚠️  Warning: Could not install JavaScript dependencies: ${error.message}`, 'WARNING');
      }
      process.chdir('../../');
      
    } else if (sdkConfig.generator === 'go') {
      // Initialize Go module
      process.chdir(outputPath);
      try {
        runCommand('go mod init github.com/techcorp/api-client-go', 'Initializing Go module');
        runCommand('go mod tidy', 'Tidying Go dependencies');
      } catch (error) {
        log(`⚠️  Warning: Could not initialize Go module: ${error.message}`, 'WARNING');
      }
      process.chdir('../../');
    }
  } catch (error) {
    log(`⚠️  Warning: Post-processing failed for ${sdkConfig.name}: ${error.message}`, 'WARNING');
  }
}

function generateSummaryReport() {
  const report = `
# 🎉 TechCorp SDK Generation Complete!

## Generated SDKs:
${config.sdks.map(sdk => `✅ **${sdk.name.toUpperCase()}** - Ready for ${sdk.name === 'python' ? 'PyPI' : 
  sdk.name === 'javascript' ? 'npm' : 
  sdk.name === 'go' ? 'Go modules' :
  sdk.name === 'java' ? 'Maven Central' :
  sdk.name === 'csharp' ? 'NuGet' : 'Packagist'}`).join('\n')}

## 📊 Pipeline Stats:
- **Languages Supported**: ${config.sdks.length}
- **Generation Time**: ${new Date().toISOString()}
- **Version**: ${config.version}
- **Company**: ${config.company}

## 🔗 Next Steps:
1. Review generated SDKs in \`generated-sdks/\` folder
2. Test SDK functionality
3. Publish to package repositories
4. Update documentation

---
*Generated by TechCorp Enterprise SDK Pipeline* 🚀
`;

  fs.writeFileSync('SDK_GENERATION_REPORT.md', report);
  log('📊 Generated summary report: SDK_GENERATION_REPORT.md', 'SUCCESS');
}

async function main() {
  const startTime = Date.now();
  
  log('🚀 Starting TechCorp Enterprise SDK Generation Pipeline...', 'INFO');
  log(`📋 Generating ${config.sdks.length} SDKs: ${config.sdks.map(s => s.name.toUpperCase()).join(', ')}`, 'INFO');
  
  // Check if spec file exists
  if (!fs.existsSync(config.specFile)) {
    throw new Error(`Spec file not found: ${config.specFile}`);
  }
  
  // Ensure output directory exists
  ensureDirectoryExists(config.outputDir);
  
  // Generate all SDKs
  let successCount = 0;
  for (const sdkConfig of config.sdks) {
    try {
      await generateSDK(sdkConfig);
      successCount++;
    } catch (error) {
      log(`❌ Failed to generate ${sdkConfig.name} SDK: ${error.message}`, 'ERROR');
    }
  }
  
  // Generate summary report
  generateSummaryReport();
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`\n🎊 PIPELINE COMPLETE! 🎊`, 'SUCCESS');
  log(`✅ Successfully generated ${successCount}/${config.sdks.length} SDKs`, 'SUCCESS');
  log(`⏱️  Total time: ${duration} seconds`, 'INFO');
  log(`📁 Check the generated-sdks/ folder for your SDKs!`, 'INFO');
  
  if (successCount < config.sdks.length) {
    log(`⚠️  ${config.sdks.length - successCount} SDKs failed to generate. Check logs above.`, 'WARNING');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    log(`💥 Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = { config, generateSDK, main };
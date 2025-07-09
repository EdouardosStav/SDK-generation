const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Load environment configurations
const envConfig = JSON.parse(fs.readFileSync('config/environments.json', 'utf8'));

// Get environment from command line or default to 'dev'
const targetEnv = process.argv[2] || process.env.TARGET_ENV || 'dev';
const currentEnv = envConfig.environments[targetEnv];

if (!currentEnv) {
  console.error(`❌ Environment '${targetEnv}' not found. Available: ${Object.keys(envConfig.environments).join(', ')}`);
  process.exit(1);
}

// Enhanced Enterprise SDK Configuration
const config = {
  specFile: 'specs/api-spec.yaml',
  outputDir: 'generated-sdks',
  environment: targetEnv,
  envConfig: currentEnv,
  company: envConfig.sdkConfig.company,
  baseVersion: '2.0.0',
  sdks: [
    {
      name: 'python',
      generator: 'python',
      packageManager: 'PyPI',
      getAdditionalProperties: (env, version) => 
        `packageName=techcorp_api_client_${env},projectName=techcorp-api-client-${env},packageVersion=${version}`
    },
    {
      name: 'javascript', 
      generator: 'javascript',
      packageManager: 'npm',
      getAdditionalProperties: (env, version) =>
        `projectName=techcorp-api-client-${env},projectVersion=${version}`
    },
    {
      name: 'go',
      generator: 'go', 
      packageManager: 'Go Modules',
      getAdditionalProperties: (env, version) =>
        `packageName=techcorpapi${env},packageVersion=${version}`
    },
    {
      name: 'java',
      generator: 'java',
      packageManager: 'Maven Central', 
      getAdditionalProperties: (env, version) =>
        `groupId=com.techcorp.${env},artifactId=api-client,artifactVersion=${version}`
    },
    {
      name: 'csharp',
      generator: 'csharp',
      packageManager: 'NuGet',
      getAdditionalProperties: (env, version) =>
        `packageName=TechCorp.ApiClient.${env.charAt(0).toUpperCase() + env.slice(1)},packageVersion=${version}`
    },
    {
      name: 'php',
      generator: 'php',
      packageManager: 'Packagist',
      getAdditionalProperties: (env, version) =>
        `packageName=TechCorpApiClient${env.charAt(0).toUpperCase() + env.slice(1)},artifactVersion=${version}`
    }
  ]
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

function generateVersionNumber() {
  const now = new Date();
  const build = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}.${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
  
  let version = config.baseVersion;
  if (targetEnv === 'dev') {
    version += `-dev.${build}`;
  } else if (targetEnv === 'staging') {
    version += `-rc.${build}`;
  } else {
    version += `.${build}`;
  }
  
  return version;
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

function createEnvironmentSDKReadme(sdkConfig, outputPath, version) {
  const readme = `# ${config.company} API Client - ${sdkConfig.name.toUpperCase()} (${currentEnv.name})

${config.company} official ${sdkConfig.name} client library for the **${currentEnv.name} Environment**.

## 🌍 Environment Information

- **Environment**: ${currentEnv.name}
- **Base URL**: \`${currentEnv.baseUrl}\`
- **Version**: \`${version}\`
- **Authentication**: ${currentEnv.authentication.type} (${currentEnv.authentication.keyName})

## 🚀 Installation

### ${getLanguageDisplayName(sdkConfig.name)}

\`\`\`bash
${generateInstallationCommand(sdkConfig.name, version)}
\`\`\`

## ⚡ Quick Start

\`\`\`${getCodeLanguage(sdkConfig.name)}
${generateEnvironmentQuickStartCode(sdkConfig.name)}
\`\`\`

## 🔧 Environment Configuration

This SDK is pre-configured for the **${currentEnv.name}** environment:

- **Rate Limiting**: ${currentEnv.features.rateLimiting ? '✅ Enabled' : '❌ Disabled'}
- **Debug Mode**: ${currentEnv.features.debugging ? '✅ Enabled' : '❌ Disabled'}  
- **Mock Data**: ${currentEnv.features.mockData ? '✅ Available' : '❌ Not Available'}

## 📚 Documentation

- **API Docs**: [${envConfig.sdkConfig.documentationUrl}](${envConfig.sdkConfig.documentationUrl})
- **SDK Repository**: [${envConfig.sdkConfig.githubUrl}](${envConfig.sdkConfig.githubUrl})

## 🆘 Support

- **Email**: [${envConfig.sdkConfig.supportEmail}](mailto:${envConfig.sdkConfig.supportEmail})
- **GitHub Issues**: [${envConfig.sdkConfig.githubUrl}/issues](${envConfig.sdkConfig.githubUrl}/issues)

## 📄 License

${envConfig.sdkConfig.licenses.type} License - see [LICENSE](${envConfig.sdkConfig.licenses.url}) for details.

---
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v${version}**  
🌍 **Environment**: ${currentEnv.name} | **Build Date**: ${new Date().toISOString()}
`;

  fs.writeFileSync(path.join(outputPath, 'README.md'), readme);
  log(`📖 Created environment-specific README for ${sdkConfig.name} (${targetEnv})`, 'SUCCESS');
}

function getLanguageDisplayName(language) {
  const names = {
    python: 'Python',
    javascript: 'JavaScript/Node.js',
    go: 'Go',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP'
  };
  return names[language] || language;
}

function generateInstallationCommand(language, version) {
  const env = targetEnv;
  const commands = {
    python: `pip install techcorp-api-client-${env}==${version}`,
    javascript: `npm install techcorp-api-client-${env}@${version}`,
    go: `go get github.com/techcorp/api-client-go-${env}@v${version}`,
    java: `// Maven\n<dependency>\n  <groupId>com.techcorp.${env}</groupId>\n  <artifactId>api-client</artifactId>\n  <version>${version}</version>\n</dependency>`,
    csharp: `dotnet add package TechCorp.ApiClient.${env.charAt(0).toUpperCase() + env.slice(1)} --version ${version}`,
    php: `composer require techcorp/api-client-${env}:^${version}`
  };
  return commands[language] || 'See documentation for installation instructions.';
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

function generateEnvironmentQuickStartCode(language) {
  const examples = {
    python: `# TechCorp API Client - ${currentEnv.name} Environment
from techcorp_api_client_${targetEnv} import ApiClient, DefaultApi

# Pre-configured for ${currentEnv.name}
client = ApiClient()
client.configuration.host = "${currentEnv.baseUrl}"
client.configuration.api_key['${currentEnv.authentication.keyName}'] = 'your-api-key'

api = DefaultApi(client)
users = api.users_get()
print(f"Found {len(users)} users in ${currentEnv.name}")`,

    javascript: `// TechCorp API Client - ${currentEnv.name} Environment
const TechCorpApi = require('techcorp-api-client-${targetEnv}');

// Pre-configured for ${currentEnv.name}
const client = new TechCorpApi.ApiClient();
client.basePath = '${currentEnv.baseUrl}';
client.authentications['${currentEnv.authentication.keyName}'].apiKey = 'your-api-key';

const api = new TechCorpApi.DefaultApi(client);
api.usersGet((error, data) => {
  console.log(\`Found \${data.length} users in ${currentEnv.name}\`);
});`,

    go: `// TechCorp API Client - ${currentEnv.name} Environment
package main

import (
    "context"
    "fmt"
    techcorpapi "github.com/techcorp/api-client-go-${targetEnv}"
)

func main() {
    config := techcorpapi.NewConfiguration()
    config.Host = "${currentEnv.baseUrl.replace('https://', '')}"
    config.DefaultHeader["${currentEnv.authentication.keyName}"] = "your-api-key"
    
    client := techcorpapi.NewAPIClient(config)
    users, _, _ := client.DefaultApi.UsersGet(context.Background()).Execute()
    fmt.Printf("Found %d users in ${currentEnv.name}\\n", len(users))
}`,

    java: `// TechCorp API Client - ${currentEnv.name} Environment
import com.techcorp.${targetEnv}.client.ApiClient;
import com.techcorp.${targetEnv}.api.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient client = new ApiClient();
        client.setBasePath("${currentEnv.baseUrl}");
        client.setApiKey("your-api-key");
        
        DefaultApi api = new DefaultApi(client);
        List<User> users = api.usersGet();
        System.out.println("Found " + users.size() + " users in ${currentEnv.name}");
    }
}`,

    csharp: `// TechCorp API Client - ${currentEnv.name} Environment
using TechCorp.ApiClient.${targetEnv.charAt(0).toUpperCase() + targetEnv.slice(1)}.Api;

class Program {
    static void Main() {
        var api = new DefaultApi("${currentEnv.baseUrl}");
        api.Configuration.ApiKey["${currentEnv.authentication.keyName}"] = "your-api-key";
        
        var users = api.UsersGet();
        Console.WriteLine($"Found {users.Count} users in ${currentEnv.name}");
    }
}`,

    php: `<?php
// TechCorp API Client - ${currentEnv.name} Environment
require_once 'vendor/autoload.php';

use TechCorp\\ApiClient\\${targetEnv.charAt(0).toUpperCase() + targetEnv.slice(1)}\\Api\\DefaultApi;

$api = new DefaultApi();
$api->getConfig()->setHost('${currentEnv.baseUrl}');
$api->getConfig()->setApiKey('${currentEnv.authentication.keyName}', 'your-api-key');

$users = $api->usersGet();
echo "Found " . count($users) . " users in ${currentEnv.name}\\n";
?>`
  };
  
  return examples[language] || '// See documentation for usage examples';
}

async function generateSDK(sdkConfig) {
  const version = generateVersionNumber();
  const outputPath = path.join(config.outputDir, `${targetEnv}-${sdkConfig.name}`);
  
  log(`🚀 Generating ${sdkConfig.name.toUpperCase()} SDK for ${currentEnv.name} environment...`, 'INFO');
  
  // Clean and recreate output directory
  cleanDirectory(outputPath);
  ensureDirectoryExists(outputPath);
  
  // Generate SDK using the existing YAML spec directly
  const additionalProps = sdkConfig.getAdditionalProperties(targetEnv, version);
  const command = `openapi-generator-cli generate -i ${config.specFile} -g ${sdkConfig.generator} -o ${outputPath} --additional-properties=${additionalProps}`;
  
  runCommand(command, `Generating ${sdkConfig.name} SDK for ${targetEnv}`);
  
  // Create environment-specific README
  createEnvironmentSDKReadme(sdkConfig, outputPath, version);
  
  // Post-process SDK
  await postProcessSDK(sdkConfig, outputPath);
  
  log(`🎉 ${sdkConfig.name.toUpperCase()} SDK for ${currentEnv.name} complete!`, 'SUCCESS');
  return { sdk: sdkConfig.name, environment: targetEnv, version, outputPath };
}

async function postProcessSDK(sdkConfig, outputPath) {
  try {
    if (sdkConfig.generator === 'python') {
      // Fix Python license issue
      const pyprojectPath = path.join(outputPath, 'pyproject.toml');
      if (fs.existsSync(pyprojectPath)) {
        let content = fs.readFileSync(pyprojectPath, 'utf8');
        content = content.replace(/license = "NoLicense"/, `license = {text = "${envConfig.sdkConfig.licenses.type}"}`);
        fs.writeFileSync(pyprojectPath, content);
        log(`🔧 Fixed Python license configuration`, 'SUCCESS');
      }
    }
  } catch (error) {
    log(`⚠️  Warning: Post-processing failed for ${sdkConfig.name}: ${error.message}`, 'WARNING');
  }
}

function generateEnvironmentSummaryReport(results) {
  const report = `
# 🌍 ${config.company} Multi-Environment SDK Generation Complete!

## 🎯 Environment: ${currentEnv.name}
- **Base URL**: ${currentEnv.baseUrl}
- **Version**: ${currentEnv.version}
- **Authentication**: ${currentEnv.authentication.keyName}

## 📦 Generated SDKs:
${results.map(result => `✅ **${result.sdk.toUpperCase()}** - ${currentEnv.name} Environment
   - Version: \`${result.version}\`
   - Output: \`${result.outputPath}\`
   - Ready for: ${config.sdks.find(s => s.name === result.sdk)?.packageManager}`).join('\n')}

## 🔧 Environment Features:
- **Rate Limiting**: ${currentEnv.features.rateLimiting ? '✅ Enabled' : '❌ Disabled'}
- **Debug Mode**: ${currentEnv.features.debugging ? '✅ Enabled' : '❌ Disabled'}  
- **Mock Data**: ${currentEnv.features.mockData ? '✅ Available' : '❌ Not Available'}

## 📊 Pipeline Stats:
- **Environment**: ${targetEnv}
- **Languages Generated**: ${results.length}
- **Generation Time**: ${new Date().toISOString()}
- **Total SDKs**: ${results.length} for ${currentEnv.name}

---
*Generated by TechCorp Multi-Environment Enterprise SDK Pipeline* 🌍🚀
`;

  const reportFileName = `SDK_GENERATION_REPORT_${targetEnv.toUpperCase()}.md`;
  fs.writeFileSync(reportFileName, report);
  log(`📊 Generated environment summary report: ${reportFileName}`, 'SUCCESS');
}

async function main() {
  const startTime = Date.now();
  
  log(`🌍 Starting TechCorp Multi-Environment SDK Generation...`, 'INFO');
  log(`🎯 Target Environment: ${currentEnv.name} (${targetEnv})`, 'INFO');
  log(`📋 Generating ${config.sdks.length} SDKs for: ${config.sdks.map(s => s.name.toUpperCase()).join(', ')}`, 'INFO');
  
  // Ensure config directory exists
  ensureDirectoryExists('config');
  
  // Check if spec file exists
  if (!fs.existsSync(config.specFile)) {
    throw new Error(`Spec file not found: ${config.specFile}`);
  }
  
  // Ensure output directory exists
  ensureDirectoryExists(config.outputDir);
  
  // Generate all SDKs for the target environment
  const results = [];
  for (const sdkConfig of config.sdks) {
    try {
      const result = await generateSDK(sdkConfig);
      results.push(result);
    } catch (error) {
      log(`❌ Failed to generate ${sdkConfig.name} SDK for ${targetEnv}: ${error.message}`, 'ERROR');
    }
  }
  
  // Generate environment summary report
  generateEnvironmentSummaryReport(results);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`\n🎊 MULTI-ENVIRONMENT PIPELINE COMPLETE! 🎊`, 'SUCCESS');
  log(`✅ Successfully generated ${results.length}/${config.sdks.length} SDKs for ${currentEnv.name}`, 'SUCCESS');
  log(`⏱️  Total time: ${duration} seconds`, 'INFO');
  log(`📁 Check the generated-sdks/ folder for your environment-specific SDKs!`, 'INFO');
  log(`🌍 Environment: ${targetEnv} | Base URL: ${currentEnv.baseUrl}`, 'INFO');
  
  if (results.length < config.sdks.length) {
    log(`⚠️  ${config.sdks.length - results.length} SDKs failed to generate. Check logs above.`, 'WARNING');
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
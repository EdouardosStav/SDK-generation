# SDK Generation Pipeline

## Overview

This project implements an enterprise-grade automated SDK generation pipeline that creates client libraries in multiple programming languages from OpenAPI specifications. The system automatically generates, validates, and deploys SDKs across different environments whenever API specifications are updated.

## Table of Contents

- [Architecture](#architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Languages Supported](#languages-supported)
- [Environment Configuration](#environment-configuration)
- [CI/CD Pipeline](#cicd-pipeline)
- [Installation](#installation)
- [Usage](#usage)
- [Workflow Details](#workflow-details)
- [Generated SDKs](#generated-sdks)
- [Contributing](#contributing)

## Architecture

The SDK generation pipeline consists of several key components:

1. **OpenAPI Specification**: Central API definition in YAML format
2. **Generation Engine**: OpenAPI Generator CLI for multi-language SDK creation
3. **Environment Management**: Support for development, staging, and production environments
4. **CI/CD Pipeline**: GitHub Actions workflow for automated generation and deployment
5. **Version Control**: Automated PR creation for SDK updates

## Features

### Core Capabilities

- **Multi-Language Support**: Generates SDKs for 6 programming languages simultaneously
- **Environment-Specific Configurations**: Separate configurations for dev, staging, and production
- **Automated CI/CD**: GitHub Actions pipeline triggered by specification changes
- **Quality Assurance**: Validation and testing at each deployment stage
- **Version Management**: Automatic versioning with environment-specific tags
- **Pull Request Automation**: Creates PRs with detailed deployment summaries

### Enterprise Features

- **Parallel Processing**: Generates all SDKs concurrently for faster delivery
- **Environment Progression**: Sequential deployment through dev → staging → production
- **Artifact Management**: Organized storage and retrieval of generated SDKs
- **Professional Documentation**: Auto-generated README files for each SDK
- **Error Handling**: Comprehensive error reporting and recovery mechanisms

## Project Structure

```
SDK-generation/
├── specs/
│   └── api-spec.yaml              # OpenAPI specification
├── config/
│   └── environments.json          # Environment configurations
├── scripts/
│   └── generate.js                # SDK generation script
├── generated-sdks/
│   ├── dev-*/                     # Development environment SDKs
│   ├── staging-*/                 # Staging environment SDKs
│   └── prod-*/                    # Production environment SDKs
├── .github/
│   └── workflows/
│       └── enterprise-devops-pipeline.yml  # CI/CD pipeline
├── package.json                   # Node.js dependencies
└── README.md                      # This file
```

## Languages Supported

The pipeline generates SDKs for the following programming languages:

1. **Python** - Compatible with PyPI distribution
2. **JavaScript/Node.js** - npm-ready packages
3. **Go** - Go modules compatible
4. **Java** - Maven Central ready
5. **C#/.NET** - NuGet compatible
6. **PHP** - Packagist ready

Each SDK includes:
- Complete API client implementation
- Model definitions for all data structures
- Comprehensive documentation
- Installation instructions
- Usage examples

## Environment Configuration

The system supports three distinct environments, each with specific configurations:

### Development Environment
- **Base URL**: https://api-dev.techcorp.com
- **Version Suffix**: -dev.BUILD_NUMBER
- **Features**: Debug mode enabled, rate limiting disabled, mock data available
- **Purpose**: Rapid testing and development iteration

### Staging Environment
- **Base URL**: https://api-staging.techcorp.com
- **Version Suffix**: -rc.BUILD_NUMBER
- **Features**: Rate limiting enabled, debug mode enabled, no mock data
- **Purpose**: Pre-production testing and validation

### Production Environment
- **Base URL**: https://api.techcorp.com
- **Version**: Semantic versioning (e.g., 2.0.0)
- **Features**: Rate limiting enabled, debug mode disabled, no mock data
- **Purpose**: Live production deployments

## CI/CD Pipeline

The GitHub Actions pipeline implements a complete DevOps workflow:

### Pipeline Stages

1. **Validate & Plan Deployment**
   - Validates OpenAPI specification
   - Analyzes changes and determines affected endpoints
   - Plans deployment strategy

2. **Development Environment Deployment**
   - Generates 6 SDKs with development configurations
   - Runs basic validation tests
   - Uploads artifacts for review

3. **Staging Environment Deployment**
   - Generates 6 SDKs with staging configurations
   - Performs integration testing
   - Validates against staging API

4. **Production Environment Deployment**
   - Generates 6 SDKs with production configurations
   - Applies production-grade validation
   - Prepares for distribution

5. **Pull Request Creation**
   - Creates comprehensive PR with all changes
   - Includes deployment summary and metrics
   - Lists all generated SDKs with download links

### Trigger Mechanisms

- **Automatic**: Triggered when `specs/**` files change
- **Manual**: Workflow dispatch with environment selection
- **Pull Request**: Validates changes before merging

## Installation

### Prerequisites

- Git
- Node.js (v18 or higher)
- Java 11+ (for OpenAPI Generator)
- GitHub repository with Actions enabled

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/EdouardosStav/SDK-generation.git
cd SDK-generation
```

2. Install dependencies:
```bash
npm install
npm install -g @openapitools/openapi-generator-cli
```

3. Configure environments:
   - Edit `config/environments.json` with your API URLs
   - Update company branding and contact information

4. Test local generation:
```bash
node scripts/generate.js dev
```

## Usage

### Local SDK Generation

Generate SDKs for specific environments:

```bash
# Development environment
node scripts/generate.js dev

# Staging environment
node scripts/generate.js staging

# Production environment
node scripts/generate.js prod
```

### Triggering CI/CD Pipeline

1. **Automatic trigger** - Modify the OpenAPI spec:
```bash
echo "# Updated API" >> specs/api-spec.yaml
git add specs/api-spec.yaml
git commit -m "Update API specification"
git push origin main
```

2. **Manual trigger** - Use GitHub Actions UI:
   - Navigate to Actions tab
   - Select "Enterprise DevOps SDK Pipeline"
   - Click "Run workflow"
   - Choose target environment

### Accessing Generated SDKs

Generated SDKs are available through:
- **GitHub Actions Artifacts**: Download from workflow runs
- **Pull Requests**: Review and merge SDK updates
- **Local Generation**: Access in `generated-sdks/` directory

## Workflow Details

### SDK Generation Process

1. **Specification Reading**: Loads OpenAPI spec from `specs/api-spec.yaml`
2. **Environment Configuration**: Applies environment-specific settings
3. **Code Generation**: Uses OpenAPI Generator for each language
4. **Post-Processing**: Applies custom templates and branding
5. **Validation**: Ensures generated code is valid
6. **Packaging**: Prepares SDKs for distribution

### Quality Gates

- **Specification Validation**: Ensures OpenAPI spec is valid
- **Generation Success**: All SDKs must generate without errors
- **File Integrity**: Verifies all expected files are created
- **Documentation Completeness**: Checks for proper README files

## Generated SDKs

Each generated SDK includes:

### Structure
```
sdk-{language}/
├── README.md              # Installation and usage guide
├── src/                   # Source code
│   ├── api/              # API client classes
│   ├── models/           # Data models
│   └── utils/            # Helper utilities
├── tests/                # Test files
├── docs/                 # API documentation
└── package files         # Language-specific package files
```

### Features
- Type-safe API calls
- Automatic request/response serialization
- Error handling
- Authentication support
- Comprehensive documentation

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make changes to specifications or pipeline
4. Test locally with all environments
5. Submit pull request

### Best Practices

- Keep API specifications backward compatible
- Document all endpoints thoroughly
- Test SDKs before merging
- Follow semantic versioning
- Update documentation with changes

### Adding New Languages

To add support for a new language:

1. Update `scripts/generate.js` with new language configuration
2. Add language-specific post-processing if needed
3. Update CI/CD pipeline matrix
4. Test generation across all environments
5. Document language-specific usage

## Troubleshooting

### Common Issues

1. **Java not found**: Install Java 11+ from https://adoptium.net/
2. **Generation fails**: Check OpenAPI spec validity
3. **Permission denied**: Ensure proper GitHub permissions
4. **Artifacts not found**: Check workflow logs for errors

### Debug Mode

Enable verbose logging:
```bash
DEBUG=true node scripts/generate.js dev
```

## License

This project is licensed under the MIT License.

This SDK generation pipeline provides a robust, scalable solution for maintaining client libraries across multiple programming languages and deployment environments. The automated workflow ensures consistency, quality, and rapid delivery of SDK updates to developers.
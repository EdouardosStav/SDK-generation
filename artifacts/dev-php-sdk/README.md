# TechCorp API Client - PHP (Development)

TechCorp official php client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1052`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### PHP

```bash
composer require techcorp/api-client-dev:^2.0.0-dev.20250709.1052
```

## ⚡ Quick Start

```php
<?php
// TechCorp API Client - Development Environment
require_once 'vendor/autoload.php';

use TechCorp\ApiClient\Dev\Api\DefaultApi;

$api = new DefaultApi();
$api->getConfig()->setHost('https://api-dev.techcorp.com');
$api->getConfig()->setApiKey('X-API-Key-Dev', 'your-api-key');

$users = $api->usersGet();
echo "Found " . count($users) . " users in Development\n";
?>
```

## 🔧 Environment Configuration

This SDK is pre-configured for the **Development** environment:

- **Rate Limiting**: ❌ Disabled
- **Debug Mode**: ✅ Enabled  
- **Mock Data**: ✅ Available

## 📚 Documentation

- **API Docs**: [https://docs.techcorp.com](https://docs.techcorp.com)
- **SDK Repository**: [https://github.com/techcorp/api-clients](https://github.com/techcorp/api-clients)

## 🆘 Support

- **Email**: [sdk-support@techcorp.com](mailto:sdk-support@techcorp.com)
- **GitHub Issues**: [https://github.com/techcorp/api-clients/issues](https://github.com/techcorp/api-clients/issues)

## 📄 License

MIT License - see [LICENSE](https://opensource.org/licenses/MIT) for details.

---
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-dev.20250709.1052**  
🌍 **Environment**: Development | **Build Date**: 2025-07-09T10:52:29.291Z

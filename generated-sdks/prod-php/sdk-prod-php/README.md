# TechCorp API Client - PHP (Production)

TechCorp official php client library for the **Production Environment**.

## 🌍 Environment Information

- **Environment**: Production
- **Base URL**: `https://api.techcorp.com`
- **Version**: `2.0.0.20250709.1004`
- **Authentication**: api-key (X-API-Key)

## 🚀 Installation

### PHP

```bash
composer require techcorp/api-client-prod:^2.0.0.20250709.1004
```

## ⚡ Quick Start

```php
<?php
// TechCorp API Client - Production Environment
require_once 'vendor/autoload.php';

use TechCorp\ApiClient\Prod\Api\DefaultApi;

$api = new DefaultApi();
$api->getConfig()->setHost('https://api.techcorp.com');
$api->getConfig()->setApiKey('X-API-Key', 'your-api-key');

$users = $api->usersGet();
echo "Found " . count($users) . " users in Production\n";
?>
```

## 🔧 Environment Configuration

This SDK is pre-configured for the **Production** environment:

- **Rate Limiting**: ✅ Enabled
- **Debug Mode**: ❌ Disabled  
- **Mock Data**: ❌ Not Available

## 📚 Documentation

- **API Docs**: [https://docs.techcorp.com](https://docs.techcorp.com)
- **SDK Repository**: [https://github.com/techcorp/api-clients](https://github.com/techcorp/api-clients)

## 🆘 Support

- **Email**: [sdk-support@techcorp.com](mailto:sdk-support@techcorp.com)
- **GitHub Issues**: [https://github.com/techcorp/api-clients/issues](https://github.com/techcorp/api-clients/issues)

## 📄 License

MIT License - see [LICENSE](https://opensource.org/licenses/MIT) for details.

---
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0.20250709.1004**  
🌍 **Environment**: Production | **Build Date**: 2025-07-09T10:04:37.377Z

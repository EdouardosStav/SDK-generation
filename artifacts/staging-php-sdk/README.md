# TechCorp API Client - PHP (Staging)

TechCorp official php client library for the **Staging Environment**.

## 🌍 Environment Information

- **Environment**: Staging
- **Base URL**: `https://api-staging.techcorp.com`
- **Version**: `2.0.0-rc.20250709.1053`
- **Authentication**: api-key (X-API-Key-Staging)

## 🚀 Installation

### PHP

```bash
composer require techcorp/api-client-staging:^2.0.0-rc.20250709.1053
```

## ⚡ Quick Start

```php
<?php
// TechCorp API Client - Staging Environment
require_once 'vendor/autoload.php';

use TechCorp\ApiClient\Staging\Api\DefaultApi;

$api = new DefaultApi();
$api->getConfig()->setHost('https://api-staging.techcorp.com');
$api->getConfig()->setApiKey('X-API-Key-Staging', 'your-api-key');

$users = $api->usersGet();
echo "Found " . count($users) . " users in Staging\n";
?>
```

## 🔧 Environment Configuration

This SDK is pre-configured for the **Staging** environment:

- **Rate Limiting**: ✅ Enabled
- **Debug Mode**: ✅ Enabled  
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-rc.20250709.1053**  
🌍 **Environment**: Staging | **Build Date**: 2025-07-09T10:53:20.696Z

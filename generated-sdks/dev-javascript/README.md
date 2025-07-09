# TechCorp API Client - JAVASCRIPT (Development)

TechCorp official javascript client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1216`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### JavaScript/Node.js

```bash
npm install techcorp-api-client-dev@2.0.0-dev.20250709.1216
```

## ⚡ Quick Start

```javascript
// TechCorp API Client - Development Environment
const TechCorpApi = require('techcorp-api-client-dev');

// Pre-configured for Development
const client = new TechCorpApi.ApiClient();
client.basePath = 'https://api-dev.techcorp.com';
client.authentications['X-API-Key-Dev'].apiKey = 'your-api-key';

const api = new TechCorpApi.DefaultApi(client);
api.usersGet((error, data) => {
  console.log(`Found ${data.length} users in Development`);
});
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-dev.20250709.1216**  
🌍 **Environment**: Development | **Build Date**: 2025-07-09T09:16:54.380Z

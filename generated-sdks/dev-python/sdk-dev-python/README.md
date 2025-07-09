# TechCorp API Client - PYTHON (Development)

TechCorp official python client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1004`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### Python

```bash
pip install techcorp-api-client-dev==2.0.0-dev.20250709.1004
```

## ⚡ Quick Start

```python
# TechCorp API Client - Development Environment
from techcorp_api_client_dev import ApiClient, DefaultApi

# Pre-configured for Development
client = ApiClient()
client.configuration.host = "https://api-dev.techcorp.com"
client.configuration.api_key['X-API-Key-Dev'] = 'your-api-key'

api = DefaultApi(client)
users = api.users_get()
print(f"Found {len(users)} users in Development")
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-dev.20250709.1004**  
🌍 **Environment**: Development | **Build Date**: 2025-07-09T10:04:24.097Z

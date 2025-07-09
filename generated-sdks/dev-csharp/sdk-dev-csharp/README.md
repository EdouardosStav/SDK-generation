# TechCorp API Client - CSHARP (Development)

TechCorp official csharp client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1004`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### C#

```bash
dotnet add package TechCorp.ApiClient.Dev --version 2.0.0-dev.20250709.1004
```

## ⚡ Quick Start

```csharp
// TechCorp API Client - Development Environment
using TechCorp.ApiClient.Dev.Api;

class Program {
    static void Main() {
        var api = new DefaultApi("https://api-dev.techcorp.com");
        api.Configuration.ApiKey["X-API-Key-Dev"] = "your-api-key";
        
        var users = api.UsersGet();
        Console.WriteLine($"Found {users.Count} users in Development");
    }
}
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
🌍 **Environment**: Development | **Build Date**: 2025-07-09T10:04:32.899Z

# TechCorp API Client - CSHARP (Production)

TechCorp official csharp client library for the **Production Environment**.

## 🌍 Environment Information

- **Environment**: Production
- **Base URL**: `https://api.techcorp.com`
- **Version**: `2.0.0.20250709.1218`
- **Authentication**: api-key (X-API-Key)

## 🚀 Installation

### C#

```bash
dotnet add package TechCorp.ApiClient.Prod --version 2.0.0.20250709.1218
```

## ⚡ Quick Start

```csharp
// TechCorp API Client - Production Environment
using TechCorp.ApiClient.Prod.Api;

class Program {
    static void Main() {
        var api = new DefaultApi("https://api.techcorp.com");
        api.Configuration.ApiKey["X-API-Key"] = "your-api-key";
        
        var users = api.UsersGet();
        Console.WriteLine($"Found {users.Count} users in Production");
    }
}
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0.20250709.1218**  
🌍 **Environment**: Production | **Build Date**: 2025-07-09T09:18:07.045Z

# TechCorp API Client - CSHARP (Staging)

TechCorp official csharp client library for the **Staging Environment**.

## 🌍 Environment Information

- **Environment**: Staging
- **Base URL**: `https://api-staging.techcorp.com`
- **Version**: `2.0.0-rc.20250709.1004`
- **Authentication**: api-key (X-API-Key-Staging)

## 🚀 Installation

### C#

```bash
dotnet add package TechCorp.ApiClient.Staging --version 2.0.0-rc.20250709.1004
```

## ⚡ Quick Start

```csharp
// TechCorp API Client - Staging Environment
using TechCorp.ApiClient.Staging.Api;

class Program {
    static void Main() {
        var api = new DefaultApi("https://api-staging.techcorp.com");
        api.Configuration.ApiKey["X-API-Key-Staging"] = "your-api-key";
        
        var users = api.UsersGet();
        Console.WriteLine($"Found {users.Count} users in Staging");
    }
}
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-rc.20250709.1004**  
🌍 **Environment**: Staging | **Build Date**: 2025-07-09T10:04:35.076Z

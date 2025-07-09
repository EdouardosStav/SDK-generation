# TechCorp API Client - JAVA (Development)

TechCorp official java client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1052`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### Java

```bash
// Maven
<dependency>
  <groupId>com.techcorp.dev</groupId>
  <artifactId>api-client</artifactId>
  <version>2.0.0-dev.20250709.1052</version>
</dependency>
```

## ⚡ Quick Start

```java
// TechCorp API Client - Development Environment
import com.techcorp.dev.client.ApiClient;
import com.techcorp.dev.api.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient client = new ApiClient();
        client.setBasePath("https://api-dev.techcorp.com");
        client.setApiKey("your-api-key");
        
        DefaultApi api = new DefaultApi(client);
        List<User> users = api.usersGet();
        System.out.println("Found " + users.size() + " users in Development");
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-dev.20250709.1052**  
🌍 **Environment**: Development | **Build Date**: 2025-07-09T10:52:27.408Z

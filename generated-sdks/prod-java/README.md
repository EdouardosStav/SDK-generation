# TechCorp API Client - JAVA (Production)

TechCorp official java client library for the **Production Environment**.

## 🌍 Environment Information

- **Environment**: Production
- **Base URL**: `https://api.techcorp.com`
- **Version**: `2.0.0.20250709.1218`
- **Authentication**: api-key (X-API-Key)

## 🚀 Installation

### Java

```bash
// Maven
<dependency>
  <groupId>com.techcorp.prod</groupId>
  <artifactId>api-client</artifactId>
  <version>2.0.0.20250709.1218</version>
</dependency>
```

## ⚡ Quick Start

```java
// TechCorp API Client - Production Environment
import com.techcorp.prod.client.ApiClient;
import com.techcorp.prod.api.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient client = new ApiClient();
        client.setBasePath("https://api.techcorp.com");
        client.setApiKey("your-api-key");
        
        DefaultApi api = new DefaultApi(client);
        List<User> users = api.usersGet();
        System.out.println("Found " + users.size() + " users in Production");
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
🌍 **Environment**: Production | **Build Date**: 2025-07-09T09:18:04.271Z

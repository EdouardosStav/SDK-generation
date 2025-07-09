# TechCorp API Client - GO (Production)

TechCorp official go client library for the **Production Environment**.

## 🌍 Environment Information

- **Environment**: Production
- **Base URL**: `https://api.techcorp.com`
- **Version**: `2.0.0.20250709.1004`
- **Authentication**: api-key (X-API-Key)

## 🚀 Installation

### Go

```bash
go get github.com/techcorp/api-client-go-prod@v2.0.0.20250709.1004
```

## ⚡ Quick Start

```go
// TechCorp API Client - Production Environment
package main

import (
    "context"
    "fmt"
    techcorpapi "github.com/techcorp/api-client-go-prod"
)

func main() {
    config := techcorpapi.NewConfiguration()
    config.Host = "api.techcorp.com"
    config.DefaultHeader["X-API-Key"] = "your-api-key"
    
    client := techcorpapi.NewAPIClient(config)
    users, _, _ := client.DefaultApi.UsersGet(context.Background()).Execute()
    fmt.Printf("Found %d users in Production\n", len(users))
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0.20250709.1004**  
🌍 **Environment**: Production | **Build Date**: 2025-07-09T10:04:34.696Z

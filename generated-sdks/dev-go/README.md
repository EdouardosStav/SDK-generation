# TechCorp API Client - GO (Development)

TechCorp official go client library for the **Development Environment**.

## 🌍 Environment Information

- **Environment**: Development
- **Base URL**: `https://api-dev.techcorp.com`
- **Version**: `2.0.0-dev.20250709.1216`
- **Authentication**: api-key (X-API-Key-Dev)

## 🚀 Installation

### Go

```bash
go get github.com/techcorp/api-client-go-dev@v2.0.0-dev.20250709.1216
```

## ⚡ Quick Start

```go
// TechCorp API Client - Development Environment
package main

import (
    "context"
    "fmt"
    techcorpapi "github.com/techcorp/api-client-go-dev"
)

func main() {
    config := techcorpapi.NewConfiguration()
    config.Host = "api-dev.techcorp.com"
    config.DefaultHeader["X-API-Key-Dev"] = "your-api-key"
    
    client := techcorpapi.NewAPIClient(config)
    users, _, _ := client.DefaultApi.UsersGet(context.Background()).Execute()
    fmt.Printf("Found %d users in Development\n", len(users))
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
🤖 **Generated automatically by TechCorp Enterprise SDK Pipeline v2.0.0-dev.20250709.1216**  
🌍 **Environment**: Development | **Build Date**: 2025-07-09T09:16:56.662Z

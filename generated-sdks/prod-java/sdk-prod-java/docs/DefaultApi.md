# DefaultApi

All URIs are relative to *https://api.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**messagesGet**](DefaultApi.md#messagesGet) | **GET** /messages | Get messages |
| [**messagesPost**](DefaultApi.md#messagesPost) | **POST** /messages | Send message |
| [**usersGet**](DefaultApi.md#usersGet) | **GET** /users | Get all users |
| [**usersIdGet**](DefaultApi.md#usersIdGet) | **GET** /users/{id} | Get user by ID |
| [**usersIdPut**](DefaultApi.md#usersIdPut) | **PUT** /users/{id} | Update user |
| [**usersPost**](DefaultApi.md#usersPost) | **POST** /users | Create a new user |


<a id="messagesGet"></a>
# **messagesGet**
> List&lt;Message&gt; messagesGet()

Get messages

Retrieve messages for authenticated user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<Message> result = apiInstance.messagesGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#messagesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Message&gt;**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="messagesPost"></a>
# **messagesPost**
> Message messagesPost(sendMessageRequest)

Send message

Send a new message

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    SendMessageRequest sendMessageRequest = new SendMessageRequest(); // SendMessageRequest | 
    try {
      Message result = apiInstance.messagesPost(sendMessageRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#messagesPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md)|  | |

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Message sent successfully |  -  |

<a id="usersGet"></a>
# **usersGet**
> List&lt;User&gt; usersGet()

Get all users

Retrieve a list of all users

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<User> result = apiInstance.usersGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#usersGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;User&gt;**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="usersIdGet"></a>
# **usersIdGet**
> User usersIdGet(id)

Get user by ID

Retrieve a specific user by their ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Integer id = 56; // Integer | 
    try {
      User result = apiInstance.usersIdGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#usersIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | User not found |  -  |

<a id="usersIdPut"></a>
# **usersIdPut**
> User usersIdPut(id, updateUserRequest)

Update user

Update an existing user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Integer id = 56; // Integer | 
    UpdateUserRequest updateUserRequest = new UpdateUserRequest(); // UpdateUserRequest | 
    try {
      User result = apiInstance.usersIdPut(id, updateUserRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#usersIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | |
| **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User updated successfully |  -  |
| **404** | User not found |  -  |

<a id="usersPost"></a>
# **usersPost**
> User usersPost(createUserRequest)

Create a new user

Create a new user account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    CreateUserRequest createUserRequest = new CreateUserRequest(); // CreateUserRequest | 
    try {
      User result = apiInstance.usersPost(createUserRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#usersPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)|  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User created successfully |  -  |
| **400** | Bad request |  -  |


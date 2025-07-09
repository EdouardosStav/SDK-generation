# TechCorp.ApiClient.Staging.Api.DefaultApi

All URIs are relative to *https://api.example.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**MessagesGet**](DefaultApi.md#messagesget) | **GET** /messages | Get messages |
| [**MessagesPost**](DefaultApi.md#messagespost) | **POST** /messages | Send message |
| [**UsersGet**](DefaultApi.md#usersget) | **GET** /users | Get all users |
| [**UsersIdGet**](DefaultApi.md#usersidget) | **GET** /users/{id} | Get user by ID |
| [**UsersIdPut**](DefaultApi.md#usersidput) | **PUT** /users/{id} | Update user |
| [**UsersPost**](DefaultApi.md#userspost) | **POST** /users | Create a new user |

<a id="messagesget"></a>
# **MessagesGet**
> List&lt;Message&gt; MessagesGet ()

Get messages

Retrieve messages for authenticated user


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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="messagespost"></a>
# **MessagesPost**
> Message MessagesPost (SendMessageRequest sendMessageRequest)

Send message

Send a new message


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="usersget"></a>
# **UsersGet**
> List&lt;User&gt; UsersGet ()

Get all users

Retrieve a list of all users


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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="usersidget"></a>
# **UsersIdGet**
> User UsersIdGet (int id)

Get user by ID

Retrieve a specific user by their ID


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **int** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="usersidput"></a>
# **UsersIdPut**
> User UsersIdPut (int id, UpdateUserRequest updateUserRequest)

Update user

Update an existing user


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **int** |  |  |
| **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="userspost"></a>
# **UsersPost**
> User UsersPost (CreateUserRequest createUserRequest)

Create a new user

Create a new user account


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


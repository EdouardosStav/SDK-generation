# OpenAPI\Client\DefaultApi

All URIs are relative to https://api.example.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**messagesGet()**](DefaultApi.md#messagesGet) | **GET** /messages | Get messages |
| [**messagesPost()**](DefaultApi.md#messagesPost) | **POST** /messages | Send message |
| [**usersGet()**](DefaultApi.md#usersGet) | **GET** /users | Get all users |
| [**usersIdGet()**](DefaultApi.md#usersIdGet) | **GET** /users/{id} | Get user by ID |
| [**usersIdPut()**](DefaultApi.md#usersIdPut) | **PUT** /users/{id} | Update user |
| [**usersPost()**](DefaultApi.md#usersPost) | **POST** /users | Create a new user |


## `messagesGet()`

```php
messagesGet(): \OpenAPI\Client\Model\Message[]
```

Get messages

Retrieve messages for authenticated user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->messagesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->messagesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Message[]**](../Model/Message.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `messagesPost()`

```php
messagesPost($send_message_request): \OpenAPI\Client\Model\Message
```

Send message

Send a new message

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$send_message_request = new \OpenAPI\Client\Model\SendMessageRequest(); // \OpenAPI\Client\Model\SendMessageRequest

try {
    $result = $apiInstance->messagesPost($send_message_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->messagesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **send_message_request** | [**\OpenAPI\Client\Model\SendMessageRequest**](../Model/SendMessageRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Message**](../Model/Message.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `usersGet()`

```php
usersGet(): \OpenAPI\Client\Model\User[]
```

Get all users

Retrieve a list of all users

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->usersGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\User[]**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `usersIdGet()`

```php
usersIdGet($id): \OpenAPI\Client\Model\User
```

Get user by ID

Retrieve a specific user by their ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int

try {
    $result = $apiInstance->usersIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**|  | |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `usersIdPut()`

```php
usersIdPut($id, $update_user_request): \OpenAPI\Client\Model\User
```

Update user

Update an existing user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int
$update_user_request = new \OpenAPI\Client\Model\UpdateUserRequest(); // \OpenAPI\Client\Model\UpdateUserRequest

try {
    $result = $apiInstance->usersIdPut($id, $update_user_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersIdPut: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**|  | |
| **update_user_request** | [**\OpenAPI\Client\Model\UpdateUserRequest**](../Model/UpdateUserRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `usersPost()`

```php
usersPost($create_user_request): \OpenAPI\Client\Model\User
```

Create a new user

Create a new user account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_user_request = new \OpenAPI\Client\Model\CreateUserRequest(); // \OpenAPI\Client\Model\CreateUserRequest

try {
    $result = $apiInstance->usersPost($create_user_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_user_request** | [**\OpenAPI\Client\Model\CreateUserRequest**](../Model/CreateUserRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

# techcorp_api_client_staging.DefaultApi

All URIs are relative to *https://api.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_get**](DefaultApi.md#messages_get) | **GET** /messages | Get messages
[**messages_post**](DefaultApi.md#messages_post) | **POST** /messages | Send message
[**users_get**](DefaultApi.md#users_get) | **GET** /users | Get all users
[**users_id_get**](DefaultApi.md#users_id_get) | **GET** /users/{id} | Get user by ID
[**users_id_put**](DefaultApi.md#users_id_put) | **PUT** /users/{id} | Update user
[**users_post**](DefaultApi.md#users_post) | **POST** /users | Create a new user


# **messages_get**
> List[Message] messages_get()

Get messages

Retrieve messages for authenticated user

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.message import Message
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)

    try:
        # Get messages
        api_response = api_instance.messages_get()
        print("The response of DefaultApi->messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->messages_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Message]**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_post**
> Message messages_post(send_message_request)

Send message

Send a new message

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.message import Message
from techcorp_api_client_staging.models.send_message_request import SendMessageRequest
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)
    send_message_request = techcorp_api_client_staging.SendMessageRequest() # SendMessageRequest | 

    try:
        # Send message
        api_response = api_instance.messages_post(send_message_request)
        print("The response of DefaultApi->messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_message_request** | [**SendMessageRequest**](SendMessageRequest.md)|  | 

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
**201** | Message sent successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get**
> List[User] users_get()

Get all users

Retrieve a list of all users

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.user import User
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)

    try:
        # Get all users
        api_response = api_instance.users_get()
        print("The response of DefaultApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_get**
> User users_id_get(id)

Get user by ID

Retrieve a specific user by their ID

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.user import User
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)
    id = 56 # int | 

    try:
        # Get user by ID
        api_response = api_instance.users_id_get(id)
        print("The response of DefaultApi->users_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->users_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

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
**200** | Successful response |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_put**
> User users_id_put(id, update_user_request)

Update user

Update an existing user

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.update_user_request import UpdateUserRequest
from techcorp_api_client_staging.models.user import User
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)
    id = 56 # int | 
    update_user_request = techcorp_api_client_staging.UpdateUserRequest() # UpdateUserRequest | 

    try:
        # Update user
        api_response = api_instance.users_id_put(id, update_user_request)
        print("The response of DefaultApi->users_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->users_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **update_user_request** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 

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
**200** | User updated successfully |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_post**
> User users_post(create_user_request)

Create a new user

Create a new user account

### Example


```python
import techcorp_api_client_staging
from techcorp_api_client_staging.models.create_user_request import CreateUserRequest
from techcorp_api_client_staging.models.user import User
from techcorp_api_client_staging.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = techcorp_api_client_staging.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with techcorp_api_client_staging.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = techcorp_api_client_staging.DefaultApi(api_client)
    create_user_request = techcorp_api_client_staging.CreateUserRequest() # CreateUserRequest | 

    try:
        # Create a new user
        api_response = api_instance.users_post(create_user_request)
        print("The response of DefaultApi->users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_user_request** | [**CreateUserRequest**](CreateUserRequest.md)|  | 

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
**201** | User created successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


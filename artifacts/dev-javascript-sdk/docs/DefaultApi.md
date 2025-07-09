# TechcorpApiClientDev.DefaultApi

All URIs are relative to *https://api.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagesGet**](DefaultApi.md#messagesGet) | **GET** /messages | Get messages
[**messagesPost**](DefaultApi.md#messagesPost) | **POST** /messages | Send message
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | Get all users
[**usersIdGet**](DefaultApi.md#usersIdGet) | **GET** /users/{id} | Get user by ID
[**usersIdPut**](DefaultApi.md#usersIdPut) | **PUT** /users/{id} | Update user
[**usersPost**](DefaultApi.md#usersPost) | **POST** /users | Create a new user



## messagesGet

> [Message] messagesGet()

Get messages

Retrieve messages for authenticated user

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
apiInstance.messagesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Message]**](Message.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## messagesPost

> Message messagesPost(sendMessageRequest)

Send message

Send a new message

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
let sendMessageRequest = new TechcorpApiClientDev.SendMessageRequest(); // SendMessageRequest | 
apiInstance.messagesPost(sendMessageRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md)|  | 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersGet

> [User] usersGet()

Get all users

Retrieve a list of all users

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> User usersIdGet(id)

Get user by ID

Retrieve a specific user by their ID

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
let id = 56; // Number | 
apiInstance.usersIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdPut

> User usersIdPut(id, updateUserRequest)

Update user

Update an existing user

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
let id = 56; // Number | 
let updateUserRequest = new TechcorpApiClientDev.UpdateUserRequest(); // UpdateUserRequest | 
apiInstance.usersIdPut(id, updateUserRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPost

> User usersPost(createUserRequest)

Create a new user

Create a new user account

### Example

```javascript
import TechcorpApiClientDev from 'techcorp-api-client-dev';

let apiInstance = new TechcorpApiClientDev.DefaultApi();
let createUserRequest = new TechcorpApiClientDev.CreateUserRequest(); // CreateUserRequest | 
apiInstance.usersPost(createUserRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | Message content | 
**RecipientId** | **int32** | ID of the user who will receive the message | 

## Methods

### NewSendMessageRequest

`func NewSendMessageRequest(content string, recipientId int32, ) *SendMessageRequest`

NewSendMessageRequest instantiates a new SendMessageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendMessageRequestWithDefaults

`func NewSendMessageRequestWithDefaults() *SendMessageRequest`

NewSendMessageRequestWithDefaults instantiates a new SendMessageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContent

`func (o *SendMessageRequest) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *SendMessageRequest) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *SendMessageRequest) SetContent(v string)`

SetContent sets Content field to given value.


### GetRecipientId

`func (o *SendMessageRequest) GetRecipientId() int32`

GetRecipientId returns the RecipientId field if non-nil, zero value otherwise.

### GetRecipientIdOk

`func (o *SendMessageRequest) GetRecipientIdOk() (*int32, bool)`

GetRecipientIdOk returns a tuple with the RecipientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientId

`func (o *SendMessageRequest) SetRecipientId(v int32)`

SetRecipientId sets RecipientId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



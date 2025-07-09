# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique message identifier | 
**content** | **str** | Message content | 
**sender_id** | **int** | ID of the user who sent the message | 
**recipient_id** | **int** | ID of the user who will receive the message | 
**timestamp** | **datetime** | When the message was sent | 

## Example

```python
from techcorp_api_client_prod.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



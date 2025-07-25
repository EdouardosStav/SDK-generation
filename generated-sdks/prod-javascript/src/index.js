/**
 * My API
 * A simple API for testing SDK generation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CreateUserRequest from './model/CreateUserRequest';
import Message from './model/Message';
import SendMessageRequest from './model/SendMessageRequest';
import UpdateUserRequest from './model/UpdateUserRequest';
import User from './model/User';
import DefaultApi from './api/DefaultApi';


/**
* A simple API for testing SDK generation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TechcorpApiClientProd = require('index'); // See note below*.
* var xxxSvc = new TechcorpApiClientProd.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TechcorpApiClientProd.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TechcorpApiClientProd.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TechcorpApiClientProd.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0.20250709.1217
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateUserRequest model constructor.
     * @property {module:model/CreateUserRequest}
     */
    CreateUserRequest,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The SendMessageRequest model constructor.
     * @property {module:model/SendMessageRequest}
     */
    SendMessageRequest,

    /**
     * The UpdateUserRequest model constructor.
     * @property {module:model/UpdateUserRequest}
     */
    UpdateUserRequest,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};

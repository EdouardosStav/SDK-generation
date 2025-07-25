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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TechcorpApiClientStaging);
  }
}(this, function(expect, TechcorpApiClientStaging) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TechcorpApiClientStaging.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('messagesGet', function() {
      it('should call messagesGet successfully', function(done) {
        //uncomment below and update the code to test messagesGet
        //instance.messagesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('messagesPost', function() {
      it('should call messagesPost successfully', function(done) {
        //uncomment below and update the code to test messagesPost
        //instance.messagesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersGet', function() {
      it('should call usersGet successfully', function(done) {
        //uncomment below and update the code to test usersGet
        //instance.usersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersIdGet', function() {
      it('should call usersIdGet successfully', function(done) {
        //uncomment below and update the code to test usersIdGet
        //instance.usersIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersIdPut', function() {
      it('should call usersIdPut successfully', function(done) {
        //uncomment below and update the code to test usersIdPut
        //instance.usersIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersPost', function() {
      it('should call usersPost successfully', function(done) {
        //uncomment below and update the code to test usersPost
        //instance.usersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

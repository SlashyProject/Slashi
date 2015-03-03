/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

 module.exports = {   
 	attributes: {     
 		firstName: 'STRING',     
 		lastName: 'STRING',     
 		age: {       type: 'INTEGER',       max: 150,       required: true     },     
 		birthDate: 'DATE',     
 		phoneNumber: {       type: 'STRING',       defaultsTo: '+33-(0)111111111'     },     
 		emailAddress: {       type: 'email',       required: true     },     
 		pseudo: {     type: 'string',     maxLength: 20,     minLength: 5   	}   
 	} 
 };


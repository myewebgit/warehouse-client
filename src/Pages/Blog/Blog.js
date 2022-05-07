import React from "react";

const Blog = () => {
    return(
        <div>
            <h1> Welcome to my blogs</h1>
            <h4>Question 01# Differences Between JavaScript and Node JS. </h4>
            <p>Answer:<br></br>           

Differences Between JavaScript and Node JS
JavaScript is a simple programming language that runs in any browser JavaScript Engine and it is used for client-side web application activity. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses for non-blocking operation, it requires libraries that can easily be accessed from JavaScript programming for better use. JavaScript is normally following Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser JavaScript running engine, it helps us run a written JavaScript program in any browser environment. 
Following is the comparison table between JavaScript and Node JS.
Type
JavaScript is a programming language. It is running in any web browser with a proper browser engine.
Node JS is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
Utility
JavaScript  mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
Node JS mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
Running Engine
JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).
Node JS only run in a V8 engine which mainly used by Google chrome. And JavaScript program which will be written under this Node JS will be always run in V8 Engine.
Conclusion
JavaScript is a very popular programming language which generally used by any web application developer. It is very easy to find a resource on the same for work on JavaScript and do some specific development. Node JS is an extension of JavaScript libraries, but it came with some undefined utilities like non-blocking operating system activity, which sometimes very much require for meeting some organization requirement. 

</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Question# 13.2 When should you use `nodejs` and when should you use `mongodb`.</h4>
            <p>Answer:<br></br>   

Usage of Node.js :

Node.js – based business solutions give you an edge over your competitors. Here are the use cases of Node.js:
Backend for social media networking
Node.js provides blazing-fast routing with its V8 engine along with secure authentication. Scalability is one of the most significant factors which enrich a social media network. Many renowned names such as LinkedIn and Medium are rebuilt on Node.js.
Single-page application (SPA) development
Node.js can build a single-page app, where the look and feel is similar to a desktop application. Due to its versatile options, Node.js is a good fit for building social networking platforms, dynamic websites, and mailing solutions. What’s more, the asynchronous data flow quality on the backend in Node.js makes it the best bet for SPA development.
Chatbots
Node.js offers exclusive advanced functionalities for real-time chatbots and chat applications. The key features such as multi-user applications, intensive data, heavy traffic across all devices are very popular in chatbots. Node.js hits the sweet spot, for it runs across different devices and covers all paradigms in chat and chatbot apps. In addition, Node.js makes it easy to execute push notifications and server-side event loops popular in IMs and real-time apps.
Data streaming
Node.js has a definite edge on this as the processing files at a super-fast speed and feather-light encodes and uploads. This has been encashed upon by many online fashion e-stores and applications with massive data streaming videos.
IoT application development
IoT has drastically become popular over the recent decade. Since then, Node.js has been one of the most preferred solutions for organizations looking to build public and private IoT solution systems. The very core advantage of Node.js is its brilliant ability to process seamlessly concurrent requests with thousands of events released by billions of devices on its network. Thanks to Node.js event-driven server architecture and asynchronous processing relevant heavy I/O operations on IoT networks. Furthermore, Node.js operates on writable and readable channels and streams, which is why it is the most suitable platform for IoT app development.



Usage of  Mongo DB:
Since, MongoDB is a NoSQL database, so we need to understand when and why we need to use this type of database in the real-life applications. Since in normal circumstances, MongoDB always preferred by the developers or project managers when our main concern is the deal with large volume of data with a high performance. If we want to insert thousands of records in a second, then MongoDB is the best choice for that. Also, horizontal scaling (adding new columns) is not so easy process in any RDBMS systems. But in case of MongoDB, it is very much easy since it is a schema less database. Also, this type of work can be directly handled by the application automatically. There is no needs to any type of administrative work for perform any type of horizontal scaling in the MongoDB. MongoDB is good for the below types of situations :
E-Commerce type of product-based applications
Blog and Content Management systems
High Speed logging, caching etc in the Real time
Need to maintain location wise Geospatial data
For maintains data related to the Social and Networking types
If application is a loosely coupled mechanism – means design may change at any point of time.


</p>

<h4>Question#13.3 Differences between `sql` and `nosql` databases.</h4>
<p>Answer:<br></br>


The five critical differences between SQL vs NoSQL are:

SQL databases are RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS),  NoSQL are Non-relational or distributed database system.
SQL databases use structured query language and have a fixed or static or predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based and these databases are not suited for hierarchical data storage, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are best suited for complex queries like multi-row transactions and follows ACID (Atomicity, Consistency, Isolation and Durability) property, while NoSQL is better for unstructured data like documents or JSON and These databases are not so good for complex queries and it follows CAP( consistency, availability, partition tolerance) property. 


</p>
<h4>Question#13.4 What is the purpose of `jwt` and how does it work.</h4>
<p>Answer:<br></br>



JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Whereas JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML. Besides this a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
Purpose of  JWT:
In short, JWTs are used as a secure way to authenticate users and share information.
Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.
Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same. 

How JWT Works:
JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
Once decoded, you will get two JSON strings:
The header and the payload.
The signature. 
The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  
The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 
The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 



</p>
            
        </div>
    );
};

export default Blog;
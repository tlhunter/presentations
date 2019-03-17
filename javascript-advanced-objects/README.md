## Biography

Thomas is the author of Advanced Microservices and a prolific public speaker with a passion for reducing complex problems into simple language and diagrams. His career includes working at Fortune 50's in the Midwest, co-founding a successful startup, and everything in between.

## Talks

https://thomashunter.name/talks/

## Talk Title

Property Descriptors, Getters/Setters, and Proxies, Oh My!

## Abstract

In this talk we'll take a look at some advanced features in the JavaScript language, specifically features which have to do with objects and their properties. First we'll cover Property Descriptors which includes such descriptors as Enumerable, Configurable, and Writable. Under this same umbrella are Getter and Setter descriptors which trigger function calls. Finally we'll look at Proxies and their Traps, which are functions that are called when an object is used in a particular way (such as For/Of loops or reading the objects keys).

## Outline

In the first part of the talk we'll look at Property Descriptors and the syntax for defining them. We'll also look at practical applications, e.g. why to use the enumerable descriptor to keep a property out of Object.keys().

Property Descriptors
.enumerable
.configurable

Data Property Descriptors
.writable
.value

Accessor Property Descriptors
.get()
.set()

Next we'll look at the syntax for creating Proxy traps. We'll examine each of the different traps as well as the different types of code which can trigger the traps. For example, running `'prop' in obj` would trigger the .has() trap.

Basic Proxy Traps
.has()
.get()
.set()

Prototype Proxy Traps
.getPrototypeOf()
.setPrototypeOf()

Extension Proxy Traps
.isExtensible()
.preventExtensions()

Properties Proxy Traps
.getOwnPropertyDescriptor()
.defineProperty()
.deleteProperty()

Miscellaneous Proxy Traps
.ownKeys()
.apply()
.construct()


Also throughout this talk we'll look at security implications whenever applicable. For example, if one were to run `if (typeof obj.prop === 'string') http.request(obj.prop);`, by using a Getter or a .get trap, we could mutate the value between the two calls and run code in an unintended way.

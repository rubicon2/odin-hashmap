Instead of using linked lists for the buckets, used a plain old js object (buckets.js handles the assignment of keys and values to the object in each bucket, as well
as restricting the use of array indices as per the "limitation" section on the Odin Project lesson). It is very easy and quick to access different object properties with 
the provided string key using bracket notation. Accessing a key value pair in an object should be 0(1) while a linked list in a bucket would take slightly longer if 
the linked list has a few nodes chained together (or possibly loads of nodes if the hash function isn't producing a good distribution of array indices).

However this is only practical as the key provided is a string. If it were anything else, particularly an object, this wouldn't work. 
Objects are sometimes used as hashmap keys like in js' own Map object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). 

Either way, as the bucket implementation is separate from the hashmap, it would be possible to switch from objects to linked lists without modifying the hashmap class.

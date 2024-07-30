installtion of mongoDB

https://www.mongodb.com/try/download/community

save this path:-     C:\Program Files\MongoDB\Server\7.0\bin

## now go to cmd and type below command 

C:\Users\Admin>"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --version

output:-
```js
db version v7.0.12
Build Info: {
    "version": "7.0.12",
    "gitVersion": "b6513ce0781db6818e24619e8a461eae90bc94fc",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```


env setup
select path and click edit environment variable then click on new after that paste below path and click ok  
C:\Program Files\MongoDB\Server\7.0\bin


C:\Users\Admin>mongod --version
```js
db version v7.0.12
Build Info: {
    "version": "7.0.12",
    "gitVersion": "b6513ce0781db6818e24619e8a461eae90bc94fc",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

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







## MongoDB Shell Download 
link for download:-  https://www.mongodb.com/try/download/shell

window power shell 
```js
PS C:\Users\Admin> mongosh
Current Mongosh Log ID: 66b8fcb55fb437c961228fb4
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15
Using MongoDB:          7.0.12
Using Mongosh:          2.2.15

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2024-08-11T14:15:14.824+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------
```

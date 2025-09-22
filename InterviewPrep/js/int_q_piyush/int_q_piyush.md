https://www.youtube.com/watch?v=kl7ActKCQIU&t=1797s

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
           
```
after execution global execution context 
is going to be deleted

call stack wait for none .. 

WebAPI's expose some importants things
(setTimeout, setInterval, fetch)
via browsers window object .. 

```

![alt text](image-3.png)

after 5 seconds 

![alt text](image-5.png)

```
event loop is continously watching the
task queue .. if something present in 
queue .. event loop picks that up 
and push that to call stack .. 

call stack execute that 
```
---
> event loop only pushes if call stack is empty

```
promises are also part of browser
```
![alt text](image-8.png)
![alt text](image-7.png)

![alt text](image-9.png)

![alt text](image-10.png)
![alt text](image-11.png)
https://www.youtube.com/watch?v=gPKzwAORly8

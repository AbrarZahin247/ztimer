
# Ztimer

##### A simple Timer/StopWatch written in vanila javscript


Just download/clone the repository and add any of the following file in project directory

> ztimer.js / ztimer.min.js 

---

1. > ##### File Architechture
    * ztimer
        - ztimer.js
        - ztimer.min.js

---

3. > ##### Example 
``` 
<html>
    <body>
        <div id="ztimer"><div>
        <!--Add the scripts -->
        <script src="/ztimer.min.js"></script>
        <script>
        new Ztimer({
                starttime:'0,0,0',
                endtime:'0,1,0',
                selector:'#ztimer'
        }).StartTimer();        
        </script>
    </body>
</html>


```
4. ##### Source Code
> To create a timer for 1 minute.
```
<script>
    new Ztimer({
        endtime:'0,1,0',
        selector:'#ztimer'
    }).StartTimer();    
</script>
```
1. > ##### Options
* **starttime**
  type:string,
  default:'0,0,0' 
  
  >'hour,min,sec'
* **endtime**
  type:string,
  >'hour,min,sec'
* **selector**
  type:string,
  >(example)'#ztimer'

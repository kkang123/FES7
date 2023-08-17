








## 즉시 실행함수

```js
(function (){
console.log('hello IIFE');
})();

// hello IIFE
```

```js
(()=> {return 0})()
// 0
```


```js
(function foo(){
    let a = 3;
    let b = 5;
    return a *  b;
}());

// 15
```

```js
(function (a){
    // 현재 es6 문법을 많이 쓰고 있다
})
```



## 생성자 함수

객체를 생성하는 방법
1. 객체 리터럴 표현식
2. 생성자 함수를 이용하는 방법
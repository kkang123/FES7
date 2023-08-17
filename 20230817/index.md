








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


## 문자열 거꾸로 만드는 재귀함수

```js
function reverse(text) {

    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}
```

https://shanepark.tistory.com/220

## 참고

- 기본값을 한국으로 하고 주소를 새로 설정하는 코드로 바꿔봤어요! 이제 주소는 비공개여서 console에선 나오지 않도록 했습니다!
```js

const Info = function (name) {
  let Address = "한국";
  return {
    name: name,
    getAddress() {
      return Address;
    },
    setAddress(string) {
      Address = string;
    },
  };
};

const myInfo = Info("지현");
myInfo.setAddress("부평");

console.log(myInfo);
```




- 클로저랑 생성자랑 합쳐서 해보았는데 클로저가 잘 됐는지 확인해주실 수 있나요?
```js
function Info(age, address){
  this.address = address;
  this.age = age;
}
function Person(name, age, address){
  const newInfo = new Info(age, address);
  return {
    name : name,
    getInfo(){
      return newInfo;
    },
    setAge(age){
      this.newInfo.age = age;
    }
  }
}
const my = new Person('지현', 26, "인천");
my.getInfo();
const you = new Person('멋사', 7, '서울');
you.getInfo();
```

# 질문

## 클래스관련

```js
class Robot {
    
    // 인스턴스가 생성될 때 자동 생성
    constructor(name, pw) {
        this.name = name;
        this.password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    // 
    get password() {
        return this._password
    }

    set password(pw) {
        this._password = pw;
    }
}

```

# 최적화

속도 체크 
- https://pagespeed.com.cn/
- 개발자 도구 - lighthouse



# 메모리 누수

let main2 = 1;

아래 코드에서는 아예 사용하지 않았을 때 메모리 누수가 발생

예전에는 사용했다가 사용하지 않을 때main2 = null; 해서 비워줬지만 요즘 java, js, python은 고수준 언어여서 가비지컬렉터가 존재한다.

저수준은 기계어 수준에서 메모리 주소에 접근이 가능한지

C, C++ 와 같은 저수준의 언어와는 다르게 자바스크립트에서 사용하지 않는 메모리는 자바스크립트 엔진이 추정하여 삭제(Garbage Collection)합니다. 

가비지 컬렉터는 어떻게 메모리를 삭제하고 추정하는지???
참조 카운팅으로 메모리에 존재하는 값을 몇개의 변수와 함수가 참조하고 있는지 살펴보는 것, 참조가 0이 되면 값을 메모리에서 삭제한다.


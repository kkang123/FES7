# XMLHttpRequest

서버와의 비동기 통신을 가능하게 하는 여러 기능들을 가진 자바스크립트 객체입니다.


# HTTP 상태 코드

## 성공 응답

### 200

요청이 성공적으로 되었습니다. 성공의 의미는 HTTP 메소드에 따라 달라집니다: GET: 리소스를 불러와서 메시지 바디에 전송되었습니다. HEAD: 개체 해더가 메시지 바디에 있습니다. PUT 또는 POST: 수행 결과에 대한 리소스가 메시지 바디에 전송되었습니다. TRACE: 메시지 바디는 서버에서 수신한 요청 메시지를 포함하고 있습니다.

## 클라이언트 에러 응답

### 400 Bad Request
이 응답은 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미합니다.

### 403 Forbidden
클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않습니다. 예를들어 그들은 미승인이어서 서버는 거절을 위한 적절한 응답을 보냅니다. 401과 다른 점은 서버가 클라이언트가 누구인지 알고 있습니다.

### 404 Not Found
서버는 요청받은 리소스를 찾을 수 없습니다. 브라우저에서는 알려지지 않은 URL을 의미합니다. 이것은 API에서 종점은 적절하지만 리소스 자체는 존재하지 않음을 의미할 수도 있습니다. 서버들은 인증받지 않은 클라이언트로부터 리소스를 숨기기 위하여 이 응답을 403 대신에 전송할 수도 있습니다. 이 응답 코드는 웹에서 반복적으로 발생하기 때문에 가장 유명할지도 모릅니다.


🧐 **readyState와 status**

개발자들은 종종 readyState와 status를 혼동합니다. 간단한 비유로 설명해보겠습니다.

배가 너무 고파서 1시간 후에 집에서 저녁을 먹기 위해 피자를 주문해야 합니다. 그래서 배달앱을 꺼내 피자를 한판 주문합니다.

이때 배달하는 사람이 피자 배달을 완료했는지, 아니면 배달 중인지 추적합니다. (readyState)

피자가 집에 도착하고 피자가 올바르게 만들어졌는지 확인합니다. 피자가 타지 않았는지, 재료를 잘못 넣었는지, 또는 주문대로 내가 원하는 피자가 맞는지 확인합니다. (status)

결론적으로, readyState === 4 (즉, 피자가 집에 도착했음)이고 status === 200 (즉, 피자가 올바르게 만들어졌음)인 경우에만 모든 통신이 계획대로 잘 진행되었다는 것을 의미합니다

(전달 받은 데이터가 내가 원하는게 아닐 수 있기 때문에 두 가지 경우( readyState, status) 모두 확인해야한다.)





# callback 지옥

콜백함 수 : 인자로 호출된 함수


## 참고 사이트

https://yeoossi.tistory.com/55




fetch는 자바스크립트에서 웹 API와 상호작용하기 위한 인터페이스로, HTTP 요청을 보내거나 받는 데 사용됩니다. fetch는 ES6에서 도입되었고, 기존의 XMLHttpRequest를 대체하는 현대적인 방법으로 널리 사용되고 있습니다.

요즘 fetch의 사용은 여전히 매우 인기가 있습니다. 그 이유는:

프라미스(promise) 기반: fetch는 프라미스를 반환하므로 비동기 로직을 간편하게 처리할 수 있습니다.
구문이 간결하다: fetch는 XMLHttpRequest에 비해 코드가 더 짧고 읽기 쉽습니다.
프라미스 체이닝: then과 catch를 사용하여 비동기 작업의 연속적인 흐름을 구성할 수 있습니다.
Async/Await와의 호환: fetch와 async/await는 함께 사용되어 비동기 코드를 동기식으로 보이게 작성할 수 있습니다.
그러나, fetch는 아래와 같은 경우에 대한 기본 지원이 부족하다는 비판도 있습니다:

요청 취소
타임아웃 설정
프로그레스 모니터링
이러한 제한사항 때문에 많은 개발자들이 axios와 같은 HTTP 클라이언트 라이브러리를 선호하기도 합니다. axios는 fetch에 없는 다양한 기능을 제공하며, 프라미스 기반으로 작동합니다.

결론적으로, fetch는 여전히 널리 사용되고 있으나, 프로젝트의 요구사항과 개인의 취향에 따라 axios나 다른 HTTP 클라이언트 라이브러리를 사용할 수도 있습니다.
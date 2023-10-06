# Thunder Client

`POST`
https://api.mandarin.weniv.co.kr/


`POST`
https://api.mandarin.weniv.co.kr/user


### JSON
{
        "user": {
                "username": "account_test",
                "email": "account_test1234@test.com",
                "password": "123123",
                "accountname": "account_test"
        }
} 

<!-- 이메일과 어카운트네임은 고유값 -->
{
        "user": {
                "username": "account_test",
                "email": "KJH98@test.com",
                "password": "123123",
                "accountname": "KJH"
        }
} 



`POST`
https://api.mandarin.weniv.co.kr/user/login

`body`

{
        "user": {
                "email" : "KJH98@test.com",
                "password": "123123"
        }
} 


출력값
```
{
  "user": {
    "_id": "651f603cb2cb20566376e898",
    "username": "account_test",
    "email": "kjh98@test.com",
    "accountname": "KJH",
    "image": "http://146.56.183.55:5050/Ellipse.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWY2MDNjYjJjYjIwNTY2Mzc2ZTg5OCIsImV4cCI6MTcwMTczOTg2MSwiaWF0IjoxNjk2NTU1ODYxfQ.9oLr7u4A3Ue8O_n9Rm7VnUQ3f-F_UA2FOzH-1HUqjVI",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY1NTU4NjEsImV4cCI6MTY5Nzc2NTQ2MX0.DpiGxoMzyWyQzZ7hZrV44uHiYdLMQfLzVeRcS86zmMA"
  }
}
```



### 
https://api.mandarin.weniv.co.kr/user/myinfo



### 팔로우

https://api.mandarin.weniv.co.kr/profile/account_test/follow
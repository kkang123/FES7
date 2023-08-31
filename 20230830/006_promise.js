// promise 3가지 상태
// pending 대기 상태
// pulfilled 이행 상태
// rejected 실패 상태


// function sayHello() {
//     return new Promise((resolve, reject) => {
//         const hello = "Hello Hello";
//         resolve(hello);
//     });
// }

// sayHello().then((resolvedData) => {
//     return console.log(resolvedData);
// });

// 성공했을 때는 resolve 실패했을 때는 reject

// promise는 하나의 함수를 실행하고 then을 통해 일렬의 흐름을 다룸



// 2 에러 핸들링

// function sayHello() {
//         return new Promise((resolve, reject) => {
//             const hello = "Hello Hello";
//             reject(new Error());
//         });
//     }
    
//     sayHello().then((resolvedData) => {
//         return console.log(resolvedData);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


    // 캐치 문법으로 에러 캐치하기
    // 실행 시 reject 실행하면 catch를 통해 error가 발생
    // error 핸들링 가능


// 3------------------------------------------*******

    // function sayHello() {
    //             return new Promise((resolve, reject) => {
    //                 // const hello = "Hello Hello";
    //                 // reject(new Error());
    //                 resolve("hello!!!")
    //             });
    //         }
            
    //         sayHello()
    //         .then((resolvedData) => {
    //             console.log(resolvedData);
    //             return resolvedData;
    //         })
    //         .then((resolvedData) => {
    //             console.log(resolvedData);
    //             return resolvedData;
    //         })
    //         .then((resolvedData) => {
    //             console.log(resolvedData);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
        
            // 연속적으로 then사용
            // 연속적으로 then 사용시 resolveData는 앞에 then의 리턴값을 받아온다.
            // 회원가입 시 사용하는 문법
            // 로그인 한 다음에 데이터베이스에 회원이 맞는지
            // 문자열 검사도 하고
            // 일련의 흐름들은 then을 통해 확인


// then 활용이 복잡해보이고 어렵고 어지러워 보인다.
// 그래서 사용하는 것 anync, await

function sayHello() {
    return new Promise((resolve, reject) => {
        resolve("hello!!!")
    });
}

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

//  await을 쓸라면 함수 앞에 async를 써줘야한다!
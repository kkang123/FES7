// import React, { useRef, useState } from 'react'

// export default function App2() {
//     const [name, setName] = useState('');
//     const [id, setId] = useState('');
//     const [userInfo, setUserInfo] = useState([]);

//     const inputName = useRef(null);
//     const inputId = useRef(null);


//     function handlInputName(event) {
//         setName(event.target.value);
//         console.log('렌더링 - 1');
//     }

//     function handlInputId(event) {
//         setId(event.target.value);
//         console.log('렌더링 - 2');
//     }

//     function handleSubmit(event) {
//         event.preventDefault();

//         // 유저 입력값을 초기화합니다.
//         inputName.current.value = '';
//         inputId.current.value = '';
//         inputName.current.focus();
//         // useref에 접근할려면 current 사용

//         // 유저의 입력 값을 userInfo변수에 저장합니다.
//         const newInfo = [...userInfo, { name, id }];
//         setUserInfo(newInfo);

//         console.log('렌더링 - 3');
//     }

//     function getNum(list) {
//         console.log('렌더링!');
//         return list.length
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='이름을 입력해주세요' onChange={handlInputName} ref={inputName} />
//                 <input type="text" placeholder='아이디를 입력해주세요' onChange={handlInputId} ref={inputId} />
//                 <button>회원명부 작성</button>
//             </form>

//             <ul>
//                 {userInfo.map((value, index) => {
//                     return (
//                         <li key={index}>
//                             <h3>이름 : {value.name}</h3>
//                             <strong>아이디 :{value.id}</strong>
//                         </li>)
//                 })}
//             </ul>
//             <span>{getNum(userInfo)}</span>
//         </>
//     )
// }


// useMemo 추가
import React, { useMemo, useRef, useState } from 'react'

export default function App2() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    const inputName = useRef(null);
    const inputId = useRef(null);


    function handlInputName(event) {
        setName(event.target.value);
        console.log('렌더링 - 1');
    }

    function handlInputId(event) {
        setId(event.target.value);
        console.log('렌더링 - 2');
    }

    function handleSubmit(event) {
        event.preventDefault();

        // 유저 입력값을 초기화합니다.
        inputName.current.value = '';
        inputId.current.value = '';
        inputName.current.focus();

        // 유저의 입력 값을 userInfo변수에 저장합니다.
        const newInfo = [...userInfo, { name, id }];
        setUserInfo(newInfo);

        console.log('렌더링 - 3');
    }

    function getNum(list) {
        console.log('렌더링!');
        return list.length
    }

    // userInfo 값이 업데이트 될때만 getNum을 실행하도록 수정합니다.
    const itemLength = useMemo(() => {
        return getNum(userInfo);
    }, [userInfo]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='이름을 입력해주세요' onChange={handlInputName} ref={inputName} />
                <input type="text" placeholder='아이디를 입력해주세요' onChange={handlInputId} ref={inputId} />
                <button>회원명부 작성</button>
            </form>

            <ul>
                {userInfo.map((value, index) => {
                    return (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 :{value.id}</strong>
                        </li>)
                })}
            </ul>
            <span>{itemLength}</span>
        </>
    )
}

// 렌더링 전에 영향 끼치는 것 useMEmo
// 렌더링 후에 영향 끼치는 것 useEffect
// 상태 변화를 감지하여 경우에 따라 콜백함수를 호출하고 싶다면 useEffect
// 값을 저장하여 불필요한 동작 또는 렌더링을 막아 최적화화고 싶다면 useMemo
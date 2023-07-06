* [텍스트 꾸미기](#텍스트-꾸미기)
* [color 색상](#color-색상)
* [CurrentColor](#CurrentColor)
* [font-family 글꼴](#font-family-글꼴)


css가상클래스까지

<br>

# 텍스트 꾸미기

## color 색상
- 폰트 색상을 의미
- `font`가 안 붙음(font-size, font 설정 등등...)
- 키워드(red, blue), HEX(#+16진수 표기법), rgb(), rgba(), hsl(), hsla()등 다양한 방법으로 표기
- 보통 HEX을 많이 사용하며, 투명값을 위해 rgba도 많이 사용
- `transparent`는 투명한 색을 의미  

<br><br>

## CurrentColor

- 부모에 color 값이 있다면 **상속**으로 처리됩니다.

```html
<div>
    <p>안녕하세요</p>
</div>
```
```css
div {	color: sandybrown;}
p {	
	border: 1px solid currentColor;
}
```
저시력 시각 장애(시력 저하, 색약, 색맹)를 위해
폰트의 색상과 배경의 명도 대비도 중요합니다! <br>
(크롬에 표시됨) <br>
(최소한 `4.5:1`)

<br>
---

<br>

 > inherit은 color값들은 처음부터 상속되지만 border나 그 외의 값들은 부모한테만 상속받음 

 > Lighthouse로 대비율 검사

<br><br>

 ## font-family 글꼴

 ```css
p {
    font-family: 'Pretendard-Regular', Verdana, sans-serif;
}
 ```

 <br>

 ### 폰트 적용방법
 1. link로 삽입
 ```html
<!-- 사용예시1 : href 참고 -->
<head>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
    <style> 
				body {font-family: 'Noto Sans KR', sans-serif;}
		</style>
</head>
 ```
 2. import로 삽입
 ```
/*사용예시2 : url 참고 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap");

body{
	font-family: "Noto Sans KR", sans-serif;
}

```

<br>

**@font-face**
브라우저 사용자의 컴퓨터에 특정 폰트가 설치되어 있지 않아도 @font-face 속성을 통해 폰트를 설치하여 사용하도록 할 수 있습니다

> 폰트 사이트 : 눈누, 구글 폰트


> 폰트를 “” 으로 묶은 것도 있고 그렇지 않는 것도 있는데 왜 그런건가요?  <br><br> 1. 한글일 경우에는 "" 를 사용합니다.   <br> 2. 영문이지만 공백이 포함될 경우 "" 를 사용합니다.  <br> 3. 한글폰트의 한글 이름, 영문이름을 제대로 인식 못하는 경우를 대비해서 한글과 영문명을 같이 작성해 주는 것이 좋습니다.  <br> 4. generic(sans-serif, serif와 같은 기본 폰트)인 경우 "" 를 사용하지 않습니다  <br> 5. 한글은 한글 폰트로, 영문은 영문폰트으로 나오길 원한다면, 영문폰트명, 한글폰트명 순으로 적어줍니다!

### 웹폰트 사이트
https://fonts.google.com/ <br>
https://noonnu.cc/

> 폐쇄적인 사이트 제작시 url폰트 사용 못함(다운로드해서 상대경로로 연결)  

## font-size 글꼴 크기  
- `px`: 절대단위
- `em`: 현재 요소의 부모 요소에 설정된 글꼴 크기 상대 단위
- `rem`: 루트요소(html)에 설정된 글꼴 크기 상대 단위(html에 따라 크기 변경 가능)


> 🤔 Q. **왜 em, rem, vw, vh 같은 단위를 쓰는 건가요?**  
 반응형 웹페이지 개발, 유지보수 등에 용이합니다!


## font-weight

- 텍스트 굵기 설정
- `normal` : 기본
- **`bold`** : 굵게
- `lighter`: 현재 요소의 굵기를 부모 요소 굵기 보다 한 단계 가볍게
- `bolder`: 현재 요소의 굵기를 부모 요소 굵기 보다 한 단계 두껍게
- **`100` - `900`**  

<wbr>

## text-transform  
- `none`: 변형방지
- `**uppercase**`: 모든 텍스트를 대문자로
- `**lowercase**`: 모든 텍스트를 소문자로
- `capitalize`: 모든 단어의 첫글자를 대문자로
```css
/* 가상요소 : 요소의 첫번째 문자는 선택하는 선택자 */
p::first-letter{
	text-transform: uppercase;	
}
```
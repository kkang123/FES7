* [텍스트 꾸미기](#텍스트-꾸미기)
    * [color 색상](#color-색상)
    * [CurrentColor](#CurrentColor)
* [font-family 글꼴](#font-family-글꼴)
* [font-size 글꼴 크기](#font-size-글꼴-크기) 
    * [font-weight](#font-weight)
    * [text-transform](#text-transform)
    * [text-shadow](#text-shadow)
    * [text-align](#text-align)
    * [vertical-align](#vertical-align)
    * [line-height](#line-height)
    * [letter-spacing](#letter-spacing)
    * [word-spacing](#word-spacing)
    * [text-indent](#text-indent)
    * [word-break](#word-break)
    * [text-overflow](#text-overflow)
    * [font-style](#font-style)

* [목록 관련 태그 ul, ol, dl](#목록-관련-태그-ul-ol-dl)

* [단위](#단위)




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
/* :first-letter은 첫번째 단어만 대문자 */
p::first-letter{
	text-transform: uppercase;	
}
```
```html
<!-- 텍스트 변경 없이 출력 -->
<p style='text-transform: none'>hi hELLO</p>

<!-- 모든 텍스트 대문자 -->
<p style='text-transform: uppercase'>hi hELLO</p>

<!-- 모든 텍스트 소문자 -->
<p style='text-transform: lowercase'>hi hELLO</p>

<!-- 모든 단어 첫글자를 대문자로 -->
<p style='text-transform: capitalize'>hi hELLO</p>
```

<br>

## text-decoration(단축 속성)  
> 선으로 텍스트를 꾸미는 속성  
> text-decoration: none | line-through | overline | underline | initial | inherit

    none : 선을 만들지 않습니다.
    line-through : 글자 중간에 선을 만듭니다.
    overline : 글자 위에 선을 만듭니다.
    underline : 글자 아래에 선을 만듭니다.
    initial : 기본값으로 설정합니다.
    inherit : 부모 요소의 속성값을 상속받습니다.

<br>

- ### text-decoration-color

<br>

- ### text-decoration-line

    - `**underline**`: 밑줄 긋기
    - `overline`: 오버라인
    - `line-through`: 취소선(텍스트 중간선)

<br>

- ### text-decoration-style

    - **`solid`** `wavy` `dashed`  

<br>

    > solid : 한줄 스타일 ( 기본 값 )  
    > wavy : 물결 스타일  
    > dashed : 파선 스타일  
    > double : 이중선 스타일  
    > dotted : 점선 스타일  

<br>
<br>

- ### text-decoration-thickness
        : 글자라인 굵기 속성 설정
```css
.dashed {
  text-decoration: lime underline overline dashed auto;
}

.wavy{
	text-decoration-color: royalblue;
  text-decoration-line: line-through underline overline;
  text-decoration-style: wavy;
	text-decoration-thickness:5px;
}
```

<br><br>

# text-shadow

- 텍스트에 그림자를 추가합니다
- 축약형입니다.
- `offset-x | offset-y | blur-radius | color`
- `box-shadow` 는 상자 그림자를 나타냅니다
```css
text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
```

<br><br>

# text-align

- 텍스트의 가로정렬을 설정합니다.
- `left` : 왼쪽 정렬
- `right` : 오른쪽 정렬
- `center` : 중앙 정렬
- `justify` : 양쪽정렬
- `justify-all`: 양쪽정렬(마지막 줄 적용)

> 양쪽 정렬 적용 시 불규칙한 여백(흰 강 현상- River of white)은 가독성에 있어 좋지 못해 사용자 경험을 줄 수 있습니다.  
<img src=../pic/Group_1667.png>

<br>
<br>

# vertical-align

- 텍스트의 세로정렬을 설정합니다.
- **인라인, 인라인 블록** 및 **테이블 셀 요소**에만 적용됩니다!
- 블록 레벨 요소를 수직으로 정렬하는 데 사용할 수 없습니다.
- 블록 레벨에서 수직정렬하고 싶다면 추후 배울 flex를 사용하면 됩니다!
```css
.block { 
	display:flex;
  align-items: center;
}
```
<br>
<br>

# line-height

- 행간을 설정합니다.
- 단위, 배수, % 등의 값으로 설정할 수 있습니다.

<br>
<br>

# letter-spacing

- 자간을 설정합니다.
- 단위 값으로 설정할 수 있습니다.

<br>
<br>

# word-spacing

- 단어와 단어 사이의 간격을 설정합니다.
- 단위 값으로 설정할 수 있습니다.

<br>
<br>

# text-indent

- 문단 첫째줄 빈 공간(들여쓰기)의 길이를 설정합니다.

<br>
<br>

# word-break

- 텍스트가 자신의 콘텐츠 박스 밖으로 넘칠 경우 줄바꿈 여부를 지정합니다.
- `normal` 기본 줄 바꿈 규칙을 사용합니다
- `break-all` 글 넘침을 방지하기 위해서 어떠한 두 문자 사이에서도 줄바꿈이 발생할 수 있습니다.(한중일 텍스트는 제외)
- `keep-all` 한중일 텍스트에서 줄을 바꿀 때 단어를 끊지 않습니다. 비 한중일 텍스트에서는 `normal`과 동일합니다

<br>
<br>

# text-overflow

- 텍스트가 넘칠경우 어떻게 표시할지를 설정합니다
- 말줄임 처리할 때 자주 사용합니다.
- `ellipsis`: 말줄임
```css
.ellipsis{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.multi-ellipsis{
  overflow:hidden;  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

<br>
<br>

# 기타

## font-style

- 이탤릭체 사용 기울임 글꼴
```css
p {font-style: italic;}
```

<br>
<br>

# font(단축 속성)

- font: `font-style` `font-variant` **`font-weight`** **`font-stretch` `font-size`/`line-height`** **`font-family`**
- 순서 중요합니다!
- `line-height` 는 font-size를 꼭 적고 사용해주세요!
```css
p {
	font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```
```css
p {
	font: bold 3em/1.5 Helvetica, Arial, sans-serif;
}
```

<br>
<br>

# 목록 관련 태그 ul, ol, dl

## ol

- ordered list의 약자, **순차적 목록**을 말합니다.
- 정렬된, **순서가 있는** 보통 숫자 목록을 의미합니다.
- `type`: 항목을 셀 때 사용할 카운터 유형
    - `1`: 숫자(기본값)
    - `a`: 소문자 알파벳
    - `A`: 대문자 알파벳
    - `i`: 소문자 로마 숫자
    - `I`: 대문자 로마 숫자
- `start`: 항목을 셀때 시작할 수, 아라비아 숫자만 가능.
- `reversed`: 순서 역전
- 순서가 중요한 목록에 적용합니다.
- ex) 레시피, 브레드크럼
> 브레드크럼 (BreadCrumbs) - 빵부스러기, 빵가루
사이트 구조와, 현재 페이지의 계층구조를 링크 목록등으로 나타낸 것을 말합니다.  
사용자의 웹사이트의 탐색을 도와줍니다.

<br></br>
<br></br>

# ul

- unordered list의 약자, **비순차적 목록**을 말합니다.
- **정렬되지 않은**, 보통 **불릿으로 표현**되는 목록을 의미합니다.
- 순서가 중요하지 않는 목록에 적용합니다.
>ol vs. ul
항목의 순서를 바꿨을 때 그 의미도 바뀐다면 ol을 사용하세요,  
그렇지 않고 순서가 중요하지 않다면 ul을 사용하면 됩니다!

<br></br>
<br></br>

# li

- 목록의 항목을 나타냅니다.
- 단독으로 사용할 수 없습니다. **ol, ul 의 자식요소로만 사용할 수 있습니다!**
> ol,ul의 자식요소로는 li만 사용할 수 있습니다!

<br>

(X) 자식요소로는 li만!
```html
<ol>
	<div>item</div> <!-- X -->
	<li>item</li>
	<li>item</li>
</ol>

```

자손요소로는 사용가능합니다
```html
<ol>
	<li>item
			<div>first item</div>
	</li>
	<li>item</li>
</ol>
```

<br></br>
<br></br>

## ol의 자식요소 li 특성

- `type`: 넘버링 타입. ol요소에 지정하는 유형을 덮어씁니다.
    - `1`: 숫자(기본값)
    - `a`: 소문자 알파벳
    - `A`: 대문자 알파벳
    - `i`: 소문자 로마 숫자
    - `I`: 대문자 로마 숫자
- `value`: 항목의 현재 서수 값을 나타내는 정수
```html
<ol type = "I">
    <li value="3">first item</li>
    <li type="1">second item</li>
    <li>third item</li>
    <li>fourth item</li>
    <li>fifth item</li>

    <!-- 
III. first item
4. second item
V. third item
VI. fourth item
VII. fifth item
     -->
```

<br></br>
<br></br>

# dl

- definition list의 약자로, **설명 목록**을 나타냅니다.
- `dt`(용어), `dd` (용어설명)
- 주로 용어사전 구현, 메타데이터(키-값 쌍의 목록)을 표시할때 사용합니다.
- 여러개의 용어와 하나의 설명, 하나의 용어 하나의 설명도 가능합니다.
```html
<dl>
		<dt>WEB<dt>
		<dt>WWW<dt>
		<dt>W3<dt>
		<dt>World Wide Web<dt>
		<dd>인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간<dd>
</dl>
```

<br>
<br>

## dt

- 용어
- dl 요소 안에 위치해야합니다. dl 의 자식, 자손이 아닌 단독으로 사용할 수 없습니다.
- dl과 함께 사용합니다.

<br>
<br>

## dd

- 설명 목록
- dl 요소 안에 위치해야합니다. dl 의 자식, 자손이 아닌 단독으로 사용할 수 없습니다.
- 앞선 dt와 함께 사용됩니다.

<br>
<br>

### 스타일링

- 스타일링을 위해 div로 묶을 수 있습니다!
```html
<dl>
	<div>
		<dt><dt>
		<dd><dd>
		<dd><dd>
	</div>
	<div>
		<dt><dt>
		<dd><dd>
		<dd><dd>
	</div>
	<div>
		<dt><dt>
		<dd><dd>
	</div>
</dl>
```
> dl 사용 주의사항!
키-값의 쌍의 목록이라고해서 dl을 사용해서는 안됩니다!  
dd의 값이 변화할 수 있는 정보라면 dl을 써선 안됩니다!  
이미 정의 되어 있거나 설명이 정해져 있는 경우에만 사용할 수 있습니다.  <br><br>
메뉴 혹은 form에 사용하시면 안됩니다!

<br>
<br>

# 단위

- 절대 길이 단위 `px`(cm, mm, in, pc, pt, ...)
- 상대 길이 단위 : %, vw, vh, vmin, vmax, em, rem

<br>

## px
- Pixel(Picture + Element)
- 디바이스 화면에서 이미지를 표현하는 가장 작은 단위입니다.
- 고정된 값이라 직관적으로 쉽게 사용할 수 있습니다.


> 🤔 **px 단위만 사용하면 안 되나요?**  
다양한 디바이스가 생겨나며 픽셀 **밀도**도 다양해졌습니다.   
절대단위의 값(px) 사용 시 디바이스별로 다른 위치, 크기로 보이는 문제가 발생하게 됩니다.  
chrome://settings/?search=%ED%81%AC%EA%B8%B0  
반응형 웹, 접근성, 사용자 경험을 생각한다면 다양한 상대단위의 개념을 이해하고 잘 사용할 수 있어야 합니다.

<br>
<br>


# 참고문헌
https://d2.naver.com/helloworld/4969726 

<br>

https://petaverse.pe.kr/entry/%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%ED%8F%B0%ED%8A%B8%ED%8E%B8  

<br>

https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=304371832&start=slayer
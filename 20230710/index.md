
* [이미지 img](#이미지-img)
    * [img](#img)
    * [area, map](#area-map)
    * [figure, figcaption](#igure-figcaption)
* [이미지 비율 유지하기](#이미지-비율-유지하기)
* [Position](#position)




# 이미지 img

# img

- image. 문서에 이미지를 삽입합니다
- 예전에는 이미지를 보려면 링크를 클릭해 새 창에서 확인했었습니다. 이미지도 하나의 문서로 생각되었던 거죠
- 마크 로웰 앤드리슨(모자이크 웹 브라우저 및 넷스케이프 내비게이터를 개발)
    - ‘**🤔거쳐야 하는 단계 없이, 글자와 이미지를 한 번에 보여주면 어떨까?**’와 같은 생각을 하게 되었고 모자이크 브라우저에 이미지 태그를 만들어 적용하게 되었습니다!

```css
<img src="chilli.jpg" alt="위니브 다람쥐 캐릭터 칠리" >

/* alt 값을 비워도 되지만 절대 지우면 안된다! */
```
- `src`: 경로
- `alt`: 대체 텍스트. 이미지에 대한 설명
    - src에 지정한 이미지를 제대로 불러오지 못했을 때 alt 값에 적힌 내용을 보여줍니다.
    - 시각장애인을 위한 스크린리더를 지원합니다
    - 이미지를 대체하는 텍스트가 중복이라면 `alt=""` **생략이 아닌 빈 값으로** 둡니다.

<hr>

🤔 **이미지 하단에 빈 공간이 생겨요!**

해당 현상은 img가 **인라인 요소**라서 발생하는 현상입니다.

인라인 요소이기 때문에 img의 세로 정렬이 글자의 baseline을 따르게 됩니다.

![Frame 86.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2fdf83e3-f2d2-4a31-a713-f95743a320e9/Frame_86.png)

해당 현상을 해결하기 위해서는 아래와 같은 초깃값을 넣어주면 됩니다

```css
img{
	vertical-align:top;
}
```

<hr><br><br>

# area, map

- image-map   
https://www.image-map.net/

<br><br>

# igure, figcaption

- 이미지에 캡션을 달고 싶을 때 사용합니다

이러한 콘텐츠의 경우 이미지와 캡션이 연결되도록 <figure> 요소를 도입할 수 있습니다.
```html
<figure>
	<img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리">
	<figcaption>
		관심 받고 싶어 하는 아기
	</figcaption>
</figure>
```
- 이미지뿐만 아니라 코드 조각, 인용문 등에도 사용 가능합니다.


<br>
<br>
<br>
<br>

# 이미지 비율 유지하기

## 방법1) aspect-ratio

- 기본 가로세로 비율을 설정합니다.
```css
img{
  width:300px;
  /* 가로/세로 비율 */
  aspect-ratio: 2 / 1;
  object-fit:cover;
}
```

## 방법2) padding %값 이용하기

- padding의 top과 bottom % 값은 부모의 세로가 아닌, 가로 너비를 기준으로 합니다!
```html
<div class="thumbnail">
  <img src="https://github.com/stronger-deer/myBlog/blob/main/img/main-visual.jpg?raw=true"
       alt="한 성인이 스케이트보드를 타고 있다" />
</div>
```
```css
.thumbnail {
  position: relative;
  height: 0;
  padding-top: 50%; 
  overflow: hidden;
}

.thumbnail  img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```



<br>
<br>
<br>
<br>
<br>
<br>





# Position
 - 문서상에 요소를 배치하는 방법을 지정

    > block : 한 줄 모두 차지 (대표 element - `<div>`, `<p>` )  
 inline : 콘텐츠 크기 만큼만 차지 (대표 element - `<span>`)

 ## static(정적)

- 기본값.
- 단어 의미: 변화 움직임이 없이 고정된, 정적인 상태
- html를 작성한 순으로 정상적인 흐름(normal flow)에 따라 위치가 지정되게 됩니다.

`(left, right, top, bottom 등의 영향을 받지 않는 것으로 화면의 흐름대로, 순서대로 나열된다.)`

## relative(상대적)

- 단어 의미: 비교 상의, 상대적인
- 자신이 있어야 하는 위치에 상대적입니다.
- 다른 콘텐츠들의 위치에 영향을 미치지 않습니다.

위치를 직접적으로 입력해준다`(static 과는 다르게 left, right, top, bottom 등의 영향을 받음)`
```css
.wrap-relative .a{
  position:relative;

  /* 상대적 위치 */
  top:50px;
  left:50px;
}
```

## absolute(절대적)

- **조상의 위치**를 기준으로 자리를 잡습니다.
    - static을 제외한 position 속성값을 가진 가장 가까운 조상
- 일반적인 문서 흐름에서 자신의 요소를 제거하고 자리를 잡게 됩니다.

static을 제외한 부모의 위치에서 상대적으로 위치하고, 만약 부모가 없다면 document body를 기준으로하여 위치하게 된다.

`(relative가 자기 자신을 기준으로 위치 설정시 이동한다면 absolute는 좌표 이동시 (0, 0)인 좌표가 조상을 기준으로하여 출발한다.)`

```css
.wrap-absolute .a{
  position:absolute;
  top:50px;
  left:50px;
}
```

## fixed

- 브라우저 화면(뷰포트)을 기준으로 위치를 지정합니다.
    

    > 💡 단, 요소의 조상 중 하나가 `transform`, `perspective`, `filter` 속성 중 어느 하나라도 `none`
    이 아니라면 뷰포트 대신 그 조상을 컨테이닝 블록으로 삼습니다.
    
    > transform 속성의 값으로 none 의외의 것을 넣으면 **새로운 지역 좌표 시스템**을 생성합니다.
    브라우저 렌더링 순서상 reflow(postion) → composite(transfrom) 로 진행되기 때문에 해당 속성들에 의해서 위치가 변경되는것 같습니다!
    
- 일반적인 문서 흐름에서 자신의 요소를 제거하고 자리를 잡게 됩니다.
- 스크롤을 내리거나 올리거나 해도 화면의 같은 위치에 고정되어 있습니다.
- header, 하단 top 버튼에 사용합니다.

`(쉽게 설명해서 스크롤로 움직여도 해당위치에 고정되어 있는 상태를 뜻한다.)`
```css
.wrap-fixed .a{
  position:fixed;
  bottom:50px;
  right:50px;
}
```

## sticky(끈적)

- **조상의 위치**를 기준으로 자리를 잡습니다.
    - static을 제외한 position 속성값을 가진 가장 가장 가까운 조상


`(사용자의 scrolling에 따라 relative 와 fixed의 속성을 왔다갔다 하게 된다. IE 와 Edge 15 이하 버전은 지원하지 않는다. stickcy의 경우 fixed 를 할 위치를 top 등을 써서 지정을 해줘야한다. 그리고 다음 엘리먼트를 만나는동안 fixed 가 되어 있는 것이기때문에 fixed가 될 수 있는 충분한 공간이 필요하다.)`

```css
.wrap-sticky p{
  width:400px;
}
.wrap-sticky .a{
  position:sticky;
  top:0;
  left:50px;
}

.wrap-sticky .c{
  position:sticky;
  bottom:0;
  right:50px;
}

/* top, bottom : 0값을 지정해주지 않으면 fixed 속성이 발현되지 않는다!! */
```






    <hr><br>

> 💡 position 속성 때문에 다른 요소의 내용이 가려지지 않도록 주의하세요!




<br>
<br>
<br>
<br>
<br>


# z-index

- `position`이 `**static` 외의 값**을 가진 박스에 대하여 z축의 위치를 지정합니다.
- 값이 클수록 제일 위로 배치됩니다.
- 부모가 z-index를 높여 자식 앞으로 나올 수 없습니다.
- 자식은 z-index를 음수값으로 주어 부모 뒤로 갈 수 있습니다.
- 유지보수를 위해 100 단위로 작업하면 좋습니다!
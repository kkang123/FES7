* [테이블](#테이블)
* [tr, th, td](#tr-th-td)
* [caption](#caption)
* [thead, tbody, tfoot](#thead-tbody-tfoot)
* [colgroup](#colgroup)

<br>

- [속성](#속성값)
   - [Scope](#scope)
   - [colspan, rowspan](#colspan-rowspan)
- [표 접근성 높이기](#표-접근성-높이기)

<br>

- [Grid](#grid)
    - [grid-columns](#grid-columns)
    - [grid-rows](#grid-rows)
- [grid함수](#함수)
- [grid-area](#grid-area)

# 테이블

접근성 테이블(scope, id & headers)



# tr, th, td

- `tr`: table row. 테이블의 행
- `th`: table header. 테이블의 행, 열의 제목을 나타내는 셀
- `td`: table data. 셀 내용
```html
<tr>
        <th></th>
        <td></td>
</tr>

```


## caption

```html
<table>
	<caption>설명</caption>
	<!-- 생략 -->
</table>
```
- 테이블의 제목이나 설명을 의미
- table의 첫번째 자식으로 사용해야 합니다.
- 선택적으로 사용 가능하며 필수 요소는 아닙니다
- **표의 목적에 대한 명확하고 상세한 설명**을 포함하는 <caption> 요소를 제공하여 사용자가 표 콘텐츠를 확인할지, 넘어갈지 결정할 때 도움을 줄 수 있습니다.
- `caption-side` : top, bottom 으로 제목 위치를 표 기준 top bottom으로 설정 가능.


## thead, tbody, tfoot

- 테이블의 머리글, 본문, 바닥글을 의미.
- 구역을 나누는 요소로 사용.
- 선택적으로 사용하면 됩니다. 필수 요소는 아닙니다. 코드의 가독성을 위해 명시적으로 사용하면 좋습니다
- `<thead>`: 테이블 행 블록(row block) 내에 **제목 열 그룹**(column headers)으로 구성할 경우 사용.
- `<tbody>`: 행 블록 내에 **테이블 데이터**로 구성할 때 사용.
- `<tfoot>`: 행 블록 내에 **열 요약**(column summaries)로 구성할 때 사용.

## colgroup

- 테이블 열 그룹을 만들고 싶을 때 사용합니다.
```html
<colgroup span='2'></colgroup>
```

> 보통 모든 열에 한 번에 공통된 css를 주고 싶을 때 사용한다

<br>
<br>

# 속성값

## scope

- 행(row) 또는 열(col), 행그룹(rowgroup), 열그룹(colgroup)의 속성값으로 셀의 범위를 지정합니다
- `th` 태그에 사용합니다.



## colspan, rowspan
`colspan` : 열 병합, `rowspan` : 행 병합  
(셀 병합)

```html
<table>
        <caption>Items Sold August 2016</caption>
    
        <tbody>
        <tr>
            <td colspan="2" rowspan="2">&nbsp;</td>
            <th colspan="3" scope="colgroup">Clothes</th>
            <th colspan="2" scope="colgroup">Accessories</th>
        </tr>
        <tr>
            <th scope="col">Trousers</th>
            <th scope="col">Skirts</th>
            <th scope="col">Dresses</th>
            <th scope="col">Bracelets</th>
            <th scope="col">Rings</th>
        </tr>
        <tr>
            <th rowspan="3" scope="rowgroup">Belgium</th>
            <th scope="row">Antwerp</th>
            <td>56</td>
            <td>22</td>
            <td>43</td>
            <td>72</td>
            <td>23</td>
        </tr>
        <tr>
            <th scope="row">Gent</th>
            <td>46</td>
            <td>18</td>
            <td>50</td>
            <td>61</td>
            <td>15</td>
        </tr>
        <tr>
            <th scope="row">Brussels</th>
            <td>51</td>
            <td>27</td>
            <td>38</td>
            <td>69</td>
            <td>28</td>
        </tr>
        <tr>
            <th rowspan="2" scope="rowgroup">The Netherlands</th>
            <th scope="row">Amsterdam</th>
            <td>89</td>
            <td>34</td>
            <td>69</td>
            <td>85</td>
            <td>38</td>
        </tr>
        <tr>
            <th scope="row">Utrecht</th>
            <td>80</td>
            <td>12</td>
            <td>43</td>
            <td>36</td>
            <td>19</td>
        </tr>
        </tbody>
    </table>
```

# 표 접근성 높이기

- scope, id-headers로 셀의 내용과 셀의 관계를 지정할 수 있습니다.
- 이런 방법으로 제목과 셀 내용을 함께 읽어주기 때문에  데이터의 의와 관계를 좀 더 쉽게 파악 가능하다

## scope

- 제목 셀이 명확한 단순한 표에 적용하여 표 구조를 나타냅니다.
```html
<table>
    <thead>
      <tr>
        <th scope="col">Purchase</th>
        <th scope="col">Location</th>
        <th scope="col">Date</th>
        <th scope="col">Evaluation</th>
        <th scope="col">Cost (€)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Haircut</th>
        <td>Hairdresser</td>
        <td>12/09</td>
        <td>Great idea</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
```

## id - headers

- 셀이 병합된 표거나 내용이 많아 복잡한 경우, 제목 셀이 2줄 이상이 되어 복잡한 경우 해당 속성으로 명확하게 연결하는 것이 좋습니다!
```html
<table>
    <thead>
      <tr>
        <th id="purchase">Purchase</th>
        <th id="location">Location</th>
        <th id="date">Date</th>
        <th id="evaluation">Evaluation</th>
        <th id="cost">Cost (€)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="haircut">Haircut</th>
        <td headers="location haircut">Hairdresser</td>
        <td headers="date haircut">12/09</td>
        <td headers="evaluation haircut">Great idea</td>
        <td headers="cost haircut">30</td>
      </tr>
    </tbody>
  </table>
```

> 💡 scope 속성과 headers 속성 중 하나만 선택하면 됩니다! 둘다 사용하지 않는다!

> 💡 값이 없거나 빈 셀의 경우 `&nbsp;`(공백) 삽입 또는 ‘없음’ 과 같은 텍스트를 삽입한 후 CSS를 사용하여 숨김처리한다면 접근성을 높일 수 있다.


<br>
<br>


# grid

Grid 레이아웃을 만들기 위한 기본적인 HTML은 컨테이너와 아이템만 있으면 된다.

Grid Container(그리드 컨테이너)는 부모요소이고, Grid Item(그리드 아이템)을 자식요소라고한다.

```css
.container {
	display: grid;
}
```

![grid좌표](https://github.com/kkang123/FES7/assets/85389685/4079f954-e1f1-4531-a625-4b499ed087ee)


**fr은 fraction(분수)** 숫자 비율대로 컨테이너 안에 있는 트랙의 크기를 나눈다.

## grid-columns
```css
/* 열방향 그리드 트랙의 사이즈를 설정한다. */
grid-template-columns

/* 그리드 아이템 크기 설정 */
grid-template-columns: 200px 200px 500px;

/* 1:1:1 비율로 3칸 */
/* grid-template-columns: 1fr 1fr 1fr */
/* grid-template-columns: repeat(3, 1fr) */

/* 첫번째칸은 200px 2번째칸은 1비율로 설정 */
/* grid-template-columns: 200px 1fr */
/* grid-template-columns: 200px auto*/ 동일

/* grid-template-columns: 100px 200px auto */


grid-template-columns: repeat(5, 1fr);
/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr */를 의미


/* 수직 좌표값 (2,4) */
grid-column-start: 2;
grid-column-end: 4;

grid-column: 2/4
```


## grid-rows

```css
/* 행방향 그리드 트랙의 사이즈를 설정합니다. */
grid-template-rows


grid-template-rows: 200px 200px 500px;
/* grid-template-rows: 1fr 1fr 1fr */
/* grid-template-rows: repeat(3, 1fr) */
/* grid-template-rows: 200px 1fr */
/* grid-template-rows: 100px 200px auto */



/* (수평 좌표값 2,4) */
grid-row-start: 2;
grid-row-end: 4;


grid-row: 2/4;
```

- grid-area
```css
.container{
        grid-area : 2/4/4/4
        /* row(2,4)colums(4,4) */
}
```

<br>

## 함수

### 1. repeat()
- row 혹은 column 방향으로 grid-track 의 사이즈를 좀 더 간단한 형태로 표현하도록 도와주는 CSS 함수입니다.
- 함수에 전달하는 첫번째 인자는 **반복 횟수(repeat count)**, 두번째 인자는 **반복할 값**입니다.
```css
.container {
    display: grid;
    width: 300px;
    height: 300px;

    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr 1fr;
  }

```
```css

/* grid-template-columns: 1fr 2fr 1fr 2fr; */
grid-template-columns: repeat(2, 1fr 2fr);

```

<br>
<br>

## minmax 함수

최솟값과 최댓값을 지정할 수 있는 함수  
'**minmax(100px, auto)의 의미는 최소한 100px, 최대는 자동으로(auto) 늘어나게**'이다.
즉, 내용의 양이 아무리 적더라도 최소 높이는 100px를 확보하고 내용이 많아 100px를 넘으면 알아서 늘어나게 처리해준다.
```css
.container {
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, minmax(100px, auto));
}
```


<br>
<br>

## auto-fill & auto-fit
- auto-fill과 auto-fit은 column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채운다.
- 만약 repeat 함수를 사용할 때, 반복되는 카운트를 고정하지 않고 컨테이너의 넓이에 따라 가능한 많은 그리드 컬럼을 배치하고 싶다면 사용하는 키워드 값입니다.
- `auto-fill` :  가능한 많은 셀들을 만들어 낼려고 합니다. 빈공간이 생겨요
- `auto-fit` : 그리드 컨테이너 내부에 공간이 남을 경우, 그 공간을 각 셀들이 나눠 갖습니다.


<br>
<br>

## gap

- 셀과 셀사이의 간격을 설정할 때 사용 할 수 있는 속성입니다. 복잡한 레이아웃 안에서 마진 대신 편리하게 간격을 설정할 수 있습니다. grid-gap은 gap으로 사용할 수 있습니다.
- flex에서와 동일한 속성입니다.
```css
.container {
        gap: 10px 20px;

	row-gap: 10px;
	/* row의 간격을 10px로 */
	column-gap: 20px;
	/* column의 간격을 20px로 */


        gap: 20px;
	/* row-gap: 20px; column-gap: 20px; */

        /* 동일 */
        grid-gap: 20px;
	gap: 20px;
}
```

### align-content

- 그리드 콘텐츠의 수직(열) 정렬
- **그리드 콘텐츠의 세로 높이가 그리드 컨테이너보다 작아야합니다**
- **`stretch`**, `center`, `start`, `end`, `space-around`, `space-between`, `space-evenly`

### justify-content

- 그리드 콘텐츠의 수평(행) 정렬
- **그리드 콘텐츠의 가로 너비가 그리드 컨테이너보다 작아야합니다**
- `**stretch**`, `center`, `start`, `end`, `space-around`, `space-between`, `space-evenly`

> 그리드 아이템 그룹들을 정렬  
**place-self: center center;**  
align-content, justify-content의 순서로 작성


### align-items

- 직계 자식에 대한 수직(열) 정렬을 모두 동일하게 줍니다.
- `stretch`, `center`, `start`, `end`

### justify-items

- 직계 자식에 대한 수평(열) 정렬을 모두 동일하게 줍니다.
- `stretch`, `center`, `start`, `end`

> 그리드 아이템에 적용  
**place-items**

# z-indet
레이아웃 순서
<aside>
💡 z-index 속성을 grid 안에서도 사용할 수 있습니다.
grid 안에서는 굳이 position 속성을 사용하지 않더라도 화면에 보여지는 우선순위를 설정할 수 있습니다.

</aside>


<br>
<br>

## grid-area
```css
        .container {
            display: grid;


            grid-template-columns: 2fr 1fr 2fr;
            grid-template-rows: 2fr 1fr 2fr;
            grid-template-areas: 
            "a a b"
            "c d b"
            "e f f";

            width: 520px;
            height: 520px;
            gap: 10px;
        }


.container div:nth-child(1){
            background-color: blue;

            grid-area: a;
        }
        .container div:nth-child(2){
            background-color: yellow;

            grid-area: b;
        }
        .container div:nth-child(3){
            background-color: purple;

            grid-area: c;
        }
        .container div:nth-child(4){
            background-color: orange;

            grid-area: d;
        }
        .container div:nth-child(5){
            background-color: salmon;

            grid-area: e;
        }
        .container div:nth-child(6){
            background-color: green;

            grid-area: f;
        }

/* 좌표찍기 */
.container div {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .container div:nth-child(1) {
    background-color: royalblue;
    grid-area: 1/1/3/4;
    }

    .container div:nth-child(2) {
    background-color: gold;
    grid-area: 1/4/4/6;
    }

    .container div:nth-child(3) {
    background-color: slateblue;
    grid-area: 3/1/4/3;
    }

    .container div:nth-child(4) {
    background-color: orange;
    grid-area: 3/3/4/4;
    }

    .container div:nth-child(5) {
    background-color: salmon;
    grid-area: 4/1/6/3;
    }

    .container div:nth-child(6) {
    background-color: seagreen;

    /* (수직 좌표 ,수평 좌표) 찍는거임(4,3)(6,6) */
    grid-area: 4/3/6/6;
    }


```

## grid-template-areas
```css
.container {
/* 숫자는 안되고 id나 클래스 명칭을 적어주는 개념 */
        grid-template-areas: 
        /* row */
        "header header header"
        "section section aside"
        "footer footer footer" 
        ;
        }


 header{
            background-color: skyblue;
    
            /* 너의 영역은 */
            grid-area: header;
        }
```

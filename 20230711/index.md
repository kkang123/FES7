








# Layout History

## 1. 단순한 텍스트의 나열

- 최초의 웹사이트 http://info.cern.ch/
- 레이아웃 도구가 아예 없던 시절에는 텍스트의 정렬만 가능하였습니다.
- 가독성이 떨어짐.



## 2. 테이블로 레이아웃 구성

- `table` 표 데이터의 본 목적과는 다르게 배치를 위해 테이블을 사용
- 여백을 투명한 gif로 만들어 넣던 시기

레이아웃 용도로 테이블 안에 gif 넣고 그러던 시기

> 😮 **아직도 테이블로 레이아웃 구성을 하는 곳이 있다????**
바로 뉴스레터입니다!

-> 뉴스레터는 테이블로 짜는 이유는 outlog에서 깨지지 않고 브라우저에서 깨지지 않기 때문



## 3. 프레임으로 레이아웃 구성

- 여러 HTML 페이지를 `frame` 을 사용하여 한 페이지에 결합하여 레이아웃을 만들었습니다.

컴포너트를 분할해서 반복되는 프레임을 결합한다.
(반복되는 요소가 생기면서 쪼개고 결합함)

## 4. div div div div div ....

- Box Model, float, position 등을 이용하여 레이아웃을 만들었습니다.
- 여러 브라우저별 표준이 정의되지 않아 여러 기법이 난무했던 시기입니다. (익스플로러….)

(html5가 익스플로어 구버전에 구현이 안되기 때문에 div로 짰다.)

## 5. 시맨틱 마크업, flex, grid

- 다양한 웹 기술의 발전, 검색엔진최적화, 접근성, 다양한 글로벌 웹사이트 제작, 반응형 등의 이유로 생겨난 레이아웃 기법입니다.



> 💡 **시맨틱 마크업 꼭 써야 할까요?**  
    1. SEO(검색엔진 최적화)  
    2. 장애가 있는 사용자에게 페이지를 탐색할 때 하나의 푯말 역할  
    3. 태그의 가독성 및 유지보수 용이  <br><br> 
    익스플로러의 서비스 지원 종료 및 대부분 브라우저가 웹 표준을 따르고 있으므로, 시맨틱 마크업을 필수로 사용하는 것이 좋습니다.  
    하지만, 제공되는 서비스의 환경이 이전 구 브라우저 지원을 해야 하거나, 다른 프로그램 등과의 호환을 고려해야 한다면 시맨틱 마크업을 사용하지 않을 수도 있습니다!




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


# Sections


## header

- 소개 및 탐색에 도움을 줍니다.
- 회사명, 제목, 로고, 검색 폼, 작성자 이름 등의 요소가 포함 될 수 있어요.
- `head` 태그와 혼동하지 마세요!
- `body` 요소에 포함되어 있으며 사용자에게 보여주는 영역
- 헤더를 중첩 사용하거나 헤더 안에 푸터를 사용할 수 없다
- 논리적 마크업 순서를 고려해서 작성(무조건적으로 위쪽이라고 header는 아니다.)

```html
<!-- 잘못된 예 -->
<header>
	<header></header>
</header>

<header>
	<footer>
	</footer>
</header>
```

## nav

- 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여줍니다.
- 현재 페이지의 이동, 메뉴, 목차, 브레드크럼(breadcrumb)으로 사용된다.

    - 메뉴
    ```html
    <nav>
	<ul>
		<li><a href="#">위니브</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
    </nav>
    ```

    - 브레드 크럼
    ```html
    <nav>
	<ol>
		<li><a href="#">위니브</a></li>
		<li><a href="#">캐릭터소개</a></li>
		<li>라이캣</li>
	</ol>
    </nav>
    ```

-  문서의 모든 링크가 `<nav>` 안에 있을 필요는 없어요. 페이지의 주요 탐색 링크를 위한 태그입니다.(상단 메뉴나, 왼쪽 서브메뉴)
- 하나는 사이트 전체 탐색, 다른 하나는 현재 페이지 내 탐색으로 사용하는 등, 하나의 웹페이지에 여러 개의 nav 태그를 가질 수 있습니다.


## footer
- 페이지의 작성자, 저작권정보, 관련 문서, 회사 정보 등의 내용을 담습니다.

## main

- body의 **주요** 콘텐츠를 나타냅니다.
- 웹페이지에서 한 번만 사용할 수 있습니다.
> (id, html등)

- 사이드바, 탐색 링크, 저작권정보, 사이트 로고, 검색 폼 등 여러 페이지에 반복되는 콘텐츠를 포함해서는 안 됩니다.
- 검색 폼이 주요 기능이라면 예외입니다.

# article

- 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다.
    - 사이트의 다른 기능에 영향을 주지 않고 독립적인 기능을 수행합니다.
    - 아티클 영역을 제거해도 페이지는 정상적으로 돌아갑니다.
- 아티클이 대표적으로 사용되는 곳은 뉴스 홈페이지입니다.
    - 다양한 기사들이 한 페이지에 담겨있지만, 이 기사들은 각각 독립적으로 사용됩니다.
    - 시간마다 노출되는 기사가 달라져도 홈페이지는 정상적으로 운영됩니다.
- 게시판, 블로그 글, 매거진, 뉴스 기사, 위젯, 실시간 채팅 창 등
- 제목 요소를 자식으로 포함하여야 합니다!


# section

- 제목 요소를 자식으로 포함하여야 합니다!

> 💡 **article** vs **section**
    일단 article 사용을 우선 고민해보세요.  
    독립적으로 사용한다면 article 사용하시고,  
    웹페이지의 앞뒤 문맥이 연결성이 필요하거나,  
    더 적합한 의미를 가진 요소가 없을 때 section을 사용하세요!  
    단순 스타일링이 목적이라면 div 요소를 사용합니다!

- section은 포괄적으로 영역을 묶는다(section으로 article을 묶어 쓰는 경우도 있음)

# aside

-  `주석 같은 것`
- 문서의 주요 내용과 간접적으로 연관된 부분을 나타냅니다.
- 문서의 주요 흐름을 따라가지 않고, 보조적인 역할만 하는 공간입니다.
- 각주, 광고 배너등에 사용합니다.



<br>
<br>
<br>


## hr
- 이야기에서 장면 전확 혹은 문단 안에서 주제가 변경되었을 때 사용함.
- 단락을구분할 때 사용하므로 `<p>` 태그 내의 사용은 하지 않는다.

<br>
<br>
<br>
<br>



## 스타일링을 위해서만 사용하기!

### div

- division 영역 나눔, 콘텐츠 분할 요소입니다.
- 블록 컨테이너
- 분할이라는 뜻을 가진 division을 축약한 것으로 웹사이트의 레이아웃을 만들 때 사용.
- 영역을 구분 짓거나 무리를 짓는 태그, 상당히 광범위하게 사용.
- 공간을 나누는 것 외에 별다른 기능이 없음. 정리를 도와주는 역할 뿐이지만 HTML에 가장 큰 도움을 주며 많이 사용됩니다. (시맨틱 태그가 많이 사용되긴 하지만) 여전히 많이 사용됩니다!


### span

- 인라인 컨테이너.
- 본질적으로 아무것도 나타내지 않습니다. 스타일을 적용하거나 인라인 요소를 묶을 때 사용합니다.
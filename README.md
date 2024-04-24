<br />

![shimm-logo](https://github.com/FRONTENDSCHOOL9/Shimm/assets/153144213/5542dd3b-c300-4cfb-9e78-e10157827a45)
# 

<br />

<br />
<br />
<h1 align=center> 쉼 - 고단했던 하루에 고요함을 선물해보세요. </h1>
<img width="1502" alt="스크린샷 2024-04-24 오후 3 17 54" src="https://github.com/FRONTENDSCHOOL9/Shimm/assets/153144213/7e571531-bcd6-4bd4-9040-d6426134e331">

---

## 쉼 배포 링크 및 테스트 계정

<a href='/'>Shimm</a>

```
ID: test@shimm.com
PW: aA12345!

```

---

## 서비스 소개

<span>고단했던 하루에 고요함을 선물해보세요.</span><br />
<span>마음을 가다듬고 위해 자기만의 시간에 집중해 보세요.</span>

---

## 쉼 팀원 소개

멋쟁이 사자처럼 프엔9기 2팀 < 2thetop >

---

[제목 없는 데이터베이스](https://www.notion.so/f9434ba437ab43119b0f2dba1e1b1fc3?pvs=21)

---

## 역할 분담

| 정진욱 TEAM LEADER | 민다인  | 정기호 |
| --- | --- | --- |
| 명상 서비스 구현 및 총괄 | 로그인, 소셜로그인, 회원가입 구현 및 디자인 총괄 | 커뮤니티 마이페이지  |

---

## 개발 일정

- 아이템 아이디어 구상 ( 2024.03.29 - 2024.04.01 )
- 프로젝트 기획 ( 2024.04.02 - 2024.04.03 )
- 화면 설계 및 디자인 ( 2024.04.03 - 2024.04.07 )
- 코드 컨벤션 , 스타일 가이드 설정 ( 2024.04.05 - 2024.04.05 )
- 컴포넌트 분리 ( 2024.04.05 - 2024.04.07 )
- 개발 ( 2024.04.08 - 2024.04.19 )
- 코드 보완 및 에러 수정, 프로젝트 발표 준비  ( 2024.04.20 - 2024.04.24 )

<img width="1115" alt="스크린샷 2024-04-24 오후 3 02 29" src="https://github.com/FRONTENDSCHOOL9/Shimm/assets/153144213/085f9ed6-b4cb-4b38-afb9-888380190c57">


---

## 개발 환경 및 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" /><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181817?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-0000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img src="https://img.shields.io/badge/Zustand-F1124?style=for-the-badge&logo=Zustand&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">

| 개발 환경 | React, react-query, Axios, Zustand, styled-components |
| --- | --- |
| 컨벤션 | prettier, eslint |
| 프로젝트 관리 | Github Pull requests |
| 커뮤니케이션 | Notion / Discord |
| 배포 | Netlify |

---
## 요구사항 정의서 
<img width="1212" alt="스크린샷 2024-04-24 오후 2 55 49" src="https://github.com/FRONTENDSCHOOL9/Shimm/assets/153144213/13796afd-c4cf-4343-9554-a999dff43158">
---

## ⌨️  컨벤션

- 코드 컨벤션 보기
    - 코드컨벤션
        
        <aside>
        🚨 **웹 표준, 시맨틱 마크업 준수하기, 웹 접근성 고려하기**
        
        </aside>
        
        1. Naming
            1. 파일명
                1. 컴포넌트 : Component.jsx (파스칼케이스)
                2. 훅, 상태관리(Store) : useCustomHook.mjs
            2. import : `import ReservationCard from '@폴더명/파일명';`
            3. 변수명 : camelCase
            4. prop명 : DOM 컴포넌트에서 사용하는 prop명만 피하기
        2. 폴더구조
            1. 관련 있는 컴포넌트(부모-자식) 별로 폴더를 만들어서 그 안에 jsx파일과 .style.jsx파일 생성
            2. 공통 스타일은 styles 폴더 안에서 관리
        3. 선언
            1. export : (혹시나) 여러 개를 export 해야 할 경우 맨 밑에서 객체 형태로 한 번에
        4. 정렬
            
            ```jsx
            <Foo
              superLongParam="bar"
              anotherSuperLongParam="baz"
            />
            
            <Foo
              superLongParam="bar"
              anotherSuperLongParam="baz"
            >
              <Quux />
            </Foo>
            
            // 조건
            {showButton && (
              <Button />
            )}
            
            {showButton && <Button />}
            
            {someReallyLongConditional
              && anotherLongConditional
              && (
                <Foo
                  superLongParam="bar"
                  anotherSuperLongParam="baz"
                />
              )
            }
            
            {someConditional ? (
              <Foo />
            ) : (
              <Foo
                superLongParam="bar"
                anotherSuperLongParam="baz"
              />
            )}
            ```
            
        5. **작은따옴표**
        6. Spacing
            1. prop은 붙이고 객체는 중괄호 앞/뒤 띄어쓰기
                
                ```jsx
                <Foo bar={baz} />
                <Hello name={{ firstname: 'John', lastname: 'Doe' }} />;
                ```
                
        7. Props
            1. prop이 불린형일 때는 값을 생략하면 default=true
                
                ```jsx
                <Foo hidden />
                ```
                
            2. 이미지의 alt 속성은 반드시 작성
                
                ```jsx
                <img src="hello.jpg" alt="" />
                ```
                
        8. propType 위치
            1. 컴포넌트 아래, export 위
            2. defaultProps
                
                ```jsx
                // bad
                function SFC({ foo, bar, children }) {
                  return <div>{foo}{bar}{children}</div>;
                }
                SFC.propTypes = {
                  foo: PropTypes.number.isRequired,
                  bar: PropTypes.string,
                  children: PropTypes.node,
                };
                
                // good
                function SFC({ foo, bar, children }) {
                  return <div>{foo}{bar}{children}</div>;
                }
                SFC.propTypes = {
                  foo: PropTypes.number.isRequired,
                  bar: PropTypes.string,
                  children: PropTypes.node,
                };
                SFC.defaultProps = {
                  bar: '',
                  children: null,
                };
                ```
                
            3. prop-type 설정
                
                ```jsx
                MyComponent.propTypes = {
                  // 특정 JS 타입임을 선언(해당 속성이 전달되지 않아도 됨)
                  optionalArray: PropTypes.array,
                  optionalBool: PropTypes.bool,
                  optionalFunc: PropTypes.func,
                  optionalNumber: PropTypes.number,
                  optionalObject: PropTypes.object,
                  optionalString: PropTypes.string,
                  optionalSymbol: PropTypes.symbol,
                
                  // 모든 종류의 자식 요소(리액트 엘리먼트, 문자, 숫자, 배열, 불린, null, undefined 등)
                  optionalNode: PropTypes.node,
                
                  // React 엘리먼트
                  optionalElement: PropTypes.element,
                
                  // React 동적으로 로딩된 엘리먼트
                  optionalElementType: PropTypes.elementType,
                
                  // 특정 클래스의 인스턴스
                  // 이 경우 JavaScript의 instanceof 연산자를 사용
                  optionalMessage: PropTypes.instanceOf(Message),
                
                  // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있음
                  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
                
                  // 여러 종류중 하나
                  optionalUnion: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                    PropTypes.instanceOf(Message)
                  ]),
                
                  // 특정 타입의 배열
                  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
                
                  // 특정 타입의 프로퍼티 값들을 갖는 객체
                  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
                
                  // 지정된 타입의 속성을 가지고 있는 객체(다른 속성이 있어도 됨)
                  optionalObjectWithShape: PropTypes.shape({
                    color: PropTypes.string,
                    fontSize: PropTypes.number
                  }),
                
                  // 지정된 타입의 속성만 가지고 있는 객체(다른 속성이 있으면 안됨)
                  optionalObjectWithStrictShape: PropTypes.exact({
                    name: PropTypes.string,
                    quantity: PropTypes.number
                  }),
                
                  // 위에 있는 모든 구문에 'isRequired'를 연결하면 해당 속성이 필수임을 나타냄
                  requiredFunc: PropTypes.func.isRequired,
                
                  // 모든 데이터 타입이 가능한 필수값
                  requiredAny: PropTypes.any.isRequired,
                
                  // 사용자 정의 유효성 검사기를 지정
                  // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
                  customProp: function(props, propName, componentName) {
                    if (!/matchme/.test(props[propName])) {
                      return new Error(
                        `'${componentName}' 컴포넌트의 prop '${propName}' 값 검증 실패.`
                      );
                    }
                  },
                
                  // 'arrayOf' 와 'objectOf'에 사용자 정의 유효성 검사기 지정
                  // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
                  // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출됨
                
                  // propValue: 현재 검사 중인 prop의 값(배열이나 객체)
                  // key: 현재 검사 중인 prop의 키
                  // componentName: 현재 검사 중인 컴포넌트의 이름
                  // location: prop이 전달된 위치 ("props" 또는 "context" 중 하나)
                  // propFullName: prop의 이름
                  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
                    if (!/matchme/.test(propValue[key])) {
                      return new Error(
                        'Invalid prop `' + propFullName + '` supplied to' +
                        ' `' + componentName + '`. Validation failed.'
                      );
                    }
                  })
                };
                ```
                
        9. 함수 사용
            1. 최대한 함수 선언문
            2. 콜백 등 필요한 경우는 화살표 함수 사용
        10. 괄호
            1. 두 줄 이상은 반드시 괄호, 한 줄일 때만 괄호 없이
                
                ```jsx
                // good
                render() {
                  return (
                    <MyComponent variant="long body" foo="bar">
                      <MyChild />
                    </MyComponent>
                  );
                }
                
                // good, when single line
                render() {
                  const body = <div>hello</div>;
                  return <MyComponent>{body}</MyComponent>;
                }
                ```
                
        11. 태그
            1. 안에 children 없으면 self-closing tag
        12. 메서드
            1. 괄호 열고 엔터 쳤으면 엔터 후 하나 앞에 tab에서 닫아주기
                
                ```jsx
                {props.items.map((item, index) => (
                  <Item
                    key={item.key}
                    onClick={(event) => { doSomethingWith(event, item.name, index); }}
                  />
                ))}
                ```
                
        13. 훅
            1. 훅을 맨 위에
            2. 그 밑에 변수
            3. useEffect 같은 경우는 상황에 맞게
    
    - 자바스크립트 코드 컨벤션
        - 무조건 const, 바꿀 경우가 있으면 let
- 커밋 컨벤션 보기
    
    ```jsx
    **새로운 기능 추가할 때 - ✨ feat: XXXX 기능 추가
    기능 수정 중 - 🚧 cont: XXXX 기능 수정 중
    기능 수정 완료 - ✅ update: XXXX 기능 수정 완료
    버그 수정 - 🐛 fix: XXXX 버그 수정
    디자인 수정 - 💄 style: XXXX 디자인 수정
    리팩토링 - ♻️ refactor: 코드 리팩토링
    문서 수정 - 📝 docs: README.md 파일 수정
    성능 향상 - ⚡️ performance: 성능 향상
    테스트 성공/업데이트 - ✅ passtest: 테스트 성공/업데이트
    테스트 실패 - 🧪 failtest: 테스트 실패
    asset 업데이트 - 🍱 asset: asset 폴더 업데이트
    오타 수정 - ✏️ typos: 오타 수정
    merge - 🔀 merge: from XXXX to XXXX
    배포 - 🚀 deploy: XXXX 업데이트 후 배포**
    ```
    

---

## 🧸 플로우 차트

![shimm-flowchart.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08a14ef7-598b-4904-8533-b435864de081/bbc62e6a-ebf8-4b0a-9606-efbe5a735dc2/shimm-flowchart.png)

---

## 🔆 주요 기능 소개

홈 (캐러셀)

회원가입 ( 2스텝 ) 

소셜 로그인 ( 카카오 로그인 기능 )

명상 서비스 ( 명상 테마와 시간 선택 기능, 유료테마 구매 기능, 명상 종료시 한줄 기록 캘린더에 저장 )

피드 ( 인피니티 스크롤, 게시글 북마크 기능 )

피드 ( 글쓰기, 수정, 삭제 기능 )

마이페이지 ( 나의 정보 확인, 수정 기능 )

마이페이지 ( 나의 기록에서 달력으로 명상 한줄평 확인, 나의 활동에서 작성한글, 북마크한 글 확인 )

---

## ✅ 상세 담당 업무

## 진욱

## 다인

## 기호

---

## ⭐️ 핵심 코드

- 코드기능
    
    코드설명
    
- 코드기능2
    
    코드설명
    
- 코드기능3
    
    코드설명
    
- 코드기능4
    
    코드설명
    
- 코드기능5
    
    코드설명
    
- 
- 

---

## 👏 프로젝트를 마치며

…즐거운 경험이였다

---



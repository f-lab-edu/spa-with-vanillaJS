# Vanilla Javascript를 활용한 SPA 구현

## 프로젝트 정보

### 프로젝트 소개

- HTML, CSS, JS
- Webpack
- Jest
- NPM

Vanilla Javascript를 활용하여 SPA와 같이 새로고침 없이 화면이 전환되고 기존의 컴포넌트를 재사용 가능한 웹을 개발하는 것을 목적으로 제작되었습니다. 추후 TypeScript 마이그레이션 등 다양하게 응용될 예정입니다.

### 개발 과정

[1일차. Vanilla Javascript로 SPA 구현하기](https://lofty-tang-eba.notion.site/Vanilla-Javascript-SPA-1-e3ad3cd22dab4650b084f29c39c3e74b?pvs=4)

[2일차. Vanilla Javascript로 SPA 구현하기](https://www.notion.so/Vanilla-Javascript-SPA-2-ee62a8984c3b4279b467d6ea73cbd794?pvs=4)

### 파일 구성

```
src
├── App.js
├── assets
│   ├── images
│   └── style
│       ├── components
│       │   ├── Card.css
│       │   ├── Footer.css
│       │   └── Header.css
│       └── pages
│           ├── Home.css
│           └── Post.css
├── components
│   ├── Card.js
│   ├── Footer.js
│   ├── Header.js
│   ├── JestSet.js
│   └── JestSet.test.js
├── index.css
├── index.html
├── index.js
└── pages
    ├── Home.js
    └── Post.js

```

## 프로젝트 실행 방법

`npm i` : node-modules 설치

`npm run test` : 테스트 케이스 실행

`npm run start` : 프로젝트 실행 (9000 port)

## 구현 기능 정리

**1일차**

- 새로고침 없이 route에 따른 component 랜더링
- javascript에서의 html render
- 컴포넌트 재사용

**2일차**

- 기존의 hash 라우팅 -> history API로 변경
- 동적으로 라우팅할 수 있도록 하기
- 동적으로 생성되는 라우터에 대하여 해당 id 값을 기반으로 하는 post 컴포넌트와 home 컴포넌트 전환
- 기존의 css 대신 module.css 교체
- 스타일 id -> class 교체
- 일부 id 이벤트 교체

**3일차**

- 새로고침 시 404 에러 발생 문제 해결
- $app 매개변수 이름 $element로 수정
- queryString 사용한 기능 추가 -> 라우터 개선
- Jest 테스트 케이스 추가
- 404 에러 페에지 추가
- setEvent 외 랜더링용 함수 추가

## 참고 자료

[클론 코딩 웹사이트](https://toss.tech/)

[바닐라 자바스크립트로 html 랜더링하기](https://velog.io/@bepyan/Vanilla-JS%EB%A5%BC-React-%EA%B0%99%EC%9D%B4-%EC%BD%94%EB%94%A9%ED%95%98%EA%B8%B0)

[바닐라 자바스크립트로 라우터 구현하기 참고](https://kdydesign.github.io/2020/10/06/spa-route-tutorial/)

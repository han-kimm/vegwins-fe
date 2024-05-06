# vegwins, 우리가 사는 세상을 지키는 작은 실천
편의점과 마트 등 일상의 공간에 있는 비건, 제로웨이스트, 저탄소, 친환경 제품들을 소개합니다.

## 웹 사이트가 도움을 받은 기술들

### 언어
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

### 프론트엔드
<div> 
  <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=PWA&logoColor=white">
</div>

### 백엔드
<div>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
</div>

### 디자인
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## 개발 중 생겼던 문제
### 서드파티쿠키 차단
- 24년 하반기까지 모든 서드 파티 쿠키 지원이 차단될 예정
- 도메인이 다른 API 서버에서 `res.cookie()` 불가
- [x] Next.js의 `Cookie()` 함수를 이용하여 클라이언트에서 쿠키를 지정
- 구글 로그인 지원 방식 변경
- [x] GIS 패키지를 <script> 태그에서 필요할 때 다운로드
- [x] FedCM을 지원하는 One Tap 방식 로그인 구현 

### Next14 + fetch
- Axios, React-Query 없이 Next14의 기능을 끝까지 활용해보고자 함.
- [x] SSR 시, jwt 토큰 전송 및 갱신 로직 구현
- [x] fetch 함수의 `cache`, `tags` 기능을 이용하여 캐시를 특정
- [x] `revalidatePath`, `revalidateTag` 함수를 이용해 사용자가 데이터를 변경한 경우, 데이터 갱신

### 크로스 브라우징 + 모바일 문제
- 안드로이드 스마트폰에서 엔터키 대신 이동키가 쓰임
- [x] `<input type="search"/>` 로 이동이 일어나지 않고 엔터키가 작동하도록 함
- 삼성 브라우저 및 카카오 인앱 브라우저에서 구글 One Tap 로그인 불가
- [x] 리다이렉트 방식 구글 로그인 추가
- 스마트폰에서 촬영한 이미지가 업로드 안됨
- [x] formData의 용량 한계가 원인. 클라이언트에서 이미지 압축 후 서버에서 AWS S3에 저장

### Modal, BottomSheet 등에서 불필요한 데이터 페칭
- 사용자 동작으로 열리지 않았음에도 SSR로 API 요청
- [x] Next의 Parallel Routing, Intercept Routing 을 이용해서 URL path를 변경하고, 해당 경로 진입 시에만 API 요청

### AWS 로드밸런서 과금 문제
- https 적용을 위해 사용하는 로드밸런서에서 ipv4 주소 이용료가 발생(월 14.4달러)
- [x] nginx를 이용해서 EC2 인스턴스 내에서 https 적용

## .gif로 보는 웹 사이트
### 홈화면
![home](https://github.com/han-kimm/vegwins-fe/assets/78120157/6d9f90fe-cb02-42eb-88e6-d07e34a4000c)


### 소셜 로그인
|리다이렉트 방식(카카오인앱브라우저 지원)|구글 원탭 로그인 (애플)|구글 원탭 로그인 (안드로이드)|
|---|---|---|
|![redirect](https://github.com/han-kimm/vegwins-fe/assets/78120157/8a21c465-e0ef-473b-aecd-73c6e82088aa)|![onetap-apple](https://github.com/han-kimm/vegwins-fe/assets/78120157/4410bb1a-8472-4f98-961e-a53ecf004ec8)|![onetab-android](https://github.com/han-kimm/vegwins-fe/assets/78120157/248f037f-431e-4765-9d94-70767619a024)|

### 

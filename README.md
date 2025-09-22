# Anstargram

안스타그램 클론 앱으로 Expo를 활용한 소셜 미디어 애플리케이션입니다.

## 화면
|HOME(Feed)|MyPage|ADD FEED|FEED LIST|
|-|-|-|-|
|<img src="./screenshot/home_empty_1.png" width="100%" />|<img src="./screenshot/my_page_empty_1.png" width="100%" />|<img src="./screenshot/add_feed_input_1.png" width="100%" />|<img src="./screenshot/feed_list_no_empty_1.png" width="100%" />|

## 주요 기술 스택

### 프레임워크 & 라이브러리
- **Expo** - React Native 개발 플랫폼
- **React Native New Architecture** - 새로운 아키텍처 활성화
- **React Navigation** - 네비게이션 라이브러리
 
### 상태 관리
- **Redux** - 전역 상태 관리
- **Redux Toolkit** - Redux 개발 도구
- **Redux Thunk** - 비동기 액션 처리
- **Redux Logger** - 상태 변화 로깅
- **React Redux** - React와 Redux 연결

### UI/UX
- **Expo Image** - 이미지 처리
- **Expo Image Picker** - 이미지 선택
- **React Native Safe Area Context** - 안전 영역 처리

### 백엔드(serverless) - 시도 했으나 버전 호환성 문제로 미사용( or NR 호환 문제)
- Firebase 연동 시도
  - app, auth, db
- Google Sign-In 시도
- 문제를 해결에 1md 이상 지속되어 포기 함

## 주요 기능

### 홈 화면
- 피드 목록 조회
- 좋아요, 좋아요 취소 기능

### 피드 작성
- 이미지 선택 ~~및 업로드~~
- 텍스트 입력
- 피드 저장

### 피드 목록
- 개인 피드
- 좋아요/좋아요 취소 기능

### 마이페이지
- 사용자 정보 표시
- 내가 작성한 피드 그리드 뷰(3열)
- 피드 목록으로 이동

## 프로젝트 구조

```
app/
├── _layout.tsx                 # 루트 레이아웃
├── src/
│   ├── @types/                 # TypeScript 타입 정의
│   │   ├── FeedInfo.ts
│   │   └── UserInfo.ts
│   ├── actions/                # Redux 액션
│   │   ├── feed.ts
│   │   └── user.ts
│   ├── components/              # 재사용 가능한 컴포넌트
│   │   └── FeedListItem.tsx
│   ├── data/                   # 상수 데이터
│   │   └── constants.ts
│   ├── designsystem/           # 디자인 시스템
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Divider.tsx
│   │   ├── DoubleTabButton.tsx
│   │   ├── Header.tsx
│   │   ├── Icons.tsx
│   │   ├── LocalImage.tsx
│   │   ├── MultiLineInput.tsx
│   │   ├── RemoteImage.tsx
│   │   ├── Spacer.tsx
│   │   ├── TabIcon.tsx
│   │   └── Typography.tsx
│   ├── hooks/                  # 커스텀 훅
│   │   ├── useAddFeed.ts
│   │   ├── useBottomTabNavigation.ts
│   │   ├── useFeedList.ts
│   │   ├── useFeedListItem.ts
│   │   ├── useHome.ts
│   │   └── useMyPage.tsx
│   ├── navigations/            # 네비게이션 설정
│   │   ├── BottomTabNavigation.tsx
│   │   └── RootStackNavigation.tsx
│   ├── reducers/               # Redux 리듀서
│   │   ├── feedList.ts
│   │   └── userInfo.ts
│   ├── screens/                # 화면 컴포넌트
│   │   ├── AddFeedScreen.tsx
│   │   ├── FeedListScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   └── MyPageScreen.tsx
│   ├── selectors/              # Redux 셀렉터
│   │   ├── feed.ts
│   │   └── user.ts
│   ├── splash/                 # 스플래시 화면
│   │   └── SplashView.tsx
│   ├── store.ts                # Redux 스토어 설정
│   ├── RootApp.tsx             # 루트 앱 컴포넌트
│   └── utils/                  # 유틸리티 함수
│       └── sleep.ts
└── app.json                    # Expo 설정
```

## 개발 경험

### 학습한 기술들
- Expo를 활용한 크로스 플랫폼 개발
- Redux를 통한 복잡한 상태 관리
- 커스텀 훅을 통한 로직 분리
- Spacer 컴포넌트 활용
  - 간격 관리를 위한 Spacer 컴포넌트 사용 (margin/padding 대신). 
  - SwiftUI의 Spacer, Android Compose의 Spacer와 유사한 개념으로, 
  - 스타일 속성에서 간격을 찾아야 하는 번거로움 대신 한 눈에 간격을 파악할 수 있는 장점이 있음 
  - 렌더링 성능에 큰 영향을 주지 않는 범위에서 개발 편의성을 고려한 선택


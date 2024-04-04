# 유진영튜터님 세션 240404

#### 전역상태관리를 왜 하는가?

- react component 단위로 상태를 정의할 수 있다
- component 들 간의 상태 공유는 단방향으로만 가능하다 (부모 -> 자식)

#### Props-drilling?

- 부모에 상태를 만들고 내려준다
- 하지만 너무 불편해! -> Redux by Dan Abramov using FLUX pattern

#### Context API

- React 내부에서 리덕스같은게 필요하다!

#### Server-side State Management

클라이언트사이드에서 서버 상태를 관리하기 용이하게 하기 위해

- Redux thunk
- React-query

## Redux?

- 리덕스는 의도적으로 복잡하게 만들어져있는 라이브러리
- why? 데이터의 흐름을 명확하게 하고, 데이터의 변경을 추적 가능하게 만듦으로써, 디버깅을 용이하게 하기 위함.
- 때문에, 리덕스에는 많은 개념과 규칙이 존재

### Redux abstract

- 전역 상태를 저장하는 저장소 : store
- 전역 상태에 저장되어 있는 상태 : state
- state에 대해서 대개 네 가지 작업을 할 수 있다 : CRUD
- R은 쉽다! useSelector 쓰면 끝!
- CUD를 통한 데이터 조작은 구현이 까다롭다. 알아야 할 개념, 규칙이 많기 때문.
- `공장` 을 예시로 들어 설명해보자!

#### 공장?

- Redux에는 store의 state를 변경해주는 공장이 있다.
- 그런데 이 공장은 작업지시서가 있어야만 작업을 해주기 때문에 까다롭다!
- 작업지시서는 필수 정보와 옵셔널 정보가 하나씩 있다.
- 그렇다면 그 작업지시서는 누가 언제 어떻게 작성하는거지?
- 작업지시서는 상태를 변경하고자 하는 컴포넌트에서 작성한다.
- 그리고 공장에 작업지시서를 전달하는 우체부가 있다.
- 우체부에게 작업지시서를 넘겨주면 공장이 작업지시서를 받아서 작업이 시작된다.
- 작업 지시서 생성기

#### Redux 개념으로 변환!

- 공장 : **reducer**
- 작업지시서 : action 액션의 자료형은? Object
  - (Required) 작업 종류 : action.type (string)
  - (Optional) 작업 진행에 필요한 정보: action.payload
- 우체부 또는 전달 행위 : dispatch (function)
- 작업지시서 생성기 : action creator (function)

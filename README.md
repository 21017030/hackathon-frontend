# Study Killer (구 VibeLRS) - 프론트엔드

Next.js + React 기반의 **Study Killer** 웹 프론트엔드 프로젝트입니다.  
학습용 PDF 문서를 업로드하여 AI 분석을 수행하고, RAG 기반의 AI 채팅 및 문서 전용 미니 챗 기능을 제공합니다.

---

## 🛠 기술 스택

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios

---

## 📦 주요 의존성 패키지 (Dependencies)

프로젝트의 기능 구현을 위해 사용된 주요 패키지와 그 역할은 다음과 같습니다:

| 패키지명 | 버전 | 역할 및 설명 |
| :--- | :--- | :--- |
| **`axios`** | `^1.16.0` | 백엔드 API 서버와의 비동기 HTTP 요청 및 통신을 담당 |
| **`react-dropzone`** | `^15.0.0` | 파일 업로드 모달 내 파일 드래그 앤 드롭(Drag & Drop) 및 파일 유효성 검사 영역 구현 |
| **`lucide-react`** | `^1.14.0` | 사이드바 메뉴, 휴지통, 탭 닫기, 파일 업로드 등 UI 전반에 필요한 벡터 아이콘 컴포넌트 제공 |
| **`react-markdown`** | `^10.1.0` | AI 모델이 반환하는 마크다운 형식의 답변을 안전하게 HTML로 파싱하여 렌더링 |
| **`remark-math`** | `^6.0.0` | 마크다운 내의 LaTeX 수학 공식 기호(`$...$`)를 인식하기 위한 구문 파싱 라이브러리 |
| **`rehype-katex`** | `^7.0.1` | 파싱된 LaTeX 구문을 수학 수식 스타일로 렌더링하기 위해 KaTeX와 연동해 주는 플러그인 |
| **`katex`** | `^0.16.45` | 웹 브라우저에서 복잡한 수학 기호 및 수식을 정밀하게 그려주는 핵심 수학 렌더러 |
| **`@tailwindcss/typography`** | `^0.5.19` | `react-markdown`이 렌더링하는 영역에 깔끔한 웹소설/논문 스타일의 여백 및 텍스트 폰트 스타일을 적용하는 플러그인 |

---

## 📂 폴더 구조 및 역할

`frontend/src/` 디렉토리 하위의 핵심 구조는 다음과 같습니다:

- **`app/`**
  - Next.js App Router 진입점 및 페이지 컴포넌트
  - `layout.tsx` (공통 레이아웃), `page.tsx` (메인 화면)
  - `register/` (회원가입), `mypage/` (마이페이지 & 비밀번호 수정)
- **`components/`**
  - **`BfcacheGuard.tsx`**: 뒤로가기/앞으로가기 시 발생할 수 있는 라우터 충돌 및 화면 동결 방지
  - **`AuthScreen.tsx`**: 로그인 모달 화면
  - **`Sidebar.tsx`**: 최근 채팅 목록 및 카테고리 관리 사이드바
  - **`ExplorerView.tsx`**: 폴더(카테고리) 및 문서 목록 뷰
  - **`ChatView.tsx`**: AI 세션 채팅 메인 화면
  - **`DocumentViewerPane.tsx`**: PDF 문서 뷰어 및 문서 기반 미니 챗 패널
  - **`UploadModal.tsx`**: 폴더 선택 기능이 포함된 PDF 업로드 다이얼로그
- **`hooks/`**
  - **`useAuth.ts`**: localStorage 기반의 유저 로그인 상태 관리
  - **`useRequireAuth.ts`**: 인증이 필요한 페이지 접근 제어 가드 훅
  - **`useAppData.ts`**: 카테고리·문서·세션 데이터 페칭 및 실시간 분석(PENDING) 폴링 관리
  - **`useChat.ts`**: 세션 채팅 메시지 상태 및 송수신 로직 관리
  - **`useDocumentTabs.ts`**: 뷰어에서 여러 문서를 멀티 탭으로 관리하는 상태 제어
- **`api/`**
  - 백엔드 API와의 통신을 전담하는 데이터 레이어 (`auth`, `categories`, `documents`, `chat` 등)
- **`constants.ts` / `types/`**
  - 앱 전체에서 사용하는 공통 상수 및 TypeScript 공통 타입 정의

---

## ⚙️ 실행 방법

개발 환경에서 프로젝트를 실행하기 위해 아래 명령어를 차례로 실행합니다:

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 개발 서버 구동
npm run dev
```

- 구동 후 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속할 수 있습니다.
- 백엔드 API 주소는 환경 변수 `NEXT_PUBLIC_API_URL`으로 변경 가능하며, 기본값은 `http://localhost:8000`입니다.

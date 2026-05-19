# 한양과일 사이트 배포 가이드

이 사이트를 깃허브에 올리고, Vercel(무료 호스팅)에 배포해서 인터넷에 공개하는 단계별 안내입니다.

> **전체 소요 시간**: 30분 ~ 1시간 (처음 한 번만)
> **이후 수정/배포**: 깃허브에서 파일 수정 → 자동 배포 (1~2분)

---

## 전체 흐름

```
[1] Git 설치 → [2] 깃허브 가입 → [3] 깃허브 저장소 만들기
         ↓
[4] 로컬 컴퓨터 → 깃허브에 첫 업로드
         ↓
[5] Vercel 가입 → [6] 깃허브 연결 → [7] 자동 배포
         ↓
[8] 도메인 연결 (선택)
```

---

## 1. Git 설치 (한 번만)

Git은 코드를 깃허브에 올리고 받는 도구입니다.

1. [https://git-scm.com/download/win](https://git-scm.com/download/win) 접속
2. 자동으로 다운로드 시작됨 → 다운로드 완료되면 실행
3. 설치 옵션은 전부 **기본값(Next)** 으로 두고 마지막까지 클릭
4. 설치 끝

설치 확인: PowerShell 열고 `git --version` 입력 → `git version 2.xx.x` 같은 게 나오면 성공.

---

## 2. 깃허브 가입

이미 계정 있으면 건너뛰세요.

1. [https://github.com](https://github.com) 접속
2. 우측 상단 **Sign up** 클릭
3. 이메일 / 비밀번호 / 사용자명 입력
4. 이메일 인증 완료

> 사용자명은 사이트 주소에 사용될 수 있어요 (예: github.com/hanyangfruit).

---

## 3. 깃허브에 새 저장소 만들기

1. 깃허브 로그인 후 우측 상단 `+` → **New repository** 클릭
2. 다음과 같이 설정:
   - **Repository name**: `hanyangfruit-landing` (또는 원하는 이름)
   - **Description**: `한양과일 공식 랜딩 페이지` (선택)
   - **Public / Private**: **Private** 추천 (코드 비공개)
   - **README, .gitignore, license** 추가 옵션은 **모두 체크 해제** (이미 있음)
3. **Create repository** 클릭
4. 다음 화면에 나오는 저장소 주소 (예: `https://github.com/사장님계정명/hanyangfruit-landing.git`) 를 메모해 두세요.

---

## 4. 로컬 컴퓨터 → 깃허브에 첫 업로드

PowerShell을 열고 사이트 폴더로 이동합니다.

```powershell
cd "C:\Users\한양과일\Desktop\landing-page"
```

다음 명령어를 한 줄씩 입력합니다.

```powershell
# 1) Git 초기 설정 (처음 한 번만)
git config --global user.name "사장님 이름"
git config --global user.email "사장님@이메일.com"

# 2) Git 저장소 초기화
git init
git branch -M main

# 3) 모든 파일 추가
git add .

# 4) 첫 커밋
git commit -m "초기 사이트 업로드"

# 5) 깃허브 저장소 연결 (3단계에서 복사한 주소 사용)
git remote add origin https://github.com/사장님계정명/hanyangfruit-landing.git

# 6) 푸시 (업로드)
git push -u origin main
```

> 처음 푸시할 때 브라우저가 열리며 깃허브 로그인을 요구할 수 있습니다. 로그인하면 자동으로 연결됩니다.

성공하면 깃허브 저장소 화면에 모든 파일이 보입니다.

---

## 5. Vercel 가입 및 배포 (Next.js 무료 호스팅)

Vercel은 Next.js 만든 회사가 운영하는 호스팅 서비스입니다. 깃허브에 푸시할 때마다 사이트가 자동으로 새로 만들어집니다. **개인 / 소규모 비즈니스는 무료**입니다.

### 5-1. 가입

1. [https://vercel.com](https://vercel.com) 접속
2. **Sign up** → **Continue with GitHub** 클릭
3. 깃허브 계정으로 로그인하고 권한 허용

### 5-2. 사이트 가져오기

1. Vercel 대시보드에서 **Add New → Project** 클릭
2. 깃허브 저장소 목록에서 `hanyangfruit-landing` 옆에 **Import** 클릭
3. 모든 설정은 **기본값 그대로** 두고 **Deploy** 클릭
4. 1~2분 기다리면 빌드 완료
5. **Visit** 버튼을 누르면 사이트가 인터넷에 공개된 상태로 열립니다!

이 시점에서 임시 주소 (예: `hanyangfruit-landing-xxxx.vercel.app`) 가 발급됩니다. 이걸로도 정상 운영이 가능합니다.

---

## 6. 도메인 연결 (선택)

`hanyangfruit.com` 같이 직접 산 도메인을 연결하고 싶을 때만 진행합니다.

### 6-1. 도메인 없으면

- 한국 도메인 등록처: 카페24, 가비아, 후이즈 등 (연 1~3만원)
- `.com` 추천 (가장 익숙함)

### 6-2. 도메인 연결

1. Vercel 프로젝트 페이지에서 **Settings → Domains** 클릭
2. 산 도메인 (예: `hanyangfruit.com`) 입력 후 **Add**
3. 화면에 나오는 DNS 설정 값 (A 레코드 / CNAME)을 도메인 등록처(카페24 등) 관리 페이지에서 입력
4. 5분 ~ 1시간 후 도메인으로 접속 가능

> 도메인 등록처마다 입력 방법이 살짝 달라서, 헷갈리시면 등록처 고객센터에 문의하시거나 저(AI)에게 도메인 등록처 이름 알려주시면 안내해 드립니다.

---

## 7. 이후 운영 (수정 → 자동 배포)

처음 한 번 1~6번을 마치면, 이후 모든 수정은 **깃허브 웹사이트에서** 하시면 됩니다.

1. 깃허브에서 파일 수정 (상품 추가 / 사진 업로드 등)
2. **Commit changes** 클릭
3. Vercel이 자동 감지 → 1~2분 후 사이트에 반영

자세한 수정 방법은 [CONTENT-GUIDE.md](CONTENT-GUIDE.md) 참고하세요.

---

## 8. 자주 묻는 질문

### Q. 깃허브가 비공개(Private)인데도 Vercel에서 보이나요?
A. 네, Vercel과 깃허브를 연결할 때 권한을 부여해서 비공개 저장소도 가져올 수 있습니다.

### Q. 비용은 정말 무료인가요?
A. 네. 사장님 정도의 트래픽이라면 평생 무료 플랜으로 충분합니다.
- Vercel 무료 플랜 한계: 월 100GB 대역폭, 100GB 빌드 시간, 무제한 빌드 횟수
- 한양과일 같은 소규모 비즈니스는 보통 1~5GB 정도 사용

### Q. 도메인 없이도 운영 가능한가요?
A. 네. Vercel이 무료로 주는 `xxxxx.vercel.app` 주소로도 영구 운영 가능합니다.
나중에 도메인 사면 그때 연결하시면 됩니다.

### Q. 사이트가 다운되면 어떻게 해요?
A. Vercel은 99.99% 가용성을 보장합니다. 만약 사장님의 수정으로 빌드가 실패해도, 이전 버전이 계속 보이고 있으니 사이트는 다운되지 않습니다.

### Q. 사이트 통계(방문자 수 등) 보고 싶어요.
A. Vercel 대시보드에서 기본 통계 제공. 더 자세한 건 Google Analytics 연결도 가능 (나중에 요청해 주세요).

---

## 9. 문제가 생기면

1. 어디서 막혔는지 (몇 단계, 어떤 화면) 스크린샷 찍어 주세요
2. 어떤 에러 메시지가 떴는지 알려주세요
3. AI(저)에게 물어보시면 단계별로 도와드리겠습니다

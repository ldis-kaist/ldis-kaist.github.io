# DAIS Lab Website

DAIS (Data & AI Systems Lab, KAIST) 연구실 홈페이지 소스입니다. 순수 HTML/CSS/JS 정적 사이트라 빌드 과정이 없고, `index.html`을 브라우저로 열면 그대로 완성된 페이지입니다.

## 폴더 구조

```
index.html              메인 페이지 (내용은 index.html 안의 PROJECTS / COURSES / PAPERS 배열에서 직접 수정)
themes/                 테마 CSS 7종 — 현재는 theme-swiss.css 적용 중
files/cs50600-syllabus.pdf   Teaching 섹션에서 링크하는 강의계획서
```

테마를 바꾸려면 `index.html` 상단의 이 줄만 고치면 됩니다:

```html
<link rel="stylesheet" href="themes/theme-swiss.css">
```

여러 테마를 클릭으로 비교해보고 싶으면 예전에 만든 `dais_theme_preview.html`을 로컬에서 열어 미리보기용으로 쓰세요 (그 파일은 데모 전용이라 배포 안 해도 됩니다).

## 1. 실시간으로 보면서 수정하기 (로컬)

**VS Code + Live Server 확장 추천** — 저장할 때마다 브라우저가 자동으로 새로고침됩니다.

1. [VS Code](https://code.visualstudio.com/) 설치
2. 이 폴더를 VS Code로 열기 (`code .` 또는 File → Open Folder)
3. 확장 탭에서 **"Live Server"**(Ritwick Dey 제작) 설치
4. `index.html`을 마우스 우클릭 → **"Open with Live Server"**
5. 브라우저가 열리고, 이후 파일을 저장할 때마다 자동으로 반영됩니다. 어떤 파일이 실제로 연결돼서 로드되는지는 브라우저 개발자 도구(F12) → Network 탭에서 바로 확인 가능하고, 경로가 잘못되면 404로 바로 눈에 띕니다 — 예전 syllabus 에디터처럼 "어디에 저장됐는지 알 수 없는" 상황 자체가 생기지 않습니다.

GitHub Codespaces를 쓰고 싶다면(브라우저만으로, 로컬 설치 없이): 저장소를 만든 뒤 초록색 **Code → Codespaces → Create codespace** 버튼으로 열고, 터미널에 `python3 -m http.server 8080` 실행 → 우측 하단 포트 알림에서 브라우저로 열기. 파일 저장 → 새로고침만 하면 됩니다.

## 2. GitHub에 올리고 GitHub Pages로 배포하기

터미널에서 이 폴더 기준으로:

```bash
git init
git add .
git commit -m "Initial commit: DAIS lab site"
```

GitHub에서 새 저장소 생성: https://github.com/new
- 저장소 이름 예시: `dais-lab` (URL은 `https://<계정>.github.io/dais-lab/` 형태가 됨)
- 계정 자체의 메인 페이지로 쓰고 싶으면 저장소 이름을 `<계정>.github.io`로 만들면 루트 도메인으로 바로 나옵니다.
- Public으로 생성 (GitHub Pages 무료 사용 조건)

로컬에서 연결 후 푸시:

```bash
git remote add origin https://github.com/<계정>/<저장소명>.git
git branch -M main
git push -u origin main
```

GitHub Pages 켜기: 저장소 → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **(root)** → Save. 1분 정도 뒤 안내된 주소로 접속하면 바로 사이트가 보입니다.

## 3. 이후 수정 흐름

1. VS Code(Live Server)로 로컬에서 수정하면서 실시간으로 확인
2. 맘에 들면 `git add . && git commit -m "설명" && git push`
3. GitHub Pages가 1분 내로 자동 재배포

`git log`, `git diff`로 언제 무엇이 바뀌었는지, 어떤 파일이 실제로 커밋에 포함됐는지 항상 정확히 확인할 수 있습니다.

## 아직 채워야 할 자리

`index.html`의 `PROJECTS`, `COURSES` 배열에 `Placeholder:`로 표시된 항목들, `PAPERS`(Publications)는 아직 예시/자리채움 상태입니다.

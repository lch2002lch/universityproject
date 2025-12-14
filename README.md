# Markdown Live Editor 프로젝트 README

이 프로젝트는 HTML, CSS, 그리고 순수 JavaScript(Vanilla JS)를 사용하여 개발된 실시간 Markdown 미리보기 웹 에디터입니다. 사용자가 왼쪽 입력창에 Markdown 형식의 텍스트를 입력하면, 오른쪽 미리보기 창에 즉시 HTML로 변환된 결과를 보여줍니다.

이 프로젝트는 기본적인 프론트엔드 개발 기술(DOM 조작, 이벤트 처리) 및 외부 라이브러리(`marked.js`)의 통합 방법을 학습하는 데 중점을 둡니다.

---

## 주요 기능

* **실시간 미리보기:** Markdown 문법이 입력되는 즉시 HTML로 변환되어 오른쪽에 표시됩니다.
* **작성 내용 자동 저장:** 브라우저의 로컬 스토리지(`localStorage`) 기능을 사용하여 작성 중이던 내용이 자동으로 저장 및 복원됩니다.
* **반응형 레이아웃:** 화면 크기 변화에 맞춰 에디터와 미리보기 창의 배치가 자동으로 조정됩니다.
* **이미지 삽입 지원:** 표준 Markdown 이미지 문법을 사용하여 프로젝트 내 로컬 이미지를 출력할 수 있습니다.

## 사용 기술

| 구분 | 기술 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 | 구조 및 스타일링 |
| **Logic** | Vanilla JavaScript | 핵심 이벤트 처리 및 로직 |
| **Library** | [Marked.js](https://marked.js.org/) | Markdown을 HTML로 변환 |
| **Storage** | Web Storage (`localStorage`) | 사용자 데이터 임시 저장 |

## 로컬에서 실행하는 방법

1.  **저장소 클론:** Git을 사용하여 이 저장소를 로컬 컴퓨터로 복사합니다.
    ```bash
    git clone [https://github.com/](https://github.com/)[자신의 깃허브 아이디]/markdown-live-editor.git
    ```
2.  **폴더 이동:** 프로젝트 폴더로 이동합니다.
3.  **실행:** `index.html` 파일을 웹 브라우저로 직접 열거나, VS Code의 Live Server와 같은 웹 서버 환경에서 실행합니다.

## 이미지 삽입 방법

프로젝트 폴더에 포함된 이미지를 에디터에 출력하려면 **상대 경로**를 사용해야 합니다.

1.  사용할 이미지 파일을 `TRphoto` 폴더 안에 위치시킵니다.
2.  에디터 창에 다음 Markdown 문법을 입력합니다.

    ```markdown
    ![이미지에 대한 설명](./TRphoto/파일명.확장자)
    ```

    **예시:** `![산맥 사진](./TRphoto/landscape.jpg)`

---

## 기여

이 프로젝트의 개선을 위한 피드백이나 코드 기여(Pull Request)는 언제나 환영합니다.

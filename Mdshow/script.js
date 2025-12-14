document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');

    // 1. 실시간 변환 함수
    function updatePreview() {
        const markdownText = markdownInput.value;
        // marked.js를 사용하여 Markdown을 HTML 문자열로 변환
        // marked(markdownText) 함수는 marked.min.js 파일에서 제공됩니다.
        const htmlContent = marked.parse(markdownText);
        
        // 변환된 HTML을 미리보기 영역에 삽입
        htmlOutput.innerHTML = htmlContent;

        // 3. (추가 기능) localStorage에 내용 저장
        localStorage.setItem('editorContent', markdownText);
    }

    // 2. 초기 로드 시 저장된 내용 불러오기
    function loadContent() {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            markdownInput.value = savedContent;
            updatePreview(); // 불러온 내용으로 즉시 미리보기 업데이트
        } else {
            // 저장된 내용이 없을 경우 초기 안내 문구 설정
            markdownInput.value = `# Markdown Editor\n\n**굵게**, *기울임*`;
            updatePreview();
        }
    }

    // 이벤트 리스너 설정: 입력이 발생할 때마다 미리보기 업데이트
    markdownInput.addEventListener('input', updatePreview);

    // 페이지 로드 시 실행
    loadContent();
});
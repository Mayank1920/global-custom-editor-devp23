# Global Text Editor Library

A reusable text editor library for web applications.

## Installation

Include the library in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Mayank1920/global-custom-editor-devp23@main/global-text-editor.js" crossorigin="anonymous"></script>
## (INITIALIZATION )
<div class="editor_wrapper">
    <div id="{{ADD YOUR CUSTOM TOOLBAR ID}}"></div>
    <div id="{{ADD YOUR CUSTOM EDITOR ID}}"></div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        let tools = ['text','paragraph','heading', 'script', 'font', 'highlight', 'list', 'link', 'align','image','table','slash'];
        const editor = TextEditorLib.TextEditor.create('{{ADD YOUR CUSTOM EDITOR ID}}', '{{ADD YOUR CUSTOM TOOLBAR ID}}',tools);
    });
</script>

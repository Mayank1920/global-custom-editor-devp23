# Global Text Editor Library

A reusable text editor library for web applications.

## Installation

Include the library in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Mayank1920/global-custom-editor-devp23@main/global-text-editor-v1.7.js" crossorigin="anonymous"></script>
## (INITIALIZATION IN HTML WEB PAGE)
<div class="global_text_editor_wrapper">
    <iframe id="editor_iframe" style="width:100%; height:100%;"></iframe>
</div>
<script src="dist/global-text-editor-lib.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        let options = {
            tools:['revert','text','paragraph','heading', 'script', 'font', 'highlight', 'list', 'link', 'align','image','table','slash'],
            height:763,
            isToolBarAtBottom:true,
            isTestingDemo:true,
        }
        TextEditorLib.TextEditor.create('editor_iframe','editor','toolbar',options);
    });
</script>


##(INITIALIZATION IN REACT COMPONENT)
index.html
<head>
   <script src="https://cdn.jsdelivr.net/gh/Mayank1920/global-custom-editor-devp23@main/global-text-editor-v1.7.js" crossorigin="anonymous"></script>
</head>
useEffect(() => {
    // Initialize the text editor when the component is mounted
    const initializeEditor = () => {
        if (window.TextEditorLib) {
                let options = {
                tools:['revert','text','paragraph','heading', 'script', 'font', 'highlight', 'list', 'link', 'align','image','table','slash'],
                height:763,
                isToolBarAtBottom:true
            }
            window.TextEditorLib.TextEditor.create(iframeRef?.id,'{ADD_CUSTOM_EDITOR_ID_OF_YOUR_CHOICE}',''{ADD_CUSTOM_TOOLBAR_ID_OF_YOUR_CHOICE}',options);
        }
    };

    // Check if the script is already loaded
    if (window.TextEditorLib) {
        initializeEditor();
    }
}, [iframeRef]);

return(
  <iframe id="{ADD_CUSTOM_IFRAME_ID_OF_YOUR_CHOICE}" ref="iframeRef" style="width:100%; height:100%;"></iframe>
)

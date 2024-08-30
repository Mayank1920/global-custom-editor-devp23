# Global Text Editor Library

A reusable text editor library for web applications.

## Installation

Include the library in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Mayank1920/global-custom-editor-devp23@main/global-text-editor-v1.4.js" crossorigin="anonymous"></script>
## (INITIALIZATION IN HTML WEB PAGE)
<div class="editor_wrapper">
    <div id="{{ADD YOUR CUSTOM TOOLBAR ID}}"></div>
    <div id="{{ADD YOUR CUSTOM EDITOR ID}}"></div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        let options = {
                tools:['revert','text','paragraph','heading', 'script', 'font', 'highlight', 'list', 'link', 'align','image','table','slash'],
                width:1890,
                height:848,
            }
        const editor = TextEditorLib.TextEditor.create('{{ADD YOUR CUSTOM EDITOR ID}}', '{{ADD YOUR CUSTOM TOOLBAR ID}}',options);
    });
</script>

##(INITIALIZATION IN REACT COMPONENT)
useEffect(() => {
    // Initialize the text editor when the component is mounted
    const initializeEditor = () => {
        if (window.TextEditorLib) {
            let options = {
                tools:['revert','text','paragraph','heading', 'script', 'font', 'highlight', 'list', 'link', 'align','image','table','slash'],
                width:1890,
                height:848,
            }
            window.TextEditorLib.TextEditor.create(editorRef.current.id, toolbarRef.current.id,options);
        }
    };

    // Check if the script is already loaded
    if (window.TextEditorLib) {
        initializeEditor();
    } else {
        // Wait for the script to load if not already loaded
        globalEditorScript = document.createElement('script');
        globalEditorScript.src = "https://cdn.jsdelivr.net/gh/Mayank1920/global-custom-editor-devp23@main/global-text-editor.js";
        globalEditorScript.onload = initializeEditor;
        document.body.appendChild(globalEditorScript);
    }

    return ()=>{
        if(globalEditorScript)
            globalEditorScript.remove();
    }
}, [editorContainerRef]);

<div ref={editorContainerRef} class="editor_wrapper">
    <div id="{{ADD YOUR CUSTOM TOOLBAR ID}}"></div>
    <div id="{{ADD YOUR CUSTOM EDITOR ID}}"></div>
</div>

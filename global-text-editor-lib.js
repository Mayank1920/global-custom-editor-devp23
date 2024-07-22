!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.TextEditorLib=o():t.TextEditorLib=o()}(this,(()=>(()=>{"use strict";var t={d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};t.r(o),t.d(o,{TextEditor:()=>e});class e{constructor(t,o){this.editor=document.getElementById(t),this.editor.setAttribute("contenteditable","true"),this.editor.classList.add("global_editor_edit_main_area"),this.toolbar=document.getElementById(o),this.toolbar.classList.add("global_editor_toolbar"),function(t){document.getElementById(t).innerHTML='\n        <div class="global_editor_toolbar_button_pane">\n        \n        \x3c!--//////////// VIEW HTML EDITOR BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n            <button class="global_editor_button"  title="View HTML" tabindex="-1" id="viewHtmlButton">\n                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path fill="none" stroke="currentColor" stroke-width="8" stroke-miterlimit="10" d="M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9"/>\n                </svg>\n            </button>\n        </div>\n        \x3c!--//////////// VIEW HTML EDITOR BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// UNDO REDO BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n            <button class="global_editor_button"  title="Undo (Ctrl + Z)" tabindex="-1" id="undoButton">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z"/>\n                </svg>\n            </button>\n              <button class="global_editor_button" title="Redo (Ctrl + Y)" tabindex="-1" id="redoButton">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z"/>\n                </svg>\n            </button>\n        </div>\n        \x3c!--////////////  UNDO REDO BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// PARAGRAPH HEADING BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n            <button class="global_editor_button" title="Paragraph" tabindex="-1" id="paragraphButton">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M47.8 15.1H30.1c-4.7 0-8.5 3.7-8.5 8.4s3.7 8.4 8.4 8.4v25h7V19.8h3v37.1h4.1V19.8h3.7v-4.7z"/>\n                </svg>\n            </button>\n            <button class="global_editor_button" title="Quote Block" tabindex="-1" id="quoteButton">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M21.3 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12zM49.5 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12z"/>\n              </svg>\n            </button>\n             <button class="global_editor_button" title="Heading 1" tabindex="-1" id="heading1Button">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                  <path d="M6.4 14.9h7.4v16.7h19.1V14.9h7.4V57h-7.4V38H13.8v19H6.4V14.9zM47.8 22.5c1.4 0 2.8-.1 4.1-.4 1.3-.2 2.5-.6 3.6-1.2 1.1-.5 2-1.3 2.8-2.1.8-.9 1.3-1.9 1.5-3.2h5.5v41.2h-7.4v-29H47.8v-5.3z"/>\n                </svg>\n             </button>\n             <button class="global_editor_button" title="Heading 2" tabindex="-1" id="heading2Button">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M1.5 14.9h7.4v16.7H28V14.9h7.4V57H28V38H8.8v19H1.5V14.9zM70.2 56.9H42c0-3.4.9-6.4 2.5-9s3.8-4.8 6.6-6.7c1.3-1 2.7-1.9 4.2-2.9 1.5-.9 2.8-1.9 4-3 1.2-1.1 2.2-2.2 3-3.4.8-1.2 1.2-2.7 1.2-4.3 0-.7-.1-1.5-.3-2.4s-.5-1.6-1-2.4c-.5-.7-1.2-1.3-2.1-1.8-.9-.5-2.1-.7-3.5-.7-1.3 0-2.4.3-3.3.8s-1.6 1.3-2.1 2.2-.9 2-1.2 3.3c-.3 1.3-.4 2.6-.4 4.1h-6.7c0-2.3.3-4.4.9-6.3.6-1.9 1.5-3.6 2.7-5 1.2-1.4 2.7-2.5 4.4-3.3 1.7-.8 3.8-1.2 6.1-1.2 2.5 0 4.6.4 6.3 1.2 1.7.8 3.1 1.9 4.1 3.1 1 1.3 1.8 2.6 2.2 4.1.4 1.5.6 2.9.6 4.2 0 1.6-.3 3.1-.8 4.5-.5 1.3-1.2 2.6-2.1 3.7-.9 1.1-1.8 2.2-2.9 3.1-1.1.9-2.2 1.8-3.4 2.7-1.2.8-2.4 1.6-3.5 2.4-1.2.7-2.3 1.5-3.3 2.2-1 .7-1.9 1.5-2.6 2.3-.7.8-1.3 1.7-1.5 2.6h20.1v5.9z"/>\n                </svg>\n            </button>\n              <button class="global_editor_button" title="Heading 3" tabindex="-1" id="heading3Button">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M1.4 14.5h7.4v16.7h19.1V14.5h7.4v42.1h-7.4v-19H8.8v19H1.4V14.5zM53.1 32.4c1.1 0 2.2 0 3.3-.2 1.1-.2 2.1-.5 2.9-1 .9-.5 1.6-1.2 2.1-2 .5-.9.8-1.9.8-3.2 0-1.8-.6-3.2-1.8-4.2-1.2-1.1-2.7-1.6-4.6-1.6-1.2 0-2.2.2-3.1.7-.9.5-1.6 1.1-2.2 1.9-.6.8-1 1.7-1.3 2.7-.3 1-.4 2-.4 3.1h-6.7c.1-2 .5-3.9 1.1-5.6.7-1.7 1.6-3.2 2.7-4.4s2.6-2.2 4.2-2.9c1.6-.7 3.5-1.1 5.6-1.1 1.6 0 3.2.2 4.7.7 1.6.5 2.9 1.2 4.2 2.1 1.2.9 2.2 2.1 3 3.4.7 1.4 1.1 3 1.1 4.8 0 2.1-.5 3.9-1.4 5.4-.9 1.6-2.4 2.7-4.4 3.4v.1c2.4.5 4.2 1.6 5.5 3.5 1.3 1.9 2 4.1 2 6.8 0 2-.4 3.7-1.2 5.3-.8 1.6-1.8 2.9-3.2 3.9-1.3 1.1-2.9 1.9-4.7 2.5-1.8.6-3.6.9-5.6.9-2.4 0-4.5-.3-6.3-1s-3.3-1.7-4.5-2.9c-1.2-1.3-2.1-2.8-2.7-4.5-.6-1.8-1-3.7-1-5.9h6.7c-.1 2.5.5 4.6 1.9 6.3 1.3 1.7 3.3 2.5 5.9 2.5 2.2 0 4.1-.6 5.6-1.9 1.5-1.3 2.3-3.1 2.3-5.4 0-1.6-.3-2.9-.9-3.8-.6-.9-1.5-1.7-2.5-2.2-1-.5-2.2-.8-3.4-.9-1.3-.1-2.6-.2-3.9-.1v-5.2z"/>\n                </svg>\n            </button>\n        </div>\n        <div class="global_editor_button_group">\n            <button class="global_editor_button" title="Strong (Ctrl + B)" tabindex="-1" id="boldButton">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M51.1 37.8c-1.1-1.4-2.5-2.5-4.2-3.3 1.2-.8 2.1-1.8 2.8-3 1-1.6 1.5-3.5 1.5-5.3 0-2-.6-4-1.7-5.8-1.1-1.8-2.8-3.2-4.8-4.1-2-.9-4.6-1.3-7.8-1.3h-16v42h16.3c2.6 0 4.8-.2 6.7-.7 1.9-.5 3.4-1.2 4.7-2.1 1.3-1 2.4-2.4 3.2-4.1.9-1.7 1.3-3.6 1.3-5.7.2-2.5-.5-4.7-2-6.6zM40.8 50.2c-.6.1-1.8.2-3.4.2h-9V38.5h8.3c2.5 0 4.4.2 5.6.6 1.2.4 2 1 2.7 2 .6.9 1 2 1 3.3 0 1.1-.2 2.1-.7 2.9-.5.9-1 1.5-1.7 1.9-.8.4-1.7.8-2.8 1zm2.6-20.4c-.5.7-1.3 1.3-2.5 1.6-.8.3-2.5.4-4.8.4h-7.7V21.6h7.1c1.4 0 2.6 0 3.6.1s1.7.2 2.2.4c1 .3 1.7.8 2.2 1.7.5.9.8 1.8.8 3-.1 1.3-.4 2.2-.9 3z"/>\n                </svg>\n            </button>\n            <button class="global_editor_button" title="Emphasis (Ctrl + I)" tabindex="-1" id="italicButton">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                  <path d="M26 57l10.1-42h7.2L33.2 57H26z"/>\n                </svg>\n            </button>\n            <button class="global_editor_button" title="Underline (Ctrl + U)" tabindex="-1" id="underlineButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M36 35zM15.2 55.9h41.6V59H15.2zM21.1 13.9h6.4v21.2c0 1.2.1 2.5.2 3.7.1 1.3.5 2.4 1 3.4.6 1 1.4 1.8 2.6 2.5 1.1.6 2.7 1 4.8 1 2.1 0 3.7-.3 4.8-1 1.1-.6 2-1.5 2.6-2.5.6-1 .9-2.1 1-3.4.1-1.3.2-2.5.2-3.7V13.9H51v23.3c0 2.3-.4 4.4-1.1 6.1-.7 1.7-1.7 3.2-3 4.4-1.3 1.2-2.9 2-4.7 2.6-1.8.6-3.9.9-6.1.9-2.2 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.5-4.7-2.6-1.3-1.2-2.3-2.6-3-4.4-.7-1.7-1.1-3.8-1.1-6.1V13.9z"/>\n            </svg>\n            </button>\n            <button class="global_editor_button" title="Deleted" tabindex="-1" id="strikeButton">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                   <path d="M45.8 45c0 1-.3 1.9-.9 2.8-.6.9-1.6 1.6-3 2.1s-3.1.8-5 .8c-2.1 0-4-.4-5.7-1.1-1.7-.7-2.9-1.7-3.6-2.7-.8-1.1-1.3-2.6-1.5-4.5l-.1-.8-6.7.6v.9c.1 2.8.9 5.4 2.3 7.6 1.5 2.3 3.5 4 6.1 5.1 2.6 1.1 5.7 1.6 9.4 1.6 2.9 0 5.6-.5 8-1.6 2.4-1.1 4.3-2.7 5.6-4.7 1.3-2 2-4.2 2-6.5 0-1.6-.3-3.1-.9-4.5l-.2-.6H44c0 .1 1.8 2.3 1.8 5.5zM29 28.9c-.8-.8-1.2-1.7-1.2-2.9 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.4-1.6.6-.5 1.4-.9 2.5-1.1 1.1-.3 2.4-.4 3.9-.4 2.9 0 5 .6 6.3 1.7 1.3 1.1 2.1 2.7 2.4 5.1l.1.9 6.8-.5v-.9c-.1-2.5-.8-4.7-2.1-6.7s-3.2-3.5-5.6-4.5c-2.4-1-5.1-1.5-8.1-1.5-2.8 0-5.3.5-7.6 1.4-2.3 1-4.2 2.4-5.4 4.3-1.2 1.9-1.9 3.9-1.9 6.1 0 1.7.4 3.4 1.2 4.9l.3.5h11.8c-2.3-.9-3.9-1.7-5.2-2.9zm13.3-6.2zM22.7 20.3zM13 34.1h46.1v3.4H13z"/>\n                </svg>\n            </button>\n        </div>\n        \x3c!--//////////// PARAGRAPH HEADING BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// SUBSCRIPT SUPERSCRIPT BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n            <button class="global_editor_button" title="Superscript" tabindex="-1" id="superScriptButton">\n                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM49.6 28.8c.5-1.1 1.6-2.3 3.4-3.6 1.5-1.1 2.5-1.9 3-2.4.7-.7 1-1.6 1-2.4 0-.7-.2-1.3-.6-1.8-.4-.5-1-.7-1.7-.7-1 0-1.7.4-2.1 1.1-.2.4-.3 1.1-.4 2.1H49c.1-1.5.3-2.6.8-3.5.9-1.7 2.5-2.6 4.8-2.6 1.8 0 3.2.5 4.3 1.5 1.1 1 1.6 2.3 1.6 4 0 1.3-.4 2.4-1.1 3.4-.5.7-1.3 1.4-2.4 2.2l-1.3 1c-.8.6-1.4 1-1.7 1.3-.3.3-.6.6-.8.9h7.4v3H48.8c0-1.3.3-2.4.8-3.5z"/>\n                </svg>\n            </button>\n             <button class="global_editor_button" title="Subscript" tabindex="-1" id="subScriptButton">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                    <path d="M32 15h7.8L56 57.1h-7.9L44.3 46H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM58.7 59.9c.6-1.4 2-2.8 4.1-4.4 1.9-1.3 3.1-2.3 3.7-2.9.8-.9 1.3-1.9 1.3-3 0-.9-.2-1.6-.7-2.2-.5-.6-1.2-.9-2.1-.9-1.2 0-2.1.5-2.5 1.4-.3.5-.4 1.4-.5 2.5h-4c.1-1.8.4-3.2 1-4.3 1.1-2.1 3-3.1 5.8-3.1 2.2 0 3.9.6 5.2 1.8 1.3 1.2 1.9 2.8 1.9 4.8 0 1.5-.5 2.9-1.4 4.1-.6.8-1.6 1.7-3 2.6L66 57.7c-1 .7-1.7 1.2-2.1 1.6-.4.3-.7.7-1 1.1H72V64H57.8c0-1.5.3-2.8.9-4.1z"/>\n                </svg>\n            </button>\n        </div>\n       \x3c!--//////////// SUBSCRIPT SUPERSCRIPT BUTTON ///////////--\x3e\n       \n       \x3c!--//////////// FONT STYLING BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n            <button id="fontFamilyButton" class="global_editor_button dropdown-button" title="Font Family" tabindex="-1">\n               <span id="fontFamilyButtonText">\n                   Calibri\n               </span>\n               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">\n                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9l-6 6-6-6z"/>\n               </svg>\n            </button>\n            <div id="fontFamilyDropdown" class="dropdown-content">\n                <div style="font-family: Calibri ,sans-serif" data-font="Calibri" class="dropdown-item font_dropdown active">Calibri</div>\n                <div style="font-family: Arial ,sans-serif" data-font="Arial" class="dropdown-item font_dropdown">Arial</div>\n                <div style="font-family: Courier,\'Courier New\' ,sans-serif" data-font="Courier New" class="dropdown-item font_dropdown">Courier New</div>\n                <div style="font-family: Times,\'Times New Roman\' ,sans-serif" data-font="Times New Roman" class="dropdown-item font_dropdown">Times New Roman</div>\n                <div style="font-family: Georgia ,sans-serif" data-font="Georgia" class="dropdown-item font_dropdown">Georgia</div>\n                <div style="font-family: Impact ,sans-serif" data-font="Impact" class="dropdown-item font_dropdown">Impact</div>\n            </div>\n            </div>\n         <div class="global_editor_button_group">\n           <button id="fontSizeButton" class="global_editor_button dropdown-button" title="Font Size" tabindex="-1">\n                 <span id="fontSizeButtonText">\n                   5\n                </span>\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">\n                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9l-6 6-6-6z"/>\n                </svg>\n            </button>\n            <div id="fontSizeDropdown" class="dropdown-content">\n                <div data-size="1" class="dropdown-item font_dropdown">1</div>\n                <div data-size="2" class="dropdown-item font_dropdown">2</div>\n                <div data-size="3" class="dropdown-item font_dropdown">3</div>\n                <div data-size="4" class="dropdown-item font_dropdown">4</div>\n                <div data-size="5" class="dropdown-item font_dropdown active">5</div>\n                <div data-size="6" class="dropdown-item font_dropdown">6</div>\n                <div data-size="7" class="dropdown-item font_dropdown">7</div>\n            </div>\n      </div>\n       <div class="global_editor_button_group">\n            <button id="colorButton" class="global_editor_button dropdown-button" title="Text Color" tabindex="-1">\n             <span id="colorButtonText" class="color_button_toolbar" style="background: #000000"></span>\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">\n                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9l-6 6-6-6z"/>\n            </svg>\n        </button>\n        <div id="colorDropdown" class="dropdown-content color_pallet_content">\n            <div data-color="#000000" class="color_pallet dropdown-item active" style="background-color: #000000;"></div>\n            <div data-color="#ff0000" class="color_pallet dropdown-item" style="background-color: #ff0000;"></div>\n            <div data-color="#00ff00" class="color_pallet dropdown-item" style="background-color: #00ff00;"></div>\n            <div data-color="#0000ff" class="color_pallet dropdown-item" style="background-color: #0000ff;"></div>\n            <div data-color="#ffff00" class="color_pallet dropdown-item" style="background-color: #ffff00;"></div>\n            <div data-color="#ff00ff" class="color_pallet dropdown-item" style="background-color: #ff00ff;"></div>\n            <div data-color="#00ffff" class="color_pallet dropdown-item" style="background-color: #00ffff;"></div>\n        </div>\n        \n            <button id="highlightColorButton" class="global_editor_button dropdown-button" title="Highlight Color" tabindex="-1">\n                <span id="colorButtonHighlight" class="color_button_toolbar" style="background: #000000"></span>\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">\n                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9l-6 6-6-6z"/>\n                </svg>\n            </button>\n            <div id="highlightColorDropdown" class="dropdown-content color_pallet_content">\n                <div data-color="#000000" class="color_pallet dropdown-item active" style="background-color: #000000;"></div>\n                <div data-color="#ff0000" class="color_pallet dropdown-item" style="background-color: #ff0000;"></div>\n                <div data-color="#00ff00" class="color_pallet dropdown-item" style="background-color: #00ff00;"></div>\n                <div data-color="#0000ff" class="color_pallet dropdown-item" style="background-color: #0000ff;"></div>\n                <div data-color="#ffff00" class="color_pallet dropdown-item" style="background-color: #ffff00;"></div>\n                <div data-color="#ff00ff" class="color_pallet dropdown-item" style="background-color: #ff00ff;"></div>\n                <div data-color="#00ffff" class="color_pallet dropdown-item" style="background-color: #00ffff;"></div>\n            </div>\n        </div>\n        \x3c!--//////////// FONT STYLING BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// LINTING BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Unordered List"  tabindex="-1" id="bulletListButton">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z"/>\n              </svg>\n          </button>\n          <button class="global_editor_button" title="Ordered List" tabindex="-1" id="numberListButton">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z"/>\n              </svg>\n          </button>\n        </div>\n        \x3c!--//////////// LINTING BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// INSERT LINK BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Link" tabindex="-1" id="linkButton">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"/>\n                <path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2z"/>\n              </svg>\n          </button>\n        </div>\n        \x3c!--//////////// INSERT LINK BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// INTEND PARAGRAPH BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Align Left" tabindex="-1" id="justifyLeftButton">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z"/>\n              </svg>\n          </button>\n          <button class="global_editor_button" title="Align Center" tabindex="-1" id="justifyCenterButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z"/>\n            </svg>\n          </button>\n          <button class="global_editor_button" title="Align Justify" tabindex="-1" id="justifyFullButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z"/>\n            </svg>\n          </button>\n           <button class="global_editor_button" title="Align Right" tabindex="-1" id="justifyRightButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z"/>\n            </svg>\n          </button>\n        </div>\n        \x3c!--//////////// INTEND PARAGRAPH BUTTON ///////////--\x3e\n        \n        \n        \x3c!--//////////// INSERT IMAGE BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Insert Image" tabindex="-1" id="imageButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n              <path d="M64 17v38H8V17h56m8-8H0v54h72V9z"/>\n              <path d="M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z"/>\n            </svg>\n         </button>\n        </div>\n         \x3c!--//////////// INSERT IMAGE BUTTON ///////////--\x3e\n        \n         \x3c!--//////////// INSERT TABLE BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Insert Table"  tabindex="-1" id="insertTableButton">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 12h16m-8-8v16m-5.8 0h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 18.48 21 17.92 21 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 20 5.08 20 6.2 20z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\n          </button>\n        </div>\n        \x3c!--//////////// INSERT TABLE BUTTON ///////////--\x3e\n        \n        \x3c!--//////////// REMOVE FORMAT BUTTON ///////////--\x3e\n        <div class="global_editor_button_group">\n          <button class="global_editor_button" title="Remove Formatting" tabindex="-1" id="removeFormatButton">\n             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">\n                <path d="M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z"/>\n            </svg>\n          </button>\n        </div>\n        \x3c!--//////////// REMOVE FORMAT BUTTON ///////////--\x3e\n        </div>\n    '}(o),this.setupToolbar(),this.setupEditor(),this.htmlView=!1,this.currentRangeSelection=null}setupToolbar(){const t=this.toolbar.querySelector("#fontFamilyButton"),o=this.toolbar.querySelector("#fontFamilyDropdown");t.addEventListener("click",(()=>{this.toggleDropdown(t,o)})),o.addEventListener("click",(t=>{t.target.dataset.font&&(this.execCommand("fontName",t.target.dataset.font),this.hideDropdown(o),this.toolbar.querySelector("#fontFamilyButtonText").innerHTML=t.target.dataset.font,this.setActiveColor(o,t.target))}));const e=this.toolbar.querySelector("#fontSizeButton"),n=this.toolbar.querySelector("#fontSizeDropdown");e.addEventListener("click",(()=>{this.toggleDropdown(e,n)})),n.addEventListener("click",(t=>{t.target.dataset.size&&(this.execCommand("fontSize",t.target.dataset.size),this.hideDropdown(n),this.toolbar.querySelector("#fontSizeButtonText").innerHTML=t.target.dataset.size,this.setActiveColor(n,t.target))}));const i=this.toolbar.querySelector("#colorButton"),l=this.toolbar.querySelector("#colorDropdown");i.addEventListener("click",(()=>{this.toggleDropdown(i,l)})),l.addEventListener("click",(t=>{t.target.dataset.color&&(this.execCommand("foreColor",t.target.dataset.color),this.hideDropdown(l),this.toolbar.querySelector("#colorButtonText").style.background=t.target.dataset.color,this.setActiveColor(l,t.target))}));const r=this.toolbar.querySelector("#highlightColorButton"),s=this.toolbar.querySelector("#highlightColorDropdown");r.addEventListener("click",(()=>{this.toggleDropdown(r,s)})),s.addEventListener("click",(t=>{t.target.dataset.color&&(this.execCommand("backColor",t.target.dataset.color),this.hideDropdown(s),this.toolbar.querySelector("#colorButtonHighlight").style.background=t.target.dataset.color,this.setActiveColor(s,t.target))})),document.addEventListener("click",(d=>{t.contains(d.target)||o.contains(d.target)||e.contains(d.target)||n.contains(d.target)||i.contains(d.target)||l.contains(d.target)||r.contains(d.target)||s.contains(d.target)||(this.hideDropdown(o),this.hideDropdown(n),this.hideDropdown(l),this.hideDropdown(s))})),this.toolbar.querySelector("#boldButton").addEventListener("click",(()=>{this.execCommand("bold")})),this.toolbar.querySelector("#viewHtmlButton").addEventListener("click",(()=>{this.toggleViewHtml(!this.htmlView)})),this.toolbar.querySelector("#italicButton").addEventListener("click",(()=>{this.execCommand("italic")})),this.toolbar.querySelector("#underlineButton").addEventListener("click",(()=>{this.execCommand("underline")})),this.toolbar.querySelector("#strikeButton").addEventListener("click",(()=>{this.execCommand("strikethrough")})),this.toolbar.querySelector("#bulletListButton").addEventListener("click",(()=>{this.execCommand("insertUnorderedList")})),this.toolbar.querySelector("#numberListButton").addEventListener("click",(()=>{this.execCommand("insertOrderedList")})),this.toolbar.querySelector("#undoButton").addEventListener("click",(()=>{this.execCommand("undo")})),this.toolbar.querySelector("#redoButton").addEventListener("click",(()=>{this.execCommand("redo")})),this.toolbar.querySelector("#linkButton").addEventListener("click",(()=>{const t=prompt("Enter the link URL");t&&this.execCommand("createLink",t)})),this.toolbar.querySelector("#paragraphButton").addEventListener("click",(()=>{this.execCommand("formatBlock","<p>")})),this.toolbar.querySelector("#superScriptButton").addEventListener("click",(()=>{this.execCommand("superscript")})),this.toolbar.querySelector("#justifyLeftButton").addEventListener("click",(()=>{this.execCommand("justifyLeft")})),this.toolbar.querySelector("#justifyCenterButton").addEventListener("click",(()=>{this.execCommand("justifyCenter")})),this.toolbar.querySelector("#removeFormatButton").addEventListener("click",(()=>{this.execCommand("removeFormat")})),this.toolbar.querySelector("#justifyRightButton").addEventListener("click",(()=>{this.execCommand("justifyRight")})),this.toolbar.querySelector("#justifyFullButton").addEventListener("click",(()=>{this.execCommand("justifyFull")})),this.toolbar.querySelector("#subScriptButton").addEventListener("click",(()=>{this.execCommand("subscript")})),this.toolbar.querySelector("#heading1Button").addEventListener("click",(()=>{this.execCommand("formatBlock","<h1>")})),this.toolbar.querySelector("#heading2Button").addEventListener("click",(()=>{this.execCommand("formatBlock","<h1>")})),this.toolbar.querySelector("#heading3Button").addEventListener("click",(()=>{this.execCommand("formatBlock","<h1>")})),this.toolbar.querySelector("#imageButton").addEventListener("click",(()=>{const t=prompt("Enter the image URL");t&&this.execCommand("insertImage",t)})),this.toolbar.querySelector("#quoteButton").addEventListener("click",(()=>{this.execCommand("formatBlock","blockquote")})),this.toolbar.querySelector("#insertTableButton").addEventListener("click",(()=>{const t=prompt("Enter number of columns:"),o=prompt("Enter number of rows:");t&&o&&this.insertTable(t,o)})),this.editor.addEventListener("paste",(t=>{const o=t.clipboardData.items;for(const e of o)if(e.type.startsWith("image/")){const o=e.getAsFile(),n=new FileReader;n.onload=t=>{this.execCommand("insertImage",t.target.result)},n.readAsDataURL(o),t.preventDefault()}})),this.editor.addEventListener("keypress",(t=>{if("/"===t.key){const t=document.createElement("div");t.id="slashMenu",t.innerHTML='\n                    <button id="insertTable">Table</button>\n                    \x3c!-- Add more elements here --\x3e\n                ',this.editor.appendChild(t),this.toolbar.querySelector("#insertTable").addEventListener("click",(()=>{this.execCommand("insertHTML","<table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"),t.remove()}))}}))}setActiveColor(t,o){t.querySelectorAll(".dropdown-item").forEach((t=>t.classList.remove("active"))),o.classList.add("active")}toggleDropdown(t,o){this.hideAllDropdownsExcept(o);const e=o.classList.contains("active");if(o.style.display=e?"none":"block",o.classList.toggle("active",!e),!e){const e=t.getBoundingClientRect();o.style.top=`${e.bottom+window.scrollY}px`,o.style.left=`${e.left+window.scrollX}px`}}hideDropdown(t){t.style.display="none",t.classList.remove("active")}hideAllDropdownsExcept(t){[document.getElementById("fontFamilyDropdown"),document.getElementById("fontSizeDropdown"),document.getElementById("colorDropdown"),document.getElementById("highlightColorDropdown")].forEach((o=>{o!==t&&this.hideDropdown(o)}))}setupEditor(){this.editor.addEventListener("keydown",(t=>{this.cloneRangeSelection()})),this.editor.addEventListener("input",(()=>{this.updatePlaceholder(),this.cloneRangeSelection()})),this.editor.addEventListener("keyup",(()=>{this.wrapContentInDivs(),this.cloneRangeSelection()})),this.editor.addEventListener("focus",(()=>{this.wrapContentInDivs(),this.cloneRangeSelection()})),this.editor.addEventListener("mouseup",(()=>{this.cloneRangeSelection()})),this.updatePlaceholder(),this.wrapContentInDivs(),this.editor.focus()}cloneRangeSelection(){const t=window.getSelection();if(t.rangeCount>0){const o=t.getRangeAt(0);this.currentRangeSelection={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset,range:o}}}restoreSelection(){if(this.currentRangeSelection){const t=window.getSelection(),o=document.createRange();o.setStart(this.currentRangeSelection.anchorNode,this.currentRangeSelection.anchorOffset),o.setEnd(this.currentRangeSelection.focusNode,this.currentRangeSelection.focusOffset),t.removeAllRanges(),t.addRange(o)}}toggleViewHtml(t){if(this.htmlView=t,t){let t=document.createElement("textarea");t.id="globalEditorViewTextarea",t.classList.add("global_editor_textarea_section"),t.value=this.editor.innerHTML.trim(),this.editor.after(t),this.editor.style.display="none",setTimeout((()=>{t.focus()}),0)}else{if(document.querySelector("#globalEditorViewTextarea")){let t=document.querySelector("#globalEditorViewTextarea").value;this.editor.innerHTML=t.trim(),document.querySelector("#globalEditorViewTextarea").remove()}this.editor.style.display="block"}}updatePlaceholder(){"<p><br></p>"===this.editor.innerHTML.trim()?this.editor.classList.add("empty"):this.editor.classList.remove("empty")}wrapContentInDivs(){this.editor.innerHTML.trim().match(/<p>/)||setTimeout((function(){document.execCommand("formatBlock",!1,"p")}),0)}insertTable(t,o){let e='<table border="1">\n';for(let n=0;n<o;n++){e+="<tr>";for(let o=0;o<t;o++)e+="<td>&nbsp;</td>";e+="</tr>\n"}e+="</table>",document.execCommand("insertHTML",!1,e)}execCommand(t,o=null){this.restoreSelection(),setTimeout((()=>{document.execCommand(t,!1,o)}),0)}static create(t,o){return new e(t,o)}}return o})()));
# EditorJS使用


<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/code@latest"></script>

<div id="editorjs"></div>

<script>
    const editor = new EditorJS({
      autofocus: true,
      placeholder: 'Let`s write an awesome story!',
      tools:{
        code: {
          class:  CodeTool,
          shortcut: 'CMD+SHIFT+C'
        }
      } 
    });
</script>


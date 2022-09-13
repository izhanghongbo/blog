
const logFunction = `
function log(message,id) {
	id?null:id="#result"
	resultPanel = document.querySelector(id)
	const node = document.createElement("label");
	node.innerHTML = message;
	resultPanel.appendChild(node)
	const br = document.createElement("br");
	resultPanel.appendChild(br)
}	
`

function mySnippet(html, js, css, id) {
	const getGeneratedPageURL = ({ html, css, js }) => {
	const getBlobURL = (code, type) => {
	  const blob = new Blob([code], { type });
	  const url = URL.createObjectURL(blob);
	  return url;
	};
      
	const cssURL = getBlobURL(css, 'text/css')
	const jsURL = getBlobURL(js, 'text/javascript')
      
	const source = `
	  <html>	    
	   <script>
		${logFunction}
	   </script>
	   ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
	    <body style="margin:0px">
	      ${html || ''}
	    </body>
	    ${js && `<script async src="${jsURL}" type="text/javascript"></script>`}
	  </html>
	`;
	return getBlobURL(source, 'text/html');
      };
      
      const url = getGeneratedPageURL({
	html: html,
	css: css,
	js: js
      });
      
      const getid = "#" + id;
      
      const iframe = document.querySelector(getid);
      iframe.src = url;
      };
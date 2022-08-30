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
	   ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
	    <body style="margin:0px">
	      ${html || ''}
	    </body>
	    ${js && `<script src="${jsURL}" type="text/javascript"></script>`}
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
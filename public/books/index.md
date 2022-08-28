# 书籍

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/epubjs/dist/epub.min.js"></script>

<style>

.folder {
    display:flex;
    flex-direction: column;
    text-align: center;
}

.folder .fa-solid{
	font-size: 128px;
	color:#3498db
}

.books {
    display:flex;
    flex-direction: column;
    text-align: center;
}

.books .fa-solid{
	font-size: 128px;
	color:#1abc9c;
	margin-bottom:10px;
}




</style>

<script type="text/babel">
const SERVER = "http://95.163.203.164/:8888"
class Book extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
         folder:[],
	 currentFolder:"",
	 books:[]
        };
    }

    componentDidMount(){
	fetch(`${SERVER}/data`).then(d=>d.json()).then(d=>{
		this.setState({folder:d.children})
	})
    }

    renderPDF(f){
	return <a href={`${SERVER}/${f.relativePath}`} className="books">
					<i class="fa-solid fa-file-pdf"></i>
					<span >{f.name}</span>
           			       </a>
    }

    openEpub(f){
	var path = `${SERVER}/${f.relativePath}`
	var book = ePub(path);
	book.open(path)
	var rendition = book.renderTo("root",{
	restore: true,
	width: '100%',
	height: "100%",
	method: 'default'
});
        rendition.display();
	// var rendition = book.renderTo("root",{ method: "default", width: "100%", height: "100%" });
	// var displayed = rendition.display();
    }

    renderEpub(f){
	return <div onClick={()=>this.openEpub(f)} className="books">
					<i class="fa-solid fa-file-lines"></i>
					<span >{f.name}</span>
           			       </div>
    }

    renderBookList(){
		let {books} = this.state
        return <div className="program">
		{
			books.filter(f=>!f.name.startsWith(".")).map(f=>{
				return this.renderPDF(f)	
			// return f.name.endsWith(".pdf")?this.renderPDF(f):this.renderEpub(f)
			})
		}
	</div>	
    }

    onChooseFolder(name){
        let {folder} = this.state	
	let f = folder.find(f=>f.name==name)
	this.setState({books:f.children,currentFolder:name})	
    }

    renderFolder(){
	let {folder} = this.state
        return <div className="program">
		{
			folder.filter(f=>!f.name.startsWith(".")).map(f=>{
				return <div className="folder"  onClick={()=>this.onChooseFolder(f.name)}>
					<i className="fa-solid fa-folder icon"></i>
					<span>{f.name}</span>
           			       </div>
			})
		}
	</div>
    }

    render() {
	let {currentFolder} = this.state
	if(currentFolder){
		return this.renderBookList()
	}else{
		return this.renderFolder()
	}
    }
}
ReactDOM.render(
    <Book />,
    document.getElementById('root')
);
</script>

<div id="root">dd</div>


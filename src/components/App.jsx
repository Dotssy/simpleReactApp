import React, {PureComponent} from 'react'
import ArticleList from './ArticleList/index.jsx'
import articles from '../fixtures'
import 'bootstrap/css/bootstrap.css'

class App extends PureComponent {
	state = {
		reverted: false
	}

	render() {
		return (
	    	<div className="container">
	          <div className="jumbotron">
	          	<h1 className="display-3">
	          		App Name
	          		<button className="btn btn-primary btn-lg" onClick = {this.revert}>Revert</button>
	          	</h1>
	          </div>
	          <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
	      	</div>
    	)
	}

	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default App
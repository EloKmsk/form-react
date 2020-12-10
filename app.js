class App extends React.Component {
    state = {
        comment : [],
        name : "",
        message : ""
        
    }
    nameChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    messageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    commentSubmit = (event) => {
        event.preventDefault();
        const tmp = "{ name : " + this.state.comment.concat(this.state.name) + ",";
        const tmp2 = " message : " + this.state.comment.concat(this.state.message) + " }";
        this.setState({
            comment: tmp + tmp2,
            name: "",
            message: ""
        })
    }

    render() {
        return (
            <div className="main">
                <h1>Say Something</h1>
                <form className="form" onSubmit={this.commentSubmit}>
                    <input className="name" type="text" placeholder="Your Name" value={this.state.name} onChange={this.nameChange}></input>
                    <textarea className="message" type="textarea" placeholder="Your Message" value={this.state.message} onChange={this.messageChange} rows="5"></textarea>
                    <input className="submit" type="submit" value="Comment ►"></input>
                </form>
            </div>
        )
    }
} 
ReactDOM.render(<App/>, document.getElementById('app'));


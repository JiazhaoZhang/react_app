import React,{Component} from 'react'
import logo from '../logo.svg'
import CommentEditor from "./comment-editor";
import CommentList from "./comment-list";
export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments:[
                {username:'User_1',commentContent:'Is Good'},
                {username:'User_2',commentContent: 'Is Bad'}
            ]
        }
    }

    addComment = (comment)=>{
        //add new comment to comments
        const {comments} = this.state
        comments.push(comment)
        //update state
        this.setState({comments})

    }

    render(){
        const {comments} = this.state

        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Please Comment On My React App</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                <div className='row'>
                    <CommentEditor addNewComment={this.addComment}/>
                    <CommentList comments={comments}/>
                </div>
                </div>
            </div>
        );
    }
}
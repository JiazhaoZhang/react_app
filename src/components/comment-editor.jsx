import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class CommentEditor extends Component{

    constructor(props){
        super(props)
    }

    state={
        username:'',
        commentContent:''
    }

    //declare properties, bind an app method to this component
   static propTypes = {
        addNewComment : PropTypes.func.isRequired
   }

    handleSubmit=()=>{
        //1.get username and comment, then pass them to a comment obj
        const comment = this.state
        console.log("Testing... "+comment.username +" "+ comment.commentContent)
        //Update state
        this.props.addNewComment(comment)
        //clear user input
        this.setState({
            username:'',
            commentContent:''
        })
    }

    onUsernameChange = (event)=>{
        const username = event.target.value
        this.setState({username})
    }

    onContentChange = (event)=>{
        const commentContent = event.target.value
        this.setState({commentContent})
    }

    render(){
        const {username} = this.state
        const {commentContent} = this.state

        return(
            <div className='col-md-4'>
                <h3>Place Your Comment Here</h3>
            <form action="" className="form-horizontal">
                <div className="form-group">
                <label>User : </label>&nbsp;&nbsp;
                <input type='text' className="form-control" value={username} onChange={this.onUsernameChange}/><br/>
                </div>
                <div className="form-group">
                <label>Comment :</label><br/>
                <textarea className="form-control" rows="8" value={commentContent} onChange={this.onContentChange}></textarea><br/>
                </div>
                <button type='button' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type='reset' className='btn btn-warning'>Cancel</button>
            </form>
            </div>
        )
    }
}
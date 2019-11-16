import React,{Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from "./comment-item";
export default class CommentList extends Component{
    static propTypes = {
        comments:PropTypes.array.isRequired
    }

    render(){

        const {comments} = this.props

        return(
            <div className="col-md-8">
                <h3>Recent Comments</h3>
                <ul className="list-group">
                    {
                        comments.map((comment, key) => <CommentItem comment={comment} key={key}/>)
                    }
                </ul>
            </div>
        )
    }
}
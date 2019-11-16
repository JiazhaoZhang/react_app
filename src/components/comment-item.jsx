import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Spring} from 'react-spring/renderprops'
export default class CommentItem extends Component{

    //declare property
    static propTypes = {
        comment:PropTypes.object.isRequired
    }


    render(){
        console.log("item.render()")
        //get property
        const {comment} = this.props

        return(
            <Spring
                from={{opacity:0}}
                to={{opacity:1}}
                config={{delay:500,duration:1000}}
            >
                {
                    props => (
                        <li className='list-group-item'>
                            <div style={props}>
                                <h3>{comment.username}'s Comment:</h3>
                                <p>{comment.commentContent}</p>
                            </div>
                        </li>)
                }
            </Spring>)
    }
}
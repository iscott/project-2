const React = require('react');
const Image = require('../components/Image.jsx');

class Show extends React.Component {
    render() {
        const {_id, name, type, music, image, when, description, comments} = this.props.workout;
        // const {username, comment} = this.props.comment
        return (
            <Image>
              
            <div className = "container-changes-show">

                <h1>{name}</h1>
                <p>Type: {type} </p>
                <p>Music: {music}</p>
                <img style={{width: 300}} src={image} alt={image}/>
                <p>When: {when}</p>
                <p>Description: {description}</p> 
                <a className="show-edit" href={`/workouts/${_id}/edit`}>Edit This Workout</a>


                    <br/>
                <form className="btn" style={{width: 100}} className="delete-button" action={`/workouts/${_id}?_method=DELETE`} method="POST">
                <input type="submit" value={`DELETE`}/></form> 
                <br/>
                {/* <a className="btn btn-small back" href="/workouts">Back to All Workouts</a> */}
                <h4>Comments</h4>
                <a className="btn btn-info" href={`/workouts/${_id}/comment`}>Add a comment</a>
                
                <div className="comment-section">
                     {this.props.workout.comments.map((comment) => {
                         return (
                             <div className="comments-section">
                                 Username: {comment.username}<br/>
                                 Comment: {comment.comment}
                             </div>
                         )
                     })}
                </div>
                
   
            </div>
            
            </Image>
        )
    }
}

module.exports = Show;
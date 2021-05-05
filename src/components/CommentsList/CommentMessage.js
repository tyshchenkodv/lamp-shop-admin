import React, { PureComponent } from "react";
import { TimeSince } from "../../utils";

export default class CommentMessage extends PureComponent {

    render() {
        const { comment } = this.props;

        return (
            <>
                <h6>{comment.name}</h6>
                <p>{comment.text}</p>
                <span className="time">{TimeSince(comment.date)}</span>
            </>
        );
    };
}

import React, { PureComponent } from "react";
import { TimeSince } from "../../utils";

export default class CommentMessage extends PureComponent {

    render() {
        const { comment } = this.props;

        return (
            <div className="mess__item">
                <div className="content">
                    <h6>{comment.name}</h6>
                    <p>{comment.message}</p>
                    <span className="time">{TimeSince(comment.date)}</span>
                </div>
            </div>
        );
    };
}

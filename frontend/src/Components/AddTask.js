import React from "react";

export default class AddTask extends React.Component {
    render () {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label>Initial: </label>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }      
}
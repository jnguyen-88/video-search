import React from 'react';
import UserNav from './UserNav';

class SearchBar extends React.Component {
    state = { term: "" };

    // Helper Functions
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)
    };

    render() {
        return (
            <div className="ui segment">
                <div className="logo">
                    <h3>WatchTube</h3>
                    <i class="play icon"></i>
                </div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field icon input">
                        <i className="search icon"></i>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
                <UserNav />
            </div>
        );
    }
}

export default SearchBar;
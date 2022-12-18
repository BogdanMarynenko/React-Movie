import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handelFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
      this.props.searchMovie(this.state.search, this.state.type);
    });
    
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn #455a64 blue-grey darken-2"
            onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
          >
            Search
          </button>
          <div>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handelFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handelFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handelFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series only</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };

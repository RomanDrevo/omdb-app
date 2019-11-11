import React, {Component} from 'react';
import {connect} from "react-redux";
import {getSearchText} from "../../store/selectors";
import {clearSearch, fetchMovies, updateSearch} from "../../store/actions/moviesActions";
import debounce from "lodash.debounce";
import {Input} from "antd";
import style from "./Search.module.scss";

const { Search } = Input;

class SearchBar extends Component {

  handleOnSearch = debounce(text => {
    const {updateSearch, fetchMovies} = this.props;

    updateSearch(text);

    fetchMovies(text);

  }, 100);

  handleClearSearch = () => {
    const {clearSearch} = this.props;

    clearSearch();

  };

  render() {
    const { searchText, centered } = this.props;

    return (
      <div className={`${style['search-bar-wrapper']} ${centered && "centered"}`}>
        <Search
          placeholder="input search text"
          onChange={(e) => this.handleOnSearch(e.target.value)}
          autoFocus
          value={searchText}
        />
        <div onClick={this.handleClearSearch} className="clear-search">x</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    searchText: getSearchText(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateSearch: data => dispatch(updateSearch(data)),
    clearSearch: () => dispatch(clearSearch()),
    fetchMovies: data => dispatch(fetchMovies(data)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

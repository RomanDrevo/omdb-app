import React, { Component } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import { Button, Input } from "antd";
import {connect} from "react-redux";
import {fetchItems, updateSearch} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {getSearchText} from "./store/selectors";

const { Search } = Input;
class App extends Component {
  constructor(props) {
    super(props);
    props.fetchItems();
  }
  
  
  handleDoSomething = e => {
    console.log(e.target);
  };

  handleOnSearch = (e) => {
    const {updateSearch} = this.props

    updateSearch(e.target.value)
    console.log("here")
  }

  render() {
    const { data, searchText } = this.props;
    console.log(data);
    return (
      <div className={style["App"]}>
        <PageLayout>
          <header className="App-header">
            <div className="add-new-item-wrapper">
              {/*<Button*/}
              {/*  type="primary"*/}
              {/*  onClick={this.handleDoSomething}*/}
              {/*  size="large"*/}
              {/*>*/}
              {/*  Do something*/}
              {/*</Button>*/}
              <div className="search-item-wrapper">
                <Search
                  value={searchText}
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>
          </header>
          <div className="main-page-content">
            <Search
              placeholder="input search text"
              onChange={this.handleOnSearch}
            />
          </div>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies.data,
    searchText: getSearchText(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => dispatch(fetchItems()),
    updateSearch: data => dispatch(updateSearch(data))
  };
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);


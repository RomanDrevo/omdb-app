import React, {Component, Fragment} from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {fetchItems, updateSearch} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {getSearchText} from "./store/selectors";
import debounce from 'lodash.debounce'
import SearchBar from "./components/search/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    props.fetchItems();

  }









  render() {
    const { searchText } = this.props;
    // console.log(data);
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
                {
                  searchText.length > 0 &&
                  <SearchBar />

                }
              </div>
            </div>
          </header>
          <div className="main-page-content">
            {
              searchText.length === 0 &&
              <SearchBar />
            }

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
    // updateSearch: data => dispatch(updateSearch(data))
  };
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);


module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.w={},r(r.s="5rk/")}({"/0OW":function(e,t){e.exports=require("babel-runtime/helpers/extends")},"1fKG":function(e,t){e.exports=require("redux-saga")},"3eMc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ResultsBodyErrorBoundary=void 0;var n=c(r("XHuY")),u=c(r("Do0I")),a=c(r("ekhF")),s=c(r("K0gk")),l=c(r("cDcd")),o=c(r("rf6O"));function c(e){return e&&e.__esModule?e:{default:e}}r("g5rO"),(t.ResultsBodyErrorBoundary=function(e){function t(e){(0,n.default)(this,t);var r=(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={hasError:!1},r}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0}),console.error(e)}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",{className:"error-boundary"},"Something went wrong."):this.props.children}}]),t}(l.default.Component)).propTypes={children:o.default.element.isRequired}},"5rk/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function(e,t){var r=(0,l.configureStore)(),o={},c=n.default.createElement(s.default,{context:o,location:e.url,Router:a.StaticRouter,store:r});r.runSaga().done.then(function(){var e=(0,u.renderToString)(c);if(o.url)return t.writeHead(302,{Location:o.url}),void t.end();var n=r.getState();t.send(function(e,t){return'\n      <!doctype html>\n      <html>\n        <head>\n          <meta charset=utf-8>\n          <title>React Server Side Rendering</title>\n          <link href="/css/main.css" rel="stylesheet" type="text/css">\n        </head>\n        <body>\n          <div id="root">'+e+"</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n            window.PRELOADED_STATE = "+JSON.stringify(t).replace(/</g,"\\u003c")+'\n          <\/script>\n          <script src="/js/main.js"><\/script>\n        </body>\n      </html>\n  '}(e,n))}),(0,u.renderToString)(c),r.close()}};var n=o(r("cDcd")),u=r("7ITC"),a=r("oncg"),s=o(r("w4Nm")),l=r("xEDz");function o(e){return e&&e.__esModule?e:{default:e}}},"7ITC":function(e,t){e.exports=require("react-dom/server")},"9ClG":function(e,t){e.exports=require("react-hot-loader")},"9IwD":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SEARCH={genres:"genres",title:"title"},t.SORT={rating:"vote_average",releaseDate:"release_date"},t.ACTIONS={SET_EMPTY_RESULTS:"SET_EMPTY_RESULTS",RETURN_TO_MAIN_PAGE:"RETURN_TO_MAIN_PAGE",UPDATE_INPUT_VALUE:"UPDATE_INPUT_VALUE",RESET_INPUT_VALUE:"RESET_INPUT_VALUE",SEARCH:"SEARCH",SWITCH_SEARCH:"SWITCH_SEARCH",SWITCH_SORT:"SWITCH_SORT",FULL_FILM_LOAD:"FULL_FILM_LOAD",PAGINATION_HANDLER:"PAGINATION_HANDLER",GET_MOVIES_BY_GENRES:"GET_MOVIES_BY_GENRES",SET_SEARCH_URL:"SET_SEARCH_URL",FETCH_MOVIES:"FETCH_MOVIES",FETCH_MOVIES_BY_GENRES:"FETCH_MOVIES_BY_GENRES",FETCH_MOVIES_BY_ID:"FETCH_MOVIES_BY_ID",SWITCH_SORT_ASYNC_ACTION:"SWITCH_SORT_ASYNC_ACTION"},t.ITEM_COUNT_PER_PAGE=12,t.PAGE_RANGE_DISPLAYED=5,t.INITIAL_STATE={searchInfo:{},results:{data:[]},fullItem:{isActive:!1},inputValue:"",sort:"releaseDate",search:"title",resultsCount:-1,searchURL:"/"}},AP5x:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(r("XHuY")),u=p(r("Do0I")),a=p(r("ekhF")),s=p(r("K0gk")),l=p(r("cDcd")),o=(p(r("rf6O")),r("h74D")),c=r("oncg"),i=r("xETq");p(r("qViH"));r("MrMR");r("9IwD");var f=r("sEls");function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.location&&"/"!==this.props.location.pathname&&this.props.fetchMovies(this.props.user.sort,this.props.user.search,this.props.match.params.inputValue)}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"header"},l.default.createElement("div",{className:"return-div"},l.default.createElement(i.Nextflixroulette,null)),!this.props.user.fullItem.isActive&&l.default.createElement("div",null,l.default.createElement("p",{className:"find-movie"},"FIND YOUR MOVIE"),l.default.createElement("div",{className:"search-wrapper"},l.default.createElement("input",{className:"search-bar",placeholder:"Let's find your movie",value:this.props.user.inputValue,onChange:function(t){return e.props.updateInputValue(t.target.value)},onKeyPress:function(t){"Enter"==t.key&&(e.props.history.push("/search/"+e.props.user.inputValue),e.props.setSearchURL("/search/"+e.props.user.inputValue),e.props.fetchMovies(e.props.user.sort,e.props.user.search,e.props.user.inputValue))}}),""===this.props.user.inputValue?l.default.createElement("img",{className:"arrow",src:r("IcdV")}):l.default.createElement("img",{className:"cross",src:r("KROu"),onClick:function(){return e.props.resetInputValue()}})),l.default.createElement("div",{className:"button-group cl-white"},l.default.createElement("div",null,l.default.createElement("p",{className:"search-by"},"SEARCH BY"),l.default.createElement("button",{className:"btn genre-button "+("genres"===this.props.user.search?"bg-red":"bg-grey")+" cl-white",onClick:function(){return e.props.switchSearch("genres")}},"GENRE"),l.default.createElement("button",{className:"btn title-button "+("title"===this.props.user.search?"bg-red":"bg-grey")+" cl-white",onClick:function(){return e.props.switchSearch("title")}},"TITLE")),l.default.createElement(c.Link,{to:"/search/"+this.props.user.inputValue,onClick:function(){e.props.setSearchURL(""+e.props.user.inputValue),e.props.fetchMovies(e.props.user.sort,e.props.user.search,e.props.user.inputValue)}},l.default.createElement("button",{className:"btn search-button bg-red cl-white"},"SEARCH")))),this.props.children)}}]),t}(l.default.Component),h={updateInputValue:f.updateInputValue,searchHandler:f.searchHandler,returnToMainPage:f.returnToMainPage,resetInputValue:f.resetInputValue,switchSearch:f.switchSearch,fetchMovies:f.fetchMovies,setSearchURL:f.setSearchURL};t.default=(0,o.connect)(function(e){return{user:e}},h)(d)},"Df/l":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFoundPage=void 0;var n=o(r("XHuY")),u=o(r("Do0I")),a=o(r("ekhF")),s=o(r("K0gk")),l=o(r("cDcd"));function o(e){return e&&e.__esModule?e:{default:e}}t.NotFoundPage=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",null,"404 Not found"))}}]),t}(l.default.Component)},Do0I:function(e,t){e.exports=require("babel-runtime/helpers/createClass")},IcdV:function(e,t,r){e.exports=r.p+"client/images/arrow.png?330fefc8b03460406963e3fa1782a8ea"},K0gk:function(e,t){e.exports=require("babel-runtime/helpers/inherits")},KROu:function(e,t,r){e.exports=r.p+"client/images/cross.png?c53e17fb55f861f09c4519a134b47c70"},MGin:function(e,t){e.exports=require("react-router")},MrMR:function(e,t){},QTde:function(e,t){},QscH:function(e,t){},RCEi:function(e,t){},RmXt:function(e,t){e.exports=require("redux-saga/effects")},T8f9:function(e,t){e.exports=require("redux-persist/lib/storage")},XHuY:function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},YiDQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r("sHvq"),a=(n=u)&&n.__esModule?n:{default:n};t.rootSaga=f;var s=r("RmXt"),l=r("sEls");var o=a.default.mark(i),c=a.default.mark(f);function i(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([l.watchFetchMovies,l.watchFetchMoviesById,l.watchSwitchSort,l.watchFetchMoviesByGenres]);case 2:case"end":return e.stop()}},o,this)}function f(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([i()]);case 2:case"end":return e.stop()}},c,this)}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZOKb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r("XHuY")),u=i(r("Do0I")),a=i(r("ekhF")),s=i(r("K0gk")),l=i(r("cDcd")),o=r("h74D"),c=r("sEls");function i(e){return e&&e.__esModule?e:{default:e}}r("tVhS");var f=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.setEmptyResults()}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",{className:"empty-page"},"No films found"))}}]),t}(l.default.Component),p={setEmptyResults:c.setEmptyResults};t.default=(0,o.connect)(function(e){return{user:e}},p)(f)},"ZOS/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r("XHuY")),u=i(r("Do0I")),a=i(r("ekhF")),s=i(r("K0gk")),l=i(r("cDcd")),o=(i(r("faye")),i(r("rf6O")),r("h74D"));r("b7UE");r("9IwD");var c=r("sEls");function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"results-bar"},!!this.props.user.resultsCount&&l.default.createElement("div",null,this.props.user.fullItem.isActive?l.default.createElement("p",null,"Films by ",this.props.user.fullItem.filmData.genres[0]," genre"):l.default.createElement("div",{className:"results-bar-content"},l.default.createElement("p",{className:"results-count"},this.props.user.resultsCount," movies found"),l.default.createElement("div",{className:"results-sort"},l.default.createElement("p",null,"Sort by"),l.default.createElement("p",{className:"releaseDate"===this.props.user.sort?"cl-red":"cl-black",onClick:function(){return e.props.switchSortAsyncAction("releaseDate","release_date",e.props.user.inputValue,e.props.user.search)}},"release date"),l.default.createElement("p",{className:"rating"===this.props.user.sort?"cl-red":"cl-black",onClick:function(){return e.props.switchSortAsyncAction("rating","vote_average",e.props.user.inputValue,e.props.user.search)}},"rating")))))}}]),t}(l.default.Component),p={switchSortAsyncAction:c.switchSortAsyncAction};t.default=(0,o.connect)(function(e){return{user:e}},p)(f)},ZSx1:function(e,t){e.exports=require("redux-thunk")},b7UE:function(e,t){},btvy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var n,u=r("cDcd"),a=(n=u)&&n.__esModule?n:{default:n},s=r("xETq");r("RCEi");t.Footer=function(){return a.default.createElement("div",{id:"footer"},a.default.createElement(s.Nextflixroulette,null))}},cDcd:function(e,t){e.exports=require("react")},dlyX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(r("XHuY")),u=p(r("Do0I")),a=p(r("ekhF")),s=p(r("K0gk")),l=p(r("cDcd")),o=p(r("rf6O")),c=r("h74D");r("uniI");r("9IwD");var i=r("sEls"),f=r("oncg");function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"film-item"},this.props.posterUrl?l.default.createElement("img",{src:this.props.posterUrl}):l.default.createElement("img",{src:r("iCFV")}),l.default.createElement("div",{className:"film-info"},l.default.createElement("div",null,l.default.createElement(f.Link,{to:"/film/"+this.props.id,onClick:function(){return e.props.fetchMoviesById(e.props.id)}},l.default.createElement("p",{className:"title"},this.props.title)),l.default.createElement("p",{className:"genre"},this.props.genres)),l.default.createElement("p",{className:"year"},this.props.year)))}}]),t}(l.default.Component);d.propTypes={id:o.default.number,title:o.default.string,posterUrl:o.default.string,genres:o.default.string,year:o.default.number};var h={fetchMoviesById:i.fetchMoviesById};t.default=(0,c.connect)(function(e){return{user:e}},h)(d)},ekhF:function(e,t){e.exports=require("babel-runtime/helpers/possibleConstructorReturn")},faye:function(e,t){e.exports=require("react-dom")},g5rO:function(e,t){},h74D:function(e,t){e.exports=require("react-redux")},hnVg:function(e,t){},iCFV:function(e,t,r){e.exports=r.p+"client/images/noposter.jpg?f35ad9427be01af5955e6a6ce803f5dc"},jM2D:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r("XHuY")),u=f(r("Do0I")),a=f(r("ekhF")),s=f(r("K0gk")),l=f(r("cDcd")),o=(f(r("faye")),r("h74D")),c=(r("ZOS/"),f(r("dlyX"))),i=f(r("ZOKb"));r("3eMc");function f(e){return e&&e.__esModule?e:{default:e}}r("hnVg");var p=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.user.results,t=e.data[0]?e.data.map(function(e){return l.default.createElement(c.default,{key:e.id,id:e.id,title:e.title,posterUrl:e.poster_path,year:Number(e.release_date.slice(0,4)),genres:e.genres.join(", ")})}):l.default.createElement(i.default,null);return l.default.createElement("div",{className:"results-body"},t)}}]),t}(l.default.Component);t.default=(0,o.connect)(function(e){return{user:e}})(p)},oncg:function(e,t){e.exports=require("react-router-dom")},qViH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r("XHuY")),u=f(r("Do0I")),a=f(r("ekhF")),s=f(r("K0gk")),l=f(r("cDcd")),o=(f(r("rf6O")),r("h74D")),c=r("oncg"),i=r("sEls");function f(e){return e&&e.__esModule?e:{default:e}}r("QscH");var p=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchMoviesById(this.props.match.params.id)}},{key:"render",value:function(){var e=this;return this.props.user.fullItem.filmData?l.default.createElement("div",null,l.default.createElement(c.Link,{to:"/search/"+this.props.user.inputValue,onClick:function(){e.props.returnToMainPage(),e.props.fetchMovies(e.props.user.sort,e.props.user.search,e.props.user.inputValue)}},l.default.createElement("button",{className:"btn return-button cl-red bg-white"},"SEARCH")),l.default.createElement("div",{className:"full-film-item"},l.default.createElement("img",{src:this.props.user.fullItem.filmData.poster_path}),l.default.createElement("div",{className:"full-film-info"},l.default.createElement("div",{className:"title-and-rating"},l.default.createElement("p",{className:"title"},this.props.user.fullItem.filmData.title),!!this.props.user.fullItem.filmData.vote_average&&l.default.createElement("p",{className:"rating"},this.props.user.fullItem.filmData.vote_average)),l.default.createElement("p",null,this.props.user.fullItem.filmData.tagline),l.default.createElement("p",{className:"year-and-time"},l.default.createElement("span",{className:"year"},this.props.user.fullItem.filmData.release_date.slice(0,4)),this.props.user.fullItem.filmData.runtime&&l.default.createElement("span",null,this.props.user.fullItem.filmData.runtime," min")),l.default.createElement("p",{className:"description"},this.props.user.fullItem.filmData.overview)))):null}}]),t}(l.default.Component),d={fetchMoviesById:i.fetchMoviesById,returnToMainPage:i.returnToMainPage,fetchMovies:i.fetchMovies};t.default=(0,o.connect)(function(e){return{user:e}},d)(p)},r0vR:function(e,t){},rKB8:function(e,t){e.exports=require("redux")},rf6O:function(e,t){e.exports=require("prop-types")},sEls:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.switchSortAsyncAction=t.fetchMoviesById=t.fetchMoviesByGenres=t.fetchMovies=t.switchSearch=t.searchHandler=t.resetInputValue=t.updateInputValue=t.returnToMainPage=t.fullFilmLoad=t.getMoviesByGenresAction=t.switchSort=t.setSearchURL=t.setEmptyResults=void 0;var n,u=r("sHvq"),a=(n=u)&&n.__esModule?n:{default:n};t.getMovie=y,t.watchFetchMovies=I,t.getMoviesByGenres=T,t.watchFetchMoviesByGenres=O,t.fullLoad=N,t.watchFetchMoviesById=g,t.switchSortAction=A,t.watchSwitchSort=C;var s=r("9IwD"),l=r("RmXt");var o=a.default.mark(y),c=a.default.mark(I),i=a.default.mark(T),f=a.default.mark(O),p=a.default.mark(N),d=a.default.mark(g),h=a.default.mark(A),m=a.default.mark(C),E=(t.setEmptyResults=function(){return{type:s.ACTIONS.SET_EMPTY_RESULTS}},t.setSearchURL=function(e){return{type:s.ACTIONS.SET_SEARCH_URL,searchURL:e}},t.switchSort=function(e,t){return{type:s.ACTIONS.SWITCH_SORT,sort:e,results:t}}),_=t.getMoviesByGenresAction=function(e){return{type:s.ACTIONS.GET_MOVIES_BY_GENRES,results:e}},v=t.fullFilmLoad=function(e){return{type:s.ACTIONS.FULL_FILM_LOAD,filmData:e}},S=(t.returnToMainPage=function(){return{type:s.ACTIONS.RETURN_TO_MAIN_PAGE}},t.updateInputValue=function(e){return{type:s.ACTIONS.UPDATE_INPUT_VALUE,value:e}},t.resetInputValue=function(){return{type:s.ACTIONS.RESET_INPUT_VALUE}},t.searchHandler=function(e,t,r,n){return{type:s.ACTIONS.SEARCH,results:e,sortBy:t,searchBy:r,input:n}});t.switchSearch=function(e){return{type:s.ACTIONS.SWITCH_SEARCH,search:e}},t.fetchMovies=function(e,t,r){return{type:s.ACTIONS.FETCH_MOVIES,payload:{sort:e,search:t,inputValue:r}}},t.fetchMoviesByGenres=function(e){return{type:s.ACTIONS.FETCH_MOVIES_BY_GENRES,payload:{genre:e}}},t.fetchMoviesById=function(e){return{type:s.ACTIONS.FETCH_MOVIES_BY_ID,payload:{id:e}}},t.switchSortAsyncAction=function(e,t,r,n){return{type:s.ACTIONS.SWITCH_SORT_ASYNC_ACTION,payload:{sort:e,stateSort:t,inputValue:r,search:n}}};function y(e){var t,r,n,u,c,i,f;return a.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=t.sort,n=t.search,u=t.inputValue,c=u||"",a.next=4,(0,l.call)(fetch,"http://react-cdp-api.herokuapp.com/movies?sortBy="+s.SORT[r]+"&sortOrder=desc&search="+c+"&searchBy="+s.SEARCH[n]+"&limit=12");case 4:return i=a.sent,a.next=7,i.json();case 7:return f=a.sent,a.next=10,(0,l.put)(S(f,r,n,c));case 10:case"end":return a.stop()}},o,this)}function I(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeLatest)(s.ACTIONS.FETCH_MOVIES,y);case 2:case"end":return e.stop()}},c,this)}function T(e){var t,r,n;return a.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.genre,u.next=3,(0,l.call)(fetch,"http://react-cdp-api.herokuapp.com/movies?search="+t+"&searchBy=genres&limit=12");case 3:return r=u.sent,u.next=6,r.json();case 6:return n=u.sent,u.next=9,(0,l.put)(_(n));case 9:case"end":return u.stop()}},i,this)}function O(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeLatest)(s.ACTIONS.FETCH_MOVIES_BY_GENRES,T);case 2:case"end":return e.stop()}},f,this)}function N(e){var t,r;return a.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.payload.id,n.next=3,(0,l.call)(fetch,"http://react-cdp-api.herokuapp.com/movies/"+id);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.next=9,(0,l.put)(v(r));case 9:return n.next=11,(0,l.put)(T(r.genres[0]));case 11:case"end":return n.stop()}},p,this)}function g(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeLatest)(s.ACTIONS.FETCH_MOVIES_BY_ID,N);case 2:case"end":return e.stop()}},d,this)}function A(e){var t,r,n,u,o,c;return a.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=t.sort,t.stateSort,n=t.inputValue,u=t.search,a.next=3,(0,l.call)(fetch,"http://react-cdp-api.herokuapp.com/movies?sortBy="+s.SORT[r]+"&sortOrder=desc&search="+n+"&searchBy="+s.SEARCH[u]+"&limit=12");case 3:return o=a.sent,a.next=6,o.json();case 6:return c=a.sent,a.next=9,(0,l.put)(E(r,c));case 9:case"end":return a.stop()}},h,this)}function C(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeLatest)(s.ACTIONS.SWITCH_SORT_ASYNC_ACTION,A);case 2:case"end":return e.stop()}},m,this)}},sHvq:function(e,t){e.exports=require("babel-runtime/regenerator")},tVhS:function(e,t){},uniI:function(e,t){},w4Nm:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=y(r("XHuY")),u=y(r("Do0I")),a=y(r("ekhF")),s=y(r("K0gk")),l=y(r("cDcd")),o=r("h74D"),c=r("oncg"),i=r("MGin"),f=r("9ClG"),p=r("btvy"),d=(r("xETq"),y(r("AP5x"))),h=y(r("ZOS/")),m=y(r("jM2D")),E=y(r("ZOKb")),_=y(r("qViH")),v=r("Df/l");r("r0vR"),r("QTde");r("9IwD");var S=r("sEls");function y(e){return e&&e.__esModule?e:{default:e}}var I=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Router,r=(e.location,e.context,e.store);return l.default.createElement(o.Provider,{store:r},l.default.createElement(t,null,l.default.createElement(i.Switch,null,l.default.createElement(c.Route,{exact:!0,path:"/not_found",component:v.NotFoundPage}),l.default.createElement(c.Route,{path:"/"},l.default.createElement("div",{className:"core-page"},l.default.createElement(i.Switch,null,l.default.createElement(c.Route,{path:"/film/:id"},this.props.user.results[0]?null:l.default.createElement(d.default,null,l.default.createElement(c.Route,{path:"/film/:id",component:_.default}))),l.default.createElement(c.Route,{path:"/search/:inputValue",component:d.default}),l.default.createElement(c.Route,{path:"/",component:d.default}),l.default.createElement(i.Redirect,{to:"/not_found"})),l.default.createElement(h.default,null),l.default.createElement(i.Switch,null,l.default.createElement(c.Route,{exact:!0,path:"/",component:E.default}),l.default.createElement(c.Route,{path:"/film/:id",component:m.default}),l.default.createElement(c.Route,{path:"/search/:inputValue",component:m.default}),l.default.createElement(i.Redirect,{to:"/not_found"})),l.default.createElement(p.Footer,null))))))}}]),t}(l.default.Component),T={setEmptyResults:S.setEmptyResults,returnToMainPage:S.returnToMainPage};t.default=(0,f.hot)(e)((0,o.connect)(function(e){return{user:e}},T)(I))}).call(this,r("YuTi")(e))},xEDz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r("/0OW"));t.reducer=i,t.configureStore=function(e){var t=(0,u.createStore)(i,e,(0,u.applyMiddleware)(f));return f.run(o.rootSaga),t.runSaga=function(){return f.run(o.rootSaga)},t.close=function(){return t.dispatch(a.END)},t};var u=r("rKB8"),a=(c(r("T8f9")),c(r("ZSx1")),r("1fKG")),s=c(a),l=r("9IwD"),o=r("YiDQ");function c(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.INITIAL_STATE,t=arguments[1];switch(t.type){case l.ACTIONS.SET_EMPTY_RESULTS:e=(0,n.default)({},e,{results:{data:[]},fullItem:{isActive:!1},resultsCount:0,inputValue:""});break;case l.ACTIONS.RETURN_TO_MAIN_PAGE:e=(0,n.default)({},e,{fullItem:{isActive:!1}});break;case l.ACTIONS.UPDATE_INPUT_VALUE:e=(0,n.default)({},e,{inputValue:t.value});break;case l.ACTIONS.RESET_INPUT_VALUE:e=(0,n.default)({},e,{inputValue:""});break;case l.ACTIONS.SEARCH:e=(0,n.default)({},e,{inputValue:t.input,search:t.searchBy,sort:t.sortBy,results:t.results,resultsCount:t.results.total,searchInfo:{search:e.search,value:e.inputValue}});break;case l.ACTIONS.SWITCH_SEARCH:e=(0,n.default)({},e,{search:t.search});break;case l.ACTIONS.SWITCH_SORT:e=(0,n.default)({},e,{sort:t.sort,results:t.results});break;case l.ACTIONS.GET_MOVIES_BY_GENRES:e=(0,n.default)({},e,{results:t.results,resultsCount:t.results.total});break;case l.ACTIONS.FULL_FILM_LOAD:e=(0,n.default)({},e,{fullItem:{isActive:!0,filmData:t.filmData}});break;case l.ACTIONS.SET_SEARCH_URL:e=(0,n.default)({},e,{searchURL:t.searchURL})}return e}var f=(0,s.default)()},xETq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Nextflixroulette=void 0;var n=u(r("cDcd"));u(r("faye"));function u(e){return e&&e.__esModule?e:{default:e}}r("yPxQ");t.Nextflixroulette=function(){return n.default.createElement("p",{className:"logo"},"netflixroulette")}},yPxQ:function(e,t){}});
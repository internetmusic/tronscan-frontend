(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return a.default.findDOMNode(e)};var r,a=(r=n(14))&&r.__esModule?r:{default:r}},1667:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var r=n(713),a=n.n(r),o=n(17),i=n.n(o),l=n(94),s=n.n(l),c=n(216),u=n.n(c),d=n(2),p=n.n(d),f=n(36),m=n(6),h=n(18),b=n(16),y=n(24),g=n(23),v=n(25),_=n(0),E=n.n(_),w=n(4),O=n(19);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(y.a)(this,Object(g.a)(t).call(this,e))).loadDatas=Object(m.a)(p.a.mark(function e(){var t,r,a,o,i=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:40,a=n.state.filter,e.next=5,O.a.getTokens(x({sort:"rank",limit:r,start:(t-1)*r},a));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),n.handleTableChange=function(e,t,r){var a=x({},n.state.pagination);a.current=e.current,n.setState({pagination:a}),n.fetch(x({pageSize:e.pageSize,page:e.current,sortField:r.field,sortOrder:r.order},t))},n.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.setState({loading:!0}),n.props.onPageChange?(n.props.onPageChange(e.page,e.pageSize),n.setState({loading:!1})):n.setState({loading:!1})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onReset=function(){n.setState({searchText:""},function(){n.onSearch()})},n.onSearch=function(){var e=n.props.tableData,t=n.state.searchText,r=new RegExp(t,"gi");n.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(r)?x({},e,{name:E.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,n){return e.toLowerCase()===t.toLowerCase()?E.a.createElement("span",{key:n,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},n.setColumn=function(e){function t(e){return function(t,n){return t[e]>n[e]?1:t[e]<n[e]?-1:0}}var r={filterDropdown:E.a.createElement("div",{className:"custom-filter-dropdown"},E.a.createElement(u.a,{ref:function(e){return n.searchInput=e},placeholder:"Search name",value:n.state.searchText,onChange:n.onInputChange,onPressEnter:n.onSearch})," ",E.a.createElement(s.a,{type:"primary",onClick:n.onSearch}," ",Object(w.c)("search")," ")," ",E.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:n.onReset}," ",Object(w.c)("reset")," ")," "),filterIcon:E.a.createElement(i.a,{type:"filter",style:{color:n.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:n.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){n.setState({filterDropdownVisible:e},function(){n.searchInput&&n.searchInput.focus()})}},a=[],o=!0,l=!1,c=void 0;try{for(var d,p=e[Symbol.iterator]();!(o=(d=p.next()).done);o=!0){var f=d.value;if(f.sorter&&!f.filterDropdown){var m={sorter:t(f.key)};a.push(x({},f,{},m))}else if(!f.sorter&&f.filterDropdown){var h=x({},r);a.push(x({},f,{},h))}else if(f.sorter&&f.filterDropdown){var b=x({sorter:t(f.key)},r);a.push(x({},f,{},b))}else a.push(f)}}catch(y){l=!0,c=y}finally{try{o||null==p.return||p.return()}finally{if(l)throw c}}return a},n.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,n=this.state.pagination;e.current!=t&&this.setState({pagination:x({},n,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.loading,r=e.data,o=e.column,i=e.bordered,l=e.pagination,s=void 0===l||l,c=e.scroll,u=e.Footer,d=e.locale,p=e.addr,f=e.transfers,m=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),h=s?x({total:t},this.state.pagination):s;return E.a.createElement("div",null," ",p?E.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==r.length?"table_pos_addr_data":"")+("address"==f?" transfer-mt-100":" transfer-pt-100")},E.a.createElement(a.a,{bordered:i,columns:m,rowKey:function(e,t){return t},dataSource:r,locale:d,scroll:c,footer:u,pagination:h,loading:n,onChange:this.handleTableChange})," "):E.a.createElement("div",{className:"card table_pos"},E.a.createElement(a.a,{bordered:i,columns:m,footer:u,rowKey:function(e,t){return t},dataSource:r,locale:d,scroll:c,pagination:h,loading:n,onChange:this.handleTableChange})," ")," ")}}]),t}(_.Component)},1668:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1687:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=a,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){a(t,e)})}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&!e.prototype.render)return!1;return!0}},1688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return a.default.Children.forEach(e,function(e){t.push(e)}),t};var r,a=(r=n(0))&&r.__esModule?r:{default:r}},3484:function(e,t,n){"use strict";n.r(t);var r=n(1579),a=n.n(r),o=n(291),i=n.n(o),l=n(43),s=n.n(l),c=n(2),u=n.n(c),d=n(6),p=n(18),f=n(16),m=n(24),h=n(23),b=n(25),y=n(0),g=n.n(y),v=n(35),_=n(427),E=n(12),w=(n(55),n(4)),O=n(26),k=n(428),x=(n(96),n(1667)),C=n(5),S=n(20),j=n(57),A=n(101),M=n(73),D=n(15),N=n.n(D),P=function(e){function t(e){var r;Object(p.a)(this,t),(r=Object(m.a)(this,Object(h.a)(t).call(this,e))).loadPage=Object(d.a)(u.a.mark(function e(){var t,n,a,o,i,l,s=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:20,a=r.state.filter,r.props.intl,r.setState({loading:!0}),!a.name){e.next=12;break}return e.next=8,N.a.get(C.e+"/api/token_trc20?sort=issue_time&limit="+n+"&start="+(t-1)*n+"&name="+a.name);case 8:o=e.sent,i=o.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,N.a.get(C.e+"/api/token_trc20?sort=issue_time&limit="+n+"&start="+(t-1)*n);case 14:o=e.sent,i=o.data.total;case 16:return(l=o.data.trc20_tokens).map(function(e,r){e.index=r+1+(t-1)*n}),r.setState({loading:!1,tokens:l,total:i,page:t}),r.addIEOClass(),e.abrupt("return",i);case 21:case"end":return e.stop()}},e)})),r.setSearch=function(){var e=s()(Object(k.a)(r.props.location,"search"));e.length>0?r.setState({filter:{name:"%25".concat(e,"%25")}}):r.setState({filter:{}})},r.addIEOClass=function(){var e=r.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},r.onChange=function(e,t){r.loadPage(e,t)},r.customizedColumn=function(){var e=r.props.intl,t=r.state.contractAddress,o=n(1668);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,n,r){return g.a.createElement("span",null,n.contract_address==t?g.a.createElement("div",null,g.a.createElement("span",{className:"starbeat"},g.a.createElement("i",{className:"fas fa-star"})," "),g.a.createElement("span",{className:"star-tip"})):g.a.createElement("span",null,e-1))}},{title:i()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return g.a.createElement("div",{className:"table-imgtext"},t.icon_url?g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=o}})):g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:o})),g.a.createElement("div",null,g.a.createElement("h5",null,g.a.createElement(O.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),g.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,n){return g.a.createElement("div",null,t.price&&t.total_supply_with_decimals?g.a.createElement("div",null,g.a.createElement(E.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):g.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t,n){a()(e);return g.a.createElement("div",null,t.price?g.a.createElement("div",null,g.a.createElement(E.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):g.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t,n){return null===e&&(e=0),g.a.createElement("div",null,g.a.createElement(E.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t,n){return g.a.createElement(O.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},r.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var o=s()(Object(k.a)(e.location,"search"));return o.length>0&&(r.state.filter.name="%25".concat(o,"%25")),r}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state,n=t.tokens,r=(t.alert,t.loading),a=t.total,o=t.contractAddress,i=this.props,l=(i.match,i.intl),s=this.customizedColumn(),c=l.formatMessage({id:"part_total"})+" "+a+" "+l.formatMessage({id:"part_pass"});return g.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},r&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(A.b,null)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 table_pos"},a?g.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},c," \xa0\xa0",g.a.createElement(M.a,{to:"/exchange/trc20"},Object(w.b)("Trade_on_Poloni DEX"),">")):"",g.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},g.a.createElement("button",{className:"btn btn-danger"},Object(w.c)("application_entry"))),g.a.createElement(x.a,{bordered:!0,loading:r,column:s,data:n,total:a,contractAddress:o,onPageChange:function(t,n){e.loadPage(t,n)}}))))}}]),t}(y.Component);var R={loadTokens:_.b,login:S.v,reloadWallet:j.c};t.default=Object(v.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},R)(Object(E.h)(P))},424:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(0)),d=c(n(1562)),p=c(n(292)),f=c(n(716)),m=n(1687),h=c(n(421)),b=n(1688),y=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=o(this,i(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target.getBoundingClientRect(),a=r.width,o=r.height,i=Math.floor(a),l=Math.floor(o);if(e.state.width!==i||e.state.height!==l){var s={width:i,height:l};e.setState(s),n&&n(s)}},e.setChildNode=function(t){e.childNode=t},e}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,u.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=d.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new h.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=p.default(e);if(t.length>1)f.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return f.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(u.isValidElement(n)&&b.supportRef(n)){var r=n.ref;t[0]=u.cloneElement(n,{ref:m.composeRef(r,this.setChildNode)})}return 1===t.length?t[0]:t.map(function(e,t){return!u.isValidElement(e)||"key"in e&&null!==e.key?e:u.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})})}}])&&a(n.prototype,r),s&&a(n,s),t}();y.displayName="ResizeObserver",t.default=y}}]);
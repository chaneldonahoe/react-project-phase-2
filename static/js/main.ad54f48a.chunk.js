(this["webpackJsonpdad-joke-app"]=this["webpackJsonpdad-joke-app"]||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},51:function(e,t,s){},53:function(e,t,s){},75:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(15),a=s.n(c),i=(s(48),s(6)),o=s(7),r=s(9),j=s(8),l=(s(49),s(2)),d=s(19),h=s.n(d),u=s(24),b=s(22),p=s(20),O=(s(51),s(1)),k=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"getColor",value:function(){return this.props.votes>=10?"#386641":this.props.votes>0?"#6a994e":0===this.props.votes?"black":"#bc4749"}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"Joke",children:[Object(O.jsx)("div",{className:"Joke-text",children:this.props.text}),Object(O.jsxs)("div",{className:"Joke-buttons",children:[Object(O.jsxs)("span",{id:"Joke-votes",style:{borderColor:this.getColor(),color:this.getColor()},children:[this.props.votes," ",Object(O.jsx)("br",{})," votes"]}),Object(O.jsx)("i",{className:"far fa-thumbs-up",onClick:this.props.upvote}),Object(O.jsx)("i",{className:"far fa-thumbs-down",onClick:this.props.downvote})]})]})}}]),s}(n.Component),x=(s(53),s(23)),v=s.n(x),m=s(88),f=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoading:!0},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleSort=n.handleSort.bind(Object(p.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,s,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numJokesToGet)){e.next=8;break}return e.next=4,v.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 4:s=e.sent,t.push({id:Object(m.a)(),text:s.data.joke,votes:0}),e.next=1;break;case 8:this.setState((function(e){return{jokes:[].concat(Object(u.a)(e.jokes),t),loading:!1}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(n.state.jokes))}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sortJokes",value:function(){var e=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));this.setState({jokes:e}),console.log(e)}},{key:"handleVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(l.a)(Object(l.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"handleSort",value:function(){this.sortJokes()}},{key:"render",value:function(){var e=this;return this.state.loading?Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)("h1",{children:"Loading..."}),Object(O.jsx)("img",{className:"spinner",src:"https://i.imgur.com/PB7qLQs.png",alt:"loading spinner"})]}):Object(O.jsxs)("div",{className:"JokeList",children:[Object(O.jsxs)("div",{className:"JokeList-sidebar",children:[Object(O.jsxs)("h1",{className:"JokeList-title shake JokeList-shake",children:["Dad ",Object(O.jsx)("span",{children:"Jokes"})]}),Object(O.jsx)("p",{className:"JokeList-shake JokeList-emoji",children:"\ud83d\ude02"}),Object(O.jsx)("button",{className:"JokeList-getmore JokeList-shake ",onClick:this.handleClick,children:"Generate Jokes"}),Object(O.jsx)("button",{className:"JokeList-getmore JokeList-shake",onClick:this.handleSort,children:"Sort Jokes"})]}),Object(O.jsx)("div",{className:"JokeList-jokes",children:this.state.jokes.map((function(t){return Object(O.jsx)(k,{votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}},t.id)}))})]})}}]),s}(n.Component);f.defaultProps={numJokesToGet:1};var g=f,N=s(4),y=s(87),w=(s(72),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"HomePage",id:"Accordian",children:Object(O.jsxs)(y.a,{defaultActiveKey:"0",children:[Object(O.jsxs)(y.a.Item,{eventKey:"0",children:[Object(O.jsx)(y.a.Header,{children:"React Competencies"}),Object(O.jsxs)(y.a.Body,{children:[Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:"Key Competencies acquired and demonstrated in the React Phase 2 Project."})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"JSX structure"}),Object(O.jsx)("li",{children:"Component creation and the storing, updating and manipulation of data"}),Object(O.jsx)("li",{children:"Hooks, Context and Routing"}),Object(O.jsx)("li",{children:"Compoment Lifecycle and Methods"}),Object(O.jsx)("li",{children:"Ideation and desgining of projects from start to finish"})]})]})]}),Object(O.jsxs)(y.a.Item,{eventKey:"1",children:[Object(O.jsx)(y.a.Header,{children:"Dad Jokes Project"}),Object(O.jsxs)(y.a.Body,{children:[Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:"The project is a simple fetch and rate tool using simple up and down votes of jokes"})]}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:"Key features in the 'Dad Jokes' project."})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Fetch data from api using the axios library"}),Object(O.jsx)("li",{children:"Like/Dislike functionality of individual componenets"}),Object(O.jsx)("li",{children:"Sort Functionality ranked by number of votes"}),Object(O.jsx)("li",{children:"Use of client-side routing using JSON server and local Storage"}),Object(O.jsx)("li",{children:"Responsive design for use on various devices"}),Object(O.jsx)("li",{children:"Basic CSS styling and some animation using keyframes"})]})]})]})]})})}}]),s}(n.Component)),J=s(16),C=(s(75),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"Navbar",children:[Object(O.jsx)(J.b,{exact:!0,activeClassName:"Navbar-active",to:"/react-project-phase-2/",children:"Home"}),Object(O.jsx)(J.b,{exact:!0,activeClassName:"Navbar-active",to:"/react-project-phase-2/joke-list",children:" Dad Jokes"}),Object(O.jsx)(J.b,{exact:!0,activeClassName:"Navbar-active",to:"/react-project-phase-2/news-list",children:" News List"})]})}}]),s}(n.Component)),L=(s(82),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"pageRedirect",value:function(){setTimeout((function(){window.location="/react-project-phase-2/"}),5e3)}},{key:"componentDidMount",value:function(){this.pageRedirect()}},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"Error404",children:[Object(O.jsx)("div",{className:"error",children:"404"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{className:"info",children:["File not found...",Object(O.jsx)("br",{}),"You will be redirected shortly"]}),Object(O.jsx)("img",{src:"http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif",className:"gif",alt:"404"})]})}}]),s}(n.Component)),S=(s(83),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{})}}]),s}(n.Component)),D=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={news:[],isLoading:!0},n}return Object(o.a)(s,[{key:"getNews",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,s,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numNewsToGet)){e.next=8;break}return e.next=4,v.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=152739ec892148ed8d2495c65dfb92d3",{headers:{Accept:"application/json"}});case 4:s=e.sent,t.push({id:Object(m.a)(),text:s.articles.title,votes:0}),e.next=1;break;case 8:this.setState((function(e){return{news:[].concat(Object(u.a)(e.news),t),loading:!1}}),(function(){return window.localStorage.setItem("news",JSON.stringify(n.state.news))}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)("h1",{children:"Loading..."}),Object(O.jsx)("img",{className:"spinner",src:"https://i.imgur.com/PB7qLQs.png",alt:"loading spinner"})]}):Object(O.jsxs)("div",{className:"NewsList",children:[Object(O.jsxs)("div",{className:"NewsList-sidebar",children:[Object(O.jsxs)("h1",{className:"NewsList-title shake NewsList-shake",children:["Dad ",Object(O.jsx)("span",{children:"Jokes"})]}),Object(O.jsx)("p",{className:"NewsList-shake NewsList-emoji",children:"\ud83d\ude02"}),Object(O.jsx)("button",{className:"NewsList-getmore NewsList-shake ",onClick:this.handleClick,children:"Generate Jokes"}),Object(O.jsx)("button",{className:"NewsList-getmore NewsList-shake",onClick:this.handleSort,children:"Sort Jokes"})]}),Object(O.jsx)("div",{className:"NewsList-jokes",children:this.state.jokes.map((function(t){return Object(O.jsx)(S,{votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}},t.id)}))})]})}}]),s}(n.Component);D.defaultProps={numNewsToGet:1};var I=D,P=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(C,{}),Object(O.jsxs)(N.c,{children:[Object(O.jsx)(N.a,{exact:!0,path:"/react-project-phase-2/",component:w}),Object(O.jsx)(N.a,{exact:!0,path:"/react-project-phase-2/joke-list",component:g}),Object(O.jsx)(N.a,{exact:!0,path:"/react-project-phase-2/news",component:I}),Object(O.jsx)(N.a,{component:L})]})]})}}]),s}(n.Component);a.a.render(Object(O.jsx)(J.a,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.ad54f48a.chunk.js.map
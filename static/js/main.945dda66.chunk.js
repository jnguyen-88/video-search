(window.webpackJsonpvideos=window.webpackJsonpvideos||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),r=a.n(c),s=a(8),l=a.n(s),o=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),E=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"user-nav"},i.a.createElement("div",{className:"user-nav__icon-box"},i.a.createElement("i",{class:"camera icon",id:"icon-camera"})),i.a.createElement("div",{className:"user-nav__icon-box"},i.a.createElement("i",{class:"copy outline icon",id:"icon-outline"})),i.a.createElement("div",{className:"user-nav__icon-box"},i.a.createElement("i",{className:"bell icon",id:"icon-bell"}),i.a.createElement("span",{className:"user-notification"},"7")),i.a.createElement("div",{className:"user-nav__icon-box"},i.a.createElement("img",{src:"img/user-1.jpg",alt:"user-1",className:"user-photo"}),i.a.createElement("span",{className:"user-name"},"Justin")))}}]),t}(i.a.Component),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"logo"},i.a.createElement("h3",null,"WatchTube"),i.a.createElement("i",{class:"play icon"})),i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"ui field icon input"},i.a.createElement("i",{className:"search icon"}),i.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.term,onChange:this.onInputChange}))),i.a.createElement(E,null))}}]),t}(i.a.Component),h=a(17),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,key:"AIzaSyCjQrWoXXd7doFOEI-kNctRjXGvDcADhAI"}}),N=(a(42),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),y=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(N,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("funny cat video")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container flex"},i.a.createElement(b,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(g,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(y,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);r.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.945dda66.chunk.js.map
(window.webpackJsonpsweppweb=window.webpackJsonpsweppweb||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),s=n.n(o),r=(n(14),n(3)),i=n(4),l=n(7),u=n(5),m=n(8),p=n(6),d=n.n(p),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={eventdata:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()("https://api.meetup.com/swedencpp/events?&sign=true&photo-host=public&scroll=next_upcoming&page=1&status=upcoming",null,function(t,n){t?(console.error(t.message),e.setState({error:t})):(console.log(n),e.setState({eventdata:n.data[0]}))})}},{key:"render",value:function(){var e=this.state.eventdata;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"comingevents"},"Upcoming events in Stockholm"),c.a.createElement("h2",{className:"eventtitle"},e.name),c.a.createElement("p",{className:"eventdatetime"},e.local_date," ",e.local_time))}}]),t}(a.Component);s.a.render(c.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.98a25691.chunk.js.map
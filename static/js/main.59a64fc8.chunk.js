(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(11),c=a.n(s),r=a(67),o=a(13),l=a(43),u=a.n(l),d=a(163),j=a(170),h=a(88),b=a(81),m=a(24),p=a(17),_=a(36),f=a(18),x=a(19),O=a(165),g=a(161),k=a(3),v=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={inputValue:"",wrongValue:"",errorText:"",error:!1},e.onButtonClick=function(){e.setState({inputValue:""});""===e.state.inputValue?e.setState({error:!0,errorText:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"}):e.props.items.some((function(t){return t.value===e.state.inputValue}))?e.setState({error:!0,errorText:"\u0414\u0430\u043d\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u0431\u044b\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0440\u0430\u043d\u0435\u0435"}):(e.setState({errorText:"",error:!1}),e.props.onClickAdd(e.state.inputValue))},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this,t=this.props;t.onClickAdd,t.items;return Object(k.jsxs)("div",{children:[Object(k.jsx)(O.a,{label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",error:this.state.error,helperText:this.state.errorText,fullWidth:!0,margin:"normal",value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})}}),Object(k.jsx)(g.a,{variant:"contained",fullWidth:!0,onClick:this.onButtonClick,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),a}(i.a.Component),N=a(27),w=a(70),C=a.n(w),L=a(167),A=a(171),D=a(162),y=a(83),S=a.n(y),P=a(71),T=a.n(P),F=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,n=t.isDone,i=t.onClickDone,s=t.id,c=t.onClickDelete;return Object(k.jsxs)("div",{className:C()((e={},Object(N.a)(e,T.a.item,!0),Object(N.a)(e,T.a.done,n),e)),children:[Object(k.jsxs)("span",{children:[Object(k.jsx)(L.a,{checked:n,color:"default",inputProps:{"aria-label":"checkbox with default color"},onClick:function(){return i(s)}}),a]}),Object(k.jsx)(A.a,{title:"Delete",children:Object(k.jsx)(D.a,{"aria-label":"delete",onClick:function(){return c(s)},children:Object(k.jsx)(S.a,{})})})]})}}]),a}(i.a.Component),U=a(72),B=a.n(U),I=function(e){var t=e.items,a=e.onClickDone,n=e.onClickDelete,i=e.onClickSelected;return Object(k.jsx)("ul",{className:B.a.lists,children:t.map((function(e){return Object(k.jsx)("li",{className:B.a.list,children:Object(k.jsx)(F,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:n,onClickSelected:i})},e.value)}))})},V=a(57),J=a.n(V),W=function(e){var t=e.count,a=e.countUndone,n=e.countDone,i=e.onClickFilter;return Object(k.jsxs)("footer",{className:J.a.footer,children:[Object(k.jsxs)(g.a,{onClick:function(){return i("all")},className:J.a.filter,children:["\u0432\u0441\u0435: ",t]}),Object(k.jsxs)(g.a,{onClick:function(){return i("active")},className:J.a.filter,children:["\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435: ",a]}),Object(k.jsxs)(g.a,{onClick:function(){return i("finished")},className:J.a.filter,children:["\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e: ",n]})]})},q=a(73),E=a.n(q),M=function(){var e,t=[{value:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",isDone:!1,id:1},{value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0438\u043b\u0438",isDone:!1,id:2}],a=2,i=Object(n.useState)(t),s=Object(m.a)(i,2),c=s[0],r=s[1],o=Object(n.useState)(a),l=Object(m.a)(o,2),u=l[0],j=l[1],p=Object(n.useState)("all"),_=Object(m.a)(p,2),f=_[0],x=_[1],O=c.filter((function(e){return!1===e.isDone})).length,g=c.filter((function(e){return!0===e.isDone})).length;switch(f){case"active":e=c.filter((function(e){return!e.isDone}));break;case"finished":e=c.filter((function(e){return e.isDone}));break;default:e=c}return Object(k.jsxs)(d.a,{variant:"outlined",className:E.a.cardContent,children:[Object(k.jsx)("h1",{className:E.a.title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),Object(k.jsx)(v,{onClickAdd:function(e){var t=[].concat(Object(h.a)(c),[{value:e,isDone:!1,id:u+1}]);r(t),j((function(e){return e+1}))}}),Object(k.jsx)(I,{items:e,onClickDone:function(e){var t=c.map((function(t){var a=Object(b.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));r(t)},onClickDelete:function(e){var t=c.filter((function(t){return t.id!==e}));r(t),j((function(e){return e-1}))}}),Object(k.jsx)(W,{filtered:f,onClickFilter:function(e){return x(e)},count:u,countDone:g,countUndone:O})]})},H=a(7),z=a.n(H),G=a(164),K=a(87),R=a(166),Y=a.p+"static/media/vk.a3958c41.png",Z=a.p+"static/media/github.f1102180.png",Q=a.p+"static/media/instagram.e80dd0bf.png",X=a.p+"static/media/telegram.f677c7c2.png",$=a.p+"static/media/email.792ef22f.png",ee=new K.a,te=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,repoList:[],userLogin:[],userUrl:[],avatarUrl:[],userBio:[],fetchFailure:!1,userName:"LenaMakeeva",pageLimit:2,countPages:0,currentPage:0,repoPageList:[]},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this;ee.repos.listForUser({username:this.state.userName}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1}),e.setState({repoPageList:e.state.repoList.slice(0,e.state.pageLimit),countPages:Math.ceil(e.state.repoList.length/e.state.pageLimit)})})).catch((function(t){e.setState({fetchFailure:!0,error:t,errorText:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a\u2026",isLoading:!1})})),ee.users.getByUsername({username:this.state.userName}).then((function(t){e.setState({userLogin:t.data.login,userUrl:t.data.html_url,avatarUrl:t.data.avatar_url,userBio:t.data.bio,isLoading:!1})})).catch((function(t){e.setState({fetchFailure:!0,error:t,errorText:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a\u2026",isLoading:!1})}))}},{key:"onChangePagination",value:function(e,t){this.setState({currentPage:t,repoPageList:this.state.repoList.slice((t-1)*this.state.pageLimit,(t-1)*this.state.pageLimit+this.state.pageLimit)})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.repoList,n=e.fetchFailure,i=e.userLogin,s=e.avatarUrl,c=e.countPages,r=e.repoPageList;return Object(k.jsx)("div",{className:z.a.card,children:t?Object(k.jsx)(G.a,{color:"inherit"}):n?Object(k.jsx)(d.a,{className:z.a.error,children:Object(k.jsx)("h1",{className:z.a.title,children:this.state.errorText})}):Object(k.jsxs)(d.a,{className:z.a.wrap,children:[Object(k.jsxs)("div",{className:z.a.info,children:[Object(k.jsxs)("div",{className:z.a.about,children:[Object(k.jsx)("h1",{className:z.a.title,children:i}),Object(k.jsx)("p",{className:z.a.bio,children:this.state.userBio}),Object(k.jsxs)("div",{className:z.a.contacts,children:[Object(k.jsxs)("div",{className:z.a.email,children:[Object(k.jsx)("img",{src:$,alt:"mail_icon",className:z.a.logo}),Object(k.jsx)("a",{href:"mailto: len16730637@yandex.ru",underline:"none",className:z.a.link,children:"len16730637@yandex.ru"})]}),Object(k.jsxs)("div",{className:z.a.telegram,children:[Object(k.jsx)("img",{src:X,alt:"telegram_icon",className:z.a.logo}),Object(k.jsx)("a",{href:"tg://resolvedomain=lena_makeevaa",color:"textSecondary",underline:"none",className:z.a.link,children:"+7 929 518 52 21"})]})]})]}),Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:z.a.avatar,src:s})})]}),Object(k.jsxs)("div",{className:z.a.works,children:[Object(k.jsx)("h3",{className:z.a.title,children:"\u041c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b:"}),Object(k.jsx)("p",{className:z.a.works_description,children:"\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"https://lenamakeeva.github.io/WayUp/",className:z.a.link,target:"_blank",children:"\u0412\u0435\u0440\u0441\u0442\u043a\u0430 \u043e\u0442 WayUp"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"https://lenamakeeva.github.io/Final-Axion-Cite/",className:z.a.link,target:"_blank",children:"\u0412\u0435\u0440\u0441\u0442\u043a\u0430 \u043e\u0442 WHS \u0441\u0430\u0439\u0442\u0430 Axion"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"https://lenamakeeva.github.io/Final-Card-Game/",className:z.a.link,target:"_blank",children:'\u0418\u0433\u0440\u0430 "\u041d\u0430\u0439\u0434\u0438 \u0411\u0430\u0433"'})})]}),Object(k.jsxs)("div",{className:z.a.repos,children:[Object(k.jsx)("h3",{className:z.a.title,children:"\u041c\u043e\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438:"}),0===a.length&&Object(k.jsx)("p",{className:z.a.message,children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432:("}),a.length>0&&Object(k.jsx)("ul",{className:z.a.list,children:r.map((function(e){return Object(k.jsxs)("li",{className:z.a.list_item,children:[Object(k.jsx)("a",{href:e.html_url,className:z.a.link,target:"_blank",children:e.name}),Object(k.jsx)("p",{className:z.a.repo_description,children:e.description}),Object(k.jsxs)("span",{className:z.a.updated,children:["updated ",new Date(e.updated_at).toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"})]})]},e.id)}))})]}),Object(k.jsx)("div",{className:z.a.pagination,children:Object(k.jsx)(R.a,{count:c,variant:"outlined",onChange:this.onChangePagination.bind(this)})}),Object(k.jsxs)("div",{className:z.a.socialNetworks,children:[Object(k.jsx)("a",{href:"https://github.com/LenaMakeeva",target:"_blank",children:Object(k.jsx)("img",{src:Z,alt:"github",className:z.a.socialNetwork})}),Object(k.jsx)("a",{href:"http://vk.com/id20358623",target:"_blank",children:Object(k.jsx)("img",{src:Y,alt:"vkontakte",className:z.a.socialNetwork})}),Object(k.jsx)("a",{href:"https://www.instagram.com/lena_makeevaa",target:"_blank",children:Object(k.jsx)("img",{src:Q,alt:"instagram",className:z.a.socialNetwork})}),Object(k.jsxs)("div",{className:"styles.remark",children:["Icons made by ",Object(k.jsx)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect",children:"Pixel perfect"})," from ",Object(k.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})]})})}}]),a}(i.a.Component),ae=a(169),ne=function(){return Object(k.jsx)(r.a,{children:Object(k.jsxs)("div",{className:u.a.wrap,children:[Object(k.jsx)(d.a,{className:u.a.sidebar,children:Object(k.jsxs)(ae.a,{className:u.a.menuList,children:[Object(k.jsx)(r.b,{to:"/",className:u.a.link,children:Object(k.jsx)(j.a,{children:"\u041e\u0431\u043e \u043c\u043d\u0435"})}),Object(k.jsx)(r.b,{to:"/Todo",className:u.a.link,children:Object(k.jsx)(j.a,{children:"\u0414\u0435\u043b\u0430"})})]})}),Object(k.jsxs)(d.a,{variant:"outlined",className:u.a.content,children:[Object(k.jsx)(o.a,{path:"/",exact:!0,component:te}),Object(k.jsx)(o.a,{path:"/Todo",component:M})]})]})})};c.a.render(Object(k.jsx)(ne,{}),document.getElementById("root"))},43:function(e,t,a){e.exports={wrap:"App_wrap__1qLyI",content:"App_content__3G5Jd",title:"App_title__kiJrr",sidebar:"App_sidebar__3eYYh",link:"App_link__3llaI",menuList:"App_menuList__ZzOy4"}},57:function(e,t,a){e.exports={footer:"Footer_footer__CgPvZ",count:"Footer_count__sfidp",filter:"Footer_filter__2crn-"}},7:function(e,t,a){e.exports={wrap:"About_wrap__2712W",title:"About_title__2fsxN",info:"About_info__3JCvo",about:"About_about__1CqRg",contacts:"About_contacts__Hz2ew",avatar:"About_avatar__3HBI4",works:"About_works__2tO1u",works_description:"About_works_description__1CeoU",link:"About_link___eJcr",list:"About_list__ns4Wb",list_item:"About_list_item__QouAP",repo_description:"About_repo_description__3mq5q",updated:"About_updated__1E0mO",pagination:"About_pagination__1LE7r",card:"About_card__3edBl",logo:"About_logo__3hAKS",socialNetwork:"About_socialNetwork__2vhp-",socialNetworks:"About_socialNetworks__3I08i"}},71:function(e,t,a){e.exports={item:"Item_item__8NS6X",done:"Item_done__okh4i"}},72:function(e,t,a){e.exports={lists:"ItemList_lists__3KTTf",list:"ItemList_list__1fwJB"}},73:function(e,t,a){e.exports={cardContent:"Todo_cardContent__1sNEO",title:"Todo_title__3RisA"}}},[[121,1,2]]]);
//# sourceMappingURL=main.59a64fc8.chunk.js.map
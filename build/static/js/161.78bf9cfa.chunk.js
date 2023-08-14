"use strict";(self.webpackChunkreact_gblt=self.webpackChunkreact_gblt||[]).push([[161],{1391:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(2791),o=t(6579),l=(t(8741),t(1354)),r=function(){var e=(0,o.T)(),n=(0,o.C)(l.lD);return{quizList:n.quizCollectionList,editQuiz:n.editCollection,getQuizCollectionList:(0,i.useCallback)((function(){e(l.eI.getQuizCollectionList())}),[e]),getQuizCollection:(0,i.useCallback)((function(n){e(l.eI.getQuizCollection(n))}),[e]),updateQuizCollection:(0,i.useCallback)((function(n){e(l.eI.updateQuizCollection(n))}),[e]),deleteQuizCollection:(0,i.useCallback)((function(n){e(l.eI.deleteQuizCollection(n))}),[e])}}},7887:function(e,n,t){var i=t(890),o=(t(2791),t(184));n.Z=function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:e.title})})}},7161:function(e,n,t){t.r(n),t.d(n,{default:function(){return te}});var i=t(9230),o=t(9439),l=t(1413),r=t(4942),c=t(4834),a=t(4663),u=t(890),s=t(3768),d=t(3400),h=t(4554),f=t(6890),p=t(5855),x=t(3994),g=t(9174),v=t(720),m=t(9218),Z=t(1889),j=t(5422),b=t(9891),C=t(3382),k=t(5527),z=t(9281),I=t(9836),w=t(6812),y=t(7630),P=t(2065),S=t(5573),E=t(2791),A=t(8687),Q=t(7689),L=t(8537),q=t(6530),T=function(e){return void 0===e||null===e};function R(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function D(e,n){return"desc"===e?function(e,t){return R(e,t,n)}:function(e,t){return-R(e,t,n)}}function F(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t.map((function(e){return e[0]}))}var M=t(6579),B=t(1391),O=t(1354),N=t(4259),_=t(184),G=(0,y.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,P.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,P.Fq)(n.palette.common.white,.25)},marginRight:n.spacing(2),marginLeft:0,width:"100%"},n.breakpoints.up("sm"),{width:"auto"})})),U=(0,y.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),W=(0,y.ZP)(c.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,r.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("md"),{width:"20ch"})}}));var $=[{id:"name",label:"Name",sortable:!0,align:"left"},{id:"updateTime",label:"Update Time",sortable:!0,align:"left"},{id:"noQuiz",label:"Number of Quiz",sortable:!0,align:"left"},{id:"action",label:"Actions",sortable:!1,align:"right"}],X="desc",H="updateTime",J=Number.MAX_SAFE_INTEGER,K=[Number.MAX_SAFE_INTEGER],V=function(e){var n=e.numSelected,t=(0,B.Z)().updateQuizCollection,i=(0,E.useCallback)((function(e){null===e||void 0===e||e.stopPropagation(),t(N.UW)}),[t]);return(0,_.jsx)(a.Z,{sx:(0,l.Z)({pl:{sm:2},pr:{xs:1,sm:1}},n>0&&{bgcolor:function(e){return(0,P.Fq)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:n>0?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(u.Z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}),(0,_.jsx)(s.Z,{title:"Delete",children:(0,_.jsx)(d.Z,{children:(0,_.jsx)(L.Z.DeleteIcon,{})})})]}):(0,_.jsxs)(h.Z,{display:"flex",sx:{flex:"1 1 100%"},justifyContent:"space-between",children:[(0,_.jsxs)(G,{children:[(0,_.jsx)(U,{children:(0,_.jsx)(L.Z.SearchIcon,{})}),(0,_.jsx)(W,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),(0,_.jsx)(s.Z,{title:"Add",children:(0,_.jsx)(d.Z,{onClick:i,children:(0,_.jsx)(L.Z.AddIcon,{})})})]})})},Y=function(e){var n=e.onSelectAllClick,t=e.order,i=e.orderBy,o=e.numSelected,l=e.rowCount,r=e.onRequestSort;return(0,_.jsx)(f.Z,{children:(0,_.jsxs)(p.Z,{children:[(0,_.jsx)(x.Z,{padding:"checkbox",children:(0,_.jsx)(g.Z,{color:"primary",indeterminate:o>0&&o<l,checked:l>0&&o===l,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),$.map((function(e){return(0,_.jsx)(x.Z,{sortDirection:i===e.id&&t,align:e.align,children:e.sortable?(0,_.jsxs)(v.Z,{active:i===e.id,direction:i===e.id?t:"asc",onClick:(n=e.id,function(e){r(e,n)}),children:[e.label,i===e.id?(0,_.jsx)(h.Z,{component:"span",sx:S.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id);var n}))]})})},ee=(0,A.$j)((function(e){return{quizCollectionList:e.quizArchive.quizCollectionList,editCollection:e.quizArchive.editCollection,addCollection:e.quizArchive.addCollection,setAddCollection:O.eI.setAddCollection,authData:e.authentication.authData,isLoading:e.global.isLoading}}))((function(e){(0,i.$G)().t;var n=e.addCollection,t=e.setAddCollection,r=e.editCollection,c=e.quizCollectionList,a=e.isLoading,u=(0,Q.useNavigate)(),f=(0,M.T)(),v=(0,B.Z)(),y=v.getQuizCollectionList,P=v.updateQuizCollection,S=v.deleteQuizCollection,A=(0,E.useRef)([]),R=(0,E.useState)(X),O=(0,o.Z)(R,2),G=O[0],U=O[1],W=(0,E.useState)(H),$=(0,o.Z)(W,2),ee=$[0],ne=$[1],te=(0,E.useState)([]),ie=(0,o.Z)(te,2),oe=ie[0],le=ie[1],re=(0,E.useState)(0),ce=(0,o.Z)(re,2),ae=ce[0],ue=ce[1],se=(0,E.useState)(null),de=(0,o.Z)(se,2),he=de[0],fe=de[1],pe=(0,E.useState)(J),xe=(0,o.Z)(pe,2),ge=xe[0],ve=xe[1],me=(0,E.useState)([]),Ze=(0,o.Z)(me,2),je=Ze[0],be=Ze[1],Ce=(0,E.useState)(null),ke=(0,o.Z)(Ce,2),ze=ke[0],Ie=ke[1],we=Boolean(ze),ye=(0,E.useState)(null),Pe=(0,o.Z)(ye,2),Se=Pe[0],Ee=Pe[1],Ae=Boolean(Se),Qe=(0,E.useState)(null),Le=(0,o.Z)(Qe,2),qe=Le[0],Te=Le[1],Re=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===e||void 0===e||e.stopPropagation(),Te(n),Ie(null==e?e:e.currentTarget)},De=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===e||void 0===e||e.stopPropagation(),Te(n),Ee(null==e?e:e.currentTarget)},Fe=(0,E.useCallback)((function(){Te(null),Ie(null),Ee(null)}),[]);(0,E.useEffect)((function(){y()}),[r,y]),(0,E.useEffect)((function(){if(c.success&&c.collections){A.current=c.collections.map((function(e){return function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:null!==(n=e.eId)&&void 0!==n?n:-1,noQuiz:e.quizzes.length,name:e.name,updateTime:e.updatedAt?new Date(e.updatedAt.toString()):new Date,action:t}}(e)}));var e=F(A.current,D(X,H));e=e.slice(0*J,0*J+J),fe(e)}}),[c,A]),(0,E.useEffect)((function(){c.success&&c.collections&&be((function(e){return c.collections.map((function(n,t){return e[t]}))}))}),[c]),(0,E.useEffect)((function(){n.eId&&(f(t(N.UW)),u("/archive/edit/".concat(n.eId)))}),[n.eId,f,u,t]);var Me=(0,E.useCallback)((function(e,n){ue(n);var t=F(A.current,D(G,ee)).slice(n*ge,n*ge+ge);fe(t)}),[G,ee,ge,A]),Be=(0,E.useCallback)((function(e){var n=parseInt(e.target.value,10);ve(n),ue(0);var t=F(A.current,D(G,ee)).slice(0*n,0*n+n);fe(t)}),[G,ee,A]),Oe=(0,E.useCallback)((function(e,n){var t=ee===n&&"asc"===G?"desc":"asc";U(t),ne(n);var i=F(A.current,D(t,n)).slice(ae*ge,ae*ge+ge);fe(i)}),[G,ee,ae,ge,A]),Ne=(0,E.useCallback)((function(e){if(!he)return null;var n=c.collections.find((function(n){return n.eId===he[e].id}));if(console.log(e,he[e]),console.log(n),!n)return null;var t=c.collections.indexOf(n);return console.log(t),t}),[c.collections,he]),_e=(0,E.useCallback)((function(e,n){be((function(t){var i,o=null!==(i=null===t||void 0===t?void 0:t.map((function(e){return e})))&&void 0!==i?i:null;return o&&(o[e]=n),o}))}),[]),Ge=function(e,n){return he?je&&!T(je[n])?(0,_.jsxs)(h.Z,{display:"flex",children:[(0,_.jsx)(m.Z,{type:"text",required:!0,value:je[n],onClick:function(e){return null===e||void 0===e?void 0:e.stopPropagation()},onChange:function(e){_e(n,e.target.value)},variant:"outlined",multiline:!0,maxRows:12,sx:{input:{color:"white",height:"100%",border:"none"},"& .MuiInputBase-root,.MuiInputBase-root:hover":{height:"100%",backgroundColor:"#00000055",color:"white","& > fieldset":{borderColor:"#E0E3E755 !important",borderWidth:1}}},style:{width:"100%"}}),(0,_.jsx)(s.Z,{title:"Save",children:(0,_.jsx)(d.Z,{onClick:function(e){return function(e,n){null===e||void 0===e||e.stopPropagation();var t=Ne(n);if(null!==t){var i=(0,l.Z)((0,l.Z)({},c.collections[t]),{},{name:je[n]});P(i),_e(n,null)}}(e,n)},children:(0,_.jsx)(L.Z.SaveIcon,{})})})]}):(0,_.jsx)("div",{children:he[n].name}):(0,_.jsx)(_.Fragment,{})},Ue=function(e,n){return(0,_.jsxs)(Z.ZP,{container:!0,justifyContent:"right",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(d.Z,{"aria-controls":we&&qe===n?"edit-menu":void 0,"aria-haspopup":"true","aria-expanded":we&&qe===n?"true":void 0,onClick:function(e){return Re(e,n)},children:(0,_.jsx)(L.Z.UpdateIcon,{})}),(0,_.jsxs)(j.Z,{id:"edit-menu",anchorEl:ze,open:we&&qe===n,onClose:function(){return Re(null)},MenuListProps:{"aria-labelledby":"basic-button"},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,_.jsxs)(b.Z,{onClick:function(e){return function(e,n){null===e||void 0===e||e.stopPropagation();var t=he&&!T(he[n].name)?he[n].name:"";_e(n,T(je[n])?t:null),Fe()}(e,n)},children:[(0,_.jsx)(L.Z.EditIcon,{}),(0,_.jsx)("div",{style:{width:"0.5rem"}}),"Edit Field"]}),(0,_.jsx)("div",{style:{height:"0.5rem"}}),(0,_.jsxs)(b.Z,{onClick:function(e){return function(e,n){null===e||void 0===e||e.stopPropagation();var t=Ne(n);null!==t&&(u("/archive/edit/".concat(c.collections[t].eId)),Fe())}(e,n)},children:[(0,_.jsx)(L.Z.InfoIcon,{}),(0,_.jsx)("div",{style:{width:"0.5rem"}}),"Details Edit"]})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(d.Z,{"aria-controls":Ae&&qe===n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":Ae&&qe===n?"true":void 0,onClick:function(e){return De(e,n)},children:(0,_.jsx)(L.Z.MoreHorizIcon,{})}),(0,_.jsx)(j.Z,{id:"basic-menu",anchorEl:Se,open:Ae&&qe===n,onClose:function(){return De(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:(0,_.jsx)(s.Z,{title:"Delete",children:(0,_.jsx)(d.Z,{onClick:function(e){return function(e,n){null===e||void 0===e||e.stopPropagation();var t=Ne(n);null!==t&&(S(c.collections[t]),Fe())}(e,n)},children:(0,_.jsx)(L.Z.DeleteIcon,{})})})})]})]})},We=(0,_.jsx)(C.Z,{children:he?he.map((function(e,n){var t,i=(t=e.id,-1!==oe.indexOf(t)),o="enhanced-table-checkbox-".concat(n);return(0,_.jsxs)(p.Z,{hover:!0,onClick:function(n){return function(e,n){if(!Ae&&!we){var t=oe.indexOf(n),i=[];-1===t?i=i.concat(oe,n):0===t?i=i.concat(oe.slice(1)):t===oe.length-1?i=i.concat(oe.slice(0,-1)):t>0&&(i=i.concat(oe.slice(0,t),oe.slice(t+1))),le(i)}}(0,e.id)},role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,sx:{cursor:"pointer"},children:[(0,_.jsx)(x.Z,{padding:"checkbox",children:(0,_.jsx)(g.Z,{color:"primary",checked:i,inputProps:{"aria-labelledby":o}})}),(0,_.jsx)(x.Z,{component:"th",id:o,scope:"row",children:Ge(0,n)}),(0,_.jsx)(x.Z,{children:e.updateTime.toISOString()}),(0,_.jsx)(x.Z,{children:e.noQuiz}),(0,_.jsx)(x.Z,{children:Ue(0,n)})]},e.id)})):null});return(0,_.jsxs)(h.Z,{sx:{width:"100%"},display:"flex",justifyContent:"center",children:[(0,_.jsxs)(k.Z,{sx:{width:"80%",mb:2},style:{backgroundColor:"inherit"},children:[(0,_.jsx)(V,{numSelected:oe.length}),(0,_.jsx)(z.Z,{children:(0,_.jsxs)(I.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"small",children:[(0,_.jsx)(Y,{numSelected:oe.length,order:G,orderBy:ee,onSelectAllClick:function(e){if(e.target.checked){var n=A.current.map((function(e){return e.id}));le(n)}else le([])},onRequestSort:Oe,rowCount:A.current.length}),We]})}),(0,_.jsx)(w.Z,{rowsPerPageOptions:K,component:"div",count:A.current.length,rowsPerPage:ge,page:ae,onPageChange:Me,onRowsPerPageChange:Be,sx:{".MuiTablePagination-displayedRows":{marginRight:"1rem"},".MuiTablePagination-actions":{display:"none"}}})]}),(0,_.jsx)(q.Z,{isLoading:a})]})})),ne=t(7887),te=function(){var e=(0,i.$G)().t;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(ne.Z,{title:e("archive.title")}),(0,_.jsx)(ee,{})]})}}}]);
//# sourceMappingURL=161.78bf9cfa.chunk.js.map
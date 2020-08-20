(this["webpackJsonpgraph-path-finding"]=this["webpackJsonpgraph-path-finding"]||[]).push([[0],{70:function(a,e,t){a.exports=t(88)},80:function(a,e,t){},81:function(a,e,t){},83:function(a,e,t){},84:function(a,e,t){},85:function(a,e,t){},86:function(a,e,t){},87:function(a,e,t){},88:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(10),u=(t(80),t(81),t(127)),o=t(122),s=t(128),d=t(125),g=t(123),p=t(40),h=t(8);var f=t(5);var v={"Prim's":function(a,e){var t=a.start,n=a.goal,r=a.vertices,l=a.walls,i=(a.edges,e.firstRun),c=e.queue,u=e.running,o=e.extraParams,s=e.weighted,d=[],g=[];if(i)r.forEach((function(e){e!==t&&e!==n&&(s||(a.data[e].value=Math.floor(100*Math.random())),d.push(e))})),e.firstRun=!1,e.queue=[t];else{if(0===c.length){if(void 0===o.leftOuts){var p=l.filter((function(e){return a.data[e].neighbors.reduce((function(a,e){return a&&l.includes(e)}),!0)}));p.sort((function(e,t){return a.data[e].value-a.data[t].value})),o={leftOuts:p}}var f=o.leftOuts;if(void 0===f||0===f.length)return{running:!1,deltaWalls:[],deltaHoles:[],generationData:e};var v=f.pop();c.push(v);var D=a.data[v].neighbors.filter((function(a){return l.includes(a)&&!c.includes(a)}));D.length>0&&c.push(D[Math.floor(Math.random()*D.length)]),o={leftOuts:f}}var b=c.pop(),m=a.data[b].neighbors;m=(m=m.filter((function(a){return!c.includes(a)&&l.includes(a)}))).filter((function(e){return a.data[e].neighbors.reduce((function(e,t){return t===n||(t===b?e:!(c.includes(t)||!l.includes(t))&&(!(a.data[t].cornerNeighbors.filter((function(a){return!l.includes(a)})).length>1)&&e))}),!0)})),e.queue=[].concat(Object(h.a)(c.filter((function(a){return a!==b}))),Object(h.a)(m)),e.queue.sort((function(e,t){return a.data[e].value-a.data[t].value})),g=[].concat(Object(h.a)(g),[b])}return{running:u,deltaHoles:g,deltaWalls:d,generationData:e,extraParams:o}},Random:function(a,e){var t=a.start,n=a.goal,r=a.vertices,l=[];return r.forEach((function(a){Math.random()>.7&&a!==t&&a!==n&&l.push(a)})),{running:!1,deltaHoles:[],deltaWalls:l,generationData:e}},DFS:function(a,e){var t=a.start,n=a.goal,r=a.vertices,l=a.walls,i=e,c=i.firstRun,u=i.queue,o=i.running,s=[],d=[];if(c)r.forEach((function(a){a!==t&&a!==n&&s.push(a)})),e.firstRun=!1,e.queue=[t];else{var g,p,v;do{if(0===u.length)return{running:!1,deltaWalls:[],deltaHoles:[],generationData:e};v=u.shift(),p=(g=a.data[v].neighbors).filter((function(a){return l.includes(a)}))}while(g.length-p.length>1&&!g.includes(n));g.sort((function(a,e){return.75-Math.random()})),u=[].concat(Object(h.a)(g),Object(h.a)(u.filter((function(a){return!g.includes(a)})))),d=[].concat(Object(h.a)(d),[v]),e=Object(f.a)(Object(f.a)({},e),{},{queue:u})}return{running:o,deltaHoles:d,deltaWalls:s,generationData:e}}},D={BFS:function(a){var e=a.edges,t=a.queue,n=a.visited,r=a.parentDict,l=a.running,i=a.goal;if(0===t.length)return a;var c=Object(h.a)(t);t=[];for(var u=function(){var a=c.pop(),u=e[a];if((u=u.filter((function(a){return!n.includes(a)&&!t.includes(a)})).sort((function(a,e){return a-e}))).forEach((function(e){return r[e]=a})),t=[].concat(Object(h.a)(u),Object(h.a)(t)),n.push(a),u.includes(i)){var o=u[u.indexOf(i)];r[o]=a,l=!1}};c.length>0;)u();return{edges:e,queue:t,visited:n,parentDict:r,running:l,goal:i}},DFS:function(a){var e=a.edges,t=a.queue,n=a.visited,r=a.parentDict,l=a.running,i=a.goal;if(0===t.length)return Object(f.a)(Object(f.a)({},a),{},{running:!1});var c=t.shift(),u=e[c],o=(u=u.filter((function(a){return!n.includes(a)}))).filter((function(a){return t.includes(a)}));if(o.length>0&&(t=t.filter((function(a){return!o.includes(a)}))),u.forEach((function(a){return r[a]=c})),t=[].concat(Object(h.a)(u),Object(h.a)(t)),n.push(c),u.includes(i)){var s=u[u.indexOf(i)];r[s]=c,l=!1}return{edges:e,queue:t,visited:n,parentDict:r,running:l,goal:i}},Dijkstra:function(a){var e=a.edges,t=a.queue,n=a.visited,r=a.parentDict,l=a.running,i=a.goal,c=a.extraParams,u=a.data;if(0===t.length)return a;var o=t.shift();if(o===i)return Object(f.a)(Object(f.a)({},a),{},{running:!1});n.push(o);var s=e[o];return s.forEach((function(a){if(!n.includes(a)){var e=c[o]|u[o].value,t=u[a].value;(void 0===c[a]||c[a]>e+t)&&(r[a]=o,c[a]=e+t)}})),s.forEach((function(a){n.includes(a)||t.includes(a)||t.push(a)})),t.sort((function(a,e){return c[a]-c[e]})),{edges:e,queue:t,visited:n,parentDict:r,running:l,goal:i}}};function b(){var a=[];for(var e in v)a.push(e);return a}function m(){var a=[];for(var e in D)a.push(e);return a}function O(a,e){for(var t=[],n={},r=0;r<e;r++)for(var l=0;l<a;l++){var i=a*r+l;t.push(i),void 0===n[i]&&(n[i]=[]),i-1>=0&&(i-1)%a<=i%a&&(n[i].push(i-1),n[i-1].push(i)),i-a>=0&&(n[i].push(i-a),n[i-a].push(i))}return{vertices:t,edges:n}}var j=function(a,e){var t=Object(f.a)({},a);return t[e].forEach((function(a){t[a]=t[a].filter((function(a){return a!==e}))})),t[e]=[],t},y=function(a,e,t,n){var r=Object(f.a)({},a);return e.forEach((function(a){t.includes(a)||(r[a]=[].concat(Object(h.a)(r[a]),[n]))})),r[n]=Object(h.a)(e.filter((function(a){return!t.includes(a)}))),r},E={step:function(a){if(!a.paused)do{if(0===a.graphData.queue.length&&(a.graphData.running=!1),a.graphData.drawPath){if(!(a.graphData.queue.length>0))return;var e=a.graphData.queue.pop();if("visited"===a.graphData.data[e].type&&(a.graphData.data[e].type="path"),a.skip)continue;return}var t=(0,D[a.algorithms.solve])(a.graphData);if(t.running||(t=Object(f.a)(Object(f.a)({},t),{},{running:!0,drawPath:!0})),a.graphData=Object(f.a)(Object(f.a)({},a.graphData),t),t.drawPath&&(a.graphData.queue=[],-1!==a.graphData.goal&&void 0!==a.graphData.parentDict[a.graphData.goal]))for(var n=a.graphData.goal;void 0!==a.graphData.parentDict[n];)a.graphData.queue=[].concat(Object(h.a)(a.graphData.queue),[n]),n=a.graphData.parentDict[n];a.graphData.visited.forEach((function(e){""===a.graphData.data[e].type&&(a.graphData.data[e].type="visited")}))}while(a.skip&&(a.graphData.running||a.graphData.drawPath))},placeStart:function(a,e){var t=e.payload,n=a.graphData.data[t];a.graphData.start=t,a.graphData.data[t]=Object(f.a)(Object(f.a)({},n),{},{type:"start"})},placeEnd:function(a,e){var t=e.payload,n=a.graphData.data[t];a.graphData.goal=t,a.graphData.data[t]=Object(f.a)(Object(f.a)({},n),{},{type:"end"})},placeNode:function(a,e){var t=e.payload.id,n=t.type,r=t.id,l=a.graphData.data[r];a[n]=r,a.graphData.data[r]=Object(f.a)(Object(f.a)({},l),{},{type:n})},solve:function(a){a.generationData.running=!1,a.graphData=Object(f.a)(Object(f.a)({},a.graphData),{},{clean:!1,running:!0,extraParams:{}})},generate:function(a,e){a.generationData.weighted=e.payload,a.weightCheck=e.payload,a.graphData.clean=!1,a.generationData=Object(f.a)(Object(f.a)({},a.generationData),{},{extraParams:{},running:!0,firstRun:!0,queue:[a.graphData.start]})},setIntervalId:function(a,e){var t=e.payload,n=t.type,r=t.value;console.log("Set interval - ",n,r),a.intervalId[n]=r},pause:function(a){a.paused=!0},reset:function(a){console.log("reset"),void 0!==a.selectedTile&&(a.graphData.data[a.selectedTile].type=a.graphData.data[a.selectedTile].type.replace("-s",""),a.selectedTile=void 0),a.graphData.clean||a.graphData.vertices.forEach((function(e){var t=a.graphData.data[e].type;a.generationData.weighted||(a.graphData.data[e].value=0),"start"!==t&&"end"!==t&&"wall"!==t&&(a.graphData.data[e]=Object(f.a)(Object(f.a)({},a.graphData.data[e]),{},{type:""}))})),clearInterval(a.intervalId.solve),clearInterval(a.intervalId.generate),a.intervalId={solve:void 0,generate:void 0},a.graphData=Object(f.a)(Object(f.a)({},a.graphData),{},{clean:!0,running:!1,drawPath:!1,queue:[a.graphData.start],visited:[],parentDict:{}}),a.generationData=Object(f.a)(Object(f.a)({},a.generationData),{},{running:!1,queue:[],firstRun:!0,extraParams:{}}),a.paused=!1},setWeightCheck:function(a,e){a.weightCheck=e.payload},toggleSkip:function(a){a.skip=!a.skip},resume:function(a){a.paused=!1},clear:function(a){a.weightCheck=!1,a.generationData.weighted=!1,a.graphData.walls=[],a.graphData.vertices.forEach((function(e){a.graphData.edges[e]=a.graphData.data[e].neighbors,a.graphData.data[e].value=-1,"start"!==a.graphData.data[e].type&&"end"!==a.graphData.data[e].type&&(a.graphData.data[e].type="")}))},updateSpeed:function(a,e){a.solveSpeed=e.payload},selectTile:function(a,e){if(!a.graphData.running&&!a.generationData.running){var t=e.payload;void 0!==a.selectedTile&&(a.graphData.data[a.selectedTile].type=a.graphData.data[a.selectedTile].type.replace("-s",""),a.selectedTile=void 0),t===a.graphData.start?a.graphData.data[e.payload].type="start-s":a.graphData.data[e.payload].type="end-s",a.selectedTile=t}},wallATile:function(a,e){""===a.graphData.data[e.payload].type&&void 0===a.selectedTile&&(a.graphData.walls.push(e.payload),a.graphData.data[e.payload].type="wall",a.graphData.edges=Object(f.a)({},j(a.graphData.edges,e.payload)),a.graphData.clean=!1)},removeAWall:function(a,e){var t=a.graphData.data[e.payload],n=t.type,r=t.neighbors;"wall"===n&&void 0===a.selectedTile&&(a.graphData.walls=a.graphData.walls.filter((function(a){return a!==e.payload})),a.graphData.data[e.payload].type="",a.graphData.edges=Object(f.a)({},y(a.graphData.edges,r,a.graphData.walls,e.payload)),0===a.graphData.walls.length&&(a.graphData.clean=!0))},toggleWall:function(a,e){var t,n,r=a.graphData.data[e.payload],l=r.type,i=r.neighbors,c=e.payload;("wall"===l?(a.graphData.data[c].type="",a.graphData=Object(f.a)(Object(f.a)({},a.graphData),{},{walls:a.graphData.walls.filter((function(a){return a!==c})),edges:Object(f.a)({},y(a.graphData.edges,i,a.graphData.walls,c))}),0===a.graphData.walls.length&&(a.graphData.clean=!0)):"start"!==l&&"end"!==l&&void 0===a.selectedTile&&(a.graphData.walls.push(c),a.graphData=Object(f.a)(Object(f.a)({},a.graphData),{},{clean:!1,edges:Object(f.a)({},j(a.graphData.edges,c))}),a.graphData.data[c].type="wall"),void 0!==a.selectedTile)&&(a.selectedTile===a.graphData.start?(n=a.graphData.start,a.graphData.start=c,t="start"):(n=a.graphData.goal,a.graphData.goal=c,t="end"),a.graphData.data[c]=Object(f.a)(Object(f.a)({},a.graphData.data[c]),{},{type:t,value:0}),a.graphData.data[n]=Object(f.a)(Object(f.a)({},a.graphData.data[n]),{},{type:"",value:Math.floor(100*Math.random())}),a.selectedTile=void 0)},setAlgorithm:function(a,e){var t,n=e.payload,r=n.value,l=n.type;switch(l){case"solve":t=D;break;default:t=v}void 0!==t[r]&&(a.algorithms[l]=r)},generateMaze:function(a,e){if(!a.paused){var t=function(){a.generationData.weighted&&a.generationData.firstRun&&a.graphData.vertices.forEach((function(e){e!==a.graphData.start&&e!==a.graphData.goal?a.graphData.data[e].value=Math.floor(100*Math.random()):a.graphData.data[e].value=0}));var e=(0,v[a.algorithms.generate])(a.graphData,a.generationData),t=e.deltaWalls,n=e.deltaHoles,r=e.running,l=e.generationData,i=e.extraParams;a.graphData.walls=[].concat(Object(h.a)(a.graphData.walls.filter((function(a){return!n.includes(a)}))),Object(h.a)(t)),t.forEach((function(e){e!==a.graphData.start&&e!==a.graphData.goal&&(a.graphData.data[e].type="wall",a.graphData.edges=Object(f.a)({},j(a.graphData.edges,e)))})),n.forEach((function(e){e!==a.graphData.start&&e!==a.graphData.goal&&(a.graphData.data[e].type="",a.graphData.edges=Object(f.a)({},y(a.graphData.edges,a.graphData.data[e].neighbors,a.graphData.walls,e)))})),a.generationData=Object(f.a)(Object(f.a)({},l),{},{running:r,extraParams:i})};do{t()}while(a.skip&&a.generationData.running)}},updateGraph:function(a,e){var t=e.payload,n=t.vertices,r=t.edges;a.graphData.vertices=n;var l=Math.floor(Math.random()*n.length);a.graphData.start=l,a.graphData.data[l]={type:"start",neighbors:r[l],value:-1},a.graphData.queue=[l],l=Math.floor(Math.random()*n.length),a.graphData.goal=l,a.graphData.data[l]={type:"end",neighbors:r[l],value:-1},a.graphData.goal=l,a.graphData.edges=r,n.forEach((function(e){void 0===a.graphData.data[e]&&(a.graphData.data[e]={type:"",neighbors:r[e],value:-1})})),n.forEach((function(e){var t=a.graphData.data[e].neighbors.reduce((function(e,t){return[].concat(Object(h.a)(e),Object(h.a)(a.graphData.data[t].neighbors))}),[]).sort();t=t.reduce((function(a,e){return a[e]=(a[e]||0)+1,a}),{}),t=Object.keys(t).reduce((function(a,n){return 2===t[n]&&n!=e&&(a=[].concat(Object(h.a)(a),[1*n])),a}),[]);var n=Object(f.a)(Object(f.a)({},a.graphData.data[e]),{},{cornerNeighbors:t});a.graphData.data[e]=n}))}},w=Object(p.b)({name:"graph",initialState:{selectedTile:void 0,weightCheck:!1,skip:!1,graphData:{clean:!0,vertices:[],edges:[],data:{},parentDict:{},visited:[],queue:[],drawPath:!1,goal:-1,start:-1,running:!1,walls:[],extraParams:{},current:void 0},generationData:{weighted:!1,running:!1,queue:[],firstRun:!0,extraParams:{}},solveSpeed:60,start:128,end:-1,paused:!1,intervalId:{solve:void 0,generate:void 0},algorithms:{solve:m()[0],generate:b()[0],solveArr:m()}},reducers:E}),k=w.actions,S=k.step,q=k.solve,I=k.generate,M=k.reset,C=k.pause,T=k.resume,P=k.clear,x=(k.wallATile,k.generateMaze),N=k.placeStart,W=k.updateGraph,R=(k.removeAWall,k.toggleSkip),H=k.setWeightCheck,A=k.updateSpeed,G=k.setIntervalId,z=k.setAlgorithm,B=k.toggleWall,F=k.selectTile,L=w.reducer,J=t(59),V=t.n(J),K=t(48),Q=t.n(K),U=function(a){var e=Object(c.d)((function(a){return a.graph.algorithms.solve})),t=Object(c.d)((function(a){return a.graph.solveSpeed})),n=Object(c.d)((function(a){return a.graph.graphData.running})),l=Object(c.d)((function(a){return a.graph.generationData.running})),i=Object(c.d)((function(a){return a.graph.intervalId.solve}),(function(){return!0})),p=Object(c.c)(),h=function(a,e,t,n){if(clearInterval(n),t)return setInterval((function(){a(S())}),e)}(p,t,n,i);return p(G({type:"solve",value:h})),r.a.createElement("div",{className:"sub-section maze-solvers"},r.a.createElement(o.a,{variant:"outlined"},r.a.createElement(s.a,null,"Solvers"),r.a.createElement(d.a,{disabled:n||l,name:"solvers",id:"solvers",value:e,label:"Solvers",onChange:function(a){p(z({value:a.target.value,type:"solve"}))}},m().map((function(a){return r.a.createElement(u.a,{key:a,value:a},a)})))),r.a.createElement(g.a,{variant:"contained",disabled:n||l,color:"primary",startIcon:r.a.createElement(V.a,null),onClick:function(a){p(M()),p(q())}},"Solve"),r.a.createElement(g.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(Q.a,null),onClick:function(a){p(M())}},"Reset"))},X=t(124),Y=t(126),Z=t(60),$=t.n(Z),_=function(a){var e=Object(c.d)((function(a){return a.graph.algorithms.generate})),t=Object(c.d)((function(a){return a.graph.weightCheck})),n=Object(c.d)((function(a){return a.graph.graphData.running})),l=Object(c.d)((function(a){return a.graph.generationData.running})),i=Object(c.d)((function(a){return a.graph.intervalId.generate}),(function(){return!0})),p=Object(c.c)(),h=function(a,e,t){if(clearInterval(t),e)return setInterval((function(){a(x())}),10)}(p,l,i);return p(G({type:"generate",value:h})),r.a.createElement("div",{className:"sub-section maze-generation"},r.a.createElement(o.a,{variant:"outlined"},r.a.createElement(s.a,null,"Generators"),r.a.createElement(d.a,{name:"generators",disabled:n||l,id:"generators",value:e,label:"Generators",onChange:function(a){p(z({value:a.target.value,type:"generate"}))}},b().map((function(a){return r.a.createElement(u.a,{key:a,value:a},a)})))),r.a.createElement(g.a,{disabled:n||l,variant:"contained",color:"primary",startIcon:r.a.createElement($.a,null),onClick:function(a){p(M()),p(P()),p(I(t))}},"Generate"),r.a.createElement(X.a,{id:"weight-checkbox",control:r.a.createElement(Y.a,{id:"weight-checkbox",value:"weight",checked:t,disabled:l,onChange:function(a,e){return p(H(e))}}),label:"weighted"}))},aa=(t(83),function(a){var e="tile ";switch(a){case"start":return e+"tile-start";case"end":return e+"tile-end";case"start-s":return e+"tile-start selected";case"end-s":return e+"tile-end selected";case"visited":return e+"tile-visited";case"current":return e+"tile-current";case"path":return e+"tile-path";case"wall":return e+"tile-wall";case"current":return e+"tile-current";default:return e}}),ea=function(a){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.graph.graphData.data[a.id]}),(function(a,e){return a.type===e.type&&a.value===e.value})),n=Object(c.d)((function(a){return a.graph.generationData.weighted}),(function(){return!0})),l={width:25,height:25};return r.a.createElement("td",{id:a.id,key:a.id,className:aa(t.type),style:l,onMouseEnter:function(t){1===t.buttons&&e(B(a.id))},onPointerDown:function(n){"start"===t.type||"end"===t.type?e(F(a.id)):e(B(a.id))}},!n||""!==t.type&&"visited"!==t.type||-1===t.value?void 0:t.value)},ta=(t(84),function(){return r.a.createElement("div",{className:"legend-wrapper"},r.a.createElement("ul",{className:"sub-section legend"},r.a.createElement("li",null,r.a.createElement("p",null,"Start"),r.a.createElement("div",{style:{width:25,height:25},className:"tile-start"})),r.a.createElement("li",null,r.a.createElement("p",null,"Goal"),r.a.createElement("div",{style:{width:25,height:25},className:"tile-end"})),r.a.createElement("li",null,r.a.createElement("p",null,"Wall"),r.a.createElement("div",{style:{width:25,height:25},className:"tile-wall"}))))}),na=(t(85),t(89)),ra=t(129),la=t(63),ia=t.n(la),ca=t(62),ua=t.n(ca),oa=t(61),sa=t.n(oa),da=function(a){var e=Object(c.c)(),t=Object(c.d)((function(a){return a.graph.paused})),n=Object(c.d)((function(a){return a.graph.skip})),l=Object(c.d)((function(a){return a.graph.solveSpeed})),i=t?r.a.createElement(sa.a,null):r.a.createElement(ua.a,null);return r.a.createElement("div",{className:"sub-section controls-menu"},r.a.createElement(g.a,{variant:"contained",color:"primary",startIcon:i,onClick:function(a){e(t?T():C())}},t?"Resume":"Pause"),r.a.createElement(g.a,{variant:"contained",startIcon:r.a.createElement(ia.a,null),color:"secondary",onClick:function(a){e(M()),e(P())}},"Clear"),r.a.createElement("div",null,r.a.createElement(na.a,{gutterBottom:!0},"Solve Speed"),r.a.createElement(ra.a,{onChangeCommitted:function(a,t){return e(A(1010-t))},defaultValue:1010-l,step:50,min:500,max:1e3,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",valueLabelFormat:function(a){return 1010-a},marks:!0})),r.a.createElement(X.a,{className:"skip-control",control:r.a.createElement(Y.a,{value:"skip",checked:n,onChange:function(){return e(R())}}),label:"skip animation"}))},ga=function(a){return r.a.createElement("div",{className:"top-menu"},r.a.createElement(_,null),r.a.createElement(U,null),r.a.createElement(da,null))},pa=(t(86),t(45)),ha=t(26),fa=t(65),va=t(64),Da=(t(87),function(a){Object(fa.a)(t,a);var e=Object(va.a)(t);function t(a){var n;return Object(pa.a)(this,t),(n=e.call(this,a)).updateSizes=function(){var a=document.getElementById("graph-area2"),e=a.clientWidth,t=a.clientHeight,r=Math.floor(e/27),l=Math.floor(t/27),i=e/r-2,c=t/l-2;n.setState({graphW:e,graphH:t,columns:r,rows:l,tileW:i,tileH:c}),n.props.onLoad(r,l),n.props.updateGraph(r,l)},n.getTiles=function(){var a=[];n.props.vertices.forEach((function(a){}));for(var e=0;e<Math.floor(n.props.vertices.length/n.state.columns);e++){for(var t=[],l=0;l<Math.floor(n.props.vertices.length/n.state.rows);l++){var i=n.state.columns*e+l;t.push(r.a.createElement(ea,{id:i,key:i}))}a.push(r.a.createElement("tr",{key:"row-"+e},t))}return a},n.state={rows:0,columns:0},n}return Object(ha.a)(t,[{key:"componentDidMount",value:function(){this.updateSizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:"graph-area",id:"graph-area2",onContextMenu:function(a){return a.preventDefault()}},r.a.createElement("table",null,r.a.createElement("tbody",null,this.getTiles())))}}]),t}(n.Component)),ba=Object(c.b)((function(a){return{vertices:a.graph.graphData.vertices}}),(function(a){return{placeStart:function(e){return a(N(e))},updateGraph:function(a,e){W(O(a,e))}}}))(Da),ma=function(){var a=Object(c.c)();return r.a.createElement("div",{className:"App"},r.a.createElement(ga,null),r.a.createElement(ba,{onLoad:function(e,t){return a(W(O(e,t)))}}),r.a.createElement(ta,null))},Oa=Object(p.a)({reducer:{graph:L,middleware:Object(p.c)({immutableCheck:!1,serializableCheck:!1})}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:Oa},r.a.createElement(ma,null))),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.b5df604e.chunk.js.map
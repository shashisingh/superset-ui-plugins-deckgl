(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(802),r=n.n(a),i=n(803),o=n.n(i),s=n(743),l=n(752);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const u={console:console,_:o(),colors:l,d3array:s};function p(e,t,n){const a={},i="SAFE_EVAL_"+Math.floor(1e6*Math.random());a[i]={};const o=i+"="+e,s=c({},u,{},t);Object.keys(s).forEach(e=>{a[e]=s[e]});try{return r.a.runInNewContext(o,a,n),a[i]}catch(e){return()=>e}}},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(743),r=n(746);function i(e,t,n,a){const i=e;let o,s,l=n;return i.js_tooltip&&(l=Object(r.a)(i.js_tooltip)),l&&(o=e=>{e.picked?t({content:l(e),x:e.x,y:e.y}):t(null)}),i.js_onclick_href?s=e=>{const t=Object(r.a)(i.js_onclick_href)(e);window.open(t)}:i.table_filter&&void 0!==a&&(s=e=>a(e.object[i.line_column])),{onClick:s,onHover:o,pickable:Boolean(o)}}const o={p1:.01,p5:.05,p95:.95,p99:.99};function s(e,t){if(void 0===e&&(e="sum"),void 0===t&&(t=null),"count"===e)return e=>e.length;let n;return n=e in o?(n,r)=>{let i;return i=t?n.sort((e,n)=>a.ascending(t(e),t(n))):n.sort(a.ascending),a.quantile(i,o[e],r)}:a[e],t?e=>n(e.map(e=>t(e))):e=>n(e)}},752:function(e,t,n){"use strict";n.r(t),n.d(t,"hexToRGB",(function(){return r}));var a=n(734);function r(e,t){if(void 0===t&&(t=255),!e)return[0,0,0,t];const{r:n,g:r,b:i}=Object(a.b)(e);return[n,r,i,t]}},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),i=n(2),o=n.n(i);const s={label:o.a.string.isRequired,value:o.a.string.isRequired};class l extends r.a.PureComponent{render(){const{label:e,value:t}=this.props;return r.a.createElement("div",null,e,r.a.createElement("strong",null,t))}}l.propTypes=s},756:function(e,t,n){"use strict";var a=n(830),r=n(743);const i=[-90,90],o=[-180,180];function s(e,t,n){let[a,r]=e,[i,o]=t;return void 0===n&&(n=.25),a<r?[a,r]:[Math.max(i,a-n),Math.min(o,r+n)]}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){let{points:n,width:c,height:u,minExtent:p,maxZoom:d,offset:h,padding:f=20}=t;const{bearing:g,pitch:m}=e,b=function(e){const t=s(Object(r.extent)(e,e=>e[1]),i),n=s(Object(r.extent)(e,e=>e[0]),o);return[[n[0],t[0]],[n[1],t[1]]]}(n);try{return l({},Object(a.a)({bounds:b,width:c,height:u,minExtent:p,maxZoom:d,offset:h,padding:f}),{bearing:g,pitch:m})}catch(e){console.error("Could not fit viewport",e)}return e}n.d(t,"a",(function(){return c}))},759:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=n(814),l=n(1131),c=n(804);function u(e){const{tooltip:t}=e;if(null==t)return null;const{x:n,y:i,content:o}=t,s=Object(a.useMemo)(()=>({position:"absolute",top:i+"px",left:n+"px",padding:"8px",margin:"8px",background:"rgba(0, 0, 0, 0.8)",color:"#fff",maxWidth:"300px",fontSize:"12px",zIndex:9,pointerEvents:"none"}),[n,i]);if("string"==typeof o){const e=Object(a.useMemo)(()=>({__html:Object(c.filterXSS)(o,{stripIgnoreTag:!0})}),[o]);return r.a.createElement("div",{style:s},r.a.createElement("div",{dangerouslySetInnerHTML:e}))}return r.a.createElement("div",{style:s},o)}n(805),n(772);n.d(t,"a",(function(){return d}));const p={viewport:o.a.object.isRequired,layers:o.a.array.isRequired,setControlValue:o.a.func,mapStyle:o.a.string,mapboxApiAccessToken:o.a.string.isRequired,children:o.a.node,bottomMargin:o.a.number,width:o.a.number.isRequired,height:o.a.number.isRequired};class d extends r.a.Component{constructor(e){var t,n,a;super(e),a=e=>{this.setState({tooltip:e})},(n="setTooltip")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,this.tick=this.tick.bind(this),this.onViewStateChange=this.onViewStateChange.bind(this),this.state={timer:setInterval(this.tick,250),tooltip:null,viewState:e.viewport}}componentWillUnmount(){clearInterval(this.state.timer)}onViewStateChange(e){let{viewState:t}=e;this.setState({viewState:t,lastUpdate:Date.now()})}tick(){const{lastUpdate:e}=this.state;if(e&&Date.now()-e>250){const e=this.props.setControlValue;e&&e("viewport",this.state.viewState),this.setState({lastUpdate:null})}}layers(){return this.props.layers.some(e=>"function"==typeof e)?this.props.layers.map(e=>"function"==typeof e?e():e):this.props.layers}render(){const{children:e,bottomMargin:t,height:n,width:a}=this.props,{viewState:i,tooltip:o}=this.state,c=n-t,p=this.layers();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"relative",width:a,height:c}},r.a.createElement(l.a,{initWebGLParameters:!0,controller:!0,width:a,height:c,layers:p,viewState:i,onViewStateChange:this.onViewStateChange},r.a.createElement(s.a,{mapStyle:this.props.mapStyle,mapboxApiAccessToken:this.props.mapboxApiAccessToken})),e),r.a.createElement(u,{tooltip:o}))}}d.propTypes=p,d.defaultProps={mapStyle:"light",setControlValue:()=>{},children:null,bottomMargin:0}},761:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=n(792),l=n(759),c=n(712),u=n(765),p=n(762),d=n(752),h=n(763),f=n(746),g=n(756);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{getScale:y}=c.a;const v={formData:o.a.object.isRequired,mapboxApiKey:o.a.string.isRequired,setControlValue:o.a.func.isRequired,viewport:o.a.object.isRequired,getLayer:o.a.func.isRequired,getPoints:o.a.func.isRequired,payload:o.a.object.isRequired,onAddFilter:o.a.func,setTooltip:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired};class w extends r.a.PureComponent{constructor(e){super(e),b(this,"containerRef",r.a.createRef()),b(this,"setTooltip",e=>{this.containerRef.current&&this.containerRef.current.setTooltip(e)}),this.state=this.getStateFromProps(e),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(e){e.payload.form_data!==this.state.formData&&this.setState(m({},this.getStateFromProps(e)))}onValuesChange(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}getStateFromProps(e,t){const n=e.payload.data.features||[],a=n.map(e=>e.__timestamp),r=function(e,t){const n=e.color_picker||{r:0,g:0,b:0,a:1},a=[n.r,n.g,n.b,255*n.a],r=y(e.color_scheme),i={};return t.forEach(t=>{if(null!=t.cat_color&&!i.hasOwnProperty(t.cat_color)){let o;o=e.dimension?Object(d.hexToRGB)(r(t.cat_color),255*n.a):a,i[t.cat_color]={color:o,enabled:!0}}}),i}(e.formData,n);if(t&&e.payload.form_data===t.formData)return m({},t,{categories:r});const i=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",{start:o,end:s,getStep:l,values:c,disabled:u}=Object(h.a)(a,i),{width:p,height:f,formData:b}=e;let{viewport:v}=e;return b.autozoom&&(v=Object(g.a)(v,{width:p,height:f,points:e.getPoints(n)})),{start:o,end:s,getStep:l,values:c,disabled:u,viewport:v,selected:[],lastClick:0,formData:e.payload.form_data,categories:r}}getLayers(e){const{getLayer:t,payload:n,formData:a,onAddFilter:r,setTooltip:i}=this.props;let o=n.data.features?[...n.data.features]:[];if(o=this.addColor(o,a),a.js_data_mutator){o=Object(f.a)(a.js_data_mutator)(o)}o=e[0]===e[1]||e[1]===this.end?o.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<=e[1]):o.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<e[1]);const s=this.state.categories;return a.dimension&&(o=o.filter(e=>s[e.cat_color]&&s[e.cat_color].enabled)),[t(a,m({},n,{data:m({},n.data,{features:o})}),r,i)]}addColor(e,t){const n=t.color_picker||{r:0,g:0,b:0,a:1},a=y(t.color_scheme);return e.map(e=>{let r;return t.dimension?(r=Object(d.hexToRGB)(a(e.cat_color),255*n.a),m({},e,{color:r})):e})}toggleCategory(e){const t=this.state.categories[e],n=m({},this.state.categories,{[e]:m({},t,{enabled:!t.enabled})});Object.values(n).every(e=>!e.enabled)&&Object.values(n).forEach(e=>{e.enabled=!0}),this.setState({categories:n})}showSingleCategory(e){const t=m({},this.state.categories);Object.values(t).forEach(e=>{e.enabled=!1}),t[e].enabled=!0,this.setState({categories:t})}render(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(u.a,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},r.a.createElement(p.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}w.propTypes=v,n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return j}));const C={formData:o.a.object.isRequired,payload:o.a.object.isRequired,setControlValue:o.a.func.isRequired,viewport:o.a.object.isRequired,onAddFilter:o.a.func,setTooltip:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired},O={onAddFilter(){},setTooltip(){}};function x(e,t){class n extends r.a.PureComponent{constructor(e){super(e);const{width:n,height:a,formData:r}=e;let{viewport:i}=e;r.autozoom&&(i=Object(g.a)(i,{width:n,height:a,points:t(e.payload.data.features)})),this.state={viewport:i,layer:this.computeLayer(e)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(e){const t=S({},e.formData,{viewport:null}),n=S({},this.props.formData,{viewport:null});Object(s.isEqual)(t,n)&&e.payload===this.props.payload||this.setState({layer:this.computeLayer(e)})}onViewportChange(e){this.setState({viewport:e})}computeLayer(t){const{formData:n,payload:a,onAddFilter:r,setTooltip:i}=t;return e(n,a,r,i)}render(){const{formData:e,payload:t,setControlValue:n,height:a,width:i}=this.props,{layer:o,viewport:s}=this.state;return r.a.createElement(l.a,{mapboxApiAccessToken:t.data.mapboxApiKey,viewport:s,layers:[o],mapStyle:e.mapbox_style,setControlValue:n,width:i,height:a,onViewportChange:this.onViewportChange})}}return n.propTypes=C,n.defaultProps=O,n}function j(e,t){function n(n){const{formData:a,payload:i,setControlValue:o,setTooltip:s,viewport:l,width:c,height:u}=n;return r.a.createElement(w,{formData:a,mapboxApiKey:i.data.mapboxApiKey,setControlValue:o,viewport:l,getLayer:e,payload:i,setTooltip:s,getPoints:t,width:c,height:u})}return n.propTypes=C,n.defaultProps=O,n}},762:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=n(1102);n(766);const l={categories:o.a.object,toggleCategory:o.a.func,showSingleCategory:o.a.func,format:o.a.string,position:o.a.oneOf([null,"tl","tr","bl","br"])};class c extends r.a.PureComponent{format(e){if(!this.props.format)return e;const t=parseFloat(e);return Object(s.a)(this.props.format,t)}formatCategoryLabel(e){if(!this.props.format)return e;if(e.includes(" - ")){const t=e.split(" - ");return this.format(t[0])+" - "+this.format(t[1])}return this.format(e)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const e=Object.entries(this.props.categories).map(e=>{let[t,n]=e;const a={color:"rgba("+n.color.join(", ")+")"},i=n.enabled?"◼":"◻";return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},r.a.createElement("span",{style:a},i)," ",this.formatCategoryLabel(t)))}),t={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return r.a.createElement("div",{className:"legend",style:t},r.a.createElement("ul",{className:"categories"},e))}}c.propTypes=l,c.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(829),r=n.n(a);const i=[1,0,1,0,0,0,0];function o(e,t){const n=parseInt(r()(t).format("x"),10);return parseInt(r()(t).add(e).format("x"),10)-n}function s(e,t){const n=r()(Math.min(...e)),a=r()(Math.max(...e));let s,l,c;if(t.includes("/")){const e=t.split("/",2);e[0].endsWith("Z")?(l=r()(e[0]),s=r.a.duration(e[1])):(l=r()(e[1]),s=r.a.duration(e[0]))}else s=r.a.duration(t),l=function(e,t){const n=r()(e).subtract(t),a=e.toArray(),o=n.toArray(),s=a.map((e,t)=>o[t]!==e).indexOf(!0),l=a.map((e,t)=>{if(t===s){const n=e-o[t];return e-(e-i[t])%n}return t<s||-1===s?e:i[t]});return r()(l)}(n,s);const u=n.valueOf();for(c=l.clone();c.valueOf()<u;)c.add(s);for(;c.valueOf()>u;)c.subtract(s);let p;const d=a.valueOf();for(p=l.clone();p.valueOf()>d;)p.subtract(s);for(;p.valueOf()<d;)p.add(s);const h=null!=t?[c,c.clone().add(s)]:[c,p],f=e.every(e=>null===e);return{start:parseInt(c.format("x"),10),end:parseInt(p.format("x"),10),getStep:o.bind(this,s),values:h.map(e=>parseInt(e.format("x"),10)),disabled:f}}},765:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=n(759),l=n(822),c=n.n(l),u=n(711),p=n(823),d=n.n(p);n(828),n(783);function h(e){return r.a.createElement("span",{className:"BootstrapSliderWrapper"},r.a.createElement(d.a,e))}n(785);const f={start:o.a.number.isRequired,step:o.a.number.isRequired,end:o.a.number.isRequired,values:o.a.array.isRequired,onChange:o.a.func,loopDuration:o.a.number,maxFrames:o.a.number,orientation:o.a.oneOf(["horizontal","vertical"]),reversed:o.a.bool,disabled:o.a.bool,range:o.a.bool};class g extends r.a.PureComponent{constructor(e){super(e),this.state={intervalId:null};const t=e.end-e.start,n=Math.min(e.maxFrames,t/e.step),a=t/n;this.intervalMilliseconds=e.loopDuration/n,this.increment=a<e.step?e.step:a-a%e.step,this.onChange=this.onChange.bind(this),this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.stepBackward=this.stepBackward.bind(this),this.stepForward=this.stepForward.bind(this),this.getPlayClass=this.getPlayClass.bind(this),this.formatter=this.formatter.bind(this)}componentDidMount(){c.a.bind(["space"],this.play)}componentWillUnmount(){c.a.unbind(["space"])}onChange(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}getPlayClass(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}play(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{const e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}}pause(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}stepForward(){const{start:e,end:t,step:n,values:a,disabled:r}=this.props;if(r)return;const i=(Array.isArray(a)?a:[a,a+n]).map(e=>e+this.increment),o=i[1]>t?i[0]-e:0;this.props.onChange(i.map(e=>e-o))}stepBackward(){const{start:e,end:t,step:n,values:a,disabled:r}=this.props;if(r)return;const i=(Array.isArray(a)?a:[a,a+n]).map(e=>e-this.increment),o=i[0]<e?t-i[1]:0;this.props.onChange(i.map(e=>e+o))}formatter(e){if(this.props.disabled)return Object(u.b)("Data has no time steps");let t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map(e=>new Date(e).toUTCString()).join(" : ")}render(){const{start:e,end:t,step:n,orientation:a,reversed:i,disabled:o,range:s,values:l}=this.props;return r.a.createElement("div",{className:"play-slider"},r.a.createElement("div",{className:"play-slider-controls padded"},r.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),r.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),r.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),r.a.createElement("div",{className:"play-slider-scrobbler padded"},r.a.createElement(h,{value:s?l:l[0],range:s,formatter:this.formatter,change:this.onChange,min:e,max:t,step:n,orientation:a,reversed:i,disabled:o?"disabled":"enabled"})))}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}g.propTypes=f,g.defaultProps={onChange:()=>{},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},n.d(t,"a",(function(){return y}));const b={getLayers:o.a.func.isRequired,start:o.a.number.isRequired,end:o.a.number.isRequired,getStep:o.a.func,values:o.a.array.isRequired,aggregation:o.a.bool,disabled:o.a.bool,viewport:o.a.object.isRequired,children:o.a.node,mapStyle:o.a.string,mapboxApiAccessToken:o.a.string.isRequired,setControlValue:o.a.func,onValuesChange:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired};class y extends r.a.PureComponent{constructor(){super(...arguments),m(this,"containerRef",r.a.createRef()),m(this,"setTooltip",e=>{this.containerRef.current&&this.containerRef.current.setTooltip(e)})}render(){const{start:e,end:t,getStep:n,disabled:a,aggregation:i,children:o,getLayers:l,values:c,onValuesChange:u,viewport:p,setControlValue:d,mapStyle:h,mapboxApiAccessToken:f,height:m,width:b}=this.props,y=l(c);return r.a.createElement("div",null,r.a.createElement(s.a,{ref:this.containerRef,viewport:p,layers:y,setControlValue:d,mapStyle:h,mapboxApiAccessToken:f,bottomMargin:a?0:20,width:b,height:m}),!a&&r.a.createElement(g,{start:e,end:t,step:n(e),values:c,range:!i,onChange:u}),o)}}y.propTypes=b,y.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:()=>{},onValuesChange:()=>{}}},766:function(e,t,n){var a=n(342),r=n(767);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},767:function(e,t,n){(t=n(343)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n  font-size: 90%;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  margin: 24px;\n  padding: 12px 20px;\n  outline: none;\n  overflow-y: scroll;\n  max-height: 200px;\n}\n\nul.categories {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\nul.categories li a {\n  color: rgb(51, 51, 51);\n  text-decoration: none;\n}\n\nul.categories li a span {\n  margin-right: 10px;\n}\n',""]),e.exports=t},772:function(e,t,n){var a=n(342),r=n(773);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},773:function(e,t,n){(t=n(343)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.deckgl-tooltip > div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n',""]),e.exports=t},783:function(e,t,n){var a=n(342),r=n(784);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},784:function(e,t,n){(t=n(343)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.BootstrapSliderWrapper .slider-selection {\n  background: #efefef;\n}\n\n.BootstrapSliderWrapper .slider-handle {\n  background: #b3b3b3;\n}\n',""]),e.exports=t},785:function(e,t,n){var a=n(342),r=n(786);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},786:function(e,t,n){(t=n(343)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.play-slider {\n  display: flex;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n}\n\n.play-slider-controls {\n  flex: 0 0 80px;\n  text-align: middle;\n}\n\n.play-slider-scrobbler {\n  flex: 1 1;\n}\n\n.slider.slider-horizontal {\n  width: 100% !important;\n}\n\n.slider-button {\n  color: #b3b3b3;\n  margin-right: 5px;\n}\n\ndiv.slider > div.tooltip.tooltip-main.top.in {\n  margin-left: 0 !important;\n}\n',""]),e.exports=t},806:function(e,t){},852:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(735),r=n(736),i=n(738),o=n(737),s=n(747),l=n(739),c=n(815),u=n(757),p=n(794),d=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"getSubLayers",value:function(){return this.internalState&&this.internalState.subLayers||[]}},{key:"initializeState",value:function(){}},{key:"setState",value:function(e){Object(s.a)(Object(o.a)(t.prototype),"setState",this).call(this,e),this.setLayerNeedsUpdate()}},{key:"getPickingInfo",value:function(e){return e.info}},{key:"renderLayers",value:function(){return null}},{key:"shouldRenderSubLayer",value:function(e,t){var n=this.props._subLayerProps;return t&&t.length||n&&n[e]}},{key:"getSubLayerClass",value:function(e,t){var n=this.props._subLayerProps;return n&&n[e]&&n[e].type||t}},{key:"getSubLayerProps",value:function(e){var t=this.props,n=t.opacity,a=t.pickable,r=t.visible,i=t.parameters,o=t.getPolygonOffset,s=t.highlightedObjectIndex,l=t.autoHighlight,c=t.highlightColor,u=t.coordinateSystem,p=t.coordinateOrigin,d=t.wrapLongitude,h=t.positionFormat,f=t.modelMatrix,g=t._subLayerProps,m={opacity:n,pickable:a,visible:r,parameters:i,getPolygonOffset:o,highlightedObjectIndex:s,autoHighlight:l,highlightColor:c,coordinateSystem:u,coordinateOrigin:p,wrapLongitude:d,positionFormat:h,modelMatrix:f};if(e){var b=g&&g[e.id],y=b&&b.updateTriggers;Object.assign(m,e,b,{id:"".concat(this.props.id,"-").concat(e.id),updateTriggers:Object.assign({all:this.props.updateTriggers.all},e.updateTriggers,y)})}return m}},{key:"_getAttributeManager",value:function(){return null}},{key:"_renderLayers",value:function(){var e=this.internalState.subLayers;e&&!this.needsUpdate()?u.a.log(3,"Composite layer reused subLayers ".concat(this),this.internalState.subLayers)():(e=this.renderLayers(),e=Object(p.b)(e,{filter:Boolean}),this.internalState.subLayers=e,u.a.log(2,"Composite layer rendered new subLayers ".concat(this),e)());var t=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.parent=this}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}},{key:"isComposite",get:function(){return!0}}]),t}(c.a);d.layerName="CompositeLayer"},957:function(e,t,n){"use strict";n.r(t),n.d(t,"getLayer",(function(){return h}));var a=n(1103),r=n(0),i=n.n(r),o=n(711),s=n(751),l=n(746),c=n(761),u=n(753);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){return i.a.createElement("div",{className:"deckgl-tooltip"},i.a.createElement(u.a,{label:Object(o.b)("Centroid (Longitude and Latitude)")+": ",value:"("+e.coordinate[0]+", "+e.coordinate[1]+")"}),i.a.createElement(u.a,{label:Object(o.b)("Height")+": ",value:""+e.object.elevationValue}))}function h(e,t,n,r){const i=e,o=i.color_picker;let c=t.data.features.map(e=>p({},e,{color:[o.r,o.g,o.b,255*o.a]}));if(i.js_data_mutator){c=Object(l.a)(i.js_data_mutator)(c)}const u=Object(s.b)(i.js_agg_function,e=>e.weight);return new a.a(p({id:"hex-layer-"+i.slice_id,data:c,pickable:!0,radius:i.grid_size,minColor:[0,0,0,0],extruded:i.extruded,maxColor:[o.r,o.g,o.b,255*o.a],outline:!1,getElevationValue:u,getColorValue:u},Object(s.a)(i,r,d)))}t.default=Object(c.b)(h,(function(e){return e.map(e=>e.position)}))},972:function(e,t,n){"use strict";var a=n(735),r=n(738),i=n(737),o=n(745),s=n(739);n.d(t,"a",(function(){return c}));var l={ambient:.35,diffuse:.6,shininess:32,specularColor:[30,30,30]},c=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(r.a)(this,Object(i.a)(t).call(this,e)),e=Object.assign({},l,e),Object.assign(Object(o.a)(n),e),n}return Object(s.a)(t,e),t}((function e(){Object(a.a)(this,e)}))}}]);
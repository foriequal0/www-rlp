(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o});var a=n(9),l=n.n(a);function r(e){if(e.length>8)return null;try{return new l.a(e).toString(10)}catch(t){return null}}function c(e){return e.toString("hex")}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];function n(t){if(128!==(192&e[t]))throw new Error("Invalid utf8 sequence");return 63&e[t]}try{for(var a="",l=0;l<e.length;l++){var r=e[l],c=void 0;if(r<128)c=r;else if(192===(224&r)){c=(31&r)<<6|n(++l)}else if(224===(240&r)){c=(15&r)<<12|n(++l)<<6|n(++l)}else{if(240!==(248&r))throw new Error("Invalid utf8 sequence");c=(7&r)<<18|n(++l)<<12|n(++l)<<6|n(++l)}if(!0===t)if(c>=0&&c<=31&&!(9===c||10===c||13===c)||c>=128&&c<=159)return null;a+=String.fromCodePoint(c)}return a}catch(i){return null}}function o(e){if(e.length>4)return null;try{var t=e.reduce(function(e,t){return(e<<8)+t});return new Date(1e3*t).toISOString()}catch(n){return null}}},,,function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o});var a=n(9),l=n.n(a);function r(t){if(isNaN(+t))return null;try{var n=new l.a(+t).toString("hex");return e.from(n.length%2===1?"0"+n:n,"hex")}catch(a){return null}}function c(t){try{return e.from(t.slice(2).length%2===1?"0"+t.slice(2):t.slice(2),"hex")}catch(n){return null}}function i(t){try{return e.from(t,"utf-8")}catch(n){return null}}function o(t){try{var n=Date.parse(t)/1e3;return e.from(n.toString(16))}catch(a){return null}}}).call(this,n(17).Buffer)},,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return N});var a=n(10),l=n(11),r=n(14),c=n(13),i=n(15),o=n(0),s=n(52),d=n(53),u=n(33),m=(n(48),n(24)),h=n.n(m),p=n(25),f=n.n(p),v=n(26),b=n.n(v),g=n(27),E=n.n(g),x=n(28),y=n.n(x),k=n(29),C=n.n(k),N=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.createElement("div",{className:"Footer"},o.createElement(s.a,null,o.createElement(d.a,null,o.createElement(u.a,{md:7},o.createElement("div",null,o.createElement("img",{src:h.a,alt:""})),o.createElement("div",{className:"mt-4"},o.createElement("div",null,o.createElement("span",{className:"font-weight-bold mr-3"},"Contact"),o.createElement("span",null,"Email us: support@kodebox.io"))),o.createElement("div",{className:"mt-2"},o.createElement("span",null,"CodeChain and CodeChain logo are trademarks of Kodebox, Inc"))),o.createElement(u.a,{md:5},o.createElement("div",{className:"link-icon-container"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/CodeChain-io"},o.createElement("img",{alt:"",src:f.a,className:"mr-3 mr-md-0 ml-0 ml-md-3 link-icon"})),o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://gitter.im/CodeChain-io/codechain"},o.createElement("img",{alt:"",src:b.a,className:"mr-3 mr-md-0 ml-0 ml-md-3 link-icon"})),o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/codechain_io"},o.createElement("img",{alt:"",src:C.a,className:"mr-3 mr-md-0 ml-0 ml-md-3 link-icon"})),o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://medium.com/codechain"},o.createElement("img",{alt:"",src:E.a,className:"mr-3 mr-md-0 ml-0 ml-md-3 link-icon"})),o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://t.me/codechain_protocol"},o.createElement("img",{alt:"",src:y.a,className:"mr-3 mr-md-0 ml-0 ml-md-3 link-icon"}))))),o.createElement("div",{className:"link-container"},o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://codechain.io/#feature"},o.createElement("span",{className:"link-header"},"Why CodeChain"))),o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://codechain.io/#platform"},o.createElement("span",{className:"link-header"},"Platform"))),o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://codechain.io/#contact"},o.createElement("span",{className:"link-header"},"Contact"))),o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://codechain.io/#about"},o.createElement("span",{className:"link-header"},"About Us"))),o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://codechain.io/#faq"},o.createElement("span",{className:"link-header"},"How it Works"))),o.createElement("div",{className:"link-item-col"},o.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://medium.com/codechain"},o.createElement("span",{className:"link-header"},"Blog"))))))}}]),t}(o.Component)},,,function(e,t,n){"use strict";(function(e){var a=n(10),l=n(11),r=n(14),c=n(13),i=n(15),o=n(0),s=n.n(o),d=n(18),u=n(2),m=n(5),h=n(23),p=n(6),f=n(19),v=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this,{}))).handleEncodedTextChange=function(t){var n,a,l=t.target.value,r=l.replace(/\s/g,"");try{0===r.length?(n=null,a={disabled:!0,label:"RLP is empty"}):(!1===r.startsWith("0x")&&(r="0x"+r),n=d.decode(r),a={disabled:!1,label:"Decode"})}catch(c){n=null,a={disabled:!0,label:"RLP decode error"}}e.setState({mode:"encoded",encodedText:l,plainText:n,decodeButton:a})},e.handlePlainTextChange=function(t,n,a,l,r){var c,i,o=n;if(a)c={disabled:!0,label:"RLP encode error"};else{"change"===l&&(o=[e.state.plainText]);try{i=d.encode(o).toString("hex"),e.setState({encodedText:i,plainText:o})}catch(s){c={disabled:!0,label:"RLP encode error"}}c={disabled:!1,label:"Encode"}}e.setState({encodeButton:c}),r&&e.setState(function(e,t){return{change:!e.change}})},e.handleClickDecode=function(){e.setState({mode:"decoded"})},e.handleClickEncode=function(){e.setState({mode:"encoded"})},e.state={mode:"encoded",encodedText:"",plainText:null,decodeButton:{disabled:!0,label:"RLP is empty"},encodeButton:{disabled:!1,label:"Encode"},change:!1},e}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return"encoded"===this.state.mode?e=s.a.createElement("div",{className:"App-body"},s.a.createElement("div",{className:"body"},s.a.createElement("textarea",{id:"encoded-text",className:"code form-control",placeholder:"RLP encoded hex string here",value:this.state.encodedText,onChange:this.handleEncodedTextChange}),s.a.createElement(p.a,{variant:"primary",size:"lg",block:!0,disabled:this.state.decodeButton.disabled,onClick:this.handleClickDecode},this.state.decodeButton.label)),s.a.createElement(f.a,null)):"decoded"===this.state.mode&&(e=s.a.createElement("div",{className:"App-body"},s.a.createElement("div",{className:"body"},s.a.createElement(b,{key:this.state.change?"true":"false",idx:0,value:this.state.plainText,handler:this.handlePlainTextChange,fromList:!1}),s.a.createElement(p.a,{variant:"primary",size:"lg",block:!0,disabled:this.state.encodeButton.disabled,onClick:this.handleClickEncode},this.state.encodeButton.label)),s.a.createElement(f.a,null))),s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"RLP Debugger")),e)}}]),t}(s.a.Component),b=function(t){function n(t){var l,i,o;if(Object(a.a)(this,n),(l=Object(r.a)(this,Object(c.a)(n).call(this,t))).valueHandler=function(t,n,a,r,c){if("list"!==l.state.type)throw Error("Invalid type");var i=l.state.value,o=l.state.disabled;if(a)l.props.handler(l.props.idx,i,!0,"null",c),o.add(t);else{if("null"===r)i[t]=n;else if("add"===r)i.splice(t+1,0,e.from("0x00","hex"));else if("remove"===r)i.splice(t,1);else if("change"===r){if(Array.isArray(i[t]))throw Error("Invalid type");i[t]=[i[t]]}o.delete(t),0===o.size?l.props.handler(l.props.idx,i,!1,"null",c):l.props.handler(l.props.idx,i,!0,"null",c)}l.setState({value:i,disabled:o})},l.handleTextChange=function(e){var t=e.target.value,n=l.state.decoded.hex,a=l.state.decoded.string,r=l.state.decoded.number,c=l.state.decoded.timestamp,i=l.state.value;if("hex"===l.state.type)console.log(t),n=t,a=null===(i=Object(m.a)(t.startsWith("0x")?t:"0x"+t))?null:Object(u.c)(i),r=null===i?null:Object(u.b)(i),c=null===i?null:Object(u.d)(i);else if("string"===l.state.type)a=t,n=null===(i=Object(m.c)(t))?null:Object(u.a)(i),r=null===i?null:Object(u.b)(i),c=null===i?null:Object(u.d)(i);else if("number"===l.state.type)r=t,n=null===(i=Object(m.b)(t))?null:Object(u.a)(i),a=null===i?null:Object(u.c)(i),c=null===i?null:Object(u.d)(i);else{if("timestamp"!==l.state.type)throw Error("Invalid type");c=t,n=null===(i=Object(m.d)(t))?null:Object(u.a)(i),a=null===i?null:Object(u.c)(i),r=null===i?null:Object(u.b)(i)}l.setState({type:l.state.type,decoded:{hex:n,string:a,number:r,timestamp:c},value:i}),null===i?l.props.handler(l.props.idx,i,!0,"null",!1):l.props.handler(l.props.idx,i,!1,"null",!1)},l.handleSelectTypeChange=function(e){var t;t="hex"===e.target.value?null===l.state.decoded.hex?null:Object(m.a)(l.state.decoded.hex):"string"===e.target.value?null===l.state.decoded.string?null:Object(m.c)(l.state.decoded.string):"number"===e.target.valid?null===l.state.decoded.number?null:Object(m.b)(l.state.decoded.number):null===l.state.decoded.timestamp?null:Object(m.d)(l.state.decoded.timestamp),l.setState({type:e.target.value,value:t}),l.props.handler(l.props.idx,t,!1,"null",!1)},l.handleAdd=function(){l.props.handler(l.props.idx,null,!1,"add",!0)},l.handleRemove=function(){l.props.handler(l.props.idx,null,!1,"remove",!0)},l.handleChange=function(){l.props.handler(l.props.idx,null,!1,"change",!0)},l.handleListAdd=function(){l.props.handler(l.props.idx,null,!1,"add",!0)},l.handleListAddInsert=function(){var t=l.state.value;t.splice(0,0,e.from("0x00","hex")),l.props.handler(l.props.idx,t,!1,"null",!0),l.setState({value:t})},l.handleListRemove=function(){l.props.handler(l.props.idx,null,!1,"remove",!0)},Array.isArray(t.value))i="list",o={hex:null,string:null,number:null,timestamp:null};else if(e.isBuffer(t.value)){i="hex";var s=Object(u.a)(t.value);o={hex:null===s?null:s.replace(/(\w{4})/g,"$1 ").replace(/(^\s+|\s+$)/,""),string:Object(u.c)(t.value),number:Object(u.b)(t.value),timestamp:Object(u.d)(t.value)}}else{if(!Object(h.isNull)(t.value))throw Error("Invalid type");i="hex",o={hex:"0x80",string:null,number:null,timestamp:null}}return l.state={type:i,decoded:o,value:t.value,disabled:new Set},l}return Object(i.a)(n,t),Object(l.a)(n,[{key:"renderSelector",value:function(){var e=["hex","string","number","timestamp"].map(function(e,t){return s.a.createElement("option",{key:t,value:e},e)});return s.a.createElement("select",{className:"browser-default custom-select",value:this.state.type,onChange:this.handleSelectTypeChange},e)}},{key:"render",value:function(){var e=this;if("list"===this.state.type){if(Array.isArray(this.state.value))return s.a.createElement("div",null,s.a.createElement("div",{style:{height:"45px"}},s.a.createElement("div",{className:"list"},"[+] List(",this.state.value.length,")"),s.a.createElement("div",{className:"buttons"},this.props.fromList?s.a.createElement(p.a,{variant:"outline-primary",onClick:this.handleListAdd},"+"):null,s.a.createElement(p.a,{variant:"outline-danger",onClick:this.handleListRemove,style:{marginLeft:"0.5rem"}},"-"))),s.a.createElement("div",{style:{marginLeft:"1rem"}},s.a.createElement(p.a,{variant:"outline-info",onClick:this.handleListAddInsert},"+"),this.state.value.map(function(t,a){return s.a.createElement(n,{key:a,idx:a,value:t,handler:e.valueHandler,fromList:!0})})));throw Error("Invalid type")}var t=this.state.decoded[this.state.type];return null===t&&(t=""),s.a.createElement("div",null,s.a.createElement("div",{className:"element"},s.a.createElement("div",{className:"selector"},this.renderSelector()," "),s.a.createElement("div",{className:"decoded-text"},s.a.createElement("input",{className:"form-control",value:t,onChange:this.handleTextChange})),this.props.fromList?s.a.createElement("div",{className:"buttons"},s.a.createElement(p.a,{variant:"outline-primary",onClick:this.handleAdd},"+"),s.a.createElement(p.a,{variant:"outline-danger",onClick:this.handleRemove,style:{marginLeft:"0.5rem"}},"-")):null,s.a.createElement("div",{className:"buttons"},s.a.createElement(p.a,{variant:"outline-success",onClick:this.handleChange,style:{marginLeft:"0.5rem"}},"List"))))}}]),n}(s.a.Component);t.a=v}).call(this,n(17).Buffer)},,function(e,t,n){e.exports=n.p+"static/media/CodechainLogo_White.630f622f.svg"},function(e,t,n){e.exports=n.p+"static/media/github.11edc2fb.svg"},function(e,t,n){e.exports=n.p+"static/media/gitter.038f66f2.svg"},function(e,t,n){e.exports=n.p+"static/media/medium.e5a5b160.svg"},function(e,t,n){e.exports=n.p+"static/media/telegram.afaec1a7.svg"},function(e,t,n){e.exports=n.p+"static/media/twitter.a2682b66.svg"},,,,,function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},,,,,function(e,t){},,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(21),c=n.n(r),i=(n(39),n(22));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,1,2]]]);
//# sourceMappingURL=main.fe1901dd.chunk.js.map
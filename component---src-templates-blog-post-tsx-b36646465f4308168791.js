(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var r=n(6),a=n.n(r),i=n(137),o=n(0),s=n(143),l=n(141),c=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.pageContext,n=e.previous,r=e.next;return o.createElement(s.a,null,o.createElement(l.a,{title:t.frontmatter.title,description:t.excerpt}),o.createElement("h1",null,t.frontmatter.title),o.createElement("p",{style:{display:"block",marginBottom:"1rem",marginTop:"-rem"}},t.frontmatter.date),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.createElement("hr",{style:{marginBottom:"14px"}}),o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,n&&o.createElement(i.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.createElement("li",null,r&&o.createElement(i.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.Component);e.default=c;var u="2761936148"},137:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(136),l=n.n(s);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(138),u=n.n(c);n.d(e,"PageRenderer",function(){return u.a});var d=n(28);n.d(e,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(t){return a.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},138:function(t,e,n){var r;t.exports=(r=n(139))&&r.default||r},139:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(46),l=n(2),c=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},140:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Typescript Starter Blog"}}}}},141:function(t,e,n){"use strict";var r=n(142),a=n(137),i=n(0),o=n(144),s=n.n(o),l=function(t){var e=t.description,n=t.lang,o=t.meta,l=t.keywords,u=t.title;return i.createElement(a.StaticQuery,{query:c,render:function(t){var r=e||t.site.siteMetadata.description;return i.createElement(s.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:r,name:"description"},{content:u,property:"og:title"},{content:r,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:u,name:"twitter:title"},{content:r,name:"twitter:description"}].concat(l.length>0?{content:l.join(", "),name:"keywords"}:[]).concat(o)})},data:r})};l.defaultProps={keywords:[],lang:"en",meta:[]},e.a=l;var c="1025518380"},142:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Typescript Starter Blog",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},143:function(t,e,n){"use strict";var r=n(140),a=n(137),i=n(0),o=function(t){var e=t.siteTitle;return i.createElement("div",null,i.createElement("div",{style:{margin:"0 auto",maxWidth:"40rem",padding:"1.45rem 1.0875rem"}},i.createElement("h1",{style:{margin:0}},i.createElement(a.Link,{to:"/",style:{textDecoration:"none"}},e))))};o.defaultProps={siteTitle:""};var s=o;e.a=function(t){var e=t.children;return i.createElement(a.StaticQuery,{query:"755544856",render:function(t){return i.createElement("div",{style:{width:"100%",paddingTop:"2rem"}},i.createElement(s,{siteTitle:t.site.siteMetadata.title}),i.createElement("div",{style:{margin:"0 auto",maxWidth:"40rem",padding:"0px 1.0875rem 1.45rem"}},e))},data:r})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-b36646465f4308168791.js.map
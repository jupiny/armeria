(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,n){"use strict";n("tU7J");var a=n("wFql"),i=n("q1tI"),r=n.n(i),l=n("2+3N"),o=n("1lec"),s=n("+ejy"),c=n("+9zj"),b=a.a.Title;t.a=function(e){var t={},n={},a={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":n};Object.entries(l).forEach((function(e){var n=e[0],a=e[1];t[a]=n})),Object.entries(o).forEach((function(e){var t=e[0],a=e[1];n[a]=t}));var i=Object(c.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:[],index:a,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},qw4G:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a,i=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("JkCF"),o={},s=(a="ThankYou",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:o},b=l.a;function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"25th February 2020"),Object(r.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," for Logback can now export the current request ID into MDC. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2511"},"#2511"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">\n    <encoder>\n      <pattern>%d{HH:mm:ss.SSS} %X{req.id} %msg%n</pattern>\n    </encoder>\n  </appender>\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    <appender-ref ref="CONSOLE" />\n    <export>req.id</export>\n  </appender>\n</configuration>\n'))),Object(r.b)("li",{parentName:"ul"},"Client-side options API (",Object(r.b)("inlineCode",{parentName:"li"},"ClientOption")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryOption"),") has been revamped. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2523"},"#2523"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions.get()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.get()")," never throw an exception. A default value is returned for an unspecified option. Therefore, other getter methods such as ",Object(r.b)("inlineCode",{parentName:"li"},"getOrElse()")," have been removed.")))),Object(r.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You'll now get a ",Object(r.b)("inlineCode",{parentName:"li"},"ClosedStreamException")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"Http2Exception")," when your HTTP/2 connection was closed due to an ",Object(r.b)("inlineCode",{parentName:"li"},"RST_STREAM")," frame. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2508"},"#2508"))),Object(r.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*ClientBuilder.options(ClientOptions)")," now overrides only the specified options. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2516"},"#2516"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'ClientFactory factory = ClientFactory.insecure();\nClientOptions options = ClientOptions.builder()\n                                     .responseTimeMillis(5000)\n                                     .build();\nWebClient client = WebClient.builder("http://foo.com")\n                            .factory(factory)\n                            .options(options)\n                            .build();\n// This assertion does not fail anymore.\nassert client.options().factory() == ClientFactory.insecure();\n'))),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(r.b)("inlineCode",{parentName:"li"},"DocService")," throws the ",Object(r.b)("inlineCode",{parentName:"li"},"java.lang.IllegalStateException: zip file closed")," exception while starting up. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2518"},"#2518")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2519"},"#2519")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MetricCollectingClient")," does not count the request that failed initially due to a ",Object(r.b)("inlineCode",{parentName:"li"},"connection refused")," error and then succeeded after a retry as failure anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2517"},"#2517")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(r.b)("inlineCode",{parentName:"li"},"LoggingClient")," and ",Object(r.b)("inlineCode",{parentName:"li"},"LoggingSerivce")," does not push the current context when logging. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2528"},"#2528")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," can now export a single custom attribute into multiple MDC properties. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2521"},"#2521")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," does not export outdated custom attributes anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2520"},"#2520")),Object(r.b)("li",{parentName:"ul"},"Renamed incorrect meter ID ",Object(r.b)("inlineCode",{parentName:"li"},"armeria.server.pendingResponses")," into ",Object(r.b)("inlineCode",{parentName:"li"},"armeria.server.pending.responses"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2506"},"#2506")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Date")," header is now encoded properly even when ",Object(r.b)("inlineCode",{parentName:"li"},"System.nanoTime()")," returns a negative value. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2530"},"#2530")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GrpcStatus.fromThrowable()")," now treats ",Object(r.b)("inlineCode",{parentName:"li"},"ContentTooLargeException")," as ",Object(r.b)("inlineCode",{parentName:"li"},"RESOURCE_EXHAUSTED")," rather than ",Object(r.b)("inlineCode",{parentName:"li"},"INTERNAL_ERROR"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2523"},"#2523"))),Object(r.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions.getOrElse()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"getOrNull()")," have been removed. ",Object(r.b)("inlineCode",{parentName:"li"},"get()")," always returns a non-null value now. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2523"},"#2523")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions.asMap()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.asMap()")," now return only the options overridden by a user. You can get the ",Object(r.b)("inlineCode",{parentName:"li"},"Set")," of available options using ",Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions.allOptions()")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.allOptions()"),": ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2516"},"#2516")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2523"},"#2523"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ClientOptions myOptions = ...;\nMap<ClientOption<?>, Object> map = new IdentityHashMap<>();\nfor (ClientOption o : ClientOptions.allOptions()) {\n    map.put(myOptions.get(o));\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions.valueOf()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.valueOf()")," have been split into two methods: ",Object(r.b)("inlineCode",{parentName:"li"},"define()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"of()")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2523"},"#2523"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"of()")," if you're getting an existing option."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"define()")," if you're defining a new option."))),Object(r.b)("li",{parentName:"ul"},"You might need to adjust your monitoring system if you were watching ",Object(r.b)("inlineCode",{parentName:"li"},"armeria.server.pendingResponses"),", which has been renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"armeria.server.pending.responses")," in this release. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2506"},"#2506"))),Object(r.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dropwizard 1.3.18 → 1.3.19"),Object(r.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.2 → 4.1.3"),Object(r.b)("li",{parentName:"ul"},"java-jwt 3.9.0 → 3.10.0"),Object(r.b)("li",{parentName:"ul"},"RxJava 2.2.17 → 2.2.18"),Object(r.b)("li",{parentName:"ul"},"Shaded dependencies",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Reflections 0.9.12 → 0.9.11 (Downgrade)")))),Object(r.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(r.b)(s,{usernames:["andrewoma","andrey-tpt","anuraaga","Boozilla","ikhoon","jrhee17","JunoJunho","minwoox","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-98-3-mdx-ed845882b780b31c23a5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var r=a("wFql"),i=a("q1tI"),n=a.n(i),o=a("2+3N"),c=a("1lec"),l=a("+ejy"),s=a("+9zj"),p=r.a.Title;t.a=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(o).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(c).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var i=Object(s.a)(e.location),m=e.version||i.substring(i.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),n.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?n.a.createElement(p,{id:"release-notes",level:1},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},R5pw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var r,i=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("JkCF"),c={},l=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:c},p=o.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"3rd August 2020"),Object(n.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now add multiple request timeout callbacks using the following methods: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2937"},"#2937")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2939"},"#2939")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#whenResponseTimingOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#whenResponseTimingOut()"},"type://ClientRequestContext#whenResponseTimingOut()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#whenResponseTimedOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#whenResponseTimedOut()"},"type://ClientRequestContext#whenResponseTimedOut()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#whenRequestTimingOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#whenRequestTimingOut()"},"type://ServiceRequestContext#whenRequestTimingOut()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#whenRequestTimedOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#whenRequestTimedOut()"},"type://ServiceRequestContext#whenRequestTimedOut()")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now specify multiple decorators with a single call when building a service binding fluently. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2889"},"#2889")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'Server.builder()\n      .route().get("/hello")\n              .decorators(firstDecorator,\n                          secondDecorator,\n                          thirdDecorator)\n              .build(helloService)\n      .build();\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now specify whether the entire annotated service methods have to run in a ",Object(n.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor"),".\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2923"},"#2923")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2925"},"#2925")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'Server.builder()\n      .annotatedService().pathPrefix("/my_service")\n                         .useBlockingTaskExecutor(true)\n                         .build(myService);\n\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can also specify the ",Object(n.b)("a",{parentName:"p",href:"type://@Blocking:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Blocking.html"},"type://@Blocking")," annotation on a class. It was previously allowed only on methods.\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2915"},"#2915")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'@Blocking\npublic class MyBlockingAnnotatedService {\n    @Get\n    public String delayed() throws Exception {\n        Thread.sleep(1000);\n        return "slept a second";\n    }\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now bind an annotated service method to the prefix path by specifying no path. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2708"},"#2708")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2853"},"#2853")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'public class MyAnnotatedService {\n    @Get\n    public String withoutSlash() {\n        return "without slash";\n    }\n\n    @Get("/")\n    public String withSlash() {\n        return "with slash";\n    }\n}\n\nServer server =\n    Server.builder()\n          .http(8080)\n          .annotatedService("/prefix", new MyAnnotatedService())\n          .build();\nserver.start().join();\n\nassert "without slash".equals(\n    WebClient.of().get("http://127.0.0.1:8080/prefix")\n             .aggregate().toStringUtf8());\n\nassert "with slash".equals(\n    WebClient.of().get("http://127.0.0.1:8080/prefix/")\n             .aggregate().toStringUtf8());\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now send and receive ",Object(n.b)("inlineCode",{parentName:"p"},"grpc-web-text")," messages in gRPC, as well as ",Object(n.b)("inlineCode",{parentName:"p"},"grpc-web+proto")," and\n",Object(n.b)("inlineCode",{parentName:"p"},"grpc-web+json"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2938"},"#2938")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2955"},"#2955")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'MyGrpcServiceStub client =\n    Clients.newClient("gproto-web-text+h2c://example.com",\n                      MyGrpcServiceStub.class);\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now send a request via an HAPROXY server preserving the original source and destination addresses.\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2589"},"#2589")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2907"},"#2907")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'ClientFactory factory =\n    ClientFactory.builder()\n                 .proxyConfig(ProxyConfig.haproxy(haproxyServerAddr))\n                 .build();\n\nWebClient client =\n    WebClient.builder()\n             .factory(factory)\n             .build();\n\n// Send an HTTP request to example.com via an HAPROXY server,\n// preserving the source address by using HAPROXY protocol.\nclient.get("http://example.com/").aggregate().join();\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use different ",Object(n.b)("a",{parentName:"p",href:"type://ProxyConfig:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/proxy/ProxyConfig.html"},"type://ProxyConfig")," for different ",Object(n.b)("a",{parentName:"p",href:"typeplural://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"typeplural://Endpoint")," using\n",Object(n.b)("a",{parentName:"p",href:"type://ProxyConfigSelector:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/proxy/ProxyConfigSelector.html"},"type://ProxyConfigSelector"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2752"},"#2752")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'ProxyConfigSelector mySelector = (protocol, endpoint) -> {\n    // Send the requests to *.foo.com via a SOCKS5 server.\n    if (endpoint.host().endsWith(".foo.com")) {\n        return ProxyConfig.socks5(socksServerAddr);\n    }\n    // Send the requests to *.bar.com via a HAPROXY server.\n    if (endpoint.host().endsWith(".bar.com")) {\n        return ProxyConfig.haproxy(haproxyServerAddr);\n    }\n    return ProxyConfig.direct();\n};\n\nClientFactory factory =\n    ClientFactory.builder()\n                 .proxyConfig(mySelector)\n                 .build();\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("a",{parentName:"p",href:"type://Route#patternString():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html#patternString()"},"type://Route#patternString()")," which can be used as a simple human-readable description of\na ",Object(n.b)("a",{parentName:"p",href:"type://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"},"type://Route"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2932"},"#2932")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2933"},"#2933"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"type://HttpData:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpData.html"},"type://HttpData")," now extends ",Object(n.b)("inlineCode",{parentName:"p"},"AutoCloseable")," and provides various methods useful when using\n",Object(n.b)("a",{parentName:"p",href:"type://SubscriptionOption#WITH_POOLED_OBJECTS"},"type://SubscriptionOption#WITH_POOLED_OBJECTS"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2892"},"#2892")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Note that this feature is only for the advanced users who want to reduce the number of memory copies\nin a performance-sensitive environment."),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"type://PooledObjects:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/unsafe/PooledObjects.html"},"type://PooledObjects")," for more information.")))),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We now use the following ",Object(n.b)("a",{parentName:"li",href:"https://errorprone.info/"},"Google Error Prone")," annotations which might be useful\nif you use Error Prone already or your static analysis tool supports them: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2876"},"#2876")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2908"},"#2908"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"@CheckReturnValue")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"@FormatMethod")," and ",Object(n.b)("inlineCode",{parentName:"li"},"@FormatString")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"@MustBeClosed")))),Object(n.b)("li",{parentName:"ul"},"You can now specify the connection ping interval less than 10 seconds, which was previously impossible. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2944"},"#2944")),Object(n.b)("li",{parentName:"ul"},"Improved the load distribution of client requests by randomizing how we choose the initial event loop,\nwhich may reduce the error rate in a certain situation. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2941"},"#2941")),Object(n.b)("li",{parentName:"ul"},"Improved the performance of ",Object(n.b)("a",{parentName:"li",href:"type://Endpoint#toString():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html#toString()"},"type://Endpoint#toString()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2906"},"#2906"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#currentOrNull():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#currentOrNull()"},"type://ClientRequestContext#currentOrNull()")," and ",Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#currentOrNull():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#currentOrNull()"},"type://ServiceRequestContext#currentOrNull()")," don't throw\nan ",Object(n.b)("inlineCode",{parentName:"li"},"IllegalStateException")," anymore but return ",Object(n.b)("inlineCode",{parentName:"li"},"null")," when the current context type mismatches. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2962"},"#2962")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://Endpoint#parse(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html#parse(java.lang.String)"},"type://Endpoint#parse(String)")," doesn't fail anymore when given with an authority with a userInfo part.\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2869"},"#2869")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2893"},"#2893")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"req.serviceName")," in ",Object(n.b)("a",{parentName:"li",href:"type://BuiltInProperties"},"type://BuiltInProperties")," has been renamed to ",Object(n.b)("inlineCode",{parentName:"li"},"req.service_name")," for the consistency\nwith other property names. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2958"},"#2958")),Object(n.b)("li",{parentName:"ul"},"We now handle an HTTP/2 request with a ",Object(n.b)("inlineCode",{parentName:"li"},"Host")," header properly, matching the behavior of HAPROXY. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2877"},"#2877")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2878"},"#2878")),Object(n.b)("li",{parentName:"ul"},"You can now send an HTTPS request via an HTTPS CONNECT proxy server (double encryption). ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2887"},"#2887")),Object(n.b)("li",{parentName:"ul"},"Fixed the buffer leaks in the following places: 😱 ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2891"},"#2891")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2892"},"#2892")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2951"},"#2951"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"DefaultDnsNameResolver")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"DefaultStreamMessageDuplicator")))),Object(n.b)("li",{parentName:"ul"},"You are now disallowed to set a ",Object(n.b)("inlineCode",{parentName:"li"},":status")," header when building an ",Object(n.b)("inlineCode",{parentName:"li"},"HttpFile"),", because it will make\n",Object(n.b)("inlineCode",{parentName:"li"},"FileService")," misbehave. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2926"},"#2926"),"."),Object(n.b)("li",{parentName:"ul"},"Fixed an ",Object(n.b)("inlineCode",{parentName:"li"},"IllegalReferenceCountException")," when content preview is turned on. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2905"},"#2905")),Object(n.b)("li",{parentName:"ul"},"gRPC-Web trailers are now compressed and decompressed properly. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2930"},"#2930")),Object(n.b)("li",{parentName:"ul"},"Fixed the compatibility issues with ",Object(n.b)("inlineCode",{parentName:"li"},"grpc-kotlin")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2947"},"#2947")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2950"},"#2950")),Object(n.b)("li",{parentName:"ul"},"You can now use the graceful shutdown properties when integration with Spring Boot 1. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2954"},"#2954")),Object(n.b)("li",{parentName:"ul"},"You can now use ",Object(n.b)("a",{parentName:"li",href:"type://DocServiceConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/DocServiceConfigurator.html"},"type://DocServiceConfigurator")," when integrating with Spring Boot 2. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2960"},"#2960")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://MetricCollectingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/metric/MetricCollectingService.html"},"type://MetricCollectingService")," now decorates all services if the ",Object(n.b)("inlineCode",{parentName:"li"},"armeria.enableMetrics")," property is set\nwhen integrating with Spring Boot. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2873"},"#2873")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2898"},"#2898"))),Object(n.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All option constants in ",Object(n.b)("a",{parentName:"li",href:"type://ClientOption:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientOption.html"},"type://ClientOption")," and ",Object(n.b)("a",{parentName:"li",href:"type://ClientFactoryOption:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryOption.html"},"type://ClientFactoryOption")," have been moved to\n",Object(n.b)("a",{parentName:"li",href:"type://ClientOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientOptions.html"},"type://ClientOptions")," and ",Object(n.b)("a",{parentName:"li",href:"type://ClientFactoryOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryOptions.html"},"type://ClientFactoryOptions")," respectively. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2928"},"#2928")),Object(n.b)("li",{parentName:"ul"},"Various implementation classes have been deprecated in favor of static factory methods: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2875"},"#2875")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2890"},"#2890"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://MetricCollectingCircuitBreakerListener"},"type://MetricCollectingCircuitBreakerListener")," → ",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerListener#metricCollecting(MeterRegistry):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerListener.html#metricCollecting(io.micrometer.core.instrument.MeterRegistry)"},"type://CircuitBreakerListener#metricCollecting(MeterRegistry)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RateLimitingThrottlingStrategy"},"type://RateLimitingThrottlingStrategy")," → ",Object(n.b)("a",{parentName:"li",href:"type://ThrottlingStrategy#rateLimiting(double):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/throttling/ThrottlingStrategy.html#rateLimiting(double)"},"type://ThrottlingStrategy#rateLimiting(double)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ConnectionPoolLoggingListener"},"type://ConnectionPoolLoggingListener")," → ",Object(n.b)("a",{parentName:"li",href:"type://ConnectionPoolListener#logging():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ConnectionPoolListener.html#logging()"},"type://ConnectionPoolListener#logging()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://StickyEndpointSelectionStrategy"},"type://StickyEndpointSelectionStrategy")," → ",Object(n.b)("a",{parentName:"li",href:"type://EndpointSelectionStrategy#sticky(ToLongFunction):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelectionStrategy.html#sticky(java.util.function.ToLongFunction)"},"type://EndpointSelectionStrategy#sticky(ToLongFunction)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://TTextProtocol"},"type://TTextProtocol")," → ",Object(n.b)("a",{parentName:"li",href:"type://TTextProtocolFactory#getProtocol(TTransport):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/text/TTextProtocolFactory.html#getProtocol(org.apache.thrift.transport.TTransport)"},"type://TTextProtocolFactory#getProtocol(TTransport)")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://Route#meterTag()"},"type://Route#meterTag()")," and ",Object(n.b)("a",{parentName:"li",href:"type://Route#loggerName()"},"type://Route#loggerName()")," have been deprecated in favor of\n",Object(n.b)("a",{parentName:"li",href:"type://Route#patternString():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html#patternString()"},"type://Route#patternString()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2933"},"#2933")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#responseTimeoutHandler()"},"type://ClientRequestContext#responseTimeoutHandler()"),",\n",Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#setResponseTimeoutHandler(Runnable)"},"type://ClientRequestContext#setResponseTimeoutHandler(Runnable)"),",\n",Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#requestTimeoutHandler()"},"type://ServiceRequestContext#requestTimeoutHandler()")," and\n",Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#setRequestTimeoutHandler(Runnable)"},"type://ServiceRequestContext#setRequestTimeoutHandler(Runnable)")," have been deprecated in favor of\n",Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#whenResponseTimedOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#whenResponseTimedOut()"},"type://ClientRequestContext#whenResponseTimedOut()")," and\n",Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#whenRequestTimedOut():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#whenRequestTimedOut()"},"type://ServiceRequestContext#whenRequestTimedOut()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2939"},"#2939"))),Object(n.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ",Object(n.b)("inlineCode",{parentName:"li"},"final")," to the various classes and methods so that a user doesn't extend them beyond the devs'\nintention. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2927"},"#2927")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.common.util.NonNullByDefault")," and ",Object(n.b)("inlineCode",{parentName:"li"},"UnstableApi")," have been moved to\n",Object(n.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.common.annotation"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2890"},"#2890")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"KeyedCircuitBreakerMapping")," and its inner class are now package-private. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2890"},"#2890"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use the static factory methods in ",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerMapping:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerMapping.html"},"type://CircuitBreakerMapping"),"."))),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("inlineCode",{parentName:"li"},"Host")," header isn't automatically translated into the ",Object(n.b)("inlineCode",{parentName:"li"},":authority")," header anymore, so that you can preserve\nthe original headers when writing a proxy server with Armeria. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2877"},"#2877")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2878"},"#2878")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"req.serviceName")," in ",Object(n.b)("a",{parentName:"li",href:"type://BuiltInProperties"},"type://BuiltInProperties")," has been renamed to ",Object(n.b)("inlineCode",{parentName:"li"},"req.service_name")," for the consistency\nwith other property names. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2958"},"#2958")),Object(n.b)("li",{parentName:"ul"},"Various classes and methods that were previously deprecated have been removed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2926"},"#2926")),Object(n.b)("li",{parentName:"ul"},"The new ",Object(n.b)("inlineCode",{parentName:"li"},"Pooled*")," API introduced in the previous release has been reverted due to design and performance\nissues. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2882"},"#2882")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2892"},"#2892"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"type://PooledObjects:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/unsafe/PooledObjects.html"},"type://PooledObjects")," for the new API."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ClientFactoryOption.PROXY_CONFIG")," has been replaced with ",Object(n.b)("a",{parentName:"li",href:"type://ClientFactoryOptions#PROXY_CONFIG_SELECTOR:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryOptions.html#PROXY_CONFIG_SELECTOR"},"type://ClientFactoryOptions#PROXY_CONFIG_SELECTOR"),".\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2752"},"#2752"))),Object(n.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bouncy Castle 1.65.01 → 1.66"),Object(n.b)("li",{parentName:"ul"},"Brave 5.12.3 → 5.12.4"),Object(n.b)("li",{parentName:"ul"},"Dropwizard 2.0.10 → 2.0.12, 1.3.23 → 1.3.24"),Object(n.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.9 → 4.1.11"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.30.2 → 1.31.0"),Object(n.b)("li",{parentName:"ul"},"Jackson 2.11.1 → 2.11.2"),Object(n.b)("li",{parentName:"ul"},"Jetty 9.4.30 → 9.4.31"),Object(n.b)("li",{parentName:"ul"},"Micrometer 1.5.2 → 1.5.3, 1.3.10 → 1.3.11"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.50 → 4.1.51",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.30 → 2.0.31"))),Object(n.b)("li",{parentName:"ul"},"Reactor 3.3.7 → 3.3.8"),Object(n.b)("li",{parentName:"ul"},"RxJava 3.0.4 → 3.0.5"),Object(n.b)("li",{parentName:"ul"},"Spring Boot 2.3.1 → 2.3.2"),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.36 → 9.0.37, 8.5.56 → 8.5.57"),Object(n.b)("li",{parentName:"ul"},"Shaded dependencies:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"completable-futures 0.3.2 → 0.3.3"),Object(n.b)("li",{parentName:"ul"},"fastutil 8.3.1 → 8.4.0")))),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(n.b)(l,{usernames:["anuraaga","codefromthecrypt","ghkim3221","heowc","ikhoon","imasahiro","jrhee17","KarboniteKream","kojilin","m50d","mauhiz","matsumana","minwoox","okue","smax48","tobias-","trustin"],mdxType:"ThankYou"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-9-mdx-b548b6af4f9478b778c9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"1ZmW":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("JkCF"),s={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:s},b=l.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"29th July 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now specify decorators for all services in a ",Object(r.b)("inlineCode",{parentName:"p"},"Server")," in a functional way. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1882"},"#1882")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1900"},"#1900")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\nsb.service(...);\n// After:\nsb.decorator((delegate, ctx, req) -> {\n    ...\n    return delegate.serve(ctx, req);\n});\n// Before:\nsb.decorator(delegate -> new SimpleServiceDecorator<HttpRequest, HttpResponse>(delegate) {\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        ...\n        return delegate().serve(ctx, req);\n    }\n});\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now use ",Object(r.b)("inlineCode",{parentName:"p"},"HealthCheckService")," which has richer functionality than its predecessor ",Object(r.b)("inlineCode",{parentName:"p"},"HttpHealthCheckService"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1878"},"#1878")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\nsb.service("/internal/l7check",\n           HealthCheckService.builder()\n                             .checkers(...)\n                             .healthyResponse(...)\n                             .unhealthyResponse(...)\n                             .longPolling(Durations.ofMinutes(1))\n                             .updatable(true)\n                             .build());\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Long-polling query support",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can wait until the server becomes healthy or unhealthy and get notified immediately."))),Object(r.b)("li",{parentName:"ul"},"Easy customization of healthy/unhealthy responses"),Object(r.b)("li",{parentName:"ul"},"Easy customization of update request handler"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You now know exact host you are sending your request to when using Armeria client. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1917"},"#1917")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It was previously not possible when you specified an ",Object(r.b)("inlineCode",{parentName:"li"},"EndpointGroup")," as the destination."),Object(r.b)("li",{parentName:"ul"},"Therefore, ",Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",Object(r.b)("inlineCode",{parentName:"li"},"null")," since this release when Armeria failed to determine the destination host."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector()")," has been added so that you still know which ",Object(r.b)("inlineCode",{parentName:"li"},"EndpointGroup")," you are connecting to."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"BraveClient")," and ",Object(r.b)("inlineCode",{parentName:"p"},"BraveService")," now accept ",Object(r.b)("inlineCode",{parentName:"p"},"HttpTracing")," as well as ",Object(r.b)("inlineCode",{parentName:"p"},"Tracing"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1223"},"#1223")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1906"},"#1906")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'Tracing tracing = ...;\n\n// Server-side\nServerBuilder sb = new ServerBuilder();\n//// Before\nsb.service("/", myService.decorate(BraveService.newDecorator(tracing)));\n//// After\nHttpTracing httpTracing = HttpTracing.create(tracing);\nsb.service("/", myService.decorate(BraveService.newDecorator(httpTracing)));\n\n// Client-side\nHttpClientBuilder cb = new HttpClientBuilder(...);\n//// Before\ncb.decorator(BraveClient.newDecorator(tracing, "myBackend"));\n//// After\ncb.decorator(BraveClient.newDecorator(httpTracing.clientOf("myBackend")));\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now create a decorating ",Object(r.b)("inlineCode",{parentName:"p"},"Service")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Client")," in a less verbose way by extending new ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecorating*")," classes. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1881"},"#1881")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1925"},"#1925")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpService extends SimpleDecoratingService<HttpRequest, HttpResponse>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcService extends SimpleDecoratingService<RpcRequest, RpcResponse>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpClient extends SimpleDecoratingClient<HttpRequest, HttpResponse>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcClient extends SimpleDecoratingClient<RpcRequest, RpcResponse>")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RpcService")," has been added for your convenience. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1881"},"#1881")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1925"},"#1925")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RpcService extends Service<RpcRequest, RpcResponse>"))))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The output type of ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLog")," sanitizer functions has been relaxed to ",Object(r.b)("inlineCode",{parentName:"li"},"?")," so that a user can write much simpler and more efficient sanitizer function. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1810"},"#1810")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1879"},"#1879"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Before\nFunction<HttpHeaders, HttpHeaders> sanitizer = headers -> {\n    return headers.toBuilder().removeAndThen("authorization").build();\n};\n// After\nFunction<HttpHeaders, Object> sanitizer = headers -> {\n    // No need to construct a new HttpHeaders object.\n    return headers.toBuilder().removeAndThen("authorization").toString();\n};\n// Even more efficiently\nFunction<HttpHeaders, Object> sanitizer = headers -> "sanitized!";\n'))),Object(r.b)("li",{parentName:"ul"},"A glob path mapping is not translated into a regex path mapping when combined with path prefix anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1929"},"#1929")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ByteBufHttpData.toInputStream()")," does not perform extra memory copy anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1918"},"#1918")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1919"},"#1919"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Armeria client now sends ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1.1")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"HEAD / HTTP/1.1"),", so that the initial protocol upgrade does not trigger business logic when a server has business logic bound at ",Object(r.b)("inlineCode",{parentName:"li"},"/"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1895"},"#1895")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1896"},"#1896")),Object(r.b)("li",{parentName:"ul"},"Response content is not sanitized twice anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1879"},"#1879")),Object(r.b)("li",{parentName:"ul"},"gRPC message compression is now enabled by default on the server side, so that the default behavior matches that of the upstream implementation. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1885"},"#1885")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1889"},"#1889")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"max-age")," attribute in a ",Object(r.b)("inlineCode",{parentName:"li"},"set-cookie")," header is now handled correctly when using Spring WebFlux. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1904"},"#1904")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where the base URL of the received request is set incorrectly when using Spring WebFlux. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1904"},"#1904")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpHealthCheckedEndpoint")," does not leak connections and requests after ",Object(r.b)("inlineCode",{parentName:"li"},"close()")," is called. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1899"},"#1899")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BraveClient")," does not trigger ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLogAvailabilityException")," anymore when the request being traced has failed without sending any data. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1911"},"#1911")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1912"},"#1912")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@ConsumesJson")," annotation now accepts JSON documents with any charsets rather than only ",Object(r.b)("inlineCode",{parentName:"li"},"UTF-8"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1920"},"#1920")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"IllegalStateException")," raised by ",Object(r.b)("inlineCode",{parentName:"li"},"pushIfAbsent()")," is now propagated properly to the ",Object(r.b)("inlineCode",{parentName:"li"},"CompletableFuture")," created by ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContext.makeContextAware()"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1920"},"#1920"))),Object(r.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpHealthCheckService")," and ",Object(r.b)("inlineCode",{parentName:"li"},"SettableHttpHealthCheckService")," have been deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckService")," and its builder. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1878"},"#1878"))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",Object(r.b)("inlineCode",{parentName:"li"},"null")," since this release. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1917"},"#1917")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Endpoint")," returned by ",Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," now always refers to a single host, not an ",Object(r.b)("inlineCode",{parentName:"li"},"EndpointGroup"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1917"},"#1917"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector().group()")," to retrieve the related ",Object(r.b)("inlineCode",{parentName:"li"},"EndpointGroup"),".")))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"gRPC 1.21.0 -> 1.22.1"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.37 -> 4.1.38"),Object(r.b)("li",{parentName:"ul"},"Tomcat 9.0.21 -> 9.0.22, 8.5.42 -> 8.5.43")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(r.b)(c,{usernames:["anuraaga","babjo","codefromthecrypt","hirakida","hyeonjames","ikhoon","imasahiro","kojilin","minwoox","trustin","woohhan"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),i=a("q1tI"),r=a.n(i),l=a("2+3N"),s=a("1lec"),c=a("+ejy"),o=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var i=Object(o.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-89-0-mdx-3eecb7a83bc62f28e92a.js.map
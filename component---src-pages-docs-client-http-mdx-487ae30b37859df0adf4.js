(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),i=a("q1tI"),n=a.n(i),c=a("/94A"),o=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return n.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}},yOki:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a("zLVn"),i=(a("q1tI"),a("7ljp")),n=a("xCMr"),c="Calling an HTTP service",o={},l={pageTitle:c,_frontmatter:o},p=n.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(p,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"calling-an-http-service",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#calling-an-http-service","aria-label":"calling an http service permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Calling an HTTP service"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#decorating-a-webclient"},"Decorating a WebClient")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#service-discovery-with-webclient"},"Service discovery with WebClient")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuring-clientfactory"},"Configuring ClientFactory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#see-also"},"See also"))),Object(i.b)("p",null,"You can create a ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," with a base URI and send a request with a relative path."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.WebClient;\nimport com.linecorp.armeria.common.AggregatedHttpResponse;\nimport com.linecorp.armeria.common.HttpHeaderNames;\nimport com.linecorp.armeria.common.HttpMethod;\nimport com.linecorp.armeria.common.RequestHeaders;\n\nWebClient webClient = WebClient.of("http://example.com/");\n\n// Send a simple GET request.\nAggregatedHttpResponse res1 = webClient.get("/foo/bar.txt").aggregate().join();\n\n// Send a GET request with an additional header.\nRequestHeaders getJson = RequestHeaders.of(HttpMethod.GET, "/foo/bar.json",\n                                           HttpHeaderNames.ACCEPT, "application/json");\n\nAggregatedHttpResponse res2 = webClient.execute(getJson).aggregate().join();\n\n// Send a simple POST request encoded in UTF-8.\nAggregatedHttpResponse res3 = webClient.post("/upload", "{ \\"foo\\": \\"bar\\" }")\n                                       .aggregate().join();\n')),Object(i.b)("p",null,"You can also create a ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," without a base URI and send a request with an absolute URI.\nThe ad-hoc ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," would be useful in the following cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sending requests to arbitrary endpoints"),Object(i.b)("li",{parentName:"ul"},"Building a proxy server"),Object(i.b)("li",{parentName:"ul"},"Handling redirected requests")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.common.HttpHeaderNames;\n\n// Create a WebClient without a base URI.\nWebClient webClient = WebClient.of();\n\n// Send a request with an absolute URI.\nAggregatedHttpResponse res1 = webClient.get("http://example.com/foo/bar.txt")\n                                       .aggregate()\n                                       .join();\n\n// Send a GET request with an authority header.\nHttpRequest request = HttpRequest.of(RequestHeaders.builder()\n                                                   .scheme(SessionProtocol.HTTP)\n                                                   .authority("example.com")\n                                                   .method(HttpMethod.GET)\n                                                   .path("/foo/bar.txt")\n                                                   .build());\nAggregatedHttpResponse res2 = webClient.execute(request).aggregate().join();\n\n// Handle a redirected request\nAggregatedHttpResponse redirected = webClient.get("http://example.com/redirect")\n                                             .aggregate()\n                                             .join();\nassert redirected.status() == HttpStatus.TEMPORARY_REDIRECT;\nString location = redirected.headers().get(HttpHeaderNames.LOCATION);\nAggregatedHttpResponse actual = webClient.get(location).aggregate().join();\n')),Object(i.b)("h2",{id:"decorating-a-webclient",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#decorating-a-webclient","aria-label":"decorating a webclient permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Decorating a WebClient"),Object(i.b)("p",null,"You can enrich your ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," by decorating it with decorators.\nA decorator wraps another client to intercept an outgoing request or an incoming response.\nA lot of core features such as logging, metrics and distributed tracing are implemented as decorators."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient")," which ",Object(i.b)("a",{parentName:"li",href:"/docs/advanced-zipkin"},"traces")," outbound requests using\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/openzipkin/brave"},"Brave"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," which ",Object(i.b)("a",{parentName:"li",href:"/docs/client-circuit-breaker"},"opens a circuit")," on failed responses."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://CookieClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/cookie/CookieClient.html"},"type://CookieClient")," which stores cookies of responses using ",Object(i.b)("a",{parentName:"li",href:"type://CookieJar:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/cookie/CookieJar.html"},"type://CookieJar"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://ConcurrencyLimitingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/limit/ConcurrencyLimitingClient.html"},"type://ConcurrencyLimitingClient")," which limits the concurrent number of active requests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://ContentPreviewingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/ContentPreviewingClient.html"},"type://ContentPreviewingClient")," which\n",Object(i.b)("a",{parentName:"li",href:"/docs/advanced-structured-logging/#enabling-content-previews"},"previews the content")," of\nrequests and responses."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://DecodingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/encoding/DecodingClient.html"},"type://DecodingClient")," which decompresses a\n",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"},"compressed")," response."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://MetricCollectingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/metric/MetricCollectingClient.html"},"type://MetricCollectingClient")," which\n",Object(i.b)("a",{parentName:"li",href:"/docs/advanced-metrics#collecting-client-side-metrics"},"collects metrics")," using\n",Object(i.b)("a",{parentName:"li",href:"https://micrometer.io/"},"Micrometer"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient")," which logs requests and responses."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient")," which ",Object(i.b)("a",{parentName:"li",href:"/docs/client-retry"},"automatically retries")," failed requests.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import brave.http.HttpTracing;\nimport com.linecorp.armeria.client.brave.BraveClient;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreaker;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreakerClient;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRule;\nimport com.linecorp.armeria.client.cookie.CookieClient;\nimport com.linecorp.armeria.client.encoding.DecodingClient;\nimport com.linecorp.armeria.client.limit.ConcurrencyLimitingClient;\nimport com.linecorp.armeria.client.logging.ContentPreviewingClient;\nimport com.linecorp.armeria.client.logging.LoggingClient;\nimport com.linecorp.armeria.client.metric.MetricCollectingClient;\nimport com.linecorp.armeria.client.retry.RetryRule;\nimport com.linecorp.armeria.client.retry.RetryingClient;\nimport com.linecorp.armeria.common.metric.MeterIdPrefixFunction;\n\nHttpTracing tracing = ...;\nWebClient.builder()\n         .decorator(BraveClient.newDecorator(tracing))\n         .decorator(CircuitBreakerClient.newDecorator(\n             CircuitBreaker.ofDefaultName(), CircuitBreakerRule.onServerErrorStatus()))\n         .decorator(ConcurrencyLimitingClient.newDecorator(64))\n         .decorator(ContentPreviewingClient.newDecorator(128))\n         .decorator(CookieClient.newDecorator())\n         .decorator(DecodingClient.newDecorator())\n         .decorator(MetricCollectingClient.newDecorator(\n             MeterIdPrefixFunction.ofDefault("armeria.client")))\n         .decorator(LoggingClient.newDecorator())\n         .decorator(RetryingClient.newDecorator(RetryRule.onUnprocessed()))\n         ...\n         .build();\n')),Object(i.b)("p",null,"Please see ",Object(i.b)("a",{parentName:"p",href:"/docs/client-decorator"},"Decorating a client")," to learn how it works."),Object(i.b)("h2",{id:"service-discovery-with-webclient",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#service-discovery-with-webclient","aria-label":"service discovery with webclient permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Service discovery with WebClient"),Object(i.b)("p",null,"Armeria provides the various ",Object(i.b)("a",{parentName:"p",href:"https://microservices.io/patterns/client-side-discovery.html"},"service discovery"),"\nmechanisms with ",Object(i.b)("a",{parentName:"p",href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"},"type://EndpointGroup"),",\nfrom Kubernetes-style ",Object(i.b)("a",{parentName:"p",href:"/docs/client-service-discovery#dns-based-service-discovery-with-dnsendpointgroup"},"DNS records"),"\nto ",Object(i.b)("a",{parentName:"p",href:"/docs/client-service-discovery#consul-based-service-discovery-with-consulendpointgroup"},"Consul"),".\nRequests are sent to dynamically retrieved ",Object(i.b)("a",{parentName:"p",href:"typeplural://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"typeplural://Endpoint")," by specifying an ",Object(i.b)("a",{parentName:"p",href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"},"type://EndpointGroup"),"\nto a ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.endpoint.dns.DnsServiceEndpointGroup;\n\n// Retrieve the Endpoint list from SRV records\nDnsServiceEndpointGroup group =\n    DnsServiceEndpointGroup.of("k8s.default.svc.cluster.local.");\n    \n// Filter out unhealthy endpoints\nHealthCheckedEndpointGroup healthCheckedGroup =\n        HealthCheckedEndpointGroup.of(group, "/monitor/l7check");\n        \nWebClient.builder(SessionProtocol.HTTP, healthCheckedGroup)\n         ...\n         .build();\n')),Object(i.b)("p",null,"Please check ",Object(i.b)("a",{parentName:"p",href:"/docs/client-service-discovery"},"Client-side load balancing and service discovery"),"\nfor more information."),Object(i.b)("h2",{id:"configuring-clientfactory",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#configuring-clientfactory","aria-label":"configuring clientfactory permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configuring ClientFactory"),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"},"type://ClientFactory")," manages connections and protocol-specific properties.\nYou can build your own ",Object(i.b)("a",{parentName:"p",href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"},"type://ClientFactory")," using ",Object(i.b)("a",{parentName:"p",href:"type://ClientFactoryBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryBuilder.html"},"type://ClientFactoryBuilder")," and\nset it through ",Object(i.b)("a",{parentName:"p",href:"type://WebClientBuilder#factory()"},"type://WebClientBuilder#factory()"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.ClientFactory;\n// Create a customized ClientFactory\nClientFactory clientFactory =\n    ClientFactory.builder()\n                 // Increase the connect timeout from 3.2s to 10s.\n                 .connectTimeout(Duration.ofSeconds(10))\n                 .\n                 .build();\n\nWebClient client =\n        WebClient.builder()\n                 .factory(clientFactory)\n                 .build();\n")),Object(i.b)("p",null,"Please check ",Object(i.b)("a",{parentName:"p",href:"/docs/client-factory"},"Customizing a ",Object(i.b)("inlineCode",{parentName:"a"},"ClientFactory")," with ",Object(i.b)("inlineCode",{parentName:"a"},"ClientFactoryBuilder")),"\nfor the details."),Object(i.b)("h2",{id:"see-also",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/client-retrofit"},"Retrofit integration"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-client-http-mdx-487ae30b37859df0adf4.js.map
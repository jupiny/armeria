(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},fUlv:function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return c})),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t("zLVn"),r=(t("q1tI"),t("7ljp")),i=t("xCMr"),o=t("aRgT"),c="Scala integration",l={},s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",a)}},p=s("Tip"),m=s("CodeBlock"),b={pageTitle:c,_frontmatter:l},u=i.a;function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(u,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"scala-integration",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#scala-integration","aria-label":"scala integration permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Scala integration"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#conversion-between-java-completionstage-and-scala-future"},"Conversion between Java CompletionStage and Scala Future")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#executioncontextssamethread"},"ExecutionContexts.sameThread")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#context-aware-executioncontext"},"Context-aware ExecutionContext")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#collection-converters"},"Collection converters")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#implicit-conversion-between-java-duration-and-scala-finiteduration"},"Implicit conversion between Java Duration and Scala FiniteDuration"))),Object(r.b)(p,{mdxType:"Tip"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-scala")," module is still experimental. We may make a breaking change if we find a better way\nto bridge Armeria to Scala.")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria.scala")," package provides various useful extension methods and implicit conversions\nfor an Armeria application written in ",Object(r.b)("a",{parentName:"p",href:"https://www.scala-lang.org/"},"Scala"),". To enable it, you first need\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-scala_2.12")," or ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-scala_2.13")," dependency:"),Object(r.b)(m,{language:"groovy",filename:"build.sbt",mdxType:"CodeBlock"},'\nlibraryDependencies += "com.linecorp.armeria" %% "armeria-scala" % "'+o["com.linecorp.armeria:armeria-bom"]+'"\n'),Object(r.b)("p",null,"and then import ",Object(r.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria.scala.implicits._")," in your Scala code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.scala.implicits._\n")),Object(r.b)("h2",{id:"conversion-between-java-completionstage-and-scala-future",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#conversion-between-java-completionstage-and-scala-future","aria-label":"conversion between java completionstage and scala future permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Conversion between Java ",Object(r.b)("inlineCode",{parentName:"h2"},"CompletionStage")," and Scala ",Object(r.b)("inlineCode",{parentName:"h2"},"Future")),Object(r.b)("p",null,"You can convert a Java ",Object(r.b)("inlineCode",{parentName:"p"},"CompletionStage")," to a Scala ",Object(r.b)("inlineCode",{parentName:"p"},"Future")," using the ",Object(r.b)("inlineCode",{parentName:"p"},"toScala")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'import com.linecorp.armeria.common.HttpResponse\nimport com.linecorp.armeria.scala.implicits._\nimport com.linecorp.armeria.server.Server\n\nimport java.util.concurrent.CompletableFuture\nimport scala.concurrent.Future\n\nval server =\n  Server\n    .builder()\n    .service("/", (ctx, req) => HttpResponse.of(200))\n    .build()\n\nval javaFuture: CompletableFuture[Void] = server.start()\nval scalaFuture: Future[Unit] = javaFuture.toScala // 👈\n')),Object(r.b)("p",null,"You can also convert a Scala ",Object(r.b)("inlineCode",{parentName:"p"},"Future")," to a Java ",Object(r.b)("inlineCode",{parentName:"p"},"CompletionStage")," using the ",Object(r.b)("inlineCode",{parentName:"p"},"toJava")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent.CompletionStage\nval javaFuture: CompletionStage[Void] = scalaFuture.toJava // 👈\n")),Object(r.b)("p",null,"You'll also find the extension method ",Object(r.b)("inlineCode",{parentName:"p"},"toHttpResponse")," added to ",Object(r.b)("inlineCode",{parentName:"p"},"Future[HttpResponse]")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"CompletionStage[HttpResponse]")," when converting an asynchronous result into an ",Object(r.b)("a",{parentName:"p",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.common.MediaType\nimport com.linecorp.armeria.scala.implicits._\n\nval future: Future[String] = ...\nval response =\n  future\n    .map { value => HttpResponse.of(MediaType.PLAIN_TEXT_UTF_8, value) }\n    .toHttpResponse // 👈\n")),Object(r.b)(p,{mdxType:"Tip"},Object(r.b)("p",null,"You might wonder why we implemented our own extension methods rather then letting you use\n",Object(r.b)("inlineCode",{parentName:"p"},"FutureConverters")," in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/scala/scala-java8-compat"},Object(r.b)("inlineCode",{parentName:"a"},"scala-java8-compat")),".\nIt is because ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-scala")," provides richer and more natural conversions, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Conversion to ",Object(r.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse")),Object(r.b)("li",{parentName:"ul"},"Conversion from ",Object(r.b)("inlineCode",{parentName:"li"},"CompletionStage[Void]")," to ",Object(r.b)("inlineCode",{parentName:"li"},"Future[Unit]")),Object(r.b)("li",{parentName:"ul"},"Conversion from ",Object(r.b)("inlineCode",{parentName:"li"},"Future[Unit]")," to ",Object(r.b)("inlineCode",{parentName:"li"},"CompletionStage[Void]")))),Object(r.b)("h2",{id:"executioncontextssamethread",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#executioncontextssamethread","aria-label":"executioncontextssamethread permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(r.b)("inlineCode",{parentName:"h2"},"ExecutionContexts.sameThread")),Object(r.b)("p",null,"In an asynchronous system that the entire application logic runs on event loops, it is often useful\nin terms of performance to invoke the callbacks attached to a ",Object(r.b)("inlineCode",{parentName:"p"},"Future")," directly rather than submitting\nthe callbacks to another ",Object(r.b)("inlineCode",{parentName:"p"},"ExecutionContext"),". You can use ",Object(r.b)("inlineCode",{parentName:"p"},"ExecutionContexts.sameThread")," in such a case:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.common.HttpRequest\nimport com.linecorp.armeria.scala.ExecutionContexts.sameThread\nimport com.linecorp.armeria.scala.implicits._\nimport com.linecorp.armeria.server.HttpService\nimport com.linecorp.armeria.server.ServiceRequestContext\n\nimport scala.concurrent.ExecutionContext\n\nclass MyHttpService extends HttpService {\n  override def serve(ctx: ServiceRequestContext, req: HttpRequest): HttpResponse = {\n    implicit val ec: ExecutionContext = sameThread // 👈\n\n    // Perform some asynchronous operation.\n    val future: Future[String] = ...\n\n    // Convert the result to a response.\n    future\n      .map { value =>\n        HttpResponse.of(MediaType.PLAIN_TEXT_UTF_8, value)\n      }\n      .toHttpResponse\n  }\n}\n")),Object(r.b)("h2",{id:"context-aware-executioncontext",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#context-aware-executioncontext","aria-label":"context aware executioncontext permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Context-aware ",Object(r.b)("inlineCode",{parentName:"h2"},"ExecutionContext")),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"eventLoopExecutionContext")," extension method in ",Object(r.b)("a",{parentName:"p",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," to specify a Scala\n",Object(r.b)("inlineCode",{parentName:"p"},"ExecutionContext")," that submits all tasks to the current context's event loop thread:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.scala.implicits._\n\nval ctx = ServiceRequestContext.current\nimplicit val ec: ExecutionContext = ctx.eventLoopExecutionContext // 👈\nFuture {\n  // Do some non-blocking job here.\n}\n")),Object(r.b)("p",null,"For long-running tasks running on the server side, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"blockingTaskExecutionContext"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.scala.implicits._\n\nval ctx = ServiceRequestContext.current\nimplicit val ec: ExecutionContext = ctx.blockingTaskExecutionContext // 👈\nFuture {\n  Thread.sleep(1000)\n}\n")),Object(r.b)("h2",{id:"collection-converters",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#collection-converters","aria-label":"collection converters permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Collection converters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria.scala.implicits._")," will add ",Object(r.b)("inlineCode",{parentName:"p"},"toScala")," and ",Object(r.b)("inlineCode",{parentName:"p"},"toJava")," conversion extension methods to\nJava collections and Scala collections respectively. It means you don't need to import\n",Object(r.b)("inlineCode",{parentName:"p"},"scala.jdk.CollectionConverters._")," if you imported Armeria's implicits."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.scala.implicits._\nimport com.linecorp.armeria.server.Server\n\nval server: Server = ...\nval scalaList = server.activePorts.toScala // 👈\n")),Object(r.b)("h2",{id:"implicit-conversion-between-java-duration-and-scala-finiteduration",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#implicit-conversion-between-java-duration-and-scala-finiteduration","aria-label":"implicit conversion between java duration and scala finiteduration permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implicit conversion between Java ",Object(r.b)("inlineCode",{parentName:"h2"},"Duration")," and Scala ",Object(r.b)("inlineCode",{parentName:"h2"},"FiniteDuration")),Object(r.b)("p",null,"A Scala ",Object(r.b)("inlineCode",{parentName:"p"},"FiniteDuration")," is implicitly converted into a Java ",Object(r.b)("inlineCode",{parentName:"p"},"Duration")," and vice versa for your convenience:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import com.linecorp.armeria.scala.implicits._\nimport scala.concurrent.duration._\n\nServer\n  .builder()\n  .requestTimeout(5.seconds) // 👈\n  ...\n")))}d.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),i=t.n(r),o=t("/94A"),c=t("+ejy");a.a=function(e){var a=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:a,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-scala-mdx-5589e9330aa36cdfdbfe.js.map
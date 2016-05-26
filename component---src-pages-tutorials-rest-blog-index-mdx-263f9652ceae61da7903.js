(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{FvYO:function(e,t,a){"use strict";var r=a("Wbzz"),i=a("q1tI"),n=a.n(i),l=a("HWmb"),c=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("3172452987").allMdx.nodes;return n.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:l,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')},a7HZ:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var r,i=a("zLVn"),n=(a("q1tI"),a("7ljp")),l=a("FvYO"),c=a("aRgT"),o="REST tutorial introduction",s={},b=(r="CodeBlock",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),p={pageTitle:o,_frontmatter:s},m=l.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(m,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"rest-tutorial-introduction",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#rest-tutorial-introduction","aria-label":"rest tutorial introduction permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"REST tutorial introduction"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#assumptions"},"Assumptions"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#sample-service"},"Sample service")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#sample-service-structure"},"Sample service structure")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#buildgradle"},"build.gradle")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#build-and-run-sample-service"},"Build and run sample service"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#try-writing-blog-service-yourself"},"Try writing blog service yourself")))),Object(n.b)("p",null,"Using Armeria's annotations, you can build RESTful services on the go.\nThrough this tutorial, you'll learn to build a RESTful service with Armeria.\nIn particular, you'll be using these Armeria features:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/server-annotated-service"},"Service annotations")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/server-annotated-service#converting-an-http-request-to-a-java-object"},"Request converter")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/server-annotated-service#injecting-value-of-parameters-and-http-headers-into-a-java-object"},"Parameter injection")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/server-annotated-service#handling-exceptions"},"Exception handler")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/server-annotated-service/#specifying-a-blocking-task-executor"},"Blocking task executor"))),Object(n.b)("p",null,"This tutorial is based on a ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/tree/master/tutorials/rest-api-annotated-service"},"sample service"),", a minimal blog service, with which you can create, read, update, and delete blog posts.\nTo keep our focus on Armeria, this tutorial and the sample service use memory-based operations instead of database operations."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"#try-writing-blog-service-yourself"},"Try writing a service yourself")," by following this tutorial or have a go at ",Object(n.b)("a",{parentName:"p",href:"#build-and-run-sample-service"},"running the sample service")," right away."),Object(n.b)("h2",{id:"assumptions",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#assumptions","aria-label":"assumptions permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Assumptions"),Object(n.b)("p",null,"This tutorial assumes that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Experience in building services in Java"),Object(n.b)("li",{parentName:"ul"},"Experience in Java frameworks for server-side programming"),Object(n.b)("li",{parentName:"ul"},"Understanding of RESTful APIs and how to implement them")),Object(n.b)("h2",{id:"prerequisites",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#prerequisites","aria-label":"prerequisites permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Prerequisites"),Object(n.b)("p",null,"To run and develop the sample service, set your computer with the requirements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JDK 11 or higher"),Object(n.b)("li",{parentName:"ul"},"Gradle: Set your Gradle to compile Java with the ",Object(n.b)("a",{parentName:"li",href:"/docs/setup/#configure--parameters-javac-option"},"-parameters")," option")),Object(n.b)("h2",{id:"sample-service",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#sample-service","aria-label":"sample service permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Sample service"),Object(n.b)("p",null,"The sample service provides you implementations of CRUD operations as specified below."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Operation"),Object(n.b)("th",{parentName:"tr",align:null},"Method"),Object(n.b)("th",{parentName:"tr",align:null},"Annotation"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Create"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"createBlogPost()")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"type://@Post:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Post.html"},"type://@Post"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Read"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"getBlogPost()"),", ",Object(n.b)("inlineCode",{parentName:"td"},"getBlogPosts()")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"type://@Get:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Get.html"},"type://@Get"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Update"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"updateBlogPost()")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"type://@Put:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Put.html"},"type://@Put"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Delete"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"deleteBlogPost()")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"type://@Delete:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Delete.html"},"type://@Delete"))))),Object(n.b)("h3",{id:"sample-service-structure",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#sample-service-structure","aria-label":"sample service structure permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Sample service structure"),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/tree/master/tutorials/rest-api-annotated-service"},"sample service code")," consists of the following folders and files."),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/svg/dL112i903BplAt9VsZSKHV0YYFO3QJUKbUrktKrBeVXtKojMeIV98M6OcKnI9CR82HshIKsbqX0fSOQTpT3xmCXaiaHni3KfhI75Mfg65gsV1mqt7F0rQQ0HsyvHZh6bQ36VTHJpoeLcOMZOeRdGlPSTXx6cZctmH_J62Mqr4ff8pY7n9lWss0SlxhoXl2vvV_2J1Fu0mAB_A_xgNj9NFAXwwqpUH9HJr4Eg86_cjpu1",alt:"PlantUML"})),Object(n.b)("h3",{id:"buildgradle",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#buildgradle","aria-label":"buildgradle permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"build.gradle"),Object(n.b)("p",null,"Here is a part of the build.gradle file for the sample service. If you are trying the tutorial from scratch, base your file on the sample service's."),Object(n.b)(b,{language:"groovy",filename:"build.gradle",mdxType:"CodeBlock"},"\n  apply plugin: 'java'\n  apply plugin: 'idea'\n  apply plugin: 'eclipse'\n\n  repositories {\n      mavenCentral()\n  }\n\n  dependencies {\n      implementation \"com.linecorp.armeria:armeria:"+c["com.linecorp.armeria:armeria-bom"]+"\"\n\n      // Logging\n      runtimeOnly 'ch.qos.logback:logback-classic:"+c["ch.qos.logback:logback-classic"]+"'\n      runtimeOnly 'org.slf4j:log4j-over-slf4j:"+c["org.slf4j:log4j-over-slf4j"]+"'\n  }\n"),Object(n.b)("h2",{id:"build-and-run-sample-service",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#build-and-run-sample-service","aria-label":"build and run sample service permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Build and run sample service"),Object(n.b)("p",null,"Have a go at running the sample service and experience the outcome of this tutorial.\nUsing Armeria's ",Object(n.b)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation Service"),", you can see a server running, receiving requests and sending responses."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Download the code from ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria-examples/tree/master/tutorials/rest-api-annotated-service"},"here"),"."),Object(n.b)("li",{parentName:"ol"},"Build the sample service using the Gradle Wrapper.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"$ ./gradlew build\n"))),Object(n.b)("li",{parentName:"ol"},"Run the sample service again, using the Gradle Wrapper.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"$ ./gradlew run\n"))),Object(n.b)("li",{parentName:"ol"},"Open the Documentation service page on your web browser at ",Object(n.b)("a",{parentName:"li",href:"http://127.0.0.1:8080/docs"},"http://127.0.0.1:8080/docs"),".")),Object(n.b)("h2",{id:"try-writing-blog-service-yourself",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#try-writing-blog-service-yourself","aria-label":"try writing blog service yourself permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Try writing blog service yourself"),Object(n.b)("p",null,"Try writing the blog service yourself by following the guides in the given order:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/create-server"},"Creating a server")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/prepare-data-object"},"Preparing a data object")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/add-services-to-server"},"Adding services to server")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/implement-create"},"Implementing CREATE operation")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/implement-read"},"Implementing READ operation")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/implement-update"},"Implementing UPDATE operation")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"/tutorials/rest/blog/implement-delete"},"Implementing DELETE operation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-index-mdx-263f9652ceae61da7903.js.map
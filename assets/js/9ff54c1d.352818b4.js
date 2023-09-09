"use strict";(self.webpackChunkhfc_website=self.webpackChunkhfc_website||[]).push([[327],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Why Haskell",title:"Why Haskell",sidebar_position:3,slug:"/haskell"},s=void 0,p={unversionedId:"why-haskell",id:"why-haskell",title:"Why Haskell",description:"Why Haskell?",source:"@site/docs/why-haskell.mdx",sourceDirName:".",slug:"/haskell",permalink:"/docs/haskell",draft:!1,editUrl:"https://github.com/hfco/docs/tree/master/docs/why-haskell.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Why Haskell",title:"Why Haskell",sidebar_position:3,slug:"/haskell"},sidebar:"docsSidebar",previous:{title:"The Cardano Node",permalink:"/docs/cardano"}},u={},c=[{value:"Why Haskell?",id:"why-haskell",level:2},{value:"Why not Haskell?",id:"why-not-haskell",level:2},{value:"Haskell is Production Ready",id:"haskell-is-production-ready",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-haskell"},"Why Haskell?"),(0,i.kt)("p",null,"There are many reasons why Haskell is a good choice of programming language.  These include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Haskell lets me write software the way I think.   As a purely functional language, it lets me compose programs from small, easily understood\nbuilding blocks that are highly malleable and easily refactored.  It is ",(0,i.kt)("em",{parentName:"p"},"compositional"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As a strongly typed language, Haskell stops me making mistakes in the code that I write.  I may need to spend some time thinking about the right\ntypes or deciphering type errors, but that is time well spent.  Once the code type checks, it almost always works exactly as I intended.\nHaskell has one of the most advanced type systems of any programming language.  That means that more errors are caught, and I can write more correct programs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Haskell cleanly separates the what from the how.  I can write a function and use it in many different ways.  Non-strictness means that I do not need to be\nexplicit about termination conditions or how data is consumed.  The same function can iterate over a finite or infinite input as I need it to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Functions are data.  Data are functions.  There is no need to treat data specially.  A constructor is just a function that can be used like any other function.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Processes are functions.  Functions are processes.  Lazy evaluation makes any function into a streaming one.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can focus on establishing correctness first, and then worry about performance.  Once a function is known to work, it is easy to optimise it for time/space performance if you need to.  You can get it right, ",(0,i.kt)("strong",{parentName:"p"},"then")," get it fast if you need to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lazy evaluation means you don't have to think so hard.  Functions always compose.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The module system is simple, but powerful.  It is almost as powerful as the Standard ML module solution, but much simpler.  Type classes can do much of the work that is done\nby functors in other languages.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The expression language is simple but powerful.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type classes allow new type structures to be easily defined.  Groups of")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Haskell has an extremely rich and well structured set of numerical types, including fixed precision and infinite precision integers, complex numbers, rational numbers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Monadic I/O cleanly separates pure code (expressions) from effectful code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polymorphism makes it easy to write generic function definitions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Haskell has great support for metaprogamming via generics, type families, template Haskell, ...")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Quickcheck for property testing is a great way to find bugs in Haskell code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scala is a gateway drug.  Scala programmers generally love Haskell.  Scala provides a way to move from imperative to functional programming.  Thank you, Martin :)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The IOG NoThunks library makes it easier to write code that has easily understood performance properties."))),(0,i.kt)("h2",{id:"why-not-haskell"},"Why not Haskell?"),(0,i.kt)("p",null,"No language is perfect.  The main issues with using Haskell are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Non-strictness can make it hard to debug performance issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is no printf to help with debugging (but Debug.Trace is very useful).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Partial evaluation can be hard to understand.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type errors can be confusing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Badly written programs can be hard to understand, especially if they are highly polymorphic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Haskell is not well integrated into some IDEs - it has its own standard toolchain and build systems that are largely CLI based and language-specific")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is not good support for development on Windows.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some of the community libraries are out-of-date or lack important features.  It is necessary to assess a library's quality and suitability before starting development with it.\nIt may be necessary to develop new libraries even for fairly common things.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It can be necessary to use compiler-specific language extensions to achieve specific effects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since Haskell is the main language that is used for programming language research, many new and abstruse ideas are expressed in Haskell, and are implemented as language extensions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most developers are still taught conventional imperative development techniques (genuine object orientation is much less widely used, despite the hype), so the notation can be\nunfamiliar."))),(0,i.kt)("h2",{id:"haskell-is-production-ready"},"Haskell is Production Ready"),(0,i.kt)("p",null,"In the early days of Haskell development, around 1990, we would often discuss how to make Haskell a success. It was relatively easy to work\nout how to be a success in the (mostly academic) functional programming community of the time"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"don't compromise on core principles - non-strictness, strong typing, purity, type inference"),(0,i.kt)("li",{parentName:"ul"},"provide a rich, powerful, compact but familiar syntax"),(0,i.kt)("li",{parentName:"ul"},"make it easy to experiment with new features")),(0,i.kt)("p",null,"Making Haskell production ready was more of a challenge, but one that Kevin Hammond took on with Phil Wadler, Simon Peyton Jones and others.\nThe key issues were to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"make sure that the module system was flexible and powerful enough for commercial use, but which was simple enough to be easily understood"),(0,i.kt)("li",{parentName:"ul"},"ensure that the I/O system could be easily extended by users as well as by language designers/implementors"),(0,i.kt)("li",{parentName:"ul"},"provide a flexible set of effects: exceptions etc"),(0,i.kt)("li",{parentName:"ul"},"develop a set of libraries that could be used for real development: Posix etc."),(0,i.kt)("li",{parentName:"ul"},"be conservative in the design"),(0,i.kt)("li",{parentName:"ul"},"provide syntactic choices that would allow developers to pick the right way to express their coding problems"),(0,i.kt)("li",{parentName:"ul"},"standardise on a core set of features so that the language was stable"),(0,i.kt)("li",{parentName:"ul"},"produce an optimising compiler"),(0,i.kt)("li",{parentName:"ul"},"provide good supporting tools and environments")))}h.isMDXComponent=!0}}]);
# About HFC

HFC is **the** Hard Fork Company.   It is the driving force behind the highly successful Cardano blockchain.
Its DNA is firmly embedded in advanced high assurance blockchain technologies through the use of

- Formal Methods
- Pure Functional Programming
- Research-driven Software Development
- Advanced Performance Prediction and Monitoring
- Novel Networking Technologies

as applied to the novel proof-of-stake Cardano blockchain.

Put simply, we offer a one-stop-shop for all things that are core Cardano: consensus and ledger changes, peer-to-peer and other networking infrastructure,
new CLI commands, code integration and testing, design and implementation, code review, prototyping and design evaluation, formal specification and design,
performance analysis, security analysis, and unparalleled knowledge of the Cardano ecosystem, Cardano core technologies and the Cardano design and deployment.

## Mission Statement

*Include agreed mission statement here*

## The Cardano Node

The Cardano node is the largest open source project ever built using Haskell. It is a substantial code base, comprising almost 400,000 lines of code.
Despite being an extremely large and complex code base, with tight real time, networking and memory requirements, a requirement
for high availability, and a requirement for high assurance, there have been an impressively
low number of actual bugs reported (around 500), most of them very simple.  That is, about 1.25 bugs per thousand lines of code.
If written in a conventional imperative language, such as C++ or Java, not only would the code be larger (by about a factor of 2 to 5),
it would also likely have many more bugs (about 18 per thousand lines of code for typical production quality code, produced by good industrial
developers, or a total of about 15,000-35,000 bugs).

There are several reasons for this, notably:

- Haskell is purely functional, so it is easier to confirm functional correctness; side-effects do not need to be considered
- The developer team is highly professional and motivated to produce high quality software even if this takes more time
- We are following a formal methods process that is geared to our engineering needs
- We can use excellent property-based testing techniques to catch problems early in the development cycle
- Haskell is a mature and production-ready language - it is now over 30 years old and much work has been done to make it useful in practice

### Haskell is Production Ready

In the early days of Haskell development, around 1990, we would often discuss how to make Haskell a success. It was relatively easy to work
out how to be a success in the (mostly academic) functional programming community of the time

- don't compromise on core principles - non-strictness, strong typing, purity, type inference
- provide a rich, powerful, compact but familiar syntax
- make it easy to experiment with new features

Making Haskell production ready was more of a challenge, but one that Kevin Hammond took on with Phil Wadler, Simon Peyton Jones and others.
The key issues were to:

- make sure that the module system was flexible and powerful enough for commercial use, but which was simple enough to be easily understood
- ensure that the I/O system could be easily extended by users as well as by language designers/implementors
- provide a flexible set of effects: exceptions etc
- develop a set of libraries that could be used for real development: Posix etc.
- be conservative in the design
- provide syntactic choices that would allow developers to pick the right way to express their coding problems
- standardise on a core set of features so that the language was stable
- produce an optimising compiler
- provide good supporting tools and environments

## Why Haskell?

There are many reasons why Haskell is a good choice of programming language.  These include:

1. Haskell lets me write software the way I think.   As a purely functional language, it lets me compose programs from small, easily understood
building blocks that are highly malleable and easily refactored.  It is *compositional*.

1. As a strongly typed language, Haskell stops me making mistakes in the code that I write.  I may need to spend some time thinking about the right
types or deciphering type errors, but that is time well spent.  Once the code type checks, it almost always works exactly as I intended. 
Haskell has one of the most advanced type systems of any programming language.  That means that more errors are caught, and I can write more correct programs.

1. Haskell cleanly separates the what from the how.  I can write a function and use it in many different ways.  Non-strictness means that I do not need to be
explicit about termination conditions or how data is consumed.  The same function can iterate over a finite or infinite input as I need it to.

1. Functions are data.  Data are functions.  There is no need to treat data specially.  A constructor is just a function that can be used like any other function.

1. Processes are functions.  Functions are processes.  Lazy evaluation makes any function into a streaming one.

1. You can focus on establishing correctness first, and then worry about performance.  Once a function is known to work, it is easy to optimise it for time/space performance if you need to.  You can get it right, **then** get it fast if you need to.

1. Lazy evaluation means you don't have to think so hard.  Functions always compose.

1. The module system is simple, but powerful.  It is almost as powerful as the Standard ML module solution, but much simpler.  Type classes can do much of the work that is done
by functors in other languages.

1. The expression language is simple but powerful.

1. Type classes allow new type structures to be easily defined.  Groups of 

1. Haskell has an extremely rich and well structured set of numerical types, including fixed precision and infinite precision integers, complex numbers, rational numbers.

1. Monadic I/O cleanly separates pure code (expressions) from effectful code.

1. Polymorphism makes it easy to write generic function definitions.

1. Haskell has great support for metaprogamming via generics, type families, template Haskell, ...

1. Quickcheck for property testing is a great way to find bugs in Haskell code.

  1. Scala is a gateway drug.  Scala programmers generally love Haskell.  Scala provides a way to move from imperative to functional programming.  Thank you, Martin :)

1. The IOG NoThunks library makes it easier to write code that has easily understood performance properties.


## Why not Haskell?

No language is perfect.  The main issues with using Haskell are:

- Non-strictness can make it hard to debug performance issues.

- There is no printf to help with debugging (but Debug.Trace is very useful).

- Partial evaluation can be hard to understand.

- Type errors can be confusing.

- Badly written programs can be hard to understand, especially if they are highly polymorphic.

- Haskell is not well integrated into some IDEs - it has its own standard toolchain and build systems that are largely CLI based and language-specific

- There is not good support for development on Windows.

- Some of the community libraries are out-of-date or lack important features.  It is necessary to assess a library's quality and suitability before starting development with it.
It may be necessary to develop new libraries even for fairly common things.

- It can be necessary to use compiler-specific language extensions to achieve specific effects.

- Since Haskell is the main language that is used for programming language research, many new and abstruse ideas are expressed in Haskell, and are implemented as language extensions.

- Most developers are still taught conventional imperative development techniques (genuine object orientation is much less widely used, despite the hype), so the notation can be
  unfamiliar.
  

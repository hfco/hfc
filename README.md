# HFC site

## Why Haskell?

Haskell lets me write software the way I think.   As a purely functional language, it lets me compose programs from small, easily understood
building blocks that are highly malleable and easily refactored.  It is *compositional*.

As a strongly typed language, Haskell stops me making mistakes in the code that I write.  I may need to spend some time thinking about the right
types or deciphering type errors, but that is time well spent.  Once the code type checks, it almost always works exactly as I intended. 
Haskell has one of the most advanced type systems of any programming language.  That means that more errors are caught, and I can write more correct programs.

Haskell cleanly separates the what from the how.  I can write a function and use it in many different ways.  Non-strictness means that I do not need to be
explicit about termination conditions or how data is consumed.  The same function can iterate over a finite or infinite input as I need it to.

Functions are data.  Data are functions.  There is no need to treat data specially.  A constructor is just a function that can be used like any other function.

Processes are functions.  Functions are processes.  Lazy evaluation makes any function into a streaming one.

Focus on establishing correctness first.  Once a function is known to work, it is easy to optimise it for time/space performance.  You can get it right, **then** get it fast if you need to.

Lazy evaluation means you don't have to think so hard.  Functions always compose.

The module system is simple, but powerful.  It is almost as powerful as the Standard ML module solution, but much simpler.  Type classes can do much of the work that is done
by functors in other languages.

The expression language is simple but powerful.

Type classes allow new type structures to be easily defined.  Groups of 

Haskell has an extremely rich and well structured set of numerical types, including fixed precision and infinite precision integers, complex numbers, rational numbers.

Monadic I/O cleanly separates pure code (expressions) from effectful code.

Polymorphism makes it easy to write generic function definitions.

Quickcheck for property testing is a great way to find bugs in Haskell code.

The IOG NoThunks library makes it easier to write code that has easily understood performance properties.


## Why not Haskell?

Non-strictness can make it hard to debug performance issues.

There is no printf to help with debugging (but Debug.Trace is very useful).

Partial evaluation can be hard to understand.

Type errors can be confusing.

Badly written programs can be hard to understand, especially if they are highly polymorphic.

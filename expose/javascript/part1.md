1. "values added:  20" is printed
2. "final result:  20" is printed
3. var should not be used because it has a function scope, which means it can be accessed by anything inside the function, and does not respect block-level scoping, which means it can cause irregularities/unexpected/undesired results.
4. "values added:  20" is printed
5. It gave an error "ReferenceError" as it says result was not defined, as using let respects block-level scoping, unlike var.
6. Nothing is printed at line 9, as we get an error at line 7, since we are trying to reassign a keyword that is a const variable, which it prevents us from doing so.
7. Nothing is printed at line 13, as we still have the "TypeError" from trying to reassign a const variable
8. 

In the context of Array<T>, T is a generic type parameter.  Generics in TypeScript allow you to create reusable components, functions, or data structures that work with different types while maintaining type safety.

*Difference between interface and type*
Both are used to define custom data structures and shapes for objects, but they have some differences in how they work and their intended use cases:

Declaration Merging

We can define same interface multiple time 

```
interface Person{
    name: string
} 
interface Person{
    age: number
} 
```
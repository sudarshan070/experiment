MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change.

### syntax

```
new MutationObserver(callback)
```

**callback** - A function which will be called on each DOM change that qualifies given the observed node or subtree and options.

The callback function takes as input two parameters:

An array of MutationRecord objects, describing each change that occurred; and
the MutationObserver which invoked the callback. This is most often used to disconnect the observer using MutationObserver.disconnect().

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver)

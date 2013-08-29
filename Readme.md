# Editable

  Turn element into contenteditable

## Introduction

This component is a container of sorts and doesn't have any special functionality. Its main purpose is to give the other plugins for contenteditable elements to be mounted.

I am in the process of writing:

* nickjackson/editable-placeholder
* nickjackson/editable-sanitizer


## Installation

    $ component install nickjackson/editable

## API

### Editable(el)
Initialize a given `el` as a contenteditable element

### #use(fn)
Convenience method to hook in plugins

### #unbind()
Removes event listeners, not before emitting `'unbind'` to which plugins can bind to it, and programatically unbind there callbacks.

### #html(html)
`.innerHTML` getter/setter

### #text(text)
`.textContent` getter/setter. Falls back to `innerText`.

## Todo
* Test on other browsers. Currently only tested on Chrome OSX.

## License

  MIT
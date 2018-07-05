# emoti-generator

This module returns a emoti object with this structure:
```js
{
    "name": "smiley",
    "description": "happy; joy; haha",
    "code": "\\\\ud83d\\\\ude03",
    "emoti": "😃"
}
```
# Usage

Just require the module like any other npm module 
```js
const emotiGenerator = require('emoti-generator');
```

# Methods

This module has two methods:

- getEmotiByDescription: get emoti from String description
- getEmotiByName: get emoti from String name

# Example

```js
const { getEmotiByDescription, getEmotiByName } = require('emoti-generator');

const smiley = getEmotiByName('smiley');
console.log(JSON.stringify(smiley, null, 4));
```
Output:
```js
[
    {
        "name": "smiley",
        "description": "happy; joy; haha",
        "code": "\\\\ud83d\\\\ude03",
        "emoti": "😃"
    }
]
```

```js
const flirt = getEmotiByDescription('flirt');
console.log(JSON.stringify(flirt, null, 4));

```

Output:
```js
[
    {
        "name": "wink",
        "description": "flirt",
        "code": "\\\\ud83d\\\\ude09",
        "emoti": "😉"
    },
    {
        "name": "kissing_heart",
        "description": "flirt",
        "code": "\\\\ud83d\\\\ude18",
        "emoti": "😘"
    }
]
```


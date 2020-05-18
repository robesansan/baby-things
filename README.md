# baby-things

Random nice-to-have items generator for any baby

[![travis build](https://img.shields.io/travis/robesansan/baby-things.svg?style=flat-square)](https://travis-ci.org/robesansan/baby-things)
[![version](https://img.shields.io/npm/v/baby-things.svg?style=flat-square)](http://npm.im/baby-things)
[![downloads](https://img.shields.io/npm/dm/baby-things.svg?style=flat-square)](http://npm-stat.com/charts.html?package=baby-things&from=2020-01-01)
[![MIT License](https://img.shields.io/npm/l/baby-things.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## The problem

Are you waiting for a baby and you're thinking about buying something?

You need to buy a gift for someone else's baby but you have no idea what to buy?

## This solution

This module has ~100 nice-to-have items for any baby and exposes an API for you to get a random one every time you call it

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/) and should
be installed as one of your project's dependencies:

```
npm install --save baby-things
```

Alternatively you can get the [UMD](https://github.com/umdjs/umd) build which is also published to the npm
registry and is therefore available via [npmcdn.com]():
- <https://npmcdn.com/baby-things@1.0.0/dist/index.umd.js>
- <https://npmcdn.com/baby-things@1.0.0/dist/index.umd.min.js>

## Usage

### With ES5
```javascript
var babyThings = require("baby-things")
babyThings.default.random()
babyThings.default.all
```

### With ES6
```javascript
import babyThings from 'baby-things'
babyThings.random()
babyThings.all
```

## Working demo

### With Node
<https://runkit.com/embed/nm2cu5xzbrct>

### With UMD
> Code example <https://jsbin.com/yukaqal/edit?html,css,js,output>

> Just output <https://output.jsbin.com/yukaqal>


## Inspiration
- [starwars-names](https://github.com/kentcdodds/starwars-names)


## Contributors

PRs are welcome

We use [commit convention](https://www.conventionalcommits.org/en/v1.0.0/) to automatize changelog and releases, so if you want to commit something you can run this command to ensure a good commit format

```
npm run commit
```

but if you already know commit convention ("\<type\>(\<scope\>): \<subject\>"), you can just run 
```
git commit -am 'my well formatted commit message'
```
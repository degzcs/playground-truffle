# truffle-init-example
This repo is an example of the files that `truffle init` produces for you. So that you don't need truffle installed locally.


## Steps to recreate

``` bash
$ docker build -t tie .
$ docker run -v $PWD:/home/app tie truffle init
```

### Developing

```bash
$ dco run truffle bash
$ truffle compile
$ truffle develop
> migrate
```

#### Examples in the console (truffle develop)

```bash
### Simple Storage
> SimpleStorage.deployed().then(function (instance) {return instance.store(24);})
> SimpleStorage.deployed().then(function (instance) {return instance.retrieve();})
> SimpleStorage.deployed().then(function (instance) {return instance.addPerson("Diego", 8);})
> SimpleStorage.deployed().then(function (instance) {return instance.people.call(0);})

# Storage Factory
> StorageFactory.deployed().then(function(instance){return instance.createSimpleStorageContract()})
> StorageFactory.deployed().then(function(instance){return instance.sfStore(0, 24)}
> StorageFactory.deployed().then(function(instance){return instance.sfGet(0)})

```

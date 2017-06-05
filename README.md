# Angular4Lazyload

Angular4Lazyload 利用[Angular CLI](https://github.com/angular/angular-cli)实现懒加载，通过loadChildren以两种方式加载module。

* about文件夹下是通过在router中以`loadChildren: '../about/about.module#AboutModule'`的方式。

* contact文件夹下是：定义contact的module并导出module，在routing中首先定义函数：`export function loadBundledModule() { return ContactModule; }` 在router中引用`component: HelloComponent`，实现加载module。


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

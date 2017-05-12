# angularJS学习
#### ng-app
    指令定义一个AngularJS应用程序
#### ng-model
    指令把元素（比如输入域的值）绑定到应用程序
#### ng-bind
    指令把应用程序数据绑定到HTML视图
#### ng-repeat
    重复一个html元素，类似于for循环,用在数组上
```html
<li ng-repeat="x in names">
    {{x}}
</li>
```
#### ng-show
    当表达式是true的时候会显示标签
```html
<span ng-show="author="xiaxiaowen""></span>
```
### ng-click
    绑定点击后的js函数
```html
<button ng-click="sayHello()">点击</button>
```
#### ng-controller
    定义控制Angularjs应用
#### {{表达式}}
    表达式写到双大括号中
#### 模块(module)
    定义Angularjs应用
```js
    var app = angular.module('myApp', []);
```
#### 控制器(Controller)
    控制Angularjs应用
```js
app.controller('myCtrl', function($scope){$scope.myAppName = 'Angular Music'});
```
#### 创建制自定义的指令
    通过.directive函数添加自定义指令名
    (必须使用驼峰法命名指令名称，比如myTag，但是使用的时候需要用-分割，my-tag)
```html
<body ng-app='myApp'>
<my-tag></my-tag>
<script>
    var app = angular.module('myApp', []);
    app.directive('myTag', function(){
        return {
            template : '<h1>自定义标签</h1>'
        };
    });
</script>
</body>
```
#### $rootScope(根scope) 
    所有的应用都有一个 $rootScope，它可以作用于ng-app 指令包含的所有 HTML 元素中。
    用 rootscope 定义的值，可以在各个 controller 中使用
<table>
  <tr>
    <th>过滤器</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>currency</td>
    <td>格式化数字为货币格式。</td>
  </tr>
  <tr>
    <td>filter</td>
    <td>从数组项中选择一个子集。</td>
  </tr>
  <tr>
    <td>lowercase</td>
    <td>格式化字符串为小写。</td>
  </tr>
  <tr>
    <td>orderBy</td>
    <td>根据某个表达式排列数组。</td>
  </tr>
  <tr>
    <td>uppercase</td>
    <td>格式化字符串为大写。</td>
  </tr>
</table>
#### Angularjs过滤器
过滤器可以使用一个管道字符（|）添加到表达式和指令中。

# AngularMusic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

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

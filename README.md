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
#### ng-option
    使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出
```html
<select ng-init="selectedName = names[0]" ng-model="selectedName" ng-options="x for x in names">
</select>
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
### Angularjs过滤器
过滤器可以使用一个管道字符（|）添加到表达式和指令中。
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
### AngularJS 服务（Service）
    AngularJS 内建了30 多个服务。
    $location 服务，它可以返回当前页面的URL地址。
```js
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});
```
    AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好。
<table>
  <tr>
    <th>服务</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>$location</td>
    <td>类似 window.location 对象，可以获取当前的URL地址</td>
  </tr>
  <tr>
    <td>$http</td>
    <td>http服务，最常用的服务</td>
  </tr>
  <tr>
    <td>$timeout</td>
    <td>类似 window.setTimeout函数</td>
  </tr>
  <tr>
    <td>$interval</td>
    <td>类似 window.setInterval函数</td>
  </tr>
</table>
  可以创建自定义服务
```js
/* 创建service */
app.service('myService', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
/* 然后通过函数参数添加到控制器中，就可以使用了 */
app.controller('myCtrl', function($scope, myService) {
    $scope.hex = myService.myFunc(255);
});
```
### AngularJS http服务
* 注：v1.5 中$http 的 success 和 error 方法已废弃。使用 then 方法替代。 *
```js
/* 简单的 GET 请求，可以改为 POST */
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // 请求成功执行代码
  }, function errorCallback(response) {
    // 请求失败执行代码
});
/* 简写方法 */
$http.get('/someUrl', config).then(successCallback, errorCallback);
$http.post('/someUrl', data, config).then(successCallback, errorCallback);
```
简写方法列表：
* $http.get
* $http.head
* $http.post
* $http.put
* $http.delete
* $http.jsonp
* $http.patch
### AngularJS选择框(select)

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

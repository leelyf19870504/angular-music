# angularJS学习
### ng-app
    指令定义一个AngularJS应用程序
### ng-model
    指令把元素（比如输入域的值）绑定到应用程序
### ng-bind
    指令把应用程序数据绑定到HTML视图
### ng-repeat
    重复一个html元素，类似于for循环,用在数组上
```html
<li ng-repeat="x in names">
    {{x}}
</li>
```
### ng-show
    当表达式是true的时候会显示标签
```html
<span ng-show="author="xiaxiaowen""></span>
```
### ng-click
    绑定点击后的js函数
```html
<button ng-click="sayHello()">点击</button>
```
### ng-option
    使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出
```html
<select ng-init="selectedName = names[0]" ng-model="selectedName" ng-options="x for x in names">
</select>
```
### ng-disable
    该指令可以直接绑定html的disable属性
### ng-hide
    该指令可以隐藏/显示标签
### ng-controller
    定义控制Angularjs应用
### {{表达式}}
    表达式写到双大括号中
### 模块(module)
    定义Angularjs应用
```js
var app = angular.module('myApp', []);
```
### 控制器(Controller)
    控制Angularjs应用
```js
app.controller('myCtrl', function($scope){$scope.myAppName = 'Angular Music'});
```
### 创建制自定义的指令
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
### $rootScope(根scope) 
    所有的应用都有一个 $rootScope，它可以作用于ng-app 指令包含的所有 HTML 元素中。
    用 rootscope 定义的值，可以在各个 controller 中使用
### Angularjs过滤器
过滤器可以使用一个管道字符（|）添加到表达式和指令中。

### Angularjs表格

    通过ng-repeat来进行循环标签，
    $index可以获取循环中的序号
    $even 奇数序号的时候为true
    $odd  偶数序号的时候为true
```html
<table>
    <tr ng-repeat="x in names">
        <td>{{ $index + 1 }}</td>
        <td>{{ x.Name }}</td>
        <td>{{ x.Country }}</td>
    </tr>
</table>
```


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


### AngularJS 服务(Service)
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

### Angularjs指令列表
<table>
<tr>
<th>指令</th>
<th>描述</th>
</tr>
<tr>
   <td>ng-app</td>
   <td>定义应用程序的根元素。</td>
</tr>
<tr>
   <td>ng-bind</td>
   <td>绑定 HTML 元素到应用程序数据</td>
</tr>
<tr>
   <td>ng-bind-html</td>
   <td>绑定 HTML 元素的 innerHTML 到应用程序数据，并移除 HTML 字符串中危险字符</td>
</tr>
<tr>
   <td>ng-bind-template</td>
   <td>规定要使用模板替换的文本内容</td>
</tr>
<tr>
   <td>ng-blur</td>
   <td>规定 blur 事件的行为</td>
</tr>
<tr>
   <td>ng-change</td>
   <td>规定在内容改变时要执行的表达式</td>
</tr>
<tr>
   <td>ng-checked</td>
   <td>规定元素是否被选中</td>
</tr>
<tr>
   <td>ng-class</td>
   <td>指定 HTML 元素使用的 CSS 类</td>
</tr>dd
   <td>ng-class-even</td>
   <td>类似 ng-class，但只在偶数行起作用</td>
</tr>
<tr>
   <td><a href="ng-ng-class-odd.html">ng-class-odd</a></td>
   <td>类似 ng-class，但只在奇数行起作用</td>
</tr>
<tr>
   <td><a href="ng-ng-click.html">ng-click</a></td>
   <td>定义元素被点击时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-cloak.html">ng-cloak</a></td>
   <td>在应用正要加载时防止其闪烁</td>
</tr>
<tr>
   <td><a href="ng-ng-controller.html">ng-controller</a></td>
   <td>定义应用的控制器对象</td>
</tr>
<tr>
   <td><a href="ng-ng-copy.html">ng-copy</a></td>
   <td>规定拷贝事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-csp.html">ng-csp</a></td>
   <td>修改内容的安全策略</td>
</tr>
<tr>
   <td><a href="ng-ng-cut.html">ng-cut</a></td>
   <td>规定剪切事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-dblclick.html">ng-dblclick</a></td>
   <td>规定双击事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-disabled.html">ng-disabled</a></td>
   <td>规定一个元素是否被禁用</td>
</tr>
<tr>
   <td><a href="ng-ng-focus.html">ng-focus</a></td>
   <td>规定聚焦事件的行为</td>
</tr>
<tr>
   <td>ng-form</td>
   <td>指定 HTML 表单继承控制器表单</td>
</tr>
<tr>
   <td><a href="ng-ng-hide.html">ng-hide</a></td>
   <td>隐藏或显示 HTML 元素</td>
</tr>
<tr>
   <td><a href="ng-ng-href.html">ng-href</a></td>
   <td>为 the &lt;a&gt; 元素指定链接</td>
</tr>
<tr>
   <td><a href="ng-ng-if.html">ng-if</a></td>
   <td>如果条件为 false 移除 HTML 元素</td>
</tr>
<tr>
   <td><a href="ng-ng-include.html">ng-include</a></td>
   <td>在应用中包含 HTML 文件</td>
</tr>
<tr>
   <td><a href="ng-ng-init.html">ng-init</a></td>
   <td>定义应用的初始化值</td>
</tr>
<tr>
   <td>ng-jq</td>
   <td>定义应用必须使用到的库，如：jQuery</td>
</tr>
<tr>
   <td><a href="ng-ng-keydown.html">ng-keydown</a></td>
   <td>规定按下按键事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-keypress.html">ng-keypress</a></td>
   <td>规定按下按键事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-keyup.html">ng-keyup</a></td>
   <td>规定松开按键事件的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-list.html">ng-list</a></td>
   <td>将文本转换为列表 (数组)</td>
</tr>
<tr>
   <td><a href="ng-ng-model.html">ng-model</a></td>
   <td>绑定 HTML 控制器的值到应用数据</td>
</tr>
<tr>
   <td><a href="ng-ng-model-options.html">ng-model-options</a></td>
   <td>规定如何更新模型</td>
</tr>
<tr>
   <td><a href="ng-ng-mousedown.html">ng-mousedown</a></td>
   <td>规定按下鼠标按键时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-mouseenter.html">ng-mouseenter</a></td>
   <td>规定鼠标指针穿过元素时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-mouseleave.html">ng-mouseleave</a></td>
   <td>规定鼠标指针离开元素时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-mousemove.html">ng-mousemove</a></td>
   <td>规定鼠标指针在指定的元素中移动时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-mouseover.html">ng-mouseover</a></td>
   <td>规定鼠标指针位于元素上方时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-mouseup.html">ng-mouseup</a></td>
   <td>规定当在元素上松开鼠标按钮时的行为</td>
</tr>
<tr>
   <td><a href="ng-ng-non-bindable.html">ng-non-bindable</a></td>
   <td>规定元素或子元素不能绑定数据</td>
</tr>
<tr>
   <td><a href="ng-ng-open.html">ng-open</a></td>
   <td>指定元素的 open 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-options.html">ng-options</a></td>
   <td>在 &lt;select&gt; 列表中指定 &lt;options&gt;</td>
</tr>
<tr>
   <td><a href="ng-ng-paste.html">ng-paste</a></td>
   <td>规定粘贴事件的行为</td>
</tr>
<tr>
   <td>ng-pluralize</td>
   <td>根据本地化规则显示信息</td>
</tr>
<tr>
   <td><a href="ng-ng-readonly.html">ng-readonly</a></td>
   <td>指定元素的 readonly 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-repeat.html">ng-repeat</a></td>
   <td>定义集合中每项数据的模板</td>
</tr>
<tr>
   <td><a href="ng-ng-selected.html">ng-selected</a></td>
   <td>指定元素的 selected 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-show.html">ng-show</a></td>
   <td>显示或隐藏 HTML 元素</td>
</tr>
<tr>
   <td><a href="ng-ng-src.html">ng-src</a></td>
   <td>指定 &lt;img&gt; 元素的 src 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-srcset.html">ng-srcset</a></td>
   <td>指定 &lt;img&gt; 元素的 srcset 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-style.html">ng-style</a></td>
   <td>指定元素的 style 属性</td>
</tr>
<tr>
   <td><a href="ng-ng-submit.html">ng-submit</a></td>
   <td>规定 onsubmit 事件发生时执行的表达式</td>
</tr>
<tr>
   <td><a href="ng-ng-switch.html">ng-switch</a></td>
   <td>规定显示或隐藏子元素的条件</td>
</tr>
<tr>
   <td>ng-transclude</td>
   <td>规定填充的目标位置</td>
</tr>
<tr>
   <td><a href="ng-ng-value.html">ng-value</a></td>
   <td>规定 input 元素的值</td>
</tr>
</tbody></table>


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

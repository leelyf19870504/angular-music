# angularJS 要点
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
### ng-include
    指令用来包含HTML内容，而且还可以包含AngularJS代码
### ng-cloak
    指令用于在 AngularJS 应用在加载时防止 AngularJS 代码未加载完而出现的问题。
    AngularJS 应用在加载时，文档可能会由于AngularJS 代码未加载完而出现显示 AngularJS 代码，进而会有闪烁的效果， ng-cloak 指令是为了防止该问题的发生。
```html
<div ng-app="">
<p ng-cloak>{{ 5 + 5 }}</p>
</div>
```
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
### AngularJS动画
    AngularJS 使用动画需要引入 angular-animate.min.js 库
```html
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular-animate.min.js"></script>
```
    还需要摘应用中使用模型ngAnimate：
```html
<body ng-app="ngAnimate">
```
    也可以通过module添加：
```js
var app = angular.module('myApp', ['ngAnimate']);
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
### Angularjs路由
    需要包含js：angular-router.js
    然后加入到依赖模块：
```js
angular.module('myApp', ['ngRoute']);
```
    使用ngView来表示为路由页面
```html
<div ng-view></div>
```
    配置$routeProvider来定义路由规则
```js
module.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{template:'这是首页页面'})
        .when('/computers',{template:'这是电脑分类页面'})
        .when('/printers',{template:'这是打印机页面'})
        .otherwise({redirectTo:'/'});
}]);
```
    $routeProvider.when 函数的第一个参数是 URL 或者 URL 正则规则，第二个参数为路由配置对象。
    路由配置对象语法规则如下：
```
$routeProvider.when(url, {
    template: string,
    templateUrl: string,
    controller: string, function 或 array,
    controllerAs: string,
    redirectTo: string, function,
    resolve: object<key, function>
});
```
* template          需要插入的HTML内容
* templateUrl       插入HTML模板文件
* controller        在但其模板上执行新的controller
* controllerAs      为controller指定别名
* redirectTo        重定向的地址
* resolve           指定当前controller所依赖的其他模块
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
</tr>
   <td>ng-class-even</td>
   <td>类似 ng-class，但只在偶数行起作用</td>
</tr>
<tr>
   <td>ng-class-odd</td>
   <td>类似 ng-class，但只在奇数行起作用</td>
</tr>
<tr>
   <td>ng-click</td>
   <td>定义元素被点击时的行为</td>
</tr>
<tr>
   <td>ng-cloak</td>
   <td>在应用正要加载时防止其闪烁</td>
</tr>
<tr>
   <td>ng-controller</td>
   <td>定义应用的控制器对象</td>
</tr>
<tr>
   <td>ng-copy</td>
   <td>规定拷贝事件的行为</td>
</tr>
<tr>
   <td>ng-csp</td>
   <td>修改内容的安全策略</td>
</tr>
<tr>
   <td>ng-cut</td>
   <td>规定剪切事件的行为</td>
</tr>
<tr>
   <td>ng-dblclick</td>
   <td>规定双击事件的行为</td>
</tr>
<tr>
   <td>ng-disabled</td>
   <td>规定一个元素是否被禁用</td>
</tr>
<tr>
   <td>ng-focus</td>
   <td>规定聚焦事件的行为</td>
</tr>
<tr>
   <td>ng-form</td>
   <td>指定 HTML 表单继承控制器表单</td>
</tr>
<tr>
   <td>ng-hide</td>
   <td>隐藏或显示 HTML 元素</td>
</tr>
<tr>
   <td>ng-href</td>
   <td>为 the &lt;a&gt; 元素指定链接</td>
</tr>
<tr>
   <td>ng-if</td>
   <td>如果条件为 false 移除 HTML 元素</td>
</tr>
<tr>
   <td>ng-include</td>
   <td>在应用中包含 HTML 文件</td>
</tr>
<tr>
   <td>ng-init</td>
   <td>定义应用的初始化值</td>
</tr>
<tr>
   <td>ng-jq</td>
   <td>定义应用必须使用到的库，如：jQuery</td>
</tr>
<tr>
   <td>ng-keydown</td>
   <td>规定按下按键事件的行为</td>
</tr>
<tr>
   <td>ng-keypress</td>
   <td>规定按下按键事件的行为</td>
</tr>
<tr>
   <td>ng-keyup</td>
   <td>规定松开按键事件的行为</td>
</tr>
<tr>
   <td>ng-list</td>
   <td>将文本转换为列表 (数组)</td>
</tr>
<tr>
   <td>ng-model</td>
   <td>绑定 HTML 控制器的值到应用数据</td>
</tr>
<tr>
   <td>ng-model-options</td>
   <td>规定如何更新模型</td>
</tr>
<tr>
   <td>ng-mousedown</td>
   <td>规定按下鼠标按键时的行为</td>
</tr>
<tr>
   <td>ng-mouseenter</td>
   <td>规定鼠标指针穿过元素时的行为</td>
</tr>
<tr>
   <td>ng-mouseleave</td>
   <td>规定鼠标指针离开元素时的行为</td>
</tr>
<tr>
   <td>ng-mousemove</td>
   <td>规定鼠标指针在指定的元素中移动时的行为</td>
</tr>
<tr>
   <td>ng-mouseover</td>
   <td>规定鼠标指针位于元素上方时的行为</td>
</tr>
<tr>
   <td>ng-mouseup</td>
   <td>规定当在元素上松开鼠标按钮时的行为</td>
</tr>
<tr>
   <td>ng-non-bindable</td>
   <td>规定元素或子元素不能绑定数据</td>
</tr>
<tr>
   <td>ng-open</td>
   <td>指定元素的 open 属性</td>
</tr>
<tr>
   <td>ng-options</td>
   <td>在 &lt;select&gt; 列表中指定 &lt;options&gt;</td>
</tr>
<tr>
   <td>ng-paste</td>
   <td>规定粘贴事件的行为</td>
</tr>
<tr>
   <td>ng-pluralize</td>
   <td>根据本地化规则显示信息</td>
</tr>
<tr>
   <td>ng-readonly</td>
   <td>指定元素的 readonly 属性</td>
</tr>
<tr>
   <td>ng-repeat</td>
   <td>定义集合中每项数据的模板</td>
</tr>
<tr>
   <td>ng-selected</td>
   <td>指定元素的 selected 属性</td>
</tr>
<tr>
   <td>ng-show</td>
   <td>显示或隐藏 HTML 元素</td>
</tr>
<tr>
   <td>ng-src</td>
   <td>指定 &lt;img&gt; 元素的 src 属性</td>
</tr>
<tr>
   <td>ng-srcset</td>
   <td>指定 &lt;img&gt; 元素的 srcset 属性</td>
</tr>
<tr>
   <td>ng-style</td>
   <td>指定元素的 style 属性</td>
</tr>
<tr>
   <td>ng-submit</td>
   <td>规定 onsubmit 事件发生时执行的表达式</td>
</tr>
<tr>
   <td>ng-switch</td>
   <td>规定显示或隐藏子元素的条件</td>
</tr>
<tr>
   <td>ng-transclude</td>
   <td>规定填充的目标位置</td>
</tr>
<tr>
   <td>ng-value</td>
   <td>规定 input 元素的值</td>
</tr>
</table>

### AngularJS 事件列表
* ng-click
* ng-dbl-click
* ng-mousedown
* ng-mouseenter
* ng-mouseleave
* ng-mousemove
* ng-keydown
* ng-keyup
* ng-keypress
* ng-change

### AngularJS 验证属性

<table>
<tr>
    <th>属性</th>
    <th>描述</th>
</tr>
<tr>
     <td>$dirty</td>
     <td>表单有填写记录</td>
</tr>
<tr>
     <td>$invalid</td>
     <td>字段内容合法的</td>
</tr>
<tr>
     <td>$invalid</td>
     <td>字段内容是非法的</td>
</tr>
<tr>
     <td>$pristine</td>
     <td>表单没有填写记录</td>
</tr>
<tr>
     <td>$error</td>
     <td>错误信息</td>
</tr>
</table>

### AngularJS 全局API
#### 转换

<table>
<tr>
    <th>API</th>
    <th>描述</th>
</tr>
<tr>
     <td>angular.lowercase()</td>
     <td>将字符串转换为小写</td>
</tr>
<tr>
     <td>angular.uppercase()</td>
     <td>将字符串转换为大写</td>
</tr>
<tr>
     <td>angular.copy()</td>
     <td>数组或对象深度拷贝</td>
</tr>
<tr>
     <td>angular.forEach()</td>
     <td>对象或数组的迭代函数</td>
</tr>
</table>

#### 比较

<table>
<tr>
    <th>API</th>
     <th>描述</th>
</tr>
<tr>
     <td>angular.isArray()</td>
     <td>如果引用的是数组返回 true</td>
</tr>
<tr>
     <td>angular.isDate()</td>
     <td>如果引用的是日期返回 true</td>
</tr>
<tr>
     <td>angular.isDefined()</td>
     <td>如果引用的已定义返回 true</td>
</tr>
<tr>
     <td>angular.isElement()</td>
     <td>如果引用的是 DOM 元素返回 true</td>
</tr>
<tr>
     <td>angular.isFunction()</td>
     <td>如果引用的是函数返回 true</td>
</tr>
<tr>
     <td>angular.isNumber()</td>
     <td>如果引用的是数字返回 true</td>
</tr>
<tr>
     <td>angular.isObject()</td>
     <td>如果引用的是对象返回 true</td>
</tr>
<tr>
     <td>angular.isString()</td>
     <td>如果引用的是字符串返回 true</td>
</tr>
<tr>
     <td>angular.isUndefined()</td>
     <td>如果引用的未定义返回 true</td>
</tr>
<tr>
     <td>angular.equals()</td>
     <td>如果两个对象相等返回 true</td>
</tr>
</table>

#### JSON

<table>
<tr>
    <th>API</th>
    <th>描述</th>
</tr>
<tr>
    <td>angular.fromJson()</td>
    <td>反序列化 JSON 字符串</td>
</tr>
<tr>
    <td>angular.toJson()</td>
    <td>序列化 JSON 字符串</td>
</tr>
</table>

#### 基础

<table>
<tr>
    <th>API</th>
    <th>描述</th>
</tr>
<tr>
    <td>angular.bootstrap()</td>
    <td>手动启动 AngularJS</td>
</tr>
<tr>
    <td>angular.element()</td>
    <td>包裹着一部分DOM element或者是HTML字符串，把它作为一个jQuery元素来处理。</td>
</tr>
<tr>
    <td>angular.module()</td>
    <td>创建，注册或检索 AngularJS 模块</td>
</tr>
</table>



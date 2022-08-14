## 简介

当前代码仓库包含以下 xx 类设计模式的编码与介绍

## 工厂模式

- 将 new 操作单独封装
- 遇到 new 时，就要考虑是否使用工厂模式

### UML 类图

<img src="https://s2.loli.net/2022/08/14/OueWnHifjDap7sm.png" alt="factory.png" style="zoom: 50%;" />

### 场景

- jQuery-${'div'}等
- React.createElement
- Vue 异步组件

## 单例模式

- 一个对象一个实例

### UML 类图

<img src="https://s2.loli.net/2022/08/14/SwfdnoAcr9bQe2U.png" alt="instance.png" style="zoom:50%;" />

### 场景

- 登录框、购物车等
- vuex 和 redux 中的 store

## 代理模式

- 科学上网 访问 github.com
- 明星经纪人

### UML 类图

<img src="https://s2.loli.net/2022/08/14/UhEryepXG5dnu3N.png" alt="proxy.png" style="zoom:50%;" />

### 场景

- 网页事件代理
- jQuery $.proxy
- ES6 Proxy

## 观察者模式

- 订报纸

### UML 类图

<img src="https://s2.loli.net/2022/08/14/JmA2bHWOCGzioLT.png" alt="observer.png" style="zoom:50%;" />

### 场景

- 网页事件绑定
- Promise
- jQuery callbacks
- nodejs 自定义事件

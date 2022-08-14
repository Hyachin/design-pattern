## 简介

当前代码仓库包含以下 xx 类设计模式的编码与介绍

## 工厂模式

- 将 new 操作单独封装
- 遇到 new 时，就要考虑是否使用工厂模式

### UML 类图

![factory.png](https://s2.loli.net/2022/08/14/OueWnHifjDap7sm.png)

### 场景

- jQuery-${'div'}等
- React.createElement
- Vue 异步组件

## 单例模式

- 一个对象一个实例

### UML 类图

![instance.png](https://s2.loli.net/2022/08/14/SwfdnoAcr9bQe2U.png)

### 场景

- 登录框、购物车等
- vuex 和 redux 中的 store

## 代理模式

- 科学上网 访问 github.com
- 明星经纪人

### UML 类图

![proxy.png](https://s2.loli.net/2022/08/14/UhEryepXG5dnu3N.png)

### 场景

- 网页事件代理
- jQuery $.proxy
- ES6 Proxy

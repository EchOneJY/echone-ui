---
title: Button
description: A vertically stacked set of interactive headings that each reveal an associated section of content.
name: button
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

# Button 按钮

## 按钮类型

你可以使用 variant 属性来定义按钮类型。<br> 包括default、secondary、destructive、ghost、outline、link.

:::demo

button/basic

:::

## 禁用

你可以使用 disabled 属性来定义按钮是否被禁用。使用 disabled 属性来控制按钮是否为禁用状态。 <br> 该属性接受一个Boolean 类型的值。

:::demo

button/disabled

:::

## 图标按钮

使用图标为按钮添加更多的含义。

:::demo

button/icon

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

:::demo

button/loading

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。<br> 包括default、lg、sm、xs.

:::demo

button/size

:::

## 组合按钮

以按钮组的方式出现，常用于多项类似操作。

使用 `<eo-button-group>` 对多个按钮分组。

:::demo

button/group

:::

## Button API

### Button Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| variant | 类型 | ^[enum]`'default' \| 'destructive' \| 'ghost' \| 'link' \| 'outline' \| 'secondary'` | default |
| size | 尺寸 | ^[enum]`'default' \| 'lg' \| 'sm' \| 'xs' \| 'icon'` | default |
| disabled | 按钮是否为禁用状态 | boolean | false |
| loading | 是否为加载中状态 | boolean | false |

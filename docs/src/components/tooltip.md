# Tooltip

工具提示是一个在鼠标悬停在元素上时显示信息的小弹窗。

## 基本用法

:::demo

tooltip/basic

:::

## 帮助工具提示

:::demo

tooltip/help

:::

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| side | Tooltip出现的位置 | ^[enum]`'top' \| 'right' \| 'bottom' \| 'left'` | top |
| effect | Tooltip主题 | ^[enum]`'dark' \| 'light'` | dark |
| delayDuration | Tooltip延迟出现时间 | number | 0 |
| contentClass | Tooltip内容样式 | string | - |
| contentStyle | Tooltip内容样式 | StyleValue | - |

### Help Attributes

继承所有 Tooltip 的属性，额外添加：

| Name         | Description       | Type   | Default |
| ------------ | ----------------- | ------ | ------- |
| triggerClass | Tooltip触发器样式 | string | -       |

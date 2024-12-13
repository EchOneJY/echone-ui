# Checkbox 复选框

复选框组件允许用户从一组选项中选择一个或多个选项。

## 基础用法

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 复选框大小 | ^[enum]`'default' \| 'lg' \| 'sm' \| 'xs'` | `'default'` |
| label | 复选框标签 | `string` | - |
| name | 原生name属性 | `string` | - |
| indeterminate | 设置半选状态 | `boolean` | `false` |

### Events

| 事件名            | 说明                | 回调参数                   |
| ----------------- | ------------------- | -------------------------- |
| change            | 当绑定值变化时触发  | `(value: boolean) => void` |
| update:modelValue | 更新v-model值时触发 | `(value: boolean) => void` |

### Slots

| 插槽名  | 说明           | 参数 |
| ------- | -------------- | ---- |
| default | 复选框标签内容 | -    |

## 示例

### 禁用状态

```vue
<template>
  <n-checkbox disabled>禁用状态</n-checkbox>
  <n-checkbox disabled :model-value="true">禁用选中</n-checkbox>
</template>
```

### 复选框组

```vue
<template>
  <n-checkbox-group v-model="checkedFruits">
    <n-checkbox value="apple">苹果</n-checkbox>
    <n-checkbox value="banana">香蕉</n-checkbox>
    <n-checkbox value="orange">橙子</n-checkbox>
  </n-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const checkedFruits = ref(['apple']);
</script>
```

### 不同尺寸

```vue
<template>
  <n-checkbox size="xs">超小</n-checkbox>
  <n-checkbox size="sm">小</n-checkbox>
  <n-checkbox size="default">默认</n-checkbox>
  <n-checkbox size="lg">大</n-checkbox>
</template>
```

```

```

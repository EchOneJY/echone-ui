# Tooltip

A tooltip is a small pop-up that displays information when hovering over an element.

## Basic Usage

:::demo

tooltip/basic

:::

## Help Tooltip

:::demo

tooltip/help

:::

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| side | Position where tooltip appears | ^[enum]`'top' \| 'right' \| 'bottom' \| 'left'` | top |
| effect | Tooltip theme | ^[enum]`'dark' \| 'light'` | dark |
| delayDuration | Tooltip delay duration | number | 0 |
| contentClass | Tooltip content class | string | - |
| contentStyle | Tooltip content style | StyleValue | - |

### Help Attributes

Inherits all Tooltip attributes, with these additions:

| Name         | Description           | Type   | Default |
| ------------ | --------------------- | ------ | ------- |
| triggerClass | Tooltip trigger class | string | -       |

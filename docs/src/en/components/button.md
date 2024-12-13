---
title: Button
description: A vertically stacked set of interactive headings that each reveal an associated section of content.
name: button
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

# Button

## Types

You can use the variant prop to define the button type.<br> Including default, secondary, destructive, ghost, outline, link.

:::demo

button/basic

:::

## Disabled

You can use the disabled prop to define whether the button is disabled. Use the disabled prop to control the disabled state of the button.<br> This prop accepts a Boolean value.

:::demo

button/disabled

:::

## Icon Button

Use icons to add more meaning to buttons.

:::demo

button/icon

:::

## Loading State Button

Click the button to load data and provide loading state feedback to users.

:::demo

button/loading

:::

## Button Group

:::demo

button/group

:::

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| variant | button type | ^[enum]`'default' \| 'destructive' \| 'ghost' \| 'link' \| 'outline' \| 'secondary'` | default |
| size | button size | ^[enum]`'default' \| 'lg' \| 'sm' \| 'xs' \| 'icon'` | default |
| disabled | button disabled | boolean | false |
| loading | button loading | boolean | false |

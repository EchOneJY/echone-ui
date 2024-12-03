import type {
  EoProp,
  EoPropConvert,
  EoPropFinalized,
  EoPropInput,
  EoPropMergeType,
  IfEoProp,
  IfNativePropType,
  NativePropType,
} from './types';

import { warn } from 'vue';
import type { PropType } from 'vue';

import { hasOwn, isObject } from '@vue/shared';
import { fromPairs } from 'lodash-unified';

export const eoPropKey = '__eoPropKey';

export const definePropType = <T>(val: any): PropType<T> => val;

export const isEoProp = (val: unknown): val is EoProp<any, any, any> =>
  isObject(val) && !!(val as any)[eoPropKey];

export const buildProp = <
  Type = never,
  Value = never,
  Validator = never,
  Default extends EoPropMergeType<Type, Value, Validator> = never,
  Required extends boolean = false,
>(
  prop: EoPropInput<Type, Value, Validator, Default, Required>,
  key?: string,
): EoPropFinalized<Type, Value, Validator, Default, Required> => {
  // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
  if (!isObject(prop) || isEoProp(prop)) return prop as any;

  const { default: defaultValue, required, type, validator, values } = prop;

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false;
          let allowedValues: unknown[] = [];

          if (values) {
            allowedValues = [...values];
            if (hasOwn(prop, 'default')) {
              allowedValues.push(defaultValue);
            }
            valid ||= allowedValues.includes(val);
          }
          if (validator) valid ||= validator(val);

          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map((value) => JSON.stringify(value))
              .join(', ');
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ''
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                val,
              )}.`,
            );
          }
          return valid;
        }
      : undefined;

  const EoProp: any = {
    [eoPropKey]: true,
    required: !!required,
    type,
    validator: _validator,
  };
  if (hasOwn(prop, 'default')) EoProp.default = defaultValue;
  return EoProp;
};

export const buildProps = <
  Props extends Record<
    string,
    | { [eoPropKey]: true }
    | EoPropInput<any, any, any, any, any>
    | NativePropType
  >,
>(
  props: Props,
): {
  [K in keyof Props]: IfEoProp<
    Props[K],
    Props[K],
    IfNativePropType<Props[K], Props[K], EoPropConvert<Props[K]>>
  >;
} =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [
      key,
      buildProp(option as any, key),
    ]),
  ) as any;

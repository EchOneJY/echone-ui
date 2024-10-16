import "./chunk-OMO6Y4LT.js";
import {
  Comment,
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  isRef,
  markRaw,
  mergeDefaults,
  mergeProps,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  useId,
  useSlots,
  vModelSelect,
  vShow,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-SNM5EKV2.js";
import {
  camelize,
  normalizeProps,
  normalizeStyle,
  toDisplayString,
  toHandlerKey
} from "./chunk-PK2WSZZ2.js";
import "./chunk-PZ5AY32C.js";

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/utils.mjs
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/GregorianCalendar.mjs
var $3b62074eb05584b2$var$EPOCH = 1721426;
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
  year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
  let y1 = year - 1;
  let monthOffset = -2;
  if (month <= 2) monthOffset = 0;
  else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
  return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
  return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
  let era = "AD";
  if (year <= 0) {
    era = "BC";
    year = 1 - year;
  }
  return [
    era,
    year
  ];
}
var $3b62074eb05584b2$var$daysInMonth = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
var $3b62074eb05584b2$export$80ee6245ec4f29ec = class {
  fromJulianDay(jd2) {
    let jd0 = jd2;
    let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
    let leapAdj = 2;
    if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
    let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
    let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
  }
  toJulianDay(date) {
    return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(date) {
    return 12;
  }
  getDaysInYear(date) {
    return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(date) {
    return date.era === "BC";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BC" ? "AD" : "BC";
      date.year = 1 - date.year;
    }
  }
  constructor() {
    this.identifier = "gregory";
  }
};

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/weekStartData.mjs
var $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/queries.mjs
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2, b2) {
  b2 = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b2, a2.calendar);
  return a2.era === b2.era && a2.year === b2.year && a2.month === b2.month && a2.day === b2.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a2, b2) {
  b2 = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b2, a2.calendar);
  a2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a2);
  b2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b2);
  return a2.era === b2.era && a2.year === b2.year && a2.month === b2.month;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a2, b2) {
  return a2.calendar.identifier === b2.calendar.identifier && a2.era === b2.era && a2.year === b2.year && a2.month === b2.month && a2.day === b2.day;
}
function $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(a2, b2) {
  a2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a2);
  b2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b2);
  return a2.calendar.identifier === b2.calendar.identifier && a2.era === b2.era && a2.year === b2.year && a2.month === b2.month;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
  return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
  if (dayOfWeek < 0) dayOfWeek += 7;
  return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
  return (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
  return (0, $11d87f3f76e88657$export$93522d1a439f3617)($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a2, b2) {
  return a2.calendar.toJulianDay(a2) - b2.calendar.toJulianDay(b2);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a2, b2) {
  return $14e0f24ef4ac5c92$var$timeToMs(a2) - $14e0f24ef4ac5c92$var$timeToMs(b2);
}
function $14e0f24ef4ac5c92$var$timeToMs(a2) {
  return a2.hour * 36e5 + a2.minute * 6e4 + a2.second * 1e3 + a2.millisecond;
}
var $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
  if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
  return date.subtract({
    days: date.day - 1
  });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
  return date.add({
    days: date.calendar.getDaysInMonth(date) - date.day
  });
}
var $14e0f24ef4ac5c92$var$cachedRegions = /* @__PURE__ */ new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
  if (Intl.Locale) {
    let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
    if (!region) {
      region = new Intl.Locale(locale).maximize().region;
      if (region) $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
    }
    return region;
  }
  let part = locale.split("-")[1];
  return part === "u" ? void 0 : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  return region ? (0, $2fe286d2fb449abb$export$7a5acbd77d414bd9)[region] || 0 : 0;
}

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/conversion.mjs
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
  date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
  return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
  let date = /* @__PURE__ */ new Date();
  date.setUTCHours(hour, minute, second, millisecond);
  date.setUTCFullYear(year, month - 1, day);
  return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms2, timeZone) {
  if (timeZone === "UTC") return 0;
  if (ms2 > 0 && timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)()) return new Date(ms2).getTimezoneOffset() * -6e4;
  let { year, month, day, hour, minute, second } = $11d87f3f76e88657$var$getTimeZoneParts(ms2, timeZone);
  let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
  return utc - Math.floor(ms2 / 1e3) * 1e3;
}
var $11d87f3f76e88657$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms2, timeZone) {
  let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
  }
  let parts = formatter.formatToParts(new Date(ms2));
  let namedParts = {};
  for (let part of parts) if (part.type !== "literal") namedParts[part.type] = part.value;
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
    month: +namedParts.month,
    day: +namedParts.day,
    hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
    minute: +namedParts.minute,
    second: +namedParts.second
  };
}
var $11d87f3f76e88657$var$DAYMILLIS = 864e5;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
  let found = earlier === later ? [
    earlier
  ] : [
    earlier,
    later
  ];
  return found.filter((absolute) => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
  let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
  return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
  let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
  if (timeZone === "UTC") return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  if (timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === "compatible") {
    dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let date2 = /* @__PURE__ */ new Date();
    let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
    date2.setFullYear(year, dateTime.month - 1, dateTime.day);
    date2.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date2.getTime();
  }
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms2 - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms2 + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms2 - offsetBefore, ms2 - offsetAfter);
  if (valid.length === 1) return valid[0];
  if (valid.length > 1) switch (disambiguation) {
    case "compatible":
    case "earlier":
      return valid[0];
    case "later":
      return valid[valid.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (disambiguation) {
    case "earlier":
      return Math.min(ms2 - offsetBefore, ms2 - offsetAfter);
    case "compatible":
    case "later":
      return Math.max(ms2 - offsetBefore, ms2 - offsetAfter);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
  return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone) {
  let offset3 = $11d87f3f76e88657$export$59c99f3515d3493f(ms2, timeZone);
  let date = new Date(ms2 + offset3);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();
  let millisecond = date.getUTCMilliseconds();
  return new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)(year, month, day, timeZone, offset3, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
  let hour = 0, minute = 0, second = 0, millisecond = 0;
  if ("timeZone" in date) ({ hour, minute, second, millisecond } = date);
  else if ("hour" in date && !time) return date;
  if (time) ({ hour, minute, second, millisecond } = time);
  return new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
  if (date.calendar.identifier === calendar.identifier) return date;
  let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
  let copy = date.copy();
  copy.calendar = calendar;
  copy.era = calendarDate.era;
  copy.year = calendarDate.year;
  copy.month = calendarDate.month;
  copy.day = calendarDate.day;
  (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
  return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
  if (date instanceof (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)) {
    if (date.timeZone === timeZone) return date;
    return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
  }
  let ms2 = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
  return $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return new Date(ms2);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone), date.calendar);
}

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/manipulation.mjs
var $735220c2d4774dd3$var$ONE_HOUR = 36e5;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
  let mutableDate = date.copy();
  let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
  $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
  if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
  mutableDate.month += duration.months || 0;
  $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
  $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
  mutableDate.day += (duration.weeks || 0) * 7;
  mutableDate.day += duration.days || 0;
  mutableDate.day += days;
  $735220c2d4774dd3$var$balanceDay(mutableDate);
  if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
  if (mutableDate.year < 1) {
    mutableDate.year = 1;
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
  if (mutableDate.year > maxYear) {
    var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
    let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
    mutableDate.year = maxYear;
    mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
    mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  if (mutableDate.month < 1) {
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
  if (mutableDate.month > maxMonth) {
    mutableDate.month = maxMonth;
    mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
  return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
  var _date_calendar_isInverseEra, _date_calendar;
  if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
  date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
  while (date.month < 1) {
    $735220c2d4774dd3$var$addYears(date, -1);
    date.month += date.calendar.getMonthsInYear(date);
  }
  let monthsInYear = 0;
  while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
    date.month -= monthsInYear;
    $735220c2d4774dd3$var$addYears(date, 1);
  }
}
function $735220c2d4774dd3$var$balanceDay(date) {
  while (date.day < 1) {
    date.month--;
    $735220c2d4774dd3$var$balanceYearMonth(date);
    date.day += date.calendar.getDaysInMonth(date);
  }
  while (date.day > date.calendar.getDaysInMonth(date)) {
    date.day -= date.calendar.getDaysInMonth(date);
    date.month++;
    $735220c2d4774dd3$var$balanceYearMonth(date);
  }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
  date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
  date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
  if (date.calendar.constrainDate) date.calendar.constrainDate(date);
  date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
  $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
  let inverseDuration = {};
  for (let key in duration) if (typeof duration[key] === "number") inverseDuration[key] = -duration[key];
  return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
  return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
  let mutableDate = date.copy();
  if (fields.era != null) mutableDate.era = fields.era;
  if (fields.year != null) mutableDate.year = fields.year;
  if (fields.month != null) mutableDate.month = fields.month;
  if (fields.day != null) mutableDate.day = fields.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
  return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
  let mutableValue = value.copy();
  if (fields.hour != null) mutableValue.hour = fields.hour;
  if (fields.minute != null) mutableValue.minute = fields.minute;
  if (fields.second != null) mutableValue.second = fields.second;
  if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
  $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
  return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
  time.second += Math.floor(time.millisecond / 1e3);
  time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1e3);
  time.minute += Math.floor(time.second / 60);
  time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
  time.hour += Math.floor(time.minute / 60);
  time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
  let days = Math.floor(time.hour / 24);
  time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
  return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
  time.millisecond = Math.max(0, Math.min(time.millisecond, 1e3));
  time.second = Math.max(0, Math.min(time.second, 59));
  time.minute = Math.max(0, Math.min(time.minute, 59));
  time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a2, b2) {
  let result = a2 % b2;
  if (result < 0) result += b2;
  return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
  time.hour += duration.hours || 0;
  time.minute += duration.minutes || 0;
  time.second += duration.seconds || 0;
  time.millisecond += duration.milliseconds || 0;
  return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "era": {
      let eras = value.calendar.getEras();
      let eraIndex = eras.indexOf(value.era);
      if (eraIndex < 0) throw new Error("Invalid era: " + value.era);
      eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
      mutable.era = eras[eraIndex];
      $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
      break;
    }
    case "year":
      var _mutable_calendar_isInverseEra, _mutable_calendar;
      if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
      mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
      if (mutable.year === -Infinity) mutable.year = 1;
      if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
      break;
    case "month":
      mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    case "day":
      mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
  return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "hour": {
      let hours = value.hour;
      let min2 = 0;
      let max2 = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = hours >= 12;
        min2 = isPM ? 12 : 0;
        max2 = isPM ? 23 : 11;
      }
      mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min2, max2, options === null || options === void 0 ? void 0 : options.round);
      break;
    }
    case "minute":
      mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "second":
      mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "millisecond":
      mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min2, max2, round2 = false) {
  if (round2) {
    value += Math.sign(amount);
    if (value < min2) value = max2;
    let div = Math.abs(amount);
    if (amount > 0) value = Math.ceil(value / div) * div;
    else value = Math.floor(value / div) * div;
    if (value > max2) value = min2;
  } else {
    value += amount;
    if (value < min2) value = max2 - (min2 - value - 1);
    else if (value > max2) value = min2 + (value - max2 - 1);
  }
  return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
  let ms2;
  if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
    let res2 = $735220c2d4774dd3$export$e16d8520af44a096((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), {
      years: duration.years,
      months: duration.months,
      weeks: duration.weeks,
      days: duration.days
    });
    ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res2, dateTime.timeZone);
  } else
    ms2 = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
  ms2 += duration.milliseconds || 0;
  ms2 += (duration.seconds || 0) * 1e3;
  ms2 += (duration.minutes || 0) * 6e4;
  ms2 += (duration.hours || 0) * 36e5;
  let res = (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
  return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
  switch (field) {
    case "hour": {
      let min2 = 0;
      let max2 = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = dateTime.hour >= 12;
        min2 = isPM ? 12 : 0;
        max2 = isPM ? 23 : 11;
      }
      let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
      let minDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: min2
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let minAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "later")
      ].filter((ms3) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms3, dateTime.timeZone).day === minDate.day)[0];
      let maxDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: max2
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let maxAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "later")
      ].filter((ms3) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms3, dateTime.timeZone).day === maxDate.day).pop();
      let ms2 = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
      let hours = Math.floor(ms2 / $735220c2d4774dd3$var$ONE_HOUR);
      let remainder = ms2 % $735220c2d4774dd3$var$ONE_HOUR;
      ms2 = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
    case "era":
    case "year":
    case "month":
    case "day": {
      let res = $735220c2d4774dd3$export$d52ced6badfb9a4c((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), field, amount, options);
      let ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone);
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
    }
    default:
      throw new Error("Unsupported field " + field);
  }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
  let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
  if (res.compare(plainDateTime) === 0) return dateTime;
  let ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone, disambiguation);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
}

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/string.mjs
var $fae977aafc393c5c$var$requiredDurationTimeGroups = [
  "hours",
  "minutes",
  "seconds"
];
var $fae977aafc393c5c$var$requiredDurationGroups = [
  "years",
  "months",
  "weeks",
  "days",
  ...$fae977aafc393c5c$var$requiredDurationTimeGroups
];
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
  let gregorianDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  return `${String(gregorianDate.year).padStart(4, "0")}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
  return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset3) {
  let sign = Math.sign(offset3) < 0 ? "-" : "+";
  offset3 = Math.abs(offset3);
  let offsetHours = Math.floor(offset3 / 36e5);
  let offsetMinutes = offset3 % 36e5 / 6e4;
  return `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
  return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}

// ../node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// ../node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/CalendarDate.mjs
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
  let calendar = typeof args[0] === "object" ? args.shift() : new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)();
  let era;
  if (typeof args[0] === "string") era = args.shift();
  else {
    let eras = calendar.getEras();
    era = eras[eras.length - 1];
  }
  let year = args.shift();
  let month = args.shift();
  let day = args.shift();
  return [
    calendar,
    era,
    year,
    month,
    day
  ];
}
var $35ea8db9cb2ccb90$var$_type = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$99faa760c7908e4f = class _$35ea8db9cb2ccb90$export$99faa760c7908e4f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
    else return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(timeZone) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$60dfd74aa96791bd)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    return (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b2);
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type2 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$ca871e8dbb80966f = class _$35ea8db9cb2ccb90$export$ca871e8dbb80966f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    else return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)((0, $735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    switch (field) {
      case "era":
      case "year":
      case "month":
      case "day":
        return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
      default:
        return (0, $735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(timeZone, disambiguation) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$4223de14708adc63)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    let res = (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b2);
    if (res === 0) return (0, $14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, (0, $11d87f3f76e88657$export$b21e0b124e224484)(b2));
    return res;
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type3 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$d3b7288e7994edea = class _$35ea8db9cb2ccb90$export$d3b7288e7994edea {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    else return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$96b1d28349274637)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$6814caac34ca03c7)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields, disambiguation) {
    return (0, $735220c2d4774dd3$export$31b5430eb18be4f8)(this, fields, disambiguation);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$9a297d111fc86b79)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return (0, $11d87f3f76e88657$export$83aac07b4c37b25)(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return (0, $fae977aafc393c5c$export$bf79f1ebf4b18792)(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    return this.toDate().getTime() - (0, $11d87f3f76e88657$export$84c95a83c799e074)(b2, this.timeZone).toDate().getTime();
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type3, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    let timeZone = args.shift();
    let offset3 = args.shift();
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.timeZone = timeZone;
    this.offset = offset3;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/HebrewCalendar.mjs
var $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
var $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
var $7c5f6fbf42389787$var$MONTH_DAYS = 29;
var $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
var $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;

// ../node_modules/.pnpm/@internationalized+date@3.5.6/node_modules/@internationalized/date/dist/DateFormatter.mjs
var $fb18d541ea1ad717$var$formatterCache = /* @__PURE__ */ new Map();
var $fb18d541ea1ad717$export$ad991b66133851cf = class {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(value) {
    return this.formatter.format(value);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(value) {
    return this.formatter.formatToParts(value);
  }
  /** Formats a date range as a string. */
  formatRange(start, end) {
    if (typeof this.formatter.formatRange === "function")
      return this.formatter.formatRange(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.formatter.formatRangeToParts === "function")
      return this.formatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    let startParts = this.formatter.formatToParts(start);
    let endParts = this.formatter.formatToParts(end);
    return [
      ...startParts.map((p) => ({
        ...p,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p) => ({
        ...p,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let resolvedOptions = this.formatter.resolvedOptions();
    if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
      if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
      resolvedOptions.hourCycle = this.resolvedHourCycle;
      resolvedOptions.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12";
    }
    if (resolvedOptions.calendar === "ethiopic-amete-alem") resolvedOptions.calendar = "ethioaa";
    return resolvedOptions;
  }
  constructor(locale, options = {}) {
    this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
    this.options = options;
  }
};
var $fb18d541ea1ad717$var$hour12Preferences = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
  if (typeof options.hour12 === "boolean" && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
    options = {
      ...options
    };
    let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split("-")[0]];
    let defaultHourCycle = options.hour12 ? "h12" : "h23";
    options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
    delete options.hour12;
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b2) => a2[0] < b2[0] ? -1 : 1).join() : "");
  if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.DateTimeFormat(locale, options);
  $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
var $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
  if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false
  }).format(new Date(2020, 2, 3, 0)) === "24";
  return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
var $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
  if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: false
  }).resolvedOptions().hourCycle === "h12";
  return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
  if (!options.timeStyle && !options.hour) return void 0;
  locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
  locale += (locale.includes("-u-") ? "" : "-u") + "-nu-latn";
  let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
    ...options,
    timeZone: void 0
    // use local timezone
  });
  let min2 = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p) => p.type === "hour").value, 10);
  let max2 = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p) => p.type === "hour").value, 10);
  if (min2 === 0 && max2 === 23) return "h23";
  if (min2 === 24 && max2 === 23) return "h24";
  if (min2 === 0 && max2 === 11) return "h11";
  if (min2 === 12 && max2 === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}

// ../node_modules/.pnpm/radix-vue@1.9.7_vue@3.5.12_typescript@5.6.3_/node_modules/radix-vue/dist/calendar-ChFCRr4K.js
function N(t, n) {
  const e = [];
  for (let r = 0; r < t.length; r += n)
    e.push(t.slice(r, r + n));
  return e;
}
function $(t, n = $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) {
  return m(t) ? t.toDate() : t.toDate(n);
}
function w(t) {
  return t instanceof $35ea8db9cb2ccb90$export$ca871e8dbb80966f;
}
function m(t) {
  return t instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea;
}
function z(t) {
  return w(t) || m(t);
}
function R(t) {
  if (t instanceof Date) {
    const n = t.getFullYear(), e = t.getMonth() + 1;
    return new Date(n, e, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function q(t, n) {
  return t.compare(n) < 0;
}
function P(t, n) {
  return t.compare(n) > 0;
}
function W(t, n) {
  return t.compare(n) <= 0;
}
function G(t, n) {
  return t.compare(n) >= 0;
}
function V(t, n, e) {
  return G(t, n) && W(t, e);
}
function v(t, n, e) {
  return P(t, n) && q(t, e);
}
function H(t, n, e) {
  const r = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(t, e);
  return n > r ? t.subtract({ days: r + 7 - n }) : n === r ? t : t.subtract({ days: r - n });
}
function J(t, n, e) {
  const r = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(t, e), a2 = n === 0 ? 6 : n - 1;
  return r === a2 ? t : r > a2 ? t.add({ days: 7 - r + a2 }) : t.add({ days: a2 - r });
}
function b(t, n, e, r) {
  if (e === void 0 && r === void 0)
    return true;
  let a2 = t.add({ days: 1 });
  if (r != null && r(a2) || e != null && e(a2))
    return false;
  const s = n;
  for (; a2.compare(s) < 0; )
    if (a2 = a2.add({ days: 1 }), r != null && r(a2) || e != null && e(a2))
      return false;
  return true;
}
function A(t, n) {
  const e = [];
  let r = t.add({ days: 1 });
  const a2 = n;
  for (; r.compare(a2) < 0; )
    e.push(r), r = r.add({ days: 1 });
  return e;
}
function y(t) {
  const { dateObj: n, weekStartsOn: e, fixedWeeks: r, locale: a2 } = t, s = R(n), o = Array.from({ length: s }, (D, u) => n.set({ day: u + 1 })), f = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(n), i = $14e0f24ef4ac5c92$export$a2258d9c4118825c(n), x = H(f, e, a2), T = J(i, e, a2), l = A(x.subtract({ days: 1 }), f), c = A(i, T.add({ days: 1 })), g = l.length + o.length + c.length;
  if (r && g < 42) {
    const D = 42 - g;
    let u = c[c.length - 1];
    u || (u = $14e0f24ef4ac5c92$export$a2258d9c4118825c(n));
    const k = Array.from({ length: D }, (K, C) => {
      const I = C + 1;
      return u.add({ days: I });
    });
    c.push(...k);
  }
  const p = l.concat(o, c), B = N(p, 7);
  return {
    value: n,
    cells: p,
    rows: B
  };
}
function rt(t) {
  const { numberOfMonths: n, dateObj: e, ...r } = t, a2 = [];
  if (!n || n === 1)
    return a2.push(
      y({
        ...r,
        dateObj: e
      })
    ), a2;
  a2.push(
    y({
      ...r,
      dateObj: e
    })
  );
  for (let s = 1; s < n; s++) {
    const o = e.add({ months: s });
    a2.push(
      y({
        ...r,
        dateObj: o
      })
    );
  }
  return a2;
}

// ../node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr2 = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr2;
      return isStart ? lr2 : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x,
    right: x + width,
    bottom: y2 + height,
    x,
    y: y2
  };
}

// ../node_modules/.pnpm/@floating-ui+core@1.6.8/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset3 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset3, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// ../node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// ../node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x,
    y: y2
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y: y2
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft - // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io2 = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io2) == null || _io.disconnect();
    io2 = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io2 = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io2 = new IntersectionObserver(handleObserve, options);
    }
    io2.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// ../node_modules/.pnpm/@floating-ui+vue@1.1.5_vue@3.5.12_typescript@5.6.3_/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement2(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function toValue(source) {
  return typeof source === "function" ? source() : unref(source);
}
function arrow3(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement2(toValue(options.element));
      if (element == null) {
        return {};
      }
      return arrow2({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _toValue;
    return (_toValue = toValue(options.open)) != null ? _toValue : true;
  });
  const middlewareOption = computed(() => toValue(options.middleware));
  const placementOption = computed(() => {
    var _toValue2;
    return (_toValue2 = toValue(options.placement)) != null ? _toValue2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _toValue3;
    return (_toValue3 = toValue(options.strategy)) != null ? _toValue3 : "absolute";
  });
  const transformOption = computed(() => {
    var _toValue4;
    return (_toValue4 = toValue(options.transform)) != null ? _toValue4 : true;
  });
  const referenceElement = computed(() => unwrapElement2(reference.value));
  const floatingElement = computed(() => unwrapElement2(floating.value));
  const x = ref(0);
  const y2 = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y2.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    const open = openOption.value;
    computePosition2(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y2.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = open !== false;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption, openOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y2),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}

// ../node_modules/.pnpm/@internationalized+number@3.5.4/node_modules/@internationalized/number/dist/NumberFormatter.mjs
var $488c6ddbf4ef74c2$var$formatterCache = /* @__PURE__ */ new Map();
var $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
  $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch (e) {
}
var $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
  $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch (e) {
}
var $488c6ddbf4ef74c2$var$UNITS = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
var $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 = class {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(value) {
    let res = "";
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
    else res = this.numberFormatter.format(value);
    if (this.options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
      var _UNITS_unit;
      let { unit, unitDisplay = "short", locale } = this.resolvedOptions();
      if (!unit) return res;
      let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
      res += values[locale] || values.default;
    }
    return res;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(value) {
    return this.numberFormatter.formatToParts(value);
  }
  /** Formats a number range as a string. */
  formatRange(start, end) {
    if (typeof this.numberFormatter.formatRange === "function")
      return this.numberFormatter.formatRange(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    return `${this.format(start)} – ${this.format(end)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.numberFormatter.formatRangeToParts === "function")
      return this.numberFormatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    let startParts = this.numberFormatter.formatToParts(start);
    let endParts = this.numberFormatter.formatToParts(end);
    return [
      ...startParts.map((p) => ({
        ...p,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p) => ({
        ...p,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let options = this.numberFormatter.resolvedOptions();
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
      ...options,
      signDisplay: this.options.signDisplay
    };
    if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === "unit") options = {
      ...options,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    };
    return options;
  }
  constructor(locale, options = {}) {
    this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
    this.options = options;
  }
};
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
  let { numberingSystem } = options;
  if (numberingSystem && locale.includes("-nu-")) {
    if (!locale.includes("-u-")) locale += "-u-";
    locale += `-nu-${numberingSystem}`;
  }
  if (options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
    var _UNITS_unit;
    let { unit, unitDisplay = "short" } = options;
    if (!unit) throw new Error('unit option must be provided with style: "unit"');
    if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
    options = {
      ...options,
      style: "decimal"
    };
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b2) => a2[0] < b2[0] ? -1 : 1).join() : "");
  if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.NumberFormat(locale, options);
  $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
  if (signDisplay === "auto") return numberFormat.format(num);
  else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
  else {
    let needsPositiveSign = false;
    if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
    else if (signDisplay === "exceptZero") {
      if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
      else needsPositiveSign = num > 0;
    }
    if (needsPositiveSign) {
      let negative = numberFormat.format(-num);
      let noSign = numberFormat.format(num);
      let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
      if ([
        ...minus
      ].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
      let positive = negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
      return positive;
    } else return numberFormat.format(num);
  }
}

// ../node_modules/.pnpm/@internationalized+number@3.5.4/node_modules/@internationalized/number/dist/NumberParser.mjs
var $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp("^.*\\(.*\\).*$");
var $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
  "latn",
  "arab",
  "hanidec"
];
var $6c7bd7858deea686$export$cd11ab140839f11d = class {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(value) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(value, minValue, maxValue) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(value) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
  }
  constructor(locale, options = {}) {
    this.locale = locale;
    this.options = options;
  }
};
var $6c7bd7858deea686$var$numberParserCache = /* @__PURE__ */ new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
  let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
  if (!locale.includes("-nu-") && !defaultParser.isValidPartialNumber(value)) {
    for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS) if (numberingSystem !== defaultParser.options.numberingSystem) {
      let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes("-u-") ? "-nu-" : "-u-nu-") + numberingSystem, options);
      if (parser.isValidPartialNumber(value)) return parser;
    }
  }
  return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b2) => a2[0] < b2[0] ? -1 : 1).join() : "");
  let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
  if (!parser) {
    parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
    $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
  }
  return parser;
}
var $6c7bd7858deea686$var$NumberParserImpl = class {
  parse(value) {
    let fullySanitizedValue = this.sanitize(value);
    if (this.symbols.group)
      fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, "");
    if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, ".");
    if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, "-");
    fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
    if (this.options.style === "percent") {
      let isNegative = fullySanitizedValue.indexOf("-");
      fullySanitizedValue = fullySanitizedValue.replace("-", "");
      let index = fullySanitizedValue.indexOf(".");
      if (index === -1) index = fullySanitizedValue.length;
      fullySanitizedValue = fullySanitizedValue.replace(".", "");
      if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
      else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
      else if (index - 2 === -2) fullySanitizedValue = "0.00";
      else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
      if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
    }
    let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
    if (isNaN(newValue)) return NaN;
    if (this.options.style === "percent") {
      var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
      let options = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
        maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
      };
      return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new (0, $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)(this.locale, options).format(newValue));
    }
    if (this.options.currencySign === "accounting" && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
    return newValue;
  }
  sanitize(value) {
    value = value.replace(this.symbols.literals, "");
    if (this.symbols.minusSign) value = value.replace("-", this.symbols.minusSign);
    if (this.options.numberingSystem === "arab") {
      if (this.symbols.decimal) {
        value = value.replace(",", this.symbols.decimal);
        value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
      }
      if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, ".", this.symbols.group);
    }
    if (this.options.locale === "fr-FR") value = $6c7bd7858deea686$var$replaceAll(value, ".", String.fromCharCode(8239));
    return value;
  }
  isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
    value = this.sanitize(value);
    if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
    else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
    if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
    if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
    if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, "");
    value = value.replace(this.symbols.numeral, "");
    if (this.symbols.decimal) value = value.replace(this.symbols.decimal, "");
    return value.length === 0;
  }
  constructor(locale, options = {}) {
    this.locale = locale;
    this.formatter = new Intl.NumberFormat(locale, options);
    this.options = this.formatter.resolvedOptions();
    this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
    var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
    if (this.options.style === "percent" && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
};
var $6c7bd7858deea686$var$nonLiteralParts = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]);
var $6c7bd7858deea686$var$pluralNumbers = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
  var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
  let symbolFormatter = new Intl.NumberFormat(locale, {
    ...intlOptions,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
  });
  let allParts = symbolFormatter.formatToParts(-10000.111);
  let posAllParts = symbolFormatter.formatToParts(10000.111);
  let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n) => symbolFormatter.formatToParts(n));
  var _allParts_find_value;
  let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p) => p.type === "minusSign")) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : "-";
  let plusSign = (_posAllParts_find = posAllParts.find((p) => p.type === "plusSign")) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
  if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "exceptZero" || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "always")) plusSign = "+";
  let decimalParts = new Intl.NumberFormat(locale, {
    ...intlOptions,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3);
  let decimal = (_decimalParts_find = decimalParts.find((p) => p.type === "decimal")) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
  let group = (_allParts_find1 = allParts.find((p) => p.type === "group")) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
  let allPartsLiterals = allParts.filter((p) => !$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p) => $6c7bd7858deea686$var$escapeRegex(p.value));
  let pluralPartsLiterals = pluralParts.flatMap((p) => p.filter((p2) => !$6c7bd7858deea686$var$nonLiteralParts.has(p2.type)).map((p2) => $6c7bd7858deea686$var$escapeRegex(p2.value)));
  let sortedLiterals = [
    .../* @__PURE__ */ new Set([
      ...allPartsLiterals,
      ...pluralPartsLiterals
    ])
  ].sort((a2, b2) => b2.length - a2.length);
  let literals = sortedLiterals.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${sortedLiterals.join("|")}|[\\p{White_Space}]`, "gu");
  let numerals = [
    ...new Intl.NumberFormat(intlOptions.locale, {
      useGrouping: false
    }).format(9876543210)
  ].reverse();
  let indexes = new Map(numerals.map((d, i) => [
    d,
    i
  ]));
  let numeral = new RegExp(`[${numerals.join("")}]`, "g");
  let index = (d) => String(indexes.get(d));
  return {
    minusSign,
    plusSign,
    decimal,
    group,
    literals,
    numeral,
    index
  };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
  if (str.replaceAll)
    return str.replaceAll(find, replace);
  return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ../node_modules/.pnpm/radix-vue@1.9.7_vue@3.5.12_typescript@5.6.3_/node_modules/radix-vue/dist/index.js
function Q(a2, t) {
  const e = typeof a2 == "string" && !t ? `${a2}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = inject(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a2) ? `one of the following components: ${a2.join(
        ", "
      )}` : `\`${a2}\``}`
    );
  }, (r) => (provide(n, r), r)];
}
function Kt(a2, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
function Ht(a2, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(a2, t), e);
}
function Ea(a2, t) {
  let e = a2;
  const n = t.toString(), l = n.indexOf("."), s = l >= 0 ? n.length - l : 0;
  if (s > 0) {
    const r = 10 ** s;
    e = Math.round(e * r) / r;
  }
  return e;
}
function Fr(a2, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a2 - (Number.isNaN(t) ? 0 : t)) % n;
  let s = Ea(Math.abs(l) * 2 >= n ? a2 + Math.sign(l) * (n - Math.abs(l)) : a2 - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor(Ea(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor(Ea((e - t) / n, n)) * n), s = Ea(s, n), s;
}
function Lr(a2) {
  return a2 && a2.__esModule && Object.prototype.hasOwnProperty.call(a2, "default") ? a2.default : a2;
}
var Nr = function a(t, e) {
  if (t === e) return true;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return false;
    var n, l, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length) return false;
      for (l = n; l-- !== 0; )
        if (!a(t[l], e[l])) return false;
      return true;
    }
    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(e).length) return false;
    for (l = n; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l])) return false;
    for (l = n; l-- !== 0; ) {
      var r = s[l];
      if (!a(t[r], e[r])) return false;
    }
    return true;
  }
  return t !== t && e !== e;
};
var Ye = Lr(Nr);
function zr(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function Et(a2, t, e) {
  const n = a2.findIndex((i) => Ye(i, t)), l = a2.findIndex((i) => Ye(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a2.slice(s, r + 1);
}
var ma = typeof document < "u";
function zt(a2) {
  return a2 == null;
}
function Ut(a2) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a2;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(s, r, i, 0, 0, 0) : new $35ea8db9cb2ccb90$export$99faa760c7908e4f(s, r, i);
}
var Kr = [
  "ach",
  "af",
  "am",
  "an",
  "ar",
  "ast",
  "az",
  "be",
  "bg",
  "bn",
  "br",
  "bs",
  "ca",
  "cak",
  "ckb",
  "cs",
  "cy",
  "da",
  "de",
  "dsb",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "he",
  "hr",
  "hsb",
  "hu",
  "ia",
  "id",
  "it",
  "ja",
  "ka",
  "kk",
  "kn",
  "ko",
  "lb",
  "lo",
  "lt",
  "lv",
  "meh",
  "ml",
  "ms",
  "nl",
  "nn",
  "no",
  "oc",
  "pl",
  "pt",
  "rm",
  "ro",
  "ru",
  "sc",
  "scn",
  "sk",
  "sl",
  "sr",
  "sv",
  "szl",
  "tg",
  "th",
  "tr",
  "uk",
  "zh-CN",
  "zh-TW"
];
var Hr = ["year", "month", "day"];
var hn = {
  ach: { year: "mwaka", month: "dwe", day: "nino" },
  af: { year: "jjjj", month: "mm", day: "dd" },
  am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
  an: { year: "aaaa", month: "mm", day: "dd" },
  ar: { year: "سنة", month: "شهر", day: "يوم" },
  ast: { year: "aaaa", month: "mm", day: "dd" },
  az: { year: "iiii", month: "aa", day: "gg" },
  be: { year: "гггг", month: "мм", day: "дд" },
  bg: { year: "гггг", month: "мм", day: "дд" },
  bn: { year: "yyyy", month: "মিমি", day: "dd" },
  br: { year: "bbbb", month: "mm", day: "dd" },
  bs: { year: "gggg", month: "mm", day: "dd" },
  ca: { year: "aaaa", month: "mm", day: "dd" },
  cak: { year: "jjjj", month: "ii", day: "q'q'" },
  ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
  cs: { year: "rrrr", month: "mm", day: "dd" },
  cy: { year: "bbbb", month: "mm", day: "dd" },
  da: { year: "åååå", month: "mm", day: "dd" },
  de: { year: "jjjj", month: "mm", day: "tt" },
  dsb: { year: "llll", month: "mm", day: "źź" },
  el: { year: "εεεε", month: "μμ", day: "ηη" },
  en: { year: "yyyy", month: "mm", day: "dd" },
  eo: { year: "jjjj", month: "mm", day: "tt" },
  es: { year: "aaaa", month: "mm", day: "dd" },
  et: { year: "aaaa", month: "kk", day: "pp" },
  eu: { year: "uuuu", month: "hh", day: "ee" },
  fa: { year: "سال", month: "ماه", day: "روز" },
  ff: { year: "hhhh", month: "ll", day: "ññ" },
  fi: { year: "vvvv", month: "kk", day: "pp" },
  fr: { year: "aaaa", month: "mm", day: "jj" },
  fy: { year: "jjjj", month: "mm", day: "dd" },
  ga: { year: "bbbb", month: "mm", day: "ll" },
  gd: { year: "bbbb", month: "mm", day: "ll" },
  gl: { year: "aaaa", month: "mm", day: "dd" },
  he: { year: "שנה", month: "חודש", day: "יום" },
  hr: { year: "gggg", month: "mm", day: "dd" },
  hsb: { year: "llll", month: "mm", day: "dd" },
  hu: { year: "éééé", month: "hh", day: "nn" },
  ia: { year: "aaaa", month: "mm", day: "dd" },
  id: { year: "tttt", month: "bb", day: "hh" },
  it: { year: "aaaa", month: "mm", day: "gg" },
  ja: { year: " 年 ", month: "月", day: "日" },
  ka: { year: "წწწწ", month: "თთ", day: "რრ" },
  kk: { year: "жжжж", month: "аа", day: "кк" },
  kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
  ko: { year: "연도", month: "월", day: "일" },
  lb: { year: "jjjj", month: "mm", day: "dd" },
  lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
  lt: { year: "mmmm", month: "mm", day: "dd" },
  lv: { year: "gggg", month: "mm", day: "dd" },
  meh: { year: "aaaa", month: "mm", day: "dd" },
  ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
  ms: { year: "tttt", month: "mm", day: "hh" },
  nl: { year: "jjjj", month: "mm", day: "dd" },
  nn: { year: "åååå", month: "mm", day: "dd" },
  no: { year: "åååå", month: "mm", day: "dd" },
  oc: { year: "aaaa", month: "mm", day: "jj" },
  pl: { year: "rrrr", month: "mm", day: "dd" },
  pt: { year: "aaaa", month: "mm", day: "dd" },
  rm: { year: "oooo", month: "mm", day: "dd" },
  ro: { year: "aaaa", month: "ll", day: "zz" },
  ru: { year: "гггг", month: "мм", day: "дд" },
  sc: { year: "aaaa", month: "mm", day: "dd" },
  scn: { year: "aaaa", month: "mm", day: "jj" },
  sk: { year: "rrrr", month: "mm", day: "dd" },
  sl: { year: "llll", month: "mm", day: "dd" },
  sr: { year: "гггг", month: "мм", day: "дд" },
  sv: { year: "åååå", month: "mm", day: "dd" },
  szl: { year: "rrrr", month: "mm", day: "dd" },
  tg: { year: "сссс", month: "мм", day: "рр" },
  th: { year: "ปปปป", month: "ดด", day: "วว" },
  tr: { year: "yyyy", month: "aa", day: "gg" },
  uk: { year: "рррр", month: "мм", day: "дд" },
  "zh-CN": { year: "年", month: "月", day: "日" },
  "zh-TW": { year: "年", month: "月", day: "日" }
};
function Wr(a2) {
  if (No(a2))
    return hn[a2];
  {
    const t = qr(a2);
    return No(t) ? hn[t] : hn.en;
  }
}
function yn(a2, t, e) {
  return jr(a2) ? Wr(e)[a2] : Gr(a2) ? t : Ur(a2) ? "––" : "";
}
function No(a2) {
  return Kr.includes(a2);
}
function jr(a2) {
  return Hr.includes(a2);
}
function Ur(a2) {
  return a2 === "hour" || a2 === "minute" || a2 === "second";
}
function Gr(a2) {
  return a2 === "era" || a2 === "dayPeriod";
}
function qr(a2) {
  return Intl.Locale ? new Intl.Locale(a2).language : a2.split("-")[0];
}
var Kn = ["day", "month", "year"];
var bl = ["hour", "minute", "second", "dayPeriod"];
var Cl = [...Kn, ...bl];
function Yr(a2) {
  return Kn.includes(a2);
}
function wl(a2) {
  return Cl.includes(a2);
}
function Xr(a2, t) {
  const e = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    hourCycle: t === 24 ? "h24" : void 0,
    hour12: t === 24 ? false : void 0
  };
  return a2 === "day" && (delete e.second, delete e.hour, delete e.minute, delete e.timeZoneName), a2 === "hour" && (delete e.minute, delete e.second), a2 === "minute" && delete e.second, e;
}
function _l(a2) {
  const t = a2.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const e = a2.querySelector("[data-today]");
  if (e)
    return e.focus();
  const n = a2.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function Zr(a2, t) {
  var e;
  const n = shallowRef();
  return watchEffect(() => {
    n.value = a2();
  }, {
    ...t,
    flush: (e = void 0) != null ? e : "sync"
  }), readonly(n);
}
function Jr(a2, t) {
  let e, n, l;
  const s = ref(true), r = () => {
    s.value = true, l();
  };
  watch(a2, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, p) => (n = c, l = p, {
    get() {
      return s.value && (e = i(), s.value = false), n(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function mt(a2) {
  return getCurrentScope() ? (onScopeDispose(a2), true) : false;
}
function ia() {
  const a2 = /* @__PURE__ */ new Set(), t = (l) => {
    a2.delete(l);
  };
  return {
    on: (l) => {
      a2.add(l);
      const s = () => t(l);
      return mt(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a2).map((s) => s(...l)))
  };
}
function Qr(a2) {
  let t = false, e;
  const n = effectScope(true);
  return (...l) => (t || (e = n.run(() => a2(...l)), t = true), e);
}
function xl(a2) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = effectScope(true), e = n.run(() => a2(...s))), mt(l), e);
}
function Ke(a2) {
  return typeof a2 == "function" ? a2() : unref(a2);
}
function ei(a2) {
  if (!isRef(a2))
    return reactive(a2);
  const t = new Proxy({}, {
    get(e, n, l) {
      return unref(Reflect.get(a2.value, n, l));
    },
    set(e, n, l) {
      return isRef(a2.value[n]) && !isRef(l) ? a2.value[n].value = l : a2.value[n] = l, true;
    },
    deleteProperty(e, n) {
      return Reflect.deleteProperty(a2.value, n);
    },
    has(e, n) {
      return Reflect.has(a2.value, n);
    },
    ownKeys() {
      return Object.keys(a2.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(t);
}
function Sl(a2) {
  return ei(computed(a2));
}
var qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ti = (a2) => typeof a2 < "u";
var ai = (a2) => a2 != null;
var ni = Object.prototype.toString;
var oi = (a2) => ni.call(a2) === "[object Object]";
var Va = () => {
};
var zo = li();
function li() {
  var a2, t;
  return qe && ((a2 = window == null ? void 0 : window.navigator) == null ? void 0 : a2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function El(a2, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a2(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
var Pl = (a2) => a2();
function si(a2, t = {}) {
  let e, n, l = Va;
  const s = (i) => {
    clearTimeout(i), l(), l = Va;
  };
  return (i) => {
    const u = Ke(a2), d = Ke(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function ri(a2 = Pl) {
  const t = ref(true);
  function e() {
    t.value = false;
  }
  function n() {
    t.value = true;
  }
  const l = (...s) => {
    t.value && a2(...s);
  };
  return { isActive: readonly(t), pause: e, resume: n, eventFilter: l };
}
function Dl(a2) {
  return getCurrentInstance();
}
function $t(a2, t = 1e4) {
  return customRef((e, n) => {
    let l = Ke(a2), s;
    const r = () => setTimeout(() => {
      l = Ke(a2), n();
    }, Ke(t));
    return mt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), l;
      },
      set(i) {
        l = i, n(), clearTimeout(s), s = r();
      }
    };
  });
}
function Hn(a2, t = 200, e = {}) {
  return El(
    si(t, e),
    a2
  );
}
function ii(a2, t, e = {}) {
  const {
    eventFilter: n = Pl,
    ...l
  } = e;
  return watch(
    a2,
    El(
      n,
      t
    ),
    l
  );
}
function Ko(a2, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = ri(n);
  return { stop: ii(
    a2,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function ui(a2, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = false,
    immediate: s = true,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((f) => f), c = "rtl" in i && i.rtl || ((f) => f);
  return (r === "both" || r === "ltr") && u.push(Ko(
    a2,
    (f) => {
      u.forEach((v2) => v2.pause()), t.value = d(f), u.forEach((v2) => v2.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(Ko(
    t,
    (f) => {
      u.forEach((v2) => v2.pause()), a2.value = c(f), u.forEach((v2) => v2.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((f) => f.stop());
  };
}
function di(a2, t) {
  Dl() && onBeforeUnmount(a2, t);
}
function ci(a2, t = true, e) {
  Dl() ? onMounted(a2, e) : t ? a2() : nextTick(a2);
}
function Wn(a2, t, e = {}) {
  const {
    immediate: n = true
  } = e, l = ref(false);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = false, r();
  }
  function u(...d) {
    r(), l.value = true, s = setTimeout(() => {
      l.value = false, s = null, a2(...d);
    }, Ke(t));
  }
  return n && (l.value = true, qe && u()), mt(i), {
    isPending: readonly(l),
    start: u,
    stop: i
  };
}
function pi(a2 = 1e3, t = {}) {
  const {
    controls: e = false,
    callback: n
  } = t, l = Wn(
    n ?? Va,
    a2,
    t
  ), s = computed(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function fi(a2, t, e) {
  const n = watch(a2, (...l) => (nextTick(() => n()), t(...l)), e);
  return n;
}
function $e(a2) {
  var t;
  const e = Ke(a2);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Gt = qe ? window : void 0;
function Ne(...a2) {
  let t, e, n, l;
  if (typeof a2[0] == "string" || Array.isArray(a2[0]) ? ([e, n, l] = a2, t = Gt) : [t, e, n, l] = a2, !t)
    return Va;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, f, v2) => (c.addEventListener(p, f, v2), () => c.removeEventListener(p, f, v2)), u = watch(
    () => [$e(t), Ke(l)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const f = oi(p) ? { ...p } : p;
      s.push(
        ...e.flatMap((v2) => n.map((g) => i(c, v2, g, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return mt(d), d;
}
function vi(a2) {
  return typeof a2 == "function" ? a2 : typeof a2 == "string" ? (t) => t.key === a2 : Array.isArray(a2) ? (t) => a2.includes(t.key) : () => true;
}
function jn(...a2) {
  let t, e, n = {};
  a2.length === 3 ? (t = a2[0], e = a2[1], n = a2[2]) : a2.length === 2 ? typeof a2[1] == "object" ? (t = true, e = a2[0], n = a2[1]) : (t = a2[0], e = a2[1]) : (t = true, e = a2[0]);
  const {
    target: l = Gt,
    eventName: s = "keydown",
    passive: r = false,
    dedupe: i = false
  } = n, u = vi(t);
  return Ne(l, s, (c) => {
    c.repeat && Ke(i) || u(c) && e(c);
  }, r);
}
function ja() {
  const a2 = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    a2.value = true;
  }, t), a2;
}
function $l(a2) {
  const t = ja();
  return computed(() => (t.value, !!a2()));
}
function Bl(a2, t, e = {}) {
  const { window: n = Gt, ...l } = e;
  let s;
  const r = $l(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => {
    const f = Ke(a2), v2 = (Array.isArray(f) ? f : [f]).map($e).filter(ai);
    return new Set(v2);
  }), d = watch(
    () => u.value,
    (f) => {
      i(), r.value && f.size && (s = new MutationObserver(t), f.forEach((v2) => s.observe(v2, l)));
    },
    { immediate: true, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), d();
  };
  return mt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function mi(a2 = {}) {
  var t;
  const {
    window: e = Gt,
    deep: n = true,
    triggerOnRemoval: l = false
  } = a2, s = (t = a2.document) != null ? t : e == null ? void 0 : e.document, r = () => {
    var d;
    let c = s == null ? void 0 : s.activeElement;
    if (n)
      for (; c != null && c.shadowRoot; )
        c = (d = c == null ? void 0 : c.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, i = ref(), u = () => {
    i.value = r();
  };
  return e && (Ne(e, "blur", (d) => {
    d.relatedTarget === null && u();
  }, true), Ne(e, "focus", u, true)), l && Bl(s, (d) => {
    d.filter((c) => c.removedNodes.length).map((c) => Array.from(c.removedNodes)).flat().forEach((c) => {
      c === i.value && u();
    });
  }, {
    childList: true,
    subtree: true
  }), u(), i;
}
function Il(a2, t = {}) {
  const {
    immediate: e = true,
    fpsLimit: n = void 0,
    window: l = Gt
  } = t, s = ref(false), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const v2 = f - i;
    if (r && v2 < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a2({ delta: v2, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = true, i = 0, u = l.requestAnimationFrame(d));
  }
  function p() {
    s.value = false, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), mt(p), {
    isActive: readonly(s),
    pause: p,
    resume: c
  };
}
function hi(a2) {
  return JSON.parse(JSON.stringify(a2));
}
function yi(a2) {
  const t = getCurrentInstance(), e = Jr(
    () => null,
    () => t.proxy.$el
  );
  return onUpdated(e.trigger), onMounted(e.trigger), e;
}
function Ze(a2, t, e = {}) {
  const { window: n = Gt, ...l } = e;
  let s;
  const r = $l(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => Array.isArray(a2) ? a2.map((p) => $e(p)) : [$e(a2)]), d = watch(
    u,
    (p) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of p)
          f && s.observe(f, l);
      }
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return mt(c), {
    isSupported: r,
    stop: c
  };
}
function gi(a2, t = {}) {
  const e = mi(t), n = computed(() => $e(a2));
  return { focused: computed(() => n.value && e.value ? n.value.contains(e.value) : false) };
}
function Tl(a2 = yi()) {
  const t = shallowRef(), e = () => {
    const n = $e(a2);
    n && (t.value = n.parentElement);
  };
  return ci(e), watch(() => Ke(a2), e), t;
}
function ne(a2, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: f
  } = n, v2 = getCurrentInstance(), g = e || (v2 == null ? void 0 : v2.emit) || ((l = v2 == null ? void 0 : v2.$emit) == null ? void 0 : l.bind(v2)) || ((r = (s = v2 == null ? void 0 : v2.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v2 == null ? void 0 : v2.proxy));
  let m2 = d;
  t || (t = "modelValue"), m2 = m2 || `update:${t.toString()}`;
  const w2 = (h2) => i ? typeof i == "function" ? i(h2) : hi(h2) : h2, C = () => ti(a2[t]) ? w2(a2[t]) : p, D = (h2) => {
    f ? f(h2) && g(m2, h2) : g(m2, h2);
  };
  if (u) {
    const h2 = C(), E = ref(h2);
    let P2 = false;
    return watch(
      () => a2[t],
      (B) => {
        P2 || (P2 = true, E.value = w2(B), nextTick(() => P2 = false));
      }
    ), watch(
      E,
      (B) => {
        !P2 && (B !== a2[t] || c) && D(B);
      },
      { deep: c }
    ), E;
  } else
    return computed({
      get() {
        return C();
      },
      set(h2) {
        D(h2);
      }
    });
}
function Ua(a2) {
  return a2 ? a2.flatMap((t) => t.type === Fragment ? Ua(t.children) : [t]) : [];
}
var bi = ["INPUT", "TEXTAREA"];
function Bt(a2, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && bi.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = n, [p, f, v2, g, m2, w2] = [
    a2.key === "ArrowRight",
    a2.key === "ArrowLeft",
    a2.key === "ArrowUp",
    a2.key === "ArrowDown",
    a2.key === "Home",
    a2.key === "End"
  ], C = v2 || g, D = p || f;
  if (!m2 && !w2 && (!C && !D || l === "vertical" && D || l === "horizontal" && C))
    return null;
  const h2 = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!h2.length)
    return null;
  d && a2.preventDefault();
  let E = null;
  return D || C ? E = Rl(h2, t, {
    goForward: C ? g : u === "ltr" ? p : f,
    loop: i
  }) : m2 ? E = h2.at(0) || null : w2 && (E = h2.at(-1) || null), c && (E == null || E.focus()), E;
}
function Rl(a2, t, e, n = a2.length) {
  if (--n === 0)
    return null;
  const l = a2.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a2.length))
    return null;
  const r = (s + a2.length) % a2.length, i = a2[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Rl(
    a2,
    i,
    e,
    n
  ) : i : null;
}
function gn(a2) {
  if (a2 === null || typeof a2 != "object")
    return false;
  const t = Object.getPrototypeOf(a2);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a2 ? false : Symbol.toStringTag in a2 ? Object.prototype.toString.call(a2) === "[object Module]" : true;
}
function Pn(a2, t, e = ".", n) {
  if (!gn(t))
    return Pn(a2, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a2) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a2[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : gn(r) && gn(l[s]) ? l[s] = Pn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function Ci(a2) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => Pn(e, n, "", a2), {})
  );
}
var wi = Ci();
var [Ga, _i] = Q("ConfigProvider");
var mv = defineComponent({
  inheritAttrs: false,
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: true },
    nonce: { default: void 0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a2) {
    const t = a2, { dir: e, scrollBody: n, nonce: l } = toRefs(t);
    return _i({
      dir: e,
      scrollBody: n,
      nonce: l,
      useId: t.useId
    }), (s, r) => renderSlot(s.$slots, "default");
  }
});
var xi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var Si = (a2 = 21) => {
  let t = "", e = a2;
  for (; e--; )
    t += xi[Math.random() * 64 | 0];
  return t;
};
var Ei = xl(() => {
  const a2 = ref(/* @__PURE__ */ new Map()), t = ref(), e = computed(() => {
    for (const r of a2.value.values())
      if (r)
        return true;
    return false;
  }), n = Ga({
    scrollBody: ref(true)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", zo && (l == null || l()), t.value = void 0;
  };
  return watch(e, (r, i) => {
    var p;
    if (!qe)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? wi({
      padding: n.scrollBody.value.padding === true ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === true ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), zo && (l = Ne(
      document,
      "touchmove",
      (f) => {
        var v2;
        f.target === document.documentElement && (f.touches.length > 1 || (v2 = f.preventDefault) == null || v2.call(f));
      },
      { passive: false }
    )), nextTick(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), a2;
});
function ha(a2) {
  const t = Si(6), e = Ei();
  e.value.set(t, a2 ?? false);
  const n = computed({
    get: () => e.value.get(t) ?? false,
    set: (l) => e.value.set(t, l)
  });
  return di(() => {
    e.value.delete(t);
  }), n;
}
var Pi = "data-radix-vue-collection-item";
function Me(a2, t = Pi) {
  const e = a2 ?? Symbol();
  return { createCollection: (s) => {
    const r = ref([]);
    function i() {
      const u = $e(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return onBeforeUpdate(() => {
      r.value = [];
    }), onMounted(i), onUpdated(i), watch(() => s == null ? void 0 : s.value, i, { immediate: true }), provide(e, r), r;
  }, injectCollection: () => inject(e, ref([])) };
}
function Un(a2) {
  const t = ref(a2);
  function e() {
    return t.value;
  }
  function n(m2) {
    t.value = m2;
  }
  function l(m2, w2) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, w2).format(m2);
  }
  function s(m2, w2 = true) {
    return z(m2) && w2 ? l($(m2), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l($(m2), {
      dateStyle: "long"
    });
  }
  function r(m2, w2 = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long", year: "numeric", ...w2 }).format(m2);
  }
  function i(m2, w2 = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long", ...w2 }).format(m2);
  }
  function u() {
    const m2 = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((C) => ({ label: i($(m2.set({ month: C }))), value: C }));
  }
  function d(m2, w2 = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { year: "numeric", ...w2 }).format(m2);
  }
  function c(m2, w2) {
    return m(m2) ? new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      ...w2,
      timeZone: m2.timeZone
    }).formatToParts($(m2)) : new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, w2).formatToParts($(m2));
  }
  function p(m2, w2 = "narrow") {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { weekday: w2 }).format(m2);
  }
  function f(m2) {
    var D;
    return ((D = new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m2).find((h2) => h2.type === "dayPeriod")) == null ? void 0 : D.value) === "PM" ? "PM" : "AM";
  }
  const v2 = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(m2, w2, C = {}) {
    const D = { ...v2, ...C }, E = c(m2, D).find((P2) => P2.type === w2);
    return E ? E.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: c,
    custom: l,
    part: g,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: u
  };
}
function be(a2) {
  const t = Ga({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (a2 == null ? void 0 : a2.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Re(a2) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[toHandlerKey(camelize(l))] = (...s) => a2(l, ...s);
  }), n;
}
var bn = 0;
function Gn() {
  watchEffect((a2) => {
    if (!qe)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ho()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ho()
    ), bn++, a2(() => {
      bn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), bn--;
    });
  });
}
function Ho() {
  const a2 = document.createElement("span");
  return a2.setAttribute("data-radix-focus-guard", ""), a2.tabIndex = 0, a2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a2;
}
function Je(a2) {
  return computed(() => {
    var t;
    return Ke(a2) ? !!((t = $e(a2)) != null && t.closest("form")) : true;
  });
}
function It(a2) {
  const t = getCurrentInstance(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = toRef(a2);
  return computed(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[camelize(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function xe(a2, t) {
  const e = It(a2), n = t ? Re(t) : {};
  return computed(() => ({
    ...e.value,
    ...n
  }));
}
function R2() {
  const a2 = getCurrentInstance(), t = ref(), e = computed(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : $e(t);
  }), n = Object.assign({}, a2.exposed), l = {};
  for (const r in a2.props)
    Object.defineProperty(l, r, {
      enumerable: true,
      configurable: true,
      get: () => a2.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(l, r, {
        enumerable: true,
        configurable: true,
        get: () => n[r]
      });
  Object.defineProperty(l, "$el", {
    enumerable: true,
    configurable: true,
    get: () => a2.vnode.el
  }), a2.exposed = l;
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l, "$el", {
      enumerable: true,
      configurable: true,
      get: () => r.$el
    }), a2.exposed = l);
  }
  return { forwardRef: s, currentRef: t, currentElement: e };
}
function Al(a2, t) {
  const e = $t(false, 300), n = ref(null), l = ia();
  function s() {
    n.value = null, e.value = false;
  }
  function r(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Di(c, d.getBoundingClientRect()), f = $i(c, p), v2 = Bi(u.getBoundingClientRect()), g = Ti([...f, ...v2]);
    n.value = g, e.value = true;
  }
  return watchEffect((i) => {
    if (a2.value && t.value) {
      const u = (c) => r(c, t.value), d = (c) => r(c, a2.value);
      a2.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = a2.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), watchEffect((i) => {
    var u;
    if (n.value) {
      const d = (c) => {
        var w2, C;
        if (!n.value)
          return;
        const p = c.target, f = { x: c.clientX, y: c.clientY }, v2 = ((w2 = a2.value) == null ? void 0 : w2.contains(p)) || ((C = t.value) == null ? void 0 : C.contains(p)), g = !Ii(f, n.value), m2 = p.hasAttribute("data-grace-area-trigger");
        v2 ? s() : (g || m2) && (s(), l.trigger());
      };
      (u = a2.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = a2.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function Di(a2, t) {
  const e = Math.abs(t.top - a2.y), n = Math.abs(t.bottom - a2.y), l = Math.abs(t.right - a2.x), s = Math.abs(t.left - a2.x);
  switch (Math.min(e, n, l, s)) {
    case s:
      return "left";
    case l:
      return "right";
    case e:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $i(a2, t, e = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: a2.x - e, y: a2.y + e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "bottom":
      n.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x + e, y: a2.y - e }
      );
      break;
    case "left":
      n.push(
        { x: a2.x + e, y: a2.y - e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "right":
      n.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x - e, y: a2.y + e }
      );
      break;
  }
  return n;
}
function Bi(a2) {
  const { top: t, right: e, bottom: n, left: l } = a2;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Ii(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Ti(a2) {
  const t = a2.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Ri(t);
}
function Ri(a2) {
  if (a2.length <= 1)
    return a2.slice();
  const t = [];
  for (let n = 0; n < a2.length; n++) {
    const l = a2[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        t.pop();
      else break;
    }
    t.push(l);
  }
  t.pop();
  const e = [];
  for (let n = a2.length - 1; n >= 0; n--) {
    const l = a2[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r = e[e.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        e.pop();
      else break;
    }
    e.push(l);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var Ai = function(a2) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a2) ? a2[0] : a2;
  return t.ownerDocument.body;
};
var Ft = /* @__PURE__ */ new WeakMap();
var Pa = /* @__PURE__ */ new WeakMap();
var Da = {};
var Cn = 0;
var Ol = function(a2) {
  return a2 && (a2.host || Ol(a2.parentNode));
};
var Oi = function(a2, t) {
  return t.map(function(e) {
    if (a2.contains(e))
      return e;
    var n = Ol(e);
    return n && a2.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a2, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
};
var ki = function(a2, t, e, n) {
  var l = Oi(t, Array.isArray(a2) ? a2 : [a2]);
  Da[e] || (Da[e] = /* @__PURE__ */ new WeakMap());
  var s = Da[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  l.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v2 = f.getAttribute(n), g = v2 !== null && v2 !== "false", m2 = (Ft.get(f) || 0) + 1, w2 = (s.get(f) || 0) + 1;
          Ft.set(f, m2), s.set(f, w2), r.push(f), m2 === 1 && g && Pa.set(f, true), w2 === 1 && f.setAttribute(e, "true"), g || f.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return c(t), i.clear(), Cn++, function() {
    r.forEach(function(p) {
      var f = Ft.get(p) - 1, v2 = s.get(p) - 1;
      Ft.set(p, f), s.set(p, v2), f || (Pa.has(p) || p.removeAttribute(n), Pa.delete(p)), v2 || p.removeAttribute(e);
    }), Cn--, Cn || (Ft = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
};
var Mi = function(a2, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a2) ? a2 : [a2]), l = Ai(a2);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), ki(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function ya(a2) {
  let t;
  watch(() => $e(a2), (e) => {
    e ? t = Mi(e) : t && t();
  }), onUnmounted(() => {
    t && t();
  });
}
var Vi = 0;
function he(a2, t = "radix") {
  if (a2)
    return a2;
  const e = Ga({ useId: void 0 });
  return useId ? `${t}-${useId()}` : e.useId ? `${t}-${e.useId()}` : `${t}-${++Vi}`;
}
function Fi(a2, t) {
  const e = ref(), n = (s, r) => {
    if (t.multiple && Array.isArray(a2.value))
      if (t.selectionBehavior === "replace")
        a2.value = [s], e.value = s;
      else {
        const i = a2.value.findIndex((u) => r(u));
        i !== -1 ? a2.value.splice(i, 1) : a2.value.push(s);
      }
    else
      t.selectionBehavior === "replace" ? a2.value = { ...s } : !Array.isArray(a2.value) && r(a2.value) ? a2.value = void 0 : a2.value = { ...s };
    return a2.value;
  };
  function l(s, r, i, u) {
    var f;
    if (!(e != null && e.value) || !t.multiple || !Array.isArray(a2.value))
      return;
    const c = (f = i().filter((v2) => v2.ref.dataset.disabled !== "").find((v2) => v2.ref === r)) == null ? void 0 : f.value;
    if (!c)
      return;
    let p = null;
    switch (s) {
      case "prev":
      case "next": {
        p = Et(u, e.value, c);
        break;
      }
      case "first": {
        p = Et(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        p = Et(u, e.value, u == null ? void 0 : u[u.length - 1]);
        break;
      }
    }
    a2.value = p;
  }
  return {
    firstValue: e,
    onSelectItem: n,
    handleMultipleReplace: l
  };
}
function kl(a2) {
  const t = ref(), e = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = $e(a2);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = l.offsetWidth, d = l.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: n
  };
}
function Ml(a2, t) {
  const e = ref(a2);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
function ga(a2) {
  const t = $t("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var f, v2;
      if (!(a2 != null && a2.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a2 == null ? void 0 : a2.value) ?? s, i = document.activeElement, u = ((v2 = (f = r.find((g) => g === i)) == null ? void 0 : f.textContent) == null ? void 0 : v2.trim()) ?? "", d = r.map((g) => {
        var m2;
        return ((m2 = g.textContent) == null ? void 0 : m2.trim()) ?? "";
      }), c = Yn(d, t.value, u), p = r.find(
        (g) => {
          var m2;
          return ((m2 = g.textContent) == null ? void 0 : m2.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function qn(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
function Yn(a2, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a2.indexOf(e) : -1;
  let r = qn(a2, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function hv(a2, t) {
  return {
    inheritAttrs: false,
    name: `${a2.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = R2(), r = mergeProps(l, n.attrs);
        return h(a2, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function Qe() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
var Xn = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a2, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = Ua(e.default()), l = n.findIndex((c) => c.type !== Comment);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? mergeProps(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = cloneVNode(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
});
var O = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a2, { attrs: t, slots: e }) {
    const n = a2.asChild ? "template" : a2.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => h(n, t) : n !== "template" ? () => h(a2.as, t, { default: e.default }) : () => h(Xn, t, { default: e.default });
  }
});
function Ae() {
  const a2 = ref(), t = computed(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a2.value) == null ? void 0 : e.$el.nodeName) ? (n = a2.value) == null ? void 0 : n.$el.nextElementSibling : $e(a2);
  });
  return {
    primitiveElement: a2,
    currentElement: t
  };
}
var [Vl, Li] = Q("CollapsibleRoot");
var Ni = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, s = ne(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ne(n, "disabled");
    return Li({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R2(), (i, u) => (openBlock(), createBlock(unref(O), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { open: unref(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
var zi = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = Vl();
    return (n, l) => {
      var s, r;
      return openBlock(), createBlock(unref(O), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": unref(e).contentId,
        "aria-expanded": unref(e).open.value,
        "data-state": unref(e).open.value ? "open" : "closed",
        "data-disabled": (s = unref(e).disabled) != null && s.value ? "" : void 0,
        disabled: (r = unref(e).disabled) == null ? void 0 : r.value,
        onClick: unref(e).onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Ki(a2, t) {
  const e = ref({}), n = ref("none"), l = a2.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Ml(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), i = (v2) => {
    var g;
    if (qe) {
      const m2 = new CustomEvent(v2, { bubbles: false, cancelable: false });
      (g = t.value) == null || g.dispatchEvent(m2);
    }
  };
  watch(
    a2,
    async (v2, g) => {
      var w2;
      const m2 = g !== v2;
      if (await nextTick(), m2) {
        const C = n.value, D = $a(t.value);
        v2 ? (r("MOUNT"), i("enter"), D === "none" && i("after-enter")) : D === "none" || ((w2 = e.value) == null ? void 0 : w2.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && C !== D ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: true }
  );
  const u = (v2) => {
    const g = $a(t.value), m2 = g.includes(
      v2.animationName
    ), w2 = s.value === "mounted" ? "enter" : "leave";
    v2.target === t.value && m2 && (i(`after-${w2}`), r("ANIMATION_END")), v2.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (v2) => {
    v2.target === t.value && (n.value = $a(t.value));
  }, c = watch(
    t,
    (v2, g) => {
      v2 ? (e.value = getComputedStyle(v2), v2.addEventListener("animationstart", d), v2.addEventListener("animationcancel", u), v2.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: true }
  ), p = watch(s, () => {
    const v2 = $a(t.value);
    n.value = s.value === "mounted" ? v2 : "none";
  });
  return onUnmounted(() => {
    c(), p();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function $a(a2) {
  return a2 && getComputedStyle(a2).animationName || "none";
}
var Pe = defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a2, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = toRefs(a2), s = ref(), { isPresent: r } = Ki(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Ua(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], {
      ref: (c) => {
        const p = $e(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
});
var Hi = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Vl();
    e.contentId || (e.contentId = he(void 0, "radix-vue-collapsible-content"));
    const n = ref(), { forwardRef: l, currentElement: s } = R2(), r = ref(0), i = ref(0), u = computed(() => e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await nextTick();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (p, f) => (openBlock(), createBlock(unref(Pe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var v2, g;
        return [
          createVNode(unref(O), mergeProps(p.$attrs, {
            id: unref(e).contentId,
            ref: unref(l),
            "as-child": t.asChild,
            as: p.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (v2 = unref(e).disabled) != null && v2.value ? "" : void 0,
            hidden: !((g = n.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: withCtx(() => {
              var m2;
              return [
                (m2 = n.value) != null && m2.present ? renderSlot(p.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Fl({ type: a2, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (zt(a2) && zt(e) && zt(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== void 0 && t !== void 0 && typeof e != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${a2 === "single" ? "- a string" : a2 === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l = e !== void 0 || t !== void 0;
  if (a2 && l) {
    const s = Array.isArray(e) || Array.isArray(t), r = e !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof e : typeof t;
    if (a2 === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (a2 === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return l ? Array.isArray(n) ? "multiple" : "single" : a2;
}
function Wi({ type: a2, defaultValue: t, modelValue: e }) {
  return a2 || Fl({ type: a2, defaultValue: t, modelValue: e });
}
function ji({ type: a2, defaultValue: t }) {
  return t !== void 0 ? t : a2 === "single" ? void 0 : [];
}
function Ll(a2, t) {
  const e = ref(Wi(a2)), n = ne(a2, "modelValue", t, {
    defaultValue: ji(a2),
    passive: a2.modelValue === void 0,
    deep: true
  });
  watch(
    () => [a2.type, a2.modelValue, a2.defaultValue],
    () => {
      const r = Fl(a2);
      e.value !== r && (e.value = r);
    },
    { immediate: true }
  );
  function l(r) {
    if (e.value === "single")
      n.value = r === n.value ? void 0 : r;
    else {
      const i = [...n.value || []];
      if (i.includes(r)) {
        const u = i.findIndex((d) => d === r);
        i.splice(u, 1);
      } else
        i.push(r);
      n.value = i;
    }
  }
  const s = computed(() => e.value === "single");
  return {
    modelValue: n,
    type: e,
    changeModelValue: l,
    isSingle: s
  };
}
var [qa, Ui] = Q("AccordionRoot");
var yv = defineComponent({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, disabled: s } = toRefs(e), r = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = Ll(e, n), { forwardRef: c, currentElement: p } = R2();
    return Ui({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v2) => (openBlock(), createBlock(unref(O), {
      ref: unref(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var [Zn, Gi] = Q("AccordionItem");
var gv = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = qa(), l = computed(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = computed(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = computed(() => s.value ? "" : void 0), i = computed(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R2();
    Gi({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(p) {
      Bt(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: true
        }
      );
    }
    return (p, f) => (openBlock(), createBlock(unref(Ni), {
      "data-orientation": unref(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
});
var bv = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = qa(), n = Zn();
    return R2(), (l, s) => (openBlock(), createBlock(unref(Hi), {
      role: "region",
      hidden: !unref(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": unref(n).triggerId,
      "data-state": unref(n).dataState.value,
      "data-disabled": unref(n).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
});
var Cv = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a2) {
    const t = a2, e = qa(), n = Zn();
    return R2(), (l, s) => (openBlock(), createBlock(unref(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n).dataState.value,
      "data-disabled": unref(n).dataDisabled.value
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
});
var wv = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = qa(), n = Zn();
    n.triggerId || (n.triggerId = he(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (openBlock(), createBlock(unref(zi), {
      id: unref(n).triggerId,
      ref: unref(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": unref(n).disabled.value || void 0,
      "aria-expanded": unref(n).open.value || false,
      "data-disabled": unref(n).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n).dataState.value,
      disabled: unref(n).disabled.value,
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
});
var [et, qi] = Q("DialogRoot");
var Yi = defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), r = ref(), { modal: i } = toRefs(e);
    return qi({
      open: l,
      modal: i,
      openModal: () => {
        l.value = true;
      },
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: r
    }), (u, d) => renderSlot(u.$slots, "default", { open: unref(l) });
  }
});
var Xi = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = et(), { forwardRef: n, currentElement: l } = R2();
    return e.contentId || (e.contentId = he(void 0, "radix-vue-dialog-content")), onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      ref: unref(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": unref(e).open.value || false,
      "aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
      "data-state": unref(e).open.value ? "open" : "closed",
      onClick: unref(e).onOpenToggle
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
var ht = defineComponent({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = ja();
    return (e, n) => unref(t) || e.forceMount ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var _v = defineComponent({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zi = "dismissableLayer.pointerDownOutside";
var Ji = "dismissableLayer.focusOutside";
function Nl(a2, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a2.dataset.dismissableLayer === "" ? a2 : a2.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a2.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function zl(a2, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false), l = ref(() => {
  });
  return watchEffect((r) => {
    if (!qe)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Nl(t.value, c)) {
          n.value = false;
          return;
        }
        if (d.target && !n.value) {
          let p = function() {
            Kt(
              Zi,
              a2,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = p, e.addEventListener("click", l.value, {
            once: true
          })) : p();
        } else
          e.removeEventListener("click", l.value);
        n.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => n.value = true
  };
}
function Kl(a2, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false);
  return watchEffect((s) => {
    if (!qe)
      return;
    const r = async (i) => {
      t != null && t.value && (await nextTick(), !(!t.value || Nl(t.value, i.target)) && i.target && !n.value && Kt(
        Ji,
        a2,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", r), s(() => e.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => n.value = true,
    onBlurCapture: () => n.value = false
  };
}
var je = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var yt = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), r = computed(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => je.layersRoot), u = computed(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = computed(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = computed(() => {
      const g = Array.from(i.value), [m2] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), w2 = g.indexOf(m2);
      return u.value >= w2;
    }), p = zl(async (g) => {
      const m2 = [...je.branches].some(
        (w2) => w2 == null ? void 0 : w2.contains(g.target)
      );
      !c.value || m2 || (n("pointerDownOutside", g), n("interactOutside", g), await nextTick(), g.defaultPrevented || n("dismiss"));
    }, s), f = Kl((g) => {
      [...je.branches].some(
        (w2) => w2 == null ? void 0 : w2.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    jn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let v2;
    return watchEffect((g) => {
      s.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (v2 = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v2);
      }));
    }), watchEffect((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), je.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, m2) => (openBlock(), createBlock(unref(O), {
      ref: unref(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(f).onFocusCapture,
      onBlurCapture: unref(f).onBlurCapture,
      onPointerdownCapture: unref(p).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var Qi = defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R2();
    return onMounted(() => {
      je.branches.add(n.value);
    }), onUnmounted(() => {
      je.branches.delete(n.value);
    }), (l, s) => (openBlock(), createBlock(unref(O), mergeProps({ ref: unref(e) }, t), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wn = "focusScope.autoFocusOnMount";
var _n = "focusScope.autoFocusOnUnmount";
var Wo = { bubbles: false, cancelable: true };
function Oa(a2, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const n of a2)
    if (dt(n, { select: t }), document.activeElement !== e)
      return true;
}
function eu(a2) {
  const t = Jn(a2), e = jo(t, a2), n = jo(t.reverse(), a2);
  return [e, n];
}
function Jn(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function jo(a2, t) {
  for (const e of a2)
    if (!tu(e, { upTo: t }))
      return e;
}
function tu(a2, { upTo: t }) {
  if (getComputedStyle(a2).visibility === "hidden")
    return true;
  for (; a2; ) {
    if (t !== void 0 && a2 === t)
      return false;
    if (getComputedStyle(a2).display === "none")
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function au(a2) {
  return a2 instanceof HTMLInputElement && "select" in a2;
}
function dt(a2, { select: t = false } = {}) {
  if (a2 && a2.focus) {
    const e = document.activeElement;
    a2.focus({ preventScroll: true }), a2 !== e && au(a2) && t && a2.select();
  }
}
var nu = Qr(() => ref([]));
function ou() {
  const a2 = nu();
  return {
    add(t) {
      const e = a2.value[0];
      t !== e && (e == null || e.pause()), a2.value = Uo(a2.value, t), a2.value.unshift(t);
    },
    remove(t) {
      var e;
      a2.value = Uo(a2.value, t), (e = a2.value[0]) == null || e.resume();
    }
  };
}
function Uo(a2, t) {
  const e = [...a2], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function lu(a2) {
  return a2.filter((t) => t.tagName !== "A");
}
var Ya = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { currentRef: l, currentElement: s } = R2(), r = ref(null), i = ou(), u = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((c) => {
      if (!qe)
        return;
      const p = s.value;
      if (!e.trapped)
        return;
      function f(w2) {
        if (u.paused || !p)
          return;
        const C = w2.target;
        p.contains(C) ? r.value = C : dt(r.value, { select: true });
      }
      function v2(w2) {
        if (u.paused || !p)
          return;
        const C = w2.relatedTarget;
        C !== null && (p.contains(C) || dt(r.value, { select: true }));
      }
      function g(w2) {
        p.contains(r.value) || dt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v2);
      const m2 = new MutationObserver(g);
      p && m2.observe(p, { childList: true, subtree: true }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v2), m2.disconnect();
      });
    }), watchEffect(async (c) => {
      const p = s.value;
      if (await nextTick(), !p)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const g = new CustomEvent(wn, Wo);
        p.addEventListener(wn, (m2) => n("mountAutoFocus", m2)), p.dispatchEvent(g), g.defaultPrevented || (Oa(lu(Jn(p)), {
          select: true
        }), document.activeElement === f && dt(p));
      }
      c(() => {
        p.removeEventListener(wn, (w2) => n("mountAutoFocus", w2));
        const g = new CustomEvent(_n, Wo), m2 = (w2) => {
          n("unmountAutoFocus", w2);
        };
        p.addEventListener(_n, m2), p.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || dt(f ?? document.body, { select: true }), p.removeEventListener(_n, m2), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (p && f) {
        const v2 = c.currentTarget, [g, m2] = eu(v2);
        g && m2 ? !c.shiftKey && f === m2 ? (c.preventDefault(), e.loop && dt(g, { select: true })) : c.shiftKey && f === g && (c.preventDefault(), e.loop && dt(m2, { select: true })) : f === v2 && c.preventDefault();
      }
    }
    return (c, p) => (openBlock(), createBlock(unref(O), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var su = "menu.itemSelect";
var Dn = ["Enter", " "];
var ru = ["ArrowDown", "PageUp", "Home"];
var Hl = ["ArrowUp", "PageDown", "End"];
var iu = [...ru, ...Hl];
var uu = {
  ltr: [...Dn, "ArrowRight"],
  rtl: [...Dn, "ArrowLeft"]
};
var du = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Qn(a2) {
  return a2 ? "open" : "closed";
}
function Fa(a2) {
  return a2 === "indeterminate";
}
function eo(a2) {
  return Fa(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
function $n(a2) {
  const t = document.activeElement;
  for (const e of a2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function cu(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function pu(a2, t) {
  if (!t)
    return false;
  const e = { x: a2.clientX, y: a2.clientY };
  return cu(e, t);
}
function ua(a2) {
  return a2.pointerType === "mouse";
}
var fu = "DialogTitle";
var vu = "DialogContent";
function mu({
  titleName: a2 = fu,
  contentName: t = vu,
  componentLink: e = "dialog.html#title",
  titleId: n,
  descriptionId: l,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${a2}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a2}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${e}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  onMounted(() => {
    var c;
    document.getElementById(n) || console.warn(r);
    const d = (c = s.value) == null ? void 0 : c.getAttribute("aria-describedby");
    l && d && (document.getElementById(l) || console.warn(i));
  });
}
var Wl = defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = et(), { forwardRef: s, currentElement: r } = R2();
    return l.titleId || (l.titleId = he(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = he(void 0, "radix-vue-dialog-description")), onMounted(() => {
      l.contentElement = r, document.activeElement !== document.body && (l.triggerElement.value = document.activeElement);
    }), mu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: r
    }), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(yt), mergeProps({
          id: unref(l).contentId,
          ref: unref(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(l).descriptionId,
          "aria-labelledby": unref(l).titleId,
          "data-state": unref(Qn)(unref(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var hu = defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = et(), s = Re(n), { forwardRef: r, currentElement: i } = R2();
    return ya(i), (u, d) => (openBlock(), createBlock(Wl, mergeProps({ ...e, ...unref(s) }, {
      ref: unref(r),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = unref(l).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === true;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var yu = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    R2();
    const s = et(), r = ref(false), i = ref(false);
    return (u, d) => (openBlock(), createBlock(Wl, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (r.value || (p = unref(s).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = false, i.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var v2;
        c.defaultPrevented || (r.value = true, c.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const p = c.target;
        ((v2 = unref(s).triggerElement.value) == null ? void 0 : v2.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gu = defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = et(), s = Re(n), { forwardRef: r } = R2();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(hu, mergeProps({
          key: 0,
          ref: unref(r)
        }, { ...e, ...unref(s), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(yu, mergeProps({
          key: 1,
          ref: unref(r)
        }, { ...e, ...unref(s), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var bu = defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = et();
    return ha(true), R2(), (e, n) => (openBlock(), createBlock(unref(O), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": unref(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
});
var Cu = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = et(), { forwardRef: e } = R2();
    return (n, l) => {
      var s;
      return (s = unref(t)) != null && s.modal.value ? (openBlock(), createBlock(unref(Pe), {
        key: 0,
        present: n.forceMount || unref(t).open.value
      }, {
        default: withCtx(() => [
          createVNode(bu, mergeProps(n.$attrs, {
            ref: unref(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : createCommentVNode("", true);
    };
  }
});
var jl = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = et();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => unref(e).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var wu = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a2) {
    const t = a2, e = et();
    return R2(), (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var _u = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = et();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var xv = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(Yi), mergeProps(unref(l), { modal: true }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sv = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Xi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ev = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [xu, Su] = Q("AlertDialogContent");
var Pv = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    R2();
    const s = ref();
    return Su({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (openBlock(), createBlock(unref(gu), mergeProps({ ...e, ...unref(l) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = withModifiers(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = withModifiers(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        nextTick(() => {
          var u;
          (u = s.value) == null || u.focus({
            preventScroll: true
          });
        });
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Dv = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Cu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $v = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = xu(), { forwardRef: n, currentElement: l } = R2();
    return onMounted(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(jl), mergeProps(t, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bv = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(wu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Iv = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(_u), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Tv = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(jl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rv = defineComponent({
  inheritAttrs: false,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), n = computed(() => 1 / t.ratio * 100);
    return (l, s) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      createVNode(unref(O), mergeProps({
        ref: unref(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
});
var [Ul, Eu] = Q("AvatarRoot");
var Av = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return R2(), Eu({
      imageLoadingStatus: ref("loading")
    }), (t, e) => (openBlock(), createBlock(unref(O), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Pu(a2) {
  const t = ref("idle"), e = ref(false), n = (l) => () => {
    e.value && (t.value = l);
  };
  return onMounted(() => {
    e.value = true, watch(a2, (l) => {
      if (!l)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = l;
      }
    }, { immediate: true });
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
var Ov = defineComponent({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { src: l } = toRefs(e);
    R2();
    const s = Ul(), r = Pu(l);
    return watch(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: true }
    ), (i, u) => withDirectives((openBlock(), createBlock(unref(O), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [vShow, unref(r) === "loaded"]
    ]);
  }
});
var kv = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Ul();
    R2();
    const n = ref(false);
    let l;
    return watch(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = false, t.delayMs ? l = setTimeout(() => {
        n.value = true, clearTimeout(l);
      }, t.delayMs) : n.value = true);
    }, { immediate: true }), (s, r) => n.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(O), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
function Du(a2) {
  function t(n) {
    return Array.isArray(a2.date.value) ? a2.date.value.some((l) => $14e0f24ef4ac5c92$export$ea39ec197993aef0(l, n)) : a2.date.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.date.value, n) : false;
  }
  const e = computed(
    () => {
      var n, l, s, r;
      if (Array.isArray(a2.date.value)) {
        if (!a2.date.value.length)
          return false;
        for (const i of a2.date.value)
          if ((n = a2.isDateDisabled) != null && n.call(a2, i) || (l = a2.isDateUnavailable) != null && l.call(a2, i))
            return true;
      } else {
        if (!a2.date.value)
          return false;
        if ((s = a2.isDateDisabled) != null && s.call(a2, a2.date.value) || (r = a2.isDateUnavailable) != null && r.call(a2, a2.date.value))
          return true;
      }
      return false;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: e
  };
}
function $u(a2, t) {
  const e = t(a2), n = e.compare(a2), l = {};
  return n >= 7 && (l.day = 1), n >= R(a2) && (l.month = 1), e.set({ ...l });
}
function Bu(a2, t) {
  const e = t(a2), n = a2.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= R(a2) && (l.month = 13), e.set({ ...l });
}
function Iu(a2, t) {
  return t(a2);
}
function Tu(a2, t) {
  return t(a2);
}
function Gl(a2) {
  const t = Un(a2.locale.value), e = computed(() => {
    const m2 = {
      calendar: a2.placeholder.value.calendar.identifier
    };
    return a2.placeholder.value.calendar.identifier === "gregory" && a2.placeholder.value.era === "BC" && (m2.era = "short"), m2;
  }), n = ref(rt({
    dateObj: a2.placeholder.value,
    weekStartsOn: a2.weekStartsOn.value,
    locale: a2.locale.value,
    fixedWeeks: a2.fixedWeeks.value,
    numberOfMonths: a2.numberOfMonths.value
  })), l = computed(() => n.value.map((m2) => m2.value));
  function s(m2) {
    return !l.value.some((w2) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(m2, w2));
  }
  const r = (m2 = "month", w2) => {
    if (!a2.maxValue.value || !n.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    const C = n.value[n.value.length - 1].value;
    if (w2 || a2.nextPage.value) {
      const h2 = $u(C, w2 || a2.nextPage.value);
      return P(h2, a2.maxValue.value);
    }
    if (m2 === "year") {
      const h2 = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return P(h2, a2.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return P(D, a2.maxValue.value);
  }, i = (m2 = "month", w2) => {
    if (!a2.minValue.value || !n.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    const C = n.value[0].value;
    if (w2 || a2.prevPage.value) {
      const h2 = Bu(C, w2 || a2.prevPage.value);
      return q(h2, a2.minValue.value);
    }
    if (m2 === "year") {
      const h2 = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return q(h2, a2.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return q(D, a2.minValue.value);
  };
  function u(m2) {
    var w2;
    return !!((w2 = a2.isDateDisabled) != null && w2.call(a2, m2) || a2.disabled.value || a2.maxValue.value && P(m2, a2.maxValue.value) || a2.minValue.value && q(m2, a2.minValue.value));
  }
  const d = (m2) => {
    var w2;
    return !!((w2 = a2.isDateUnavailable) != null && w2.call(a2, m2));
  }, c = computed(() => n.value.length ? n.value[0].rows[0].map((m2) => t.dayOfWeek($(m2), a2.weekdayFormat.value)) : []), p = (m2 = "month", w2) => {
    const C = n.value[0].value;
    if (w2 || a2.nextPage.value) {
      const E = Iu(C, w2 || a2.nextPage.value), P2 = rt({
        dateObj: E,
        weekStartsOn: a2.weekStartsOn.value,
        locale: a2.locale.value,
        fixedWeeks: a2.fixedWeeks.value,
        numberOfMonths: a2.numberOfMonths.value
      });
      n.value = P2;
      const B = {};
      if (!w2) {
        const T = P2[0].value.compare(C);
        T >= R(C) && (B.day = 1), T >= 365 && (B.month = 1);
      }
      a2.placeholder.value = P2[0].value.set({ ...B });
      return;
    }
    const D = m2 === "month" ? C.add({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }) : C.add({ years: 1 }), h2 = rt({
      dateObj: D,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
    n.value = h2, a2.placeholder.value = h2[0].value.set({ day: 1 });
  }, f = (m2 = "month", w2) => {
    const C = n.value[0].value;
    if (w2 || a2.prevPage.value) {
      const E = Tu(C, w2 || a2.prevPage.value), P2 = rt({
        dateObj: E,
        weekStartsOn: a2.weekStartsOn.value,
        locale: a2.locale.value,
        fixedWeeks: a2.fixedWeeks.value,
        numberOfMonths: a2.numberOfMonths.value
      });
      n.value = P2;
      const B = {};
      if (!w2) {
        const T = C.compare(P2[0].value);
        T >= R(C) && (B.day = 1), T >= 365 && (B.month = 1);
      }
      a2.placeholder.value = P2[0].value.set({ ...B });
      return;
    }
    const D = m2 === "month" ? C.subtract({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), h2 = rt({
      dateObj: D,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
    n.value = h2, a2.placeholder.value = h2[0].value.set({ day: 1 });
  };
  watch(a2.placeholder, (m2) => {
    l.value.some((w2) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(w2, m2)) || (n.value = rt({
      dateObj: m2,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    }));
  }), watch([a2.locale, a2.weekStartsOn, a2.fixedWeeks, a2.numberOfMonths], () => {
    n.value = rt({
      dateObj: a2.placeholder.value,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
  });
  const v2 = computed(() => {
    if (!n.value.length)
      return "";
    if (a2.locale.value !== t.getLocale() && t.setLocale(a2.locale.value), n.value.length === 1) {
      const B = n.value[0].value;
      return `${t.fullMonthAndYear($(B), e.value)}`;
    }
    const m2 = $(n.value[0].value), w2 = $(n.value[n.value.length - 1].value), C = t.fullMonth(m2, e.value), D = t.fullMonth(w2, e.value), h2 = t.fullYear(m2, e.value), E = t.fullYear(w2, e.value);
    return h2 === E ? `${C} - ${D} ${E}` : `${C} ${h2} - ${D} ${E}`;
  }), g = computed(() => `${a2.calendarLabel.value ?? "Event Date"}, ${v2.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: l,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: f,
    headingValue: v2,
    fullCalendarLabel: g
  };
}
var Ru = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var Au = {
  role: "heading",
  "aria-level": "2"
};
var [qt, Ou] = Q("CalendarRoot");
var ku = defineComponent({
  __name: "CalendarRoot",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: false },
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    preventDeselect: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: false },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    initialFocus: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      minValue: v2,
      maxValue: g,
      numberOfMonths: m2,
      preventDeselect: w2,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: h2,
      defaultValue: E,
      nextPage: P2,
      prevPage: B,
      dir: T
    } = toRefs(e), { primitiveElement: M, currentElement: V2 } = Ae(), A2 = be(T), F = ne(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), U = Ut({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value
    }), W2 = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    });
    function ee(de) {
      W2.value = de.copy();
    }
    const {
      fullCalendarLabel: L,
      headingValue: G2,
      isDateDisabled: N2,
      isDateUnavailable: z2,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: K,
      weekdays: J2,
      isOutsideVisibleView: Z,
      nextPage: re,
      prevPage: X,
      formatter: se,
      grid: pe
    } = Gl({
      locale: l,
      placeholder: W2,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: m2,
      minValue: v2,
      maxValue: g,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: h2,
      nextPage: P2,
      prevPage: B
    }), {
      isInvalid: _e,
      isDateSelected: Se
    } = Du({
      date: F,
      isDateDisabled: N2,
      isDateUnavailable: z2
    });
    watch(F, (de) => {
      if (Array.isArray(de) && de.length) {
        const Ie = de[de.length - 1];
        Ie && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(W2.value, Ie) && ee(Ie);
      } else !Array.isArray(de) && de && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(W2.value, de) && ee(de);
    });
    function ye(de) {
      if (f.value) {
        if (Array.isArray(F.value)) {
          if (!F.value) {
            F.value = [de.copy()];
            return;
          }
          if (F.value.findIndex((Oe) => $14e0f24ef4ac5c92$export$ea39ec197993aef0(Oe, de)) === -1)
            F.value = [...F.value, de];
          else if (!w2.value) {
            const Oe = F.value.filter((ze) => !$14e0f24ef4ac5c92$export$ea39ec197993aef0(ze, de));
            if (!Oe.length) {
              W2.value = de.copy(), F.value = void 0;
              return;
            }
            F.value = Oe.map((ze) => ze.copy());
          }
        }
      } else {
        if (!F.value) {
          F.value = de.copy();
          return;
        }
        !w2.value && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(F.value, de) ? (W2.value = de.copy(), F.value = void 0) : F.value = de.copy();
      }
    }
    return onMounted(() => {
      i.value && _l(V2.value);
    }), Ou({
      isDateUnavailable: z2,
      dir: A2,
      isDateDisabled: N2,
      locale: l,
      formatter: se,
      modelValue: F,
      placeholder: W2,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      numberOfMonths: m2,
      readonly: r,
      preventDeselect: w2,
      fullCalendarLabel: L,
      headingValue: G2,
      isInvalid: _e,
      isDateSelected: Se,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: K,
      isOutsideVisibleView: Z,
      nextPage: re,
      prevPage: X,
      parentElement: V2,
      onPlaceholderChange: ee,
      onDateChange: ye
    }), (de, Ie) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: M,
      as: de.as,
      "as-child": de.asChild,
      role: "application",
      "aria-label": unref(L),
      "data-readonly": unref(r) ? "" : void 0,
      "data-disabled": unref(s) ? "" : void 0,
      "data-invalid": unref(_e) ? "" : void 0,
      dir: unref(A2)
    }, {
      default: withCtx(() => [
        renderSlot(de.$slots, "default", {
          date: unref(W2),
          grid: unref(pe),
          weekDays: unref(J2),
          weekStartsOn: unref(d),
          locale: unref(l),
          fixedWeeks: unref(p)
        }),
        createBaseVNode("div", Ru, [
          createBaseVNode("div", Au, toDisplayString(unref(L)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
});
var Mu = defineComponent({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vu = defineComponent({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = qt();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "data-disabled": unref(e).disabled.value ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {
          headingValue: unref(e).headingValue.value
        }, () => [
          createTextVNode(toDisplayString(unref(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
});
var Fu = defineComponent({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = qt(), n = computed(() => e.disabled.value ? true : void 0), l = computed(() => e.readonly.value ? true : void 0);
    return (s, r) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
});
var Lu = defineComponent({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = qt();
    return (e, n) => {
      var l, s;
      return openBlock(), createBlock(unref(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": unref(t).isDateSelected(e.date) ? true : void 0,
        "aria-disabled": unref(t).isDateDisabled(e.date) || ((s = (l = unref(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": unref(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var Nu = defineComponent({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zu = defineComponent({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = computed(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = qt();
    return (l, s) => (openBlock(), createBlock(unref(O), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => unref(n).nextPage(t.step, t.nextPage))
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var Ku = defineComponent({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = computed(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = qt();
    return (l, s) => (openBlock(), createBlock(unref(O), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => unref(n).prevPage(t.step, t.prevPage))
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var Hu = defineComponent({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wu = defineComponent({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ju = defineComponent({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uu = defineComponent({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Qe(), n = qt(), { primitiveElement: l, currentElement: s } = Ae(), r = computed(() => t.day.day.toLocaleString(n.locale.value)), i = computed(() => n.formatter.custom($(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = computed(() => n.isDateDisabled(t.day)), d = computed(
      () => {
        var h2;
        return (h2 = n.isDateUnavailable) == null ? void 0 : h2.call(n, t.day);
      }
    ), c = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), p = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), f = computed(
      () => n.isOutsideVisibleView(t.day)
    ), v2 = computed(() => !n.disabled.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, n.placeholder.value)), g = computed(() => n.isDateSelected(t.day)), m2 = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function w2(h2) {
      var E;
      n.readonly.value || n.isDateDisabled(h2) || (E = n.isDateUnavailable) != null && E.call(n, h2) || n.onDateChange(h2);
    }
    function C() {
      w2(t.day);
    }
    function D(h2) {
      h2.preventDefault(), h2.stopPropagation();
      const E = n.parentElement.value, P2 = E ? Array.from(E.querySelectorAll(m2)) : [];
      let T = P2.indexOf(s.value);
      const M = 7, V2 = n.dir.value === "rtl" ? -1 : 1;
      switch (h2.code) {
        case e.ARROW_RIGHT:
          T += V2;
          break;
        case e.ARROW_LEFT:
          T -= V2;
          break;
        case e.ARROW_UP:
          T -= M;
          break;
        case e.ARROW_DOWN:
          T += M;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          w2(t.day);
          return;
        default:
          return;
      }
      if (T >= 0 && T < P2.length) {
        P2[T].focus();
        return;
      }
      if (T < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), nextTick(() => {
          const A2 = E ? Array.from(E.querySelectorAll(m2)) : [];
          A2[A2.length - Math.abs(T)].focus();
        });
        return;
      }
      if (T >= P2.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), nextTick(() => {
          (E ? Array.from(E.querySelectorAll(m2)) : [])[T - P2.length].focus();
        });
      }
    }
    return (h2, E) => (openBlock(), createBlock(unref(O), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || u.value || d.value ? true : void 0,
      "data-selected": g.value ? true : void 0,
      "data-value": h2.day.toString(),
      "data-disabled": u.value || p.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": f.value ? "" : void 0,
      "data-focused": v2.value ? "" : void 0,
      tabindex: v2.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        withKeys(D, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default", { dayValue: r.value }, () => [
          createTextVNode(toDisplayString(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function La(a2) {
  return a2 === "indeterminate";
}
function ql(a2) {
  return La(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
var Gu = ["value", "checked", "name", "disabled", "required"];
var [qu, Yu] = Q("CheckboxRoot");
var Mv = defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ne(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: r, currentElement: i } = R2(), u = Je(i), d = computed(() => {
      var c;
      return e.id && i.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Yu({
      disabled: l,
      state: s
    }), (c, p) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(c.$attrs, {
        id: c.id,
        ref: unref(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": unref(La)(unref(s)) ? "mixed" : unref(s),
        "aria-required": false,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": unref(ql)(unref(s)),
        "data-disabled": unref(l) ? "" : void 0,
        disabled: unref(l),
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (f) => s.value = unref(La)(unref(s)) ? true : !unref(s))
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default", { checked: unref(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      unref(u) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
        checked: !!unref(s),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Gu)) : createCommentVNode("", true)
    ], 64));
  }
});
var Vv = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = R2(), e = qu();
    return (n, l) => (openBlock(), createBlock(unref(Pe), {
      present: n.forceMount || unref(La)(unref(e).state.value) || unref(e).state.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(t),
          "data-state": unref(ql)(unref(e).state.value),
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var [Yl, Xu] = Q("PopperRoot");
var Tt = defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(a2) {
    const t = ref();
    return Xu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => renderSlot(e.$slots, "default");
  }
});
var Rt = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R2(), l = Yl();
    return watchEffect(() => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (openBlock(), createBlock(unref(O), {
      ref: unref(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Zu(a2) {
  return a2 !== null;
}
function Ju(a2) {
  return {
    name: "transformOrigin",
    options: a2,
    fn(t) {
      var w2, C, D;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((w2 = l.arrow) == null ? void 0 : w2.centerOffset) !== 0, i = r ? 0 : a2.arrowWidth, u = r ? 0 : a2.arrowHeight, [d, c] = Bn(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((C = l.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v2 = (((D = l.arrow) == null ? void 0 : D.y) ?? 0) + u / 2;
      let g = "", m2 = "";
      return d === "bottom" ? (g = r ? p : `${f}px`, m2 = `${-u}px`) : d === "top" ? (g = r ? p : `${f}px`, m2 = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m2 = r ? p : `${v2}px`) : d === "left" && (g = `${n.floating.width + u}px`, m2 = r ? p : `${v2}px`), { data: { x: g, y: m2 } };
    }
  };
}
function Bn(a2) {
  const [t, e = "center"] = a2.split("-");
  return [t, e];
}
var Xl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
var [Qu, ed] = Q("PopperContent");
var Dt = defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: mergeDefaults({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Xl
  }),
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Yl(), { forwardRef: s, currentElement: r } = R2(), i = ref(), u = ref(), { width: d, height: c } = kl(u), p = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v2 = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = computed(() => ({
      padding: f.value,
      boundary: v2.value.filter(Zu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v2.value.length > 0
    })), m2 = Zr(() => [
      offset2({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && flip2({
        ...g.value
      }),
      e.avoidCollisions && shift2({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift2() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip2({
        ...g.value
      }),
      size2({
        ...g.value,
        apply: ({ elements: A2, rects: F, availableWidth: U, availableHeight: W2 }) => {
          const { width: ee, height: L } = F.reference, G2 = A2.floating.style;
          G2.setProperty(
            "--radix-popper-available-width",
            `${U}px`
          ), G2.setProperty(
            "--radix-popper-available-height",
            `${W2}px`
          ), G2.setProperty(
            "--radix-popper-anchor-width",
            `${ee}px`
          ), G2.setProperty(
            "--radix-popper-anchor-height",
            `${L}px`
          );
        }
      }),
      u.value && arrow3({ element: u.value, padding: e.arrowPadding }),
      Ju({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && hide2({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: w2, placement: C, isPositioned: D, middlewareData: h2 } = useFloating(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A2) => autoUpdate(...A2, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m2
      }
    ), E = computed(
      () => Bn(C.value)[0]
    ), P2 = computed(
      () => Bn(C.value)[1]
    );
    watchPostEffect(() => {
      D.value && n("placed");
    });
    const B = computed(
      () => {
        var A2;
        return ((A2 = h2.value.arrow) == null ? void 0 : A2.centerOffset) !== 0;
      }
    ), T = ref("");
    watchEffect(() => {
      r.value && (T.value = window.getComputedStyle(r.value).zIndex);
    });
    const M = computed(() => {
      var A2;
      return ((A2 = h2.value.arrow) == null ? void 0 : A2.x) ?? 0;
    }), V2 = computed(() => {
      var A2;
      return ((A2 = h2.value.arrow) == null ? void 0 : A2.y) ?? 0;
    });
    return ed({
      placedSide: E,
      onArrowChange: (A2) => u.value = A2,
      arrowX: M,
      arrowY: V2,
      shouldHideArrow: B
    }), (A2, F) => {
      var U, W2, ee;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(w2),
          transform: unref(D) ? unref(w2).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (U = unref(h2).transformOrigin) == null ? void 0 : U.x,
            (W2 = unref(h2).transformOrigin) == null ? void 0 : W2.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = unref(h2).hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        createVNode(unref(O), mergeProps({ ref: unref(s) }, A2.$attrs, {
          "as-child": e.asChild,
          as: A2.as,
          "data-side": E.value,
          "data-align": P2.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(D) ? void 0 : "none"
          }
        }), {
          default: withCtx(() => [
            renderSlot(A2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var td = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var ad = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          td
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
var nd = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Yt = defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const { forwardRef: t } = R2(), e = Qu(), n = computed(() => nd[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return openBlock(), createElementBlock("span", {
        ref: (c) => {
          unref(e).onArrowChange(c);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (r = unref(e).arrowX) != null && r.value ? `${(i = unref(e).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = unref(e).arrowY) != null && u.value ? `${(d = unref(e).arrowY) == null ? void 0 : d.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(e).placedSide.value],
          visibility: unref(e).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        createVNode(ad, mergeProps(l.$attrs, {
          ref: unref(t),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
});
var Xt = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return R2(), (t, e) => (openBlock(), createBlock(unref(O), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var to = defineComponent({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a2) {
    const t = a2, e = computed(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (s) => (openBlock(), createBlock(Xt, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
});
var od = "data-radix-vue-collection-item";
var [ao, ld] = Q("CollectionProvider");
function ba(a2 = od) {
  const t = ref(/* @__PURE__ */ new Map()), e = ref(), n = ld({
    collectionRef: e,
    itemMap: t,
    attrName: a2
  }), { getItems: l } = Jt(n), s = computed(() => Array.from(n.itemMap.value.values())), r = computed(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
var Ca = defineComponent({
  name: "CollectionSlot",
  setup(a2, { slots: t }) {
    const e = ao(), { primitiveElement: n, currentElement: l } = Ae();
    return watch(l, () => {
      e.collectionRef.value = l.value;
    }), () => h(Xn, { ref: n }, t);
  }
});
var Zt = defineComponent({
  name: "CollectionItem",
  inheritAttrs: false,
  props: {
    value: {
      // It accepts any value
      validator: () => true
    }
  },
  setup(a2, { slots: t, attrs: e }) {
    const n = ao(), { primitiveElement: l, currentElement: s } = Ae();
    return watchEffect((r) => {
      if (s.value) {
        const i = markRaw(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a2.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => h(Xn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function Jt(a2) {
  const t = a2 ?? ao();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const l = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (i, u) => l.indexOf(i.ref) - l.indexOf(u.ref)
    );
  } };
}
var [nt, sd] = Q("ComboboxRoot");
var Fv = defineComponent({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { multiple: l, disabled: s, dir: r } = toRefs(e), i = be(r), u = ne(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ne(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: true
    }), c = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), p = ne(e, "selectedValue", n, {
      defaultValue: void 0,
      passive: e.selectedValue === void 0
    });
    async function f(L) {
      var G2, N2;
      c.value = L, await nextTick(), L ? (d.value && (Array.isArray(d.value) && l.value ? p.value = (G2 = h2().find((z2) => {
        var Y, K;
        return ((K = (Y = z2.ref) == null ? void 0 : Y.dataset) == null ? void 0 : K.state) === "checked";
      })) == null ? void 0 : G2.value : p.value = d.value), await nextTick(), (N2 = m2.value) == null || N2.focus(), W2()) : (g.value = false, e.resetSearchTermOnBlur && M());
    }
    function v2(L) {
      if (Array.isArray(d.value) && l.value) {
        const G2 = d.value.findIndex((z2) => Ye(z2, L)), N2 = [...d.value];
        G2 === -1 ? N2.push(L) : N2.splice(G2, 1), d.value = N2;
      } else
        d.value = L, f(false);
    }
    const g = ref(false), m2 = ref(), w2 = ref(), { forwardRef: C, currentElement: D } = R2(), { getItems: h2, reactiveItems: E, itemMapSize: P2 } = ba("data-radix-vue-combobox-item"), B = ref([]);
    watch(() => P2.value, () => {
      B.value = h2().map((L) => L.value);
    }, {
      immediate: true,
      flush: "post"
    });
    const T = computed(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction(B.value, u.value);
        const L = B.value.filter((G2) => typeof G2 == "string");
        if (L.length)
          return L.filter((G2) => {
            var N2;
            return G2.toLowerCase().includes((N2 = u.value) == null ? void 0 : N2.toLowerCase());
          });
      }
      return B.value;
    });
    function M() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const V2 = computed(() => T.value.findIndex((L) => Ye(L, p.value))), A2 = computed(() => {
      var L;
      return (L = E.value.find((G2) => Ye(G2.value, p.value))) == null ? void 0 : L.ref;
    }), F = computed(() => JSON.stringify(d.value));
    watch(F, async () => {
      await nextTick(), await nextTick(), M();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), watch(() => [T.value.length, u.value.length], async ([L, G2], [N2, z2]) => {
      await nextTick(), await nextTick(), L && (z2 > G2 || V2.value === -1) && (p.value = T.value[0]);
    });
    const U = Je(D);
    function W2() {
      var L;
      A2.value instanceof Element && ((L = A2.value) == null || L.scrollIntoView({ block: "nearest" }));
    }
    function ee() {
      A2.value instanceof Element && A2.value.focus && A2.value.focus();
    }
    return sd({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v2,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: c,
      onOpenChange: f,
      filteredOptions: T,
      contentId: "",
      inputElement: m2,
      selectedElement: A2,
      onInputElementChange: (L) => m2.value = L,
      onInputNavigation: async (L) => {
        const G2 = V2.value;
        G2 === 0 && L === "up" || G2 === T.value.length - 1 && L === "down" || (G2 === -1 && T.value.length || L === "home" ? p.value = T.value[0] : L === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[L === "up" ? G2 - 1 : G2 + 1], await nextTick(), W2(), ee(), nextTick(() => {
          var N2;
          return (N2 = m2.value) == null ? void 0 : N2.focus({ preventScroll: true });
        }));
      },
      onInputEnter: async (L) => {
        var G2;
        T.value.length && p.value && A2.value instanceof Element && (L.preventDefault(), L.stopPropagation(), (G2 = A2.value) == null || G2.click());
      },
      selectedValue: p,
      onSelectedValueChange: (L) => p.value = L,
      parentElement: D,
      contentElement: w2,
      onContentElementChange: (L) => w2.value = L
    }), (L, G2) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(C),
          style: {
            pointerEvents: unref(c) ? "auto" : void 0
          },
          as: L.as,
          "as-child": L.asChild,
          dir: unref(i)
        }, L.$attrs), {
          default: withCtx(() => [
            renderSlot(L.$slots, "default", {
              open: unref(c),
              modelValue: unref(d)
            }),
            unref(U) && e.name ? (openBlock(), createBlock(unref(to), {
              key: 0,
              name: e.name,
              value: unref(d)
            }, null, 8, ["name", "value"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
});
var Lv = defineComponent({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = nt(), { forwardRef: n, currentElement: l } = R2();
    onMounted(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && (e.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = computed(() => t.disabled || e.disabled.value || false), r = ref();
    watchSyncEffect(() => {
      var c;
      return r.value = (c = e.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      e.open.value ? e.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(true);
    }
    function u(c) {
      e.open.value && e.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      e.searchTerm.value = (p = c.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(true), e.isUserInputted.value = true;
    }
    return (c, p) => (openBlock(), createBlock(unref(O), {
      ref: unref(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: unref(e).searchTerm.value,
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        withKeys(withModifiers(i, ["prevent"]), ["down", "up"]),
        withKeys(unref(e).onInputEnter, ["enter"]),
        withKeys(withModifiers(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
});
var Nv = defineComponent({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t } = R2();
    return (e, n) => (openBlock(), createBlock(unref(Rt), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
});
var zv = defineComponent({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = nt(), n = computed(() => t.disabled || e.disabled.value || false);
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "data-state": unref(e).open.value ? "open" : "closed",
      disabled: n.value,
      "data-disabled": n.value ? "" : void 0,
      "aria-disabled": n.value ?? void 0,
      onClick: s[0] || (s[0] = (r) => unref(e).onOpenChange(!unref(e).open.value))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
var Kv = defineComponent({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = nt();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var [Zl, rd] = Q("ComboboxGroup");
var Hv = defineComponent({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { currentRef: e, currentElement: n } = R2(), l = he(void 0, "radix-vue-combobox-group"), s = nt(), r = ref(false);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Bl(n, () => {
      nextTick(() => {
        i();
      });
    }, { childList: true }), watch(() => s.searchTerm.value, () => {
      nextTick(() => {
        i();
      });
    }, { immediate: true }), rd({
      id: l
    }), (u, d) => withDirectives((openBlock(), createBlock(unref(O), mergeProps(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": unref(l)
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [vShow, r.value]
    ]);
  }
});
var Wv = defineComponent({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = Zl({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var [id, ud] = Q("ComboboxContent");
var dd = defineComponent({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { position: l } = toRefs(e), s = nt();
    ha(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R2();
    ya(s.parentElement);
    const u = computed(() => e.position === "popper" ? e : {}), d = It(u.value);
    function c(f) {
      s.onSelectedValueChange("");
    }
    onMounted(() => {
      s.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return ud({ position: l }), (f, v2) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        f.dismissable ? (openBlock(), createBlock(unref(yt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v2[0] || (v2[0] = (g) => unref(s).onOpenChange(false)),
          onFocusOutside: v2[1] || (v2[1] = (g) => {
            var m2;
            (m2 = unref(s).parentElement.value) != null && m2.contains(g.target) && g.preventDefault(), n("focusOutside", g);
          }),
          onInteractOutside: v2[2] || (v2[2] = (g) => n("interactOutside", g)),
          onEscapeKeyDown: v2[3] || (v2[3] = (g) => n("escapeKeyDown", g)),
          onPointerDownOutside: v2[4] || (v2[4] = (g) => {
            var m2;
            (m2 = unref(s).parentElement.value) != null && m2.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
          })
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(Dt) : unref(O)), mergeProps({ ...f.$attrs, ...unref(d) }, {
              id: unref(s).contentId,
              ref: unref(r),
              role: "listbox",
              "data-state": unref(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...unref(l) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: withCtx(() => [
                renderSlot(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(Dt) : unref(O)), mergeProps({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: unref(s).contentId,
          ref: unref(r),
          role: "listbox",
          "data-state": unref(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...unref(l) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
});
var jv = defineComponent({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t), { forwardRef: s } = R2(), r = nt();
    return r.contentId || (r.contentId = he(void 0, "radix-vue-combobox-content")), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(dd, mergeProps({ ...unref(l), ...i.$attrs }, { ref: unref(s) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Uv = defineComponent({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = nt(), n = computed(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (openBlock(), createBlock(unref(O), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("No options")
        ])
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
function Xa(a2) {
  const t = Ga({
    nonce: ref()
  });
  return computed(() => {
    var e;
    return (a2 == null ? void 0 : a2.value) || ((e = t.nonce) == null ? void 0 : e.value);
  });
}
var Gv = defineComponent({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), { nonce: n } = toRefs(t), l = Xa(n);
    return (s, r) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({ ...s.$attrs, ...t }, {
        ref: unref(e),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      createVNode(unref(O), {
        as: "style",
        nonce: unref(l)
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
var [cd, pd] = Q("ComboboxItem");
var fd = "combobox.select";
var qv = defineComponent({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = nt();
    Zl({ id: "", options: ref([]) });
    const { forwardRef: r } = R2(), i = computed(
      () => {
        var m2, w2;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (m2 = s.modelValue.value) == null ? void 0 : m2.some((C) => Ye(C, e.value)) : Ye((w2 = s.modelValue) == null ? void 0 : w2.value, e.value);
      }
    ), u = computed(() => Ye(s.selectedValue.value, e.value)), d = he(void 0, "radix-vue-combobox-item"), c = he(void 0, "radix-vue-combobox-option"), p = computed(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((m2) => Ye(m2, e.value)) : true);
    async function f(m2) {
      n("select", m2), !(m2 != null && m2.defaultPrevented) && !l.value && m2 && s.onValueChange(e.value);
    }
    function v2(m2) {
      if (!m2)
        return;
      const w2 = { originalEvent: m2, value: e.value };
      Kt(fd, f, w2);
    }
    async function g(m2) {
      await nextTick(), !m2.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return pd({
      isSelected: i
    }), (m2, w2) => (openBlock(), createBlock(unref(Zt), { value: m2.value }, {
      default: withCtx(() => [
        withDirectives(createVNode(unref(O), {
          id: unref(c),
          ref: unref(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": unref(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": unref(l) || void 0,
          "data-disabled": unref(l) ? "" : void 0,
          as: m2.as,
          "as-child": m2.asChild,
          "data-hidden": p.value ? void 0 : true,
          onClick: v2,
          onPointermove: g
        }, {
          default: withCtx(() => [
            renderSlot(m2.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(m2.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [vShow, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
});
var Yv = defineComponent({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = cd();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(O), mergeProps({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Xv = defineComponent({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zv = defineComponent({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = nt(), n = id();
    return R2(), (l, s) => unref(e).open.value && unref(n).position.value === "popper" ? (openBlock(), createBlock(unref(Yt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Jv = defineComponent({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Za = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Rt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var no = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function vd() {
  const a2 = ref(false);
  return onMounted(() => {
    Ne("keydown", () => {
      a2.value = true;
    }, { capture: true, passive: true }), Ne(["pointerdown", "pointermove"], () => {
      a2.value = false;
    }, { capture: true, passive: true });
  }), a2;
}
var md = xl(vd);
var [At, Jl] = Q(["MenuRoot", "MenuSub"], "MenuContext");
var [wa, hd] = Q("MenuRoot");
var oo = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l, dir: s } = toRefs(e), r = be(s), i = ne(e, "open", n), u = ref(), d = md();
    return Jl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), hd({
      onClose: () => {
        i.value = false;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (c, p) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var yd = "rovingFocusGroup.onEntryFocus";
var gd = { bubbles: false, cancelable: true };
var Ja = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function bd(a2, t) {
  return t !== "rtl" ? a2 : a2 === "ArrowLeft" ? "ArrowRight" : a2 === "ArrowRight" ? "ArrowLeft" : a2;
}
function Ql(a2, t, e) {
  const n = bd(a2.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Ja[n];
}
function es(a2, t = false, e) {
  const n = (e == null ? void 0 : e.activeElement) ?? document.activeElement;
  for (const l of a2)
    if (l === n || (l.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function Cd(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
var [wd, _d] = Q("RovingFocusGroup");
var Ot = defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: false },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, { loop: s, orientation: r, dir: i } = toRefs(n), u = be(i), d = ne(n, "currentTabStopId", l, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = ref(false), p = ref(false), f = ref(0), { getItems: v2 } = ba();
    function g(w2) {
      const C = !p.value;
      if (w2.currentTarget && w2.target === w2.currentTarget && C && !c.value) {
        const D = new CustomEvent(yd, gd);
        if (w2.currentTarget.dispatchEvent(D), l("entryFocus", D), !D.defaultPrevented) {
          const h2 = v2().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), E = h2.find((T) => T.getAttribute("data-active") === "true"), P2 = h2.find(
            (T) => T.id === d.value
          ), B = [E, P2, ...h2].filter(
            Boolean
          );
          es(B, n.preventScrollOnEntryFocus);
        }
      }
      p.value = false;
    }
    function m2() {
      setTimeout(() => {
        p.value = false;
      }, 1);
    }
    return t({
      getItems: v2
    }), _d({
      loop: s,
      dir: u,
      orientation: r,
      currentTabStopId: d,
      onItemFocus: (w2) => {
        d.value = w2;
      },
      onItemShiftTab: () => {
        c.value = true;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (w2, C) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": unref(r),
          as: w2.as,
          "as-child": w2.asChild,
          dir: unref(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = true),
          onMouseup: m2,
          onFocus: g,
          onBlur: C[1] || (C[1] = (D) => c.value = false)
        }, {
          default: withCtx(() => [
            renderSlot(w2.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
});
var kt = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = wd(), n = computed(() => t.tabStopId || he()), l = computed(
      () => e.currentTabStopId.value === n.value
    ), { getItems: s } = Jt(), { primitiveElement: r, currentElement: i } = Ae(), u = computed(() => {
      var c;
      return (c = i.value) == null ? void 0 : c.getRootNode();
    });
    onMounted(() => {
      t.focusable && e.onFocusableItemAdd();
    }), onUnmounted(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function d(c) {
      if (c.key === "Tab" && c.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget)
        return;
      const p = Ql(
        c,
        e.orientation.value,
        e.dir.value
      );
      if (p !== void 0) {
        if (c.metaKey || c.ctrlKey || c.altKey || !t.allowShiftKey && c.shiftKey)
          return;
        c.preventDefault();
        let f = [...s().map((v2) => v2.ref).filter((v2) => v2.dataset.disabled !== "")];
        if (p === "last")
          f.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && f.reverse();
          const v2 = f.indexOf(
            c.currentTarget
          );
          f = e.loop.value ? Cd(f, v2 + 1) : f.slice(v2 + 1);
        }
        nextTick(() => es(f, false, u.value));
      }
    }
    return (c, p) => (openBlock(), createBlock(unref(Zt), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: l.value ? 0 : -1,
          "data-orientation": unref(e).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? void 0 : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: p[0] || (p[0] = (f) => {
            c.focusable ? unref(e).onItemFocus(n.value) : f.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (f) => unref(e).onItemFocus(n.value)),
          onKeydown: d
        }, {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
});
var [lo, xd] = Q("MenuContent");
var so = defineComponent({
  __name: "MenuContentImpl",
  props: mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Xl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = At(), s = wa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    Gn(), ha(i.value);
    const d = ref(""), c = ref(0), p = ref(0), f = ref(null), v2 = ref("right"), g = ref(0), m2 = ref(null), { createCollection: w2 } = Me(), { forwardRef: C, currentElement: D } = R2(), h2 = w2(D);
    watch(D, (A2) => {
      l.onContentChange(A2);
    });
    const { handleTypeaheadSearch: E } = ga(h2);
    onUnmounted(() => {
      window.clearTimeout(c.value);
    });
    function P2(A2) {
      var U, W2;
      return v2.value === ((U = f.value) == null ? void 0 : U.side) && pu(A2, (W2 = f.value) == null ? void 0 : W2.area);
    }
    async function B(A2) {
      var F;
      n("openAutoFocus", A2), !A2.defaultPrevented && (A2.preventDefault(), (F = D.value) == null || F.focus({
        preventScroll: true
      }));
    }
    function T(A2) {
      if (A2.defaultPrevented)
        return;
      const U = A2.target.closest("[data-radix-menu-content]") === A2.currentTarget, W2 = A2.ctrlKey || A2.altKey || A2.metaKey, ee = A2.key.length === 1, L = Bt(
        A2,
        document.activeElement,
        D.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (L)
        return L == null ? void 0 : L.focus();
      if (A2.code === "Space" || (U && (A2.key === "Tab" && A2.preventDefault(), !W2 && ee && E(A2.key)), A2.target !== D.value) || !iu.includes(A2.key))
        return;
      A2.preventDefault();
      const G2 = h2.value;
      Hl.includes(A2.key) && G2.reverse(), $n(G2);
    }
    function M(A2) {
      var F, U;
      (U = (F = A2 == null ? void 0 : A2.currentTarget) == null ? void 0 : F.contains) != null && U.call(F, A2.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V2(A2) {
      var W2;
      if (!ua(A2))
        return;
      const F = A2.target, U = g.value !== A2.clientX;
      if ((W2 = A2 == null ? void 0 : A2.currentTarget) != null && W2.contains(F) && U) {
        const ee = A2.clientX > g.value ? "right" : "left";
        v2.value = ee, g.value = A2.clientX;
      }
    }
    return xd({
      onItemEnter: (A2) => !!P2(A2),
      onItemLeave: (A2) => {
        var F;
        P2(A2) || ((F = D.value) == null || F.focus(), m2.value = null);
      },
      onTriggerLeave: (A2) => !!P2(A2),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A2) => {
        f.value = A2;
      }
    }), (A2, F) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      trapped: unref(r),
      onMountAutoFocus: B,
      onUnmountAutoFocus: F[7] || (F[7] = (U) => n("closeAutoFocus", U))
    }, {
      default: withCtx(() => [
        createVNode(unref(yt), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: F[2] || (F[2] = (U) => n("escapeKeyDown", U)),
          onPointerDownOutside: F[3] || (F[3] = (U) => n("pointerDownOutside", U)),
          onFocusOutside: F[4] || (F[4] = (U) => n("focusOutside", U)),
          onInteractOutside: F[5] || (F[5] = (U) => n("interactOutside", U)),
          onDismiss: F[6] || (F[6] = (U) => n("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Ot), {
              "current-tab-stop-id": m2.value,
              "onUpdate:currentTabStopId": F[0] || (F[0] = (U) => m2.value = U),
              "as-child": "",
              orientation: "vertical",
              dir: unref(s).dir.value,
              loop: unref(u),
              onEntryFocus: F[1] || (F[1] = (U) => {
                n("entryFocus", U), unref(s).isUsingKeyboardRef.value || U.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(Dt), {
                  ref: unref(C),
                  role: "menu",
                  as: A2.as,
                  "as-child": A2.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(Qn)(unref(l).open.value),
                  dir: unref(s).dir.value,
                  side: A2.side,
                  "side-offset": A2.sideOffset,
                  align: A2.align,
                  "align-offset": A2.alignOffset,
                  "avoid-collisions": A2.avoidCollisions,
                  "collision-boundary": A2.collisionBoundary,
                  "collision-padding": A2.collisionPadding,
                  "arrow-padding": A2.arrowPadding,
                  "prioritize-position": A2.prioritizePosition,
                  sticky: A2.sticky,
                  "hide-when-detached": A2.hideWhenDetached,
                  onKeydown: T,
                  onBlur: M,
                  onPointermove: V2
                }, {
                  default: withCtx(() => [
                    renderSlot(A2.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ts = defineComponent({
  inheritAttrs: false,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = lo(), { forwardRef: n } = R2(), l = ref(false);
    async function s(i) {
      if (!i.defaultPrevented && ua(i)) {
        if (t.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: true });
        }
      }
    }
    async function r(i) {
      await nextTick(), !i.defaultPrevented && ua(i) && e.onItemLeave(i);
    }
    return (i, u) => (openBlock(), createBlock(unref(Zt), null, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": l.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: r,
          onFocus: u[0] || (u[0] = async (d) => {
            await nextTick(), !(d.defaultPrevented || i.disabled) && (l.value = true);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await nextTick(), !d.defaultPrevented && (l.value = false);
          })
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
});
var _a = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), r = wa(), i = lo(), u = ref(false);
    async function d() {
      const c = s.value;
      if (!e.disabled && c) {
        const p = new CustomEvent(su, {
          bubbles: true,
          cancelable: true
        });
        n("select", p), await nextTick(), p.defaultPrevented ? u.value = false : r.onClose();
      }
    }
    return (c, p) => (openBlock(), createBlock(ts, mergeProps(e, {
      ref: unref(l),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = true;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v2;
        await nextTick(), !f.defaultPrevented && (u.value || (v2 = f.currentTarget) == null || v2.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v2 = unref(i).searchRef.value !== "";
        c.disabled || v2 && f.key === " " || unref(Dn).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Sd, as] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
);
var ro = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = Sd({
      checked: ref(false)
    });
    return (e, n) => (openBlock(), createBlock(unref(Pe), {
      present: e.forceMount || unref(Fa)(unref(t).checked.value) || unref(t).checked.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": unref(eo)(unref(t).checked.value)
        }, {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var io = defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: false },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ne(e, "checked", n);
    return as({ checked: l }), (s, r) => (openBlock(), createBlock(_a, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(Fa)(unref(l)) ? "mixed" : unref(l),
      "data-state": unref(eo)(unref(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), unref(Fa)(unref(l)) ? l.value = true : l.value = !unref(l);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { checked: unref(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Ed = defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = xe(e, n), s = At(), { forwardRef: r, currentElement: i } = R2();
    return ya(i), (u, d) => (openBlock(), createBlock(so, mergeProps(unref(l), {
      ref: unref(r),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": unref(s).open.value,
      "disable-outside-scroll": true,
      onDismiss: d[0] || (d[0] = (c) => unref(s).onOpenChange(false)),
      onFocusOutside: d[1] || (d[1] = withModifiers((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
});
var Pd = defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t), s = At();
    return (r, i) => (openBlock(), createBlock(so, mergeProps(unref(l), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: i[0] || (i[0] = (u) => unref(s).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uo = defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t), s = At(), r = wa();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(r).modal.value ? (openBlock(), createBlock(Ed, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Pd, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Qa = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var co = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var po = defineComponent({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Dd, $d] = Q("MenuRadioGroup");
var fo = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t);
    return $d({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (openBlock(), createBlock(Qa, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { modelValue: unref(l) })
      ]),
      _: 3
    }, 16));
  }
});
var vo = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { value: l } = toRefs(e), s = Dd(), r = computed(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return as({ checked: r }), (i, u) => (openBlock(), createBlock(_a, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": unref(eo)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), unref(s).onValueChange(unref(l));
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var mo = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [ns, Bd] = Q("MenuSub");
var ho = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      defaultValue: false,
      passive: e.open === void 0
    }), s = At(), r = ref(), i = ref();
    return watchEffect((u) => {
      (s == null ? void 0 : s.open.value) === false && (l.value = false), u(() => l.value = false);
    }), Jl({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Bd({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var yo = defineComponent({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t), s = At(), r = wa(), i = ns(), { forwardRef: u, currentElement: d } = R2();
    return i.contentId || (i.contentId = he(void 0, "radix-vue-menu-sub-content")), (c, p) => (openBlock(), createBlock(unref(Pe), {
      present: c.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        createVNode(so, mergeProps(unref(l), {
          id: unref(i).contentId,
          ref: unref(u),
          "aria-labelledby": unref(i).triggerId,
          align: "start",
          side: unref(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: p[0] || (p[0] = withModifiers((f) => {
            var v2;
            unref(r).isUsingKeyboardRef.value && ((v2 = unref(d)) == null || v2.focus());
          }, ["prevent"])),
          onCloseAutoFocus: p[1] || (p[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: p[2] || (p[2] = (f) => {
            f.defaultPrevented || f.target !== unref(i).trigger.value && unref(s).onOpenChange(false);
          }),
          onEscapeKeyDown: p[3] || (p[3] = (f) => {
            unref(r).onClose(), f.preventDefault();
          }),
          onKeydown: p[4] || (p[4] = (f) => {
            var m2, w2;
            const v2 = (m2 = f.currentTarget) == null ? void 0 : m2.contains(f.target), g = unref(du)[unref(r).dir.value].includes(f.key);
            v2 && g && (unref(s).onOpenChange(false), (w2 = unref(i).trigger.value) == null || w2.focus(), f.preventDefault());
          })
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var go = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = At(), n = wa(), l = ns(), s = lo(), r = ref(null);
    l.triggerId || (l.triggerId = he(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    onUnmounted(() => {
      i();
    });
    function u(p) {
      !ua(p) || s.onItemEnter(p) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(true), i();
      }, 100));
    }
    async function d(p) {
      var v2, g;
      if (!ua(p))
        return;
      i();
      const f = (v2 = e.content.value) == null ? void 0 : v2.getBoundingClientRect();
      if (f != null && f.width) {
        const m2 = (g = e.content.value) == null ? void 0 : g.dataset.side, w2 = m2 === "right", C = w2 ? -5 : 5, D = f[w2 ? "left" : "right"], h2 = f[w2 ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: D, y: f.top },
            { x: h2, y: f.top },
            { x: h2, y: f.bottom },
            { x: D, y: f.bottom }
          ],
          side: m2
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v2;
      const f = s.searchRef.value !== "";
      t.disabled || f && p.key === " " || uu[n.dir.value].includes(p.key) && (e.onOpenChange(true), await nextTick(), (v2 = e.content.value) == null || v2.focus(), p.preventDefault());
    }
    return (p, f) => (openBlock(), createBlock(Za, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(ts, mergeProps(t, {
          id: unref(l).triggerId,
          ref: (v2) => {
            var g;
            (g = unref(l)) == null || g.onTriggerChange(v2 == null ? void 0 : v2.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(l).contentId,
          "data-state": unref(Qn)(unref(e).open.value),
          onClick: f[0] || (f[0] = async (v2) => {
            t.disabled || v2.defaultPrevented || (v2.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
});
var [os, Id] = Q("ContextMenuRoot");
var Qv = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, modal: s } = toRefs(e);
    R2();
    const r = be(l), i = ref(false);
    return Id({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), watch(i, (u) => {
      n("update:open", u);
    }), (u, d) => (openBlock(), createBlock(unref(oo), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (c) => i.value = c),
      dir: unref(r),
      modal: unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Go(a2) {
  return a2.pointerType !== "mouse";
}
var em = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), { forwardRef: n } = R2(), l = os(), s = ref({ x: 0, y: 0 }), r = computed(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: s.value.x,
        right: s.value.x,
        top: s.value.y,
        bottom: s.value.y,
        ...s.value
      })
    })), i = ref(0);
    function u() {
      window.clearTimeout(i.value);
    }
    function d(v2) {
      s.value = { x: v2.clientX, y: v2.clientY }, l.onOpenChange(true);
    }
    async function c(v2) {
      e.value || (await nextTick(), v2.defaultPrevented || (u(), d(v2), v2.preventDefault()));
    }
    async function p(v2) {
      e.value || (await nextTick(), Go(v2) && !v2.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v2), 700)));
    }
    async function f(v2) {
      e.value || (await nextTick(), Go(v2) && !v2.defaultPrevented && u());
    }
    return (v2, g) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Za), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      createVNode(unref(O), mergeProps({
        ref: unref(n),
        as: v2.as,
        "as-child": v2.asChild,
        "data-state": unref(l).open.value ? "open" : "closed",
        "data-disabled": unref(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v2.$attrs, {
        onContextmenu: c,
        onPointerdown: p,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: withCtx(() => [
          renderSlot(v2.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
});
var tm = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(po), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var am = defineComponent({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    R2();
    const s = os(), r = ref(false);
    return (i, u) => (openBlock(), createBlock(unref(uo), mergeProps(unref(l), {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && r.value && d.preventDefault(), r.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        !d.defaultPrevented && !unref(s).modal.value && (r.value = true);
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nm = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var om = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(_a), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var lm = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Qa), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sm = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(mo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var rm = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(io), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var im = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(ro), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var um = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(co), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dm = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(fo), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cm = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(vo), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pm = defineComponent({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(ho), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { open: unref(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var fm = defineComponent({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(yo), mergeProps(unref(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vm = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(go), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Td = ["hour", "minute", "second"];
function Lt(a2) {
  const { formatter: t } = a2, e = Kn.map((n) => [n, a2.value[n]]);
  if ("hour" in a2.value) {
    const n = bl.map((s) => s === "dayPeriod" ? [s, t.dayPeriod($(a2.value))] : [s, a2.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function ls(a2) {
  const t = Cl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? false : a2 === "day" ? !Td.includes(e) && e !== "dayPeriod" : true);
  return Object.fromEntries(t);
}
function Rd(a2) {
  const { segmentValues: t, formatter: e, locale: n } = a2;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a2.dateRef.set({ [r]: i }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : yn(r, "", n.value);
    } else {
      if (Yr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a2.dateRef.set({ [r]: i }), r) : yn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!wl(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = yn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Ad(a2) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a2;
  return e.toParts(a2.dateRef, Xr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !wl(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!m(a2.dateRef) || l)));
}
function In(a2) {
  const t = Rd(a2), e = Ad({
    contentObj: t,
    ...a2
  });
  return {
    obj: t,
    arr: e
  };
}
function tt(a2) {
  const t = Qe();
  return a2 === t.ARROW_RIGHT || a2 === t.ARROW_LEFT;
}
function xt(a2) {
  return !Number.isNaN(Number.parseInt(a2));
}
function st(a2) {
  const t = Qe();
  return !!([
    t.ENTER,
    t.ARROW_UP,
    t.ARROW_DOWN,
    t.ARROW_LEFT,
    t.ARROW_RIGHT,
    t.BACKSPACE,
    t.SPACE,
    "a",
    "A",
    "p",
    "P"
  ].includes(a2) || xt(a2));
}
function Na(a2) {
  return Array.from(a2.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((t) => t.getAttribute("data-radix-vue-date-field-segment") !== "literal");
}
var Od = ["id", "value", "name", "disabled", "required"];
var [kd, Md] = Q("DateFieldRoot");
var Vd = defineComponent({
  inheritAttrs: false,
  __name: "DateFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: c, dir: p } = toRefs(n), f = Un(n.locale), v2 = be(p), { primitiveElement: g, currentElement: m2 } = Ae(), w2 = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      Na(m2.value).forEach((z2) => w2.value.add(z2));
    });
    const C = ne(n, "modelValue", l, {
      defaultValue: c.value,
      passive: n.modelValue === void 0
    }), D = Ut({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: C.value
    }), h2 = ne(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D.copy(),
      passive: n.placeholder === void 0
    }), E = computed(() => n.granularity ? z(h2.value) ? n.granularity : "day" : z(h2.value) ? "minute" : "day"), P2 = computed(() => {
      var z2;
      return C.value ? !!((z2 = u.value) != null && z2.call(u, C.value) || n.minValue && q(C.value, n.minValue) || n.maxValue && q(n.maxValue, C.value)) : false;
    }), B = ls(E.value), T = ref(C.value ? { ...Lt({ value: C.value, formatter: f }) } : { ...B }), M = computed(() => In({
      granularity: E.value,
      dateRef: h2.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: T.value,
      locale: s
    })), V2 = computed(() => M.value.arr), A2 = computed(() => V2.value.filter(({ part: z2 }) => z2 !== "literal"));
    watch(s, (z2) => {
      f.getLocale() !== z2 && (f.setLocale(z2), nextTick(() => {
        w2.value.clear(), Na(m2.value).forEach((Y) => w2.value.add(Y));
      }));
    }), watch(C, (z2) => {
      z2 !== void 0 && (!$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(h2.value, z2) || h2.value.compare(z2) !== 0) && (h2.value = z2.copy());
    }), watch([C, s], ([z2]) => {
      z2 !== void 0 ? T.value = { ...Lt({ value: z2, formatter: f }) } : Object.values(T.value).every((Y) => Y === null) && (T.value = { ...B });
    });
    const F = ref(null), U = computed(() => Array.from(w2.value).findIndex((z2) => {
      var Y;
      return z2.getAttribute("data-radix-vue-date-field-segment") === ((Y = F.value) == null ? void 0 : Y.getAttribute("data-radix-vue-date-field-segment"));
    })), W2 = computed(() => {
      const z2 = v2.value === "rtl" ? -1 : 1;
      return (z2 < 0 ? U.value < 0 : U.value > w2.value.size - 1) ? null : Array.from(w2.value)[U.value + z2];
    }), ee = computed(() => {
      const z2 = v2.value === "rtl" ? -1 : 1;
      return (z2 > 0 ? U.value < 0 : U.value > w2.value.size - 1) ? null : Array.from(w2.value)[U.value - z2];
    }), L = Qe();
    function G2(z2) {
      var Y, K;
      tt(z2.key) && (z2.key === L.ARROW_LEFT && ((Y = ee.value) == null || Y.focus()), z2.key === L.ARROW_RIGHT && ((K = W2.value) == null || K.focus()));
    }
    function N2(z2) {
      F.value = z2;
    }
    return Md({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: C,
      placeholder: h2,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: T,
      isInvalid: P2,
      segmentContents: A2,
      elements: w2,
      setFocusedElement: N2,
      focusNext() {
        var z2;
        (z2 = W2.value) == null || z2.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: N2
    }), (z2, Y) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(z2.$attrs, {
        ref_key: "primitiveElement",
        ref: g,
        role: "group",
        "aria-disabled": unref(r) ? true : void 0,
        "data-disabled": unref(r) ? "" : void 0,
        "data-readonly": unref(i) ? "" : void 0,
        "data-invalid": P2.value ? "" : void 0,
        dir: unref(v2),
        onKeydown: withKeys(G2, ["left", "right"])
      }), {
        default: withCtx(() => [
          renderSlot(z2.$slots, "default", {
            modelValue: unref(C),
            segments: V2.value,
            isInvalid: P2.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      createBaseVNode("input", {
        id: z2.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: unref(C) ? unref(C).toString() : "",
        name: z2.name,
        disabled: unref(r),
        required: z2.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: Y[0] || (Y[0] = (K) => {
          var J2, Z;
          return (Z = (J2 = Array.from(w2.value)) == null ? void 0 : J2[0]) == null ? void 0 : Z.focus();
        })
      }, null, 40, Od)
    ], 64));
  }
});
function Mt(a2) {
  return {
    role: "spinbutton",
    contenteditable: true,
    tabindex: a2.disabled ? void 0 : 0,
    spellcheck: false,
    inputmode: "numeric",
    autocorrect: "off",
    enterkeyhint: "next",
    style: "caret-color: transparent;"
  };
}
function Fd(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = R(l), u = n ? "Empty" : `${s}`;
  return {
    ...Mt(a2),
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Ld(a2) {
  const { segmentValues: t, placeholder: e, formatter: n } = a2, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth($(s))}`;
  return {
    ...Mt(a2),
    "aria-label": "month, ",
    contenteditable: true,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Nd(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Mt(a2),
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function zd(a2) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a2;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Mt(a2),
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Kd(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Mt(a2),
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Hd(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Mt(a2),
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Wd(a2) {
  const { segmentValues: t } = a2;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Mt(a2),
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function jd(a2) {
  return {
    "aria-hidden": true,
    "data-segment": "literal"
  };
}
function Ud(a2) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": true,
    "data-segment": "timeZoneName",
    tabindex: a2.disabled ? void 0 : 0,
    style: "caret-color: transparent;"
  };
}
var Gd = {
  day: {
    attrs: Fd
  },
  month: {
    attrs: Ld
  },
  year: {
    attrs: Nd
  },
  hour: {
    attrs: zd
  },
  minute: {
    attrs: Kd
  },
  second: {
    attrs: Hd
  },
  dayPeriod: {
    attrs: Wd
  },
  literal: {
    attrs: jd
  },
  timeZoneName: {
    attrs: Ud
  }
};
function ss(a2) {
  const t = Qe();
  function e({ e: h2, part: E, dateRef: P2, prevValue: B }) {
    const T = h2.key === t.ARROW_UP ? 1 : -1, M = 0, V2 = 59;
    if (B === null)
      return T > 0 ? M : V2;
    const A2 = [E, T];
    return P2.set({ [E]: B }).cycle(...A2)[E];
  }
  function n(h2) {
    if (a2.hasLeftFocus.value = false, h2 === null)
      return h2;
    const E = h2.toString();
    return E.length === 1 ? (a2.modelValue.value = void 0, null) : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: h2, part: E, dateRef: P2, prevValue: B, hourCycle: T }) {
    const M = h2.key === t.ARROW_UP ? 1 : -1;
    if (B === null)
      return P2[E];
    if (E === "hour" && "hour" in P2) {
      const A2 = [E, M, { hourCycle: T }];
      return P2.set({ [E]: B }).cycle(...A2)[E];
    }
    const V2 = [E, M];
    return E === "day" && a2.segmentValues.value.month !== null ? P2.set({ [E]: B, month: a2.segmentValues.value.month }).cycle(...V2)[E] : P2.set({ [E]: B }).cycle(...V2)[E];
  }
  function s(h2, E, P2) {
    let B = false;
    const T = Math.floor(h2 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, P2 = null), P2 === null)
      return E === 0 ? (a2.lastKeyZero.value = true, { value: null, moveToNext: B }) : ((a2.lastKeyZero.value || E > T) && (B = true), a2.lastKeyZero.value = false, { value: E, moveToNext: B });
    const M = P2.toString().length, V2 = Number.parseInt(P2.toString() + E.toString());
    return M === 2 || V2 > h2 ? ((E > T || V2 > h2) && (B = true), { value: E, moveToNext: B }) : (B = true, { value: V2, moveToNext: B });
  }
  function r(h2, E) {
    let B = false;
    const T = Math.floor(59 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, E = null), E === null)
      return h2 === 0 ? (a2.lastKeyZero.value = true, { value: 0, moveToNext: B }) : ((a2.lastKeyZero.value || h2 > T) && (B = true), a2.lastKeyZero.value = false, { value: h2, moveToNext: B });
    const M = E.toString().length, V2 = Number.parseInt(E.toString() + h2.toString());
    return M === 2 || V2 > 59 ? (h2 > T && (B = true), { value: h2, moveToNext: B }) : (B = true, { value: V2, moveToNext: B });
  }
  function i(h2, E) {
    let B = false;
    const T = Math.floor(24 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, E = null), E === null)
      return h2 === 0 ? (a2.lastKeyZero.value = true, { value: 0, moveToNext: B }) : ((a2.lastKeyZero.value || h2 > T) && (B = true), a2.lastKeyZero.value = false, { value: h2, moveToNext: B });
    const M = E.toString().length, V2 = Number.parseInt(E.toString() + h2.toString());
    return M === 2 || V2 > 24 ? (h2 > T && (B = true), { value: h2, moveToNext: B }) : (B = true, { value: V2, moveToNext: B });
  }
  function u(h2, E) {
    let P2 = false;
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, E = null), E === null)
      return { value: h2 === 0 ? 1 : h2, moveToNext: P2 };
    const B = E.toString() + h2.toString();
    return B.length > 4 ? { value: h2 === 0 ? 1 : h2, moveToNext: P2 } : (B.length === 4 && (P2 = true), { value: Number.parseInt(B), moveToNext: P2 });
  }
  const d = computed(() => Gd[a2.part].attrs({
    disabled: a2.disabled.value,
    placeholder: a2.placeholder.value,
    hourCycle: a2.hourCycle,
    segmentValues: a2.segmentValues.value,
    formatter: a2.formatter
  }));
  function c(h2) {
    if (!st(h2.key) || tt(h2.key))
      return;
    const E = a2.segmentValues.value.day;
    if (h2.key === t.ARROW_DOWN || h2.key === t.ARROW_UP) {
      a2.segmentValues.value.day = l({ e: h2, part: "day", dateRef: a2.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h2.key)) {
      const P2 = Number.parseInt(h2.key), B = a2.segmentValues.value.month, T = B ? R(a2.placeholder.value.set({ month: B })) : R(a2.placeholder.value), { value: M, moveToNext: V2 } = s(T, P2, E);
      a2.segmentValues.value.day = M, V2 && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.day = n(E));
  }
  function p(h2) {
    if (!st(h2.key) || tt(h2.key))
      return;
    const E = a2.segmentValues.value.month;
    if (h2.key === t.ARROW_DOWN || h2.key === t.ARROW_UP) {
      a2.segmentValues.value.month = l({ e: h2, part: "month", dateRef: a2.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h2.key)) {
      const P2 = Number.parseInt(h2.key), { value: B, moveToNext: T } = s(12, P2, E);
      a2.segmentValues.value.month = B, T && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.month = n(E));
  }
  function f(h2) {
    if (!st(h2.key) || tt(h2.key))
      return;
    const E = a2.segmentValues.value.year;
    if (h2.key === t.ARROW_DOWN || h2.key === t.ARROW_UP) {
      a2.segmentValues.value.year = l({ e: h2, part: "year", dateRef: a2.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h2.key)) {
      const P2 = Number.parseInt(h2.key), { value: B, moveToNext: T } = u(P2, E);
      a2.segmentValues.value.year = B, T && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.year = n(E));
  }
  function v2(h2) {
    const E = a2.placeholder.value;
    if (!st(h2.key) || tt(h2.key) || !("hour" in E) || !("hour" in a2.segmentValues.value))
      return;
    const P2 = a2.segmentValues.value.hour, B = a2.hourCycle;
    if (h2.key === t.ARROW_UP || h2.key === t.ARROW_DOWN) {
      a2.segmentValues.value.hour = l({ e: h2, part: "hour", dateRef: a2.placeholder.value, prevValue: P2, hourCycle: B }), "dayPeriod" in a2.segmentValues.value && (a2.segmentValues.value.hour < 12 ? a2.segmentValues.value.dayPeriod = "AM" : a2.segmentValues.value.hour && (a2.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (xt(h2.key)) {
      const T = Number.parseInt(h2.key), { value: M, moveToNext: V2 } = i(T, P2);
      "dayPeriod" in a2.segmentValues.value && M && M > 12 ? a2.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a2.segmentValues.value && M && (a2.segmentValues.value.dayPeriod = "AM"), a2.segmentValues.value.hour = M, V2 && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.hour = n(P2));
  }
  function g(h2) {
    const E = a2.placeholder.value;
    if (!st(h2.key) || tt(h2.key) || !("minute" in E) || !("minute" in a2.segmentValues.value))
      return;
    const P2 = a2.segmentValues.value.minute;
    if (a2.segmentValues.value.minute = e({ e: h2, part: "minute", dateRef: a2.placeholder.value, prevValue: P2 }), xt(h2.key)) {
      const B = Number.parseInt(h2.key), { value: T, moveToNext: M } = r(B, P2);
      a2.segmentValues.value.minute = T, M && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.minute = n(P2));
  }
  function m2(h2) {
    const E = a2.placeholder.value;
    if (!st(h2.key) || tt(h2.key) || !("second" in E) || !("second" in a2.segmentValues.value))
      return;
    const P2 = a2.segmentValues.value.second;
    if (a2.segmentValues.value.second = e({ e: h2, part: "second", dateRef: a2.placeholder.value, prevValue: P2 }), xt(h2.key)) {
      const B = Number.parseInt(h2.key), { value: T, moveToNext: M } = r(B, P2);
      a2.segmentValues.value.second = T, M && a2.focusNext();
    }
    h2.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.second = n(P2));
  }
  function w2(h2) {
    if (!((!st(h2.key) || tt(h2.key)) && h2.key !== "a" && h2.key !== "p" || !("hour" in a2.placeholder.value) || !("dayPeriod" in a2.segmentValues.value))) {
      if (h2.key === t.ARROW_UP || h2.key === t.ARROW_DOWN) {
        if (a2.segmentValues.value.dayPeriod === "AM") {
          a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12;
          return;
        }
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      if (["a", "A"].includes(h2.key) && a2.segmentValues.value.dayPeriod !== "AM") {
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      ["p", "P"].includes(h2.key) && a2.segmentValues.value.dayPeriod !== "PM" && (a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12);
    }
  }
  function C(h2) {
    a2.disabled.value && h2.preventDefault();
  }
  function D(h2) {
    const E = a2.disabled.value, P2 = a2.readonly.value;
    if (h2.key !== t.TAB && h2.preventDefault(), E || P2)
      return;
    if ({
      day: c,
      month: p,
      year: f,
      hour: v2,
      minute: g,
      second: m2,
      dayPeriod: w2,
      timeZoneName: () => {
      }
    }[a2.part](h2), ![t.ARROW_LEFT, t.ARROW_RIGHT].includes(h2.key) && h2.key !== t.TAB && h2.key !== t.SHIFT && st(h2.key) && Object.values(a2.segmentValues.value).every((T) => T !== null)) {
      const T = { ...a2.segmentValues.value };
      let M = a2.placeholder.value.copy();
      Object.keys(T).forEach((V2) => {
        const A2 = T[V2];
        M = M.set({ [V2]: A2 });
      }), a2.modelValue.value = M.copy();
    }
  }
  return {
    handleSegmentClick: C,
    handleSegmentKeydown: D,
    attributes: d
  };
}
var qd = defineComponent({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = kd(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ss({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues,
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: e.modelValue
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), c = computed(() => e.isInvalid.value);
    return (p, f) => (openBlock(), createBlock(unref(O), mergeProps({
      as: p.as,
      "as-child": p.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? true : void 0
    }, toHandlers(p.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v2) => {
        unref(e).setFocusedElement(v2.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
});
var mm = defineComponent({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Mu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hm = defineComponent({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Vu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var ym = defineComponent({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Fu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gm = defineComponent({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Lu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bm = defineComponent({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Nu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cm = defineComponent({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(zu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wm = defineComponent({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ku), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _m = defineComponent({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Hu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xm = defineComponent({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Wu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sm = defineComponent({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ju), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Em = defineComponent({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Uu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pm = defineComponent({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(qd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [bo, Yd] = Q("DatePickerRoot");
var Dm = defineComponent({
  inheritAttrs: false,
  __name: "DatePickerRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: false },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v2,
      isDateUnavailable: g,
      defaultOpen: m2,
      modal: w2,
      id: C,
      name: D,
      required: h2,
      minValue: E,
      maxValue: P2,
      granularity: B,
      hideTimeZone: T,
      hourCycle: M,
      defaultValue: V2,
      dir: A2
    } = toRefs(e), F = be(A2), U = ne(e, "modelValue", n, {
      defaultValue: V2.value,
      passive: e.modelValue === void 0
    }), W2 = computed(() => Ut({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: U.value
    })), ee = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? W2.value.copy(),
      passive: e.placeholder === void 0
    }), L = ne(e, "open", n, {
      defaultValue: m2.value,
      passive: e.open === void 0
    }), G2 = ref();
    return Yd({
      isDateUnavailable: g.value,
      isDateDisabled: v2.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: U,
      placeholder: ee,
      defaultOpen: m2,
      modal: w2,
      open: L,
      id: C,
      name: D,
      required: h2,
      minValue: E,
      maxValue: P2,
      granularity: B,
      hideTimeZone: T,
      hourCycle: M,
      dateFieldRef: G2,
      dir: F,
      onDateChange(N2) {
        !N2 || !U.value ? U.value = N2 : !f.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(U.value, N2) ? U.value = void 0 : U.value = N2.copy();
      },
      onPlaceholderChange(N2) {
        $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(N2, ee.value) || (ee.value = N2.copy());
      }
    }), (N2, z2) => (openBlock(), createBlock(unref(ms), {
      open: unref(L),
      "onUpdate:open": z2[0] || (z2[0] = (Y) => isRef(L) ? L.value = Y : null),
      "default-open": unref(m2),
      modal: unref(w2)
    }, {
      default: withCtx(() => [
        renderSlot(N2.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var $m = defineComponent({
  __name: "DatePickerCalendar",
  setup(a2) {
    const t = bo();
    return (e, n) => (openBlock(), createBlock(unref(ku), mergeProps({
      isDateDisabled: unref(t).isDateDisabled,
      isDateUnavailable: unref(t).isDateUnavailable,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      locale: unref(t).locale.value,
      disabled: unref(t).disabled.value,
      pagedNavigation: unref(t).pagedNavigation.value,
      weekStartsOn: unref(t).weekStartsOn.value,
      weekdayFormat: unref(t).weekdayFormat.value,
      fixedWeeks: unref(t).fixedWeeks.value,
      numberOfMonths: unref(t).numberOfMonths.value,
      readonly: unref(t).readonly.value,
      preventDeselect: unref(t).preventDeselect.value,
      dir: unref(t).dir.value
    }, {
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "initial-focus": "",
      multiple: false,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && unref(t).modelValue.value && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).modelValue.value) || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Bm = defineComponent({
  __name: "DatePickerField",
  setup(a2) {
    const t = bo();
    return (e, n) => (openBlock(), createBlock(unref(Vd), mergeProps({
      ref: unref(t).dateFieldRef,
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value
    }, {
      id: unref(t).id.value,
      name: unref(t).name.value,
      disabled: unref(t).disabled.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      readonly: unref(t).readonly.value,
      hourCycle: unref(t).hourCycle.value,
      granularity: unref(t).granularity.value,
      hideTimeZone: unref(t).hideTimeZone.value,
      locale: unref(t).locale.value,
      isDateUnavailable: unref(t).isDateUnavailable,
      required: unref(t).required.value,
      dir: unref(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && unref(t).modelValue.value && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(unref(t).modelValue.value, l) && l.compare(unref(t).modelValue.value) === 0 || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(unref(t).placeholder.value, l) && l.compare(unref(t).placeholder.value) === 0 || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ segments: l, modelValue: s }) => [
        renderSlot(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Im = defineComponent({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(_s), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Tm = defineComponent({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Cs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rm = defineComponent({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ws), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Am = defineComponent({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = bo();
    return (n, l) => (openBlock(), createBlock(unref(hs), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: unref(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = unref(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
});
var Om = defineComponent({
  __name: "DatePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(ys), null, {
      default: withCtx(() => [
        createVNode(unref(bs), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var km = defineComponent({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(up), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mm = defineComponent({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(dp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var Vm = defineComponent({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(cp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fm = defineComponent({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(pp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lm = defineComponent({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(fp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nm = defineComponent({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(vp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zm = defineComponent({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(mp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Km = defineComponent({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(hp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hm = defineComponent({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(yp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wm = defineComponent({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(gp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jm = defineComponent({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(bp), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Um = defineComponent({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(tc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Co, Xd] = Q("DateRangePickerRoot");
var Gm = defineComponent({
  inheritAttrs: false,
  __name: "DateRangePickerRoot",
  props: {
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: false },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v2,
      isDateUnavailable: g,
      defaultOpen: m2,
      modal: w2,
      id: C,
      name: D,
      required: h2,
      minValue: E,
      maxValue: P2,
      granularity: B,
      hideTimeZone: T,
      hourCycle: M,
      dir: V2
    } = toRefs(e), A2 = be(V2), F = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), U = Ut({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: F.value.start
    }), W2 = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    }), ee = ne(e, "open", n, {
      defaultValue: m2.value,
      passive: e.open === void 0
    }), L = ref();
    return Xd({
      isDateUnavailable: g.value,
      isDateDisabled: v2.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: F,
      placeholder: W2,
      defaultOpen: m2,
      modal: w2,
      open: ee,
      id: C,
      name: D,
      required: h2,
      minValue: E,
      maxValue: P2,
      granularity: B,
      hideTimeZone: T,
      hourCycle: M,
      dateFieldRef: L,
      dir: A2,
      onStartValueChange(G2) {
        n("update:startValue", G2);
      },
      onDateChange(G2) {
        var N2, z2;
        F.value = { start: (N2 = G2.start) == null ? void 0 : N2.copy(), end: (z2 = G2.end) == null ? void 0 : z2.copy() };
      },
      onPlaceholderChange(G2) {
        W2.value = G2.copy();
      }
    }), (G2, N2) => (openBlock(), createBlock(unref(ms), {
      open: unref(ee),
      "onUpdate:open": N2[0] || (N2[0] = (z2) => isRef(ee) ? ee.value = z2 : null),
      "default-open": unref(m2),
      modal: unref(w2)
    }, {
      default: withCtx(() => [
        renderSlot(G2.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var qm = defineComponent({
  __name: "DateRangePickerCalendar",
  setup(a2) {
    const t = Co();
    return (e, n) => (openBlock(), createBlock(unref(ip), mergeProps({
      isDateDisabled: unref(t).isDateDisabled,
      isDateUnavailable: unref(t).isDateUnavailable,
      locale: unref(t).locale.value,
      disabled: unref(t).disabled.value,
      pagedNavigation: unref(t).pagedNavigation.value,
      weekStartsOn: unref(t).weekStartsOn.value,
      weekdayFormat: unref(t).weekdayFormat.value,
      fixedWeeks: unref(t).fixedWeeks.value,
      numberOfMonths: unref(t).numberOfMonths.value,
      readonly: unref(t).readonly.value,
      preventDeselect: unref(t).preventDeselect.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      dir: unref(t).dir.value
    }, {
      "initial-focus": "",
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "onUpdate:startValue": n[0] || (n[0] = (l) => {
        unref(t).onStartValueChange(l);
      }),
      "onUpdate:modelValue": n[1] || (n[1] = (l) => {
        l.start && unref(t).modelValue.value.start && l.end && unref(t).modelValue.value.end && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l.start, unref(t).modelValue.value.start) && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l.end, unref(t).modelValue.value.end) || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[2] || (n[2] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Ym = defineComponent({
  __name: "DateRangePickerField",
  setup(a2) {
    const t = Co();
    return (e, n) => (openBlock(), createBlock(unref(ec), mergeProps({
      ref: unref(t).dateFieldRef,
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value
    }, {
      id: unref(t).id.value,
      name: unref(t).name.value,
      disabled: unref(t).disabled.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      readonly: unref(t).readonly.value,
      hourCycle: unref(t).hourCycle.value,
      granularity: unref(t).granularity.value,
      hideTimeZone: unref(t).hideTimeZone.value,
      locale: unref(t).locale.value,
      isDateUnavailable: unref(t).isDateUnavailable,
      required: unref(t).required.value,
      dir: unref(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l.start && unref(t).modelValue.value.start && l.end && unref(t).modelValue.value.end && l.start.compare(unref(t).modelValue.value.start) === 0 && l.end.compare(unref(t).modelValue.value.end) === 0 || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) && l.compare(unref(t).placeholder.value) === 0 || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ segments: l, modelValue: s }) => [
        renderSlot(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Xm = defineComponent({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(_s), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zm = defineComponent({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Cs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jm = defineComponent({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ws), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qm = defineComponent({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Co();
    return (n, l) => (openBlock(), createBlock(unref(hs), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: unref(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = unref(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
});
var eh = defineComponent({
  __name: "DateRangePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(ys), null, {
      default: withCtx(() => [
        createVNode(unref(bs), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Zd = ["id", "value", "name", "disabled", "required"];
var [Jd, Qd] = Q("DateRangeFieldRoot");
var ec = defineComponent({
  inheritAttrs: false,
  __name: "DateRangeFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    var Z, re;
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = toRefs(n), c = Un(n.locale), { primitiveElement: p, currentElement: f } = Ae(), v2 = ref(/* @__PURE__ */ new Set()), g = be(d);
    onMounted(() => {
      Na(f.value).forEach((X) => v2.value.add(X));
    });
    const m2 = ne(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), w2 = Ut({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: m2.value.start
    }), C = ne(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? w2.copy(),
      passive: n.placeholder === void 0
    }), D = computed(() => n.granularity ? z(C.value) ? n.granularity : "day" : z(C.value) ? "minute" : "day"), h2 = computed(() => {
      var X;
      return m2.value.start ? !!((X = u.value) != null && X.call(u, m2.value.start) || n.minValue && q(m2.value.start, n.minValue) || n.maxValue && q(n.maxValue, m2.value.start)) : false;
    }), E = computed(() => {
      var X;
      return m2.value.end ? !!((X = u.value) != null && X.call(u, m2.value.end) || n.minValue && q(m2.value.end, n.minValue) || n.maxValue && q(n.maxValue, m2.value.end)) : false;
    }), P2 = computed(() => h2.value || E.value ? true : !m2.value.start || !m2.value.end ? false : !W(m2.value.start, m2.value.end) || u.value !== void 0 && !b(
      m2.value.start,
      m2.value.end,
      u.value,
      void 0
    )), B = ls(D.value), T = ref(m2.value.start ? { ...Lt({ value: m2.value.start, formatter: c }) } : { ...B }), M = ref(m2.value.end ? { ...Lt({ value: m2.value.end, formatter: c }) } : { ...B }), V2 = computed(() => In({
      granularity: D.value,
      dateRef: C.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: T.value,
      locale: s
    })), A2 = computed(() => In({
      granularity: D.value,
      dateRef: C.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: M.value,
      locale: s
    })), F = computed(() => ({
      start: V2.value.arr,
      end: A2.value.arr
    })), U = computed(() => ({ start: F.value.start.filter(({ part: X }) => X !== "literal"), end: F.value.end.filter(({ part: X }) => X !== "literal") })), W2 = ref((Z = m2.value.start) == null ? void 0 : Z.copy()), ee = ref((re = m2.value.end) == null ? void 0 : re.copy());
    watch([W2, ee], ([X, se]) => {
      m2.value = { start: X == null ? void 0 : X.copy(), end: se == null ? void 0 : se.copy() };
    }), watch(m2, (X) => {
      X.start && X.end && ((!W2.value || X.start.compare(W2.value) !== 0) && (W2.value = X.start.copy()), (!ee.value || X.end.compare(ee.value) !== 0) && (ee.value = X.end.copy()));
    }), watch([W2, s], ([X]) => {
      X !== void 0 ? T.value = { ...Lt({ value: X, formatter: c }) } : Object.values(T.value).every((se) => se === null) && (T.value = { ...B });
    }), watch(s, (X) => {
      c.getLocale() !== X && (c.setLocale(X), nextTick(() => {
        v2.value.clear(), Na(f.value).forEach((se) => v2.value.add(se));
      }));
    }), watch(m2, (X) => {
      X.start !== void 0 && (!$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(C.value, X.start) || C.value.compare(X.start) !== 0) && (C.value = X.start.copy());
    }), watch([ee, s], ([X]) => {
      X !== void 0 ? M.value = { ...Lt({ value: X, formatter: c }) } : Object.values(M.value).every((se) => se === null) && (M.value = { ...B });
    });
    const L = ref(null), G2 = computed(() => Array.from(v2.value).findIndex((X) => {
      var se, pe;
      return X.getAttribute("data-radix-vue-date-field-segment") === ((se = L.value) == null ? void 0 : se.getAttribute("data-radix-vue-date-field-segment")) && X.getAttribute("data-radix-vue-date-range-field-segment-type") === ((pe = L.value) == null ? void 0 : pe.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), N2 = computed(() => {
      const X = g.value === "rtl" ? -1 : 1;
      return (X < 0 ? G2.value < 0 : G2.value > v2.value.size - 1) ? null : Array.from(v2.value)[G2.value + X];
    }), z2 = computed(() => {
      const X = g.value === "rtl" ? -1 : 1;
      return (X > 0 ? G2.value < 0 : G2.value > v2.value.size - 1) ? null : Array.from(v2.value)[G2.value - X];
    }), Y = Qe();
    function K(X) {
      var se, pe;
      tt(X.key) && (X.key === Y.ARROW_LEFT && ((se = z2.value) == null || se.focus()), X.key === Y.ARROW_RIGHT && ((pe = N2.value) == null || pe.focus()));
    }
    function J2(X) {
      L.value = X;
    }
    return Qd({
      isDateUnavailable: u.value,
      locale: s,
      startValue: W2,
      endValue: ee,
      placeholder: C,
      disabled: r,
      formatter: c,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: T, end: M },
      isInvalid: P2,
      segmentContents: U,
      elements: v2,
      setFocusedElement: J2,
      focusNext() {
        var X;
        (X = N2.value) == null || X.focus();
      }
    }), t({
      setFocusedElement: J2
    }), (X, se) => {
      var pe, _e;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(O), mergeProps(X.$attrs, {
          ref_key: "primitiveElement",
          ref: p,
          role: "group",
          "aria-disabled": unref(r) ? true : void 0,
          "data-disabled": unref(r) ? "" : void 0,
          "data-readonly": unref(i) ? "" : void 0,
          "data-invalid": P2.value ? "" : void 0,
          dir: unref(g),
          onKeydown: withKeys(K, ["left", "right"])
        }), {
          default: withCtx(() => [
            renderSlot(X.$slots, "default", {
              modelValue: unref(m2),
              segments: F.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        createBaseVNode("input", {
          id: X.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "true",
          value: `${(pe = unref(m2).start) == null ? void 0 : pe.toString()} - ${(_e = unref(m2).end) == null ? void 0 : _e.toString()}`,
          name: X.name,
          disabled: unref(r),
          required: X.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          },
          onFocus: se[0] || (se[0] = (Se) => {
            var ye, de;
            return (de = (ye = Array.from(v2.value)) == null ? void 0 : ye[0]) == null ? void 0 : de.focus();
          })
        }, null, 40, Zd)
      ], 64);
    };
  }
});
var tc = defineComponent({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Jd(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ss({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues[t.type],
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: t.type === "start" ? e.startValue : e.endValue
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), c = computed(() => e.isInvalid.value);
    return (p, f) => (openBlock(), createBlock(unref(O), mergeProps({
      as: p.as,
      "as-child": p.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": p.type,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? true : void 0
    }, toHandlers(p.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v2) => {
        unref(e).setFocusedElement(v2.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
});
var [rs, ac] = Q("DropdownMenuRoot");
var th = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), { modal: r, dir: i } = toRefs(e), u = be(i);
    return ac({
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r,
      dir: u
    }), (d, c) => (openBlock(), createBlock(unref(oo), {
      open: unref(l),
      "onUpdate:open": c[0] || (c[0] = (p) => isRef(l) ? l.value = p : null),
      dir: unref(u),
      modal: unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", { open: unref(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
var ah = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = rs(), { forwardRef: n, currentElement: l } = R2();
    return onMounted(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = he(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (openBlock(), createBlock(unref(Za), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(e).triggerId,
          ref: unref(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": unref(e).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === false && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = withKeys(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
var nh = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(po), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var oh = defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    R2();
    const s = rs(), r = ref(false);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = false, u.preventDefault());
    }
    return s.contentId || (s.contentId = he(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return openBlock(), createBlock(unref(uo), mergeProps(unref(l), {
        id: unref(s).contentId,
        "aria-labelledby": (c = unref(s)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (p) => {
          var m2;
          if (p.defaultPrevented) return;
          const f = p.detail.originalEvent, v2 = f.button === 0 && f.ctrlKey === true, g = f.button === 2 || v2;
          (!unref(s).modal.value || g) && (r.value = true), (m2 = unref(s).triggerElement.value) != null && m2.contains(p.target) && p.preventDefault();
        })
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
});
var lh = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sh = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(_a), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var rh = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Qa), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ih = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(mo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uh = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(io), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dh = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(ro), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ch = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(co), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ph = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(fo), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fh = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(vo), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vh = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? false
    });
    return R2(), (s, r) => (openBlock(), createBlock(unref(ho), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { open: unref(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var mh = defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(yo), mergeProps(unref(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hh = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(go), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nc = ["value", "name", "disabled", "required"];
var [Qt, oc] = Q("EditableRoot");
var yh = defineComponent({
  inheritAttrs: false,
  __name: "EditableRoot",
  props: {
    defaultValue: {},
    modelValue: {},
    placeholder: { default: "Enter text..." },
    dir: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean },
    activationMode: { default: "focus" },
    selectOnFocus: { type: Boolean, default: false },
    submitMode: { default: "blur" },
    startWithEditMode: { type: Boolean },
    maxLength: {},
    autoResize: { type: Boolean, default: false },
    id: {},
    name: {},
    required: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "submit", "update:state"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, {
      id: s,
      name: r,
      defaultValue: i,
      startWithEditMode: u,
      placeholder: d,
      maxLength: c,
      disabled: p,
      dir: f,
      submitMode: v2,
      activationMode: g,
      selectOnFocus: m2,
      readonly: w2,
      autoResize: C,
      required: D
    } = toRefs(n), h2 = ref(), E = be(f), P2 = ref(u.value ?? false), B = ne(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: T, currentElement: M } = Ae(), V2 = Je(M), A2 = computed(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), F = ref(B.value);
    function U() {
      B.value = F.value, P2.value = false, l("update:state", "cancel");
    }
    function W2() {
      P2.value = true, l("update:state", "edit");
    }
    function ee() {
      F.value = B.value, P2.value = false, l("update:state", "submit"), l("submit", B.value);
    }
    function L() {
      P2.value && (v2.value === "blur" || v2.value === "both" ? ee() : U());
    }
    const G2 = zl(() => L(), M), N2 = Kl(() => L(), M), z2 = computed(() => B.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: ee,
      /** Function to cancel the value of the editable */
      cancel: U,
      /** Function to set the editable in edit mode */
      edit: W2
    }), oc({
      id: s,
      name: r,
      disabled: p,
      isEditing: P2,
      maxLength: c,
      modelValue: B,
      placeholder: A2,
      edit: W2,
      cancel: U,
      submit: ee,
      activationMode: g,
      submitMode: v2,
      selectOnFocus: m2,
      inputRef: h2,
      startWithEditMode: u,
      isEmpty: z2,
      readonly: w2,
      autoResize: C
    }), (Y, K) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(Y.$attrs, {
        ref_key: "primitiveElement",
        ref: T,
        as: Y.as,
        "as-child": Y.asChild,
        dir: unref(E),
        onFocusCapture: unref(N2).onFocusCapture,
        onBlurCapture: unref(N2).onBlurCapture,
        onPointerdownCapture: unref(G2).onPointerDownCapture
      }), {
        default: withCtx(() => [
          renderSlot(Y.$slots, "default", {
            modelValue: unref(B),
            isEditing: P2.value,
            isEmpty: z2.value,
            submit: ee,
            cancel: U,
            edit: W2
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      unref(V2) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: unref(B),
        name: unref(r),
        disabled: unref(p),
        required: unref(D),
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, nc)) : createCommentVNode("", true)
    ], 64));
  }
});
var gh = defineComponent({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Qt();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "data-placeholder-shown": unref(e).isEditing.value ? void 0 : "",
      "data-focus": unref(e).isEditing.value ? "" : void 0,
      "data-focused": unref(e).isEditing.value ? "" : void 0,
      "data-empty": unref(e).isEmpty.value ? "" : void 0,
      "data-readonly": unref(e).readonly.value ? "" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      style: unref(e).autoResize.value ? { display: "inline-grid" } : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "data-focus", "data-focused", "data-empty", "data-readonly", "data-disabled", "style"]));
  }
});
var bh = defineComponent({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = Qe(), n = Qt(), l = computed(() => n.disabled.value), s = computed(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Ae();
    onMounted(() => {
      var d, c;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: true }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select()));
    }), watch(n.isEditing, (d) => {
      d && nextTick(() => {
        var c, p;
        (c = n.inputRef.value) == null || c.focus({ preventScroll: true }), n.selectOnFocus.value && ((p = n.inputRef.value) == null || p.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, c) => (openBlock(), createBlock(unref(O), mergeProps({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      value: unref(n).modelValue.value,
      placeholder: s.value,
      disabled: l.value,
      maxlength: unref(n).maxLength.value,
      "data-disabled": l.value ? "" : void 0,
      "data-readonly": unref(n).readonly.value ? "" : void 0,
      readonly: unref(n).readonly.value,
      "aria-label": "editable input",
      hidden: unref(n).autoResize.value ? void 0 : !unref(n).isEditing.value,
      style: unref(n).autoResize.value ? { all: "unset", gridArea: "1 / 1 / auto / auto", visibility: unref(n).isEditing.value ? void 0 : "hidden" } : void 0,
      onInput: c[0] || (c[0] = (p) => unref(n).modelValue.value = p.target.value),
      onKeydown: [
        withKeys(u, ["enter", "space"]),
        withKeys(unref(n).cancel, ["esc"])
      ]
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "placeholder", "disabled", "maxlength", "data-disabled", "data-readonly", "readonly", "hidden", "style", "onKeydown"]));
  }
});
var Ch = defineComponent({
  __name: "EditablePreview",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Qt(), n = computed(() => {
      var r;
      return (r = e.placeholder.value) == null ? void 0 : r.preview;
    });
    function l() {
      e.activationMode.value === "focus" && e.edit();
    }
    function s() {
      e.activationMode.value === "dblclick" && e.edit();
    }
    return (r, i) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      tabindex: "0",
      "data-placeholder-shown": unref(e).isEditing.value ? void 0 : "",
      hidden: unref(e).autoResize.value ? void 0 : unref(e).isEditing.value,
      style: unref(e).autoResize.value ? {
        whiteSpace: "pre",
        userSelect: "none",
        gridArea: "1 / 1 / auto / auto",
        visibility: unref(e).isEditing.value ? "hidden" : void 0,
        overflow: "hidden",
        textOverflow: "ellipsis"
      } : void 0,
      onFocusin: l,
      onDblclick: s
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(unref(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
});
var wh = defineComponent({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Qt();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "submit",
      "aria-disabled": unref(e).disabled.value ? "" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      disabled: unref(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: unref(e).isEditing.value ? void 0 : "",
      onClick: unref(e).submit
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
});
var _h = defineComponent({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Qt();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "cancel",
      "aria-disabled": unref(e).disabled.value ? "" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      disabled: unref(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: unref(e).isEditing.value ? void 0 : "",
      onClick: unref(e).cancel
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
});
var xh = defineComponent({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Qt();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "edit",
      "aria-disabled": unref(e).disabled.value ? "" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      disabled: unref(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: unref(e).isEditing.value ? "" : void 0,
      onClick: unref(e).edit
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
});
var [wo, lc] = Q("HoverCardRoot");
var Sh = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { openDelay: l, closeDelay: s } = toRefs(e);
    R2();
    const r = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = ref(0), u = ref(0), d = ref(false), c = ref(false), p = ref(false), f = ref();
    function v2() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = true, l.value);
    }
    function g() {
      clearTimeout(i.value), !d.value && !c.value && (u.value = window.setTimeout(() => r.value = false, s.value));
    }
    function m2() {
      r.value = false;
    }
    return lc({
      open: r,
      onOpenChange(w2) {
        r.value = w2;
      },
      onOpen: v2,
      onClose: g,
      onDismiss: m2,
      hasSelectionRef: d,
      isPointerDownOnContentRef: c,
      isPointerInTransitRef: p,
      triggerElement: f
    }), (w2, C) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(w2.$slots, "default", { open: unref(r) })
      ]),
      _: 3
    }));
  }
});
function Tn(a2) {
  return (t) => t.pointerType === "touch" ? void 0 : a2();
}
function sc(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
var Eh = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = R2(), n = wo();
    n.triggerElement = e;
    function l() {
      setTimeout(() => {
        !n.isPointerInTransitRef.value && !n.open.value && n.onClose();
      }, 0);
    }
    return (s, r) => (openBlock(), createBlock(unref(Rt), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(t),
          "as-child": s.asChild,
          as: s.as,
          "data-state": unref(n).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: r[0] || (r[0] = (i) => unref(Tn)(unref(n).onOpen)(i)),
          onPointerleave: r[1] || (r[1] = (i) => unref(Tn)(l)(i)),
          onFocus: r[2] || (r[2] = (i) => unref(n).onOpen()),
          onBlur: r[3] || (r[3] = (i) => unref(n).onClose())
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
});
var Ph = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var rc = defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = It(e), { forwardRef: s, currentElement: r } = R2(), i = wo(), { isPointerInTransit: u, onPointerExit: d } = Al(i.triggerElement, r);
    ui(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
      i.onClose();
    });
    const c = ref(false);
    let p;
    watchEffect((v2) => {
      if (c.value) {
        const g = document.body;
        p = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", v2(() => {
          g.style.userSelect = p, g.style.webkitUserSelect = p;
        });
      }
    });
    function f() {
      c.value = false, i.isPointerDownOnContentRef.value = false, nextTick(() => {
        var g;
        ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (i.hasSelectionRef.value = true);
      });
    }
    return onMounted(() => {
      r.value && (document.addEventListener("pointerup", f), sc(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), onUnmounted(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = false, i.isPointerDownOnContentRef.value = false;
    }), (v2, g) => (openBlock(), createBlock(unref(yt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: g[1] || (g[1] = (m2) => n("escapeKeyDown", m2)),
      onPointerDownOutside: g[2] || (g[2] = (m2) => n("pointerDownOutside", m2)),
      onFocusOutside: g[3] || (g[3] = withModifiers((m2) => n("focusOutside", m2), ["prevent"])),
      onDismiss: unref(i).onDismiss
    }, {
      default: withCtx(() => [
        createVNode(unref(Dt), mergeProps({ ...unref(l), ...v2.$attrs }, {
          ref: unref(s),
          "data-state": unref(i).open.value ? "open" : "closed",
          style: {
            userSelect: c.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: c.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: g[0] || (g[0] = (m2) => {
            m2.currentTarget.contains(m2.target) && (c.value = true), unref(i).hasSelectionRef.value = false, unref(i).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
});
var Dh = defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t), { forwardRef: s } = R2(), r = wo();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(rc, mergeProps(unref(l), {
          ref: unref(s),
          onPointerenter: u[0] || (u[0] = (d) => unref(Tn)(unref(r).onOpen)(d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var $h = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bh = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ic(a2) {
  return a2 == null ? void 0 : a2.querySelector("[data-state=checked]");
}
function uc(a2, t, e) {
  return a2 === void 0 ? false : Array.isArray(a2) ? a2.some((n) => Wt(n, t, e)) : Wt(a2, t, e);
}
function Wt(a2, t, e) {
  return a2 === void 0 || t === void 0 ? false : typeof a2 == "string" ? a2 === t : typeof e == "function" ? e(a2, t) : typeof e == "string" ? (a2 == null ? void 0 : a2[e]) === (t == null ? void 0 : t[e]) : Ye(a2, t);
}
var [en, dc] = Q("ListboxRoot");
var Ih = defineComponent({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = toRefs(e), { getItems: c } = ba(), { handleTypeaheadSearch: p } = ga(), { primitiveElement: f, currentElement: v2 } = Ae(), g = Qe(), m2 = be(d), w2 = Je(v2), C = ref(), D = ref(false), h2 = ref(true), E = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: true
    });
    function P2(K) {
      if (D.value = true, Array.isArray(E.value)) {
        const J2 = E.value.findIndex((Z) => Wt(Z, K, e.by));
        if (e.selectionBehavior === "toggle") {
          const Z = [...E.value];
          J2 === -1 ? Z.push(K) : Z.splice(J2, 1), E.value = Z;
        } else
          E.value = [K], C.value = K;
      } else
        e.selectionBehavior === "toggle" && Wt(E.value, K, e.by) ? E.value = void 0 : E.value = K;
      setTimeout(() => {
        D.value = false;
      }, 1);
    }
    const B = ref(null), T = ref(null), M = ref(false), V2 = ia(), A2 = ia();
    function F() {
      return c().map((K) => K.ref).filter((K) => K.dataset.disabled !== "");
    }
    function U(K) {
      if (!K)
        return;
      B.value = K, B.value.focus(), B.value.scrollIntoView({ block: "nearest" });
      const J2 = c().find((Z) => Z.ref === K);
      n("highlight", J2);
    }
    function W2(K) {
      B.value && B.value.click();
    }
    function ee(K) {
      if (D.value = true, M.value)
        A2.trigger(K);
      else {
        const J2 = K.altKey || K.ctrlKey || K.metaKey;
        if (J2 && K.key === "a" && l.value) {
          const Z = c(), re = Z.map((X) => X.value);
          E.value = [...re], K.preventDefault(), U(Z[Z.length - 1].ref);
        } else if (!J2) {
          const Z = p(K.key, F());
          Z && U(Z);
        }
      }
      setTimeout(() => {
        D.value = false;
      }, 1);
    }
    function L(K) {
      const J2 = B.value;
      J2 != null && J2.isConnected && (T.value = J2), B.value = null, n("leave", K);
    }
    function G2(K) {
      var Z, re;
      const J2 = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
      if ((Z = K.currentTarget) == null || Z.dispatchEvent(J2), n("entryFocus", J2), !J2.defaultPrevented)
        if (T.value)
          U(T.value);
        else {
          const X = (re = F()) == null ? void 0 : re[0];
          U(X);
        }
    }
    function N2(K) {
      const J2 = Ql(K, r.value, m2.value);
      if (!J2)
        return;
      let Z = F();
      if (B.value) {
        if (J2 === "last")
          Z.reverse();
        else if (J2 === "prev" || J2 === "next") {
          J2 === "prev" && Z.reverse();
          const re = Z.indexOf(B.value);
          Z = Z.slice(re + 1);
        }
        z2(K, Z[0]);
      }
      if (Z.length) {
        const re = !B.value && J2 === "prev" ? Z.length - 1 : 0;
        U(Z[re]);
      }
      if (M.value)
        return A2.trigger(K);
    }
    function z2(K, J2) {
      var re;
      if (!(M.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (K.altKey || K.ctrlKey || K.metaKey) && !K.shiftKey) && K.shiftKey) {
        const X = c().filter((_e) => _e.ref.dataset.disabled !== "");
        let se = (re = X.find((_e) => _e.ref === J2)) == null ? void 0 : re.value;
        if (K.key === g.END ? se = X[X.length - 1].value : K.key === g.HOME && (se = X[0].value), !se || !C.value)
          return;
        const pe = Et(X.map((_e) => _e.value), C.value, se);
        E.value = pe;
      }
    }
    async function Y(K) {
      if (M.value)
        V2.trigger(K);
      else {
        await nextTick();
        const Z = F().find((re) => re.dataset.state === "checked");
        Z && U(Z);
      }
    }
    return watch(E, () => {
      D.value || nextTick(() => {
        Y();
      });
    }, { immediate: true, deep: true }), dc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P2,
      multiple: l,
      orientation: r,
      dir: m2,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: B,
      isVirtual: M,
      virtualFocusHook: V2,
      virtualKeydownHook: A2,
      by: e.by,
      firstValue: C,
      selectionBehavior: u,
      focusable: h2,
      onLeave: L,
      onEnter: G2,
      onChangeHighlight: U,
      onKeydownEnter: W2,
      onKeydownNavigation: N2,
      onKeydownTypeAhead: ee
    }), (K, J2) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: f,
      as: K.as,
      "as-child": K.asChild,
      dir: unref(m2),
      "data-disabled": unref(i) ? "" : void 0,
      onPointerleave: L,
      onFocusout: J2[0] || (J2[0] = async (Z) => {
        const re = Z.relatedTarget || Z.target;
        await nextTick(), B.value && !unref(v2).contains(re) && L(Z);
      })
    }, {
      default: withCtx(() => [
        renderSlot(K.$slots, "default", { modelValue: unref(E) }),
        unref(w2) && e.name ? (openBlock(), createBlock(unref(to), {
          key: 0,
          name: e.name,
          value: unref(E)
        }, null, 8, ["name", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
});
var Th = defineComponent({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = en(), e = $t(false, 10);
    return (n, l) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          role: "listbox",
          as: n.as,
          "as-child": n.asChild,
          tabindex: unref(t).focusable.value ? unref(t).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": unref(t).orientation.value,
          "aria-multiselectable": !!unref(t).multiple.value,
          "data-orientation": unref(t).orientation.value,
          onMousedown: l[0] || (l[0] = withModifiers((s) => e.value = true, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            unref(e) || unref(t).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = withKeys(withModifiers((s) => {
              unref(t).focusable.value && unref(t).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            withKeys(unref(t).onKeydownEnter, ["enter"]),
            unref(t).onKeydownTypeAhead
          ]
        }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
});
var Rh = defineComponent({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: "",
      passive: e.modelValue === void 0
    }), s = en();
    s.focusable.value = false;
    const { primitiveElement: r, currentElement: i } = Ae();
    return onMounted(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: r,
      as: u.as,
      "as-child": u.asChild,
      value: unref(l),
      disabled: unref(s).disabled.value ? "" : void 0,
      "data-disabled": unref(s).disabled.value ? "" : void 0,
      type: "text",
      onKeydown: [
        withKeys(withModifiers(unref(s).onKeydownNavigation, ["prevent"]), ["down", "up", "left", "right", "home", "end"]),
        withKeys(unref(s).onKeydownEnter, ["enter"])
      ],
      onInput: d[0] || (d[0] = (c) => {
        l.value = c.target.value;
      })
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { modelValue: unref(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
});
var cc = "listbox.select";
var [pc, fc] = Q("ListboxItem");
var Ah = defineComponent({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), r = he(void 0, "radix-vue-listbox-item"), i = en(), u = computed(() => s.value === i.highlightedElement.value), d = computed(() => uc(i.modelValue.value, e.value, i.by)), c = computed(() => i.disabled.value || e.disabled);
    async function p(v2) {
      n("select", v2), !(v2 != null && v2.defaultPrevented) && !c.value && v2 && (i.onValueChange(e.value), i.onChangeHighlight(v2.target));
    }
    function f(v2) {
      const g = { originalEvent: v2, value: e.value };
      Kt(cc, p, g);
    }
    return fc({
      isSelected: d
    }), (v2, g) => (openBlock(), createBlock(unref(Zt), { value: v2.value }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(r),
          ref: unref(l),
          role: "option",
          tabindex: unref(i).focusable.value ? u.value ? "0" : "-1" : void 0,
          "aria-selected": d.value,
          as: v2.as,
          "as-child": v2.asChild,
          disabled: c.value ? "" : void 0,
          "data-disabled": c.value ? "" : void 0,
          "data-highlighted": u.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: f,
          onKeydown: withKeys(withModifiers(f, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (m2) => {
            unref(i).highlightOnHover.value ? unref(i).onChangeHighlight(unref(s)) : unref(i).focusable.value || unref(i).onChangeHighlight(unref(s));
          })
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
});
var Oh = defineComponent({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = pc();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(O), mergeProps({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
function na(a2, t, e) {
  let n = e.initialDeps ?? [], l;
  return () => {
    var s, r, i, u;
    let d;
    e.key && ((s = e.debug) != null && s.call(e)) && (d = Date.now());
    const c = a2();
    if (!(c.length !== n.length || c.some((v2, g) => n[g] !== v2)))
      return l;
    n = c;
    let f;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (f = Date.now()), l = t(...c), e.key && ((i = e.debug) != null && i.call(e))) {
      const v2 = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, m2 = g / 16, w2 = (C, D) => {
        for (C = String(C); C.length < D; )
          C = " " + C;
        return C;
      };
      console.info(
        `%c⏱ ${w2(g, 5)} /${w2(v2, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m2, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, l), l;
  };
}
function xn(a2, t) {
  if (a2 === void 0)
    throw new Error("Unexpected undefined");
  return a2;
}
var vc = (a2, t) => Math.abs(a2 - t) < 1;
var mc = (a2, t, e) => {
  let n;
  return function(...l) {
    a2.clearTimeout(n), n = a2.setTimeout(() => t.apply(this, l), e);
  };
};
var hc = (a2) => a2;
var yc = (a2) => {
  const t = Math.max(a2.startIndex - a2.overscan, 0), e = Math.min(a2.endIndex + a2.overscan, a2.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
};
var gc = (a2, t) => {
  const e = a2.scrollElement;
  if (!e)
    return;
  const n = a2.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: u } = r;
    t({ width: Math.round(i), height: Math.round(u) });
  };
  if (l(e.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const s = new n.ResizeObserver((r) => {
    const i = r[0];
    if (i != null && i.borderBoxSize) {
      const u = i.borderBoxSize[0];
      if (u) {
        l({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    l(e.getBoundingClientRect());
  });
  return s.observe(e, { box: "border-box" }), () => {
    s.unobserve(e);
  };
};
var qo = {
  passive: true
};
var bc = typeof window > "u" ? true : "onscrollend" in window;
var Cc = (a2, t) => {
  const e = a2.scrollElement;
  if (!e)
    return;
  const n = a2.targetWindow;
  if (!n)
    return;
  let l = 0;
  const s = bc ? () => {
  } : mc(
    n,
    () => {
      t(l, false);
    },
    a2.options.isScrollingResetDelay
  ), r = (d) => () => {
    l = e[a2.options.horizontal ? "scrollLeft" : "scrollTop"], s(), t(l, d);
  }, i = r(true), u = r(false);
  return u(), e.addEventListener("scroll", i, qo), e.addEventListener("scrollend", u, qo), () => {
    e.removeEventListener("scroll", i), e.removeEventListener("scrollend", u);
  };
};
var wc = (a2, t, e) => {
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    a2.getBoundingClientRect()[e.options.horizontal ? "width" : "height"]
  );
};
var _c = (a2, {
  adjustments: t = 0,
  behavior: e
}, n) => {
  var l, s;
  const r = a2 + t;
  (s = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || s.call(l, {
    [n.options.horizontal ? "left" : "top"]: r,
    behavior: e
  });
};
var xc = class {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const n = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((s) => {
          this._measureElement(s.target, s);
        });
      }));
      return {
        disconnect: () => {
          var l;
          return (l = n()) == null ? void 0 : l.disconnect();
        },
        observe: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([n, l]) => {
        typeof l > "u" && delete e[n];
      }), this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: hc,
        rangeExtractor: yc,
        onChange: () => {
        },
        measureElement: wc,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        ...e
      };
    }, this.notify = (e, n) => {
      var l, s;
      const { startIndex: r, endIndex: i } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      }, u = this.calculateRange();
      (e || r !== (u == null ? void 0 : u.startIndex) || i !== (u == null ? void 0 : u.endIndex)) && ((s = (l = this.options).onChange) == null || s.call(l, this, n));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear();
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.notify(false, false);
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.notify(false, false);
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l;
            const r = this.isScrolling;
            this.isScrolling = s, this.notify(r !== s, s);
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, n) => {
      const l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let r = n - 1; r >= 0; r--) {
        const i = e[r];
        if (l.has(i.lane))
          continue;
        const u = s.get(
          i.lane
        );
        if (u == null || i.end > u.end ? s.set(i.lane, i) : i.end < u.end && l.set(i.lane, true), l.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = na(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, n, l, s, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: s,
        enabled: r
      }),
      {
        key: false
      }
    ), this.getMeasurements = na(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s, enabled: r }, i) => {
        var u;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((p) => {
          this.itemSizeCache.set(p.key, p.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, d);
        for (let p = d; p < e; p++) {
          let f = (u = this.measurementsCache[p]) == null ? void 0 : u.measureElement;
          f || (f = (E) => {
            const P2 = s(p), B = this.elementsCache.get(P2);
            if (!E) {
              B && (this.observer.unobserve(B), this.elementsCache.delete(P2));
              return;
            }
            B !== E && (B && this.observer.unobserve(B), this.observer.observe(E), this.elementsCache.set(P2, E)), E.isConnected && this.resizeItem(
              p,
              this.options.measureElement(E, void 0, this)
            );
          });
          const v2 = s(p), g = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), m2 = g ? g.end + this.options.gap : n + l, w2 = i.get(v2), C = typeof w2 == "number" ? w2 : this.options.estimateSize(p), D = m2 + C, h2 = g ? g.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: m2,
            size: C,
            end: D,
            key: v2,
            lane: h2,
            measureElement: f
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = na(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? Sc({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = na(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (e, n, l, s) => n === null ? [] : e({
        startIndex: n.startIndex,
        endIndex: n.endIndex,
        overscan: l,
        count: s
      }),
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const n = this.options.indexAttribute, l = e.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, n) => {
      const l = this.indexFromElement(e), s = this.getMeasurements()[l];
      if (!s || !e.isConnected) {
        this.elementsCache.forEach((i, u) => {
          i === e && (this.observer.unobserve(e), this.elementsCache.delete(u));
        });
        return;
      }
      const r = this.elementsCache.get(s.key);
      r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(s.key, e)), this.resizeItem(l, this.options.measureElement(e, n, this));
    }, this.resizeItem = (e, n) => {
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.itemSizeCache.get(l.key) ?? l.size, r = n - s;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, r, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, n)), this.notify(true, false));
    }, this.measureElement = (e) => {
      e && this._measureElement(e, void 0);
    }, this.getVirtualItems = na(
      () => [this.getIndexes(), this.getMeasurements()],
      (e, n) => {
        const l = [];
        for (let s = 0, r = e.length; s < r; s++) {
          const i = e[s], u = n[i];
          l.push(u);
        }
        return l;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return xn(
          n[is(
            0,
            n.length - 1,
            (l) => xn(n[l]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, n) => {
      const l = this.getSize(), s = this.getScrollOffset();
      n === "auto" && (e <= s ? n = "start" : e >= s + l ? n = "end" : n = "start"), n === "start" ? e = e : n === "end" ? e = e - l : n === "center" && (e = e - l / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - l;
      return Math.max(Math.min(u, e), 0);
    }, this.getOffsetForIndex = (e, n = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.getSize(), r = this.getScrollOffset();
      if (n === "auto")
        if (l.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      const i = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(i, n), n];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e, { align: n = "start", behavior: l } = {}) => {
      this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, n), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (e, { align: n = "auto", behavior: l } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const s = this.getOffsetForIndex(e, n);
      if (!s) return;
      const [r, i] = s;
      this._scrollToOffset(r, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e)
        )) {
          const [d] = xn(
            this.getOffsetForIndex(e, i)
          );
          vc(d, this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: l });
        } else
          this.scrollToIndex(e, { align: i, behavior: l });
      }));
    }, this.scrollBy = (e, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var e;
      const n = this.getMeasurements();
      let l;
      return n.length === 0 ? l = this.options.paddingStart : l = this.options.lanes === 1 ? ((e = n[n.length - 1]) == null ? void 0 : e.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((s) => s.end)
      ), l - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (e, {
      adjustments: n,
      behavior: l
    }) => {
      this.options.scrollToFn(e, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      var e, n;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (n = (e = this.options).onChange) == null || n.call(e, this, false);
    }, this.setOptions(t);
  }
};
var is = (a2, t, e, n) => {
  for (; a2 <= t; ) {
    const l = (a2 + t) / 2 | 0, s = e(l);
    if (s < n)
      a2 = l + 1;
    else if (s > n)
      t = l - 1;
    else
      return l;
  }
  return a2 > 0 ? a2 - 1 : 0;
};
function Sc({
  measurements: a2,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a2.length - 1, s = is(0, n, (i) => a2[i].start, e);
  let r = s;
  for (; r < n && a2[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function Ec(a2) {
  const t = new xc(unref(a2)), e = shallowRef(t), n = t._didMount();
  return watch(
    () => unref(a2).getScrollElement(),
    (l) => {
      l && t._willUpdate();
    },
    {
      immediate: true
    }
  ), watch(
    () => unref(a2),
    (l) => {
      t.setOptions({
        ...l,
        onChange: (s, r) => {
          var i;
          triggerRef(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), triggerRef(e);
    },
    {
      immediate: true
    }
  ), onScopeDispose(n), e;
}
function us(a2) {
  return Ec(
    computed(() => ({
      observeElementRect: gc,
      observeElementOffset: Cc,
      scrollToFn: _c,
      ...unref(a2)
    }))
  );
}
var kh = defineComponent({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a2) {
    const t = a2, e = useSlots(), n = en(), l = Tl(), { getItems: s } = Jt();
    n.isVirtual.value = true;
    const r = computed(() => {
      const f = l.value;
      if (f) {
        const v2 = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v2.paddingBlockStart || v2.paddingTop),
          end: Number.parseFloat(v2.paddingBlockEnd || v2.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = us(
      {
        get scrollPaddingStart() {
          return r.value.start;
        },
        get scrollPaddingEnd() {
          return r.value.end;
        },
        get count() {
          return t.options.length;
        },
        get horizontal() {
          return n.orientation.value === "horizontal";
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), u = computed(() => i.value.getVirtualItems().map((f) => ({
      item: f,
      is: cloneVNode(e.default({
        option: t.options[f.index],
        virtualizer: i.value,
        virtualItem: f
      })[0], {
        key: `${f.key}`,
        "data-index": f.index,
        "aria-setsize": t.options.length,
        "aria-posinset": f.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    n.virtualFocusHook.on((f) => {
      const v2 = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Wt(g, n.modelValue.value[0], n.by) : Wt(g, n.modelValue.value, n.by));
      v2 !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(v2, { align: "start" }), requestAnimationFrame(() => {
        const g = ic(l.value);
        g && f && (g == null || g.focus());
      }));
    });
    const d = $t("", 1e3), c = computed(() => {
      const f = (v2) => t.textContent ? t.textContent(v2) : v2.toString().toLowerCase();
      return t.options.map((v2, g) => ({
        index: g,
        textContent: f(v2)
      }));
    });
    function p(f, v2) {
      var C, D, h2, E;
      if (!((C = n.firstValue) != null && C.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const m2 = (D = s().filter((P2) => P2.ref.dataset.disabled !== "").find((P2) => P2.ref === n.highlightedElement.value)) == null ? void 0 : D.value;
      if (!m2)
        return;
      let w2 = null;
      switch (v2) {
        case "prev":
        case "next": {
          w2 = Et(t.options, n.firstValue.value, m2);
          break;
        }
        case "first": {
          w2 = Et(t.options, n.firstValue.value, (h2 = t.options) == null ? void 0 : h2[0]);
          break;
        }
        case "last": {
          w2 = Et(t.options, n.firstValue.value, (E = t.options) == null ? void 0 : E[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = w2;
    }
    return n.virtualKeydownHook.on((f) => {
      var w2;
      const v2 = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v2)
        return;
      let m2 = Ja[f.key];
      if (v2 && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], m2 = "last") : f.shiftKey && m2 && p(f, m2), ["first", "last"].includes(m2)) {
        f.preventDefault();
        const C = m2 === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(C), requestAnimationFrame(() => {
          const D = s(), h2 = m2 === "first" ? D[0] : D[D.length - 1];
          n.onChangeHighlight(h2.ref);
        });
      } else if (!m2 && !v2) {
        d.value += f.key;
        const C = Number((w2 = document.activeElement) == null ? void 0 : w2.getAttribute("data-index")), D = c.value[C].textContent, h2 = c.value.map((B) => B.textContent), E = Yn(h2, d.value, D), P2 = c.value.find((B) => B.textContent === E);
        P2 && (i.value.scrollToIndex(P2.index, { align: "start" }), requestAnimationFrame(() => {
          const B = l.value.querySelector(`[data-index="${P2.index}"]`);
          B instanceof HTMLElement && n.onChangeHighlight(B);
        }));
      }
    }), (f, v2) => (openBlock(), createElementBlock("div", {
      "data-radix-vue-virtualizer": "",
      style: normalizeStyle({
        position: "relative",
        width: "100%",
        height: `${unref(i).getTotalSize()}px`
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, ({ is: g, item: m2 }) => (openBlock(), createBlock(resolveDynamicComponent(g), {
        key: m2.index
      }))), 128))
    ], 4));
  }
});
var [Pc, Dc] = Q("ListboxGroup");
var Mh = defineComponent({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = he(void 0, "radix-vue-listbox-group");
    return Dc({ id: e }), (n, l) => (openBlock(), createBlock(unref(O), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Vh = defineComponent({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Pc({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var [tn, $c] = Q("MenubarRoot");
var Fh = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), { createCollection: r } = Me("menubar");
    r(s);
    const i = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = ref(null), { dir: d, loop: c } = toRefs(e), p = be(d);
    return $c({
      modelValue: i,
      dir: p,
      loop: c,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v2) => (openBlock(), createBlock(unref(Ot), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v2[0] || (v2[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: unref(c),
      dir: unref(p),
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(l),
          role: "menubar"
        }, {
          default: withCtx(() => [
            renderSlot(f.$slots, "default", { modelValue: unref(i) })
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
});
var [_o, Bc] = Q("MenubarMenu");
var Lh = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a2) {
    const e = he(a2.value), n = tn();
    R2();
    const l = ref(), s = ref(false), r = computed(() => n.modelValue.value === e);
    return watch(r, () => {
      r.value || (s.value = false);
    }), Bc({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (openBlock(), createBlock(unref(oo), {
      open: r.value,
      modal: false,
      dir: unref(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || unref(n).onMenuClose();
      })
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
});
var Nh = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = tn(), e = _o(), { forwardRef: n, currentElement: l } = R2(), s = ref(false), r = computed(() => t.modelValue.value === e.value);
    return onMounted(() => {
      e.triggerElement = l;
    }), (i, u) => (openBlock(), createBlock(unref(kt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": unref(e).value
    }, {
      default: withCtx(() => [
        createVNode(unref(Za), { "as-child": "" }, {
          default: withCtx(() => [
            createVNode(unref(O), {
              id: unref(e).triggerId,
              ref: unref(n),
              as: i.as,
              type: i.as === "button" ? "button" : void 0,
              role: "menuitem",
              "aria-haspopup": "menu",
              "aria-expanded": r.value,
              "aria-controls": r.value ? unref(e).contentId : void 0,
              "data-highlighted": s.value ? "" : void 0,
              "data-state": r.value ? "open" : "closed",
              "data-disabled": i.disabled ? "" : void 0,
              disabled: i.disabled,
              "data-value": unref(e).value,
              "data-radix-vue-collection-item": "",
              onPointerdown: u[0] || (u[0] = (d) => {
                !i.disabled && d.button === 0 && d.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), r.value || d.preventDefault());
              }),
              onPointerenter: u[1] || (u[1] = () => {
                var c;
                !!unref(t).modelValue.value && !r.value && (unref(t).onMenuOpen(unref(e).value), (c = unref(l)) == null || c.focus());
              }),
              onKeydown: u[2] || (u[2] = withKeys((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && unref(t).onMenuToggle(unref(e).value), d.key === "ArrowDown" && unref(t).onMenuOpen(unref(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = true),
              onBlur: u[4] || (u[4] = (d) => s.value = false)
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["focusable", "tab-stop-id"]));
  }
});
var zh = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(po), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Kh = defineComponent({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    R2();
    const s = tn(), r = _o();
    r.contentId || (r.contentId = he(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Me("menubar"), u = i(), d = ref(false);
    function c(p) {
      const v2 = p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), m2 = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === p.key;
      if (!m2 && v2)
        return;
      let C = u.value.map((E) => E.dataset.value);
      m2 && C.reverse();
      const D = C.indexOf(r.value);
      C = s.loop.value ? qn(C, D + 1) : C.slice(D + 1);
      const [h2] = C;
      h2 && s.onMenuOpen(h2);
    }
    return (p, f) => (openBlock(), createBlock(unref(uo), mergeProps(unref(l), {
      id: unref(r).contentId,
      "data-radix-menubar-content": "",
      "aria-labelledby": unref(r).triggerId,
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: f[0] || (f[0] = (v2) => {
        var m2;
        !!!unref(s).modelValue.value && !d.value && ((m2 = unref(r).triggerElement.value) == null || m2.focus()), d.value = false, v2.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v2) => {
        const g = v2.target;
        unref(u).some((w2) => w2.contains(g)) && v2.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v2) => {
        d.value = true;
      }),
      onEntryFocus: f[3] || (f[3] = (v2) => {
        unref(r).wasKeyboardTriggerOpenRef.value || v2.preventDefault();
      }),
      onKeydown: withKeys(c, ["arrow-right", "arrow-left"])
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
});
var Hh = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wh = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(_a), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jh = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Qa), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uh = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(mo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gh = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(io), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qh = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(ro), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yh = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(co), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xh = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Re(t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(fo), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zh = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    return R2(), (s, r) => (openBlock(), createBlock(unref(vo), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jh = defineComponent({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen ?? false,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(ho), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { open: unref(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var Qh = defineComponent({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = xe(a2, t);
    R2();
    const { injectCollection: s } = Me("menubar"), r = tn(), i = _o(), u = s();
    function d(c) {
      if (c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v2 = u.value.map((w2) => w2.dataset.value);
      const g = v2.indexOf(i.value);
      v2 = r.loop.value ? qn(v2, g + 1) : v2.slice(g + 1);
      const [m2] = v2;
      m2 && r.onMenuOpen(m2);
    }
    return (c, p) => (openBlock(), createBlock(unref(yo), mergeProps(unref(l), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: withKeys(d, ["arrow-right"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ey = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(go), mergeProps(t, { "data-radix-menubar-subtrigger": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [gt, ds] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var ty = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    disableClickTrigger: { type: Boolean, default: false },
    disableHoverTrigger: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), { forwardRef: r, currentElement: i } = R2(), u = ref(), d = ref(), { createCollection: c } = Me("nav");
    c(u);
    const { delayDuration: p, skipDelayDuration: f, dir: v2, disableClickTrigger: g, disableHoverTrigger: m2 } = toRefs(e), w2 = be(v2), C = $t(false, f), D = computed(() => l.value !== "" || C.value ? 150 : p.value), h2 = Hn((E) => {
      typeof E == "string" && (s.value = l.value, l.value = E);
    }, D);
    return ds({
      isRootMenu: true,
      modelValue: l,
      previousValue: s,
      baseId: he(void 0, "radix-navigation-menu"),
      disableClickTrigger: g,
      disableHoverTrigger: m2,
      dir: w2,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (E) => {
        u.value = E;
      },
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      onTriggerEnter: (E) => {
        h2(E);
      },
      onTriggerLeave: () => {
        C.value = true, h2("");
      },
      onContentEnter: () => {
        h2();
      },
      onContentLeave: () => {
        h2("");
      },
      onItemSelect: (E) => {
        s.value = l.value, l.value = E;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), (E, P2) => (openBlock(), createBlock(unref(O), {
      ref: unref(r),
      "aria-label": "Main",
      as: E.as,
      "as-child": E.asChild,
      "data-orientation": E.orientation,
      dir: unref(w2),
      "data-radix-navigation-menu": ""
    }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default", { modelValue: unref(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function an(a2) {
  return a2 ? "open" : "closed";
}
function cs(a2, t) {
  return `${a2}-trigger-${t}`;
}
function xo(a2, t) {
  return `${a2}-content-${t}`;
}
var Ic = "navigationMenu.linkSelect";
var ka = "navigationMenu.rootContentDismiss";
function Rn(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function ps(a2) {
  const t = document.activeElement;
  return a2.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function Tc(a2) {
  return a2.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a2.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function fs(a2) {
  return (t) => t.pointerType === "mouse" ? a2(t) : void 0;
}
var [So, Rc] = Q("NavigationMenuItem");
var ay = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const { injectCollection: e } = Me("nav"), n = e(), l = gt(), s = he(t.value), r = ref(), i = ref(), u = xo(l.baseId, s);
    let d = () => ({});
    const c = ref(false);
    async function p(m2 = "start") {
      const w2 = document.getElementById(u);
      if (w2) {
        d();
        const C = Rn(w2);
        C.length && ps(m2 === "start" ? C : C.reverse());
      }
    }
    function f() {
      const m2 = document.getElementById(u);
      if (m2) {
        const w2 = Rn(m2);
        w2.length && (d = Tc(w2));
      }
    }
    Rc({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v2() {
      var m2;
      l.onItemDismiss(), (m2 = r.value) == null || m2.focus();
    }
    function g(m2) {
      const w2 = document.activeElement;
      if (m2.keyCode === 32 || m2.key === "Enter")
        if (l.modelValue.value === s) {
          v2(), m2.preventDefault();
          return;
        } else {
          m2.target.click(), m2.preventDefault();
          return;
        }
      const C = n.value.filter(
        (h2) => {
          var E;
          return (E = h2.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      );
      if (!C.includes(w2))
        return;
      const D = Bt(m2, w2, void 0, {
        itemsArray: C,
        loop: false
      });
      D && (D == null || D.focus()), m2.preventDefault(), m2.stopPropagation();
    }
    return (m2, w2) => (openBlock(), createBlock(unref(O), {
      "as-child": m2.asChild,
      as: m2.as,
      "data-menu-item": "",
      onKeydown: withKeys(g, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(m2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Ac = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Me("nav"), s = l(), { forwardRef: r, currentElement: i } = R2(), u = gt(), d = So(), c = cs(u.baseId, d.value), p = xo(u.baseId, d.value), f = ref(null), v2 = computed(() => {
      const E = s.value.map((A2) => A2.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P2 = E.indexOf(u.modelValue.value), B = E.indexOf(u.previousValue.value), T = d.value === u.modelValue.value, M = B === E.indexOf(d.value);
      if (!T && !M)
        return f.value;
      const V2 = (() => {
        if (P2 !== B) {
          if (T && B !== -1)
            return P2 > B ? "from-end" : "from-start";
          if (M && P2 !== -1)
            return P2 > B ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = V2, V2;
    });
    function g(h2) {
      var E, P2;
      if (n("focusOutside", h2), n("interactOutside", h2), !h2.defaultPrevented) {
        d.onContentFocusOutside();
        const B = h2.target;
        (P2 = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P2.contains(B) && h2.preventDefault();
      }
    }
    function m2(h2) {
      var E;
      if (n("pointerDownOutside", h2), !h2.defaultPrevented) {
        const P2 = h2.target, B = s.value.some(
          (M) => M.contains(P2)
        ), T = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P2));
        (B || T || !u.isRootMenu) && h2.preventDefault();
      }
    }
    watchEffect((h2) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P2 = () => {
          var B;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && ((B = d.triggerRef.value) == null || B.focus());
        };
        E.addEventListener(ka, P2), h2(
          () => E.removeEventListener(ka, P2)
        );
      }
    });
    function w2(h2) {
      var E, P2;
      n("escapeKeyDown", h2), h2.defaultPrevented || (u.onItemDismiss(), (P2 = (E = d.triggerRef) == null ? void 0 : E.value) == null || P2.focus(), d.wasEscapeCloseRef.value = true);
    }
    function C(h2) {
      var M;
      if (h2.target.closest("[data-radix-navigation-menu]") !== u.rootNavigationMenu.value)
        return;
      const E = h2.altKey || h2.ctrlKey || h2.metaKey, P2 = h2.key === "Tab" && !E, B = Rn(h2.currentTarget);
      if (P2) {
        const V2 = document.activeElement, A2 = B.findIndex(
          (W2) => W2 === V2
        ), U = h2.shiftKey ? B.slice(0, A2).reverse() : B.slice(A2 + 1, B.length);
        if (ps(U))
          h2.preventDefault();
        else {
          (M = d.focusProxyRef.value) == null || M.focus();
          return;
        }
      }
      const T = Bt(
        h2,
        document.activeElement,
        void 0,
        { itemsArray: B, loop: false, enableIgnoredElement: true }
      );
      T == null || T.focus();
    }
    function D() {
      var E;
      const h2 = new Event(ka, {
        bubbles: true,
        cancelable: true
      });
      (E = i.value) == null || E.dispatchEvent(h2);
    }
    return (h2, E) => (openBlock(), createBlock(unref(yt), mergeProps({
      id: unref(p),
      ref: unref(r),
      "aria-labelledby": unref(c),
      "data-motion": v2.value,
      "data-state": unref(an)(unref(u).modelValue.value === unref(d).value),
      "data-orientation": unref(u).orientation
    }, e, {
      onKeydown: C,
      onEscapeKeyDown: w2,
      onPointerDownOutside: m2,
      onFocusOutside: g,
      onDismiss: D
    }), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
});
var ny = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Re(n), { forwardRef: s } = R2(), r = ja(), i = gt(), u = So(), d = computed(() => u.value === i.modelValue.value), c = computed(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : false);
    return (p, f) => unref(r) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(i).viewport.value,
      disabled: !unref(i).viewport.value
    }, [
      createVNode(unref(Pe), {
        present: p.forceMount || d.value || c.value
      }, {
        default: withCtx(() => [
          createVNode(Ac, mergeProps({
            ref: unref(s),
            "data-state": unref(an)(d.value),
            style: {
              pointerEvents: !d.value && unref(i).isRootMenu ? "none" : void 0
            }
          }, { ...p.$attrs, ...e, ...unref(l) }, {
            onPointerenter: f[0] || (f[0] = (v2) => unref(i).onContentEnter(unref(u).value)),
            onPointerleave: f[1] || (f[1] = (v2) => unref(fs)(() => unref(i).onContentLeave())(v2)),
            onPointerDownOutside: f[2] || (f[2] = (v2) => n("pointerDownOutside", v2)),
            onFocusOutside: f[3] || (f[3] = (v2) => n("focusOutside", v2)),
            onInteractOutside: f[4] || (f[4] = (v2) => n("interactOutside", v2))
          }), {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var oy = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), { injectCollection: n } = Me("nav"), l = n(), s = gt(), r = ref(), i = computed(() => s.orientation === "horizontal"), u = computed(() => !!s.modelValue.value), d = ref();
    function c() {
      d.value && (r.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return watchEffect(() => {
      if (!s.modelValue.value) {
        r.value = void 0;
        return;
      }
      const p = l.value;
      d.value = p.find(
        (f) => f.id.includes(s.modelValue.value)
      ), c();
    }), Ze(d, c), Ze(s.indicatorTrack, c), (p, f) => unref(s).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(s).indicatorTrack.value
    }, [
      createVNode(unref(Pe), {
        present: p.forceMount || u.value
      }, {
        default: withCtx(() => {
          var v2, g, m2, w2;
          return [
            createVNode(unref(O), mergeProps({
              ref: unref(e),
              "aria-hidden": "true",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": unref(s).orientation,
              "as-child": t.asChild,
              as: p.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v2 = r.value) == null ? void 0 : v2.size}px`,
                  transform: `translateX(${(g = r.value) == null ? void 0 : g.offset}px)`
                } : {
                  top: 0,
                  height: `${(m2 = r.value) == null ? void 0 : m2.size}px`,
                  transform: `translateY(${(w2 = r.value) == null ? void 0 : w2.offset}px)`
                }
              }
            }, p.$attrs), {
              default: withCtx(() => [
                renderSlot(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : createCommentVNode("", true);
  }
});
var ly = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    async function l(s) {
      var i;
      const r = new CustomEvent(Ic, {
        bubbles: true,
        cancelable: true,
        detail: {
          originalEvent: s
        }
      });
      if (n("select", r), !r.defaultPrevented && !s.metaKey) {
        const u = new CustomEvent(
          ka,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (i = s.target) == null || i.dispatchEvent(u);
      }
    }
    return (s, r) => (openBlock(), createBlock(unref(O), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var sy = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a2) {
    const t = a2, e = gt(), { forwardRef: n, currentElement: l } = R2();
    return onMounted(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(O), {
      ref: unref(n),
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": unref(e).orientation
        }), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
});
var ry = defineComponent({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), r = gt(), { forwardRef: i, currentElement: u } = R2(), d = ref(), c = ref(), { createCollection: p } = Me("nav");
    return p(d), ds({
      ...r,
      isRootMenu: false,
      modelValue: l,
      previousValue: s,
      orientation: e.orientation,
      rootNavigationMenu: u,
      indicatorTrack: d,
      onIndicatorTrackChange: (f) => {
        d.value = f;
      },
      viewport: c,
      onViewportChange: (f) => {
        c.value = f;
      },
      onTriggerEnter: (f) => {
        l.value = f;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (f) => {
        l.value = f;
      },
      onItemDismiss: () => {
        l.value = "";
      }
    }), (f, v2) => (openBlock(), createBlock(unref(O), {
      ref: unref(i),
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as,
      "data-radix-navigation-menu": ""
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default", { modelValue: unref(l) })
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
});
var Oc = ["aria-owns"];
var iy = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = gt(), n = So(), { forwardRef: l, currentElement: s } = R2(), r = ref(""), i = ref(""), u = $t(false, 300), d = ref(false), c = computed(() => n.value === e.modelValue.value);
    onMounted(() => {
      n.triggerRef = s, r.value = cs(e.baseId, n.value), i.value = xo(e.baseId, n.value);
    });
    function p() {
      e.disableHoverTrigger.value || (d.value = false, n.wasEscapeCloseRef.value = false);
    }
    function f(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = true;
      }
    }
    function v2(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }
    function g(D) {
      D.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (c.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = c.value);
    }
    function m2(D) {
      const E = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && D.key === E && (n.onEntryKeyDown(), D.preventDefault(), D.stopPropagation());
    }
    function w2(D) {
      n.focusProxyRef.value = $e(D);
    }
    function C(D) {
      const h2 = document.getElementById(n.contentId), E = D.relatedTarget, P2 = E === s.value, B = h2 == null ? void 0 : h2.contains(E);
      (P2 || !B) && n.onFocusProxyEnter(P2 ? "start" : "end");
    }
    return (D, h2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        id: r.value,
        ref: unref(l),
        disabled: D.disabled,
        "data-disabled": D.disabled ? "" : void 0,
        "data-state": unref(an)(c.value),
        "aria-expanded": c.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: D.as
      }, D.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: p,
        onPointermove: f,
        onPointerleave: v2,
        onClick: g,
        onKeydown: m2
      }), {
        default: withCtx(() => [
          renderSlot(D.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(Xt), {
          ref: w2,
          "aria-hidden": "true",
          tabindex: 0,
          onFocus: C
        }),
        unref(e).viewport ? (openBlock(), createElementBlock("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Oc)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 64));
  }
});
var uy = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = R2(), n = gt(), l = ref(), s = computed(() => !!n.modelValue.value), r = computed(() => n.modelValue.value);
    watch(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = ref();
    return watch([r, s], async () => {
      var d, c;
      if (await nextTick(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      i.value = u;
    }, { immediate: true }), Ze(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(Pe), {
      present: u.forceMount || s.value
    }, {
      default: withCtx(() => {
        var c, p;
        return [
          createVNode(unref(O), mergeProps(u.$attrs, {
            ref: unref(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(an)(s.value),
            "data-orientation": unref(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && unref(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(c = l.value) == null ? void 0 : c.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(p = l.value) == null ? void 0 : p.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => unref(n).onContentEnter(unref(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => unref(fs)(() => unref(n).onContentLeave())(f))
          }), {
            default: withCtx(() => [
              renderSlot(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function vs(a2) {
  const { disabled: t } = a2, e = ref(), n = ia(), l = () => window.clearTimeout(e.value), s = (f) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, f));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = ref(false), d = computed(() => $e(a2.target)), c = (f) => {
    f.button !== 0 || u.value || (f.preventDefault(), u.value = true, r());
  }, p = () => {
    u.value = false, i();
  };
  return qe && (Ne(d || window, "pointerdown", c), Ne(window, "pointerup", p), Ne(window, "pointercancel", p)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function Yo(a2, t = ref({})) {
  return Sl(() => new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(a2.value, t.value));
}
function kc(a2, t = ref({})) {
  return Sl(() => new $6c7bd7858deea686$export$cd11ab140839f11d(a2.value, t.value));
}
function Xo(a2, t, e) {
  let n = a2 === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a2 === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
var Mc = ["value", "name", "disabled", "required"];
var [Eo, Vc] = Q("NumberFieldRoot");
var dy = defineComponent({
  inheritAttrs: false,
  __name: "NumberFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    formatOptions: {},
    locale: { default: "en-US" },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l, min: s, max: r, step: i, locale: u, formatOptions: d, id: c } = toRefs(e), p = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { primitiveElement: f, currentElement: v2 } = Ae(), g = Je(v2), m2 = ref(), w2 = computed(
      () => W2(p.value) === s.value || (s.value && !isNaN(p.value) ? Xo("-", p.value, i.value) < s.value : false)
    ), C = computed(
      () => W2(p.value) === r.value || (r.value && !isNaN(p.value) ? Xo("+", p.value, i.value) > r.value : false)
    );
    function D(L, G2 = 1) {
      var z2;
      const N2 = T.parse(((z2 = m2.value) == null ? void 0 : z2.value) ?? "");
      e.disabled || (isNaN(N2) ? p.value = s.value ?? 0 : L === "increase" ? p.value = W2(N2 + (i.value ?? 1) * G2) : p.value = W2(N2 - (i.value ?? 1) * G2));
    }
    function h2(L = 1) {
      D("increase", L);
    }
    function E(L = 1) {
      D("decrease", L);
    }
    function P2(L) {
      L === "min" && s.value !== void 0 ? p.value = W2(s.value) : L === "max" && r.value !== void 0 && (p.value = W2(r.value));
    }
    const B = Yo(u, d), T = kc(u, d), M = computed(() => B.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), V2 = Yo(u, d), A2 = computed(() => isNaN(p.value) ? "" : V2.format(p.value));
    function F(L) {
      return T.isValidPartialNumber(L, s.value, r.value);
    }
    function U(L) {
      m2.value && (m2.value.value = L);
    }
    function W2(L) {
      let G2;
      return i.value === void 0 || isNaN(i.value) ? G2 = Ht(L, s.value, r.value) : G2 = Fr(L, s.value, r.value, i.value), G2 = T.parse(B.format(G2)), G2;
    }
    function ee(L) {
      const G2 = T.parse(L);
      return p.value = W2(G2), L.length ? (isNaN(G2), U(A2.value)) : U(L);
    }
    return Vc({
      modelValue: p,
      handleDecrease: E,
      handleIncrease: h2,
      handleMinMaxValue: P2,
      inputMode: M,
      inputEl: m2,
      onInputElement: (L) => m2.value = L,
      textValue: A2,
      validate: F,
      applyInputValue: ee,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: w2,
      isIncreaseDisabled: C,
      id: c
    }), (L, G2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(L.$attrs, {
        ref_key: "primitiveElement",
        ref: f,
        role: "group",
        as: L.as,
        "as-child": L.asChild,
        "data-disabled": unref(l) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(L.$slots, "default", {
            modelValue: unref(p),
            textValue: A2.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-disabled"]),
      unref(g) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: unref(p),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Mc)) : createCommentVNode("", true)
    ], 64));
  }
});
var cy = defineComponent({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, { primitiveElement: e, currentElement: n } = Ae(), l = Eo();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return onMounted(() => {
      l.onInputElement(n.value);
    }), (r, i) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(l).id.value,
      ref_key: "primitiveElement",
      ref: e,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      value: unref(l).textValue.value,
      inputmode: unref(l).inputMode.value,
      disabled: unref(l).disabled.value ? "" : void 0,
      "data-disabled": unref(l).disabled.value ? "" : void 0,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": unref(l).modelValue.value,
      "aria-valuemin": unref(l).min.value,
      "aria-valuemax": unref(l).max.value,
      onKeydown: [
        i[0] || (i[0] = withKeys(withModifiers((u) => unref(l).handleIncrease(), ["prevent"]), ["up"])),
        i[1] || (i[1] = withKeys(withModifiers((u) => unref(l).handleDecrease(), ["prevent"]), ["down"])),
        i[2] || (i[2] = withKeys(withModifiers((u) => unref(l).handleIncrease(10), ["prevent"]), ["page-up"])),
        i[3] || (i[3] = withKeys(withModifiers((u) => unref(l).handleDecrease(10), ["prevent"]), ["page-down"])),
        i[4] || (i[4] = withKeys(withModifiers((u) => unref(l).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        i[5] || (i[5] = withKeys(withModifiers((u) => unref(l).handleMinMaxValue("max"), ["prevent"]), ["end"]))
      ],
      onWheel: s,
      onBeforeinput: i[6] || (i[6] = (u) => {
        const d = u.target;
        let c = d.value.slice(0, d.selectionStart ?? void 0) + (u.data ?? "") + d.value.slice(d.selectionEnd ?? void 0);
        unref(l).validate(c) || u.preventDefault();
      }),
      onBlur: i[7] || (i[7] = (u) => {
        var d;
        return unref(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
});
var py = defineComponent({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Eo(), n = computed(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = vs({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Increase",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: unref(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": unref(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
});
var fy = defineComponent({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Eo(), n = computed(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = vs({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: unref(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": unref(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
});
var [ea, Fc] = Q("PaginationRoot");
var vy = defineComponent({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { siblingCount: l, disabled: s, showEdges: r } = toRefs(e);
    R2();
    const i = ne(e, "page", n, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = computed(() => Math.max(1, Math.ceil(e.total / e.itemsPerPage)));
    return Fc({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, c) => (openBlock(), createBlock(unref(O), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", {
          page: unref(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var my = defineComponent({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, { "data-type": "ellipsis" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          createTextVNode("…")
        ])
      ]),
      _: 3
    }, 16));
  }
});
var hy = defineComponent({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = ea();
    return R2(), (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === 1 || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(1))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
var yy = defineComponent({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = ea();
    return R2(), (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(unref(e).pageCount.value))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function rt2(a2, t) {
  const e = t - a2 + 1;
  return Array.from({ length: e }, (n, l) => l + a2);
}
function Lc(a2) {
  return a2.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
var Ba = "ellipsis";
function Nc(a2, t, e, n) {
  const s = t, r = Math.max(a2 - e, 1), i = Math.min(a2 + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, c = r > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, p = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!c && p)
      return [...rt2(1, d), Ba, s];
    if (c && !p) {
      const v2 = rt2(s - d + 1, s);
      return [1, Ba, ...v2];
    }
    if (c && p) {
      const v2 = rt2(r, i);
      return [1, Ba, ...v2, Ba, s];
    }
    return rt2(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? rt2(1, s) : a2 <= e + 1 ? rt2(1, u) : t - a2 <= e ? rt2(t - u + 1, s) : rt2(r, i);
  }
}
var gy = defineComponent({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = ea(), n = computed(() => Lc(
      Nc(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
});
var by = defineComponent({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = ea(), n = computed(() => e.page.value === t.value);
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: unref(e).disabled.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => unref(e).onPageChange(l.value))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
});
var Cy = defineComponent({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = ea();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(unref(e).page.value + 1))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
var wy = defineComponent({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = ea();
    return (n, l) => {
      var s;
      return openBlock(), createBlock(unref(O), mergeProps(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: unref(e).page.value === 1 || ((s = unref(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => unref(e).onPageChange(unref(e).page.value - 1))
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default", {}, () => [
            createTextVNode("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var zc = ["id", "value", "name", "disabled", "required"];
var [Kc, Hc] = Q("PinInputRoot");
var _y = defineComponent({
  inheritAttrs: false,
  __name: "PinInputRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "" },
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: { default: "text" },
    dir: {},
    name: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = toRefs(e), { forwardRef: c } = R2(), p = be(d), f = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v2 = ref(/* @__PURE__ */ new Set());
    function g(w2) {
      v2.value.add(w2);
    }
    const m2 = computed(() => f.value.filter((C) => !!C).length === v2.value.size);
    return watch(f, () => {
      m2.value && n("complete", f.value);
    }, { deep: true }), Hc({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: p,
      disabled: u,
      isCompleted: m2,
      inputElements: v2,
      onInputElementChange: g
    }), (w2, C) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(w2.$attrs, {
        ref: unref(c),
        dir: unref(p),
        "data-complete": m2.value ? "" : void 0,
        "data-disabled": unref(u) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(w2.$slots, "default", { modelValue: unref(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      createBaseVNode("input", {
        id: w2.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: unref(f).join(""),
        name: w2.name,
        disabled: unref(u),
        required: w2.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: C[0] || (C[0] = (D) => {
          var h2, E;
          return (E = (h2 = Array.from(v2.value)) == null ? void 0 : h2[0]) == null ? void 0 : E.focus();
        })
      }, null, 40, zc)
    ], 64));
  }
});
var Wc = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"];
var xy = defineComponent({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = Kc(), n = computed(() => Array.from(e.inputElements.value)), l = computed(() => t.disabled || e.disabled.value), s = computed(() => e.otp.value), r = computed(() => e.type.value === "number"), i = computed(() => e.mask.value), u = ref();
    function d(h2) {
      var B;
      const E = h2.target;
      if ((((B = h2.data) == null ? void 0 : B.length) ?? 0) > 1) {
        w2(E.value);
        return;
      }
      if (r.value && !/^\d*$/.test(E.value)) {
        E.value = E.value.replace(/\D/g, "");
        return;
      }
      E.value = E.value.slice(-1), D(t.index, E.value);
      const P2 = n.value[t.index + 1];
      P2 && P2.focus();
    }
    function c(h2) {
      Bt(h2, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: true,
        loop: false,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function p(h2) {
      if (h2.preventDefault(), h2.target.value)
        D(t.index, "");
      else {
        const B = n.value[t.index - 1];
        B && (B.focus(), D(t.index - 1, ""));
      }
    }
    function f(h2) {
      h2.key === "Delete" && (h2.preventDefault(), D(t.index, ""));
    }
    function v2(h2) {
      const E = h2.target;
      E.setSelectionRange(1, 1), E.value || (E.placeholder = "");
    }
    function g(h2) {
      const E = h2.target;
      nextTick(() => {
        E.value || (E.placeholder = e.placeholder.value);
      });
    }
    function m2(h2) {
      h2.preventDefault();
      const E = h2.clipboardData;
      if (!E)
        return;
      const P2 = E.getData("text");
      w2(P2);
    }
    function w2(h2) {
      var T;
      const E = [...e.modelValue.value], P2 = h2.length >= n.value.length ? 0 : t.index, B = Math.min(P2 + h2.length, n.value.length);
      for (let M = P2; M < B; M++) {
        const V2 = n.value[M], A2 = h2[M - P2];
        r.value && !/^\d*$/.test(A2) || (E[M] = A2, V2.focus());
      }
      e.modelValue.value = E, (T = n.value[B]) == null || T.focus();
    }
    function C(h2) {
      let E = h2.length - 1;
      for (; E >= 0 && h2[E] === ""; )
        h2.pop(), E--;
      return h2;
    }
    function D(h2, E) {
      const P2 = [...e.modelValue.value];
      P2[h2] = E, e.modelValue.value = C(P2);
    }
    return onMounted(() => {
      e.onInputElementChange(u.value);
    }), onUnmounted(() => {
      var h2;
      (h2 = e.inputElements) == null || h2.value.delete(u.value);
    }), (h2, E) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: unref(e).placeholder.value,
      value: unref(e).modelValue.value[h2.index],
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": unref(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${h2.index + 1} of ${n.value.length}`,
      onInput: E[0] || (E[0] = (P2) => d(P2)),
      onKeydown: [
        withKeys(c, ["left", "right", "up", "down", "home", "end"]),
        withKeys(p, ["backspace"]),
        withKeys(f, ["delete"])
      ],
      onFocus: v2,
      onBlur: g,
      onPaste: m2
    }, null, 40, Wc));
  }
});
var [Vt, jc] = Q("PopoverRoot");
var ms = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l } = toRefs(e), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(false);
    return jc({
      contentId: "",
      modal: l,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, d) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { open: unref(s) })
      ]),
      _: 3
    }));
  }
});
var hs = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Vt(), { forwardRef: n, currentElement: l } = R2();
    return onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(O) : unref(Rt)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).contentId,
          "data-state": unref(e).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: unref(e).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
});
var ys = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gs = defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = It(e), { forwardRef: s } = R2(), r = Vt();
    return Gn(), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(yt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => unref(r).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(Dt), mergeProps(unref(l), {
              id: unref(r).contentId,
              ref: unref(s),
              "data-state": unref(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Uc = defineComponent({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Vt(), s = ref(false);
    ha(true);
    const r = xe(e, n), { forwardRef: i, currentElement: u } = R2();
    return ya(u), (d, c) => (openBlock(), createBlock(gs, mergeProps(unref(r), {
      ref: unref(i),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = withModifiers(
        (p) => {
          var f;
          n("closeAutoFocus", p), s.value || (f = unref(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, v2 = f.button === 0 && f.ctrlKey === true, g = f.button === 2 || v2;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var Gc = defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Vt(), s = ref(false), r = ref(false), i = xe(e, n);
    return (u, d) => (openBlock(), createBlock(gs, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = unref(l).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = false, r.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var v2;
        n("interactOutside", c), c.defaultPrevented || (s.value = true, c.detail.originalEvent.type === "pointerdown" && (r.value = true));
        const p = c.target;
        ((v2 = unref(l).triggerElement.value) == null ? void 0 : v2.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bs = defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Vt(), s = xe(e, n), { forwardRef: r } = R2();
    return l.contentId || (l.contentId = he(void 0, "radix-vue-popover-content")), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(Uc, mergeProps({ key: 0 }, unref(s), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Gc, mergeProps({ key: 1 }, unref(s), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Cs = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ws = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = Vt();
    return (n, l) => (openBlock(), createBlock(unref(O), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => unref(e).onOpenChange(false))
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
});
var _s = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = Vt();
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (n, l) => (openBlock(), createBlock(unref(Rt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var da = 100;
var [qc, Yc] = Q("ProgressRoot");
var Po = (a2) => typeof a2 == "number";
function Xc(a2, t) {
  return zt(a2) || Po(a2) && !Number.isNaN(a2) && a2 <= t && a2 >= 0 ? a2 : (console.error(`Invalid prop \`value\` of value \`${a2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${da} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Zc(a2) {
  return Po(a2) && !Number.isNaN(a2) && a2 > 0 ? a2 : (console.error(
    `Invalid prop \`max\` of value \`${a2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${da}\`.`
  ), da);
}
var Sy = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: da },
    getValueLabel: { type: Function, default: (a2, t) => `${Math.round(a2 / t * da)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = ne(e, "modelValue", n, {
      passive: e.modelValue === void 0
    }), s = ne(e, "max", n, {
      passive: e.max === void 0
    });
    watch(
      () => l.value,
      async (i) => {
        const u = Xc(i, e.max);
        u !== i && (await nextTick(), l.value = u);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (i) => {
        const u = Zc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: true }
    );
    const r = computed(() => zt(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return Yc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (openBlock(), createBlock(unref(O), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": unref(s),
      "aria-valuemin": 0,
      "aria-valuenow": Po(unref(l)) ? unref(l) : void 0,
      "aria-valuetext": i.getValueLabel(unref(l), unref(s)),
      "aria-label": i.getValueLabel(unref(l), unref(s)),
      role: "progressbar",
      "data-state": r.value,
      "data-value": unref(l) ?? void 0,
      "data-max": unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { modelValue: unref(l) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
});
var Ey = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = qc();
    return R2(), (n, l) => {
      var s;
      return openBlock(), createBlock(unref(O), mergeProps(t, {
        "data-state": unref(e).progressState.value,
        "data-value": ((s = unref(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": unref(e).max.value
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var [Jc, Qc] = Q("RadioGroupRoot");
var Py = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l } = R2(), s = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: r, loop: i, orientation: u, name: d, required: c, dir: p } = toRefs(e), f = be(p);
    return Qc({
      modelValue: s,
      changeModelValue: (v2) => {
        s.value = v2;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: c
    }), (v2, g) => (openBlock(), createBlock(unref(Ot), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(f),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(l),
          role: "radiogroup",
          "data-disabled": unref(r) ? "" : void 0,
          "as-child": v2.asChild,
          as: v2.as,
          required: unref(c),
          "aria-orientation": unref(u),
          "aria-required": unref(c),
          dir: unref(f),
          name: unref(d)
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default", { modelValue: unref(s) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var ep = ["value", "checked", "name", "disabled", "required"];
var tp = defineComponent({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: s } = toRefs(e), { forwardRef: r, currentElement: i } = R2(), u = Je(i), d = computed(() => {
      var p;
      return e.id && i.value ? ((p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText) ?? e.value : void 0;
    });
    function c(p) {
      l.value = true, u.value && p.stopPropagation();
    }
    return (p, f) => (openBlock(), createBlock(unref(O), mergeProps(p.$attrs, {
      id: p.id,
      ref: unref(r),
      role: "radio",
      type: p.as === "button" ? "button" : void 0,
      as: p.as,
      "aria-checked": unref(l),
      "aria-label": d.value,
      "as-child": p.asChild,
      disabled: p.disabled ? "" : void 0,
      "data-state": unref(l) ? "checked" : "unchecked",
      "data-disabled": p.disabled ? "" : void 0,
      value: unref(s),
      required: p.required,
      name: p.name,
      onClick: withModifiers(c, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default", { checked: unref(l) }),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "true",
          value: unref(s),
          checked: !!unref(l),
          name: p.name,
          disabled: p.disabled,
          required: p.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, ep)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
});
var [ap, np] = Q("RadioGroupItem");
var Dy = defineComponent({
  inheritAttrs: false,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R2(), l = Jc(), s = computed(() => l.disabled.value || t.disabled), r = computed(() => l.required.value || t.required), i = computed(() => {
      var p;
      return ((p = l.modelValue) == null ? void 0 : p.value) === t.value;
    });
    np({ disabled: s, checked: i });
    const u = ref(false), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Ne("keydown", (p) => {
      d.includes(p.key) && (u.value = true);
    }), Ne("keyup", () => {
      u.value = false;
    });
    function c() {
      setTimeout(() => {
        var p;
        u.value && ((p = n.value) == null || p.click());
      }, 0);
    }
    return (p, f) => (openBlock(), createBlock(unref(kt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(tp, mergeProps({ ...p.$attrs, ...t }, {
          ref: unref(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": f[0] || (f[0] = (v2) => unref(l).changeModelValue(p.value)),
          onKeydown: f[1] || (f[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
});
var $y = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = R2(), e = ap();
    return (n, l) => (openBlock(), createBlock(unref(Pe), {
      present: n.forceMount || unref(e).checked.value
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(t),
          "data-state": unref(e).checked.value ? "checked" : "unchecked",
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function op(a2) {
  const t = computed(() => a2.start.value ? !!a2.isDateDisabled(a2.start.value) : false), e = computed(() => a2.end.value ? !!a2.isDateDisabled(a2.end.value) : false), n = computed(
    () => t.value || e.value ? false : !!(a2.start.value && a2.end.value && q(a2.end.value, a2.start.value))
  ), l = (c) => a2.start.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, c) : false, s = (c) => a2.end.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, c) : false, r = (c) => a2.start.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, c) || a2.end.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, c) ? true : a2.end.value && a2.start.value ? v(c, a2.start.value, a2.end.value) : false, i = computed(() => {
    if (a2.start.value && a2.end.value || !a2.start.value || !a2.focusedValue.value)
      return null;
    const c = q(a2.start.value, a2.focusedValue.value), p = c ? a2.start.value : a2.focusedValue.value, f = c ? a2.focusedValue.value : a2.start.value;
    return $14e0f24ef4ac5c92$export$ea39ec197993aef0(p.add({ days: 1 }), f) ? {
      start: p,
      end: f
    } : b(p, f, a2.isDateUnavailable, a2.isDateDisabled) ? {
      start: p,
      end: f
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s,
    isHighlightedStart: (c) => !i.value || !i.value.start ? false : $14e0f24ef4ac5c92$export$ea39ec197993aef0(i.value.start, c),
    isHighlightedEnd: (c) => !i.value || !i.value.end ? false : $14e0f24ef4ac5c92$export$ea39ec197993aef0(i.value.end, c)
  };
}
var lp = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var sp = {
  role: "heading",
  "aria-level": "2"
};
var [ta, rp] = Q("RangeCalendarRoot");
var ip = defineComponent({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    modelValue: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    preventDeselect: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: false },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    initialFocus: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      disabled: l,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateUnavailable: v2,
      isDateDisabled: g,
      calendarLabel: m2,
      maxValue: w2,
      minValue: C,
      locale: D,
      dir: h2,
      nextPage: E,
      prevPage: P2
    } = toRefs(e), { primitiveElement: B, currentElement: T } = Ae(), M = be(h2), V2 = ref(), A2 = ref(), F = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), U = Ut({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value.start
    }), W2 = ref(F.value.start), ee = ref(F.value.end), L = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    });
    function G2(Ce) {
      L.value = Ce.copy();
    }
    const {
      fullCalendarLabel: N2,
      headingValue: z2,
      isDateDisabled: Y,
      isDateUnavailable: K,
      isNextButtonDisabled: J2,
      isPrevButtonDisabled: Z,
      grid: re,
      weekdays: X,
      isOutsideVisibleView: se,
      nextPage: pe,
      prevPage: _e,
      formatter: Se
    } = Gl({
      locale: D,
      placeholder: L,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: C,
      maxValue: w2,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: g.value,
      isDateUnavailable: v2.value,
      calendarLabel: m2,
      nextPage: E,
      prevPage: P2
    }), {
      isInvalid: ye,
      isSelected: de,
      highlightedRange: Ie,
      isSelectionStart: Oe,
      isSelectionEnd: ze,
      isHighlightedStart: wt,
      isHighlightedEnd: pr
    } = op({
      start: W2,
      end: ee,
      isDateDisabled: Y,
      isDateUnavailable: K,
      focusedValue: A2
    });
    return watch(F, (Ce) => {
      Ce.start && (!W2.value || !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(W2.value, Ce.start)) && (W2.value = Ce.start.copy()), Ce.end && (!ee.value || !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(ee.value, Ce.end)) && (ee.value = Ce.end.copy());
    }), watch(W2, (Ce) => {
      Ce && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(Ce, L.value) && G2(Ce), n("update:startValue", Ce);
    }), watch([W2, ee], ([Ce, ot]) => {
      const We = F.value;
      if (!(We && We.start && We.end && Ce && ot && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(We.start, Ce) && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(We.end, ot)))
        if (Ce && ot) {
          if (We.start && We.end && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(We.start, Ce) && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(We.end, ot))
            return;
          q(ot, Ce) ? F.value = {
            start: ot.copy(),
            end: Ce.copy()
          } : F.value = {
            start: Ce.copy(),
            end: ot.copy()
          };
        } else We.start && We.end && (F.value = {
          start: void 0,
          end: void 0
        });
    }), rp({
      isDateUnavailable: K,
      startValue: W2,
      endValue: ee,
      formatter: Se,
      modelValue: F,
      placeholder: L,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: N2,
      headingValue: z2,
      isInvalid: ye,
      isDateDisabled: Y,
      highlightedRange: Ie,
      focusedValue: A2,
      lastPressedDateValue: V2,
      isSelected: de,
      isSelectionEnd: ze,
      isSelectionStart: Oe,
      isNextButtonDisabled: J2,
      isPrevButtonDisabled: Z,
      isOutsideVisibleView: se,
      nextPage: pe,
      prevPage: _e,
      parentElement: T,
      onPlaceholderChange: G2,
      locale: D,
      dir: M,
      isHighlightedStart: wt,
      isHighlightedEnd: pr
    }), onMounted(() => {
      r.value && _l(T.value);
    }), (Ce, ot) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: B,
      as: Ce.as,
      "as-child": Ce.asChild,
      role: "application",
      "aria-label": unref(N2),
      "data-readonly": unref(s) ? "" : void 0,
      "data-disabled": unref(l) ? "" : void 0,
      "data-invalid": unref(ye) ? "" : void 0,
      dir: unref(M)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", lp, [
          createBaseVNode("div", sp, toDisplayString(unref(N2)), 1)
        ]),
        renderSlot(Ce.$slots, "default", {
          date: unref(L),
          grid: unref(re),
          weekDays: unref(X),
          weekStartsOn: unref(u),
          locale: unref(D),
          fixedWeeks: unref(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
});
var up = defineComponent({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dp = defineComponent({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = ta();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "data-disabled": unref(e).disabled.value ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {
          headingValue: unref(e).headingValue.value
        }, () => [
          createTextVNode(toDisplayString(unref(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
});
var cp = defineComponent({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = ta(), n = computed(() => e.disabled.value ? true : void 0), l = computed(() => e.readonly.value ? true : void 0);
    return (s, r) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
});
var pp = defineComponent({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = ta();
    return (e, n) => {
      var l, s;
      return openBlock(), createBlock(unref(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": unref(t).isSelected(e.date) ? true : void 0,
        "aria-disabled": unref(t).isDateDisabled(e.date) || ((s = (l = unref(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": unref(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var fp = defineComponent({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vp = defineComponent({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = computed(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ta();
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => unref(n).nextPage(t.step, t.nextPage))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var mp = defineComponent({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = computed(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ta();
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      "aria-label": "Previous page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => unref(n).prevPage(t.step, t.prevPage))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var hp = defineComponent({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yp = defineComponent({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gp = defineComponent({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bp = defineComponent({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = ta(), n = Qe(), { primitiveElement: l, currentElement: s } = Ae(), r = computed(() => e.formatter.custom($(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = computed(() => e.isDateDisabled(t.day)), u = computed(() => {
      var V2;
      return (V2 = e.isDateUnavailable) == null ? void 0 : V2.call(e, t.day);
    }), d = computed(() => e.isSelected(t.day)), c = computed(() => e.isSelectionStart(t.day)), p = computed(() => e.isSelectionEnd(t.day)), f = computed(() => e.isHighlightedStart(t.day)), v2 = computed(() => e.isHighlightedEnd(t.day)), g = computed(() => e.highlightedRange.value ? V(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : false), m2 = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", w2 = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), C = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), D = computed(
      () => e.isOutsideVisibleView(t.day)
    ), h2 = computed(() => t.day.day.toLocaleString(e.locale.value)), E = computed(() => !e.disabled.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, e.placeholder.value));
    function P2(V2, A2) {
      var F;
      if (!e.readonly.value && !(e.isDateDisabled(A2) || (F = e.isDateUnavailable) != null && F.call(e, A2))) {
        if (e.lastPressedDateValue.value = A2.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(A2, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(A2);
            return;
          } else if (!e.endValue.value) {
            V2.preventDefault(), e.lastPressedDateValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.lastPressedDateValue.value, A2) && (e.startValue.value = A2.copy());
            return;
          }
        }
        if (e.startValue.value && e.endValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.endValue.value, A2) && !e.preventDeselect.value) {
          e.startValue.value = void 0, e.endValue.value = void 0, e.onPlaceholderChange(A2);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = A2.copy()) : e.endValue.value = A2.copy() : e.startValue.value = A2.copy();
      }
    }
    function B(V2) {
      P2(V2, t.day);
    }
    function T() {
      var V2;
      e.isDateDisabled(t.day) || (V2 = e.isDateUnavailable) != null && V2.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function M(V2) {
      V2.preventDefault(), V2.stopPropagation();
      const A2 = e.parentElement.value, F = A2 ? Array.from(A2.querySelectorAll(m2)) : [];
      let W2 = F.indexOf(s.value);
      const ee = 7, L = e.dir.value === "rtl" ? -1 : 1;
      switch (V2.code) {
        case n.ARROW_RIGHT:
          W2 += L;
          break;
        case n.ARROW_LEFT:
          W2 -= L;
          break;
        case n.ARROW_UP:
          W2 -= ee;
          break;
        case n.ARROW_DOWN:
          W2 += ee;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          P2(V2, t.day);
          return;
        default:
          return;
      }
      if (W2 >= 0 && W2 < F.length) {
        F[W2].focus();
        return;
      }
      if (W2 < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), nextTick(() => {
          const G2 = A2 ? Array.from(A2.querySelectorAll(m2)) : [];
          G2[G2.length - Math.abs(W2)].focus();
        });
        return;
      }
      if (W2 >= F.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), nextTick(() => {
          (A2 ? Array.from(A2.querySelectorAll(m2)) : [])[W2 - F.length].focus();
        });
      }
    }
    return (V2, A2) => (openBlock(), createBlock(unref(O), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? true : void 0,
      "aria-disabled": C.value || i.value || u.value ? true : void 0,
      "data-highlighted": g.value ? "" : void 0,
      "data-selection-start": c.value ? true : void 0,
      "data-selection-end": p.value ? true : void 0,
      "data-highlighted-start": f.value ? true : void 0,
      "data-highlighted-end": v2.value ? true : void 0,
      "data-selected": d.value ? true : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": V2.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": w2.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: B,
      onFocusin: T,
      onMouseenter: T,
      onKeydown: withKeys(M, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: withCtx(() => [
        renderSlot(V2.$slots, "default", { dayValue: h2.value }, () => [
          createTextVNode(toDisplayString(h2.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
});
var [He, Cp] = Q("ScrollAreaRoot");
var By = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = ref(0), l = ref(0), s = ref(), r = ref(), i = ref(), u = ref(), d = ref(false), c = ref(false), { type: p, dir: f, scrollHideDelay: v2 } = toRefs(e), g = be(f);
    function m2() {
      var h2;
      (h2 = s.value) == null || h2.scrollTo({
        top: 0
      });
    }
    function w2() {
      var h2;
      (h2 = s.value) == null || h2.scrollTo({
        top: 0,
        left: 0
      });
    }
    t({
      /** Viewport element within ScrollArea */
      viewport: s,
      /** Scroll viewport to top */
      scrollTop: m2,
      /** Scroll viewport to top-left */
      scrollTopLeft: w2
    });
    const { forwardRef: C, currentElement: D } = R2();
    return Cp({
      type: p,
      dir: g,
      scrollHideDelay: v2,
      scrollArea: D,
      viewport: s,
      onViewportChange: (h2) => {
        s.value = h2 || void 0;
      },
      content: r,
      onContentChange: (h2) => {
        r.value = h2;
      },
      scrollbarX: i,
      scrollbarXEnabled: d,
      scrollbarY: u,
      scrollbarYEnabled: c,
      onScrollbarXChange: (h2) => {
        i.value = h2 || void 0;
      },
      onScrollbarYChange: (h2) => {
        u.value = h2 || void 0;
      },
      onScrollbarXEnabledChange: (h2) => {
        d.value = h2;
      },
      onScrollbarYEnabledChange: (h2) => {
        c.value = h2;
      },
      onCornerWidthChange: (h2) => {
        n.value = h2;
      },
      onCornerHeightChange: (h2) => {
        l.value = h2;
      }
    }), (h2, E) => (openBlock(), createBlock(unref(O), {
      ref: unref(C),
      "as-child": e.asChild,
      as: h2.as,
      dir: unref(g),
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${n.value}px`,
        "--radix-scroll-area-corner-height": `${l.value}px`
      })
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var Iy = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, { nonce: n } = toRefs(e), l = Xa(n), s = He(), r = ref();
    onMounted(() => {
      s.onViewportChange(r.value), s.onContentChange(u.value);
    }), t({
      viewportElement: r
    });
    const { forwardRef: i, currentElement: u } = R2();
    return (d, c) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", mergeProps({
        ref_key: "viewportElement",
        ref: r,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: unref(s).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: unref(s).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, d.$attrs, { tabindex: 0 }), [
        createVNode(unref(O), {
          ref: unref(i),
          style: normalizeStyle({
            /**
             * When horizontal scrollbar is visible: this element should be at least
             * as wide as its children for size calculations to work correctly.
             *
             * When horizontal scrollbar is NOT visible: this element's width should
             * be constrained by the parent container to enable `text-overflow: ellipsis`
             */
            minWidth: unref(s).scrollbarXEnabled.value ? "fit-content" : void 0
          }),
          "as-child": e.asChild,
          as: d.as
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["style", "as-child", "as"])
      ], 16),
      createVNode(unref(O), {
        as: "style",
        nonce: unref(l)
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function xs(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function nn(a2) {
  const t = Ss(a2.viewport, a2.content), e = a2.scrollbar.paddingStart + a2.scrollbar.paddingEnd, n = (a2.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Ss(a2, t) {
  const e = a2 / t;
  return Number.isNaN(e) ? 0 : e;
}
function wp(a2, t = () => {
}) {
  let e = { left: a2.scrollLeft, top: a2.scrollTop }, n = 0;
  return function l() {
    const s = { left: a2.scrollLeft, top: a2.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Zo(a2, t, e = "ltr") {
  const n = nn(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = Ht(
    a2,
    u[0],
    u[1]
  );
  return xs([0, r], [0, i])(d);
}
function Ia(a2) {
  return a2 ? Number.parseInt(a2, 10) : 0;
}
function _p(a2, t, e, n = "ltr") {
  const l = nn(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, p = n === "ltr" ? [0, c] : [c * -1, 0];
  return xs(
    [u, d],
    p
  )(a2);
}
function Jo(a2, t) {
  return a2 > 0 && a2 < t;
}
var Es = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = He(), s = on(), r = ln(), { forwardRef: i, currentElement: u } = R2(), d = ref(""), c = ref();
    function p(C) {
      var D, h2;
      if (c.value) {
        const E = C.clientX - ((D = c.value) == null ? void 0 : D.left), P2 = C.clientY - ((h2 = c.value) == null ? void 0 : h2.top);
        n("onDragScroll", { x: E, y: P2 });
      }
    }
    function f(C) {
      C.button === 0 && (C.target.setPointerCapture(C.pointerId), c.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), p(C));
    }
    function v2(C) {
      p(C);
    }
    function g(C) {
      const D = C.target;
      D.hasPointerCapture(C.pointerId) && D.releasePointerCapture(C.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), c.value = void 0;
    }
    function m2(C) {
      var P2;
      const D = C.target, h2 = (P2 = u.value) == null ? void 0 : P2.contains(D), E = s.sizes.value.content - s.sizes.value.viewport;
      h2 && s.handleWheelScroll(C, E);
    }
    onMounted(() => {
      document.addEventListener("wheel", m2, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", m2);
    });
    function w2() {
      var C, D, h2, E, P2;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((C = l.viewport.value) == null ? void 0 : C.scrollWidth) ?? 0,
        viewport: ((D = l.viewport.value) == null ? void 0 : D.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((h2 = l.viewport.value) == null ? void 0 : h2.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P2 = u.value) == null ? void 0 : P2.clientHeight) ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, w2), Ze(l.content, w2), (C, D) => (openBlock(), createBlock(unref(O), {
      ref: unref(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: unref(r).as.value,
      "as-child": unref(r).asChild.value,
      onPointerdown: f,
      onPointermove: v2,
      onPointerup: g
    }, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var xp = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a2) {
    const t = He(), e = on(), { forwardRef: n, currentElement: l } = R2();
    onMounted(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Es, {
      ref: unref(n),
      "is-horizontal": true,
      "data-orientation": "horizontal",
      style: normalizeStyle({
        bottom: 0,
        left: unref(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: unref(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${unref(nn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.x))
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var Sp = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a2) {
    const t = He(), e = on(), { forwardRef: n, currentElement: l } = R2();
    onMounted(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Es, {
      ref: unref(n),
      "is-horizontal": false,
      "data-orientation": "vertical",
      style: normalizeStyle({
        top: 0,
        right: unref(t).dir.value === "ltr" ? 0 : void 0,
        left: unref(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${unref(nn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.y))
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var [on, Ep] = Q("ScrollAreaScrollbarVisible");
var Do = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a2) {
    const t = He(), e = ln(), { forwardRef: n } = R2(), l = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = computed(() => {
      const C = Ss(l.value.viewport, l.value.content);
      return C > 0 && C < 1;
    }), r = ref(), i = ref(0);
    function u(C, D) {
      if (v2.value) {
        const h2 = t.viewport.value.scrollLeft + C.deltaY;
        t.viewport.value.scrollLeft = h2, Jo(h2, D) && C.preventDefault();
      } else {
        const h2 = t.viewport.value.scrollTop + C.deltaY;
        t.viewport.value.scrollTop = h2, Jo(h2, D) && C.preventDefault();
      }
    }
    function d(C, D) {
      v2.value ? i.value = D.x : i.value = D.y;
    }
    function c(C) {
      i.value = 0;
    }
    function p(C) {
      l.value = C;
    }
    function f(C, D) {
      return _p(
        C,
        i.value,
        l.value,
        D
      );
    }
    const v2 = computed(
      () => e.isHorizontal.value
    );
    function g(C) {
      v2.value ? t.viewport.value.scrollLeft = f(
        C,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(C);
    }
    function m2() {
      if (v2.value) {
        if (t.viewport.value && r.value) {
          const C = t.viewport.value.scrollLeft, D = Zo(
            C,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const C = t.viewport.value.scrollTop, D = Zo(C, l.value);
        r.value.style.transform = `translate3d(0, ${D}px, 0)`;
      }
    }
    function w2(C) {
      r.value = C;
    }
    return Ep({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: c,
      handleSizeChange: p,
      onThumbPositionChange: m2,
      onThumbChange: w2,
      onDragScroll: g
    }), (C, D) => v2.value ? (openBlock(), createBlock(xp, mergeProps({ key: 0 }, C.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Sp, mergeProps({ key: 1 }, C.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ps = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = He(), e = ln(), { forwardRef: n } = R2(), l = ref(false), s = Hn(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return onMounted(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (openBlock(), createBlock(unref(Pe), {
      present: r.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(Do, mergeProps(r.$attrs, {
          ref: unref(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Pp = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = He(), { forwardRef: e } = R2();
    let n;
    const l = ref(false);
    function s() {
      window.clearTimeout(n), l.value = true;
    }
    function r() {
      n = window.setTimeout(() => {
        l.value = false;
      }, t.scrollHideDelay.value);
    }
    return onMounted(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", s), i.addEventListener("pointerleave", r));
    }), onUnmounted(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(n), i.removeEventListener("pointerenter", s), i.removeEventListener("pointerleave", r));
    }), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(Ps, mergeProps(i.$attrs, {
          ref: unref(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Dp = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = He(), e = ln(), { forwardRef: n } = R2(), { state: l, dispatch: s } = Ml("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    watchEffect((i) => {
      if (l.value === "idle") {
        const u = window.setTimeout(
          () => s("HIDE"),
          t.scrollHideDelay.value
        );
        i(() => {
          window.clearTimeout(u);
        });
      }
    });
    const r = Hn(() => s("SCROLL_END"), 100);
    return watchEffect((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let c = u[d];
        const p = () => {
          const f = u[d];
          c !== f && (s("SCROLL"), r()), c = f;
        };
        u.addEventListener("scroll", p), i(() => {
          u.removeEventListener("scroll", p);
        });
      }
    }), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l) !== "hidden"
    }, {
      default: withCtx(() => [
        createVNode(Do, mergeProps(i.$attrs, { ref: unref(n) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var [ln, $p] = Q("ScrollAreaScrollbar");
var Ty = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), n = He(), l = computed(() => t.orientation === "horizontal");
    watch(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(true) : n.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      n.onScrollbarXEnabledChange(false), n.onScrollbarYEnabledChange(false);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = toRefs(t);
    return $p({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, c) => unref(n).type.value === "hover" ? (openBlock(), createBlock(Pp, mergeProps({ key: 0 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "scroll" ? (openBlock(), createBlock(Dp, mergeProps({ key: 1 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "auto" ? (openBlock(), createBlock(Ps, mergeProps({ key: 2 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "always" ? (openBlock(), createBlock(Do, mergeProps({ key: 3 }, d.$attrs, {
      ref: unref(e),
      "data-state": "visible"
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Ry = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = He(), n = on();
    function l(f) {
      const g = f.target.getBoundingClientRect(), m2 = f.clientX - g.left, w2 = f.clientY - g.top;
      n.handleThumbDown(f, { x: m2, y: w2 });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = R2(), u = ref(), d = computed(() => e.viewport.value);
    function c() {
      if (!u.value) {
        const f = wp(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const p = computed(() => n.sizes.value);
    return fi(p, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, v2) => (openBlock(), createBlock(unref(O), {
      ref: unref(r),
      "data-state": unref(n).hasThumb ? "visible" : "hidden",
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      },
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "as-child", "as"]));
  }
});
var Bp = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(a2) {
    const t = He(), e = ref(0), n = ref(0), l = computed(() => !!e.value && !!n.value);
    function s() {
      var u;
      const i = ((u = t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t.onCornerHeightChange(i), n.value = i;
    }
    function r() {
      var u;
      const i = ((u = t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t.onCornerWidthChange(i), e.value = i;
    }
    return Ze(t.scrollbarX.value, s), Ze(t.scrollbarY.value, r), watch(() => t.scrollbarX.value, s), watch(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (openBlock(), createBlock(unref(O), mergeProps({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${n.value}px`,
          position: "absolute",
          right: unref(t).dir.value === "ltr" ? 0 : void 0,
          left: unref(t).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = i.$parent) == null ? void 0 : d.$props), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : createCommentVNode("", true);
    };
  }
});
var Ay = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), n = He(), l = computed(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = computed(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (openBlock(), createBlock(Bp, mergeProps({ key: 0 }, t, { ref: unref(e) }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Ip = ["default-value"];
var Tp = defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(a2) {
    const t = a2, { value: e } = toRefs(t), n = ref();
    return (l, s) => (openBlock(), createBlock(unref(Xt), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => isRef(e) ? e.value = r : null),
          "default-value": unref(e)
        }), [
          renderSlot(l.$slots, "default")
        ], 16, Ip), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var Rp = {
  key: 0,
  value: ""
};
var [bt, Ds] = Q("SelectRoot");
var [Ap, Op] = Q("SelectRoot");
var Oy = defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d = ref(false), { required: c, disabled: p, dir: f } = toRefs(e), v2 = be(f);
    Ds({
      triggerElement: r,
      onTriggerChange: (C) => {
        r.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (C) => {
        d.value = C;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (C) => {
        l.value = C;
      },
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: v2,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const g = Je(r), m2 = ref(/* @__PURE__ */ new Set()), w2 = computed(() => Array.from(m2.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Op({
      onNativeOptionAdd: (C) => {
        m2.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        m2.value.delete(C);
      }
    }), (C, D) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default", {
          modelValue: unref(l),
          open: unref(s)
        }),
        unref(g) ? (openBlock(), createBlock(Tp, mergeProps({ key: w2.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: unref(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: unref(p),
          value: unref(l),
          onChange: D[0] || (D[0] = (h2) => l.value = h2.target.value)
        }), {
          default: withCtx(() => [
            unref(l) === void 0 ? (openBlock(), createElementBlock("option", Rp)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(m2.value), (h2) => (openBlock(), createBlock(resolveDynamicComponent(h2), mergeProps({ ref_for: true }, h2.props, {
              key: h2.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var kp = [" ", "Enter", "ArrowUp", "ArrowDown"];
var Mp = [" ", "Enter"];
var at = 10;
function $s(a2) {
  return a2 === "" || zt(a2);
}
var ky = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = bt(), n = computed(() => {
      var v2;
      return ((v2 = e.disabled) == null ? void 0 : v2.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R2();
    e.contentId || (e.contentId = he(void 0, "radix-vue-select-content")), onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Me(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = ga(i);
    function p() {
      n.value || (e.onOpenChange(true), c());
    }
    function f(v2) {
      p(), e.triggerPointerDownPosRef.value = {
        x: Math.round(v2.pageX),
        y: Math.round(v2.pageY)
      };
    }
    return (v2, g) => (openBlock(), createBlock(unref(Rt), { "as-child": "" }, {
      default: withCtx(() => {
        var m2, w2, C, D;
        return [
          createVNode(unref(O), {
            ref: unref(l),
            role: "combobox",
            type: v2.as === "button" ? "button" : void 0,
            "aria-controls": unref(e).contentId,
            "aria-expanded": unref(e).open.value || false,
            "aria-required": (m2 = unref(e).required) == null ? void 0 : m2.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (w2 = unref(e)) == null ? void 0 : w2.dir.value,
            "data-state": (C = unref(e)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": unref($s)((D = unref(e).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": v2.asChild,
            as: v2.as,
            onClick: g[0] || (g[0] = (h2) => {
              var E;
              (E = h2 == null ? void 0 : h2.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (h2) => {
              if (h2.pointerType === "touch")
                return h2.preventDefault();
              const E = h2.target;
              E.hasPointerCapture(h2.pointerId) && E.releasePointerCapture(h2.pointerId), h2.button === 0 && h2.ctrlKey === false && (f(h2), h2.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = withModifiers(
              (h2) => {
                h2.pointerType === "touch" && f(h2);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (h2) => {
              const E = unref(u) !== "";
              !(h2.ctrlKey || h2.altKey || h2.metaKey) && h2.key.length === 1 && E && h2.key === " " || (unref(d)(h2.key), unref(kp).includes(h2.key) && (p(), h2.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(v2.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
});
var My = defineComponent({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [$o, Vp] = Q("SelectItemAlignedPosition");
var Fp = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Me(), s = bt(), r = Ct(), i = l(), u = ref(false), d = ref(true), c = ref(), { forwardRef: p, currentElement: f } = R2(), { viewport: v2, selectedItem: g, selectedItemText: m2, focusSelectedItem: w2 } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && f.value && (v2 != null && v2.value) && (g != null && g.value) && (m2 != null && m2.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P2 = f.value.getBoundingClientRect(), B = s.valueElement.value.getBoundingClientRect(), T = m2.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Se = T.left - P2.left, ye = B.left - Se, de = E.left - ye, Ie = E.width + de, Oe = Math.max(Ie, P2.width), ze = window.innerWidth - at, wt = Ht(ye, at, ze - Oe);
          c.value.style.minWidth = `${Ie}px`, c.value.style.left = `${wt}px`;
        } else {
          const Se = P2.right - T.right, ye = window.innerWidth - B.right - Se, de = window.innerWidth - E.right - ye, Ie = E.width + de, Oe = Math.max(Ie, P2.width), ze = window.innerWidth - at, wt = Ht(
            ye,
            at,
            ze - Oe
          );
          c.value.style.minWidth = `${Ie}px`, c.value.style.right = `${wt}px`;
        }
        const M = i.value, V2 = window.innerHeight - at * 2, A2 = v2.value.scrollHeight, F = window.getComputedStyle(f.value), U = Number.parseInt(
          F.borderTopWidth,
          10
        ), W2 = Number.parseInt(F.paddingTop, 10), ee = Number.parseInt(
          F.borderBottomWidth,
          10
        ), L = Number.parseInt(
          F.paddingBottom,
          10
        ), G2 = U + W2 + A2 + L + ee, N2 = Math.min(
          g.value.offsetHeight * 5,
          G2
        ), z2 = window.getComputedStyle(v2.value), Y = Number.parseInt(z2.paddingTop, 10), K = Number.parseInt(
          z2.paddingBottom,
          10
        ), J2 = E.top + E.height / 2 - at, Z = V2 - J2, re = g.value.offsetHeight / 2, X = g.value.offsetTop + re, se = U + W2 + X, pe = G2 - se;
        if (se <= J2) {
          const Se = g.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const ye = f.value.clientHeight - v2.value.offsetTop - v2.value.offsetHeight, de = Math.max(
            Z,
            re + (Se ? K : 0) + ye + ee
          ), Ie = se + de;
          c.value.style.height = `${Ie}px`;
        } else {
          const Se = g.value === M[0];
          c.value.style.top = "0px";
          const de = Math.max(
            J2,
            U + v2.value.offsetTop + (Se ? Y : 0) + re
          ) + pe;
          c.value.style.height = `${de}px`, v2.value.scrollTop = se - J2 + v2.value.offsetTop;
        }
        c.value.style.margin = `${at}px 0`, c.value.style.minHeight = `${N2}px`, c.value.style.maxHeight = `${V2}px`, n("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const D = ref("");
    onMounted(async () => {
      await nextTick(), C(), f.value && (D.value = window.getComputedStyle(f.value).zIndex);
    });
    function h2(E) {
      E && d.value === true && (C(), w2 == null || w2(), d.value = false);
    }
    return Vp({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: h2
    }), (E, P2) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      createVNode(unref(O), mergeProps({
        ref: unref(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
});
var Lp = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: at },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const e = It(a2);
    return (n, l) => (openBlock(), createBlock(unref(Dt), mergeProps(unref(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var aa = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
};
var [Ct, Np] = Q("SelectContent");
var zp = defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = bt();
    Gn(), ha(e.bodyLock);
    const { createCollection: s } = Me(), r = ref();
    ya(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = ga(i), c = ref(), p = ref(), f = ref(), v2 = ref(false), g = ref(false);
    function m2() {
      p.value && r.value && $n([p.value, r.value]);
    }
    watch(v2, () => {
      m2();
    });
    const { onOpenChange: w2, triggerPointerDownPosRef: C } = l;
    watchEffect((P2) => {
      if (!r.value)
        return;
      let B = { x: 0, y: 0 };
      const T = (V2) => {
        var A2, F;
        B = {
          x: Math.abs(
            Math.round(V2.pageX) - (((A2 = C.value) == null ? void 0 : A2.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V2.pageY) - (((F = C.value) == null ? void 0 : F.y) ?? 0)
          )
        };
      }, M = (V2) => {
        var A2;
        V2.pointerType !== "touch" && (B.x <= 10 && B.y <= 10 ? V2.preventDefault() : (A2 = r.value) != null && A2.contains(V2.target) || w2(false), document.removeEventListener("pointermove", T), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", M, {
        capture: true,
        once: true
      })), P2(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", M, {
          capture: true
        });
      });
    });
    function D(P2) {
      const B = P2.ctrlKey || P2.altKey || P2.metaKey;
      if (P2.key === "Tab" && P2.preventDefault(), !B && P2.key.length === 1 && d(P2.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P2.key)) {
        let T = i.value;
        if (["ArrowUp", "End"].includes(P2.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P2.key)) {
          const M = P2.target, V2 = T.indexOf(M);
          T = T.slice(V2 + 1);
        }
        setTimeout(() => $n(T)), P2.preventDefault();
      }
    }
    const h2 = computed(() => e.position === "popper" ? e : {}), E = It(h2.value);
    return Np({
      content: r,
      viewport: c,
      onViewportChange: (P2) => {
        c.value = P2;
      },
      itemRefCallback: (P2, B, T) => {
        var A2, F;
        const M = !g.value && !T;
        (((A2 = l.modelValue) == null ? void 0 : A2.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || M) && (p.value = P2, M && (g.value = true));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var P2;
        (P2 = r.value) == null || P2.focus();
      },
      itemTextRefCallback: (P2, B, T) => {
        var A2, F;
        const M = !g.value && !T;
        (((A2 = l.modelValue) == null ? void 0 : A2.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || M) && (f.value = P2);
      },
      focusSelectedItem: m2,
      position: e.position,
      isPositioned: v2,
      searchRef: u
    }), (P2, B) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      onMountAutoFocus: B[6] || (B[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: B[7] || (B[7] = (T) => {
        var M;
        n("closeAutoFocus", T), !T.defaultPrevented && ((M = unref(l).triggerElement.value) == null || M.focus({ preventScroll: true }), T.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(yt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: B[2] || (B[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: B[3] || (B[3] = (T) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: B[4] || (B[4] = (T) => n("escapeKeyDown", T)),
          onPointerDownOutside: B[5] || (B[5] = (T) => n("pointerDownOutside", T))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              P2.position === "popper" ? Lp : Fp
            ), mergeProps({ ...P2.$attrs, ...unref(E) }, {
              id: unref(l).contentId,
              ref: (T) => {
                r.value = unref($e)(T);
              },
              role: "listbox",
              "data-state": unref(l).open.value ? "open" : "closed",
              dir: unref(l).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: B[0] || (B[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: B[1] || (B[1] = (T) => v2.value = true),
              onKeydown: D
            }), {
              default: withCtx(() => [
                renderSlot(P2.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});
var Kp = defineComponent({
  inheritAttrs: false,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a2) {
    return Ds(a2.context), (e, n) => renderSlot(e.$slots, "default");
  }
});
var Hp = { key: 1 };
var Vy = defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, l = xe(e, t), s = bt(), r = ref();
    onMounted(() => {
      r.value = new DocumentFragment();
    });
    const i = ref(), u = computed(() => e.forceMount || s.open.value);
    return (d, c) => {
      var p;
      return u.value ? (openBlock(), createBlock(unref(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: true
      }, {
        default: withCtx(() => [
          createVNode(zp, normalizeProps(guardReactiveProps({ ...unref(l), ...d.$attrs })), {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = i.value) != null && p.present) && r.value ? (openBlock(), createElementBlock("div", Hp, [
        (openBlock(), createBlock(Teleport, { to: r.value }, [
          createVNode(Kp, { context: unref(s) }, {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : createCommentVNode("", true);
    };
  }
});
var Fy = defineComponent({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = bt(), n = Ct();
    return (l, s) => unref(e).open.value && unref(n).position === "popper" ? (openBlock(), createBlock(unref(Yt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Ly = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(O), mergeProps({ "aria-hidden": "true" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Bs, Wp] = Q("SelectItem");
var Ny = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), n = bt(), l = Ct(aa), { forwardRef: s, currentElement: r } = R2(), i = computed(() => {
      var m2;
      return ((m2 = n.modelValue) == null ? void 0 : m2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = he(void 0, "radix-vue-select-item-text");
    async function p(m2) {
      await nextTick(), !(m2 != null && m2.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(false)));
    }
    async function f(m2) {
      var w2;
      await nextTick(), !m2.defaultPrevented && (e.value ? (w2 = l.onItemLeave) == null || w2.call(l) : m2.currentTarget.focus({ preventScroll: true }));
    }
    async function v2(m2) {
      var w2;
      await nextTick(), !m2.defaultPrevented && m2.currentTarget === document.activeElement && ((w2 = l.onItemLeave) == null || w2.call(l));
    }
    async function g(m2) {
      var C;
      await nextTick(), !(m2.defaultPrevented || ((C = l.searchRef) == null ? void 0 : C.value) !== "" && m2.key === " ") && (Mp.includes(m2.key) && p(), m2.key === " " && m2.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      r.value && l.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Wp({
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m2) => {
        d.value = ((d.value || (m2 == null ? void 0 : m2.textContent)) ?? "").trim();
      }
    }), (m2, w2) => (openBlock(), createBlock(unref(O), {
      ref: unref(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabindex: unref(e) ? void 0 : -1,
      as: m2.as,
      "as-child": m2.asChild,
      onFocus: w2[0] || (w2[0] = (C) => u.value = true),
      onBlur: w2[1] || (w2[1] = (C) => u.value = false),
      onPointerup: p,
      onPointerdown: w2[2] || (w2[2] = (C) => {
        C.currentTarget.focus({ preventScroll: true });
      }),
      onTouchend: w2[3] || (w2[3] = withModifiers(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v2,
      onKeydown: g
    }, {
      default: withCtx(() => [
        renderSlot(m2.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
});
var zy = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Bs();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(O), mergeProps({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var [jp, Up] = Q("SelectGroup");
var Ky = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = he(void 0, "radix-vue-select-group");
    return Up({ id: e }), (n, l) => (openBlock(), createBlock(unref(O), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Hy = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = jp({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var Wy = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = bt(), n = Ct(aa), l = Ap(), s = Bs(), { forwardRef: r, currentElement: i } = R2(), u = computed(() => {
      var d;
      return h("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return onMounted(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), onBeforeUnmount(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        id: unref(s).textId,
        ref: unref(r)
      }, { ...t, ...d.$attrs }), {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      unref(s).isSelected.value && unref(e).valueElement.value && !unref(e).valueElementHasChildren.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(e).valueElement.value
      }, [
        renderSlot(d.$slots, "default")
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
});
var jy = defineComponent({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { nonce: e } = toRefs(t), n = Xa(e), l = Ct(aa), s = l.position === "item-aligned" ? $o() : void 0, { forwardRef: r, currentElement: i } = R2();
    onMounted(() => {
      l == null || l.onViewportChange(i.value);
    });
    const u = ref(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v2 } = s ?? {};
      if (f != null && f.value && (v2 != null && v2.value)) {
        const g = Math.abs(u.value - p.scrollTop);
        if (g > 0) {
          const m2 = window.innerHeight - at * 2, w2 = Number.parseFloat(
            v2.value.style.minHeight
          ), C = Number.parseFloat(v2.value.style.height), D = Math.max(w2, C);
          if (D < m2) {
            const h2 = D + g, E = Math.min(m2, h2), P2 = h2 - E;
            v2.value.style.height = `${E}px`, v2.value.style.bottom === "0px" && (p.scrollTop = P2 > 0 ? P2 : 0, v2.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        ref: unref(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: d
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      createVNode(unref(O), {
        as: "style",
        nonce: unref(n)
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
var Is = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a2, { emit: t }) {
    const e = t, { injectCollection: n } = Me(), l = n(), s = Ct(aa), r = ref(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    watchEffect(() => {
      const c = l.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return onBeforeUnmount(() => i()), (c, p) => {
      var f;
      return openBlock(), createBlock(unref(O), mergeProps({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (f = c.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var Uy = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = Ct(aa), e = t.position === "item-aligned" ? $o() : void 0, { forwardRef: n, currentElement: l } = R2(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(Is, {
      key: 0,
      ref: unref(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var Gy = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = Ct(aa), e = t.position === "item-aligned" ? $o() : void 0, { forwardRef: n, currentElement: l } = R2(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(Is, {
      key: 0,
      ref: unref(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var qy = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = R2(), n = bt(), l = useSlots();
    return onBeforeMount(() => {
      var r;
      const s = !!Ua((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), onMounted(() => {
      n.valueElement = e;
    }), (s, r) => (openBlock(), createBlock(unref(O), {
      ref: unref(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref($s)((i = unref(n).modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(s.placeholder), 1)
          ], 64)) : renderSlot(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Yy = defineComponent({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(O), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Ts = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ["horizontal", "vertical"];
    function n(i) {
      return e.includes(i);
    }
    const l = computed(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = computed(
      () => l.value === "vertical" ? t.orientation : void 0
    ), r = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (openBlock(), createBlock(unref(O), mergeProps({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
});
var Gp = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(Ts, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qp(a2 = [], t, e) {
  const n = [...a2];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Rs(a2, t, e) {
  const s = 100 / (e - t) * (a2 - t);
  return Ht(s, 0, 100);
}
function Yp(a2, t) {
  return t > 2 ? `Value ${a2 + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a2] : void 0;
}
function Xp(a2, t) {
  if (a2.length === 1)
    return 0;
  const e = a2.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function Zp(a2, t, e) {
  const n = a2 / 2, s = Bo([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function Jp(a2) {
  return a2.slice(0, -1).map((t, e) => a2[e + 1] - t);
}
function Qp(a2, t) {
  if (t > 0) {
    const e = Jp(a2);
    return Math.min(...e) >= t;
  }
  return true;
}
function Bo(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function ef(a2) {
  return (String(a2).split(".")[1] || "").length;
}
function tf(a2, t) {
  const e = 10 ** t;
  return Math.round(a2 * e) / e;
}
var As = ["PageUp", "PageDown"];
var Os = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var ks = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var [Ms, Vs] = Q(["SliderVertical", "SliderHorizontal"]);
var Fs = defineComponent({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = sn();
    return (s, r) => (openBlock(), createBlock(unref(O), mergeProps({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : unref(As).concat(unref(Os)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), unref(l).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var af = defineComponent({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, dir: r, inverted: i } = toRefs(e), { forwardRef: u, currentElement: d } = R2(), c = ref(), p = computed(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(v2) {
      const g = c.value || d.value.getBoundingClientRect(), m2 = [0, g.width], w2 = p.value ? [s.value, l.value] : [l.value, s.value], C = Bo(m2, w2);
      return c.value = g, C(v2 - g.left);
    }
    return Vs({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v2, g) => (openBlock(), createBlock(Fs, {
      ref: unref(u),
      dir: unref(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: g[0] || (g[0] = (m2) => {
        const w2 = f(m2.clientX);
        n("slideStart", w2);
      }),
      onSlideMove: g[1] || (g[1] = (m2) => {
        const w2 = f(m2.clientX);
        n("slideMove", w2);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (m2) => {
        const w2 = p.value ? "from-left" : "from-right", C = unref(ks)[w2].includes(m2.key);
        n("stepKeyDown", m2, C ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (m2) => n("endKeyDown", m2)),
      onHomeKeyDown: g[5] || (g[5] = (m2) => n("homeKeyDown", m2))
    }, {
      default: withCtx(() => [
        renderSlot(v2.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var nf = defineComponent({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, inverted: r } = toRefs(e), { forwardRef: i, currentElement: u } = R2(), d = ref(), c = computed(() => !r.value);
    function p(f) {
      const v2 = d.value || u.value.getBoundingClientRect(), g = [0, v2.height], m2 = c.value ? [l.value, s.value] : [s.value, l.value], w2 = Bo(g, m2);
      return d.value = v2, w2(f - v2.top);
    }
    return Vs({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v2) => (openBlock(), createBlock(Fs, {
      ref: unref(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v2[0] || (v2[0] = (g) => {
        const m2 = p(g.clientY);
        n("slideStart", m2);
      }),
      onSlideMove: v2[1] || (v2[1] = (g) => {
        const m2 = p(g.clientY);
        n("slideMove", m2);
      }),
      onSlideEnd: v2[2] || (v2[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v2[3] || (v2[3] = (g) => {
        const m2 = c.value ? "from-bottom" : "from-top", w2 = unref(ks)[m2].includes(g.key);
        n("stepKeyDown", g, w2 ? -1 : 1);
      }),
      onEndKeyDown: v2[4] || (v2[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: v2[5] || (v2[5] = (g) => n("homeKeyDown", g))
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var of = ["value", "name", "disabled", "step"];
var [sn, lf] = Q("SliderRoot");
var Xy = defineComponent({
  inheritAttrs: false,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: false },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = toRefs(e), p = be(c), { forwardRef: f, currentElement: v2 } = R2(), g = Je(v2);
    ba();
    const m2 = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), w2 = ref(0), C = ref(m2.value);
    function D(T) {
      const M = Xp(m2.value, T);
      P2(T, M);
    }
    function h2(T) {
      P2(T, w2.value);
    }
    function E() {
      const T = C.value[w2.value];
      m2.value[w2.value] !== T && n("valueCommit", toRaw(m2.value));
    }
    function P2(T, M, { commit: V2 } = { commit: false }) {
      var ee;
      const A2 = ef(r.value), F = tf(Math.round((T - l.value) / r.value) * r.value + l.value, A2), U = Ht(F, l.value, s.value), W2 = qp(m2.value, U, M);
      if (Qp(W2, i.value * r.value)) {
        w2.value = W2.indexOf(U);
        const L = String(W2) !== String(m2.value);
        L && V2 && n("valueCommit", W2), L && ((ee = B.value[w2.value]) == null || ee.focus(), m2.value = W2);
      }
    }
    const B = ref([]);
    return lf({
      modelValue: m2,
      valueIndexToChangeRef: w2,
      thumbElements: B,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (T, M) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Ca), null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(u) === "horizontal" ? af : nf), mergeProps(T.$attrs, {
            ref: unref(f),
            "as-child": T.asChild,
            as: T.as,
            min: unref(l),
            max: unref(s),
            dir: unref(p),
            inverted: T.inverted,
            "aria-disabled": unref(d),
            "data-disabled": unref(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              unref(d) || (C.value = unref(m2));
            }),
            onSlideStart: M[1] || (M[1] = (V2) => !unref(d) && D(V2)),
            onSlideMove: M[2] || (M[2] = (V2) => !unref(d) && h2(V2)),
            onSlideEnd: M[3] || (M[3] = (V2) => !unref(d) && E()),
            onHomeKeyDown: M[4] || (M[4] = (V2) => !unref(d) && P2(unref(l), 0, { commit: true })),
            onEndKeyDown: M[5] || (M[5] = (V2) => !unref(d) && P2(unref(s), unref(m2).length - 1, { commit: true })),
            onStepKeyDown: M[6] || (M[6] = (V2, A2) => {
              if (!unref(d)) {
                const W2 = unref(As).includes(V2.key) || V2.shiftKey && unref(Os).includes(V2.key) ? 10 : 1, ee = w2.value, L = unref(m2)[ee], G2 = unref(r) * W2 * A2;
                P2(L + G2, ee, { commit: true });
              }
            })
          }), {
            default: withCtx(() => [
              renderSlot(T.$slots, "default", { modelValue: unref(m2) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      unref(g) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(m2), (V2, A2) => (openBlock(), createElementBlock("input", {
        key: A2,
        value: V2,
        type: "number",
        style: { display: "none" },
        name: T.name ? T.name + (unref(m2).length > 1 ? "[]" : "") : void 0,
        disabled: unref(d),
        step: unref(r)
      }, null, 8, of))), 128)) : createCommentVNode("", true)
    ], 64));
  }
});
var sf = defineComponent({
  inheritAttrs: false,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = sn(), n = Ms(), { forwardRef: l, currentElement: s } = R2(), r = computed(() => {
      var v2, g;
      return (g = (v2 = e.modelValue) == null ? void 0 : v2.value) == null ? void 0 : g[t.index];
    }), i = computed(() => r.value === void 0 ? 0 : Rs(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = computed(() => {
      var v2, g;
      return Yp(t.index, ((g = (v2 = e.modelValue) == null ? void 0 : v2.value) == null ? void 0 : g.length) ?? 0);
    }), d = kl(s), c = computed(() => d[n.size].value), p = computed(() => c.value ? Zp(c.value, i.value, n.direction) : 0), f = ja();
    return onMounted(() => {
      e.thumbElements.value.push(s.value);
    }), onUnmounted(() => {
      const v2 = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(v2, 1);
    }), (v2, g) => (openBlock(), createBlock(unref(Zt), null, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(v2.$attrs, {
          ref: unref(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: unref(e).disabled.value ? void 0 : 0,
          "aria-label": v2.$attrs["aria-label"] || u.value,
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "data-orientation": unref(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": unref(e).min.value,
          "aria-valuemax": unref(e).max.value,
          "aria-orientation": unref(e).orientation.value,
          "as-child": v2.asChild,
          as: v2.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [unref(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !unref(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: g[0] || (g[0] = () => {
            unref(e).valueIndexToChangeRef.value = v2.index;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
});
var Zy = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { getItems: e } = Jt(), { forwardRef: n, currentElement: l } = R2(), s = computed(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (openBlock(), createBlock(sf, mergeProps({ ref: unref(n) }, t, { index: s.value }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
});
var Jy = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = sn();
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
});
var Qy = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = sn(), e = Ms();
    R2();
    const n = computed(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Rs(u, t.min.value, t.max.value)
      );
    }), l = computed(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = computed(() => 100 - Math.max(...n.value));
    return (r, i) => (openBlock(), createBlock(unref(O), {
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: normalizeStyle({
        [unref(e).startEdge]: `${l.value}%`,
        [unref(e).endEdge]: `${s.value}%`
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
var An = null;
var St = null;
function rf(a2, t) {
  if (t) {
    const e = (t & js) !== 0, n = (t & Us) !== 0, l = (t & Gs) !== 0, s = (t & qs) !== 0;
    if (e)
      return l ? "se-resize" : s ? "ne-resize" : "e-resize";
    if (n)
      return l ? "sw-resize" : s ? "nw-resize" : "w-resize";
    if (l)
      return "s-resize";
    if (s)
      return "n-resize";
  }
  switch (a2) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function Ls() {
  St !== null && (document.head.removeChild(St), An = null, St = null);
}
function Sn(a2, t) {
  const e = rf(a2, t);
  An !== e && (An = e, St === null && (St = document.createElement("style"), document.head.appendChild(St)), St.innerHTML = `*{cursor: ${e}!important;}`);
}
function uf({
  defaultSize: a2,
  dragState: t,
  layout: e,
  panelData: n,
  panelIndex: l,
  precision: s = 3
}) {
  const r = e[l];
  let i;
  return r == null ? i = a2 !== void 0 ? a2.toPrecision(s) : "1" : n.length === 1 ? i = "1" : i = r.toPrecision(s), {
    flexBasis: 0,
    flexGrow: i,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Ns(a2) {
  return a2.type === "keydown";
}
function zs(a2) {
  return a2.type.startsWith("mouse");
}
function Ks(a2) {
  return a2.type.startsWith("touch");
}
function rn(a2) {
  if (zs(a2))
    return {
      x: a2.clientX,
      y: a2.clientY
    };
  if (Ks(a2)) {
    const t = a2.touches[0];
    if (t && t.clientX && t.clientY)
      return {
        x: t.clientX,
        y: t.clientY
      };
  }
  return {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY
  };
}
function Hs(a2, t) {
  const e = a2 === "horizontal", { x: n, y: l } = rn(t);
  return e ? n : l;
}
function df(a2, t, e) {
  return a2.x < t.x + t.width && a2.x + a2.width > t.x && a2.y < t.y + t.height && a2.y + a2.height > t.y;
}
function fe(a2, t = "Assertion failed!") {
  if (!a2)
    throw console.error(t), new Error(t);
}
function cf(a2, t) {
  if (a2 === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: tl(a2),
    b: tl(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a2 = e.a.pop(), t = e.b.pop(), n = a2;
  fe(n);
  const l = {
    a: el(Qo(e.a)),
    b: el(Qo(e.b))
  };
  if (l.a === l.b) {
    const s = n.childNodes, r = {
      a: e.a.at(-1),
      b: e.b.at(-1)
    };
    let i = s.length;
    for (; i--; ) {
      const u = s[i];
      if (u === r.a)
        return 1;
      if (u === r.b)
        return -1;
    }
  }
  return Math.sign(l.a - l.b);
}
var pf = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function ff(a2) {
  const t = getComputedStyle(Ws(a2)).display;
  return t === "flex" || t === "inline-flex";
}
function vf(a2) {
  const t = getComputedStyle(a2);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || ff(a2)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || pf.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Qo(a2) {
  let t = a2.length;
  for (; t--; ) {
    const e = a2[t];
    if (fe(e), vf(e))
      return e;
  }
  return null;
}
function el(a2) {
  return a2 && Number(getComputedStyle(a2).zIndex) || 0;
}
function tl(a2) {
  const t = [];
  for (; a2; )
    t.push(a2), a2 = Ws(a2);
  return t;
}
function Ws(a2) {
  var t;
  return a2.parentNode instanceof DocumentFragment && ((t = a2.parentNode) == null ? void 0 : t.host) || a2.parentNode;
}
var js = 1;
var Us = 2;
var Gs = 4;
var qs = 8;
function mf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var hf = mf() === "coarse";
var ft = [];
var un = false;
var ct = /* @__PURE__ */ new Map();
var dn = /* @__PURE__ */ new Map();
var ca = /* @__PURE__ */ new Set();
function yf(a2, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ct.get(s) ?? 0;
  return ct.set(s, i + 1), ca.add(r), za(), function() {
    dn.delete(a2), ca.delete(r);
    const d = ct.get(s) ?? 1;
    ct.set(s, d - 1), za(), Ls(), d === 1 && ct.delete(s);
  };
}
function Ta(a2) {
  const { target: t } = a2, { x: e, y: n } = rn(a2);
  un = true, Io({ target: t, x: e, y: n }), za(), ft.length > 0 && (To("down", a2), a2.preventDefault());
}
function it(a2) {
  const { x: t, y: e } = rn(a2);
  if (!un) {
    const { target: n } = a2;
    Io({ target: n, x: t, y: e });
  }
  To("move", a2), Ys(), ft.length > 0 && a2.preventDefault();
}
function ut(a2) {
  const { target: t } = a2, { x: e, y: n } = rn(a2);
  dn.clear(), un = false, ft.length > 0 && a2.preventDefault(), To("up", a2), Io({ target: t, x: e, y: n }), Ys(), za();
}
function Io({
  target: a2,
  x: t,
  y: e
}) {
  ft.splice(0);
  let n = null;
  a2 instanceof HTMLElement && (n = a2), ca.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: c, top: p } = i, f = hf ? r.coarse : r.fine;
    if (t >= d - f && t <= c + f && e >= p - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && cf(n, s) > 0) {
        let g = n, m2 = false;
        for (; g && !g.contains(s); ) {
          if (df(
            g.getBoundingClientRect(),
            i
          )) {
            m2 = true;
            break;
          }
          g = g.parentElement;
        }
        if (m2)
          return;
      }
      ft.push(l);
    }
  });
}
function En(a2, t) {
  dn.set(a2, t);
}
function Ys() {
  let a2 = false, t = false;
  ft.forEach((n) => {
    const { direction: l } = n;
    l.value === "horizontal" ? a2 = true : t = true;
  });
  let e = 0;
  dn.forEach((n) => {
    e |= n;
  }), a2 && t ? Sn("intersection", e) : a2 ? Sn("horizontal", e) : t ? Sn("vertical", e) : Ls();
}
function za() {
  ct.forEach((a2, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ut), e.removeEventListener("mousedown", Ta), e.removeEventListener("mouseleave", it), e.removeEventListener("mousemove", it), e.removeEventListener("touchmove", it), e.removeEventListener("touchstart", Ta);
  }), window.removeEventListener("mouseup", ut), window.removeEventListener("touchcancel", ut), window.removeEventListener("touchend", ut), ca.size > 0 && (un ? (ft.length > 0 && ct.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("contextmenu", ut), e.addEventListener("mouseleave", it), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: false
    }));
  }), window.addEventListener("mouseup", ut), window.addEventListener("touchcancel", ut), window.addEventListener("touchend", ut)) : ct.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("mousedown", Ta), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: false
    }), e.addEventListener("touchstart", Ta));
  }));
}
function To(a2, t) {
  ca.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = ft.includes(e);
    n(a2, l, t);
  });
}
var Ro = 10;
function pa(a2, t, e = Ro) {
  a2 = Number.parseFloat(a2.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a2 - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Ve(a2, t, e) {
  return pa(a2, t, e) === 0;
}
function Nt({
  panelConstraints: a2,
  panelIndex: t,
  size: e
}) {
  const n = a2[t];
  fe(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (pa(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      pa(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(Ro)), e;
}
function Ra(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function la({
  delta: a2,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Ve(a2, 0))
    return t;
  const s = [...t], [r, i] = n;
  fe(r != null), fe(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const c = a2 < 0 ? i : r, p = e[c];
      if (fe(p), p.collapsible) {
        const f = t[c];
        fe(f != null);
        const v2 = e[c];
        fe(v2);
        const { collapsedSize: g = 0, minSize: m2 = 0 } = v2;
        if (Ve(f, g)) {
          const w2 = m2 - f;
          pa(w2, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - w2 : w2);
        }
      }
    }
    {
      const c = a2 < 0 ? r : i, p = e[c];
      fe(p);
      const { collapsible: f } = p;
      if (f) {
        const v2 = t[c];
        fe(v2 != null);
        const g = e[c];
        fe(g);
        const { collapsedSize: m2 = 0, minSize: w2 = 0 } = g;
        if (Ve(v2, w2)) {
          const C = v2 - m2;
          pa(C, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - C : C);
        }
      }
    }
  }
  {
    const c = a2 < 0 ? 1 : -1;
    let p = a2 < 0 ? i : r, f = 0;
    for (; ; ) {
      const g = t[p];
      fe(g != null);
      const w2 = Nt({
        panelConstraints: e,
        panelIndex: p,
        size: 100
      }) - g;
      if (f += w2, p += c, p < 0 || p >= e.length)
        break;
    }
    const v2 = Math.min(Math.abs(a2), Math.abs(f));
    a2 = a2 < 0 ? 0 - v2 : v2;
  }
  {
    let p = a2 < 0 ? r : i;
    for (; p >= 0 && p < e.length; ) {
      const f = Math.abs(a2) - Math.abs(u), v2 = t[p];
      fe(v2 != null);
      const g = v2 - f, m2 = Nt({
        panelConstraints: e,
        panelIndex: p,
        size: g
      });
      if (!Ve(v2, m2) && (u += v2 - m2, s[p] = m2, u.toPrecision(3).localeCompare(Math.abs(a2).toPrecision(3), void 0, {
        numeric: true
      }) >= 0))
        break;
      a2 < 0 ? p-- : p++;
    }
  }
  if (Ve(u, 0))
    return t;
  {
    const c = a2 < 0 ? i : r, p = t[c];
    fe(p != null);
    const f = p + u, v2 = Nt({
      panelConstraints: e,
      panelIndex: c,
      size: f
    });
    if (s[c] = v2, !Ve(v2, f)) {
      let g = f - v2, w2 = a2 < 0 ? i : r;
      for (; w2 >= 0 && w2 < e.length; ) {
        const C = s[w2];
        fe(C != null);
        const D = C + g, h2 = Nt({
          panelConstraints: e,
          panelIndex: w2,
          size: D
        });
        if (Ve(C, h2) || (g -= h2 - C, s[w2] = h2), Ve(g, 0))
          break;
        a2 > 0 ? w2-- : w2++;
      }
    }
  }
  const d = s.reduce((c, p) => p + c, 0);
  return Ve(d, 100) ? s : t;
}
function Xs(a2, t = document) {
  var n;
  if (!ma)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a2)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a2}"]`
  );
  return e || null;
}
function cn(a2, t = document) {
  if (!ma)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a2}"]`);
  return e || null;
}
function Zs(a2, t, e = document) {
  return ma ? fa(a2, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function fa(a2, t = document) {
  return ma ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a2}"]`
    )
  ) : [];
}
function gf(a2, t, e, n = document) {
  var d, c;
  const l = cn(t, n), s = fa(a2, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((c = e[r + 1]) == null ? void 0 : c.id) ?? null;
  return [i, u];
}
function bf(a2, t, e, n, l) {
  const s = e === "horizontal", r = cn(t, l);
  fe(r);
  const i = r.getAttribute("data-panel-group-id");
  fe(i);
  const { initialCursorPosition: u } = n, d = Hs(e, a2), c = Xs(i, l);
  fe(c);
  const p = c.getBoundingClientRect(), f = s ? p.width : p.height;
  return (d - u) / f * 100;
}
function Cf(a2, t, e, n, l, s) {
  if (Ns(a2)) {
    const r = e === "horizontal";
    let i = 0;
    a2.shiftKey ? i = 100 : i = l ?? 10;
    let u = 0;
    switch (a2.key) {
      case "ArrowDown":
        u = r ? 0 : i;
        break;
      case "ArrowLeft":
        u = r ? -i : 0;
        break;
      case "ArrowRight":
        u = r ? i : 0;
        break;
      case "ArrowUp":
        u = r ? 0 : -i;
        break;
      case "End":
        u = 100;
        break;
      case "Home":
        u = -100;
        break;
    }
    return u;
  } else
    return n == null ? 0 : bf(
      a2,
      t,
      e,
      n,
      s
    );
}
function wf({
  layout: a2,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  fe(i != null), t.forEach((p, f) => {
    const { constraints: v2 } = p, { maxSize: g = 100, minSize: m2 = 0 } = v2;
    f === i ? (n = m2, l = g) : (s += m2, r += g);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), c = a2[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: c
  };
}
function _f({
  panelDataArray: a2
}) {
  const t = Array(a2.length), e = a2.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    fe(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    fe(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a2.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function oa(a2, t, e) {
  t.forEach((n, l) => {
    const s = a2[l];
    fe(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: c } = i, p = e[u];
    if (p == null || n !== p) {
      e[u] = n;
      const { onCollapse: f, onExpand: v2, onResize: g } = r;
      g && g(n, p), c && (f || v2) && (v2 && (p == null || p === d) && n !== d && v2(), f && (p == null || p !== d) && n === d && f());
    }
  });
}
function xf(a2, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a2(...l);
    }, t);
  };
}
function Js(a2, t, e) {
  const n = Zs(
    a2,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function Sf({
  layout: a2,
  panelConstraints: t
}) {
  const e = [...a2], n = e.reduce(
    (s, r) => s + r,
    0
  );
  if (e.length !== t.length)
    throw new Error(
      `Invalid ${t.length} panel layout: ${e.map((s) => `${s}%`).join(", ")}`
    );
  if (!Ve(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      fe(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    fe(r != null);
    const i = Nt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Ve(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      fe(r != null);
      const i = r + l, u = Nt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Ve(l, 0)))
        break;
    }
  return e;
}
function al(a2) {
  try {
    if (typeof localStorage < "u")
      a2.getItem = (t) => localStorage.getItem(t), a2.setItem = (t, e) => {
        localStorage.setItem(t, e);
      };
    else
      throw new TypeError("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), a2.getItem = () => null, a2.setItem = () => {
    };
  }
}
function Qs(a2) {
  return `radix-vue:${a2}`;
}
function er(a2) {
  return a2.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function tr(a2, t) {
  try {
    const e = Qs(a2), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function Ef(a2, t, e) {
  const n = tr(a2, e) ?? {}, l = er(t);
  return n[l] ?? null;
}
function Pf(a2, t, e, n, l) {
  const s = Qs(a2), r = er(t), i = tr(a2, l) ?? {};
  i[r] = {
    expandToSizes: Object.fromEntries(e.entries()),
    layout: n
  };
  try {
    l.setItem(s, JSON.stringify(i));
  } catch (u) {
    console.error(u);
  }
}
function Df({
  eagerValuesRef: a2,
  groupId: t,
  layout: e,
  panelDataArray: n,
  panelGroupElement: l,
  setLayout: s
}) {
  watchEffect((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = fa(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: c, valueMin: p, valueNow: f } = wf({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v2 = u[d];
      if (v2 != null) {
        const g = n[d];
        fe(g), v2.setAttribute("aria-controls", g.id), v2.setAttribute(
          "aria-valuemax",
          `${Math.round(c)}`
        ), v2.setAttribute(
          "aria-valuemin",
          `${Math.round(p)}`
        ), v2.setAttribute(
          "aria-valuenow",
          f != null ? `${Math.round(f)}` : ""
        );
      }
    }
    r(() => {
      u.forEach((d) => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-valuemax"), d.removeAttribute("aria-valuemin"), d.removeAttribute("aria-valuenow");
      });
    });
  }), watchEffect((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = a2.value;
    fe(u);
    const { panelDataArray: d } = u, c = Xs(t, i);
    fe(c != null, `No group found for id "${t}"`);
    const p = fa(t, i);
    fe(p);
    const f = p.map((v2) => {
      const g = v2.getAttribute("data-panel-resize-handle-id");
      fe(g);
      const [m2, w2] = gf(
        t,
        g,
        d,
        i
      );
      if (m2 == null || w2 == null)
        return () => {
        };
      const C = (D) => {
        if (!D.defaultPrevented)
          switch (D.key) {
            case "Enter": {
              D.preventDefault();
              const h2 = d.findIndex(
                (E) => E.id === m2
              );
              if (h2 >= 0) {
                const E = d[h2];
                fe(E);
                const P2 = e.value[h2], {
                  collapsedSize: B = 0,
                  collapsible: T,
                  minSize: M = 0
                } = E.constraints;
                if (P2 != null && T) {
                  const V2 = la({
                    delta: Ve(P2, B) ? M - B : B - P2,
                    layout: e.value,
                    panelConstraints: d.map(
                      (A2) => A2.constraints
                    ),
                    pivotIndices: Js(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== V2 && s(V2);
                }
              }
              break;
            }
          }
      };
      return v2.addEventListener("keydown", C), () => {
        v2.removeEventListener("keydown", C);
      };
    });
    r(() => {
      f.forEach((v2) => v2());
    });
  });
}
var $f = 100;
var sa = {
  getItem: (a2) => (al(sa), sa.getItem(a2)),
  setItem: (a2, t) => {
    al(sa), sa.setItem(a2, t);
  }
};
var [ar, Bf] = Q("PanelGroup");
var eg = defineComponent({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => sa },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = {}, { direction: s } = toRefs(e), r = he(e.id, "radix-vue-splitter-group"), i = be(), { forwardRef: u, currentElement: d } = R2(), c = ref(null), p = ref([]), f = ref({}), v2 = ref(/* @__PURE__ */ new Map()), g = ref(0), m2 = computed(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: c.value,
      id: r,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), w2 = ref({
      layout: p.value,
      panelDataArray: [],
      panelDataArrayChanged: false
    }), C = (N2) => p.value = N2;
    Df({
      eagerValuesRef: w2,
      groupId: r,
      layout: p,
      panelDataArray: w2.value.panelDataArray,
      setLayout: C,
      panelGroupElement: d
    }), watchEffect(() => {
      const { panelDataArray: N2 } = w2.value, { autoSaveId: z2 } = e;
      if (z2) {
        if (p.value.length === 0 || p.value.length !== N2.length)
          return;
        let Y = l[z2];
        Y || (Y = xf(
          Pf,
          $f
        ), l[z2] = Y);
        const K = [...N2], J2 = new Map(
          v2.value
        );
        Y(
          z2,
          K,
          J2,
          p.value,
          e.storage
        );
      }
    });
    function D(N2, z2) {
      const { panelDataArray: Y } = w2.value, K = L(Y, N2);
      return uf({
        defaultSize: z2,
        dragState: c.value,
        layout: p.value,
        panelData: Y,
        panelIndex: K
      });
    }
    function h2(N2) {
      const { panelDataArray: z2 } = w2.value;
      z2.push(N2), z2.sort((Y, K) => {
        const J2 = Y.order, Z = K.order;
        return J2 == null && Z == null ? 0 : J2 == null ? -1 : Z == null ? 1 : J2 - Z;
      }), w2.value.panelDataArrayChanged = true;
    }
    watch(() => w2.value.panelDataArrayChanged, () => {
      if (w2.value.panelDataArrayChanged) {
        w2.value.panelDataArrayChanged = false;
        const { autoSaveId: N2, storage: z2 } = m2.value, { layout: Y, panelDataArray: K } = w2.value;
        let J2 = null;
        if (N2) {
          const re = Ef(N2, K, z2);
          re && (v2.value = new Map(
            Object.entries(re.expandToSizes)
          ), J2 = re.layout);
        }
        J2 === null && (J2 = _f({
          panelDataArray: K
        }));
        const Z = Sf({
          layout: J2,
          panelConstraints: K.map(
            (re) => re.constraints
          )
        });
        zr(Y, Z) || (C(Z), w2.value.layout = Z, n("layout", Z), oa(
          K,
          Z,
          f.value
        ));
      }
    });
    function E(N2) {
      return function(Y) {
        Y.preventDefault();
        const K = d.value;
        if (!K)
          return () => null;
        const { direction: J2, dragState: Z, id: re, keyboardResizeBy: X } = m2.value, { layout: se, panelDataArray: pe } = w2.value, { initialLayout: _e } = Z ?? {}, Se = Js(
          re,
          N2,
          K
        );
        let ye = Cf(
          Y,
          N2,
          J2,
          Z,
          X,
          K
        );
        if (ye === 0)
          return;
        const de = J2 === "horizontal";
        i.value === "rtl" && de && (ye = -ye);
        const Ie = pe.map((wt) => wt.constraints), Oe = la({
          delta: ye,
          layout: _e ?? se,
          panelConstraints: Ie,
          pivotIndices: Se,
          trigger: Ns(Y) ? "keyboard" : "mouse-or-touch"
        }), ze = !Ra(se, Oe);
        (zs(Y) || Ks(Y)) && g.value !== ye && (g.value = ye, ze ? En(N2, 0) : de ? En(
          N2,
          ye < 0 ? js : Us
        ) : En(
          N2,
          ye < 0 ? Gs : qs
        )), ze && (C(Oe), w2.value.layout = Oe, n("layout", Oe), oa(
          pe,
          Oe,
          f.value
        ));
      };
    }
    function P2(N2, z2) {
      const { layout: Y, panelDataArray: K } = w2.value, J2 = K.map((_e) => _e.constraints), { panelSize: Z, pivotIndices: re } = G2(
        K,
        N2,
        Y
      );
      fe(Z != null);
      const se = L(K, N2) === K.length - 1 ? Z - z2 : z2 - Z, pe = la({
        delta: se,
        layout: Y,
        panelConstraints: J2,
        pivotIndices: re,
        trigger: "imperative-api"
      });
      Ra(Y, pe) || (C(pe), w2.value.layout = pe, n("layout", pe), oa(
        K,
        pe,
        f.value
      ));
    }
    function B(N2, z2) {
      const { layout: Y, panelDataArray: K } = w2.value, J2 = L(K, N2);
      K[J2] = N2, w2.value.panelDataArrayChanged = true;
      const {
        collapsedSize: Z = 0,
        collapsible: re
      } = z2, {
        collapsedSize: X = 0,
        collapsible: se,
        maxSize: pe = 100,
        minSize: _e = 0
      } = N2.constraints, { panelSize: Se } = G2(
        K,
        N2,
        Y
      );
      Se !== null && (re && se && Se === Z ? Z !== X && P2(N2, X) : Se < _e ? P2(N2, _e) : Se > pe && P2(N2, pe));
    }
    function T(N2, z2) {
      const { direction: Y } = m2.value, { layout: K } = w2.value;
      if (!d.value)
        return;
      const J2 = cn(
        N2,
        d.value
      );
      fe(J2);
      const Z = Hs(
        Y,
        z2
      );
      c.value = {
        dragHandleId: N2,
        dragHandleRect: J2.getBoundingClientRect(),
        initialCursorPosition: Z,
        initialLayout: K
      };
    }
    function M() {
      c.value = null;
    }
    function V2(N2) {
      const { panelDataArray: z2 } = w2.value, Y = L(z2, N2);
      Y >= 0 && (z2.splice(Y, 1), delete f.value[N2.id], w2.value.panelDataArrayChanged = true);
    }
    function A2(N2) {
      const { layout: z2, panelDataArray: Y } = w2.value;
      if (N2.constraints.collapsible) {
        const K = Y.map(
          (X) => X.constraints
        ), {
          collapsedSize: J2 = 0,
          panelSize: Z,
          pivotIndices: re
        } = G2(Y, N2, z2);
        if (fe(
          Z != null,
          `Panel size not found for panel "${N2.id}"`
        ), Z !== J2) {
          v2.value.set(N2.id, Z);
          const se = L(Y, N2) === Y.length - 1 ? Z - J2 : J2 - Z, pe = la({
            delta: se,
            layout: z2,
            panelConstraints: K,
            pivotIndices: re,
            trigger: "imperative-api"
          });
          Ra(z2, pe) || (C(pe), w2.value.layout = pe, n("layout", pe), oa(
            Y,
            pe,
            f.value
          ));
        }
      }
    }
    function F(N2) {
      const { layout: z2, panelDataArray: Y } = w2.value;
      if (N2.constraints.collapsible) {
        const K = Y.map(
          (se) => se.constraints
        ), {
          collapsedSize: J2 = 0,
          panelSize: Z,
          minSize: re = 0,
          pivotIndices: X
        } = G2(Y, N2, z2);
        if (Z === J2) {
          const se = v2.value.get(
            N2.id
          ), pe = se != null && se >= re ? se : re, Se = L(Y, N2) === Y.length - 1 ? Z - pe : pe - Z, ye = la({
            delta: Se,
            layout: z2,
            panelConstraints: K,
            pivotIndices: X,
            trigger: "imperative-api"
          });
          Ra(z2, ye) || (C(ye), w2.value.layout = ye, n("layout", ye), oa(
            Y,
            ye,
            f.value
          ));
        }
      }
    }
    function U(N2) {
      const { layout: z2, panelDataArray: Y } = w2.value, { panelSize: K } = G2(Y, N2, z2);
      return fe(
        K != null,
        `Panel size not found for panel "${N2.id}"`
      ), K;
    }
    function W2(N2) {
      const { layout: z2, panelDataArray: Y } = w2.value, {
        collapsedSize: K = 0,
        collapsible: J2,
        panelSize: Z
      } = G2(Y, N2, z2);
      return J2 === true && Z === K;
    }
    function ee(N2) {
      const { layout: z2, panelDataArray: Y } = w2.value, {
        collapsedSize: K = 0,
        collapsible: J2,
        panelSize: Z
      } = G2(Y, N2, z2);
      return fe(
        Z != null,
        `Panel size not found for panel "${N2.id}"`
      ), !J2 || Z > K;
    }
    Bf({
      direction: s,
      dragState: c.value,
      groupId: r,
      reevaluatePanelConstraints: B,
      registerPanel: h2,
      registerResizeHandle: E,
      resizePanel: P2,
      startDragging: T,
      stopDragging: M,
      unregisterPanel: V2,
      panelGroupElement: d,
      collapsePanel: A2,
      expandPanel: F,
      isPanelCollapsed: W2,
      isPanelExpanded: ee,
      getPanelSize: U,
      getPanelStyle: D
    });
    function L(N2, z2) {
      return N2.findIndex(
        (Y) => Y === z2 || Y.id === z2.id
      );
    }
    function G2(N2, z2, Y) {
      const K = L(N2, z2), Z = K === N2.length - 1 ? [K - 1, K] : [K, K + 1], re = Y[K];
      return {
        ...z2.constraints,
        panelSize: re,
        pivotIndices: Z
      };
    }
    return (N2, z2) => (openBlock(), createBlock(unref(O), {
      ref: unref(u),
      as: N2.as,
      "as-child": N2.asChild,
      style: normalizeStyle({
        display: "flex",
        flexDirection: unref(s) === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": unref(s),
      "data-panel-group-id": unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(N2.$slots, "default", { layout: p.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "style", "data-orientation", "data-panel-group-id"]));
  }
});
var tg = defineComponent({
  __name: "SplitterPanel",
  props: {
    collapsedSize: {},
    collapsible: { type: Boolean },
    defaultSize: {},
    id: {},
    maxSize: {},
    minSize: {},
    order: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["collapse", "expand", "resize"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, s = ar();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: c, resizePanel: p, groupId: f, reevaluatePanelConstraints: v2, registerPanel: g, unregisterPanel: m2 } = s, w2 = he(n.id, "radix-vue-splitter-panel"), C = computed(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...P2) => l("resize", ...P2)
      },
      constraints: {
        collapsedSize: n.collapsedSize && Number.parseFloat(n.collapsedSize.toFixed(Ro)),
        collapsible: n.collapsible,
        defaultSize: n.defaultSize,
        /** Panel id (unique within group); falls back to useId when not provided */
        /** Panel id (unique within group); falls back to useId when not provided */
        maxSize: n.maxSize,
        minSize: n.minSize
      },
      id: w2,
      idIsFromProps: n.id !== void 0,
      order: n.order
    }));
    watch(() => C.value.constraints, (P2, B) => {
      (B.collapsedSize !== P2.collapsedSize || B.collapsible !== P2.collapsible || B.maxSize !== P2.maxSize || B.minSize !== P2.minSize) && v2(C.value, B);
    }, { deep: true }), onMounted(() => {
      const P2 = C.value;
      g(P2), onUnmounted(() => {
        m2(P2);
      });
    });
    const D = computed(() => d(C.value, n.defaultSize)), h2 = computed(() => c(C.value)), E = computed(() => !h2.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(C.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(C.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(C.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (P2) => {
        p(C.value, P2);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: h2,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P2, B) => (openBlock(), createBlock(unref(O), {
      id: unref(w2),
      style: normalizeStyle(D.value),
      as: P2.as,
      "as-child": P2.asChild,
      "data-panel": "",
      "data-panel-collapsible": P2.collapsible || void 0,
      "data-panel-group-id": unref(f),
      "data-panel-id": unref(w2),
      "data-panel-size": Number.parseFloat(`${D.value.flexGrow}`).toFixed(1),
      "data-state": P2.collapsible ? h2.value ? "collapsed" : "expanded" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default", {
          isCollapsed: h2.value,
          isExpanded: E.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "as", "as-child", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function If({
  disabled: a2,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  watchEffect((l) => {
    const s = n.value;
    if (a2.value || e.value === null || s === null)
      return;
    const r = cn(t, s);
    if (r == null)
      return;
    const i = (u) => {
      var d;
      if (!u.defaultPrevented)
        switch (u.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            u.preventDefault(), (d = e.value) == null || d.call(e, u);
            break;
          }
          case "F6": {
            u.preventDefault();
            const c = r.getAttribute("data-panel-group-id");
            fe(c);
            const p = fa(
              c,
              s
            ), f = Zs(
              c,
              t,
              s
            );
            fe(f !== null);
            const v2 = u.shiftKey ? f > 0 ? f - 1 : p.length - 1 : f + 1 < p.length ? f + 1 : 0;
            p[v2].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
var ag = defineComponent({
  __name: "SplitterResizeHandle",
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: { default: 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["dragging"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), { disabled: r } = toRefs(e), i = ar();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: c,
      startDragging: p,
      stopDragging: f,
      panelGroupElement: v2
    } = i, g = he(e.id, "radix-vue-splitter-resize-handle"), m2 = ref("inactive"), w2 = ref(false), C = ref(null);
    return watch(r, () => {
      ma && (r.value ? C.value = null : C.value = c(g));
    }, { immediate: true }), watchEffect((D) => {
      var P2, B;
      if (r.value || C.value === null)
        return;
      const h2 = s.value;
      if (!h2)
        return;
      fe(h2);
      const E = (T, M, V2) => {
        var A2;
        if (M)
          switch (T) {
            case "down": {
              m2.value = "drag", p(g, V2), n("dragging", true);
              break;
            }
            case "move": {
              m2.value !== "drag" && (m2.value = "hover"), (A2 = C.value) == null || A2.call(C, V2);
              break;
            }
            case "up": {
              m2.value = "hover", f(), n("dragging", false);
              break;
            }
          }
        else
          m2.value = "inactive";
      };
      D(yf(
        g,
        h2,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((P2 = e.hitAreaMargins) == null ? void 0 : P2.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: ((B = e.hitAreaMargins) == null ? void 0 : B.fine) ?? 5
        },
        E
      ));
    }), If({
      disabled: r,
      resizeHandler: C,
      handleId: g,
      panelGroupElement: v2
    }), (D, h2) => (openBlock(), createBlock(unref(O), {
      id: unref(g),
      ref: unref(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      as: D.as,
      "as-child": D.asChild,
      role: "separator",
      "data-resize-handle": "",
      tabindex: D.tabindex,
      "data-state": m2.value,
      "data-disabled": unref(r) ? "" : void 0,
      "data-orientation": unref(u),
      "data-panel-group-id": unref(d),
      "data-resize-handle-active": m2.value === "drag" ? "pointer" : w2.value ? "keyboard" : void 0,
      "data-resize-handle-state": m2.value,
      "data-panel-resize-handle-enabled": !unref(r),
      "data-panel-resize-handle-id": unref(g),
      onBlur: h2[0] || (h2[0] = (E) => w2.value = false),
      onFocus: h2[1] || (h2[1] = (E) => w2.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
});
var Tf = {
  "aria-live": "polite",
  "aria-atomic": "true",
  role: "status",
  style: {
    transform: "translateX(-100%)",
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0
  }
};
var [Ao, Rf] = Q("StepperRoot");
var ng = defineComponent({
  __name: "StepperRoot",
  props: {
    defaultValue: { default: 1 },
    orientation: { default: "horizontal" },
    dir: {},
    modelValue: {},
    linear: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, orientation: s, linear: r } = toRefs(e), i = be(l);
    R2();
    const u = ref(/* @__PURE__ */ new Set()), d = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), c = computed(() => Array.from(u.value)), p = computed(() => d.value === 1), f = computed(() => d.value === c.value.length), v2 = computed(() => u.value.size);
    function g(h2) {
      h2 > v2.value || h2 < 1 || u.value.size && c.value[h2] && c.value[h2].getAttribute("disabled") || r.value && h2 > (d.value ?? 1) + 1 || (d.value = h2);
    }
    const m2 = ref(null), w2 = ref(null), C = computed(() => m2.value ? m2.value.getAttribute("disabled") === "" : true), D = computed(() => w2.value ? w2.value.getAttribute("disabled") === "" : true);
    return watch(d, async () => {
      await nextTick(() => {
        m2.value = c.value.length && d.value < c.value.length ? c.value[d.value] : null, w2.value = c.value.length && d.value > 1 ? c.value[d.value - 2] : null;
      });
    }), watch(c, async () => {
      await nextTick(() => {
        m2.value = c.value.length && d.value < c.value.length ? c.value[d.value] : null, w2.value = c.value.length && d.value > 1 ? c.value[d.value - 2] : null;
      });
    }), Rf({
      modelValue: d,
      changeModelValue: (h2) => {
        d.value = h2;
      },
      orientation: s,
      dir: i,
      linear: r,
      totalStepperItems: u
    }), (h2, E) => (openBlock(), createBlock(unref(O), {
      role: "group",
      "aria-label": "progress",
      as: h2.as,
      "as-child": h2.asChild,
      "data-linear": unref(r) ? "" : void 0,
      "data-orientation": h2.orientation
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default", {
          modelValue: unref(d),
          totalSteps: u.value.size,
          isNextDisabled: C.value,
          isPrevDisabled: D.value,
          isFirstStep: p.value,
          isLastStep: f.value,
          goToStep: g,
          nextStep: () => g((unref(d) ?? 1) + 1),
          prevStep: () => g((unref(d) ?? 1) - 1)
        }),
        createBaseVNode("div", Tf, " Step " + toDisplayString(unref(d)) + " of " + toDisplayString(u.value.size), 1)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
});
var [xa, Af] = Q("StepperItem");
var og = defineComponent({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { disabled: e, step: n, completed: l } = toRefs(t), { forwardRef: s } = R2(), r = Ao(), i = he(void 0, "radix-vue-stepper-item-title"), u = he(void 0, "radix-vue-stepper-item-description"), d = computed(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), c = computed(() => e.value ? false : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : true);
    return Af({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: c
    }), (p, f) => (openBlock(), createBlock(unref(O), {
      ref: unref(s),
      as: p.as,
      "as-child": p.asChild,
      "aria-current": d.value === "active" ? "true" : void 0,
      "data-state": d.value,
      disabled: unref(e) || !c.value ? "" : void 0,
      "data-disabled": unref(e) || !c.value ? "" : void 0,
      "data-orientation": unref(r).orientation.value
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default", { state: d.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-current", "data-state", "disabled", "data-disabled", "data-orientation"]));
  }
});
var lg = defineComponent({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = Ao(), e = xa(), n = Qe(), l = computed(() => Array.from(t.totalStepperItems.value));
    function s(d) {
      if (!e.disabled.value) {
        if (t.linear.value) {
          if ((e.step.value <= t.modelValue.value || e.step.value === t.modelValue.value + 1) && d.ctrlKey === false) {
            t.changeModelValue(e.step.value);
            return;
          }
        } else if (d.ctrlKey === false) {
          t.changeModelValue(e.step.value);
          return;
        }
        d.preventDefault();
      }
    }
    function r(d) {
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && Bt(d, document.activeElement, void 0, {
        itemsArray: l.value,
        focus: true,
        loop: false,
        arrowKeyOptions: t.orientation.value,
        dir: t.dir.value
      }));
    }
    const { forwardRef: i, currentElement: u } = R2();
    return onMounted(() => {
      t.totalStepperItems.value.add(u.value);
    }), onUnmounted(() => {
      t.totalStepperItems.value.delete(u.value);
    }), (d, c) => (openBlock(), createBlock(unref(O), {
      ref: unref(i),
      type: d.as === "button" ? "button" : void 0,
      as: d.as,
      "as-child": d.asChild,
      "data-state": unref(e).state.value,
      disabled: unref(e).disabled.value || !unref(e).isFocusable.value ? "" : void 0,
      "data-disabled": unref(e).disabled.value || !unref(e).isFocusable.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value,
      tabindex: unref(e).isFocusable.value ? 0 : -1,
      "aria-describedby": unref(e).descriptionId,
      "aria-labelledby": unref(e).titleId,
      onMousedown: withModifiers(s, ["left"]),
      onKeydown: withKeys(r, ["enter", "space", "left", "right", "up", "down"])
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child", "data-state", "disabled", "data-disabled", "data-orientation", "tabindex", "aria-describedby", "aria-labelledby"]));
  }
});
var sg = defineComponent({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = xa();
    return (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var rg = defineComponent({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a2) {
    const t = a2, e = xa();
    return R2(), (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var ig = defineComponent({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = xa();
    return R2(), (n, l) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode(" Step " + toDisplayString(unref(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var ug = defineComponent({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ao(), n = xa();
    return R2(), (l, s) => (openBlock(), createBlock(unref(Gp), mergeProps(t, {
      decorative: "",
      orientation: unref(e).orientation.value,
      "data-state": unref(n).state.value
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["orientation", "data-state"]));
  }
});
var Of = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"];
var [kf, Mf] = Q("SwitchRoot");
var dg = defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ne(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function r() {
      l.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = R2(), d = Je(u), c = computed(() => {
      var p;
      return e.id && u.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Mf({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (p, f) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(p.$attrs, {
        id: p.id,
        ref: unref(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": unref(s),
        "aria-required": p.required,
        "data-state": unref(s) ? "checked" : "unchecked",
        "data-disabled": unref(l) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: unref(l),
        onClick: r,
        onKeydown: withKeys(withModifiers(r, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default", { checked: unref(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      unref(d) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: unref(l),
        required: p.required,
        value: p.value,
        checked: !!unref(s),
        "data-state": unref(s) ? "checked" : "unchecked",
        "data-disabled": unref(l) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Of)) : createCommentVNode("", true)
    ], 64));
  }
});
var cg = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = kf();
    return R2(), (e, n) => {
      var l;
      return openBlock(), createBlock(unref(O), {
        "data-state": (l = unref(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": unref(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
});
var [pn, Vf] = Q("TabsRoot");
var pg = defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { orientation: l, dir: s } = toRefs(e), r = be(s);
    R2();
    const i = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = ref();
    return Vf({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: he(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (openBlock(), createBlock(unref(O), {
      dir: unref(r),
      "data-orientation": unref(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
});
var fg = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { loop: e } = toRefs(t), { forwardRef: n, currentElement: l } = R2(), s = pn();
    return s.tabsList = l, (r, i) => (openBlock(), createBlock(unref(Ot), {
      "as-child": "",
      orientation: unref(s).orientation.value,
      dir: unref(s).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": unref(s).orientation.value
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function nr(a2, t) {
  return `${a2}-trigger-${t}`;
}
function or(a2, t) {
  return `${a2}-content-${t}`;
}
var vg = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), n = pn(), l = computed(() => nr(n.baseId, t.value)), s = computed(() => or(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value), i = ref(r.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d) => (openBlock(), createBlock(unref(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: c }) => [
        createVNode(unref(O), {
          id: s.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": unref(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !c.value,
          tabindex: "0",
          style: normalizeStyle({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: withCtx(() => [
            u.forceMount || r.value ? renderSlot(u.$slots, "default", { key: 0 }) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var mg = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), n = pn(), l = computed(() => nr(n.baseId, t.value)), s = computed(() => or(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(kt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: l.value,
          ref: unref(e),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": unref(n).orientation.value,
          onMousedown: u[0] || (u[0] = withModifiers((d) => {
            !i.disabled && d.ctrlKey === false ? unref(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = withKeys((d) => unref(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = unref(n).activationMode !== "manual";
            !r.value && !i.disabled && d && unref(n).changeModelValue(i.value);
          })
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
});
var hg = defineComponent({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = pn();
    R2();
    const n = ref(), l = ref({
      size: null,
      position: null
    });
    watch(() => [e.modelValue.value, e == null ? void 0 : e.dir.value], async () => {
      await nextTick(), s();
    }, { immediate: true }), Ze([e.tabsList, n], s);
    function s() {
      var r;
      n.value = (r = e.tabsList.value) == null ? void 0 : r.querySelector('[role="tab"][data-state="active"]'), n.value && (e.orientation.value === "horizontal" ? l.value = {
        size: n.value.offsetWidth,
        position: n.value.offsetLeft
      } : l.value = {
        size: n.value.offsetHeight,
        position: n.value.offsetTop
      });
    }
    return (r, i) => typeof l.value.size == "number" ? (openBlock(), createBlock(unref(O), mergeProps({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : createCommentVNode("", true);
  }
});
var [fn, Ff] = Q("TagsInputRoot");
var yg = defineComponent({
  __name: "TagsInputRoot",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: { default: "," },
    dir: {},
    max: { default: 0 },
    required: { type: Boolean },
    name: {},
    id: {},
    convertValue: {},
    displayValue: { type: Function, default: (a2) => a2.toString() },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "invalid"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: c, addOnTab: p } = toRefs(e), f = be(d), v2 = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: true,
      deep: true
    }), { forwardRef: g, currentElement: m2 } = R2(), { focused: w2 } = gi(m2), C = Je(m2), { getItems: D } = ba(), h2 = ref(), E = ref(false);
    return Ff({
      modelValue: v2,
      onAddValue: (P2) => {
        const B = v2.value.length > 0 && typeof v2.value[0] == "object", T = v2.value.length > 0 && typeof e.defaultValue[0] == "object";
        if ((B || T) && typeof e.convertValue != "function")
          throw new Error("You must provide a `convertValue` function when using objects as values.");
        const M = e.convertValue ? e.convertValue(P2) : P2;
        if (v2.value.length >= i.value && i.value)
          return n("invalid", M), false;
        if (e.duplicate)
          return v2.value.push(M), true;
        if (v2.value.includes(M))
          E.value = true;
        else
          return v2.value.push(M), true;
        return n("invalid", M), false;
      },
      onRemoveValue: (P2) => {
        P2 !== -1 && v2.value.splice(P2, 1);
      },
      onInputKeydown: (P2) => {
        const B = P2.target, T = D().map((V2) => V2.ref).filter((V2) => V2.dataset.disabled !== "");
        if (!T.length)
          return;
        const M = T.at(-1);
        switch (P2.key) {
          case "Delete":
          case "Backspace": {
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (h2.value) {
              const V2 = T.findIndex((A2) => A2 === h2.value);
              v2.value.splice(V2, 1), h2.value = h2.value === M ? T.at(V2 - 1) : T.at(V2 + 1), P2.preventDefault();
            } else P2.key === "Backspace" && (h2.value = M, P2.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const V2 = P2.key === "ArrowRight" && f.value === "ltr" || P2.key === "ArrowLeft" && f.value === "rtl", A2 = !V2;
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (A2 && !h2.value)
              h2.value = M, P2.preventDefault();
            else if (V2 && M && h2.value === M)
              h2.value = void 0, P2.preventDefault();
            else if (h2.value) {
              const F = Bt(P2, h2.value, void 0, {
                itemsArray: T,
                loop: false,
                dir: f.value
              });
              F && (h2.value = F), P2.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            h2.value && P2.preventDefault();
            break;
          }
          default:
            h2.value = void 0;
        }
      },
      selectedElement: h2,
      isInvalidInput: E,
      addOnPaste: l,
      addOnBlur: c,
      addOnTab: p,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P2, B) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(g),
          dir: unref(f),
          as: P2.as,
          "as-child": P2.asChild,
          "data-invalid": E.value ? "" : void 0,
          "data-disabled": unref(s) ? "" : void 0,
          "data-focused": unref(w2) ? "" : void 0
        }, {
          default: withCtx(() => [
            renderSlot(P2.$slots, "default", { modelValue: unref(v2) }),
            unref(C) && P2.name ? (openBlock(), createBlock(unref(to), {
              key: 0,
              name: P2.name,
              value: unref(v2),
              required: P2.required,
              disabled: unref(s)
            }, null, 8, ["name", "value", "required", "disabled"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
});
var gg = defineComponent({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = fn(), { forwardRef: n, currentElement: l } = R2();
    function s(c) {
      if (!e.addOnBlur.value)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = "");
    }
    function r(c) {
      e.addOnTab.value && i(c);
    }
    async function i(c) {
      if (await nextTick(), c.defaultPrevented)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = ""), c.preventDefault();
    }
    function u(c) {
      e.isInvalidInput.value = false;
      const p = e.delimiter.value;
      if (p === c.data) {
        const f = c.target;
        f.value = f.value.replaceAll(p, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(c) {
      if (e.addOnPaste.value) {
        c.preventDefault();
        const p = c.clipboardData;
        if (!p)
          return;
        const f = p.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((g) => {
          e.onAddValue(g);
        }) : e.onAddValue(f);
      }
    }
    return onMounted(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1);
    }), (c, p) => {
      var f;
      return openBlock(), createBlock(unref(O), {
        id: (f = unref(e).id) == null ? void 0 : f.value,
        ref: unref(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: c.as,
        "as-child": c.asChild,
        maxlength: c.maxLength,
        placeholder: c.placeholder,
        disabled: unref(e).disabled.value,
        "data-invalid": unref(e).isInvalidInput.value ? "" : void 0,
        onInput: u,
        onKeydown: [
          withKeys(i, ["enter"]),
          withKeys(r, ["tab"]),
          unref(e).onInputKeydown
        ],
        onBlur: s,
        onPaste: d
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
});
var [lr, Lf] = Q("TagsInputItem");
var bg = defineComponent({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { value: e } = toRefs(t), n = fn(), { forwardRef: l, currentElement: s } = R2(), r = computed(() => n.selectedElement.value === s.value), i = computed(() => t.disabled || n.disabled.value), u = Lf({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: computed(() => n.displayValue(e.value))
    });
    return (d, c) => (openBlock(), createBlock(unref(Zt), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": unref(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
var Cg = defineComponent({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = lr();
    return R2(), e.textId || (e.textId = he(void 0, "radix-vue-tags-input-item-text")), (n, l) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      id: unref(e).textId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(unref(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var wg = defineComponent({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = fn(), n = lr(), l = computed(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (openBlock(), createBlock(unref(O), mergeProps({ tabindex: "-1" }, t, {
      "aria-labelledby": unref(n).textId,
      "aria-current": unref(n).isSelected.value,
      "data-state": unref(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
});
var _g = defineComponent({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R2();
    const e = fn();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (openBlock(), createBlock(unref(O), mergeProps(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
});
var [vn, Nf] = Q("ToastProvider");
var xg = defineComponent({
  inheritAttrs: false,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(a2) {
    const t = a2, { label: e, duration: n, swipeDirection: l, swipeThreshold: s } = toRefs(t), r = ref(), i = ref(0), u = ref(false), d = ref(false);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Nf({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => renderSlot(c.$slots, "default");
  }
});
var zf = "toast.swipeStart";
var Kf = "toast.swipeMove";
var Hf = "toast.swipeCancel";
var Wf = "toast.swipeEnd";
var On = "toast.viewportPause";
var kn = "toast.viewportResume";
function Aa(a2, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
function nl(a2, t, e = 0) {
  const n = Math.abs(a2.x), l = Math.abs(a2.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function jf(a2) {
  return a2.nodeType === a2.ELEMENT_NODE;
}
function sr(a2) {
  const t = [];
  return Array.from(a2.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), jf(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...sr(n));
    }
  }), t;
}
var Uf = defineComponent({
  __name: "ToastAnnounce",
  setup(a2) {
    const t = vn(), e = pi(1e3), n = ref(false);
    return Il(() => {
      n.value = true;
    }), (l, s) => unref(e) || n.value ? (openBlock(), createBlock(unref(Xt), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t).label.value) + " ", 1),
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});
var [Gf, qf] = Q("ToastRoot");
var Yf = defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: false },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R2(), r = vn(), i = ref(null), u = ref(null), d = computed(() => e.duration || r.duration.value), c = ref(0), p = ref(d.value), f = ref(0), v2 = ref(d.value), g = Il(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v2.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function m2(D) {
      !D || D === Number.POSITIVE_INFINITY || qe && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(w2, D));
    }
    function w2() {
      var h2, E;
      ((h2 = s.value) == null ? void 0 : h2.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = false, n("close");
    }
    const C = computed(() => s.value ? sr(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return watchEffect((D) => {
      const h2 = r.viewport.value;
      if (h2) {
        const E = () => {
          m2(p.value), g.resume(), n("resume");
        }, P2 = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - B, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return h2.addEventListener(On, P2), h2.addEventListener(kn, E), () => {
          h2.removeEventListener(On, P2), h2.removeEventListener(kn, E);
        };
      }
    }), watch(() => [e.open, d.value], () => {
      p.value = d.value, e.open && !r.isClosePausedRef.value && m2(d.value);
    }, { immediate: true }), jn("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = true, w2());
    }), onMounted(() => {
      r.onToastAdd();
    }), onUnmounted(() => {
      r.onToastRemove();
    }), qf({ onClose: w2 }), (D, h2) => (openBlock(), createElementBlock(Fragment, null, [
      C.value ? (openBlock(), createBlock(Uf, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      unref(r).viewport.value ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: unref(r).viewport.value
      }, [
        createVNode(unref(O), mergeProps({
          ref: unref(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D.$attrs, {
          as: D.as,
          "as-child": D.asChild,
          "data-state": D.open ? "open" : "closed",
          "data-swipe-direction": unref(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: h2[0] || (h2[0] = withModifiers((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: h2[1] || (h2[1] = (E) => {
            if (!i.value) return;
            const P2 = E.clientX - i.value.x, B = E.clientY - i.value.y, T = !!u.value, M = ["left", "right"].includes(unref(r).swipeDirection.value), V2 = ["left", "up"].includes(unref(r).swipeDirection.value) ? Math.min : Math.max, A2 = M ? V2(0, P2) : 0, F = M ? 0 : V2(0, B), U = E.pointerType === "touch" ? 10 : 2, W2 = { x: A2, y: F }, ee = { originalEvent: E, delta: W2 };
            T ? (u.value = W2, unref(Aa)(unref(Kf), (L) => n("swipeMove", L), ee)) : unref(nl)(W2, unref(r).swipeDirection.value, U) ? (u.value = W2, unref(Aa)(unref(zf), (L) => n("swipeStart", L), ee), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P2) > U || Math.abs(B) > U) && (i.value = null);
          }),
          onPointerup: h2[2] || (h2[2] = (E) => {
            const P2 = u.value, B = E.target;
            if (B.hasPointerCapture(E.pointerId) && B.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P2) {
              const T = E.currentTarget, M = { originalEvent: E, delta: P2 };
              unref(nl)(P2, unref(r).swipeDirection.value, unref(r).swipeThreshold.value) ? unref(Aa)(unref(Wf), (V2) => n("swipeEnd", V2), M) : unref(Aa)(unref(Hf), (V2) => n("swipeCancel", V2), M), T == null || T.addEventListener("click", (V2) => V2.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(D.$slots, "default", {
              remaining: v2.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
});
var Sg = defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: true },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l } = R2(), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, i) => (openBlock(), createBlock(unref(Pe), {
      present: r.forceMount || unref(s)
    }, {
      default: withCtx(() => [
        createVNode(Yf, mergeProps({
          ref: unref(l),
          open: unref(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = false),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = false;
          })
        }), {
          default: withCtx(({ remaining: u, duration: d }) => [
            renderSlot(r.$slots, "default", {
              remaining: u,
              duration: d,
              open: unref(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var rr = defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
});
var Xf = defineComponent({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Gf(), { forwardRef: n } = R2();
    return (l, s) => (openBlock(), createBlock(rr, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(t, {
          ref: unref(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => unref(e).onClose())
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
});
var Eg = defineComponent({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    if (!a2.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = R2();
    return (n, l) => n.altText ? (openBlock(), createBlock(rr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(Xf, {
          ref: unref(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : createCommentVNode("", true);
  }
});
var ol = defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a2, { emit: t }) {
    const e = t, n = vn();
    return (l, s) => (openBlock(), createBlock(unref(Xt), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = unref(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Pg = defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a2) {
    const t = a2, { hotkey: e, label: n } = toRefs(t), { forwardRef: l, currentElement: s } = R2(), { createCollection: r } = Me(), i = r(s), u = vn(), d = computed(() => u.toastCount.value > 0), c = ref(), p = ref(), f = computed(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    jn(e.value, () => {
      s.value.focus();
    }), onMounted(() => {
      u.onViewportChange(s.value);
    }), watchEffect((g) => {
      const m2 = s.value;
      if (d.value && m2) {
        const w2 = () => {
          if (!u.isClosePausedRef.value) {
            const P2 = new CustomEvent(On);
            m2.dispatchEvent(P2), u.isClosePausedRef.value = true;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const P2 = new CustomEvent(kn);
            m2.dispatchEvent(P2), u.isClosePausedRef.value = false;
          }
        }, D = (P2) => {
          !m2.contains(P2.relatedTarget) && C();
        }, h2 = () => {
          m2.contains(document.activeElement) || C();
        }, E = (P2) => {
          var M, V2, A2;
          const B = P2.altKey || P2.ctrlKey || P2.metaKey;
          if (P2.key === "Tab" && !B) {
            const F = document.activeElement, U = P2.shiftKey;
            if (P2.target === m2 && U) {
              (M = c.value) == null || M.focus();
              return;
            }
            const L = v2({ tabbingDirection: U ? "backwards" : "forwards" }), G2 = L.findIndex((N2) => N2 === F);
            Oa(L.slice(G2 + 1)) ? P2.preventDefault() : U ? (V2 = c.value) == null || V2.focus() : (A2 = p.value) == null || A2.focus();
          }
        };
        m2.addEventListener("focusin", w2), m2.addEventListener("focusout", D), m2.addEventListener("pointermove", w2), m2.addEventListener("pointerleave", h2), m2.addEventListener("keydown", E), window.addEventListener("blur", w2), window.addEventListener("focus", C), g(() => {
          m2.removeEventListener("focusin", w2), m2.removeEventListener("focusout", D), m2.removeEventListener("pointermove", w2), m2.removeEventListener("pointerleave", h2), m2.removeEventListener("keydown", E), window.removeEventListener("blur", w2), window.removeEventListener("focus", C);
        });
      }
    });
    function v2({ tabbingDirection: g }) {
      const w2 = i.value.map((C) => {
        const D = [C, ...Jn(C)];
        return g === "forwards" ? D : D.reverse();
      });
      return (g === "forwards" ? w2.reverse() : w2).flat();
    }
    return (g, m2) => (openBlock(), createBlock(unref(Qi), {
      role: "region",
      "aria-label": typeof unref(n) == "string" ? unref(n).replace("{hotkey}", f.value) : unref(n)(f.value),
      tabindex: "-1",
      style: normalizeStyle({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: withCtx(() => [
        d.value ? (openBlock(), createBlock(ol, {
          key: 0,
          ref: (w2) => {
            c.value = unref($e)(w2);
          },
          onFocusFromOutsideViewport: m2[0] || (m2[0] = () => {
            const w2 = v2({
              tabbingDirection: "forwards"
            });
            unref(Oa)(w2);
          })
        }, null, 512)) : createCommentVNode("", true),
        createVNode(unref(O), mergeProps({
          ref: unref(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: withCtx(() => [
            renderSlot(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (openBlock(), createBlock(ol, {
          key: 1,
          ref: (w2) => {
            p.value = unref($e)(w2);
          },
          onFocusFromOutsideViewport: m2[1] || (m2[1] = () => {
            const w2 = v2({
              tabbingDirection: "backwards"
            });
            unref(Oa)(w2);
          })
        }, null, 512)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
});
var Dg = defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $g = defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zf = defineComponent({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = ne(e, "pressed", n, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function s() {
      l.value = !l.value;
    }
    const r = computed(() => l.value ? "on" : "off");
    return (i, u) => (openBlock(), createBlock(unref(O), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": unref(l),
      "data-state": r.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: s
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { pressed: unref(l) })
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
});
var [Jf, Qf] = Q("ToggleGroupRoot");
var ev = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    rovingFocus: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    orientation: {},
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = toRefs(e), u = be(i), { forwardRef: d } = R2(), { modelValue: c, changeModelValue: p, isSingle: f } = Ll(e, n);
    return Qf({
      isSingle: f,
      modelValue: c,
      changeModelValue: p,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v2, g) => (openBlock(), createBlock(resolveDynamicComponent(unref(s) ? unref(Ot) : unref(O)), {
      "as-child": "",
      orientation: unref(s) ? v2.orientation : void 0,
      dir: unref(u),
      loop: unref(s) ? unref(l) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(d),
          role: "group",
          "as-child": v2.asChild,
          as: v2.as
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default", { modelValue: unref(c) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var tv = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Jf(), n = computed(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = computed(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = computed(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R2();
    return (i, u) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).rovingFocus.value ? unref(kt) : unref(O)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: withCtx(() => [
        createVNode(unref(Zf), mergeProps(t, {
          ref: unref(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => unref(e).changeModelValue(i.value))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
});
var [ir, av] = Q("ToolbarRoot");
var Bg = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { orientation: e, dir: n } = toRefs(t), l = be(n), { forwardRef: s } = R2();
    return av({ orientation: e, dir: l }), (r, i) => (openBlock(), createBlock(unref(Ot), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(l),
      loop: r.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(s),
          role: "toolbar",
          "aria-orientation": unref(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var nv = defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2();
    return (n, l) => (openBlock(), createBlock(unref(kt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
});
var Ig = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2();
    return (n, l) => (openBlock(), createBlock(unref(kt), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(t, {
          ref: unref(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Tg = defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ir(), s = Re(n);
    return R2(), (r, i) => (openBlock(), createBlock(unref(ev), mergeProps({ ...e, ...unref(s) }, {
      "data-orientation": unref(l).orientation.value,
      dir: unref(l).dir.value,
      "roving-focus": false
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
});
var Rg = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2();
    return (n, l) => (openBlock(), createBlock(nv, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(tv), mergeProps(t, { ref: unref(e) }), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Ag = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ir();
    return R2(), (n, l) => (openBlock(), createBlock(Ts, {
      orientation: unref(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
});
var ur = "tooltip.open";
var [Oo, ov] = Q("TooltipProvider");
var Og = defineComponent({
  inheritAttrs: false,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: false }
  },
  setup(a2) {
    const t = a2, { delayDuration: e, skipDelayDuration: n, disableHoverableContent: l, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = toRefs(t);
    R2();
    const u = ref(true), d = ref(false), { start: c, stop: p } = Wn(() => {
      u.value = true;
    }, n, { immediate: false });
    return ov({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        p(), u.value = false;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (f, v2) => renderSlot(f.$slots, "default");
  }
});
var [mn, lv] = Q("TooltipRoot");
var kg = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R2();
    const l = Oo(), s = computed(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = computed(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = computed(() => e.disabled ?? l.disabled.value), u = computed(() => e.delayDuration ?? l.delayDuration.value), d = computed(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    watch(c, (h2) => {
      l.onClose && (h2 ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ur))) : l.onClose());
    });
    const p = ref(false), f = ref(), v2 = computed(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: m2 } = Wn(() => {
      p.value = true, c.value = true;
    }, u, { immediate: false });
    function w2() {
      m2(), p.value = false, c.value = true;
    }
    function C() {
      m2(), c.value = false;
    }
    function D() {
      g();
    }
    return lv({
      contentId: "",
      open: c,
      stateAttribute: v2,
      trigger: f,
      onTriggerChange(h2) {
        f.value = h2;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D() : w2();
      },
      onTriggerLeave() {
        s.value ? C() : m2();
      },
      onOpen: w2,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (h2, E) => (openBlock(), createBlock(unref(Tt), null, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default", { open: unref(c) })
      ]),
      _: 3
    }));
  }
});
var Mg = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = mn(), n = Oo();
    e.contentId || (e.contentId = he(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R2(), r = ref(false), i = ref(false), u = computed(() => e.disabled.value ? {} : {
      click: m2,
      focus: v2,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: g
    });
    onMounted(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      setTimeout(() => {
        r.value = false;
      }, 1);
    }
    function c() {
      r.value = true, document.addEventListener("pointerup", d, { once: true });
    }
    function p(w2) {
      w2.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = true);
    }
    function f() {
      e.onTriggerLeave(), i.value = false;
    }
    function v2(w2) {
      var C, D;
      r.value || e.ignoreNonKeyboardFocus.value && !((D = (C = w2.target).matches) != null && D.call(C, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function m2() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (w2, C) => (openBlock(), createBlock(unref(Rt), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(l),
          "aria-describedby": unref(e).open.value ? unref(e).contentId : void 0,
          "data-state": unref(e).stateAttribute.value,
          as: w2.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, toHandlers(u.value)), {
          default: withCtx(() => [
            renderSlot(w2.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
});
var dr = defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = mn(), { forwardRef: s } = R2(), r = useSlots(), i = computed(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), u = computed(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function p(v2) {
        typeof v2.children == "string" && v2.type !== Comment ? c += v2.children : Array.isArray(v2.children) && v2.children.forEach((g) => p(g));
      }
      return (f = i.value) == null || f.forEach((v2) => p(v2)), c;
    }), d = computed(() => {
      const { ariaLabel: c, ...p } = e;
      return p;
    });
    return onMounted(() => {
      Ne(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(l.trigger.value) && l.onClose();
      }), Ne(window, ur, l.onClose);
    }), (c, p) => (openBlock(), createBlock(unref(yt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: p[0] || (p[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v2;
        unref(l).disableClosingTrigger.value && ((v2 = unref(l).trigger.value) != null && v2.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => unref(l).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(Dt), mergeProps({
          ref: unref(s),
          "data-state": unref(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default"),
            createVNode(unref(Xt), {
              id: unref(l).contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
});
var sv = defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(a2) {
    const e = It(a2), { forwardRef: n, currentElement: l } = R2(), { trigger: s, onClose: r } = mn(), i = Oo(), { isPointerInTransit: u, onPointerExit: d } = Al(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (c, p) => (openBlock(), createBlock(dr, mergeProps({ ref: unref(n) }, unref(e)), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vg = defineComponent({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = mn(), s = xe(e, n), { forwardRef: r } = R2();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(unref(l).disableHoverableContent.value ? dr : sv), mergeProps({ ref: unref(r) }, unref(s)), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Fg = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R2(), (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lg = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ko(a2) {
  return a2.reduce((t, e) => (t.push(e), e.children && t.push(...ko(e.children)), t), []);
}
var [cr, rv] = Q("TreeRoot");
var Ng = defineComponent({
  __name: "TreeRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    items: {},
    expanded: {},
    defaultExpanded: {},
    getKey: {},
    getChildren: { type: Function, default: (a2) => a2.children },
    selectionBehavior: { default: "toggle" },
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    propagateSelect: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = toRefs(e), { handleTypeaheadSearch: d } = ga(), c = be(u), p = ref(), f = ref(false), v2 = ia(), g = ne(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: true
    }), m2 = ne(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: true
    }), { onSelectItem: w2, handleMultipleReplace: C } = Fi(g, e), D = computed(() => s.value && Array.isArray(g.value) ? g.value.map((T) => e.getKey(T)) : [e.getKey(g.value ?? {})]);
    function h2(T, M = 1, V2) {
      return T.reduce((A2, F, U) => {
        const W2 = e.getKey(F), ee = e.getChildren(F), L = m2.value.includes(W2), G2 = {
          _id: W2,
          value: F,
          index: U,
          level: M,
          parentItem: V2,
          hasChildren: !!ee,
          bind: {
            value: F,
            level: M,
            "aria-setsize": T.length,
            "aria-posinset": U + 1
          }
        };
        return A2.push(G2), ee && L && A2.push(...h2(ee, M + 1, F)), A2;
      }, []);
    }
    const E = computed(() => {
      const T = e.items;
      return m2.value.map((M) => M), h2(T ?? []);
    });
    function P2(T) {
      var M;
      if (f.value)
        v2.trigger(T);
      else {
        const V2 = (M = p.value) == null ? void 0 : M.getItems().map((A2) => A2.ref);
        d(T.key, V2);
      }
    }
    function B(T) {
      if (f.value)
        return;
      const M = Ja[T.key];
      nextTick(() => {
        var V2;
        C(
          M,
          document.activeElement,
          (V2 = p.value) == null ? void 0 : V2.getItems,
          E.value.map((A2) => A2.value)
        );
      });
    }
    return rv({
      modelValue: g,
      selectedKeys: D,
      onSelect: (T) => {
        var A2;
        const M = (F) => e.getKey(F ?? {}) === e.getKey(T), V2 = e.multiple && Array.isArray(g.value) ? ((A2 = g.value) == null ? void 0 : A2.findIndex(M)) !== -1 : void 0;
        if (w2(T, M), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const F = ko(e.getChildren(T) ?? []);
          V2 ? g.value = [...g.value].filter((U) => !F.some((W2) => e.getKey(U ?? {}) === e.getKey(W2))) : g.value = [...g.value, ...F];
        }
      },
      expanded: m2,
      onToggle(T) {
        if (!(T ? e.getChildren(T) : void 0))
          return;
        const V2 = e.getKey(T) ?? T;
        m2.value.includes(V2) ? m2.value = m2.value.filter((A2) => A2 !== V2) : m2.value.push(V2);
      },
      getKey: e.getKey,
      getChildren: e.getChildren,
      items: l,
      expandedItems: E,
      disabled: r,
      multiple: s,
      dir: c,
      propagateSelect: i,
      isVirtual: f,
      virtualKeydownHook: v2,
      handleMultipleReplace: C
    }), (T, M) => (openBlock(), createBlock(unref(Ot), {
      ref_key: "rovingFocusGroupRef",
      ref: p,
      "as-child": "",
      orientation: "vertical",
      dir: unref(c)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          role: "tree",
          as: T.as,
          "as-child": T.asChild,
          "aria-multiselectable": unref(s) ? true : void 0,
          onKeydown: [
            P2,
            withKeys(withModifiers(B, ["shift"]), ["up", "down"])
          ]
        }, {
          default: withCtx(() => [
            renderSlot(T.$slots, "default", {
              flattenItems: E.value,
              modelValue: unref(g),
              expanded: unref(m2)
            })
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-multiselectable", "onKeydown"])
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var iv = "tree.select";
var uv = "tree.toggle";
var zg = defineComponent({
  inheritAttrs: false,
  __name: "TreeItem",
  props: {
    value: {},
    level: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["select", "toggle"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, s = cr(), { getItems: r } = Jt(), i = computed(() => !!s.getChildren(n.value)), u = computed(() => {
      const C = s.getKey(n.value);
      return s.expanded.value.includes(C);
    }), d = computed(() => {
      const C = s.getKey(n.value);
      return s.selectedKeys.value.includes(C);
    }), c = computed(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !ko(s.getChildren(n.value) || []).every((D) => s.modelValue.value.find((h2) => s.getKey(h2) === s.getKey(D)));
    });
    function p(C) {
      if (i.value)
        if (u.value) {
          const D = r().map((T) => T.ref), h2 = document.activeElement, E = D.indexOf(h2), B = [...D].slice(E).find((T) => Number(T.getAttribute("data-indent")) === n.level + 1);
          B && B.focus();
        } else
          w2(C);
    }
    function f(C) {
      if (u.value)
        w2(C);
      else {
        const D = r().map((T) => T.ref), h2 = document.activeElement, E = D.indexOf(h2), B = [...D].slice(0, E).reverse().find((T) => Number(T.getAttribute("data-indent")) === n.level - 1);
        B && B.focus();
      }
    }
    async function v2(C) {
      l("select", C), !(C != null && C.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(C) {
      l("toggle", C), !(C != null && C.defaultPrevented) && s.onToggle(n.value);
    }
    async function m2(C) {
      if (!C)
        return;
      const D = { originalEvent: C, value: n.value, isExpanded: u.value, isSelected: d.value };
      Kt(iv, v2, D);
    }
    async function w2(C) {
      if (!C)
        return;
      const D = { originalEvent: C, value: n.value, isExpanded: u.value, isSelected: d.value };
      Kt(uv, g, D);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: c,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (C, D) => (openBlock(), createBlock(unref(kt), {
      "as-child": "",
      value: C.value,
      "allow-shift-key": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(C.$attrs, {
          role: "treeitem",
          as: C.as,
          "as-child": C.asChild,
          "aria-selected": d.value,
          "aria-expanded": i.value ? u.value : void 0,
          "aria-level": C.level,
          "data-indent": C.level,
          "data-selected": d.value ? "" : void 0,
          "data-expanded": u.value ? "" : void 0,
          onKeydown: [
            withKeys(withModifiers(m2, ["self", "prevent"]), ["enter", "space"]),
            D[0] || (D[0] = withKeys(withModifiers((h2) => unref(s).dir.value === "ltr" ? p(h2) : f(h2), ["prevent"]), ["right"])),
            D[1] || (D[1] = withKeys(withModifiers((h2) => unref(s).dir.value === "ltr" ? f(h2) : p(h2), ["prevent"]), ["left"]))
          ],
          onClick: D[2] || (D[2] = withModifiers((h2) => {
            m2(h2), w2(h2);
          }, ["stop"]))
        }), {
          default: withCtx(() => [
            renderSlot(C.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: c.value,
              handleSelect: () => unref(s).onSelect(C.value),
              handleToggle: () => unref(s).onToggle(C.value)
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
});
var Kg = defineComponent({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a2) {
    const t = a2, e = useSlots(), n = cr(), l = Tl(), { getItems: s } = Jt(), r = $t("", 1e3), i = computed(() => {
      const f = (v2) => t.textContent ? t.textContent(v2) : v2.toString().toLowerCase();
      return n.expandedItems.value.map((v2, g) => ({
        index: g,
        textContent: f(v2.value)
      }));
    });
    n.isVirtual.value = true;
    const u = computed(() => {
      const f = l.value;
      if (f) {
        const v2 = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v2.paddingBlockStart || v2.paddingTop),
          end: Number.parseFloat(v2.paddingBlockEnd || v2.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), d = us(
      {
        get scrollPaddingStart() {
          return u.value.start;
        },
        get scrollPaddingEnd() {
          return u.value.end;
        },
        get count() {
          return n.expandedItems.value.length ?? 0;
        },
        get horizontal() {
          return false;
        },
        getItemKey(f) {
          return f + n.getKey(n.expandedItems.value[f].value);
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), c = computed(() => d.value.getVirtualItems().map((f) => ({
      item: f,
      is: cloneVNode(e.default({
        item: n.expandedItems.value[f.index],
        virtualizer: d.value,
        virtualItem: f
      })[0], {
        "data-index": f.index,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    function p(f) {
      d.value.scrollToIndex(f, { align: "start" }), requestAnimationFrame(() => {
        const v2 = l.value.querySelector(`[data-index="${f}"]`);
        v2 instanceof HTMLElement && v2.focus();
      });
    }
    return n.virtualKeydownHook.on((f) => {
      var w2;
      const v2 = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v2)
        return;
      const m2 = Ja[f.key];
      if (["first", "last"].includes(m2)) {
        f.preventDefault();
        const C = m2 === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(C), requestAnimationFrame(() => {
          const D = s();
          (m2 === "first" ? D[0] : D[D.length - 1]).ref.focus();
        });
      } else if (m2 === "prev" && f.key !== "ArrowUp") {
        const C = document.activeElement, D = Number(C.getAttribute("data-index")), h2 = Number(C.getAttribute("data-indent")), P2 = n.expandedItems.value.slice(0, D).map((B, T) => ({ ...B, index: T })).reverse().find((B) => B.level === h2 - 1);
        P2 && p(P2.index);
      } else if (!m2 && !v2) {
        r.value += f.key;
        const C = Number((w2 = document.activeElement) == null ? void 0 : w2.getAttribute("data-index")), D = i.value[C].textContent, h2 = i.value.map((B) => B.textContent), E = Yn(h2, r.value, D), P2 = i.value.find((B) => B.textContent === E);
        P2 && p(P2.index);
      }
      nextTick(() => {
        f.shiftKey && m2 && n.handleMultipleReplace(m2, document.activeElement, s, n.expandedItems.value.map((C) => C.value));
      });
    }), (f, v2) => (openBlock(), createElementBlock("div", {
      "data-radix-vue-virtualizer": "",
      style: normalizeStyle({
        position: "relative",
        width: "100%",
        height: `${unref(d).getTotalSize()}px`
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, ({ is: g, item: m2 }) => (openBlock(), createBlock(resolveDynamicComponent(g), {
        key: m2.key
      }))), 128))
    ], 4));
  }
});
var Hg = defineComponent({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R2(), { nonce: n } = toRefs(t), l = Xa(n);
    return (s, r) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({ ...s.$attrs, ...t }, {
        ref: unref(e),
        "data-radix-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      createVNode(unref(O), {
        as: "style",
        nonce: unref(l)
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  bv as AccordionContent,
  Cv as AccordionHeader,
  gv as AccordionItem,
  yv as AccordionRoot,
  wv as AccordionTrigger,
  Tv as AlertDialogAction,
  $v as AlertDialogCancel,
  Pv as AlertDialogContent,
  Iv as AlertDialogDescription,
  Dv as AlertDialogOverlay,
  Ev as AlertDialogPortal,
  xv as AlertDialogRoot,
  Bv as AlertDialogTitle,
  Sv as AlertDialogTrigger,
  Rv as AspectRatio,
  kv as AvatarFallback,
  Ov as AvatarImage,
  Av as AvatarRoot,
  Lu as CalendarCell,
  Uu as CalendarCellTrigger,
  Fu as CalendarGrid,
  Wu as CalendarGridBody,
  Hu as CalendarGridHead,
  ju as CalendarGridRow,
  Nu as CalendarHeadCell,
  Mu as CalendarHeader,
  Vu as CalendarHeading,
  zu as CalendarNext,
  Ku as CalendarPrev,
  ku as CalendarRoot,
  Vv as CheckboxIndicator,
  Mv as CheckboxRoot,
  Hi as CollapsibleContent,
  Ni as CollapsibleRoot,
  zi as CollapsibleTrigger,
  Nv as ComboboxAnchor,
  Zv as ComboboxArrow,
  Kv as ComboboxCancel,
  jv as ComboboxContent,
  Uv as ComboboxEmpty,
  Hv as ComboboxGroup,
  Lv as ComboboxInput,
  qv as ComboboxItem,
  Yv as ComboboxItemIndicator,
  Wv as ComboboxLabel,
  Jv as ComboboxPortal,
  Fv as ComboboxRoot,
  Xv as ComboboxSeparator,
  zv as ComboboxTrigger,
  Gv as ComboboxViewport,
  mv as ConfigProvider,
  nm as ContextMenuArrow,
  rm as ContextMenuCheckboxItem,
  am as ContextMenuContent,
  lm as ContextMenuGroup,
  om as ContextMenuItem,
  im as ContextMenuItemIndicator,
  um as ContextMenuLabel,
  tm as ContextMenuPortal,
  dm as ContextMenuRadioGroup,
  cm as ContextMenuRadioItem,
  Qv as ContextMenuRoot,
  sm as ContextMenuSeparator,
  pm as ContextMenuSub,
  fm as ContextMenuSubContent,
  vm as ContextMenuSubTrigger,
  em as ContextMenuTrigger,
  qd as DateFieldInput,
  Vd as DateFieldRoot,
  Im as DatePickerAnchor,
  Tm as DatePickerArrow,
  $m as DatePickerCalendar,
  gm as DatePickerCell,
  Em as DatePickerCellTrigger,
  Rm as DatePickerClose,
  Om as DatePickerContent,
  Bm as DatePickerField,
  ym as DatePickerGrid,
  xm as DatePickerGridBody,
  _m as DatePickerGridHead,
  Sm as DatePickerGridRow,
  bm as DatePickerHeadCell,
  mm as DatePickerHeader,
  hm as DatePickerHeading,
  Pm as DatePickerInput,
  Cm as DatePickerNext,
  wm as DatePickerPrev,
  Dm as DatePickerRoot,
  Am as DatePickerTrigger,
  tc as DateRangeFieldInput,
  ec as DateRangeFieldRoot,
  Xm as DateRangePickerAnchor,
  Zm as DateRangePickerArrow,
  qm as DateRangePickerCalendar,
  Fm as DateRangePickerCell,
  jm as DateRangePickerCellTrigger,
  Jm as DateRangePickerClose,
  eh as DateRangePickerContent,
  Ym as DateRangePickerField,
  Vm as DateRangePickerGrid,
  Hm as DateRangePickerGridBody,
  Km as DateRangePickerGridHead,
  Wm as DateRangePickerGridRow,
  Lm as DateRangePickerHeadCell,
  km as DateRangePickerHeader,
  Mm as DateRangePickerHeading,
  Um as DateRangePickerInput,
  Nm as DateRangePickerNext,
  zm as DateRangePickerPrev,
  Gm as DateRangePickerRoot,
  Qm as DateRangePickerTrigger,
  jl as DialogClose,
  gu as DialogContent,
  _u as DialogDescription,
  Cu as DialogOverlay,
  _v as DialogPortal,
  Yi as DialogRoot,
  wu as DialogTitle,
  Xi as DialogTrigger,
  lh as DropdownMenuArrow,
  uh as DropdownMenuCheckboxItem,
  oh as DropdownMenuContent,
  rh as DropdownMenuGroup,
  sh as DropdownMenuItem,
  dh as DropdownMenuItemIndicator,
  ch as DropdownMenuLabel,
  nh as DropdownMenuPortal,
  ph as DropdownMenuRadioGroup,
  fh as DropdownMenuRadioItem,
  th as DropdownMenuRoot,
  ih as DropdownMenuSeparator,
  vh as DropdownMenuSub,
  mh as DropdownMenuSubContent,
  hh as DropdownMenuSubTrigger,
  ah as DropdownMenuTrigger,
  gh as EditableArea,
  _h as EditableCancelTrigger,
  xh as EditableEditTrigger,
  bh as EditableInput,
  Ch as EditablePreview,
  yh as EditableRoot,
  wh as EditableSubmitTrigger,
  $h as HoverCardArrow,
  Dh as HoverCardContent,
  Ph as HoverCardPortal,
  Sh as HoverCardRoot,
  Eh as HoverCardTrigger,
  Bh as Label,
  Th as ListboxContent,
  Rh as ListboxFilter,
  Mh as ListboxGroup,
  Vh as ListboxGroupLabel,
  Ah as ListboxItem,
  Oh as ListboxItemIndicator,
  Ih as ListboxRoot,
  kh as ListboxVirtualizer,
  Hh as MenubarArrow,
  Gh as MenubarCheckboxItem,
  Kh as MenubarContent,
  jh as MenubarGroup,
  Wh as MenubarItem,
  qh as MenubarItemIndicator,
  Yh as MenubarLabel,
  Lh as MenubarMenu,
  zh as MenubarPortal,
  Xh as MenubarRadioGroup,
  Zh as MenubarRadioItem,
  Fh as MenubarRoot,
  Uh as MenubarSeparator,
  Jh as MenubarSub,
  Qh as MenubarSubContent,
  ey as MenubarSubTrigger,
  Nh as MenubarTrigger,
  ny as NavigationMenuContent,
  oy as NavigationMenuIndicator,
  ay as NavigationMenuItem,
  ly as NavigationMenuLink,
  sy as NavigationMenuList,
  ty as NavigationMenuRoot,
  ry as NavigationMenuSub,
  iy as NavigationMenuTrigger,
  uy as NavigationMenuViewport,
  fy as NumberFieldDecrement,
  py as NumberFieldIncrement,
  cy as NumberFieldInput,
  dy as NumberFieldRoot,
  my as PaginationEllipsis,
  hy as PaginationFirst,
  yy as PaginationLast,
  gy as PaginationList,
  by as PaginationListItem,
  Cy as PaginationNext,
  wy as PaginationPrev,
  vy as PaginationRoot,
  xy as PinInputInput,
  _y as PinInputRoot,
  _s as PopoverAnchor,
  Cs as PopoverArrow,
  ws as PopoverClose,
  bs as PopoverContent,
  ys as PopoverPortal,
  ms as PopoverRoot,
  hs as PopoverTrigger,
  O as Primitive,
  Ey as ProgressIndicator,
  Sy as ProgressRoot,
  $y as RadioGroupIndicator,
  Dy as RadioGroupItem,
  Py as RadioGroupRoot,
  pp as RangeCalendarCell,
  bp as RangeCalendarCellTrigger,
  cp as RangeCalendarGrid,
  yp as RangeCalendarGridBody,
  hp as RangeCalendarGridHead,
  gp as RangeCalendarGridRow,
  fp as RangeCalendarHeadCell,
  up as RangeCalendarHeader,
  dp as RangeCalendarHeading,
  vp as RangeCalendarNext,
  mp as RangeCalendarPrev,
  ip as RangeCalendarRoot,
  Ay as ScrollAreaCorner,
  By as ScrollAreaRoot,
  Ty as ScrollAreaScrollbar,
  Ry as ScrollAreaThumb,
  Iy as ScrollAreaViewport,
  Fy as SelectArrow,
  Vy as SelectContent,
  Ky as SelectGroup,
  Yy as SelectIcon,
  Ny as SelectItem,
  zy as SelectItemIndicator,
  Wy as SelectItemText,
  Hy as SelectLabel,
  My as SelectPortal,
  Oy as SelectRoot,
  Gy as SelectScrollDownButton,
  Uy as SelectScrollUpButton,
  Ly as SelectSeparator,
  ky as SelectTrigger,
  qy as SelectValue,
  jy as SelectViewport,
  Gp as Separator,
  Qy as SliderRange,
  Xy as SliderRoot,
  Zy as SliderThumb,
  Jy as SliderTrack,
  Xn as Slot,
  eg as SplitterGroup,
  tg as SplitterPanel,
  ag as SplitterResizeHandle,
  sg as StepperDescription,
  ig as StepperIndicator,
  og as StepperItem,
  ng as StepperRoot,
  ug as StepperSeparator,
  rg as StepperTitle,
  lg as StepperTrigger,
  dg as SwitchRoot,
  cg as SwitchThumb,
  vg as TabsContent,
  hg as TabsIndicator,
  fg as TabsList,
  pg as TabsRoot,
  mg as TabsTrigger,
  _g as TagsInputClear,
  gg as TagsInputInput,
  bg as TagsInputItem,
  wg as TagsInputItemDelete,
  Cg as TagsInputItemText,
  yg as TagsInputRoot,
  Eg as ToastAction,
  Xf as ToastClose,
  $g as ToastDescription,
  xg as ToastProvider,
  Sg as ToastRoot,
  Dg as ToastTitle,
  Pg as ToastViewport,
  Zf as Toggle,
  tv as ToggleGroupItem,
  ev as ToggleGroupRoot,
  nv as ToolbarButton,
  Ig as ToolbarLink,
  Bg as ToolbarRoot,
  Ag as ToolbarSeparator,
  Tg as ToolbarToggleGroup,
  Rg as ToolbarToggleItem,
  Fg as TooltipArrow,
  Vg as TooltipContent,
  Lg as TooltipPortal,
  Og as TooltipProvider,
  kg as TooltipRoot,
  Mg as TooltipTrigger,
  zg as TreeItem,
  Ng as TreeRoot,
  Kg as TreeVirtualizer,
  Hg as Viewport,
  Xt as VisuallyHidden,
  Q as createContext,
  ha as useBodyScrollLock,
  Un as useDateFormatter,
  Re as useEmitAsProps,
  R2 as useForwardExpose,
  It as useForwardProps,
  xe as useForwardPropsEmits,
  he as useId,
  Ml as useStateMachine,
  hv as withDefault
};
//# sourceMappingURL=radix-vue.js.map

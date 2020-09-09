// imported for definition purposes only
import * as animationModule from '../../ui/animation';
import { makeValidator, makeParser } from '../core/properties';

export namespace Enums {

  export type KeyboardInputType = 'datetime' | 'phone' | 'number' | 'url' | 'email' | 'integer';
  export module KeyboardType {
  	export const datetime = 'datetime';
  	export const phone = 'phone';
  	export const number = 'number';
  	export const url = 'url';
  	export const email = 'email';
  	export const integer = 'integer';
  }

  export type ReturnKeyButtonType = 'done' | 'next' | 'go' | 'search' | 'send';
  export module ReturnKeyType {
  	export const done = 'done';
  	export const next = 'next';
  	export const go = 'go';
  	export const search = 'search';
  	export const send = 'send';
  }

  export type TextAlignmentType = 'initial' | 'left' | 'center' | 'right';
  export module TextAlignment {
  	export const left = 'left';
  	export const center = 'center';
  	export const right = 'right';
  }

  export type TextDecorationType = 'none' | 'underline' | 'line-through' | 'underline line-through';
  export module TextDecoration {
  	export const none = 'none';
  	export const underline = 'underline';
  	export const lineThrough = 'line-through';
  }

  export type TextTransformType = 'initial' | 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  export module TextTransform {
  	export const none = 'none';
  	export const capitalize = 'capitalize';
  	export const uppercase = 'uppercase';
  	export const lowercase = 'lowercase';
  }

  export type WhiteSpaceType = 'initial' | 'normal' | 'nowrap';
  export module WhiteSpace {
  	export const normal = 'normal';
  	export const nowrap = 'nowrap';
  }

  export type OrientationType = 'horizontal' | 'vertical';
  export module Orientation {
  	export const horizontal = 'horizontal';
  	export const vertical = 'vertical';
  }

  export type DeviceOrientationType = 'portrait' | 'landscape' | 'unknown';
  export module DeviceOrientation {
  	export const portrait = 'portrait';
  	export const landscape = 'landscape';
  	export const unknown = 'unknown';
  }

  export type HorizontalAlignmentType = 'left' | 'center' | 'right' | 'stretch';
  export module HorizontalAlignment {
  	export const left = 'left';
  	export const center = 'center';
  	export const right = 'right';
  	export const stretch = 'stretch';
    export const isValid = makeValidator<HorizontalAlignmentType>(left, center, right, stretch);
    export const parse = makeParser<HorizontalAlignmentType>(isValid);
  }


  export type VerticalAlignmentType = 'top' | 'middle' | 'bottom' | 'stretch';
  export module VerticalAlignment {
    export const top = 'top';
  	export const middle = 'middle';
  	export const bottom = 'bottom';
  	export const stretch = 'stretch';
  }
  export type VerticalAlignmentTextType = VerticalAlignmentType | 'text-top' | 'text-bottom' | 'sup' | 'sub' | 'baseline';
  export namespace VerticalAlignmentText {
    export const top = 'top';
    export const middle = 'middle';
    export const bottom = 'bottom';
    export const stretch = 'stretch';
    export const texttop = 'text-top';
    export const textbottom = 'text-bottom';
    export const sup = 'sup';
    export const sub = 'sub';
    export const baseline = 'baseline';
    export const isValid = makeValidator<VerticalAlignmentTextType>(top, middle, bottom, stretch, texttop, textbottom, sup, sub, baseline);
    export const parse = (value: string) => (value.toLowerCase() === 'center' ? middle : parseStrict(value));
    const parseStrict = makeParser<Enums.VerticalAlignmentTextType>(isValid);
  }

  export type ImageStretchType = 'none' | 'aspectFill' | 'aspectFit' | 'fill';
  export module ImageStretch {
  	export const none: ImageStretchType = 'none';
  	export const aspectFill: ImageStretchType = 'aspectFill';
  	export const aspectFit: ImageStretchType = 'aspectFit';
  	export const fill: ImageStretchType = 'fill';
  }

  export type VisibilityType = 'visible' | 'hidden' | 'collapse' | 'collapsed';
  export module Visibility {
  	export const visible: VisibilityType = 'visible';
  	export const collapse: VisibilityType = 'collapse';
  	export const collapsed: VisibilityType = 'collapsed';
  	export const hidden: VisibilityType = 'hidden';
  }

  export module FontAttributes {
  	export const Normal = 0;
  	export const Bold = 1;
  	export const Italic = 1 << 1;
  }

  export module DeviceType {
  	export const Phone: string = 'Phone';
  	export const Tablet: string = 'Tablet';
  }

  export type UpdateTextTriggerType = 'focusLost' | 'textChanged';
  export module UpdateTextTrigger {
  	export const focusLost: UpdateTextTriggerType = 'focusLost';
  	export const textChanged: UpdateTextTriggerType = 'textChanged';
  }

  export module Accuracy {
  	export const any: number = 300;
  	export const high: number = 3;
  }

  export type DockType = 'left' | 'top' | 'right' | 'bottom';
  export module Dock {
  	export const left: DockType = 'left';
  	export const top: DockType = 'top';
  	export const right: DockType = 'right';
  	export const bottom: DockType = 'bottom';
  }

  export type AutocapitalizationInputType = 'none' | 'words' | 'sentences' | 'allcharacters';
  export module AutocapitalizationType {
  	export const none: AutocapitalizationInputType = 'none';
  	export const words: AutocapitalizationInputType = 'words';
  	export const sentences: AutocapitalizationInputType = 'sentences';
  	export const allCharacters: AutocapitalizationInputType = 'allcharacters';
  }

  export module NavigationBarVisibility {
  	export const auto: string = 'auto';
  	export const never: string = 'never';
  	export const always: string = 'always';
  }

  export module AndroidActionBarIconVisibility {
  	export const auto: string = 'auto';
  	export const never: string = 'never';
  	export const always: string = 'always';
  }

  export module AndroidActionItemPosition {
  	export const actionBar: string = 'actionBar';
  	export const actionBarIfRoom: string = 'actionBarIfRoom';
  	export const popup: string = 'popup';
  }

  export module IOSActionItemPosition {
  	export const left: string = 'left';
  	export const right: string = 'right';
  }

  export module ImageFormat {
  	export const png: string = 'png';
  	export const jpeg: string = 'jpeg';
  	export const jpg: string = 'jpg';
  }

  export module FontStyle {
  	export const normal: string = 'normal';
  	export const italic: string = 'italic';
  }

  export module FontWeight {
  	export const thin: string = '100';
  	export const extraLight: string = '200';
  	export const light: string = '300';
  	export const normal: string = 'normal'; // 400
  	export const medium: string = '500';
  	export const semiBold: string = '600';
  	export const bold: string = 'bold'; // 700
  	export const extraBold: string = '800';
  	export const black: string = '900';
  }
  
  export type BackgroundRepeatType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
  export module BackgroundRepeat {
    export const repeat: BackgroundRepeatType = 'repeat';
  	export const repeatX: BackgroundRepeatType = 'repeat-x';
  	export const repeatY: BackgroundRepeatType = 'repeat-y';
  	export const noRepeat: BackgroundRepeatType = 'no-repeat';
    export const isValid = makeValidator<BackgroundRepeatType>(repeat, repeatX, repeatY, noRepeat);
    export const parse = makeParser<BackgroundRepeatType>(isValid);
  }

  let animation: typeof animationModule;

  export module AnimationCurve {
  	export const ease = 'ease';
  	export const easeIn = 'easeIn';
  	export const easeOut = 'easeOut';
  	export const easeInOut = 'easeInOut';
  	export const linear = 'linear';
  	export const spring = 'spring';
  	export function cubicBezier(x1: number, y1: number, x2: number, y2: number): Object {
  		animation = animation || require('../animation');

  		return new animation.CubicBezierAnimationCurve(x1, y1, x2, y2);
  	}
  }

  export module StatusBarStyle {
  	export const light = 'light';
  	export const dark = 'dark';
  }

  export module SystemAppearance {
  	export const light = 'light';
  	export const dark = 'dark';
  }

  	// Accuracy,
  	// AndroidActionBarIconVisibility,
  	// AndroidActionItemPosition,
  	// AnimationCurve,
    // AutocapitalizationType,
    // AutocapitalizationInputType: typeof AutocapitalizationType,
    // BackgroundRepeat,
    // BackgroundRepeatType: typeof BackgroundRepeat,
  	// DeviceOrientation,
  	// DeviceType,
  	// Dock,
  	// FontAttributes,
    // FontStyle,
    // FontStyleType: typeof FontStyle,
    // FontWeight,
    // FontWeightType: typeof FontWeight,
    // HorizontalAlignment,
    // HorizontalAlignmentType: typeof HorizontalAlignment,
  	// IOSActionItemPosition,
  	// ImageFormat,
    // KeyboardType,
    // KeyboardInputType: typeof KeyboardType,
  	// NavigationBarVisibility,
    // Orientation,
    // OrientationType: typeof Orientation,
  	// ReturnKeyType,
  	// StatusBarStyle,
  	// Stretch,
    // SystemAppearance,
    // TextAlignment,
    // TextAlignmentType: typeof TextAlignment,
    // TextDecoration,
    // TextDecorationType: typeof TextDecoration,
    // TextTransform,
    // TextTransformType: typeof TextTransform,
    // UpdateTextTrigger,
    // UpdateTextTriggerType: typeof UpdateTextTrigger,
    // VerticalAlignment,
    // VerticalAlignmentType: typeof VerticalAlignment,
    // Visibility,
    // VisibilityType: typeof Visibility,
    // WhiteSpace,
    // WhiteSpaceType: typeof WhiteSpace
};
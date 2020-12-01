/**
 * @description 编辑器配置
 * @author wangfupeng
 */
import { EmotionsType, FontSizeConfType, IndentationType } from './menus';
import { UploadImageHooksType } from './image';
import langConfig from './lang';
export declare type DicType = {
    [key: string]: string;
};
export declare type ConfigType = {
    height: number;
    languageType: string[];
    languageTab: string;
    menus: string[];
    fontNames: string[];
    lineHeights: string[];
    indentation: IndentationType;
    fontSizes: FontSizeConfType;
    colors: string[];
    emotions: EmotionsType[];
    zIndex: number;
    onchange: Function;
    onfocus: Function;
    onblur: Function;
    onchangeTimeout: number;
    pasteFilterStyle: boolean;
    pasteIgnoreImg: boolean;
    pasteTextHandle: Function;
    styleWithCSS: boolean;
    linkImgCallback: Function;
    placeholder: string;
    zIndexFullScreen: number;
    showFullScreen: boolean;
    showLinkImg: boolean;
    uploadImgAccept: string[];
    uploadImgServer: string;
    uploadImgShowBase64: boolean;
    uploadImgMaxSize: number;
    uploadImgMaxLength: number;
    uploadFileName: string;
    uploadImgParams: DicType;
    uploadImgParamsWithUrl: boolean;
    uploadImgHeaders: DicType;
    uploadImgHooks: UploadImageHooksType;
    uploadImgTimeout: number;
    withCredentials: boolean;
    customUploadImg: Function | null;
    customAlert: Function;
    onCatalogChange: Function | null;
    lang: string;
    languages: typeof langConfig;
    linkCheck: Function;
    linkImgCheck: Function;
    compatibleMode: () => boolean;
    historyMaxSize: number;
    focus: boolean;
};
export declare type Resource = {
    [language: string]: ResourceLanguage;
};
export declare type ResourceLanguage = {
    [namespace: string]: ResourceKey;
};
export declare type ResourceKey = string | {
    [key: string]: any;
};
declare const defaultConfig: any;
export default defaultConfig;

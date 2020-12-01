/**
 * @description 上传图片
 * @author wangfupeng
 */
import Editor from '../../editor/index';
export declare type ResType = {
    errno: number | string;
    data: string[];
};
declare class UploadImg {
    private editor;
    constructor(editor: Editor);
    /**
     * 往编辑区域插入图片
     * @param src 图片地址
     */
    insertImg(src: string): void;
    /**
     * 上传图片
     * @param files 文件列表
     */
    uploadImg(files: FileList | File[]): void;
}
export default UploadImg;

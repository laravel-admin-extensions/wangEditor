/**
 * @description 插入、上传图片
 * @author wangfupeng
 */
import PanelMenu from '../menu-constructors/PanelMenu';
import Editor from '../../editor/index';
import { MenuActive } from '../menu-constructors/Menu';
declare class Image extends PanelMenu implements MenuActive {
    constructor(editor: Editor);
    /**
     * 菜单点击事件
     */
    clickHandler(): void;
    /**
     * 创建 panel
     */
    private createPanel;
    /**
     * 尝试修改菜单 active 状态
     */
    tryChangeActive(): void;
}
export default Image;

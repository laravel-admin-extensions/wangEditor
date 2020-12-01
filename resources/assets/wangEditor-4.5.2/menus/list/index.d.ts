/**
 * @description 无序列表/有序列表
 * @author tonghan
 */
import Editor from '../../editor/index';
import DropListMenu from '../menu-constructors/DropListMenu';
import { MenuActive } from '../menu-constructors/Menu';
declare class List extends DropListMenu implements MenuActive {
    constructor(editor: Editor);
    command(value: string): void;
    tryChangeActive(): void;
}
export default List;

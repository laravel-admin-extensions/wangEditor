/**
 * @description 选取范围所有顶级(段落)节点
 * @author tonghan
 */
import { DomElement } from '../../utils/dom-core';
import Editor from '../index';
declare class SelectionRangeTopNodes {
    editor: Editor;
    $nodeList: DomElement[];
    $startElem: DomElement | undefined;
    $endElem: DomElement | undefined;
    /**
     * 构造函数
     * @param editor
     */
    constructor(editor: Editor);
    /**
     * 初始化
     */
    init(): void;
    /**
     * 添加 节点 到nodeList
     * @param $node 节点
     */
    private addNodeList;
    /**
     * 是否是 选区结束 节点
     * @param $node 节点
     */
    private isEndElem;
    /**
     * 获取当前节点的下一个兄弟节点
     * @param $node 节点
     */
    private getNextSibling;
    /**
     * 记录节点 - 从选区开始节点开始 一直到匹配到选区结束节点为止
     * @param $node 节点
     */
    private recordSelectionNodes;
    /**
     * 获取 选中节点列表
     */
    getSelectionNodes(): DomElement[];
}
/**
 * 导出
 */
export default SelectionRangeTopNodes;

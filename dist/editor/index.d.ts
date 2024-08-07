import HElement from '../element';
import { Rect } from '@lumel/table-renderer';
import { DataCell } from '../data';
declare type MoveDirection = 'up' | 'down' | 'left' | 'right' | 'none';
declare type MoveChanger = (direction: MoveDirection) => void;
declare type Changer = (value: DataCell) => void;
export default class Editor {
    _: HElement;
    _target: HElement | null;
    _rect: Rect | null;
    _value: DataCell;
    _visible: boolean;
    _moveChanger: MoveChanger;
    _changer: Changer;
    constructor(cssClass: string);
    get visible(): boolean;
    target(target: HElement): this;
    cellIndex(r: number, c: number): this;
    value(v: DataCell): this;
    changed(): void;
    rect(rect: Rect | null): this;
    show(): this;
    hide(): this;
    moveChanger(value: MoveChanger): this;
    changer(value: Changer): this;
}
export {};

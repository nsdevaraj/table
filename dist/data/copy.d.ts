import { Range } from '@wolf-table/table-renderer';
import { Cells, TableData } from '.';
export interface CopyData {
    range: Range;
    cells: Cells;
    data: TableData;
}
export interface CopyCells {
    range: Range;
    cells: Cells;
    data: TableData;
}
export declare function copy(from: CopyCells | null, to: CopyCells | null, autofill?: boolean): void;

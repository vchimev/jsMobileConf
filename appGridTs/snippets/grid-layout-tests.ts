
// public test_addChildAtRowCol_with_all_params() {
//     const btn = new Button();
//     const row: number = 1;
//     const column: number = 2;
//     const rowSpan: number = 3;
//     const columnSpan: number = 4;
//     this.testView.addChildAtRowCol(btn, row, column, rowSpan, columnSpan);
//     TKUnit.assertEqual(
//         this.row(btn),
//         row,
//         "'row' property not applied for GridLayout addChildAtRowCol."
//     );
//     TKUnit.assertEqual(
//         this.col(btn),
//         column,
//         "'column' property not applied for GridLayout addChildAtRowCol."
//     );
//     TKUnit.assertEqual(
//         this.rowSpan(btn),
//         rowSpan,
//         "'rowSpan' property not applied for GridLayout addChildAtRowCol."
//     );
//     TKUnit.assertEqual(
//         this.colSpan(btn),
//         columnSpan,
//         "'columnSpan' property not applied for GridLayout addChildAtRowCol."
//     );
// }

// public test_addChildAtRowCol_without_optional_params() {
//     const btn = new Button();
//     const row: number = 1;
//     const column: number = 2;
//     const defaultSpanValue: number = 1;
//     this.testView.addChildAtRowCol(btn, row, column);
//     TKUnit.assertEqual(
//         this.row(btn),
//         row,
//         "'row' property not applied for GridLayout addChildAtRowCol."
//     );
//     TKUnit.assertEqual(
//         this.col(btn),
//         column,
//         "'column' property not applied for GridLayout addChildAtRowCol."
//     );
//     TKUnit.assertEqual(
//         this.rowSpan(btn),
//         defaultSpanValue,
//         "'rowSpan' property not applied for GridLayout addChildAtRowCol without optional params."
//     );
//     TKUnit.assertEqual(
//         this.colSpan(btn),
//         defaultSpanValue,
//         "'colSpan' property not applied for GridLayout addChildAtRowCol without optional params."
//     );
// }

// public test_addChildAtRowCol_without_rowSpan() {
//     const btn = new Button();
//     const row: number = 1;
//     const column: number = 2;
//     const columnSpan: number = 2;
//     const defaultSpanValue: number = 1;
//     this.testView.addChildAtRowCol(btn, row, column, undefined, columnSpan);
//     TKUnit.assertEqual(
//         this.row(btn),
//         row,
//         "'row' property not applied for GridLayout addChildAtRowCol without rowspan."
//     );
//     TKUnit.assertEqual(
//         this.col(btn),
//         column,
//         "'column' property not applied for GridLayout addChildAtRowCol without rowspan."
//     );
//     TKUnit.assertEqual(
//         this.rowSpan(btn),
//         defaultSpanValue,
//         "'rowSpan' property not applied for GridLayout addChildAtRowCol without rowspan."
//     );
//     TKUnit.assertEqual(
//         this.colSpan(btn),
//         columnSpan,
//         "'columnSpan' property not applied for GridLayout addChildAtRowCol without rowspan."
//     );
// }

// public test_addChildAtRowCol_without_columnSpan() {
//     const btn = new Button();
//     const row: number = 1;
//     const column: number = 2;
//     const rowSpan: number = 2;
//     const defaultSpanValue: number = 1;
//     this.testView.addChildAtRowCol(btn, row, column, rowSpan);
//     TKUnit.assertEqual(
//         this.row(btn),
//         row,
//         "'row' property not applied for GridLayout addChildAtRowCol without columnSpan."
//     );
//     TKUnit.assertEqual(
//         this.col(btn),
//         column,
//         "'column' property not applied for GridLayout addChildAtRowCol without columnSpan."
//     );
//     TKUnit.assertEqual(
//         this.rowSpan(btn),
//         rowSpan,
//         "'rowSpan' property not applied for GridLayout addChildAtRowCol without columnSpan."
//     );
//     TKUnit.assertEqual(
//         this.colSpan(btn),
//         defaultSpanValue,
//         "'columnSpan' property not applied for GridLayout addChildAtRowCol without columnSpan."
//     );
// }

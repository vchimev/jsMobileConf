import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page, View } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

export function onPageLoaded(args: EventData) {
    const page = <Page>args.object;
    let grid = <GridLayout>page.getViewById("grid");

    const btn10 = new Button();
    btn10.iosOverflowSafeArea = true;
    btn10.backgroundColor = "lightYellow";
    btn10.text = "row 1 col 0";
    grid.addChild(btn10);
    GridLayout.setRow(btn10, 1);
    GridLayout.setColumn(btn10, 0);

    const btn11 = new Button();
    btn11.iosOverflowSafeArea = true;
    btn11.backgroundColor = "lightGray";
    btn11.text = "row 1 col 1 colSpan 2";
    grid.addChild(btn11);

    GridLayout.setRow(btn11, 1);
    GridLayout.setColumn(btn11, 1);
    GridLayout.setColumnSpan(btn11, 2);

    // grid = addChildAtRowCol(grid, btn11, 1, 1, 1, 2);
    // grid.addChildAtRowCol(btn11, 1, 1, 1, 2);
    page.content = grid;
}

function addChildAtRowCol(parent: GridLayout, child: View, row: number, column: number, rowSpan?: number, columnSpan?: number): GridLayout {
    parent.addChild(child);
    GridLayout.setRow(child, row);
    GridLayout.setColumn(child, column);
    if (rowSpan) {
        GridLayout.setRowSpan(child, rowSpan);
    }
    if (columnSpan) {
        GridLayout.setColumnSpan(child, columnSpan);
    }
    return parent;
}

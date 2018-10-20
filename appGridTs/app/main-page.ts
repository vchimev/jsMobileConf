/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page, View } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();
}

export function onPageLoaded(args: EventData) {
    const page = <Page>args.object;
    let grid = <GridLayout>page.getViewById("grid");

    const btn10 = new Button();
    btn10.backgroundColor = "lightYellow";
    btn10.text = "row 1 col 0";
    grid.addChild(btn10);
    GridLayout.setRow(btn10, 1);
    GridLayout.setColumn(btn10, 0);

    const btn11 = new Button();
    btn11.backgroundColor = "lightGray";
    btn11.text = "row 1 col 1 colSpan 2";
    grid.addChild(btn11);

    GridLayout.setRow(btn11, 1);
    GridLayout.setColumn(btn11, 1);
    GridLayout.setColumnSpan(btn11, 2);

    // grid = addViewAtRowCol(grid, btn11, 1, 1, 1, 2);
    page.content = grid;
}

function addViewAtRowCol(parent: GridLayout, view: View, row: number, column: number, rowSpan?: number, columnSpan?: number): GridLayout {
    parent.addChild(view);
    GridLayout.setRow(view, row);
    GridLayout.setColumn(view, column);
    if (rowSpan) {
        GridLayout.setRowSpan(view, rowSpan);
    }
    if (columnSpan) {
        GridLayout.setColumnSpan(view, columnSpan);
    }
    return parent;
}

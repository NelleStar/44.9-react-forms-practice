import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

// smoke test
it("renders without crashing", function () {
    render(<ShoppingList/>);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<ShoppingList/>);
    expect(asFragment()).toMatchSnapshot();
});


it("should add new item", function () {
    const {queryByText, getByLabelText} = render(<ShoppingList/>)
    const input = getByLabelText("Product Name:")
    const btn = queryByText("Add Item")
    expect(queryByText('Product Name: Bread')).not.toBeInTheDocument();
    fireEvent.change(input, { target: {value: 'Bread'} });
    fireEvent.click(btn);
    expect(queryByText("Product Name: Bread")).toBeInTheDocument();
})


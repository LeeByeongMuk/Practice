import {render} from "@testing-library/react";
import {OrderContentProvider} from "./contexts/OrderContext";

const customRender = (ui, options) =>
  render(ui, {wrapper: OrderContentProvider, ...options});

export * from '@testing-library/react';
export {customRender as render};
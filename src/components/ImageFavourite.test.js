import React from "react";
import ReactDOM from "react-dom";
import ImageFavourite from "./ImageFavourite";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImageFavourite photoId="UjD08DRW24E" />, div);
});

it("renders img from unsplash", () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NzkyMH0";
  render(<ImageFavourite imgSrc={imgUrl} />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://images.unsplash.com/photo")
  ).toBeTruthy();
});

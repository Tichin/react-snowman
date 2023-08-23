import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';

import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

function findLetterButton(container, letter) {
  return container.querySelector(`button[value="${letter}"]`);
}

it('renders without crashing', function () {
  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6} />);
});

it('matches snapshot', function () {
  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6} />);
  expect(container).toMatchSnapshot();
});

it('image remains after max wrong guesses exceeded', function () {
  //can't exceed maxWrong anymore??

  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6} />);

  // 7 wrong guesses
  fireEvent.click(findLetterButton(container, "s"));
  fireEvent.click(findLetterButton(container, "r"));
  fireEvent.click(findLetterButton(container, "c"));
  fireEvent.click(findLetterButton(container, "v"));
  fireEvent.click(findLetterButton(container, "t"));
  fireEvent.click(findLetterButton(container, "q"));
  // fireEvent.click(findLetterButton(container, "o"));

  expect(container).toContainHTML("6.png");
  //TODO: more assertions
  //is there a better way?
});

// const img = container.querySelector('img');
// expect(img.getAttribute('alt')).toEqual("6");
//TODO: more secure
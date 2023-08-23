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


it('image remains after max wrongs', function () {

  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6} />);

  fireEvent.click(container.querySelector('button[value="s"]'));
  fireEvent.click(container.querySelector('button[value="r"]'));
  fireEvent.click(container.querySelector('button[value="y"]'));
  fireEvent.click(container.querySelector('button[value="k"]'));
  fireEvent.click(container.querySelector('button[value="u"]'));
  fireEvent.click(container.querySelector('button[value="v"]'));
  fireEvent.click(container.querySelector('button[value="b"]'));


  const img = container.querySelector('img');

  // expect(img.getAttribute('src')).toContain("./6.png");
  expect(img.getAttribute('alt')).toEqual("6");


});

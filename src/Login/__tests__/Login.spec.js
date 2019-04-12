import React from "react";
import { mount } from "enzyme";

import Login from "../Login";

describe(Login, () => {
  it("shuld get music", done => {
    const title = "My Title";
    const body = "Body";
    const id = 12345;

    const fetchMock = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => ({ id, title, body })
      })
    );
    done();
    // Modificamos la función fetch!
    global.fetch = fetchMock;
  });
});

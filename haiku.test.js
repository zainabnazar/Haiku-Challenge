//const syllables = require('syllables');
var haiku = require("./haiku");
test("Throw error when passing empty string or not passing any poem", () => {
  expect(haiku("")).toMatchObject({
    error: "Invalid input. Call haiku(peom string)",
    result: false,
  });
});

test("Slow moving river. / Flash of iridescent blue. / A kingfisher strikes", () => {
    expect(
      haiku(
        "Slow moving river. / Flash of iridescent blue. / A kingfisher strikes"
      )
    ).toBe(true);
  });

test("An old silent pond / a frog jumps into the pond. / Splash! Silence again.", () => {
    expect(
        haiku(
        "An old silent pond / a frog jumps into the pond. / Splash! Silence again."
      )
    ).toBe(true);
  });

  test("Seas are wild tonight...  / stretching over the island / Silent clouds of stars", () => {
    expect(
        haiku(
        "Seas are wild tonight...  / stretching over the island / Silent clouds of stars"
      )
    ).toBe(true);
  });

  test("The light of a candle / Is transferred to another candle / Spring twilight", () => {
    expect(
        haiku(
        "The light of a candle / Is transferred to another candle / Spring twilight"
      )
    ).toBe(false);
  });


//   test("Mirror, mirror / on the wall / who's the fairest / of them all?", () => {
//   expect(
//     haiku(
//       "The light of a candle",
//       "Is transferred to another candle",
//       "Spring twilight"
//     )
//   ).toBe(false);
// });
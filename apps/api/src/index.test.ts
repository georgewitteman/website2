import { describe, test } from "node:test";
import assert from "node:assert";
import { dummy, dummy2 } from "./index.ts";

describe("Index", () => {
  test("works", () => {
    assert.ok(typeof dummy() === "number");
    assert.strictEqual(dummy2(), 123);
  });
});

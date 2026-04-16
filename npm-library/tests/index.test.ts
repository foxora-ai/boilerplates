import { describe, it, expect, vi } from "vitest";
import { cn, formatNumber, clamp, sleep, debounce, capitalize } from "../src/index";

describe("cn", () => {
  it("joins class names", () => expect(cn("a", "b")).toBe("a b"));
  it("filters falsy values", () => expect(cn("a", false, undefined, null, "b")).toBe("a b"));
});

describe("formatNumber", () => {
  it("formats with commas", () => expect(formatNumber(1000000)).toBe("1,000,000"));
  it("handles zero", () => expect(formatNumber(0)).toBe("0"));
});

describe("clamp", () => {
  it("clamps above max", () => expect(clamp(10, 0, 5)).toBe(5));
  it("clamps below min", () => expect(clamp(-5, 0, 10)).toBe(0));
  it("returns value in range", () => expect(clamp(3, 0, 10)).toBe(3));
});

describe("sleep", () => {
  it("resolves after delay", async () => {
    const start = Date.now();
    await sleep(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(45);
  });
});

describe("debounce", () => {
  it("only calls once within delay", async () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);
    debounced();
    debounced();
    debounced();
    await sleep(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("capitalize", () => {
  it("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"));
  it("handles empty string", () => expect(capitalize("")).toBe(""));
});

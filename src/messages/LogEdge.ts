// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { RevId } from "./RevId";

export type LogEdge = { "type": "Direct" } & RevId | { "type": "Indirect" } & RevId | { "type": "Missing" };
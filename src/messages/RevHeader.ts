// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MultilineString } from "./MultilineString";
import type { RefName } from "./RefName";
import type { RevId } from "./RevId";

export interface RevHeader { change_id: RevId, commit_id: RevId, description: MultilineString, email: string, has_conflict: boolean, is_working_copy: boolean, branches: Array<RefName>, }
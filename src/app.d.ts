// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import PocketBase, { Admin, Record } from "pocketbase";

declare global {
    declare namespace App {
        interface Locals {
            pb: PocketBase
            user: Record | Admin | null
        }
    }
}

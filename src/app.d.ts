// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import PocketBase, { Admin, Record } from "pocketbase";
import type { User } from './lib/models/user.model';

declare global {
    declare namespace App {
        interface Locals {
            pb: PocketBase
            user: User | null
        }
    }
}

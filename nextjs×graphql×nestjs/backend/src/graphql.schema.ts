
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    email: string;
    name?: Nullable<string>;
    avatarUrl?: Nullable<string>;
}

export class UpdateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    avatarUrl?: Nullable<string>;
}

export class CreateBeerPostInput {
    beerName: string;
    brewery?: Nullable<string>;
    style?: Nullable<string>;
    abv?: Nullable<number>;
    purchaseLocation?: Nullable<string>;
    rating: number;
    comment?: Nullable<string>;
    photoUrl?: Nullable<string>;
    userId: number;
}

export class UpdateBeerPostInput {
    beerName?: Nullable<string>;
    brewery?: Nullable<string>;
    style?: Nullable<string>;
    abv?: Nullable<number>;
    purchaseLocation?: Nullable<string>;
    rating?: Nullable<number>;
    comment?: Nullable<string>;
    photoUrl?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract beerPosts(): BeerPost[] | Promise<BeerPost[]>;

    abstract beerPostsById(id: number): Nullable<BeerPost> | Promise<Nullable<BeerPost>>;

    abstract beerPost(id: number): Nullable<BeerPost> | Promise<Nullable<BeerPost>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: number, input: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: number): User | Promise<User>;

    abstract createBeerPost(input: CreateBeerPostInput): BeerPost | Promise<BeerPost>;

    abstract updateBeerPost(id: number, input: UpdateBeerPostInput): BeerPost | Promise<BeerPost>;

    abstract deleteBeerPost(id: number): BeerPost | Promise<BeerPost>;
}

export class User {
    id: number;
    email: string;
    name?: Nullable<string>;
    avatarUrl?: Nullable<string>;
    beerPosts?: Nullable<Nullable<BeerPost>[]>;
}

export class BeerPost {
    id: number;
    beerName: string;
    brewery?: Nullable<string>;
    style?: Nullable<string>;
    abv?: Nullable<number>;
    purchaseLocation?: Nullable<string>;
    rating: number;
    comment?: Nullable<string>;
    photoUrl?: Nullable<string>;
    createdAt: Date;
    updatedAt: Date;
    user?: Nullable<User>;
}

type Nullable<T> = T | null;

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type BeerPost = {
  __typename?: 'BeerPost';
  abv: Maybe<Scalars['Float']>;
  beerName: Scalars['String'];
  brewery: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  photoUrl: Maybe<Scalars['String']>;
  purchaseLocation: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  style: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  user: User;
};

export type CreateBeerPostInput = {
  abv?: InputMaybe<Scalars['Float']>;
  beerName: Scalars['String'];
  brewery?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
  purchaseLocation?: InputMaybe<Scalars['String']>;
  rating: Scalars['Float'];
  style?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type CreateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBeerPost: BeerPost;
  createUser: User;
  deleteBeerPost: BeerPost;
  deleteUser: User;
  updateBeerPost: BeerPost;
  updateUser: User;
};


export type MutationCreateBeerPostArgs = {
  input: CreateBeerPostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteBeerPostArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateBeerPostArgs = {
  id: Scalars['Int'];
  input: UpdateBeerPostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  beerPost: Maybe<BeerPost>;
  beerPosts: Array<BeerPost>;
  beerPostsById: Maybe<BeerPost>;
  user: Maybe<User>;
  users: Array<User>;
};


export type QueryBeerPostArgs = {
  id: Scalars['Int'];
};


export type QueryBeerPostsByIdArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdateBeerPostInput = {
  abv?: InputMaybe<Scalars['Float']>;
  beerName?: InputMaybe<Scalars['String']>;
  brewery?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
  purchaseLocation?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  style?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl: Maybe<Scalars['String']>;
  beerPosts: Array<Maybe<BeerPost>>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Maybe<Scalars['String']>;
};

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', beerPosts: Array<{ __typename?: 'BeerPost', id: number, beerName: string, brewery: string | null, style: string | null, abv: number | null, purchaseLocation: string | null, rating: number, comment: string | null, photoUrl: string | null, createdAt: any, updatedAt: any }> };

export type CreatePostMutationVariables = Exact<{
  beerName: Scalars['String'];
  brewery?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  abv?: InputMaybe<Scalars['Float']>;
  purchaseLocation?: InputMaybe<Scalars['String']>;
  rating: Scalars['Float'];
  comment?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createBeerPost: { __typename?: 'BeerPost', id: number, beerName: string, brewery: string | null, style: string | null, abv: number | null, purchaseLocation: string | null, rating: number, comment: string | null, photoUrl: string | null, createdAt: any, updatedAt: any } };


export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beerPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"beerName"}},{"kind":"Field","name":{"kind":"Name","value":"brewery"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"abv"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseLocation"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beerName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"brewery"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"style"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"abv"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"purchaseLocation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photoUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBeerPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"beerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beerName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"brewery"},"value":{"kind":"Variable","name":{"kind":"Name","value":"brewery"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"style"},"value":{"kind":"Variable","name":{"kind":"Name","value":"style"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"abv"},"value":{"kind":"Variable","name":{"kind":"Name","value":"abv"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"purchaseLocation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"purchaseLocation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"photoUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photoUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"beerName"}},{"kind":"Field","name":{"kind":"Name","value":"brewery"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"abv"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseLocation"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
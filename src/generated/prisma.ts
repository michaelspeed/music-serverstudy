import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artists: <T = Artist[]>(args: { where?: ArtistWhereInput, orderBy?: ArtistOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    albums: <T = Album[]>(args: { where?: AlbumWhereInput, orderBy?: AlbumOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songs: <T = Song[]>(args: { where?: SongWhereInput, orderBy?: SongOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    album: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    song: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artistsConnection: <T = ArtistConnection>(args: { where?: ArtistWhereInput, orderBy?: ArtistOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    albumsConnection: <T = AlbumConnection>(args: { where?: AlbumWhereInput, orderBy?: AlbumOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songsConnection: <T = SongConnection>(args: { where?: SongWhereInput, orderBy?: SongOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createArtist: <T = Artist>(args: { data: ArtistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlbum: <T = Album>(args: { data: AlbumCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSong: <T = Song>(args: { data: SongCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateArtist: <T = Artist | null>(args: { data: ArtistUpdateInput, where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlbum: <T = Album | null>(args: { data: AlbumUpdateInput, where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSong: <T = Song | null>(args: { data: SongUpdateInput, where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteArtist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlbum: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSong: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertArtist: <T = Artist>(args: { where: ArtistWhereUniqueInput, create: ArtistCreateInput, update: ArtistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlbum: <T = Album>(args: { where: AlbumWhereUniqueInput, create: AlbumCreateInput, update: AlbumUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSong: <T = Song>(args: { where: SongWhereUniqueInput, create: SongCreateInput, update: SongUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyArtists: <T = BatchPayload>(args: { data: ArtistUpdateInput, where?: ArtistWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlbums: <T = BatchPayload>(args: { data: AlbumUpdateInput, where?: AlbumWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySongs: <T = BatchPayload>(args: { data: SongUpdateInput, where?: SongWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyArtists: <T = BatchPayload>(args: { where?: ArtistWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlbums: <T = BatchPayload>(args: { where?: AlbumWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySongs: <T = BatchPayload>(args: { where?: SongWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    artist: <T = ArtistSubscriptionPayload | null>(args: { where?: ArtistSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    album: <T = AlbumSubscriptionPayload | null>(args: { where?: AlbumSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    song: <T = SongSubscriptionPayload | null>(args: { where?: SongSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Artist: (where?: ArtistWhereInput) => Promise<boolean>
  Album: (where?: AlbumWhereInput) => Promise<boolean>
  Song: (where?: SongWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAlbum {
  count: Int!
}

type AggregateArtist {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateSong {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Album implements Node {
  id: ID!
  name: String!
  date: String!
  genre: String
  albumPiC: String
  artist(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
}

"""A connection to a list of items."""
type AlbumConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlbumEdge]!
  aggregate: AggregateAlbum!
}

input AlbumCreateInput {
  name: String!
  date: String!
  genre: String
  albumPiC: String
  artist: ArtistCreateManyWithoutAlbumsInput
}

input AlbumCreateManyWithoutArtistInput {
  create: [AlbumCreateWithoutArtistInput!]
  connect: [AlbumWhereUniqueInput!]
}

input AlbumCreateWithoutArtistInput {
  name: String!
  date: String!
  genre: String
  albumPiC: String
}

"""An edge in a connection."""
type AlbumEdge {
  """The item at the end of the edge."""
  node: Album!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlbumOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  date_ASC
  date_DESC
  genre_ASC
  genre_DESC
  albumPiC_ASC
  albumPiC_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AlbumPreviousValues {
  id: ID!
  name: String!
  date: String!
  genre: String
  albumPiC: String
}

type AlbumSubscriptionPayload {
  mutation: MutationType!
  node: Album
  updatedFields: [String!]
  previousValues: AlbumPreviousValues
}

input AlbumSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AlbumWhereInput
}

input AlbumUpdateInput {
  name: String
  date: String
  genre: String
  albumPiC: String
  artist: ArtistUpdateManyWithoutAlbumsInput
}

input AlbumUpdateManyWithoutArtistInput {
  create: [AlbumCreateWithoutArtistInput!]
  connect: [AlbumWhereUniqueInput!]
  disconnect: [AlbumWhereUniqueInput!]
  delete: [AlbumWhereUniqueInput!]
  update: [AlbumUpdateWithWhereUniqueWithoutArtistInput!]
  upsert: [AlbumUpsertWithWhereUniqueWithoutArtistInput!]
}

input AlbumUpdateWithoutArtistDataInput {
  name: String
  date: String
  genre: String
  albumPiC: String
}

input AlbumUpdateWithWhereUniqueWithoutArtistInput {
  where: AlbumWhereUniqueInput!
  data: AlbumUpdateWithoutArtistDataInput!
}

input AlbumUpsertWithWhereUniqueWithoutArtistInput {
  where: AlbumWhereUniqueInput!
  update: AlbumUpdateWithoutArtistDataInput!
  create: AlbumCreateWithoutArtistInput!
}

input AlbumWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  date: String

  """All values that are not equal to given value."""
  date_not: String

  """All values that are contained in given list."""
  date_in: [String!]

  """All values that are not contained in given list."""
  date_not_in: [String!]

  """All values less than the given value."""
  date_lt: String

  """All values less than or equal the given value."""
  date_lte: String

  """All values greater than the given value."""
  date_gt: String

  """All values greater than or equal the given value."""
  date_gte: String

  """All values containing the given string."""
  date_contains: String

  """All values not containing the given string."""
  date_not_contains: String

  """All values starting with the given string."""
  date_starts_with: String

  """All values not starting with the given string."""
  date_not_starts_with: String

  """All values ending with the given string."""
  date_ends_with: String

  """All values not ending with the given string."""
  date_not_ends_with: String
  genre: String

  """All values that are not equal to given value."""
  genre_not: String

  """All values that are contained in given list."""
  genre_in: [String!]

  """All values that are not contained in given list."""
  genre_not_in: [String!]

  """All values less than the given value."""
  genre_lt: String

  """All values less than or equal the given value."""
  genre_lte: String

  """All values greater than the given value."""
  genre_gt: String

  """All values greater than or equal the given value."""
  genre_gte: String

  """All values containing the given string."""
  genre_contains: String

  """All values not containing the given string."""
  genre_not_contains: String

  """All values starting with the given string."""
  genre_starts_with: String

  """All values not starting with the given string."""
  genre_not_starts_with: String

  """All values ending with the given string."""
  genre_ends_with: String

  """All values not ending with the given string."""
  genre_not_ends_with: String
  albumPiC: String

  """All values that are not equal to given value."""
  albumPiC_not: String

  """All values that are contained in given list."""
  albumPiC_in: [String!]

  """All values that are not contained in given list."""
  albumPiC_not_in: [String!]

  """All values less than the given value."""
  albumPiC_lt: String

  """All values less than or equal the given value."""
  albumPiC_lte: String

  """All values greater than the given value."""
  albumPiC_gt: String

  """All values greater than or equal the given value."""
  albumPiC_gte: String

  """All values containing the given string."""
  albumPiC_contains: String

  """All values not containing the given string."""
  albumPiC_not_contains: String

  """All values starting with the given string."""
  albumPiC_starts_with: String

  """All values not starting with the given string."""
  albumPiC_not_starts_with: String

  """All values ending with the given string."""
  albumPiC_ends_with: String

  """All values not ending with the given string."""
  albumPiC_not_ends_with: String
  artist_every: ArtistWhereInput
  artist_some: ArtistWhereInput
  artist_none: ArtistWhereInput
}

input AlbumWhereUniqueInput {
  id: ID
}

type Artist implements Node {
  id: ID!
  name: String!
  pic: String
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album!]
  song(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
}

"""A connection to a list of items."""
type ArtistConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  name: String!
  pic: String
  albums: AlbumCreateManyWithoutArtistInput
  song: SongCreateManyWithoutArtistInput
}

input ArtistCreateManyWithoutAlbumsInput {
  create: [ArtistCreateWithoutAlbumsInput!]
  connect: [ArtistWhereUniqueInput!]
}

input ArtistCreateManyWithoutSongInput {
  create: [ArtistCreateWithoutSongInput!]
  connect: [ArtistWhereUniqueInput!]
}

input ArtistCreateWithoutAlbumsInput {
  name: String!
  pic: String
  song: SongCreateManyWithoutArtistInput
}

input ArtistCreateWithoutSongInput {
  name: String!
  pic: String
  albums: AlbumCreateManyWithoutArtistInput
}

"""An edge in a connection."""
type ArtistEdge {
  """The item at the end of the edge."""
  node: Artist!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  pic_ASC
  pic_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ArtistPreviousValues {
  id: ID!
  name: String!
  pic: String
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ArtistWhereInput
}

input ArtistUpdateInput {
  name: String
  pic: String
  albums: AlbumUpdateManyWithoutArtistInput
  song: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateManyWithoutAlbumsInput {
  create: [ArtistCreateWithoutAlbumsInput!]
  connect: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueWithoutAlbumsInput!]
  upsert: [ArtistUpsertWithWhereUniqueWithoutAlbumsInput!]
}

input ArtistUpdateManyWithoutSongInput {
  create: [ArtistCreateWithoutSongInput!]
  connect: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueWithoutSongInput!]
  upsert: [ArtistUpsertWithWhereUniqueWithoutSongInput!]
}

input ArtistUpdateWithoutAlbumsDataInput {
  name: String
  pic: String
  song: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateWithoutSongDataInput {
  name: String
  pic: String
  albums: AlbumUpdateManyWithoutArtistInput
}

input ArtistUpdateWithWhereUniqueWithoutAlbumsInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateWithoutAlbumsDataInput!
}

input ArtistUpdateWithWhereUniqueWithoutSongInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateWithoutSongDataInput!
}

input ArtistUpsertWithWhereUniqueWithoutAlbumsInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateWithoutAlbumsDataInput!
  create: ArtistCreateWithoutAlbumsInput!
}

input ArtistUpsertWithWhereUniqueWithoutSongInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateWithoutSongDataInput!
  create: ArtistCreateWithoutSongInput!
}

input ArtistWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  pic: String

  """All values that are not equal to given value."""
  pic_not: String

  """All values that are contained in given list."""
  pic_in: [String!]

  """All values that are not contained in given list."""
  pic_not_in: [String!]

  """All values less than the given value."""
  pic_lt: String

  """All values less than or equal the given value."""
  pic_lte: String

  """All values greater than the given value."""
  pic_gt: String

  """All values greater than or equal the given value."""
  pic_gte: String

  """All values containing the given string."""
  pic_contains: String

  """All values not containing the given string."""
  pic_not_contains: String

  """All values starting with the given string."""
  pic_starts_with: String

  """All values not starting with the given string."""
  pic_not_starts_with: String

  """All values ending with the given string."""
  pic_ends_with: String

  """All values not ending with the given string."""
  pic_not_ends_with: String
  albums_every: AlbumWhereInput
  albums_some: AlbumWhereInput
  albums_none: AlbumWhereInput
  song_every: SongWhereInput
  song_some: SongWhereInput
  song_none: SongWhereInput
}

input ArtistWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createArtist(data: ArtistCreateInput!): Artist!
  createAlbum(data: AlbumCreateInput!): Album!
  createSong(data: SongCreateInput!): Song!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateAlbum(data: AlbumUpdateInput!, where: AlbumWhereUniqueInput!): Album
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteAlbum(where: AlbumWhereUniqueInput!): Album
  deleteSong(where: SongWhereUniqueInput!): Song
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  upsertAlbum(where: AlbumWhereUniqueInput!, create: AlbumCreateInput!, update: AlbumUpdateInput!): Album!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyArtists(data: ArtistUpdateInput!, where: ArtistWhereInput): BatchPayload!
  updateManyAlbums(data: AlbumUpdateInput!, where: AlbumWhereInput): BatchPayload!
  updateManySongs(data: SongUpdateInput!, where: SongWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  deleteManyAlbums(where: AlbumWhereInput): BatchPayload!
  deleteManySongs(where: SongWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album]!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  artist(where: ArtistWhereUniqueInput!): Artist
  album(where: AlbumWhereUniqueInput!): Album
  song(where: SongWhereUniqueInput!): Song
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  albumsConnection(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlbumConnection!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Song implements Node {
  id: ID!
  name: String!
  length: String
  songPic: String
  artist(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
}

"""A connection to a list of items."""
type SongConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  name: String!
  length: String
  songPic: String
  artist: ArtistCreateManyWithoutSongInput
}

input SongCreateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateWithoutArtistInput {
  name: String!
  length: String
  songPic: String
}

"""An edge in a connection."""
type SongEdge {
  """The item at the end of the edge."""
  node: Song!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  length_ASC
  length_DESC
  songPic_ASC
  songPic_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SongPreviousValues {
  id: ID!
  name: String!
  length: String
  songPic: String
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SongSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SongWhereInput
}

input SongUpdateInput {
  name: String
  length: String
  songPic: String
  artist: ArtistUpdateManyWithoutSongInput
}

input SongUpdateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  delete: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutArtistInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutArtistInput!]
}

input SongUpdateWithoutArtistDataInput {
  name: String
  length: String
  songPic: String
}

input SongUpdateWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutArtistDataInput!
}

input SongUpsertWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutArtistDataInput!
  create: SongCreateWithoutArtistInput!
}

input SongWhereInput {
  """Logical AND on all given filters."""
  AND: [SongWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  length: String

  """All values that are not equal to given value."""
  length_not: String

  """All values that are contained in given list."""
  length_in: [String!]

  """All values that are not contained in given list."""
  length_not_in: [String!]

  """All values less than the given value."""
  length_lt: String

  """All values less than or equal the given value."""
  length_lte: String

  """All values greater than the given value."""
  length_gt: String

  """All values greater than or equal the given value."""
  length_gte: String

  """All values containing the given string."""
  length_contains: String

  """All values not containing the given string."""
  length_not_contains: String

  """All values starting with the given string."""
  length_starts_with: String

  """All values not starting with the given string."""
  length_not_starts_with: String

  """All values ending with the given string."""
  length_ends_with: String

  """All values not ending with the given string."""
  length_not_ends_with: String
  songPic: String

  """All values that are not equal to given value."""
  songPic_not: String

  """All values that are contained in given list."""
  songPic_in: [String!]

  """All values that are not contained in given list."""
  songPic_not_in: [String!]

  """All values less than the given value."""
  songPic_lt: String

  """All values less than or equal the given value."""
  songPic_lte: String

  """All values greater than the given value."""
  songPic_gt: String

  """All values greater than or equal the given value."""
  songPic_gte: String

  """All values containing the given string."""
  songPic_contains: String

  """All values not containing the given string."""
  songPic_not_contains: String

  """All values starting with the given string."""
  songPic_starts_with: String

  """All values not starting with the given string."""
  songPic_not_starts_with: String

  """All values ending with the given string."""
  songPic_ends_with: String

  """All values not ending with the given string."""
  songPic_not_ends_with: String
  artist_every: ArtistWhereInput
  artist_some: ArtistWhereInput
  artist_none: ArtistWhereInput
}

input SongWhereUniqueInput {
  id: ID
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  album(where: AlbumSubscriptionWhereInput): AlbumSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type ArtistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'pic_ASC' |
  'pic_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AlbumOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'date_ASC' |
  'date_DESC' |
  'genre_ASC' |
  'genre_DESC' |
  'albumPiC_ASC' |
  'albumPiC_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SongOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'length_ASC' |
  'length_DESC' |
  'songPic_ASC' |
  'songPic_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface SongCreateWithoutArtistInput {
  name: String
  length?: String
  songPic?: String
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface AlbumUpsertWithWhereUniqueWithoutArtistInput {
  where: AlbumWhereUniqueInput
  update: AlbumUpdateWithoutArtistDataInput
  create: AlbumCreateWithoutArtistInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface AlbumUpdateWithoutArtistDataInput {
  name?: String
  date?: String
  genre?: String
  albumPiC?: String
}

export interface SongCreateInput {
  name: String
  length?: String
  songPic?: String
  artist?: ArtistCreateManyWithoutSongInput
}

export interface AlbumUpdateWithWhereUniqueWithoutArtistInput {
  where: AlbumWhereUniqueInput
  data: AlbumUpdateWithoutArtistDataInput
}

export interface AlbumSubscriptionWhereInput {
  AND?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  OR?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  NOT?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AlbumWhereInput
}

export interface AlbumUpdateManyWithoutArtistInput {
  create?: AlbumCreateWithoutArtistInput[] | AlbumCreateWithoutArtistInput
  connect?: AlbumWhereUniqueInput[] | AlbumWhereUniqueInput
  disconnect?: AlbumWhereUniqueInput[] | AlbumWhereUniqueInput
  delete?: AlbumWhereUniqueInput[] | AlbumWhereUniqueInput
  update?: AlbumUpdateWithWhereUniqueWithoutArtistInput[] | AlbumUpdateWithWhereUniqueWithoutArtistInput
  upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput[] | AlbumUpsertWithWhereUniqueWithoutArtistInput
}

export interface AlbumWhereInput {
  AND?: AlbumWhereInput[] | AlbumWhereInput
  OR?: AlbumWhereInput[] | AlbumWhereInput
  NOT?: AlbumWhereInput[] | AlbumWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  date?: String
  date_not?: String
  date_in?: String[] | String
  date_not_in?: String[] | String
  date_lt?: String
  date_lte?: String
  date_gt?: String
  date_gte?: String
  date_contains?: String
  date_not_contains?: String
  date_starts_with?: String
  date_not_starts_with?: String
  date_ends_with?: String
  date_not_ends_with?: String
  genre?: String
  genre_not?: String
  genre_in?: String[] | String
  genre_not_in?: String[] | String
  genre_lt?: String
  genre_lte?: String
  genre_gt?: String
  genre_gte?: String
  genre_contains?: String
  genre_not_contains?: String
  genre_starts_with?: String
  genre_not_starts_with?: String
  genre_ends_with?: String
  genre_not_ends_with?: String
  albumPiC?: String
  albumPiC_not?: String
  albumPiC_in?: String[] | String
  albumPiC_not_in?: String[] | String
  albumPiC_lt?: String
  albumPiC_lte?: String
  albumPiC_gt?: String
  albumPiC_gte?: String
  albumPiC_contains?: String
  albumPiC_not_contains?: String
  albumPiC_starts_with?: String
  albumPiC_not_starts_with?: String
  albumPiC_ends_with?: String
  albumPiC_not_ends_with?: String
  artist_every?: ArtistWhereInput
  artist_some?: ArtistWhereInput
  artist_none?: ArtistWhereInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
}

export interface ArtistUpsertWithWhereUniqueWithoutSongInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateWithoutSongDataInput
  create: ArtistCreateWithoutSongInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface ArtistWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface SongWhereUniqueInput {
  id?: ID_Input
}

export interface ArtistCreateInput {
  name: String
  pic?: String
  albums?: AlbumCreateManyWithoutArtistInput
  song?: SongCreateManyWithoutArtistInput
}

export interface ArtistUpdateManyWithoutSongInput {
  create?: ArtistCreateWithoutSongInput[] | ArtistCreateWithoutSongInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  update?: ArtistUpdateWithWhereUniqueWithoutSongInput[] | ArtistUpdateWithWhereUniqueWithoutSongInput
  upsert?: ArtistUpsertWithWhereUniqueWithoutSongInput[] | ArtistUpsertWithWhereUniqueWithoutSongInput
}

export interface AlbumCreateManyWithoutArtistInput {
  create?: AlbumCreateWithoutArtistInput[] | AlbumCreateWithoutArtistInput
  connect?: AlbumWhereUniqueInput[] | AlbumWhereUniqueInput
}

export interface ArtistUpsertWithWhereUniqueWithoutAlbumsInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateWithoutAlbumsDataInput
  create: ArtistCreateWithoutAlbumsInput
}

export interface AlbumCreateWithoutArtistInput {
  name: String
  date: String
  genre?: String
  albumPiC?: String
}

export interface ArtistUpdateWithWhereUniqueWithoutAlbumsInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateWithoutAlbumsDataInput
}

export interface SongCreateManyWithoutArtistInput {
  create?: SongCreateWithoutArtistInput[] | SongCreateWithoutArtistInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
}

export interface AlbumUpdateInput {
  name?: String
  date?: String
  genre?: String
  albumPiC?: String
  artist?: ArtistUpdateManyWithoutAlbumsInput
}

export interface ArtistUpdateInput {
  name?: String
  pic?: String
  albums?: AlbumUpdateManyWithoutArtistInput
  song?: SongUpdateManyWithoutArtistInput
}

export interface SongUpdateWithoutArtistDataInput {
  name?: String
  length?: String
  songPic?: String
}

export interface AlbumCreateInput {
  name: String
  date: String
  genre?: String
  albumPiC?: String
  artist?: ArtistCreateManyWithoutAlbumsInput
}

export interface SongUpdateManyWithoutArtistInput {
  create?: SongCreateWithoutArtistInput[] | SongCreateWithoutArtistInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  disconnect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  delete?: SongWhereUniqueInput[] | SongWhereUniqueInput
  update?: SongUpdateWithWhereUniqueWithoutArtistInput[] | SongUpdateWithWhereUniqueWithoutArtistInput
  upsert?: SongUpsertWithWhereUniqueWithoutArtistInput[] | SongUpsertWithWhereUniqueWithoutArtistInput
}

export interface ArtistCreateManyWithoutAlbumsInput {
  create?: ArtistCreateWithoutAlbumsInput[] | ArtistCreateWithoutAlbumsInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
}

export interface ArtistWhereInput {
  AND?: ArtistWhereInput[] | ArtistWhereInput
  OR?: ArtistWhereInput[] | ArtistWhereInput
  NOT?: ArtistWhereInput[] | ArtistWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  pic?: String
  pic_not?: String
  pic_in?: String[] | String
  pic_not_in?: String[] | String
  pic_lt?: String
  pic_lte?: String
  pic_gt?: String
  pic_gte?: String
  pic_contains?: String
  pic_not_contains?: String
  pic_starts_with?: String
  pic_not_starts_with?: String
  pic_ends_with?: String
  pic_not_ends_with?: String
  albums_every?: AlbumWhereInput
  albums_some?: AlbumWhereInput
  albums_none?: AlbumWhereInput
  song_every?: SongWhereInput
  song_some?: SongWhereInput
  song_none?: SongWhereInput
}

export interface ArtistCreateWithoutAlbumsInput {
  name: String
  pic?: String
  song?: SongCreateManyWithoutArtistInput
}

export interface ArtistSubscriptionWhereInput {
  AND?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  OR?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  NOT?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ArtistWhereInput
}

export interface ArtistUpdateWithoutSongDataInput {
  name?: String
  pic?: String
  albums?: AlbumUpdateManyWithoutArtistInput
}

export interface AlbumWhereUniqueInput {
  id?: ID_Input
}

export interface ArtistCreateManyWithoutSongInput {
  create?: ArtistCreateWithoutSongInput[] | ArtistCreateWithoutSongInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
}

export interface SongUpdateInput {
  name?: String
  length?: String
  songPic?: String
  artist?: ArtistUpdateManyWithoutSongInput
}

export interface ArtistCreateWithoutSongInput {
  name: String
  pic?: String
  albums?: AlbumCreateManyWithoutArtistInput
}

export interface ArtistUpdateManyWithoutAlbumsInput {
  create?: ArtistCreateWithoutAlbumsInput[] | ArtistCreateWithoutAlbumsInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  update?: ArtistUpdateWithWhereUniqueWithoutAlbumsInput[] | ArtistUpdateWithWhereUniqueWithoutAlbumsInput
  upsert?: ArtistUpsertWithWhereUniqueWithoutAlbumsInput[] | ArtistUpsertWithWhereUniqueWithoutAlbumsInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneRequiredWithoutPostsInput
}

export interface SongUpdateWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput
  data: SongUpdateWithoutArtistDataInput
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface SongWhereInput {
  AND?: SongWhereInput[] | SongWhereInput
  OR?: SongWhereInput[] | SongWhereInput
  NOT?: SongWhereInput[] | SongWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  length?: String
  length_not?: String
  length_in?: String[] | String
  length_not_in?: String[] | String
  length_lt?: String
  length_lte?: String
  length_gt?: String
  length_gte?: String
  length_contains?: String
  length_not_contains?: String
  length_starts_with?: String
  length_not_starts_with?: String
  length_ends_with?: String
  length_not_ends_with?: String
  songPic?: String
  songPic_not?: String
  songPic_in?: String[] | String
  songPic_not_in?: String[] | String
  songPic_lt?: String
  songPic_lte?: String
  songPic_gt?: String
  songPic_gte?: String
  songPic_contains?: String
  songPic_not_contains?: String
  songPic_starts_with?: String
  songPic_not_starts_with?: String
  songPic_ends_with?: String
  songPic_not_ends_with?: String
  artist_every?: ArtistWhereInput
  artist_some?: ArtistWhereInput
  artist_none?: ArtistWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface ArtistUpdateWithoutAlbumsDataInput {
  name?: String
  pic?: String
  song?: SongUpdateManyWithoutArtistInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface SongUpsertWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput
  update: SongUpdateWithoutArtistDataInput
  create: SongCreateWithoutArtistInput
}

export interface ArtistUpdateWithWhereUniqueWithoutSongInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateWithoutSongDataInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface SongSubscriptionWhereInput {
  AND?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  OR?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  NOT?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SongWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface SongPreviousValues {
  id: ID_Output
  name: String
  length?: String
  songPic?: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AlbumSubscriptionPayload {
  mutation: MutationType
  node?: Album
  updatedFields?: String[]
  previousValues?: AlbumPreviousValues
}

export interface Song extends Node {
  id: ID_Output
  name: String
  length?: String
  songPic?: String
  artist?: Artist[]
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface AggregateSong {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface SongConnection {
  pageInfo: PageInfo
  edges: SongEdge[]
  aggregate: AggregateSong
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface AlbumEdge {
  node: Album
  cursor: String
}

export interface SongSubscriptionPayload {
  mutation: MutationType
  node?: Song
  updatedFields?: String[]
  previousValues?: SongPreviousValues
}

export interface AggregateArtist {
  count: Int
}

export interface Album extends Node {
  id: ID_Output
  name: String
  date: String
  genre?: String
  albumPiC?: String
  artist?: Artist[]
}

/*
 * A connection to a list of items.

 */
export interface ArtistConnection {
  pageInfo: PageInfo
  edges: ArtistEdge[]
  aggregate: AggregateArtist
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregatePost {
  count: Int
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AlbumPreviousValues {
  id: ID_Output
  name: String
  date: String
  genre?: String
  albumPiC?: String
}

export interface AggregateAlbum {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ArtistEdge {
  node: Artist
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface ArtistPreviousValues {
  id: ID_Output
  name: String
  pic?: String
}

export interface ArtistSubscriptionPayload {
  mutation: MutationType
  node?: Artist
  updatedFields?: String[]
  previousValues?: ArtistPreviousValues
}

export interface Artist extends Node {
  id: ID_Output
  name: String
  pic?: String
  albums?: Album[]
  song?: Song[]
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AlbumConnection {
  pageInfo: PageInfo
  edges: AlbumEdge[]
  aggregate: AggregateAlbum
}

/*
 * An edge in a connection.

 */
export interface SongEdge {
  node: Song
  cursor: String
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number
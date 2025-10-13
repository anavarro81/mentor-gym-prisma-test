/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Coach
 *
 */
export type Coach = $Result.DefaultSelection<Prisma.$CoachPayload>;
/**
 * Model Athlete
 *
 */
export type Athlete = $Result.DefaultSelection<Prisma.$AthletePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
    active: "active";
    pending: "pending";
    blocked: "blocked";
    deleted: "deleted";
  };

  export type Status = (typeof Status)[keyof typeof Status];
}

export type Status = $Enums.Status;

export const Status: typeof $Enums.Status;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coach`: Exposes CRUD operations for the **Coach** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Coaches
   * const coaches = await prisma.coach.findMany()
   * ```
   */
  get coach(): Prisma.CoachDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athlete`: Exposes CRUD operations for the **Athlete** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Athletes
   * const athletes = await prisma.athlete.findMany()
   * ```
   */
  get athlete(): Prisma.AthleteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Coach: "Coach";
    Athlete: "Athlete";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "user" | "coach" | "athlete";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Coach: {
        payload: Prisma.$CoachPayload<ExtArgs>;
        fields: Prisma.CoachFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CoachFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CoachFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          findFirst: {
            args: Prisma.CoachFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CoachFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          findMany: {
            args: Prisma.CoachFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[];
          };
          create: {
            args: Prisma.CoachCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          createMany: {
            args: Prisma.CoachCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CoachCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[];
          };
          delete: {
            args: Prisma.CoachDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          update: {
            args: Prisma.CoachUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          deleteMany: {
            args: Prisma.CoachDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CoachUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CoachUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[];
          };
          upsert: {
            args: Prisma.CoachUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>;
          };
          aggregate: {
            args: Prisma.CoachAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCoach>;
          };
          groupBy: {
            args: Prisma.CoachGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CoachGroupByOutputType>[];
          };
          count: {
            args: Prisma.CoachCountArgs<ExtArgs>;
            result: $Utils.Optional<CoachCountAggregateOutputType> | number;
          };
        };
      };
      Athlete: {
        payload: Prisma.$AthletePayload<ExtArgs>;
        fields: Prisma.AthleteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AthleteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AthleteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          findFirst: {
            args: Prisma.AthleteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AthleteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          findMany: {
            args: Prisma.AthleteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[];
          };
          create: {
            args: Prisma.AthleteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          createMany: {
            args: Prisma.AthleteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AthleteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[];
          };
          delete: {
            args: Prisma.AthleteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          update: {
            args: Prisma.AthleteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          deleteMany: {
            args: Prisma.AthleteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AthleteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AthleteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[];
          };
          upsert: {
            args: Prisma.AthleteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>;
          };
          aggregate: {
            args: Prisma.AthleteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAthlete>;
          };
          groupBy: {
            args: Prisma.AthleteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AthleteGroupByOutputType>[];
          };
          count: {
            args: Prisma.AthleteCountArgs<ExtArgs>;
            result: $Utils.Optional<AthleteCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    coach?: CoachOmit;
    athlete?: AthleteOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CoachCountOutputType
   */

  export type CoachCountOutputType = {
    athletes: number;
  };

  export type CoachCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    athletes?: boolean | CoachCountOutputTypeCountAthletesArgs;
  };

  // Custom InputTypes
  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoachCountOutputType
     */
    select?: CoachCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountAthletesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AthleteWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    password_hash: string | null;
    name: string | null;
    profile_picture_url: string | null;
    status: $Enums.Status | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    password_hash: string | null;
    name: string | null;
    profile_picture_url: string | null;
    status: $Enums.Status | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    name: number;
    profile_picture_url: number;
    status: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    profile_picture_url?: true;
    status?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    profile_picture_url?: true;
    status?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    profile_picture_url?: true;
    status?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url: string | null;
    status: $Enums.Status;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password_hash?: boolean;
      name?: boolean;
      profile_picture_url?: boolean;
      status?: boolean;
      coach?: boolean | User$coachArgs<ExtArgs>;
      athlete?: boolean | User$athleteArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password_hash?: boolean;
      name?: boolean;
      profile_picture_url?: boolean;
      status?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password_hash?: boolean;
      name?: boolean;
      profile_picture_url?: boolean;
      status?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    name?: boolean;
    profile_picture_url?: boolean;
    status?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "email"
    | "password_hash"
    | "name"
    | "profile_picture_url"
    | "status",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    coach?: boolean | User$coachArgs<ExtArgs>;
    athlete?: boolean | User$athleteArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      coach: Prisma.$CoachPayload<ExtArgs> | null;
      athlete: Prisma.$AthletePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        password_hash: string;
        name: string;
        profile_picture_url: string | null;
        status: $Enums.Status;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    coach<T extends User$coachArgs<ExtArgs> = {}>(
      args?: Subset<T, User$coachArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    athlete<T extends User$athleteArgs<ExtArgs> = {}>(
      args?: Subset<T, User$athleteArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly email: FieldRef<"User", "String">;
    readonly password_hash: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly profile_picture_url: FieldRef<"User", "String">;
    readonly status: FieldRef<"User", "Status">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.coach
   */
  export type User$coachArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    where?: CoachWhereInput;
  };

  /**
   * User.athlete
   */
  export type User$athleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    where?: AthleteWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Coach
   */

  export type AggregateCoach = {
    _count: CoachCountAggregateOutputType | null;
    _avg: CoachAvgAggregateOutputType | null;
    _sum: CoachSumAggregateOutputType | null;
    _min: CoachMinAggregateOutputType | null;
    _max: CoachMaxAggregateOutputType | null;
  };

  export type CoachAvgAggregateOutputType = {
    id: number | null;
    rating: number | null;
  };

  export type CoachSumAggregateOutputType = {
    id: number | null;
    rating: number | null;
  };

  export type CoachMinAggregateOutputType = {
    id: number | null;
    description: string | null;
    rating: number | null;
  };

  export type CoachMaxAggregateOutputType = {
    id: number | null;
    description: string | null;
    rating: number | null;
  };

  export type CoachCountAggregateOutputType = {
    id: number;
    description: number;
    rating: number;
    _all: number;
  };

  export type CoachAvgAggregateInputType = {
    id?: true;
    rating?: true;
  };

  export type CoachSumAggregateInputType = {
    id?: true;
    rating?: true;
  };

  export type CoachMinAggregateInputType = {
    id?: true;
    description?: true;
    rating?: true;
  };

  export type CoachMaxAggregateInputType = {
    id?: true;
    description?: true;
    rating?: true;
  };

  export type CoachCountAggregateInputType = {
    id?: true;
    description?: true;
    rating?: true;
    _all?: true;
  };

  export type CoachAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Coach to aggregate.
     */
    where?: CoachWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CoachWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Coaches
     **/
    _count?: true | CoachCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CoachAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CoachSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CoachMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CoachMaxAggregateInputType;
  };

  export type GetCoachAggregateType<T extends CoachAggregateArgs> = {
    [P in keyof T & keyof AggregateCoach]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoach[P]>
      : GetScalarType<T[P], AggregateCoach[P]>;
  };

  export type CoachGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CoachWhereInput;
    orderBy?:
      | CoachOrderByWithAggregationInput
      | CoachOrderByWithAggregationInput[];
    by: CoachScalarFieldEnum[] | CoachScalarFieldEnum;
    having?: CoachScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoachCountAggregateInputType | true;
    _avg?: CoachAvgAggregateInputType;
    _sum?: CoachSumAggregateInputType;
    _min?: CoachMinAggregateInputType;
    _max?: CoachMaxAggregateInputType;
  };

  export type CoachGroupByOutputType = {
    id: number;
    description: string;
    rating: number;
    _count: CoachCountAggregateOutputType | null;
    _avg: CoachAvgAggregateOutputType | null;
    _sum: CoachSumAggregateOutputType | null;
    _min: CoachMinAggregateOutputType | null;
    _max: CoachMaxAggregateOutputType | null;
  };

  type GetCoachGroupByPayload<T extends CoachGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CoachGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CoachGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachGroupByOutputType[P]>
            : GetScalarType<T[P], CoachGroupByOutputType[P]>;
        }
      >
    >;

  export type CoachSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      rating?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      athletes?: boolean | Coach$athletesArgs<ExtArgs>;
      _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["coach"]
  >;

  export type CoachSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      rating?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["coach"]
  >;

  export type CoachSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      rating?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["coach"]
  >;

  export type CoachSelectScalar = {
    id?: boolean;
    description?: boolean;
    rating?: boolean;
  };

  export type CoachOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "description" | "rating",
    ExtArgs["result"]["coach"]
  >;
  export type CoachInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    athletes?: boolean | Coach$athletesArgs<ExtArgs>;
    _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CoachIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CoachIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CoachPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Coach";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      athletes: Prisma.$AthletePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        description: string;
        rating: number;
      },
      ExtArgs["result"]["coach"]
    >;
    composites: {};
  };

  type CoachGetPayload<
    S extends boolean | null | undefined | CoachDefaultArgs,
  > = $Result.GetResult<Prisma.$CoachPayload, S>;

  type CoachCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CoachFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CoachCountAggregateInputType | true;
  };

  export interface CoachDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Coach"];
      meta: { name: "Coach" };
    };
    /**
     * Find zero or one Coach that matches the filter.
     * @param {CoachFindUniqueArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachFindUniqueArgs>(
      args: SelectSubset<T, CoachFindUniqueArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Coach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachFindUniqueOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CoachFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Coach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachFindFirstArgs>(
      args?: SelectSubset<T, CoachFindFirstArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Coach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoachFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coaches
     * const coaches = await prisma.coach.findMany()
     *
     * // Get first 10 Coaches
     * const coaches = await prisma.coach.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coachWithIdOnly = await prisma.coach.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CoachFindManyArgs>(
      args?: SelectSubset<T, CoachFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Coach.
     * @param {CoachCreateArgs} args - Arguments to create a Coach.
     * @example
     * // Create one Coach
     * const Coach = await prisma.coach.create({
     *   data: {
     *     // ... data to create a Coach
     *   }
     * })
     *
     */
    create<T extends CoachCreateArgs>(
      args: SelectSubset<T, CoachCreateArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Coaches.
     * @param {CoachCreateManyArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CoachCreateManyArgs>(
      args?: SelectSubset<T, CoachCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Coaches and returns the data saved in the database.
     * @param {CoachCreateManyAndReturnArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CoachCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CoachCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Coach.
     * @param {CoachDeleteArgs} args - Arguments to delete one Coach.
     * @example
     * // Delete one Coach
     * const Coach = await prisma.coach.delete({
     *   where: {
     *     // ... filter to delete one Coach
     *   }
     * })
     *
     */
    delete<T extends CoachDeleteArgs>(
      args: SelectSubset<T, CoachDeleteArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Coach.
     * @param {CoachUpdateArgs} args - Arguments to update one Coach.
     * @example
     * // Update one Coach
     * const coach = await prisma.coach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CoachUpdateArgs>(
      args: SelectSubset<T, CoachUpdateArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Coaches.
     * @param {CoachDeleteManyArgs} args - Arguments to filter Coaches to delete.
     * @example
     * // Delete a few Coaches
     * const { count } = await prisma.coach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CoachDeleteManyArgs>(
      args?: SelectSubset<T, CoachDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CoachUpdateManyArgs>(
      args: SelectSubset<T, CoachUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Coaches and returns the data updated in the database.
     * @param {CoachUpdateManyAndReturnArgs} args - Arguments to update many Coaches.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CoachUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CoachUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Coach.
     * @param {CoachUpsertArgs} args - Arguments to update or create a Coach.
     * @example
     * // Update or create a Coach
     * const coach = await prisma.coach.upsert({
     *   create: {
     *     // ... data to create a Coach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coach we want to update
     *   }
     * })
     */
    upsert<T extends CoachUpsertArgs>(
      args: SelectSubset<T, CoachUpsertArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachCountArgs} args - Arguments to filter Coaches to count.
     * @example
     * // Count the number of Coaches
     * const count = await prisma.coach.count({
     *   where: {
     *     // ... the filter for the Coaches we want to count
     *   }
     * })
     **/
    count<T extends CoachCountArgs>(
      args?: Subset<T, CoachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CoachCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CoachAggregateArgs>(
      args: Subset<T, CoachAggregateArgs>,
    ): Prisma.PrismaPromise<GetCoachAggregateType<T>>;

    /**
     * Group by Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CoachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachGroupByArgs["orderBy"] }
        : { orderBy?: CoachGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CoachGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCoachGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Coach model
     */
    readonly fields: CoachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    athletes<T extends Coach$athletesArgs<ExtArgs> = {}>(
      args?: Subset<T, Coach$athletesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AthletePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Coach model
   */
  interface CoachFieldRefs {
    readonly id: FieldRef<"Coach", "Int">;
    readonly description: FieldRef<"Coach", "String">;
    readonly rating: FieldRef<"Coach", "Float">;
  }

  // Custom InputTypes
  /**
   * Coach findUnique
   */
  export type CoachFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput;
  };

  /**
   * Coach findUniqueOrThrow
   */
  export type CoachFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput;
  };

  /**
   * Coach findFirst
   */
  export type CoachFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[];
  };

  /**
   * Coach findFirstOrThrow
   */
  export type CoachFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[];
  };

  /**
   * Coach findMany
   */
  export type CoachFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Coaches.
     */
    cursor?: CoachWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coaches.
     */
    skip?: number;
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[];
  };

  /**
   * Coach create
   */
  export type CoachCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * The data needed to create a Coach.
     */
    data: XOR<CoachCreateInput, CoachUncheckedCreateInput>;
  };

  /**
   * Coach createMany
   */
  export type CoachCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Coach createManyAndReturn
   */
  export type CoachCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Coach update
   */
  export type CoachUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * The data needed to update a Coach.
     */
    data: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>;
    /**
     * Choose, which Coach to update.
     */
    where: CoachWhereUniqueInput;
  };

  /**
   * Coach updateMany
   */
  export type CoachUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>;
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput;
    /**
     * Limit how many Coaches to update.
     */
    limit?: number;
  };

  /**
   * Coach updateManyAndReturn
   */
  export type CoachUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>;
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput;
    /**
     * Limit how many Coaches to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Coach upsert
   */
  export type CoachUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * The filter to search for the Coach to update in case it exists.
     */
    where: CoachWhereUniqueInput;
    /**
     * In case the Coach found by the `where` argument doesn't exist, create a new Coach with this data.
     */
    create: XOR<CoachCreateInput, CoachUncheckedCreateInput>;
    /**
     * In case the Coach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>;
  };

  /**
   * Coach delete
   */
  export type CoachDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    /**
     * Filter which Coach to delete.
     */
    where: CoachWhereUniqueInput;
  };

  /**
   * Coach deleteMany
   */
  export type CoachDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Coaches to delete
     */
    where?: CoachWhereInput;
    /**
     * Limit how many Coaches to delete.
     */
    limit?: number;
  };

  /**
   * Coach.athletes
   */
  export type Coach$athletesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    where?: AthleteWhereInput;
    orderBy?:
      | AthleteOrderByWithRelationInput
      | AthleteOrderByWithRelationInput[];
    cursor?: AthleteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[];
  };

  /**
   * Coach without action
   */
  export type CoachDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
  };

  /**
   * Model Athlete
   */

  export type AggregateAthlete = {
    _count: AthleteCountAggregateOutputType | null;
    _avg: AthleteAvgAggregateOutputType | null;
    _sum: AthleteSumAggregateOutputType | null;
    _min: AthleteMinAggregateOutputType | null;
    _max: AthleteMaxAggregateOutputType | null;
  };

  export type AthleteAvgAggregateOutputType = {
    id: number | null;
    height: number | null;
    weight: number | null;
    coachId: number | null;
  };

  export type AthleteSumAggregateOutputType = {
    id: number | null;
    height: number | null;
    weight: number | null;
    coachId: number | null;
  };

  export type AthleteMinAggregateOutputType = {
    id: number | null;
    height: number | null;
    weight: number | null;
    birthday: Date | null;
    Connection_status: string | null;
    coachId: number | null;
  };

  export type AthleteMaxAggregateOutputType = {
    id: number | null;
    height: number | null;
    weight: number | null;
    birthday: Date | null;
    Connection_status: string | null;
    coachId: number | null;
  };

  export type AthleteCountAggregateOutputType = {
    id: number;
    height: number;
    weight: number;
    birthday: number;
    Connection_status: number;
    coachId: number;
    _all: number;
  };

  export type AthleteAvgAggregateInputType = {
    id?: true;
    height?: true;
    weight?: true;
    coachId?: true;
  };

  export type AthleteSumAggregateInputType = {
    id?: true;
    height?: true;
    weight?: true;
    coachId?: true;
  };

  export type AthleteMinAggregateInputType = {
    id?: true;
    height?: true;
    weight?: true;
    birthday?: true;
    Connection_status?: true;
    coachId?: true;
  };

  export type AthleteMaxAggregateInputType = {
    id?: true;
    height?: true;
    weight?: true;
    birthday?: true;
    Connection_status?: true;
    coachId?: true;
  };

  export type AthleteCountAggregateInputType = {
    id?: true;
    height?: true;
    weight?: true;
    birthday?: true;
    Connection_status?: true;
    coachId?: true;
    _all?: true;
  };

  export type AthleteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Athlete to aggregate.
     */
    where?: AthleteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Athletes to fetch.
     */
    orderBy?:
      | AthleteOrderByWithRelationInput
      | AthleteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AthleteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Athletes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Athletes
     **/
    _count?: true | AthleteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AthleteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AthleteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AthleteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AthleteMaxAggregateInputType;
  };

  export type GetAthleteAggregateType<T extends AthleteAggregateArgs> = {
    [P in keyof T & keyof AggregateAthlete]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthlete[P]>
      : GetScalarType<T[P], AggregateAthlete[P]>;
  };

  export type AthleteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AthleteWhereInput;
    orderBy?:
      | AthleteOrderByWithAggregationInput
      | AthleteOrderByWithAggregationInput[];
    by: AthleteScalarFieldEnum[] | AthleteScalarFieldEnum;
    having?: AthleteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AthleteCountAggregateInputType | true;
    _avg?: AthleteAvgAggregateInputType;
    _sum?: AthleteSumAggregateInputType;
    _min?: AthleteMinAggregateInputType;
    _max?: AthleteMaxAggregateInputType;
  };

  export type AthleteGroupByOutputType = {
    id: number;
    height: number | null;
    weight: number | null;
    birthday: Date | null;
    Connection_status: string;
    coachId: number | null;
    _count: AthleteCountAggregateOutputType | null;
    _avg: AthleteAvgAggregateOutputType | null;
    _sum: AthleteSumAggregateOutputType | null;
    _min: AthleteMinAggregateOutputType | null;
    _max: AthleteMaxAggregateOutputType | null;
  };

  type GetAthleteGroupByPayload<T extends AthleteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AthleteGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AthleteGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthleteGroupByOutputType[P]>
            : GetScalarType<T[P], AthleteGroupByOutputType[P]>;
        }
      >
    >;

  export type AthleteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      height?: boolean;
      weight?: boolean;
      birthday?: boolean;
      Connection_status?: boolean;
      coachId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      coach?: boolean | Athlete$coachArgs<ExtArgs>;
    },
    ExtArgs["result"]["athlete"]
  >;

  export type AthleteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      height?: boolean;
      weight?: boolean;
      birthday?: boolean;
      Connection_status?: boolean;
      coachId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      coach?: boolean | Athlete$coachArgs<ExtArgs>;
    },
    ExtArgs["result"]["athlete"]
  >;

  export type AthleteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      height?: boolean;
      weight?: boolean;
      birthday?: boolean;
      Connection_status?: boolean;
      coachId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      coach?: boolean | Athlete$coachArgs<ExtArgs>;
    },
    ExtArgs["result"]["athlete"]
  >;

  export type AthleteSelectScalar = {
    id?: boolean;
    height?: boolean;
    weight?: boolean;
    birthday?: boolean;
    Connection_status?: boolean;
    coachId?: boolean;
  };

  export type AthleteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "height" | "weight" | "birthday" | "Connection_status" | "coachId",
    ExtArgs["result"]["athlete"]
  >;
  export type AthleteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    coach?: boolean | Athlete$coachArgs<ExtArgs>;
  };
  export type AthleteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    coach?: boolean | Athlete$coachArgs<ExtArgs>;
  };
  export type AthleteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    coach?: boolean | Athlete$coachArgs<ExtArgs>;
  };

  export type $AthletePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Athlete";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      coach: Prisma.$CoachPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        height: number | null;
        weight: number | null;
        birthday: Date | null;
        Connection_status: string;
        coachId: number | null;
      },
      ExtArgs["result"]["athlete"]
    >;
    composites: {};
  };

  type AthleteGetPayload<
    S extends boolean | null | undefined | AthleteDefaultArgs,
  > = $Result.GetResult<Prisma.$AthletePayload, S>;

  type AthleteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AthleteFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AthleteCountAggregateInputType | true;
  };

  export interface AthleteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Athlete"];
      meta: { name: "Athlete" };
    };
    /**
     * Find zero or one Athlete that matches the filter.
     * @param {AthleteFindUniqueArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AthleteFindUniqueArgs>(
      args: SelectSubset<T, AthleteFindUniqueArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Athlete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AthleteFindUniqueOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AthleteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AthleteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Athlete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindFirstArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AthleteFindFirstArgs>(
      args?: SelectSubset<T, AthleteFindFirstArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Athlete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindFirstOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AthleteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AthleteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athletes
     * const athletes = await prisma.athlete.findMany()
     *
     * // Get first 10 Athletes
     * const athletes = await prisma.athlete.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const athleteWithIdOnly = await prisma.athlete.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AthleteFindManyArgs>(
      args?: SelectSubset<T, AthleteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Athlete.
     * @param {AthleteCreateArgs} args - Arguments to create a Athlete.
     * @example
     * // Create one Athlete
     * const Athlete = await prisma.athlete.create({
     *   data: {
     *     // ... data to create a Athlete
     *   }
     * })
     *
     */
    create<T extends AthleteCreateArgs>(
      args: SelectSubset<T, AthleteCreateArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Athletes.
     * @param {AthleteCreateManyArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AthleteCreateManyArgs>(
      args?: SelectSubset<T, AthleteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Athletes and returns the data saved in the database.
     * @param {AthleteCreateManyAndReturnArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AthleteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AthleteCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Athlete.
     * @param {AthleteDeleteArgs} args - Arguments to delete one Athlete.
     * @example
     * // Delete one Athlete
     * const Athlete = await prisma.athlete.delete({
     *   where: {
     *     // ... filter to delete one Athlete
     *   }
     * })
     *
     */
    delete<T extends AthleteDeleteArgs>(
      args: SelectSubset<T, AthleteDeleteArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Athlete.
     * @param {AthleteUpdateArgs} args - Arguments to update one Athlete.
     * @example
     * // Update one Athlete
     * const athlete = await prisma.athlete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AthleteUpdateArgs>(
      args: SelectSubset<T, AthleteUpdateArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Athletes.
     * @param {AthleteDeleteManyArgs} args - Arguments to filter Athletes to delete.
     * @example
     * // Delete a few Athletes
     * const { count } = await prisma.athlete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AthleteDeleteManyArgs>(
      args?: SelectSubset<T, AthleteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AthleteUpdateManyArgs>(
      args: SelectSubset<T, AthleteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Athletes and returns the data updated in the database.
     * @param {AthleteUpdateManyAndReturnArgs} args - Arguments to update many Athletes.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AthleteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AthleteUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Athlete.
     * @param {AthleteUpsertArgs} args - Arguments to update or create a Athlete.
     * @example
     * // Update or create a Athlete
     * const athlete = await prisma.athlete.upsert({
     *   create: {
     *     // ... data to create a Athlete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athlete we want to update
     *   }
     * })
     */
    upsert<T extends AthleteUpsertArgs>(
      args: SelectSubset<T, AthleteUpsertArgs<ExtArgs>>,
    ): Prisma__AthleteClient<
      $Result.GetResult<
        Prisma.$AthletePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteCountArgs} args - Arguments to filter Athletes to count.
     * @example
     * // Count the number of Athletes
     * const count = await prisma.athlete.count({
     *   where: {
     *     // ... the filter for the Athletes we want to count
     *   }
     * })
     **/
    count<T extends AthleteCountArgs>(
      args?: Subset<T, AthleteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AthleteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AthleteAggregateArgs>(
      args: Subset<T, AthleteAggregateArgs>,
    ): Prisma.PrismaPromise<GetAthleteAggregateType<T>>;

    /**
     * Group by Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AthleteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AthleteGroupByArgs["orderBy"] }
        : { orderBy?: AthleteGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AthleteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAthleteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Athlete model
     */
    readonly fields: AthleteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Athlete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AthleteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    coach<T extends Athlete$coachArgs<ExtArgs> = {}>(
      args?: Subset<T, Athlete$coachArgs<ExtArgs>>,
    ): Prisma__CoachClient<
      $Result.GetResult<
        Prisma.$CoachPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Athlete model
   */
  interface AthleteFieldRefs {
    readonly id: FieldRef<"Athlete", "Int">;
    readonly height: FieldRef<"Athlete", "Float">;
    readonly weight: FieldRef<"Athlete", "Float">;
    readonly birthday: FieldRef<"Athlete", "DateTime">;
    readonly Connection_status: FieldRef<"Athlete", "String">;
    readonly coachId: FieldRef<"Athlete", "Int">;
  }

  // Custom InputTypes
  /**
   * Athlete findUnique
   */
  export type AthleteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter, which Athlete to fetch.
     */
    where: AthleteWhereUniqueInput;
  };

  /**
   * Athlete findUniqueOrThrow
   */
  export type AthleteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter, which Athlete to fetch.
     */
    where: AthleteWhereUniqueInput;
  };

  /**
   * Athlete findFirst
   */
  export type AthleteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter, which Athlete to fetch.
     */
    where?: AthleteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Athletes to fetch.
     */
    orderBy?:
      | AthleteOrderByWithRelationInput
      | AthleteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Athletes.
     */
    cursor?: AthleteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Athletes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[];
  };

  /**
   * Athlete findFirstOrThrow
   */
  export type AthleteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter, which Athlete to fetch.
     */
    where?: AthleteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Athletes to fetch.
     */
    orderBy?:
      | AthleteOrderByWithRelationInput
      | AthleteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Athletes.
     */
    cursor?: AthleteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Athletes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[];
  };

  /**
   * Athlete findMany
   */
  export type AthleteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter, which Athletes to fetch.
     */
    where?: AthleteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Athletes to fetch.
     */
    orderBy?:
      | AthleteOrderByWithRelationInput
      | AthleteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Athletes.
     */
    cursor?: AthleteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Athletes.
     */
    skip?: number;
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[];
  };

  /**
   * Athlete create
   */
  export type AthleteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Athlete.
     */
    data: XOR<AthleteCreateInput, AthleteUncheckedCreateInput>;
  };

  /**
   * Athlete createMany
   */
  export type AthleteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Athletes.
     */
    data: AthleteCreateManyInput | AthleteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Athlete createManyAndReturn
   */
  export type AthleteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * The data used to create many Athletes.
     */
    data: AthleteCreateManyInput | AthleteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Athlete update
   */
  export type AthleteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Athlete.
     */
    data: XOR<AthleteUpdateInput, AthleteUncheckedUpdateInput>;
    /**
     * Choose, which Athlete to update.
     */
    where: AthleteWhereUniqueInput;
  };

  /**
   * Athlete updateMany
   */
  export type AthleteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthleteUpdateManyMutationInput, AthleteUncheckedUpdateManyInput>;
    /**
     * Filter which Athletes to update
     */
    where?: AthleteWhereInput;
    /**
     * Limit how many Athletes to update.
     */
    limit?: number;
  };

  /**
   * Athlete updateManyAndReturn
   */
  export type AthleteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthleteUpdateManyMutationInput, AthleteUncheckedUpdateManyInput>;
    /**
     * Filter which Athletes to update
     */
    where?: AthleteWhereInput;
    /**
     * Limit how many Athletes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Athlete upsert
   */
  export type AthleteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Athlete to update in case it exists.
     */
    where: AthleteWhereUniqueInput;
    /**
     * In case the Athlete found by the `where` argument doesn't exist, create a new Athlete with this data.
     */
    create: XOR<AthleteCreateInput, AthleteUncheckedCreateInput>;
    /**
     * In case the Athlete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AthleteUpdateInput, AthleteUncheckedUpdateInput>;
  };

  /**
   * Athlete delete
   */
  export type AthleteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
    /**
     * Filter which Athlete to delete.
     */
    where: AthleteWhereUniqueInput;
  };

  /**
   * Athlete deleteMany
   */
  export type AthleteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Athletes to delete
     */
    where?: AthleteWhereInput;
    /**
     * Limit how many Athletes to delete.
     */
    limit?: number;
  };

  /**
   * Athlete.coach
   */
  export type Athlete$coachArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null;
    where?: CoachWhereInput;
  };

  /**
   * Athlete without action
   */
  export type AthleteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    password_hash: "password_hash";
    name: "name";
    profile_picture_url: "profile_picture_url";
    status: "status";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const CoachScalarFieldEnum: {
    id: "id";
    description: "description";
    rating: "rating";
  };

  export type CoachScalarFieldEnum =
    (typeof CoachScalarFieldEnum)[keyof typeof CoachScalarFieldEnum];

  export const AthleteScalarFieldEnum: {
    id: "id";
    height: "height";
    weight: "weight";
    birthday: "birthday";
    Connection_status: "Connection_status";
    coachId: "coachId";
  };

  export type AthleteScalarFieldEnum =
    (typeof AthleteScalarFieldEnum)[keyof typeof AthleteScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Status"
  >;

  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Status[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    email?: StringFilter<"User"> | string;
    password_hash?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    profile_picture_url?: StringNullableFilter<"User"> | string | null;
    status?: EnumStatusFilter<"User"> | $Enums.Status;
    coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null;
    athlete?: XOR<
      AthleteNullableScalarRelationFilter,
      AthleteWhereInput
    > | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    name?: SortOrder;
    profile_picture_url?: SortOrderInput | SortOrder;
    status?: SortOrder;
    coach?: CoachOrderByWithRelationInput;
    athlete?: AthleteOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password_hash?: StringFilter<"User"> | string;
      name?: StringFilter<"User"> | string;
      profile_picture_url?: StringNullableFilter<"User"> | string | null;
      status?: EnumStatusFilter<"User"> | $Enums.Status;
      coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null;
      athlete?: XOR<
        AthleteNullableScalarRelationFilter,
        AthleteWhereInput
      > | null;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    name?: SortOrder;
    profile_picture_url?: SortOrderInput | SortOrder;
    status?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    email?: StringWithAggregatesFilter<"User"> | string;
    password_hash?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    profile_picture_url?:
      | StringNullableWithAggregatesFilter<"User">
      | string
      | null;
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status;
  };

  export type CoachWhereInput = {
    AND?: CoachWhereInput | CoachWhereInput[];
    OR?: CoachWhereInput[];
    NOT?: CoachWhereInput | CoachWhereInput[];
    id?: IntFilter<"Coach"> | number;
    description?: StringFilter<"Coach"> | string;
    rating?: FloatFilter<"Coach"> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    athletes?: AthleteListRelationFilter;
  };

  export type CoachOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    user?: UserOrderByWithRelationInput;
    athletes?: AthleteOrderByRelationAggregateInput;
  };

  export type CoachWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CoachWhereInput | CoachWhereInput[];
      OR?: CoachWhereInput[];
      NOT?: CoachWhereInput | CoachWhereInput[];
      description?: StringFilter<"Coach"> | string;
      rating?: FloatFilter<"Coach"> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      athletes?: AthleteListRelationFilter;
    },
    "id"
  >;

  export type CoachOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    _count?: CoachCountOrderByAggregateInput;
    _avg?: CoachAvgOrderByAggregateInput;
    _max?: CoachMaxOrderByAggregateInput;
    _min?: CoachMinOrderByAggregateInput;
    _sum?: CoachSumOrderByAggregateInput;
  };

  export type CoachScalarWhereWithAggregatesInput = {
    AND?:
      | CoachScalarWhereWithAggregatesInput
      | CoachScalarWhereWithAggregatesInput[];
    OR?: CoachScalarWhereWithAggregatesInput[];
    NOT?:
      | CoachScalarWhereWithAggregatesInput
      | CoachScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Coach"> | number;
    description?: StringWithAggregatesFilter<"Coach"> | string;
    rating?: FloatWithAggregatesFilter<"Coach"> | number;
  };

  export type AthleteWhereInput = {
    AND?: AthleteWhereInput | AthleteWhereInput[];
    OR?: AthleteWhereInput[];
    NOT?: AthleteWhereInput | AthleteWhereInput[];
    id?: IntFilter<"Athlete"> | number;
    height?: FloatNullableFilter<"Athlete"> | number | null;
    weight?: FloatNullableFilter<"Athlete"> | number | null;
    birthday?: DateTimeNullableFilter<"Athlete"> | Date | string | null;
    Connection_status?: StringFilter<"Athlete"> | string;
    coachId?: IntNullableFilter<"Athlete"> | number | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null;
  };

  export type AthleteOrderByWithRelationInput = {
    id?: SortOrder;
    height?: SortOrderInput | SortOrder;
    weight?: SortOrderInput | SortOrder;
    birthday?: SortOrderInput | SortOrder;
    Connection_status?: SortOrder;
    coachId?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    coach?: CoachOrderByWithRelationInput;
  };

  export type AthleteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: AthleteWhereInput | AthleteWhereInput[];
      OR?: AthleteWhereInput[];
      NOT?: AthleteWhereInput | AthleteWhereInput[];
      height?: FloatNullableFilter<"Athlete"> | number | null;
      weight?: FloatNullableFilter<"Athlete"> | number | null;
      birthday?: DateTimeNullableFilter<"Athlete"> | Date | string | null;
      Connection_status?: StringFilter<"Athlete"> | string;
      coachId?: IntNullableFilter<"Athlete"> | number | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null;
    },
    "id"
  >;

  export type AthleteOrderByWithAggregationInput = {
    id?: SortOrder;
    height?: SortOrderInput | SortOrder;
    weight?: SortOrderInput | SortOrder;
    birthday?: SortOrderInput | SortOrder;
    Connection_status?: SortOrder;
    coachId?: SortOrderInput | SortOrder;
    _count?: AthleteCountOrderByAggregateInput;
    _avg?: AthleteAvgOrderByAggregateInput;
    _max?: AthleteMaxOrderByAggregateInput;
    _min?: AthleteMinOrderByAggregateInput;
    _sum?: AthleteSumOrderByAggregateInput;
  };

  export type AthleteScalarWhereWithAggregatesInput = {
    AND?:
      | AthleteScalarWhereWithAggregatesInput
      | AthleteScalarWhereWithAggregatesInput[];
    OR?: AthleteScalarWhereWithAggregatesInput[];
    NOT?:
      | AthleteScalarWhereWithAggregatesInput
      | AthleteScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Athlete"> | number;
    height?: FloatNullableWithAggregatesFilter<"Athlete"> | number | null;
    weight?: FloatNullableWithAggregatesFilter<"Athlete"> | number | null;
    birthday?:
      | DateTimeNullableWithAggregatesFilter<"Athlete">
      | Date
      | string
      | null;
    Connection_status?: StringWithAggregatesFilter<"Athlete"> | string;
    coachId?: IntNullableWithAggregatesFilter<"Athlete"> | number | null;
  };

  export type UserCreateInput = {
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    coach?: CoachCreateNestedOneWithoutUserInput;
    athlete?: AthleteCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput;
    athlete?: AthleteUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    coach?: CoachUpdateOneWithoutUserNestedInput;
    athlete?: AthleteUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput;
    athlete?: AthleteUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
  };

  export type CoachCreateInput = {
    description: string;
    rating: number;
    user: UserCreateNestedOneWithoutCoachInput;
    athletes?: AthleteCreateNestedManyWithoutCoachInput;
  };

  export type CoachUncheckedCreateInput = {
    id: number;
    description: string;
    rating: number;
    athletes?: AthleteUncheckedCreateNestedManyWithoutCoachInput;
  };

  export type CoachUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutCoachNestedInput;
    athletes?: AthleteUpdateManyWithoutCoachNestedInput;
  };

  export type CoachUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    athletes?: AthleteUncheckedUpdateManyWithoutCoachNestedInput;
  };

  export type CoachCreateManyInput = {
    id: number;
    description: string;
    rating: number;
  };

  export type CoachUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
  };

  export type CoachUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
  };

  export type AthleteCreateInput = {
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    user: UserCreateNestedOneWithoutAthleteInput;
    coach?: CoachCreateNestedOneWithoutAthletesInput;
  };

  export type AthleteUncheckedCreateInput = {
    id: number;
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    coachId?: number | null;
  };

  export type AthleteUpdateInput = {
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutAthleteNestedInput;
    coach?: CoachUpdateOneWithoutAthletesNestedInput;
  };

  export type AthleteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    coachId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AthleteCreateManyInput = {
    id: number;
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    coachId?: number | null;
  };

  export type AthleteUpdateManyMutationInput = {
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
  };

  export type AthleteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    coachId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type CoachNullableScalarRelationFilter = {
    is?: CoachWhereInput | null;
    isNot?: CoachWhereInput | null;
  };

  export type AthleteNullableScalarRelationFilter = {
    is?: AthleteWhereInput | null;
    isNot?: AthleteWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    name?: SortOrder;
    profile_picture_url?: SortOrder;
    status?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    name?: SortOrder;
    profile_picture_url?: SortOrder;
    status?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    name?: SortOrder;
    profile_picture_url?: SortOrder;
    status?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type AthleteListRelationFilter = {
    every?: AthleteWhereInput;
    some?: AthleteWhereInput;
    none?: AthleteWhereInput;
  };

  export type AthleteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CoachCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
  };

  export type CoachAvgOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
  };

  export type CoachMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
  };

  export type CoachMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
  };

  export type CoachSumOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AthleteCountOrderByAggregateInput = {
    id?: SortOrder;
    height?: SortOrder;
    weight?: SortOrder;
    birthday?: SortOrder;
    Connection_status?: SortOrder;
    coachId?: SortOrder;
  };

  export type AthleteAvgOrderByAggregateInput = {
    id?: SortOrder;
    height?: SortOrder;
    weight?: SortOrder;
    coachId?: SortOrder;
  };

  export type AthleteMaxOrderByAggregateInput = {
    id?: SortOrder;
    height?: SortOrder;
    weight?: SortOrder;
    birthday?: SortOrder;
    Connection_status?: SortOrder;
    coachId?: SortOrder;
  };

  export type AthleteMinOrderByAggregateInput = {
    id?: SortOrder;
    height?: SortOrder;
    weight?: SortOrder;
    birthday?: SortOrder;
    Connection_status?: SortOrder;
    coachId?: SortOrder;
  };

  export type AthleteSumOrderByAggregateInput = {
    id?: SortOrder;
    height?: SortOrder;
    weight?: SortOrder;
    coachId?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type CoachCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;
    connect?: CoachWhereUniqueInput;
  };

  export type AthleteCreateNestedOneWithoutUserInput = {
    create?: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput;
    connect?: AthleteWhereUniqueInput;
  };

  export type CoachUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;
    connect?: CoachWhereUniqueInput;
  };

  export type AthleteUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput;
    connect?: AthleteWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
  };

  export type CoachUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;
    upsert?: CoachUpsertWithoutUserInput;
    disconnect?: CoachWhereInput | boolean;
    delete?: CoachWhereInput | boolean;
    connect?: CoachWhereUniqueInput;
    update?: XOR<
      XOR<
        CoachUpdateToOneWithWhereWithoutUserInput,
        CoachUpdateWithoutUserInput
      >,
      CoachUncheckedUpdateWithoutUserInput
    >;
  };

  export type AthleteUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput;
    upsert?: AthleteUpsertWithoutUserInput;
    disconnect?: AthleteWhereInput | boolean;
    delete?: AthleteWhereInput | boolean;
    connect?: AthleteWhereUniqueInput;
    update?: XOR<
      XOR<
        AthleteUpdateToOneWithWhereWithoutUserInput,
        AthleteUpdateWithoutUserInput
      >,
      AthleteUncheckedUpdateWithoutUserInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CoachUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;
    upsert?: CoachUpsertWithoutUserInput;
    disconnect?: CoachWhereInput | boolean;
    delete?: CoachWhereInput | boolean;
    connect?: CoachWhereUniqueInput;
    update?: XOR<
      XOR<
        CoachUpdateToOneWithWhereWithoutUserInput,
        CoachUpdateWithoutUserInput
      >,
      CoachUncheckedUpdateWithoutUserInput
    >;
  };

  export type AthleteUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput;
    upsert?: AthleteUpsertWithoutUserInput;
    disconnect?: AthleteWhereInput | boolean;
    delete?: AthleteWhereInput | boolean;
    connect?: AthleteWhereUniqueInput;
    update?: XOR<
      XOR<
        AthleteUpdateToOneWithWhereWithoutUserInput,
        AthleteUpdateWithoutUserInput
      >,
      AthleteUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserCreateNestedOneWithoutCoachInput = {
    create?: XOR<
      UserCreateWithoutCoachInput,
      UserUncheckedCreateWithoutCoachInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;
    connect?: UserWhereUniqueInput;
  };

  export type AthleteCreateNestedManyWithoutCoachInput = {
    create?:
      | XOR<
          AthleteCreateWithoutCoachInput,
          AthleteUncheckedCreateWithoutCoachInput
        >
      | AthleteCreateWithoutCoachInput[]
      | AthleteUncheckedCreateWithoutCoachInput[];
    connectOrCreate?:
      | AthleteCreateOrConnectWithoutCoachInput
      | AthleteCreateOrConnectWithoutCoachInput[];
    createMany?: AthleteCreateManyCoachInputEnvelope;
    connect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
  };

  export type AthleteUncheckedCreateNestedManyWithoutCoachInput = {
    create?:
      | XOR<
          AthleteCreateWithoutCoachInput,
          AthleteUncheckedCreateWithoutCoachInput
        >
      | AthleteCreateWithoutCoachInput[]
      | AthleteUncheckedCreateWithoutCoachInput[];
    connectOrCreate?:
      | AthleteCreateOrConnectWithoutCoachInput
      | AthleteCreateOrConnectWithoutCoachInput[];
    createMany?: AthleteCreateManyCoachInputEnvelope;
    connect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutCoachNestedInput = {
    create?: XOR<
      UserCreateWithoutCoachInput,
      UserUncheckedCreateWithoutCoachInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;
    upsert?: UserUpsertWithoutCoachInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCoachInput,
        UserUpdateWithoutCoachInput
      >,
      UserUncheckedUpdateWithoutCoachInput
    >;
  };

  export type AthleteUpdateManyWithoutCoachNestedInput = {
    create?:
      | XOR<
          AthleteCreateWithoutCoachInput,
          AthleteUncheckedCreateWithoutCoachInput
        >
      | AthleteCreateWithoutCoachInput[]
      | AthleteUncheckedCreateWithoutCoachInput[];
    connectOrCreate?:
      | AthleteCreateOrConnectWithoutCoachInput
      | AthleteCreateOrConnectWithoutCoachInput[];
    upsert?:
      | AthleteUpsertWithWhereUniqueWithoutCoachInput
      | AthleteUpsertWithWhereUniqueWithoutCoachInput[];
    createMany?: AthleteCreateManyCoachInputEnvelope;
    set?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    disconnect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    delete?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    connect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    update?:
      | AthleteUpdateWithWhereUniqueWithoutCoachInput
      | AthleteUpdateWithWhereUniqueWithoutCoachInput[];
    updateMany?:
      | AthleteUpdateManyWithWhereWithoutCoachInput
      | AthleteUpdateManyWithWhereWithoutCoachInput[];
    deleteMany?: AthleteScalarWhereInput | AthleteScalarWhereInput[];
  };

  export type AthleteUncheckedUpdateManyWithoutCoachNestedInput = {
    create?:
      | XOR<
          AthleteCreateWithoutCoachInput,
          AthleteUncheckedCreateWithoutCoachInput
        >
      | AthleteCreateWithoutCoachInput[]
      | AthleteUncheckedCreateWithoutCoachInput[];
    connectOrCreate?:
      | AthleteCreateOrConnectWithoutCoachInput
      | AthleteCreateOrConnectWithoutCoachInput[];
    upsert?:
      | AthleteUpsertWithWhereUniqueWithoutCoachInput
      | AthleteUpsertWithWhereUniqueWithoutCoachInput[];
    createMany?: AthleteCreateManyCoachInputEnvelope;
    set?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    disconnect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    delete?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    connect?: AthleteWhereUniqueInput | AthleteWhereUniqueInput[];
    update?:
      | AthleteUpdateWithWhereUniqueWithoutCoachInput
      | AthleteUpdateWithWhereUniqueWithoutCoachInput[];
    updateMany?:
      | AthleteUpdateManyWithWhereWithoutCoachInput
      | AthleteUpdateManyWithWhereWithoutCoachInput[];
    deleteMany?: AthleteScalarWhereInput | AthleteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutAthleteInput = {
    create?: XOR<
      UserCreateWithoutAthleteInput,
      UserUncheckedCreateWithoutAthleteInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAthleteInput;
    connect?: UserWhereUniqueInput;
  };

  export type CoachCreateNestedOneWithoutAthletesInput = {
    create?: XOR<
      CoachCreateWithoutAthletesInput,
      CoachUncheckedCreateWithoutAthletesInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutAthletesInput;
    connect?: CoachWhereUniqueInput;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutAthleteNestedInput = {
    create?: XOR<
      UserCreateWithoutAthleteInput,
      UserUncheckedCreateWithoutAthleteInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAthleteInput;
    upsert?: UserUpsertWithoutAthleteInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAthleteInput,
        UserUpdateWithoutAthleteInput
      >,
      UserUncheckedUpdateWithoutAthleteInput
    >;
  };

  export type CoachUpdateOneWithoutAthletesNestedInput = {
    create?: XOR<
      CoachCreateWithoutAthletesInput,
      CoachUncheckedCreateWithoutAthletesInput
    >;
    connectOrCreate?: CoachCreateOrConnectWithoutAthletesInput;
    upsert?: CoachUpsertWithoutAthletesInput;
    disconnect?: CoachWhereInput | boolean;
    delete?: CoachWhereInput | boolean;
    connect?: CoachWhereUniqueInput;
    update?: XOR<
      XOR<
        CoachUpdateToOneWithWhereWithoutAthletesInput,
        CoachUpdateWithoutAthletesInput
      >,
      CoachUncheckedUpdateWithoutAthletesInput
    >;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type CoachCreateWithoutUserInput = {
    description: string;
    rating: number;
    athletes?: AthleteCreateNestedManyWithoutCoachInput;
  };

  export type CoachUncheckedCreateWithoutUserInput = {
    description: string;
    rating: number;
    athletes?: AthleteUncheckedCreateNestedManyWithoutCoachInput;
  };

  export type CoachCreateOrConnectWithoutUserInput = {
    where: CoachWhereUniqueInput;
    create: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
  };

  export type AthleteCreateWithoutUserInput = {
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    coach?: CoachCreateNestedOneWithoutAthletesInput;
  };

  export type AthleteUncheckedCreateWithoutUserInput = {
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    coachId?: number | null;
  };

  export type AthleteCreateOrConnectWithoutUserInput = {
    where: AthleteWhereUniqueInput;
    create: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
  };

  export type CoachUpsertWithoutUserInput = {
    update: XOR<
      CoachUpdateWithoutUserInput,
      CoachUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CoachCreateWithoutUserInput,
      CoachUncheckedCreateWithoutUserInput
    >;
    where?: CoachWhereInput;
  };

  export type CoachUpdateToOneWithWhereWithoutUserInput = {
    where?: CoachWhereInput;
    data: XOR<
      CoachUpdateWithoutUserInput,
      CoachUncheckedUpdateWithoutUserInput
    >;
  };

  export type CoachUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    athletes?: AthleteUpdateManyWithoutCoachNestedInput;
  };

  export type CoachUncheckedUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    athletes?: AthleteUncheckedUpdateManyWithoutCoachNestedInput;
  };

  export type AthleteUpsertWithoutUserInput = {
    update: XOR<
      AthleteUpdateWithoutUserInput,
      AthleteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AthleteCreateWithoutUserInput,
      AthleteUncheckedCreateWithoutUserInput
    >;
    where?: AthleteWhereInput;
  };

  export type AthleteUpdateToOneWithWhereWithoutUserInput = {
    where?: AthleteWhereInput;
    data: XOR<
      AthleteUpdateWithoutUserInput,
      AthleteUncheckedUpdateWithoutUserInput
    >;
  };

  export type AthleteUpdateWithoutUserInput = {
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    coach?: CoachUpdateOneWithoutAthletesNestedInput;
  };

  export type AthleteUncheckedUpdateWithoutUserInput = {
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    coachId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type UserCreateWithoutCoachInput = {
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    athlete?: AthleteCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCoachInput = {
    id?: number;
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    athlete?: AthleteUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCoachInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCoachInput,
      UserUncheckedCreateWithoutCoachInput
    >;
  };

  export type AthleteCreateWithoutCoachInput = {
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
    user: UserCreateNestedOneWithoutAthleteInput;
  };

  export type AthleteUncheckedCreateWithoutCoachInput = {
    id: number;
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
  };

  export type AthleteCreateOrConnectWithoutCoachInput = {
    where: AthleteWhereUniqueInput;
    create: XOR<
      AthleteCreateWithoutCoachInput,
      AthleteUncheckedCreateWithoutCoachInput
    >;
  };

  export type AthleteCreateManyCoachInputEnvelope = {
    data: AthleteCreateManyCoachInput | AthleteCreateManyCoachInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCoachInput = {
    update: XOR<
      UserUpdateWithoutCoachInput,
      UserUncheckedUpdateWithoutCoachInput
    >;
    create: XOR<
      UserCreateWithoutCoachInput,
      UserUncheckedCreateWithoutCoachInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCoachInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCoachInput,
      UserUncheckedUpdateWithoutCoachInput
    >;
  };

  export type UserUpdateWithoutCoachInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    athlete?: AthleteUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    athlete?: AthleteUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type AthleteUpsertWithWhereUniqueWithoutCoachInput = {
    where: AthleteWhereUniqueInput;
    update: XOR<
      AthleteUpdateWithoutCoachInput,
      AthleteUncheckedUpdateWithoutCoachInput
    >;
    create: XOR<
      AthleteCreateWithoutCoachInput,
      AthleteUncheckedCreateWithoutCoachInput
    >;
  };

  export type AthleteUpdateWithWhereUniqueWithoutCoachInput = {
    where: AthleteWhereUniqueInput;
    data: XOR<
      AthleteUpdateWithoutCoachInput,
      AthleteUncheckedUpdateWithoutCoachInput
    >;
  };

  export type AthleteUpdateManyWithWhereWithoutCoachInput = {
    where: AthleteScalarWhereInput;
    data: XOR<
      AthleteUpdateManyMutationInput,
      AthleteUncheckedUpdateManyWithoutCoachInput
    >;
  };

  export type AthleteScalarWhereInput = {
    AND?: AthleteScalarWhereInput | AthleteScalarWhereInput[];
    OR?: AthleteScalarWhereInput[];
    NOT?: AthleteScalarWhereInput | AthleteScalarWhereInput[];
    id?: IntFilter<"Athlete"> | number;
    height?: FloatNullableFilter<"Athlete"> | number | null;
    weight?: FloatNullableFilter<"Athlete"> | number | null;
    birthday?: DateTimeNullableFilter<"Athlete"> | Date | string | null;
    Connection_status?: StringFilter<"Athlete"> | string;
    coachId?: IntNullableFilter<"Athlete"> | number | null;
  };

  export type UserCreateWithoutAthleteInput = {
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    coach?: CoachCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAthleteInput = {
    id?: number;
    email: string;
    password_hash: string;
    name: string;
    profile_picture_url?: string | null;
    status?: $Enums.Status;
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAthleteInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAthleteInput,
      UserUncheckedCreateWithoutAthleteInput
    >;
  };

  export type CoachCreateWithoutAthletesInput = {
    description: string;
    rating: number;
    user: UserCreateNestedOneWithoutCoachInput;
  };

  export type CoachUncheckedCreateWithoutAthletesInput = {
    id: number;
    description: string;
    rating: number;
  };

  export type CoachCreateOrConnectWithoutAthletesInput = {
    where: CoachWhereUniqueInput;
    create: XOR<
      CoachCreateWithoutAthletesInput,
      CoachUncheckedCreateWithoutAthletesInput
    >;
  };

  export type UserUpsertWithoutAthleteInput = {
    update: XOR<
      UserUpdateWithoutAthleteInput,
      UserUncheckedUpdateWithoutAthleteInput
    >;
    create: XOR<
      UserCreateWithoutAthleteInput,
      UserUncheckedCreateWithoutAthleteInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAthleteInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAthleteInput,
      UserUncheckedUpdateWithoutAthleteInput
    >;
  };

  export type UserUpdateWithoutAthleteInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    coach?: CoachUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAthleteInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    profile_picture_url?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type CoachUpsertWithoutAthletesInput = {
    update: XOR<
      CoachUpdateWithoutAthletesInput,
      CoachUncheckedUpdateWithoutAthletesInput
    >;
    create: XOR<
      CoachCreateWithoutAthletesInput,
      CoachUncheckedCreateWithoutAthletesInput
    >;
    where?: CoachWhereInput;
  };

  export type CoachUpdateToOneWithWhereWithoutAthletesInput = {
    where?: CoachWhereInput;
    data: XOR<
      CoachUpdateWithoutAthletesInput,
      CoachUncheckedUpdateWithoutAthletesInput
    >;
  };

  export type CoachUpdateWithoutAthletesInput = {
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutCoachNestedInput;
  };

  export type CoachUncheckedUpdateWithoutAthletesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
  };

  export type AthleteCreateManyCoachInput = {
    id: number;
    height?: number | null;
    weight?: number | null;
    birthday?: Date | string | null;
    Connection_status: string;
  };

  export type AthleteUpdateWithoutCoachInput = {
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutAthleteNestedInput;
  };

  export type AthleteUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number;
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
  };

  export type AthleteUncheckedUpdateManyWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number;
    height?: NullableFloatFieldUpdateOperationsInput | number | null;
    weight?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Connection_status?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

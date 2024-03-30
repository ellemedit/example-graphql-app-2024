import type { DocumentNode } from "graphql";

export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "test", loc: { start: 30, end: 34 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Void", loc: { start: 36, end: 40 } },
            loc: { start: 36, end: 40 },
          },
          directives: [],
          loc: { start: 30, end: 40 },
        },
      ],
      loc: { start: 12, end: 42 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "ID", loc: { start: 51, end: 53 } },
      directives: [],
      loc: { start: 44, end: 53 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 62, end: 70 } },
      directives: [],
      loc: { start: 55, end: 70 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Void", loc: { start: 79, end: 83 } },
      directives: [],
      loc: { start: 72, end: 83 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 96, end: 101 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 106, end: 113 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 114, end: 116 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 118, end: 120 },
                  },
                  loc: { start: 118, end: 120 },
                },
                loc: { start: 118, end: 121 },
              },
              directives: [],
              loc: { start: 114, end: 121 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Comment",
              loc: { start: 124, end: 131 },
            },
            loc: { start: 124, end: 131 },
          },
          directives: [],
          loc: { start: 106, end: 131 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 134, end: 142 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Comment",
                    loc: { start: 145, end: 152 },
                  },
                  loc: { start: 145, end: 152 },
                },
                loc: { start: 145, end: 153 },
              },
              loc: { start: 144, end: 154 },
            },
            loc: { start: 144, end: 155 },
          },
          directives: [],
          loc: { start: 134, end: 155 },
        },
      ],
      loc: { start: 84, end: 157 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Post", loc: { start: 171, end: 175 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 180, end: 188 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Comment",
                    loc: { start: 191, end: 198 },
                  },
                  loc: { start: 191, end: 198 },
                },
                loc: { start: 191, end: 199 },
              },
              loc: { start: 190, end: 200 },
            },
            loc: { start: 190, end: 201 },
          },
          directives: [],
          loc: { start: 180, end: 201 },
        },
      ],
      loc: { start: 159, end: 203 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 217, end: 221 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 226, end: 234 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Comment",
                    loc: { start: 237, end: 244 },
                  },
                  loc: { start: 237, end: 244 },
                },
                loc: { start: 237, end: 245 },
              },
              loc: { start: 236, end: 246 },
            },
            loc: { start: 236, end: 247 },
          },
          directives: [],
          loc: { start: 226, end: 247 },
        },
      ],
      loc: { start: 205, end: 249 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 256, end: 263 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 268, end: 270 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 272, end: 274 },
              },
              loc: { start: 272, end: 274 },
            },
            loc: { start: 272, end: 275 },
          },
          directives: [],
          loc: { start: 268, end: 275 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 278, end: 282 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 284, end: 288 },
              },
              loc: { start: 284, end: 288 },
            },
            loc: { start: 284, end: 289 },
          },
          directives: [],
          loc: { start: 278, end: 289 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 292, end: 299 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 301, end: 307 },
              },
              loc: { start: 301, end: 307 },
            },
            loc: { start: 301, end: 308 },
          },
          directives: [],
          loc: { start: 292, end: 308 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "author",
            loc: { start: 311, end: 317 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 319, end: 323 },
              },
              loc: { start: 319, end: 323 },
            },
            loc: { start: 319, end: 324 },
          },
          directives: [],
          loc: { start: 311, end: 324 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 327, end: 336 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 338, end: 346 },
              },
              loc: { start: 338, end: 346 },
            },
            loc: { start: 338, end: 347 },
          },
          directives: [],
          loc: { start: 327, end: 347 },
        },
      ],
      loc: { start: 251, end: 349 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 362, end: 367 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 372, end: 376 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 377, end: 379 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 381, end: 383 },
                  },
                  loc: { start: 381, end: 383 },
                },
                loc: { start: 381, end: 384 },
              },
              directives: [],
              loc: { start: 377, end: 384 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 387, end: 391 },
            },
            loc: { start: 387, end: 391 },
          },
          directives: [],
          loc: { start: 372, end: 391 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 394, end: 399 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Post",
                    loc: { start: 402, end: 406 },
                  },
                  loc: { start: 402, end: 406 },
                },
                loc: { start: 402, end: 407 },
              },
              loc: { start: 401, end: 408 },
            },
            loc: { start: 401, end: 409 },
          },
          directives: [],
          loc: { start: 394, end: 409 },
        },
      ],
      loc: { start: 350, end: 411 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 425, end: 429 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 434, end: 439 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Post",
                    loc: { start: 442, end: 446 },
                  },
                  loc: { start: 442, end: 446 },
                },
                loc: { start: 442, end: 447 },
              },
              loc: { start: 441, end: 448 },
            },
            loc: { start: 441, end: 449 },
          },
          directives: [],
          loc: { start: 434, end: 449 },
        },
      ],
      loc: { start: 413, end: 451 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 458, end: 462 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 467, end: 469 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 471, end: 473 },
              },
              loc: { start: 471, end: 473 },
            },
            loc: { start: 471, end: 474 },
          },
          directives: [],
          loc: { start: 467, end: 474 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 477, end: 482 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 484, end: 490 },
              },
              loc: { start: 484, end: 490 },
            },
            loc: { start: 484, end: 491 },
          },
          directives: [],
          loc: { start: 477, end: 491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 494, end: 501 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 503, end: 509 },
              },
              loc: { start: 503, end: 509 },
            },
            loc: { start: 503, end: 510 },
          },
          directives: [],
          loc: { start: 494, end: 510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "author",
            loc: { start: 513, end: 519 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 521, end: 525 },
              },
              loc: { start: 521, end: 525 },
            },
            loc: { start: 521, end: 526 },
          },
          directives: [],
          loc: { start: 513, end: 526 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 529, end: 538 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 540, end: 548 },
              },
              loc: { start: 540, end: 548 },
            },
            loc: { start: 540, end: 549 },
          },
          directives: [],
          loc: { start: 529, end: 549 },
        },
      ],
      loc: { start: 453, end: 551 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 564, end: 569 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 574, end: 578 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 580, end: 584 },
            },
            loc: { start: 580, end: 584 },
          },
          directives: [],
          loc: { start: 574, end: 584 },
        },
      ],
      loc: { start: 552, end: 586 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 593, end: 597 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 602, end: 604 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 606, end: 608 },
              },
              loc: { start: 606, end: 608 },
            },
            loc: { start: 606, end: 609 },
          },
          directives: [],
          loc: { start: 602, end: 609 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 612, end: 616 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 618, end: 624 },
              },
              loc: { start: 618, end: 624 },
            },
            loc: { start: 618, end: 625 },
          },
          directives: [],
          loc: { start: 612, end: 625 },
        },
      ],
      loc: { start: 588, end: 627 },
    },
  ],
  loc: { start: 0, end: 628 },
} as unknown as DocumentNode;

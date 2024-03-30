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
          name: { kind: "Name", value: "body", loc: { start: 278, end: 282 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 284, end: 290 },
              },
              loc: { start: 284, end: 290 },
            },
            loc: { start: 284, end: 291 },
          },
          directives: [],
          loc: { start: 278, end: 291 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 294, end: 298 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 300, end: 304 },
              },
              loc: { start: 300, end: 304 },
            },
            loc: { start: 300, end: 305 },
          },
          directives: [],
          loc: { start: 294, end: 305 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "author",
            loc: { start: 308, end: 314 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 316, end: 320 },
              },
              loc: { start: 316, end: 320 },
            },
            loc: { start: 316, end: 321 },
          },
          directives: [],
          loc: { start: 308, end: 321 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 324, end: 333 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 335, end: 343 },
              },
              loc: { start: 335, end: 343 },
            },
            loc: { start: 335, end: 344 },
          },
          directives: [],
          loc: { start: 324, end: 344 },
        },
      ],
      loc: { start: 251, end: 346 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 359, end: 364 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 369, end: 373 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 374, end: 376 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 378, end: 380 },
                  },
                  loc: { start: 378, end: 380 },
                },
                loc: { start: 378, end: 381 },
              },
              directives: [],
              loc: { start: 374, end: 381 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 384, end: 388 },
            },
            loc: { start: 384, end: 388 },
          },
          directives: [],
          loc: { start: 369, end: 388 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 391, end: 396 } },
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
                    loc: { start: 399, end: 403 },
                  },
                  loc: { start: 399, end: 403 },
                },
                loc: { start: 399, end: 404 },
              },
              loc: { start: 398, end: 405 },
            },
            loc: { start: 398, end: 406 },
          },
          directives: [],
          loc: { start: 391, end: 406 },
        },
      ],
      loc: { start: 347, end: 408 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 422, end: 426 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 431, end: 436 } },
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
                    loc: { start: 439, end: 443 },
                  },
                  loc: { start: 439, end: 443 },
                },
                loc: { start: 439, end: 444 },
              },
              loc: { start: 438, end: 445 },
            },
            loc: { start: 438, end: 446 },
          },
          directives: [],
          loc: { start: 431, end: 446 },
        },
      ],
      loc: { start: 410, end: 448 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 455, end: 459 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 464, end: 466 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 468, end: 470 },
              },
              loc: { start: 468, end: 470 },
            },
            loc: { start: 468, end: 471 },
          },
          directives: [],
          loc: { start: 464, end: 471 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 474, end: 479 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 481, end: 487 },
              },
              loc: { start: 481, end: 487 },
            },
            loc: { start: 481, end: 488 },
          },
          directives: [],
          loc: { start: 474, end: 488 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 491, end: 495 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 497, end: 503 },
              },
              loc: { start: 497, end: 503 },
            },
            loc: { start: 497, end: 504 },
          },
          directives: [],
          loc: { start: 491, end: 504 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "author",
            loc: { start: 507, end: 513 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 515, end: 519 },
              },
              loc: { start: 515, end: 519 },
            },
            loc: { start: 515, end: 520 },
          },
          directives: [],
          loc: { start: 507, end: 520 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 523, end: 532 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 534, end: 542 },
              },
              loc: { start: 534, end: 542 },
            },
            loc: { start: 534, end: 543 },
          },
          directives: [],
          loc: { start: 523, end: 543 },
        },
      ],
      loc: { start: 450, end: 545 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 558, end: 563 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 568, end: 572 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 573, end: 575 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 577, end: 579 },
                  },
                  loc: { start: 577, end: 579 },
                },
                loc: { start: 577, end: 580 },
              },
              directives: [],
              loc: { start: 573, end: 580 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 583, end: 587 },
            },
            loc: { start: 583, end: 587 },
          },
          directives: [],
          loc: { start: 568, end: 587 },
        },
      ],
      loc: { start: 546, end: 589 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 596, end: 600 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 605, end: 607 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 609, end: 611 },
              },
              loc: { start: 609, end: 611 },
            },
            loc: { start: 609, end: 612 },
          },
          directives: [],
          loc: { start: 605, end: 612 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 615, end: 619 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 621, end: 627 },
              },
              loc: { start: 621, end: 627 },
            },
            loc: { start: 621, end: 628 },
          },
          directives: [],
          loc: { start: 615, end: 628 },
        },
      ],
      loc: { start: 591, end: 630 },
    },
  ],
  loc: { start: 0, end: 631 },
} as unknown as DocumentNode;

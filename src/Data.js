
export const Data = [
    {
        id: "",
        url: "/Products",
        name: "Products",
        api: "Products",
        column:
            [
                { name: "image", type: "img", src: "image" },
                { name: "name" },
                { name: "type" },
                { name: "price" },
                { name: "status", type: "toggle", api: "Products", status: "isprim" },
                { name: "#", type: "action", api: "Products" },
            ],
        InitialValues: ["name", "id", "type", "price", "isprim", "image"],
        ValidationSchema: [{ name: "name", type: "string", required: true, mes: "reqierd" }],
        DataToSend: `console.log("HI")`,
        EditModelData: [
            { name: "name", type: "text", col: 1 },
            { name: "type", type: "text", col: 1 },
            { name: "price", type: "number", col: 2 },
            { name: 'image', type: 'image', height: "220", col: 2 }

        ],
        AddModelData: [
            { name: "name", type: "text", col: 1 },
            { name: 'image', type: 'image', height: "220", col: 2 }

        ]

    }
]
export const FOODS = [
    {
        
        name: "Bagel",
        price: 3.50,
        image: require('../shared/images/chocolate-muffin.jpg'),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: false,
        bagelType: [
            {
                name: 'Plain',
                price: 0,
            }, 
            {
                name: 'Asiago',
                price: 1.50,
            },
            {
                name: 'Cinnamon Sugar',
                price: 2,
            },
            {
                name: 'Blueberry',
                price: 1.25,
            },
        ],
        creamCheeseType: [
            {
                name: 'Plain',
                price: 0,
            },
            {
                name: 'Garlic Herb',
                price: 0,
            },
            {
                name: 'Chocolate',
                price: 0,
            },
        ],
        extras: [
            {
                name: "Extra Cream Cheese",
                price: 1,
                checked: false
            },
            {
                name: "Extra Toasted",
                price: 0,
                checked: false
            },
        ]
    },
    {
        
        name: "Chocolate Chip Muffin",
        price: 3,
        image: require("../shared/images/chocolate-muffin.jpg"),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: true
    },
    {
        
        name: "Blueberry Muffin",
        price: 3,
        image: require("../shared/images/chocolate-muffin.jpg"),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: false
    },
    {
        
        name: "Lemon Bread",
        price: 3.75,
        image: require("../shared/images/chocolate-muffin.jpg"),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: false
    },
    {
        
        name: "Strawberry Pastry",
        price: 5,
        image: require("../shared/images/chocolate-muffin.jpg"),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: true
    },
    {
        
        name: "Blueberry Pastry",
        price: 5,
        image: require("../shared/images/chocolate-muffin.jpg"),
        description: "Lorem ipsum dolor sit amet. In a nisl eu justo bibendum tempus. Donec.",
        favorite: false
    }
]
export default class ProductsService {
    data = [
        {
            id: 1,
            name: `Secrets Of The JavaScript Ninja`,
            description: `Secrets of the JavaScript Ninja leads you down the pathway to JavaScript enlightenment.`,
            price: 45,
            visible: true,
            img: `https://images-na.ssl-images-amazon.com/images/I/51UYwOhvQPL._AC_SY400_.jpg`,
        },
        {
            id: 2,
            name: `Functional Programming in JavaScript`,
            description: `Functional Programming in JavaScript teaches JavaScript developers functional ` +
            `techniques that will improve extensibility, modularity, reusability, testability, and performance.`,
            price: 35,
            visible: true,
            img: `https://apollo-ireland.akamaized.net/v1/files/o28l7m8pjb4q2-UA/image;s=644x461`,
        },
        {
            id: 3,
            name: `Eloquent JavaScript`,
            description: `This is a book about JavaScript, programming, and the wonders of the digital.` +
            `You can read it online here, or get your own paperback copy.`,
            price: 49,
            visible: true,
            img: `https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg`,
        },
        {
            id: 4,
            name: `JavaScript for Kids`,
            description: `A Playful Introduction to Programming.`,
            price: 19,
            visible: true,
            img: `https://images-na.ssl-images-amazon.com/images/I/51tcu2bj86L._SX260_.jpg`,
        },
        {
            id: 5,
            name: `Invisible fake book`,
            description: `FOR RESELECT MEMOIZATION`,
            price: 0,
            visible: false
        }
    ];

    getAllProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // reject(new Error(`Fake error`))

                resolve(this.data);
            }, 800);
        });
    }
}
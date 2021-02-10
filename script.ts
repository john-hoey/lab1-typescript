interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (anArrayOfMountains: Mountain[]): string => {
  let largest = anArrayOfMountains[0];
  for (let i = 0; i < anArrayOfMountains.length; i++) {
    if (anArrayOfMountains[i].height > largest.height) {
      largest = anArrayOfMountains[i];
    }
  }
  if (largest === undefined) {
    return "";
  } else {
    return `${largest.name}`;
  }
};
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "Noisy Cricket",
    price: 100000,
  },
  {
    name: "E-11 Blaster Rifle",
    price: 15000,
  },
  {
    name: "My Very Own Morty",
    price: 1,
  },
];

// const calcAverageProductPrice = (anArrayOfProducts: Product[]): number => {
//   let sum = 0;
//   for (let i = 0; i < anArrayOfProducts.length; i++) {
//     sum += anArrayOfProducts[i].price;
//   }
//   //   console.log(sum);
//   //   console.log(anArrayOfProducts.length);

//   let avg = sum / anArrayOfProducts.length;
//   if (anArrayOfProducts.length === 0) {
//     return 0;
//   } else {
//     return avg;
//   }
// };
const calcAverageProductPrice = (anArrayOfProducts: Product[]): number => {
  if (anArrayOfProducts.length === 0) {
    return 0;
  } else {
    return (
      anArrayOfProducts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0) / anArrayOfProducts.length
    );
  }
};

let priceAverage = calcAverageProductPrice(products);
console.log(priceAverage);

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

const calcInventoryValue = (
  anArrayOfInventoryItems: InventoryItem[]
): number => {
  let total = 0;
  if (anArrayOfInventoryItems.length === 0) {
    return 0;
  } else {
    anArrayOfInventoryItems.forEach((item) => {
      return (total += item.product.price * item.quantity);
    });
  }
  return total;
};

let totalValue = calcInventoryValue(inventory);
console.log(totalValue);

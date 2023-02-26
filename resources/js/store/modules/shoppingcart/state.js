const state = {
    products: [
        { id: 1, name: "Indomie Goreng Rendang", description: "Masakan instan terenak di dunia", stock: 10, price: 3900 },
        { id: 2, name: "Mie Gelas Rendang", description: "Mie instan khusus anak kosan", stock: 5, price: 1500 },
        { id: 3, name: "Bakmi Mewah", description: "Kalau anak kosan jangan macam2 deh", stock: 80, price: 10000 },
    ],
    cart: [],
    cartTotal: [],
    showPopup: false,
    showConfirmation: false
}

export default state

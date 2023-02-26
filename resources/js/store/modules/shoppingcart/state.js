const state = {
    products: [
        { id: 1, name: "Indomie Goreng Rendang", description: "Masakan instan terenak di dunia", stock: 10, price: 3900, imageUrl: './images/indomie_goreng_rendang.jpg'},
        { id: 2, name: "Mie Gelas Soto", description: "Mie instan khusus anak kosan", stock: 5, price: 1500, imageUrl: './images/mie_gelas_soto.jpg'},
        { id: 3, name: "Bakmi Mewah", description: "Kalau anak kosan jangan macam2 deh", stock: 80, price: 10000, imageUrl: './images/bakmi_mewah.jpg' },
    ],
    cart: [],
    cartTotal: [],
    showPopup: false,
    showConfirmation: false
}

export default state

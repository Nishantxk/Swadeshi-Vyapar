/* ============================================
   SWADESHI VYAPAR - Product Data
   18 Products: 3 per category (6 categories)
============================================ */

const products = [
    // ============================================
    // TEXTILES (3 products)
    // ============================================
    {
        id: 1,
        name: "Banarasi Silk Saree",
        category: "textiles",
        price: 8999,
        region: "Varanasi, Uttar Pradesh",
        ecoRating: 92,
        salesCount: 1250,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
        description: "Handwoven Banarasi silk saree with intricate gold zari work. A masterpiece from the looms of Varanasi, this saree features traditional motifs passed down through generations. Perfect for weddings and special occasions."
    },
    {
        id: 2,
        name: "Khadi Cotton Shirt",
        category: "textiles",
        price: 1499,
        region: "Ahmedabad, Gujarat",
        ecoRating: 95,
        salesCount: 3420,
        image: "https://imagescdn.jaypore.com/img/app/product/3/39609987-12503592.jpg?w=500&auto=format",
        description: "Pure khadi cotton shirt handspun by local artisans. Breathable, comfortable, and eco-friendly. Embodies the spirit of Swadeshi movement started by Mahatma Gandhi.",
        rating: 4.6,
        reviewCount: 128,
        reviews: ["Excellent quality and authentic craftsmanship.", "Very comfortable, perfect for summer."],
        sustainability: "Low chemical usage and hand-spun fabric — Khadi production consumes up to 90% less energy compared to mill-made cotton."
    },
    {
        id: 3,
        name: "Pashmina Shawl",
        category: "textiles",
        price: 799,
        region: "Srinagar, Kashmir",
        ecoRating: 88,
        salesCount: 890,
        image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=500",
        description: "Authentic Kashmiri Pashmina shawl made from the finest cashmere wool. Hand-embroidered with traditional paisley patterns. A timeless piece of luxury."
    },

    // ============================================
    // SPICES (3 products)
    // ============================================
    {
        id: 4,
        name: "Kerala Cardamom",
        category: "spices",
        price: 599,
        region: "Idukki, Kerala",
        ecoRating: 90,
        salesCount: 5670,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500",
        description: "Premium green cardamom from the spice gardens of Kerala. Known as the 'Queen of Spices', these pods are hand-picked and sun-dried for maximum aroma and flavor."
    },
    {
        id: 5,
        name: "Kashmiri Saffron",
        category: "spices",
        price: 1299,
        region: "Pampore, Kashmir",
        ecoRating: 85,
        salesCount: 2340,
        image: "https://images.pexels.com/photos/10487658/pexels-photo-10487658.jpeg?cs=srgb&dl=pexels-victoria-bowers-148548814-10487658.jpg&fm=jpg&w=500",
        description: "World-renowned Kashmiri saffron, hand-harvested from crocus flowers. GI-tagged for authenticity. Known for its deep color, distinct aroma, and medicinal properties."
    },
    {
        id: 6,
        name: "Organic Turmeric Powder",
        category: "spices",
        price: 349,
        region: "Erode, Tamil Nadu",
        ecoRating: 94,
        salesCount: 8900,
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500",
        description: "100% organic turmeric powder from Erode, the turmeric capital of India. High curcumin content for health benefits. Naturally processed without chemicals."
    },

    // ============================================
    // HANDICRAFTS (3 products)
    // ============================================
    {
        id: 7,
        name: "Kolhapuri Leather Chappal",
        category: "handicrafts",
        price: 1099,
        region: "Kolhapur, Maharashtra",
        ecoRating: 85,
        salesCount: 4560,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
        description: "Handcrafted leather chappal from Kolhapur using traditional tanning methods. Vegetable-tanned leather that molds to your feet. Durable and stylish."
    },
    {
        id: 8,
        name: "Blue Pottery Vase",
        category: "handicrafts",
        price: 1799,
        region: "Jaipur, Rajasthan",
        ecoRating: 91,
        salesCount: 1890,
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500",
        description: "Traditional Jaipur blue pottery vase with Persian-influenced floral designs. Made from quartz powder, not clay. Each piece is unique and hand-painted."
    },
    {
        id: 9,
        name: "Brass Diya Set",
        category: "handicrafts",
        price: 899,
        region: "Moradabad, Uttar Pradesh",
        ecoRating: 89,
        salesCount: 7230,
        image: "https://images.pexels.com/photos/6213685/pexels-photo-6213685.jpeg?cs=srgb&dl=pexels-nncapture-6213685.jpg&fm=jpg&w=500",
        description: "Set of 5 traditional brass diyas handcrafted by skilled artisans. Perfect for Diwali, puja, and home décor. Antique finish with intricate carvings."
    },

    // ============================================
    // UTSAV / FESTIVE (3 products)
    // ============================================
    {
        id: 10,
        name: "Terracotta Ganesha Idol",
        category: "utsav",
        price: 699,
        region: "Kumartuli, West Bengal",
        ecoRating: 96,
        salesCount: 12400,
        image: "https://images.pexels.com/photos/2900315/pexels-photo-2900315.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Eco-friendly terracotta Ganesha idol handcrafted by Kumartuli artisans. Water-soluble and environment-friendly. Painted with natural colors.",
        rating: 4.8,
        reviewCount: 256,
        reviews: ["Beautiful craftsmanship, truly eco-friendly!", "Dissolves easily, no water pollution."],
        sustainability: "Made from natural clay — Terracotta idols dissolve naturally, preventing water pollution and reducing carbon footprint."
    },
    {
        id: 11,
        name: "Handmade Rakhi Set",
        category: "utsav",
        price: 299,
        region: "Jaipur, Rajasthan",
        ecoRating: 93,
        salesCount: 18500,
        image: "https://images.pexels.com/photos/7686249/pexels-photo-7686249.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Set of 3 premium handmade rakhis with kundan work and silk threads. Comes with roli, chawal, and sweets. Perfect gift for Raksha Bandhan."
    },
    {
        id: 12,
        name: "Rangoli Stencil Kit",
        category: "utsav",
        price: 449,
        region: "Pune, Maharashtra",
        ecoRating: 87,
        salesCount: 9870,
        image: "https://images.pexels.com/photos/191077/pexels-photo-191077.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Complete rangoli kit with 10 traditional stencils, organic colors, and accessories. Create beautiful rangolis for Diwali and other festivals."
    },

    // ============================================
    // TOYS (3 products) - Wooden Toys
    // ============================================
    {
        id: 13,
        name: "Wooden Puzzle Toy",
        category: "toys",
        price: 599,
        region: "Channapatna, Karnataka",
        ecoRating: 96,
        salesCount: 6780,
        image: "https://officerspulse.com/wp-content/uploads/2021/03/pasted-image-0-33-1024x639.png",
        description: "Traditional handcrafted wooden puzzle toy from Channapatna. Made from natural wood with non-toxic vegetable dyes. Safe for children and eco-friendly. Enhances cognitive skills and motor development.",
        rating: 4.7,
        reviewCount: 189,
        reviews: ["Kids love it! Safe and beautifully crafted.", "Great quality wood, vibrant natural colors."],
        sustainability: "Crafted from natural wood — Wooden toys generate 85% less plastic waste and promote sustainable material usage."
    },
    {
        id: 14,
        name: "Wooden Stacking Rings",
        category: "toys",
        price: 449,
        region: "Channapatna, Karnataka",
        ecoRating: 95,
        salesCount: 5430,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500",
        description: "Colorful wooden stacking rings toy handcrafted by skilled artisans. Uses natural lac colors safe for babies. Traditional Channapatna craft meets modern play. Perfect for toddlers."
    },
    {
        id: 15,
        name: "Wooden Pull-Along Toy",
        category: "toys",
        price: 699,
        region: "Varanasi, Uttar Pradesh",
        ecoRating: 94,
        salesCount: 4120,
        image: "https://shop.gaatha.com/image/catalog/Totem-Studio/28_04_2023/Handmade-Wooden-Toy-Gola-Dandi.jpg",
        description: "Charming wooden pull-along elephant toy. Handcrafted by Varanasi toy makers using sustainable wood. Features smooth wheels and child-safe finish. A delightful traditional Indian toy."
    },

    // ============================================
    // ELECTRONICS - boAt Products (3 products)
    // ============================================
    {
        id: 16,
        name: "boAt Rockerz 255 Pro+",
        category: "electronics",
        brand: "boAt",
        price: 1199,
        region: "New Delhi, India",
        ecoRating: 89,
        salesCount: 22100,
        image: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_UF1000,1000_QL80_.jpg",
        description: "boAt Rockerz 255 Pro+ Wireless Neckband with 60 Hours Playtime, ASAP Charge, 12mm Drivers, Dual Pairing, Magnetic Earbuds, IPX5 Water Resistance.",
        specifications: "Driver: 12mm | Battery: 60 Hours | Bluetooth: v5.2 | Rating: IPX5",
        availability: "In Stock"
    },
    {
        id: 17,
        name: "boAt BassHeads 100",
        category: "electronics",
        brand: "boAt",
        price: 449,
        region: "New Delhi, India",
        ecoRating: 85,
        salesCount: 35600,
        image: "https://rukminim2.flixcart.com/image/480/640/ksw4ccw0/headphone/w/g/r/rockerz-450-boat-original-imag6cqqh49wjfy5.jpeg?q=90",
        description: "boAt BassHeads 100 Wired Earphones with Mic, 10mm Dynamic Drivers, Premium Metal Finish, Hawk-Inspired Design, 3.5mm Gold-Plated Jack.",
        specifications: "Driver: 10mm | Type: Wired | Connector: 3.5mm | Mic: In-line",
        availability: "In Stock"
    },
    {
        id: 18,
        name: "boAt Wave Call Smart Watch",
        category: "electronics",
        brand: "boAt",
        price: 1999,
        region: "New Delhi, India",
        ecoRating: 87,
        salesCount: 12300,
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/h/c/2/42-9-wave-call-android-ios-boat-yes-original-imagz5hqszcmwgqj.jpeg?q=90",
        description: "boAt Wave Call Smart Watch with Bluetooth Calling, 1.69 inch HD Display, 150+ Watch Faces, Multi-Sport Modes, HR & SpO2 Monitoring, IP68 Rating, 7 Days Battery Life.",
        specifications: "Display: 1.69 HD | Battery: 7 Days | Calling: Bluetooth | Rating: IP68",
        availability: "In Stock"
    },
    // ============================================
    // SECOND LIFE - Resale Products (3 products)
    // ============================================
    {
        id: 22,
        name: "JEE Preparation Book Set",
        category: "secondlife",
        subcategory: "abhyas",
        price: 2499,
        region: "Kota, Rajasthan",
        ecoRating: 92,
        salesCount: 450,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500",
        description: "Complete JEE Main & Advanced preparation book set. Includes Physics, Chemistry, and Mathematics volumes. Suitable for JEE aspirants.",
        condition: "Used",
        productAge: "2 years",
        productStatus: "Resale",
        sellerContact: "+91 98765-43210"
    },
    {
        id: 23,
        name: "Acoustic Guitar - Yamaha F310",
        category: "secondlife",
        subcategory: "other",
        price: 5999,
        region: "Mumbai, Maharashtra",
        ecoRating: 88,
        salesCount: 95,
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500",
        description: "Yamaha F310 acoustic guitar in excellent condition. Comes with original case, picks, and extra strings. Perfect for beginners and intermediate players.",
        condition: "Used",
        productAge: "3 years",
        productStatus: "Resale",
        sellerContact: "+91 65432-10987"
    },
    {
        id: 24,
        name: "Office Chair - Ergonomic",
        category: "secondlife",
        subcategory: "other",
        price: 4999,
        region: "Hyderabad, Telangana",
        ecoRating: 90,
        salesCount: 120,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
        description: "High-quality ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back. Perfect for work from home setup.",
        condition: "Used",
        productAge: "1 year",
        productStatus: "Resale",
        sellerContact: "+91 43210-98765"
    },

    // ============================================
    // ARTS - Handmade Drawings & Sketches (3 products)
    // ============================================
    {
        id: 19,
        name: "Madhubani Painting",
        category: "arts",
        price: 2499,
        region: "Madhubani, Bihar",
        ecoRating: 95,
        salesCount: 2340,
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=500&q=80",
        description: "Authentic Madhubani folk painting on handmade paper. Features traditional motifs of nature, mythology, and rural life. Hand-painted using natural dyes by skilled Mithila artists."
    },
    {
        id: 20,
        name: "Warli Art Canvas",
        category: "arts",
        price: 1899,
        region: "Palghar, Maharashtra",
        ecoRating: 93,
        salesCount: 1890,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
        description: "Traditional Warli tribal art on canvas depicting village life and festivities. Created by indigenous Warli artists using natural white pigment on earthy background."
    },
    {
        id: 21,
        name: "Charcoal Portrait Sketch",
        category: "arts",
        price: 1299,
        region: "Kolkata, West Bengal",
        ecoRating: 90,
        salesCount: 3450,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
        description: "Custom charcoal portrait sketch by professional artists from Kolkata's art community. Hand-drawn on premium paper with fine detailing. Perfect personalized gift."
    }
];

// Categories data - First 6 shown in grid, all 8 in sidebar
const categories = [
    {
        id: "textiles",
        name: "Textiles",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500",
        description: "Traditional Indian fabrics and clothing"
    },
    {
        id: "spices",
        name: "Spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500",
        description: "Authentic Indian spices and herbs"
    },
    {
        id: "handicrafts",
        name: "Handicrafts",
        image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=500",
        description: "Handmade artisan products"
    },
    {
        id: "utsav",
        name: "Utsav",
        image: "https://thumbs.dreamstime.com/b/beautiful-diwali-diya-oil-lamp-lighting-selective-focus-traditional-lit-festival-77393285.jpg",
        description: "Festival and celebration items"
    },
    {
        id: "toys",
        name: "Toys",
        image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500",
        description: "Traditional Indian wooden toys"
    },
    {
        id: "arts",
        name: "Arts",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
        description: "Handmade drawings, sketches & paintings"
    },
    {
        id: "electronics",
        name: "Electronics",
        image: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_UF1000,1000_QL80_.jpg",
        description: "boAt audio products - Made in India"
    },
    {
        id: "secondlife",
        name: "Second Life",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500",
        description: "Quality resale products - Give items a second life"
    }
];

// Indian states/regions - Only states where products are from (used for filtering)
const regions = [
    "All Regions",
    "Uttar Pradesh",
    "Gujarat",
    "Kashmir",
    "Kerala",
    "Tamil Nadu",
    "Maharashtra",
    "Rajasthan",
    "West Bengal",
    "Odisha",
    "Karnataka",
    "Tripura",
    "Bihar"
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, categories, regions };
}

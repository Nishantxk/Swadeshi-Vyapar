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
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
        description: "Handwoven Banarasi silk saree with intricate gold zari work. A masterpiece from the looms of Varanasi, this saree features traditional motifs passed down through generations. Perfect for weddings and special occasions."
    },
    {
        id: 2,
        name: "Khadi Cotton Kurta",
        category: "textiles",
        price: 1499,
        region: "Ahmedabad, Gujarat",
        ecoRating: 95,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
        description: "Pure khadi cotton kurta handspun by local artisans. Breathable, comfortable, and eco-friendly. Embodies the spirit of Swadeshi movement started by Mahatma Gandhi."
    },
    {
        id: 3,
        name: "Pashmina Shawl",
        category: "textiles",
        price: 799,
        region: "Srinagar, Kashmir",
        ecoRating: 88,
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
        image: "https://images.pexels.com/photos/2900315/pexels-photo-2900315.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Eco-friendly terracotta Ganesha idol handcrafted by Kumartuli artisans. Water-soluble and environment-friendly. Painted with natural colors."
    },
    {
        id: 11,
        name: "Handmade Rakhi Set",
        category: "utsav",
        price: 299,
        region: "Jaipur, Rajasthan",
        ecoRating: 93,
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
        image: "https://images.pexels.com/photos/191077/pexels-photo-191077.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Complete rangoli kit with 10 traditional stencils, organic colors, and accessories. Create beautiful rangolis for Diwali and other festivals."
    },

    // ============================================
    // JEWELLERY (3 products)
    // ============================================
    {
        id: 13,
        name: "Temple Jewellery Necklace",
        category: "jewellery",
        price: 4599,
        region: "Nagercoil, Tamil Nadu",
        ecoRating: 82,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
        description: "Traditional South Indian temple jewellery necklace with antique gold finish. Features Lakshmi motifs and intricate detailing. Perfect for classical dance and weddings."
    },
    {
        id: 14,
        name: "Silver Filigree Earrings",
        category: "jewellery",
        price: 2199,
        region: "Cuttack, Odisha",
        ecoRating: 88,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
        description: "Exquisite silver filigree earrings from Cuttack, known for Tarakasi work. Delicate silver wires twisted into beautiful patterns. Lightweight and elegant."
    },
    {
        id: 15,
        name: "Kundan Bangle Set",
        category: "jewellery",
        price: 3299,
        region: "Bikaner, Rajasthan",
        ecoRating: 84,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
        description: "Set of 4 traditional Kundan bangles with meenakari work on the reverse side. Handcrafted by Rajasthani artisans. Perfect for bridal trousseau."
    },

    // ============================================
    // ELECTRONICS (3 products)
    // ============================================
    {
        id: 16,
        name: "Solar Power Bank 20000mAh",
        category: "electronics",
        price: 1999,
        region: "Bengaluru, Karnataka",
        ecoRating: 91,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        description: "Made-in-India solar power bank with dual USB ports. Eco-friendly charging using solar energy. Durable build quality with LED indicators."
    },
    {
        id: 17,
        name: "Bamboo Bluetooth Speaker",
        category: "electronics",
        price: 2499,
        region: "Agartala, Tripura",
        ecoRating: 94,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
        description: "Premium Bluetooth speaker with handcrafted bamboo enclosure. Rich bass and crystal clear sound. Sustainable design meets modern technology."
    },
    {
        id: 18,
        name: "Smart LED Bulb - Swadeshi",
        category: "electronics",
        price: 799,
        region: "Noida, Uttar Pradesh",
        ecoRating: 89,
        image: "https://images.pexels.com/photos/28940484/pexels-photo-28940484.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Wi-Fi enabled smart LED bulb supporting 16 million colors. Voice control compatible. Energy efficient with 15000 hours lifespan. Made in India."
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
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
        description: "Custom charcoal portrait sketch by professional artists from Kolkata's art community. Hand-drawn on premium paper with fine detailing. Perfect personalized gift."
    }
];

// Categories data - First 6 shown in grid, all 7 in sidebar
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
        id: "jewellery",
        name: "Jewellery",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
        description: "Traditional Indian ornaments"
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
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        description: "Made in India electronics"
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

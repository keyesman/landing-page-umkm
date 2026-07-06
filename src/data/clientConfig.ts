// src/data/clientConfig.ts

export interface Benefit {
  title: string;
  description: string;
  iconName?: string; 
}

export interface Testimonial {
  name: string;
  review: string;
  photoUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClientData {
  global: {
    brandName: string;
    whatsappNumber: string; // Format: 628...
    primaryColor: string; // Format: #HEX
    metaDescription: string;
    tracking: {
      ga4Id?: string;
      metaPixelId?: string;
      tiktokPixelId?: string;
    };
  };
  hero: {
    headline: string;
    subHeadline: string;
    ctaText: string;
    mediaUrl: string;
  };
  benefits: Benefit[]; // Max 4
  socialProof: Testimonial[];
  pricing: PricingPackage[];
  faqs: FAQ[];
}

export interface PricingPackage {
  packageName: string;
  originalPrice: number;
  discountPrice: number;
  features: string[];
  isPopular?: boolean; // Opsional: untuk menyorot paket terbaik
}

// INI ADALAH OBJECT YANG AKAN KAMU EDIT SETIAP ADA PESANAN BARU
export const clientData: ClientData = {
  global: {
    brandName: "Shopifun",
    whatsappNumber: "6281234567890",
    primaryColor: "#45b045",
    metaDescription: "Solusi bebas nyeri lutut saat lari jarak jauh dengan bantalan ganda.",
    tracking: {
      ga4Id: "",
      metaPixelId: "",
      tiktokPixelId: "",
    }
  },
  hero: {
    headline: "Bebas Nyeri Lutut Saat Lari Jarak Jauh",
    subHeadline: "Dirancang dengan bantalan ganda ultra-ringan untuk melindungi sendi Anda di aspal keras. Nikmati lari lebih jauh tanpa rasa sakit.",
    ctaText: "Pesan Promo Hari Ini",
    mediaUrl: "https://assets.asics.com/system/rebrand_media_libraries/16423/file.top-banner.jpg", // Ganti dengan link Google Drive CDN klien
  },
  benefits: [
    { title: "Bantalan Ganda", description: "Menyerap benturan 2x lebih baik dari sepatu biasa." },
    { title: "Material Breathable", description: "Kaki tetap sejuk meski berlari di cuaca panas." },
    { title: "Anti-Slip Sole", description: "Grip maksimal di jalan basah maupun kering." },
    { title: "Memory Foam", description: "Tumpuan lebih nyaman untuk telapak kaki." }
  ],
  socialProof: [
    { name: "Budi Santoso", review: "Lutut saya biasanya sakit kalau lari di atas 5km, pakai sepatu ini aman sampai 10km!", photoUrl: "https://via.placeholder.com/150" },
    { name: "Andi R.", review: "Pengiriman cepat dan kualitas setara brand luar negeri yang harganya 2 jutaan.", photoUrl: "https://via.placeholder.com/150" },
    { name: "Budi Santoso", review: "Lutut saya biasanya sakit kalau lari di atas 5km, pakai sepatu ini aman sampai 10km!", photoUrl: "https://i.pinimg.com/236x/87/cf/40/87cf405bc762400e9fffa7c47d7c1e54.jpg" },
    { name: "Andi R.", review: "Pengiriman cepat dan kualitas setara brand luar negeri yang harganya 2 jutaan.", photoUrl: "https://i.pinimg.com/236x/87/cf/40/87cf405bc762400e9fffa7c47d7c1e54.jpg" },
    { name: "Siti Rahma", review: "Awalnya ragu, pas dateng dan dicoba, beneran empuk banget! Bintang 5.", photoUrl: "https://i.pinimg.com/236x/87/cf/40/87cf405bc762400e9fffa7c47d7c1e54.jpg" },
    { name: "Deni", review: "Sol sepatunya beneran anti slip. Sempet lari pas gerimis tetep aman, nggak licin.", photoUrl: "https://i.pinimg.com/236x/87/cf/40/87cf405bc762400e9fffa7c47d7c1e54.jpg" },
    { name: "Reza F.", review: "Kaos kaki gratisannya juga enak dipakai. Bundling yang worth it banget buat harganya.", photoUrl: "https://i.pinimg.com/236x/87/cf/40/87cf405bc762400e9fffa7c47d7c1e54.jpg" }
  ],
  pricing: [
    {
      packageName: "Beli 1 Pasang",
      originalPrice: 450000,
      discountPrice: 299000,
      features: [
        "1 Pasang Sepatu X-100",
        "Gratis Ongkir se-Jawa",
        "Garansi 3 Hari"
      ],
      isPopular: false
    },
    {
      packageName: "Beli 2 Pasang (Bundling)",
      originalPrice: 900000,
      discountPrice: 499000,
      features: [
        "2 Pasang Sepatu X-100",
        "Gratis 2 Pasang Kaos Kaki",
        "Gratis Ongkir Seluruh Indonesia",
        "Garansi Tukar Ukuran 7 Hari"
      ],
      isPopular: true // Ini akan membuat kartunya menonjol (Paling Laris)
    },
    {
      packageName: "Beli 3 Pasang (Bundling)",
      originalPrice: 1200000,
      discountPrice: 799000,
      features: [
        "3 Pasang Sepatu X-100",
        "Gratis 3 Pasang Kaos Kaki",
        "Gratis Ongkir Seluruh Indonesia",
        "Garansi Tukar Ukuran 7 Hari"
      ],
      isPopular: false // Ini akan membuat kartunya menonjol (Paling Laris)
    }
  ],
  faqs: [
    { question: "Apakah ukurannya standar?", answer: "Ya, gunakan ukuran yang biasa Anda pakai. Jika ragu, naikkan 1 ukuran." },
    { question: "Apakah bisa COD?", answer: "Tentu saja! Kami menerima seperti QRIS, Bank Transfer, Virtual Account, COD, dan lainnya." },
    { question: "Apakah bisa tukar jika salah ukuran?", answer: "Bisa! Namun harus menyertakan video unboxing dan video ketika mengembalikan produk." },
    { question: "Berapa lama proses perngiriman?", answer: "Proses pengiriman membutuhkan waktu 3 hari sejak Anda beli, bisa lebih cepat / lama tergantung ekspedisi." },
    { question: "Apakah ada membership atau program loyalitas?", answer: "Ada dong! Dapatkan diskon tambahan, poin maupun early access promo dengan menghubungi Admin." }
  ]
};
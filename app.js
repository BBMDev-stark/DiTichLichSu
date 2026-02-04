// Config
const defaultConfig = {
  platform_title: "Bản đồ Di sản Quảng Bình",
  tagline: "Khám phá vương quốc hang động",
  welcome_message:
    "Chào mừng bạn đến với di sản Quảng Bình - nơi hội tụ những kỳ quan thiên nhiên tuyệt đẹp",
  primary_color: "#3b82f6",
  secondary_color: "#8b5cf6",
  accent_color: "#10b981",
  background_color: "#ffffff",
  text_color: "#1f2937",
};

let config = { ...defaultConfig };

// Ngôn ngữ
let currentLang = "vi"; // 'vi' hoặc 'en'

const translations = {
  vi: {
    platform_title: "Bản đồ Di sản Quảng Bình",
    tagline: "Khám phá di tích lịch sử Quảng Bình",
    welcome_message:
      "Chào mừng bạn đến với di sản lịch sử Quảng Bình - vùng đất anh hùng và hào hùng",
    search_placeholder: "Tìm di tích lịch sử...",
    all: "🌟 Tất cả",
    cave: "🏔️ Hang động",
    heritage: "🏛️ Di tích",
    nature: "🌿 Thiên nhiên",
    history_button: "Câu chuyện lịch sử",
    book_tour: "Đặt tour ngay",
    hours: "Giờ mở cửa",
    price: "Giá tham khảo",
    highlights: "Điểm nổi bật",
    travel_tips: "Mẹo du lịch",
    send_request: "Gửi yêu cầu đặt tour",
  },
  en: {
    platform_title: "Quang Binh Historical Heritage Map",
    tagline: "Explore Quang Binh's Historical Sites",
    welcome_message:
      "Welcome to Quang Binh historical heritage - land of heroes and glorious history",
    search_placeholder: "Search historical sites...",
    all: "🌟 All",
    cave: "🏔️ Caves",
    heritage: "🏛️ Heritage",
    nature: "🌿 Nature",
    history_button: "Historical Story",
    book_tour: "Book Tour Now",
    hours: "Opening Hours",
    price: "Reference Price",
    highlights: "Highlights",
    travel_tips: "Travel Tips",
    send_request: "Send Booking Request",
  },
};

// Real Heritage Data - Quảng Bình với hình ảnh thật (cập nhật chỉ di tích lịch sử thực tế)
const heritageData = [
  {
    id: 1,
    name: "Nhà lưu niệm Đại tướng Võ Nguyên Giáp",
    name_en: "General Vo Nguyen Giap Memorial House",
    category: "heritage",
    type: "Di tích lịch sử quốc gia",
    description:
      "Nơi sinh ra và lớn lên của Đại tướng Võ Nguyên Giáp - vị tướng huyền thoại của Quân đội Nhân dân Việt Nam.",
    description_en:
      "Birthplace and memorial of General Vo Nguyen Giap, legendary Vietnamese military leader.",
    address: "xã Lộc Thủy, tỉnh Quảng Bình",
    lat: 17.243889296166603,
    lng: 106.74984629643421,
    rating: 4.9,
    reviews: 3200,
    price: "Miễn phí",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9FDQJaAGeLdJKewhlQoi8hGNLCeYqGzQEA&s",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9FDQJaAGeLdJKewhlQoi8hGNLCeYqGzQEA&s",
    gallery: [
      "https://phongnhadiscovery.com/sites/default/files/nha_dai_tuong.jpg",
      "https://image.vietgoing.com/destination/large/vietgoing_gch2105087218.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTZZWA5FiAdKE3fIiRFxaNqKYo2BoHRl4LA&s",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Nhà lưu niệm Đại tướng",
      "Di tích quốc gia",
      "Triển lãm lịch sử",
      "Vườn cây kỷ niệm",
    ],
    historyStory:
      "Nhà lưu niệm Đại tướng là nơi gắn liền với tuổi thơ và những năm tháng đầu đời của Võ Nguyên Giáp – vị Đại tướng đầu tiên của Quân đội Nhân dân Việt Nam, một trong những nhân vật lịch sử tiêu biểu của thế kỷ XX. Trong không gian giản dị của ngôi nhà, Đại tướng đã lớn lên trong một gia đình có truyền thống yêu nước, đề cao đạo lý, tinh thần hiếu học và trách nhiệm đối với cộng đồng. Chính môi trường gia đình và quê hương đã góp phần hình thành ở ông tư duy độc lập, ý chí kiên cường và lòng yêu nước sâu sắc ngay từ khi còn nhỏ. Những kỷ vật, hình ảnh và câu chuyện được lưu giữ tại nhà lưu niệm phản ánh rõ nét cuộc sống đời thường mộc mạc nhưng giàu giá trị tinh thần, từ đó cho thấy nền tảng tư tưởng và nhân cách đã hun đúc nên một vị tướng tài ba, một nhà lãnh đạo có tầm ảnh hưởng lớn đối với lịch sử dân tộc Việt Nam. Ngày nay, nhà lưu niệm không chỉ là nơi tưởng niệm và tri ân công lao to lớn của Đại tướng Võ Nguyên Giáp, mà còn là không gian giáo dục lịch sử quan trọng, giúp các thế hệ sau hiểu rõ hơn về truyền thống yêu nước, ý chí vượt khó, tinh thần cống hiến và trách nhiệm gìn giữ, phát huy những giá trị lịch sử – văn hóa của dân tộc.",

    historyStory_en:
      "Nestled by the peaceful Kien Giang River in An Ninh Village, Loc Thuy Commune, Le Thuy District, the Memorial House of General Vo Nguyen Giap is a profound cultural and historical space where a legend began. It was here, on August 25, 1911, that the nation's elite son was born into a virtuous and patriotic Confucian family. The traditional three-compartment wooden house, tucked away under lush green canopies, witnessed the formative years that shaped the will and character of the 'Eldest Brother' of the Vietnam People's Army. During the fierce resistance against French colonialism in 1947, the house was set ablaze by enemies in an attempt to destroy a revolutionary symbol. However, in 1977, out of boundless respect, the local government and people faithfully restored the house on its original foundation. Today, the site preserves hundreds of precious artifacts and documents alongside humble mementos like an old wooden bed, a simple tea set, and a century-old starfruit tree. All these elements harmonize to serve as a living testament to the modest and virtuous life of the world-famous 'General without stars'—a military genius with a truly humble soul who remained deeply connected to his roots.",
  },
  {
    id: 2,
    name: "Quảng Bình Quan",
    name_en: "Quang Binh Quan Gate",
    category: "heritage",
    type: "Di tích kiến trúc quân sự Đàng Trong",
    description:
      "Cổng thành cổ duy nhất còn lại của hệ thống Lũy Thầy, xây dựng năm 1639.",
    description_en:
      "The only remaining ancient gate of the Thầy Rampart system, built in 1639.",
    address: "Phường Đồng Hới, TP. Đồng Hới, tỉnh Quảng Bình",
    lat: 17.46342816411765,
    lng: 106.62404015410861,
    rating: 4.7,
    reviews: 1800,
    price: "Miễn phí",
    image:
      "https://api.sovaba.travel/uploads/Quang_Binh_quan_Quang_Binh_5b01c66a20.jpg",
    thumbnail:
      "https://api.sovaba.travel/uploads/Quang_Binh_quan_Quang_Binh_5b01c66a20.jpg",
    gallery: [
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/quang-binh-quan-4-1024x768-1.jpg",
      "https://api.sovaba.travel/uploads/quang_binh_quan_dang_trong_a95d871ba9.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw64hpzE2cpKSpttPcwCD00MrDWfsg06cZCA&s",
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/quang-binh-quan-5.jpg",
      "https://bestour.com.vn/uploads/quay-nguoc-thoi-gian-voi-quang-binh-quan-ki-vi1.jpg",
    ],
    hours: "06:00 - 18:00",
    highlights: [
      "Thành lũy 400 năm",
      "Di tích quốc gia",
      "Kiến trúc cổ",
      "Trung tâm Đồng Hới",
    ],
    historyStory:
      "Quảng Bình Quan là một trong những di tích lịch sử tiêu biểu gắn liền với quá trình hình thành và bảo vệ vùng đất Quảng Bình trong suốt nhiều thế kỷ. Công trình được xây dựng vào đầu thế kỷ XVII, dưới thời chúa Nguyễn, như một bộ phận quan trọng trong hệ thống phòng thủ quân sự nhằm bảo vệ ranh giới phía nam của Đàng Ngoài trong bối cảnh lịch sử phân tranh Trịnh – Nguyễn kéo dài. Với vị trí chiến lược, Quảng Bình Quan không chỉ là cổng thành kiểm soát giao thông và quân sự, mà còn là biểu tượng cho vai trò “phên dậu” của Quảng Bình trong lịch sử giữ nước. Trải qua nhiều biến cố lịch sử, chiến tranh và thời gian, công trình từng bị hư hại nặng nề nhưng đã được trùng tu, phục dựng để giữ gìn giá trị nguyên gốc. Ngày nay, Quảng Bình Quan không chỉ mang ý nghĩa là một dấu tích quân sự cổ, mà còn là chứng nhân lịch sử phản ánh tinh thần đấu tranh, ý chí bảo vệ lãnh thổ và truyền thống kiên cường của con người Quảng Bình qua các thời kỳ lịch sử.",

    historyStory_en:
      "Quang Binh Quan is not merely an architectural monument but a brilliant symbol of 17th-century Vietnamese military history. Built in 1639 under the reign of Lord Nguyen Phuc Lan, it served as one of the most critical checkpoints within the legendary Thay Rampart (Dao Duy Tu Rampart). This defensive system enabled the Nguyen Lords to withstand numerous attacks from the Trinh Lords, effectively dividing the country into Dang Trong and Dang Ngoai for over two centuries. Positioned at a strategic 'bottleneck' on the North-South Mandarin Road, Quang Binh Quan functioned as a 'steel gate,' controlling all movement and serving as a survival boundary for the southern realm. Throughout centuries of upheaval—from the fierce Trinh-Nguyen civil wars to modern resistance against foreign invaders—the gate was damaged multiple times and subsequently restored. Today, Quang Binh Quan stands proudly in the heart of Dong Hoi City as a majestic historical witness, reminding future generations of the masterful military wisdom and the unyielding determination of their ancestors to protect the national borders.",
  },
  {
    id: 3,
    name: "Tượng đài Mẹ Suốt",
    name_en: "Mother Suot Monument",
    category: "heritage",
    type: "Di tích anh hùng lực lượng vũ trang",
    description:
      "Tưởng niệm Mẹ Nguyễn Thị Suốt - người anh hùng chèo đò đưa bộ đội qua sông Nhật Lệ.",
    description_en:
      "Monument to Mother Nguyen Thi Suot, heroine who ferried soldiers across Nhat Le River.",
    address: "Phường Đồng Hới, TP Đồng Hới, tỉnh Quảng Bình",
    lat: 17.459210733447197,
    lng: 106.62537488109533,
    rating: 4.8,
    reviews: 2200,
    price: "Miễn phí",
    image:
      "https://bizweb.dktcdn.net/100/006/093/files/tuong-dai-me-suot-1.jpg?v=1711679915208",
    thumbnail:
      "https://bizweb.dktcdn.net/100/006/093/files/tuong-dai-me-suot-1.jpg?v=1711679915208",
    gallery: [
      "https://phongnhatrips.com/wp-content/uploads/2023/01/me-suot-3.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0i7Ub_pshyjGvbg1lBQgXd6Qh1tyI7tJ4A&s",
      "https://phongnhainfo.com/wp-content/uploads/2024/12/tuong-me-suot-vao-buoi-binh-minh-tren-song-nhat-le.jpg",
      "https://static.cand.com.vn/Files/Image/thanhbinh/2020/07/30/0bbbc6dc-9220-40d4-8238-74a8a0b20401.jpg",
      "https://vanvn.vn/wp-content/uploads/2025/09/Phan-Dinh-Tien-vanvn.jpg2_.jpg",
    ],
    hours: "24/7",
    highlights: [
      "Tượng đài anh hùng",
      "Bến phà lịch sử",
      "Ký ức kháng chiến",
      "View sông Nhật Lệ",
    ],
    historyStory:
      "Tượng đài Mẹ Suốt là công trình tưởng niệm gắn liền với hình tượng Nguyễn Thị Suốt – người mẹ anh hùng tiêu biểu cho tinh thần quật cường của nhân dân Quảng Bình trong thời kỳ kháng chiến chống Mỹ. Trong những năm chiến tranh ác liệt, khi tuyến đường và dòng sông trở thành mục tiêu đánh phá, Mẹ Suốt đã không quản hiểm nguy, ngày đêm chèo đò đưa bộ đội, vũ khí và lương thực vượt sông, góp phần giữ vững mạch giao thông chiến lược phục vụ tiền tuyến. Hình ảnh người mẹ lam lũ, kiên cường giữa bom đạn đã trở thành biểu tượng sống động cho lòng yêu nước, sự hy sinh thầm lặng và tinh thần bất khuất của người phụ nữ Việt Nam. Tượng đài được dựng lên không chỉ để tưởng nhớ công lao của Mẹ Suốt, mà còn nhằm khắc ghi một giai đoạn lịch sử hào hùng, nhắc nhở các thế hệ sau về giá trị của hòa bình, độc lập và sự đánh đổi lớn lao của những con người bình dị trong cuộc đấu tranh bảo vệ Tổ quốc.",

    historyStory_en:
      "The Monument of Mother Suot is a radiant symbol of revolutionary heroism, honoring Hero of Labor Nguyen Thi Suot (1906 - 1968) – a brave daughter of Quang Binh province. During the fiercest years of the resistance war against the US, while Dong Hoi was devastated by tens of thousands of tons of bombs, Mother Suot, even in her 60s, defied all dangers to single-handedly ferry thousands of soldiers and weapons across the Nhat Le River. At that time, the river was never at peace, surrounded by falling bombs and stray bullets, yet her oars remained steady, carrying faith and vitality to the front lines. She heroically sacrificed her life on October 13, 1968, during a US air raid, leaving behind profound grief and an immortal legend of patriotism. In 1995, the monument was inaugurated on the historic banks of the Nhat Le River. Standing proudly with an oar in hand facing the water, the monument is not only a tribute from future generations but also a reminder of the indomitable spirit and extraordinary courage of Vietnamese women amidst the storms of war.",
  },
  {
    id: 4,
    name: "Hang Sơn Đoòng",
    name_en: "Son Doong Cave",
    category: "cave",
    type: "Hang động lớn nhất thế giới",
    description:
      "Hang Sơn Đoòng là hang động tự nhiên lớn nhất thế giới, nằm trong Vườn quốc gia Phong Nha-Kẻ Bàng, với sông ngầm, rừng nguyên sinh bên trong và hệ sinh thái riêng biệt.",
    description_en:
      "Son Doong Cave is the world's largest natural cave, located in Phong Nha-Ke Bang National Park, featuring an underground river, internal jungle, and unique ecosystem.",
    address: "Xã Tân Trạch, huyện Bố Trạch, tỉnh Quảng Bình",
    lat: 17.464945897175223,
    lng: 106.2879303382137,
    rating: 5.0,
    reviews: 160,
    price: "79.500.000 VNĐ",
    image:
      "https://oxalisadventure.com/uploads/2022/12/sondoongcavebanner800__638073075744874957.jpg",
    thumbnail:
      "https://oxalisadventure.com/uploads/2022/12/sondoongcavebanner800__638073075744874957.jpg",
    gallery: [
      "https://www.bambooairways.com/documents/20122/1165110/du-lich-hang-son-doong-1.jpeg/0244dbb2-ea2a-2f61-5e67-6088ca9efe3d?t=1695027512192",
      "http://www.sondoongcave.org/images/hang-son-doong-cave-vietnam2.jpg",
      "https://phongnhacave.org/wp-content/uploads/2015/12/hang-son-doong.jpg",
      "https://mia.vn/media/uploads/blog-du-lich/hang-son-doong-quang-binh-kham-pha-hang-dong-lon-nhat-the-gioi-5-1653570252.jpeg",
    ],
    hours: "Chỉ mở cho tour thám hiểm theo mùa (tháng 2-8)",
    highlights: [
      "Hang lớn nhất thế giới",
      "Rừng nguyên sinh bên trong",
      "Sông ngầm chảy qua",
      "Hố sụt khổng lồ tạo giếng trời",
    ],
    historyStory:
      "Hang Sơn Đoòng được phát hiện năm 1991 bởi ông Hồ Khanh, một người dân địa phương ở Quảng Bình, nhưng chỉ được khám phá đầy đủ năm 2009 bởi Hiệp hội Hang động Anh. Hang được hình thành cách đây 2-5 triệu năm do nước sông xói mòn đá vôi. Năm 2013, hang được mở cửa cho du lịch thám hiểm hạn chế, trở thành biểu tượng của du lịch mạo hiểm Việt Nam và được công nhận là hang động tự nhiên lớn nhất thế giới.",
    historyStory_en:
      "Son Doong Cave was discovered in 1991 by local man Ho Khanh in Quang Binh Province, but fully explored in 2009 by the British Cave Research Association. Formed 2-5 million years ago by river erosion of limestone, it opened for limited adventure tourism in 2013. Recognized as the world's largest natural cave, it features its own jungle, river, and ecosystem, making it a global icon of Vietnam's adventure travel.",
  },
  {
    id: 5,
    name: "Hang Én",
    name_en: "En Cave",
    category: "cave",
    type: "Hang động lớn thứ ba thế giới",
    description:
      "Hang Én là một trong những hang động lớn nhất thế giới, nằm sâu trong Vườn quốc gia Phong Nha-Kẻ Bàng, với bãi cát, sông ngầm và hệ thống hang rộng lớn.",
    description_en:
      "En Cave is the third largest cave in the world, located deep in Phong Nha-Ke Bang National Park, featuring a beach, underground river, and vast chambers.",
    address: "Xã Sơn Trạch, huyện Bố Trạch, tỉnh Quảng Bình",
    lat: 17.457392586611025,
    lng: 106.28773716717932,
    rating: 4.9,
    reviews: 100,
    price: "8.800.000 VNĐ",
    image:
      "https://evivatour.com/wp-content/uploads/2021/09/Hang-En-Cave-1000x565.jpg",
    thumbnail:
      "https://evivatour.com/wp-content/uploads/2021/09/Hang-En-Cave-1000x565.jpg",
    gallery: [
      "https://api.sovaba.travel/uploads/Ve_dep_vo_thuc_cua_hang_en_9f4ec2cf33.jpg",
      "https://image.vietgoing.com/destination/large/vietgoing_oyg2104289310.webp",
    ],
    hours: "Chỉ mở cho tour thám hiểm",
    highlights: [
      "Hang lớn thứ ba thế giới",
      "Bãi cát tự nhiên bên trong",
      "Sông ngầm và hồ nước",
      "Nơi trú ngụ của hàng ngàn chim én",
    ],
    historyStory:
      "Hang Én được biết đến từ hàng trăm năm bởi người dân tộc Arem, nhưng được khám phá bởi các nhà thám hiểm Anh năm 1994. Tên gọi từ đàn chim én trú ngụ bên trong. Hang dài 1,6km, cao 100m, rộng 170m, là phần của hệ thống hang động Phong Nha-Kẻ Bàng và lối vào Hang Sơn Đoòng.",
    historyStory_en:
      "En Cave has been known to the Arem ethnic people for centuries, but was explored by British cavers in 1994. Named after the swifts that nest inside, it is 1.6km long, 100m high, and 170m wide. Part of the Phong Nha-Ke Bang cave system, it serves as an entrance to Son Doong Cave and features its own beach and river.",
  },
  {
    id: 6,
    name: "Động Thiên Đường",
    name_en: "Paradise Cave",
    category: "cave",
    type: "Hang động dài nhất châu Á",
    description:
      "Động Thiên Đường là hang động khô dài nhất châu Á, nằm trong Vườn quốc gia Phong Nha-Kẻ Bàng, với hệ thống thạch nhũ đẹp như cung điện.",
    description_en:
      "Paradise Cave is Asia's longest dry cave, located in Phong Nha-Ke Bang National Park, featuring stunning stalactites resembling a palace.",
    address: "Xã Sơn Trạch, huyện Bố Trạch, tỉnh Quảng Bình",
    lat: 17.51947184574964,
    lng: 106.22357457499751,
    rating: 4.9,
    reviews: 2000,
    price: "250.000 VNĐ",
    image: "https://statics.vinpearl.com/dong-thien-duong-3334_1627990501.jpg",
    thumbnail:
      "https://statics.vinpearl.com/dong-thien-duong-3334_1627990501.jpg",
    gallery: [
      "https://api.sovaba.travel/uploads/Dong_thien_duong_duoc_vi_nhu_hoang_cung_trong_long_dat_cua_viet_nam_c07f78dd58.jpg",
      "https://www.luavietours.com/wp/wp-content/uploads/2024/10/1-dong-thien-duong-noi-bat-voi-nhung-thach-nhu-lap-lanh-toa-lac-tai-quang-binh-750x437.jpg",
      "https://changchangfamily.com/wp-content/uploads/2023/03/kinh-nghiem-du-lich-dong-thien-duong-6.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Thạch nhũ đẹp như cung điện",
      "Hang khô dài 31km",
      "Hệ thống chiếu sáng hiện đại",
      "Đường gỗ dễ đi",
    ],
    historyStory:
      "Động Thiên Đường được phát hiện năm 2005 bởi người dân địa phương, khám phá 5km đầu bởi Hiệp hội Hang động Anh, toàn bộ 31km sau đó. Tên gọi từ vẻ đẹp thạch nhũ như thiên đường. Là di sản UNESCO trong Phong Nha-Kẻ Bàng, mở cửa du lịch năm 2010.",
    historyStory_en:
      "Paradise Cave was discovered in 2005 by a local, with the first 5km explored by the British Cave Research Association, and the full 31km later. Named for its paradise-like stalactites, it is part of UNESCO's Phong Nha-Ke Bang and opened for tourism in 2010.",
  },
  {
    id: 7,
    name: "Bãi biển Nhật Lệ",
    name_en: "Nhat Le Beach",
    category: "nature",
    type: "Bãi biển đẹp",
    description:
      "Bãi biển Nhật Lệ là bãi biển nổi tiếng ở Quảng Bình với cát trắng mịn, nước trong xanh và sóng nhẹ, nằm ngay trung tâm thành phố Đồng Hới.",
    description_en:
      "Nhat Le Beach is a famous beach in Quang Binh with soft white sand, clear turquoise water, and gentle waves, located in the heart of Dong Hoi City.",
    address: "Phường Đồng Phú, TP. Đồng Hới, tỉnh Quảng Bình",
    lat: 17.494138739258215,
    lng: 106.62644433656853,
    rating: 4.5,
    reviews: 500,
    price: "Miễn phí",
    image:
      "https://cms.junglebosstours.com/assets/7324a7df-edde-41cb-890e-06c93ec2fe61?width=1920&height=1080",
    thumbnail:
      "https://cms.junglebosstours.com/assets/7324a7df-edde-41cb-890e-06c93ec2fe61?width=1920&height=1080",
    gallery: [
      "https://dulichnewtour.vn/ckfinder/images/bien-nhat-le%20(15).jpg",
      "https://dntt.mediacdn.vn/uploads/images/Nh%E1%BB%AF%20%C4%90%E1%BB%A9c%20Hi%E1%BA%BFu/2020/05/06/picture1.jpg",
      "https://bluediamondretreat.com/wp-content/uploads/2025/05/2-1500x1000-1.jpg",
      "https://statics.vinpearl.com/bien-nhat-le-1_1629783746.png",
    ],
    hours: "24/7",
    highlights: [
      "Cát trắng mịn",
      "Nước biển trong xanh",
      "Sóng nhẹ phù hợp tắm biển",
      "Gần trung tâm thành phố",
    ],
    historyStory:
      "Bãi biển Nhật Lệ nằm ở cửa sông Nhật Lệ đổ ra biển Đông, là địa danh nổi tiếng ở Quảng Bình từ thời xưa. Tên gọi từ sông Nhật Lệ, gắn với nhiều sự kiện lịch sử và văn hóa địa phương. Ngày nay là điểm du lịch biển phổ biến, kết hợp với các di tích gần đó.",
    historyStory_en:
      "Nhat Le Beach is located at the mouth of the Nhat Le River flowing into the East Sea, a famous landmark in Quang Binh since ancient times. Named after the river, it is linked to local history and culture. Today, it is a popular beach tourism spot, combined with nearby heritage sites.",
  },
  {
    id: 8,
    name: "Suối nước Moọc",
    name_en: "Mooc Spring",
    category: "nature",
    type: "Suối nước thiên nhiên",
    description:
      "Suối nước Moọc là khu du lịch sinh thái với dòng suối trong xanh, rừng cây bao quanh, nằm trong Vườn quốc gia Phong Nha-Kẻ Bàng, phù hợp cho các hoạt động tắm suối và khám phá.",
    description_en:
      "Mooc Spring is an eco-tourism site with clear blue streams, surrounded by forest, located in Phong Nha-Ke Bang National Park, ideal for swimming and exploration.",
    address: "Xã Phúc Trạch, huyện Bố Trạch, tỉnh Quảng Bình",
    lat: 17.556874493860484,
    lng: 106.23818999828748,
    rating: 4.5,
    reviews: 53,
    price: "180.000 VNĐ",
    image:
      "https://oxalisadventure.com/uploads/2023/02/nuocmooc__638113576680039190.jpg",
    thumbnail:
      "https://oxalisadventure.com/uploads/2023/02/nuocmooc__638113576680039190.jpg",
    gallery: [
      "http://phongnhatourism.com.vn/images/IMG_2125.jpg",
      "https://cms.junglebosstours.com/assets/a035a31b-450c-4f5b-aa91-dabcd654c610?width=1920&height=1080",
      "https://statics.vinpearl.com/suoi-nuoc-mooc--_1629695174.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Dòng suối mát lạnh",
      "Rừng nguyên sinh bao quanh",
      "Hoạt động kayak, zipline",
      "Gần động Phong Nha",
    ],
    historyStory:
      "Suối nước Moọc được khám phá và phát triển thành khu du lịch sinh thái từ năm 2010, nằm trong hệ sinh thái Phong Nha-Kẻ Bàng. Tên 'Moọc' nghĩa là 'mọc lên' từ dòng nước ngầm phun trào. Là nơi thư giãn giữa thiên nhiên, gắn với hệ thống hang động gần đó.",
    historyStory_en:
      "Mooc Spring was developed as an eco-tourism site in 2010, part of Phong Nha-Ke Bang ecosystem. 'Mooc' means 'sprouting' from underground water gushing up. It offers relaxation in nature, connected to nearby caves.",
  },
  {
    id: 9,
    name: "Cồn cát Quang Phú",
    name_en: "Quang Phu Sand Dunes",
    category: "nature",
    type: "Cồn cát sa mạc",
    description:
      "Cồn cát Quang Phú là khu vực đồi cát trắng mịn gần Đồng Hới, với cảnh quan như sa mạc, phù hợp trượt cát và chụp ảnh.",
    description_en:
      "Quang Phu Sand Dunes are white sand hills near Dong Hoi, resembling a desert landscape, ideal for sandboarding and photography.",
    address: "Xã Quang Phú, TP. Đồng Hới, tỉnh Quảng Bình",
    lat: 17.531452319901103,
    lng: 106.59462747712249,
    rating: 4.5,
    reviews: 100,
    price: "Miễn phí",
    image:
      "https://mia.vn/media/uploads/blog-du-lich/con-cat-quang-phu-thien-duong-cat-voi-nhung-khoanh-khac-vo-cung-dang-nho-01-1653148857.jpeg",
    thumbnail:
      "https://mia.vn/media/uploads/blog-du-lich/con-cat-quang-phu-thien-duong-cat-voi-nhung-khoanh-khac-vo-cung-dang-nho-01-1653148857.jpeg",
    gallery: [
      "https://dulichnewtour.vn/ckfinder/images/Tours/concatquangphuquangbinh/con-cat-quang-phu-quang-binh%20(1).jpg",
      "https://quangbinhgo.com/wp-content/uploads/2022/09/anh-dep-con-cat-quang-phu-quang-binh-go3.jpg",
      "https://dulichnewtour.vn/ckfinder/images/Tours/concatquangphuquangbinh/con-cat-quang-phu-quang-binh%20(4).jpg",
    ],
    hours: "07:00 - 18:00",
    highlights: [
      "Đồi cát trắng cao",
      "Hoạt động trượt cát",
      "Cảnh quan sa mạc",
      "Gần biển",
    ],
    historyStory:
      "Cồn cát Quang Phú hình thành từ cát biển tích tụ, là địa danh tự nhiên gần Đồng Hới. Được phát triển thành khu vui chơi với ATV và trượt cát từ những năm gần đây, thu hút du khách yêu thích mạo hiểm.",
    historyStory_en:
      "Quang Phu Sand Dunes formed from accumulated sea sand, a natural site near Dong Hoi. Developed into a recreational area with ATV and sandboarding in recent years, attracting adventure seekers.",
  },
  {
    id: 10,
    name: "Thành cổ Quảng Trị",
    name_en: "Quang Tri Citadel",
    category: "heritage",
    type: "Di tích lịch sử chiến tranh",
    description:
      "Thành cổ Quảng Trị là di tích lịch sử nổi tiếng, chứng kiến trận đánh 81 ngày đêm năm 1972 trong chiến tranh Việt Nam.",
    description_en:
      "Quang Tri Citadel is a famous historical site, witness to the 81-day battle in 1972 during the Vietnam War.",
    address: "Thị trấn Quảng Trị, tỉnh Quảng Trị",
    lat: 16.753786203407536,
    lng: 107.18946973108541,
    rating: 4.7,
    reviews: 2500,
    price: "Miễn phí",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg",
    gallery: [
      "https://api.sovaba.travel/uploads/kien_truc_thanh_co_quang_tri_d1b53613e7.jpg",
      "https://file3.qdnd.vn/data/images/0/2022/07/25/phucthang/a%203%20qt.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPZDO_jr9PJik1Lwwfiuf_7yOQ18Rk_yVAA&s",
      "https://rangdong.com.vn/uploads/news/Chieu-sang-canh-quan/4/Thanh-co-quang-tri-3.png",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Di tích 81 ngày đêm",
      "Bảo tàng chiến tranh",
      "Tường thành cổ",
      "Nơi tưởng niệm anh hùng",
    ],
    historyStory:
      "Thành cổ Quảng Trị được xây dựng từ thời nhà Nguyễn năm 1824, nhưng nổi tiếng với trận đánh kéo dài 81 ngày đêm năm 1972 giữa Quân Giải phóng miền Nam và quân Mỹ - Ngụy. Đây là một trong những trận đánh ác liệt nhất chiến tranh Việt Nam, với hàng ngàn chiến sĩ hy sinh. Sau chiến tranh, thành cổ được bảo tồn như di tích lịch sử, trở thành biểu tượng cho tinh thần anh dũng và hy sinh vì độc lập dân tộc. Ngày nay, nơi đây là địa chỉ đỏ giáo dục truyền thống cách mạng, thu hút du khách tìm hiểu lịch sử.",
    historyStory_en:
      "Quang Tri Citadel was built in 1824 during the Nguyen Dynasty, but is famous for the 81-day and night battle in 1972 between the Southern Liberation Army and US-South Vietnamese forces. It was one of the fiercest battles in the Vietnam War, with thousands of soldiers sacrificed. After the war, the citadel was preserved as a historical site, becoming a symbol of courage and sacrifice for national independence. Today, it is a red address for revolutionary education, attracting visitors to learn about history.",
  },
  {
    id: 11,
    name: "Nghĩa trang liệt sĩ Trường Sơn",
    name_en: "Truong Son National Martyrs Cemetery",
    category: "heritage",
    type: "Nghĩa trang liệt sĩ",
    description:
      "Nghĩa trang liệt sĩ Trường Sơn là nơi an nghỉ của hơn 10.000 liệt sĩ hy sinh trên đường mòn Hồ Chí Minh trong chiến tranh Việt Nam.",
    description_en:
      "Truong Son National Martyrs Cemetery is the resting place of over 10,000 martyrs who sacrificed on the Ho Chi Minh Trail during the Vietnam War.",
    address: "Xã Vĩnh Trường, huyện Gio Linh, tỉnh Quảng Trị",
    lat: 16.958235769424274,
    lng: 106.95476457498951,
    rating: 4.8,
    reviews: 1800,
    price: "Miễn phí",
    image:
      "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980388d3f305fb2b584271ce9dccb251e8b9988358c0cc99209091137eb1cbd672fe5763322f4c6a7dba22c3811df09d0965e94563a6ce229e3cb5931269209e289e787b191566dafe0cbd8b3e807c8df2016d6d9d058796d451f6a3dca4310e90c/z6376692428183-25dd081e14af88111bef1bb74662760d-2766-6668.jpg",
    thumbnail:
      "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980388d3f305fb2b584271ce9dccb251e8b9988358c0cc99209091137eb1cbd672fe5763322f4c6a7dba22c3811df09d0965e94563a6ce229e3cb5931269209e289e787b191566dafe0cbd8b3e807c8df2016d6d9d058796d451f6a3dca4310e90c/z6376692428183-25dd081e14af88111bef1bb74662760d-2766-6668.jpg",
    gallery: [
      "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980388d3f305fb2b584271ce9dccb251e8b9988358c0cc99209091137eb1cbd672ffcc5d64056f9ebad6bf247ca6afbf175bceb4528081d5a72d3f1afc11378325542495d75957c2de3e2f9e2379ab5cd718e32c1b9457b68e1039cad26efb6187f/z6376997557438-ed77ceda6e77aadf10c0cb2de144d595-8420-2603.jpg",
      "https://cdnmedia.baotintuc.vn/Upload/pTMF1jgWpbjY1m8G1xWUsg/files/2023/07/nghiatrangtruongson/lietsy0894.jpg",
      "https://moitruongxaydungvn.vn/uploads/images/Qu%C3%BD%202-2023/1-C%C3%B3%20ng%C6%B0%E1%BB%9Di%20tr%E1%BA%BB%20%C4%91%C3%A3%20kh%C3%B3c%20-240723-jpg.jpg",
      "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980388d3f305fb2b584271ce9dccb251e8b9988358c0cc99209091137eb1cbd672f00674ecfb2e4212a3ae8ab32e65ee32a5e626d5650608ce67387bda6b20c0838c29edc3461f6155ac4733b520df65db141bb8b3017c4415df058775a1dc85670/z6376997555048-e92d1ed77ec71f015cf48d62fdfd2c71-6126-9845.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "An nghỉ hơn 10.000 liệt sĩ",
      "Biểu tượng đường Trường Sơn",
      "Khu tưởng niệm trang nghiêm",
      "Cảnh quan xanh mát",
    ],
    historyStory:
      "Nghĩa trang liệt sĩ Trường Sơn được xây dựng năm 1974 để tưởng niệm các liệt sĩ hy sinh trên đường mòn Hồ Chí Minh - tuyến đường huyết mạch chi viện miền Nam trong chiến tranh Việt Nam. Đây là nghĩa trang lớn nhất cả nước, với hơn 10.000 mộ phần từ khắp các tỉnh. Nơi đây không chỉ là nơi an nghỉ mà còn là biểu tượng cho sự hy sinh thầm lặng của thế hệ cha anh vì độc lập dân tộc. Hàng năm, nghĩa trang đón hàng vạn người đến viếng thăm, giáo dục truyền thống yêu nước.",
    historyStory_en:
      "Truong Son National Martyrs Cemetery was built in 1974 to commemorate martyrs who sacrificed on the Ho Chi Minh Trail - the vital supply route to the South during the Vietnam War. It is the largest cemetery in the country, with over 10,000 graves from all provinces. The site is not only a resting place but also a symbol of the silent sacrifice of previous generations for national independence. Annually, it receives tens of thousands of visitors for remembrance and patriotic education.",
  },
  {
    id: 12,
    name: "Cầu Hiền Lương - Sông Bến Hải",
    name_en: "Hien Luong Bridge - Ben Hai River",
    category: "heritage",
    type: "Di tích giới tuyến",
    description:
      "Cầu Hiền Lương bắc qua sông Bến Hải là biểu tượng chia cắt hai miền Nam Bắc Việt Nam theo Hiệp định Genève 1954.",
    description_en:
      "Hien Luong Bridge over Ben Hai River is a symbol of the division between North and South Vietnam under the 1954 Geneva Accords.",
    address: "Xã Vĩnh Thành, huyện Vĩnh Linh, tỉnh Quảng Trị",
    lat: 17.004093440900014,
    lng: 107.05149299827944,
    rating: 4.6,
    reviews: 2000,
    price: "Miễn phí",
    image:
      "https://mia.vn/media/uploads/blog-du-lich/cau-hien-luong-phuc-dung-1754296893.jpg",
    thumbnail:
      "https://mia.vn/media/uploads/blog-du-lich/cau-hien-luong-phuc-dung-1754296893.jpg",
    gallery: [
      "https://i2-vnexpress.vnecdn.net/2024/08/13/20-1723453957-1723516541.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=32dM-kwyx26igWQSrJY7kg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVD0PTHOGbOqqpSaIM-etxZYJLnLgfZVPgA&s",
      "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng%207/Ng%C3%A0y_26/VI%E1%BA%BET%20B%C3%8AN%20C%E1%BA%A6U%20HI%E1%BB%80N%20L%C6%AF%C6%A0NG/3.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhT_R-8GXYfGkB-QwfBnuhigWj8Xo_TMCNw&s",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Biểu tượng chia cắt",
      "Sông Bến Hải vĩ tuyến 17",
      "Bảo tàng giới tuyến",
      "Cảnh quan sông nước",
    ],
    historyStory:
      "Cầu Hiền Lương và sông Bến Hải là giới tuyến tạm thời chia cắt Việt Nam thành hai miền theo Hiệp định Genève 1954. Cầu được sơn hai màu khác nhau tượng trưng cho sự chia cắt. Trong chiến tranh, nơi đây chứng kiến nhiều sự kiện đau thương, biểu tượng cho khát vọng thống nhất. Sau 1975, cầu được xây mới và trở thành di tích lịch sử, giáo dục về lịch sử dân tộc và giá trị hòa bình.",
    historyStory_en:
      "Hien Luong Bridge and Ben Hai River served as the temporary demarcation line dividing Vietnam into North and South under the 1954 Geneva Accords. The bridge was painted in two different colors symbolizing the division. During the war, it witnessed many tragic events, representing the desire for unification. After 1975, the bridge was rebuilt and became a historical site, educating about national history and the value of peace.",
  },
  {
    id: 13,
    name: "Địa đạo Vịnh Mốc",
    name_en: "Vinh Moc Tunnels",
    category: "heritage",
    type: "Di tích hầm ngầm chiến tranh",
    description:
      "Địa đạo Vịnh Mốc là hệ thống hầm ngầm nơi dân làng trú ẩn và chiến đấu trong chiến tranh Việt Nam.",
    description_en:
      "Vinh Moc Tunnels are an underground tunnel system where villagers sheltered and fought during the Vietnam War.",
    address: "Xã Vĩnh Thạch, huyện Vĩnh Linh, tỉnh Quảng Trị",
    lat: 17.074487226731797,
    lng: 107.11103908423439,
    rating: 4.7,
    reviews: 2200,
    price: "40.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/101/075/articles/vm-5c18fd7b-6bf8-4b01-939b-8e9cb3959de0.jpg?v=1557391446250",
    thumbnail:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/101/075/articles/vm-5c18fd7b-6bf8-4b01-939b-8e9cb3959de0.jpg?v=1557391446250",
    gallery: [
      "https://api.sovaba.travel/uploads/sm_Xay_dung_dia_dao_Vinh_Moc_b9928b9cc5.png",
      "https://image.plo.vn/Uploaded/2026/vocgmvlw/2025_04_26/dia-dao-vinh-moc-5-9261-3067.jpg",
      "https://image.plo.vn/w1000/Uploaded/2025/vocgmvlw/2025_04_26/dia-dao-vinh-moc-13-4989-8696.jpg.webp",
      "https://mia.vn/media/uploads/blog-du-lich/dia-dao-vinh-moc-3-1710467870.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Hệ thống hầm dài 2km",
      "Nơi trú ẩn cho 60 hộ dân",
      "Bảo tàng sống chiến tranh",
      "Gần biển Vịnh Mốc",
    ],
    historyStory:
      "Địa đạo Vịnh Mốc được dân làng đào từ năm 1966 để tránh bom Mỹ, dài gần 2km với 3 tầng, là nơi trú ẩn cho hơn 300 người trong 6 năm. Đây là biểu tượng cho sức sống bền bỉ của nhân dân trong chiến tranh. Sau chiến tranh, địa đạo được bảo tồn như di tích, thu hút du khách khám phá lịch sử kháng chiến.",
    historyStory_en:
      "Vinh Moc Tunnels were dug by villagers from 1966 to avoid US bombs, 2km long with 3 levels, sheltering over 300 people for 6 years. It is a symbol of the people's resilient life during the war. After the war, the tunnels were preserved as a relic, attracting visitors to explore resistance history.",
  },
  {
    id: 14,
    name: "Sân bay Tà Côn (Khe Sanh)",
    name_en: "Ta Con Airport (Khe Sanh Combat Base)",
    category: "heritage",
    type: "Di tích căn cứ quân sự",
    description:
      "Sân bay Tà Côn là căn cứ quân sự quan trọng trong trận Khe Sanh năm 1968.",
    description_en:
      "Ta Con Airport was a key military base in the 1968 Khe Sanh battle.",
    address: "Xã Tân Hợp, huyện Hướng Hóa, tỉnh Quảng Trị",
    lat: 16.654463288214966,
    lng: 106.72399705147586,
    rating: 4.5,
    reviews: 1500,
    price: "Miễn phí",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjER3ZBcFIM-6nsXrdKJwzTACIabsXsYo0uA&s",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjER3ZBcFIM-6nsXrdKJwzTACIabsXsYo0uA&s",
    gallery: [
      "https://bizweb.dktcdn.net/100/101/075/files/tc-83a4ad2b-d959-41c7-b993-b64a407a80a1.jpg?v=1557740583724",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJ6f9sPl_QBP6swZMtNUKZqgHRej4xnKvAQ&s",
      "https://bizweb.dktcdn.net/100/101/075/files/tc-1092dac4-78c0-48b6-921e-ac345c539445.jpg?v=1557740652230",
      "https://quangbinhtravel.vn/wp-content/uploads/2025/10/Khe-Sanh-Combat-Base.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Căn cứ Khe Sanh",
      "Bảo tàng chiến tranh",
      "Máy bay, xe tăng trưng bày",
      "Địa hình đồi núi",
    ],
    historyStory:
      "Sân bay Tà Côn là căn cứ quan trọng của Mỹ trong chiến tranh Việt Nam, nơi diễn ra trận đánh Khe Sanh kéo dài 170 ngày năm 1968. Đây là một trong những trận đánh lớn, với mục đích phân tán lực lượng Quân Giải phóng. Sau 1975, nơi đây trở thành di tích lịch sử, với bảo tàng trưng bày hiện vật chiến tranh.",
    historyStory_en:
      "Ta Con Airport was a crucial US base during the Vietnam War, site of the 170-day Khe Sanh battle in 1968. It aimed to divert Liberation Army forces. After 1975, it became a historical site with a museum displaying war artifacts.",
  },
  {
    id: 15,
    name: "Cửa khẩu Lao Bảo",
    name_en: "Lao Bao Border Gate",
    category: "heritage",
    type: "Di tích biên giới",
    description:
      "Cửa khẩu Lao Bảo là cửa khẩu biên giới Việt - Lào, chứng kiến nhiều sự kiện lịch sử và thương mại.",
    description_en:
      "Lao Bao Border Gate is the Vietnam-Laos border crossing, witness to historical and commercial events.",
    address: "Thị trấn Lao Bảo, huyện Hướng Hóa, tỉnh Quảng Trị",
    lat: 16.623338568978106,
    lng: 106.5911550516953,
    rating: 4.4,
    reviews: 1200,
    price: "Miễn phí",
    image:
      "https://als.com.vn/api/file-management/file-descriptor/view/701c9962-7f20-e63e-c386-3a13d5be8ad3",
    thumbnail:
      "https://als.com.vn/api/file-management/file-descriptor/view/701c9962-7f20-e63e-c386-3a13d5be8ad3",
    gallery: [
      "https://media.thuonghieucongluan.vn/uploads/2021/02/05/cua-khau-lao-bao-2-1612482590.jpg",
      "https://vnanet.vn/Data/Articles/2020/05/28/4731193/vna_potal_quang_tri_lao_bao_-_cua_khau_kieu_mau_tren_tuyen_bien_gioi_viet_%E2%80%93_lao_180801868_stand.jpg",
      "https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/1/20/653314/A4-Copy.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Cửa khẩu Việt - Lào",
      "Di tích thương mại biên giới",
      "Cảnh quan núi non",
      "Chợ biên giới sầm uất",
    ],
    historyStory:
      "Cửa khẩu Lao Bảo được mở từ thời Pháp thuộc, là điểm giao thương quan trọng giữa Việt Nam và Lào. Trong chiến tranh, nơi đây là tuyến đường quan trọng trên đường mòn Hồ Chí Minh. Sau hòa bình, cửa khẩu phát triển thành khu kinh tế biên giới, biểu tượng cho quan hệ hữu nghị Việt - Lào.",
    historyStory_en:
      "Lao Bao Border Gate was opened during French colonial times, a key trade point between Vietnam and Laos. During the war, it was an important route on the Ho Chi Minh Trail. After peace, it developed into a border economic zone, symbolizing Vietnam-Laos friendship.",
  },
];

// Map variables
let map;
let markers = [];
let currentCategory = "all";

// Category colors (giữ nguyên, nhưng chủ yếu heritage)
const categoryStyles = {
  cave: {
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    markerBorder: "#a855f7",
  },
  heritage: {
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    markerBorder: "#f59e0b",
  },
  nature: {
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    markerBorder: "#10b981",
  },
};

// Initialize map
// function initMap() {
//   map = L.map("map", {
//     center: [17.6, 106.35],
//     zoom: 10,
//     zoomControl: false,
//     minZoom: 8,
//     maxZoom: 18,
//   });

//   // Use better tile layer
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "© OpenStreetMap contributors",
//     maxZoom: 19,
//   }).addTo(map);

//   addMarkers();
// }

function initMap() {
  // Bounds mở rộng để bao quát TOÀN BỘ Quảng Bình + Quảng Trị (và dư một chút)
  const fullBounds = [
    [16.4, 105.8], // Tây Nam (dưới Cửa khẩu Lao Bảo ~16.62)
    [18.3, 108.0], // Đông Bắc (trên Quảng Bình)
  ];

  map = L.map("map", {
    center: [17.0, 106.8], // Center cân bằng giữa Quảng Bình và Quảng Trị
    zoom: 8, // Zoom nhỏ hơn → thấy rộng ngay từ đầu
    zoomControl: false,
    minZoom: 7, // Cho phép zoom out thêm nếu cần
    maxZoom: 18,
    maxBounds: fullBounds, // Giới hạn kéo map (nhưng rộng hơn)
    maxBoundsViscosity: 1.0, // Giữ map không thoát bounds
  });

  // Tile layer (giữ nguyên)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  // Ngăn kéo ra ngoài bounds (giữ nguyên)
  map.on("drag", function () {
    map.panInsideBounds(fullBounds, { animate: false });
  });

  // Thêm marker và TỰ ĐỘNG FIT TOÀN BỘ để xem được hết 15 địa danh
  addMarkers();
  showAllMarkers(); // Quan trọng: Tự động zoom fit tất cả marker ngay khi load
}

// Create custom marker với hình ảnh thật
function createMarkerIcon(category, imageUrl) {
  const style = categoryStyles[category];
  return L.divIcon({
    className: "custom-marker",
    html: `
          <div class="marker-container" style="width: 56px; height: 64px;">
            <div style="
              width: 50px;
              height: 50px;
              border-radius: 12px;
              border: 3px solid ${style.markerBorder};
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
              overflow: hidden;
              background: white;
            ">
              <img src="${imageUrl}" alt="" style="
                width: 100%;
                height: 100%;
                object-fit: cover;
              " onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=60'" />
            </div>
            <div style="
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 10px solid ${style.markerBorder};
            "></div>
          </div>
        `,
    iconSize: [56, 64],
    iconAnchor: [28, 64],
    popupAnchor: [0, -64],
  });
}

// Add markers
function addMarkers() {
  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  const filteredData =
    currentCategory === "all"
      ? heritageData
      : heritageData.filter((h) => h.category === currentCategory);

  filteredData.forEach((heritage) => {
    const marker = L.marker([heritage.lat, heritage.lng], {
      icon: createMarkerIcon(heritage.category, heritage.thumbnail),
    }).addTo(map);

    const style = categoryStyles[heritage.category];
    const popupContent = `
          <div class="p-0 min-w-[300px]">
            <div class="relative h-40 overflow-hidden">
              <img src="${heritage.image}" alt="${heritage.name}" 
                class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 class="font-heading font-bold text-lg mb-1">${currentLang === "vi" ? heritage.name : heritage.name_en || heritage.name}</h3>
                <p class="text-sm opacity-90">${heritage.type}</p>
              </div>
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">${currentLang === "vi" ? heritage.description : heritage.description_en || heritage.description}</p>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-1">
                  <span class="text-yellow-500 text-lg">★</span>
                  <span class="font-bold text-gray-800">${heritage.rating}</span>
                  <span class="text-xs text-gray-400">(${heritage.reviews.toLocaleString()})</span>
                </div>
                <span class="text-sm font-bold ${style.text}">${heritage.price}</span>
              </div>
              <button onclick="openDetailModal(${heritage.id})" 
                class="w-full py-2.5 bg-gradient-to-r ${style.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Xem chi tiết →
              </button>
            </div>
          </div>
        `;

    marker.bindPopup(popupContent, {
      className: "custom-popup",
      maxWidth: 320,
      offset: [0, -10],
    });

    marker.heritageData = heritage;
    markers.push(marker);
  });

  updateHeritageList(filteredData);
}

// Update heritage list với hình ảnh thật
function updateHeritageList(data) {
  const listContainer = document.getElementById("heritage-list");
  const countEl = document.getElementById("heritage-count");
  countEl.textContent = `${data.length} địa điểm`;

  listContainer.innerHTML = data
    .map((heritage) => {
      const style = categoryStyles[heritage.category];
      return `
          <div class="heritage-card bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border-2 ${style.border} hover:border-blue-400" 
               onclick="focusHeritage(${heritage.id})">
            <div class="flex">
              <div class="w-20 h-20 flex-shrink-0 overflow-hidden">
                <img src="${heritage.thumbnail}" alt="${heritage.name}" 
                  class="w-full h-full object-cover"
                  onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=60'" />
              </div>
              <div class="flex-1 p-3">
                <h4 class="font-heading font-bold text-sm text-gray-800 line-clamp-1 mb-1">${currentLang === "vi" ? heritage.name : heritage.name_en || heritage.name}</h4>
                <p class="text-xs text-gray-500 mb-2 line-clamp-1">${heritage.type}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-500 text-sm">★</span>
                    <span class="text-xs font-bold text-gray-700">${heritage.rating}</span>
                  </div>
                  <span class="text-xs font-bold ${style.text}">${heritage.price}</span>
                </div>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
}

// Focus heritage
function focusHeritage(id) {
  const heritage = heritageData.find((h) => h.id === id);
  if (heritage) {
    map.setView([heritage.lat, heritage.lng], 14);
    const marker = markers.find((m) => m.heritageData.id === id);
    if (marker) {
      marker.openPopup();
    }
  }
}

// Filter category
function filterCategory(category) {
  currentCategory = category;

  document.querySelectorAll(".category-badge").forEach((btn) => {
    btn.classList.remove(
      "active",
      "from-blue-500",
      "to-purple-600",
      "text-white",
      "shadow-md",
    );
    btn.classList.add("bg-gray-100", "text-gray-700");
  });

  event.target.classList.add(
    "active",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white",
    "shadow-md",
  );
  event.target.classList.remove("bg-gray-100", "text-gray-700");

  addMarkers();
}

// Show all markers
function showAllMarkers() {
  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

// Toggle search
function toggleSearch() {
  const searchBar = document.getElementById("search-bar");
  searchBar.classList.toggle("hidden");
  if (!searchBar.classList.contains("hidden")) {
    document.getElementById("search-input").focus();
  }
}

// Handle search
function handleSearch(query) {
  const filtered = heritageData.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.description.toLowerCase().includes(query.toLowerCase()) ||
      h.address.toLowerCase().includes(query.toLowerCase()) ||
      h.type.toLowerCase().includes(query.toLowerCase()),
  );

  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  filtered.forEach((heritage) => {
    const marker = L.marker([heritage.lat, heritage.lng], {
      icon: createMarkerIcon(heritage.category, heritage.thumbnail),
    }).addTo(map);
    marker.heritageData = heritage;
    markers.push(marker);
  });

  updateHeritageList(filtered);

  if (filtered.length > 0 && query.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("absolute");
  sidebar.classList.toggle("inset-0");
  sidebar.classList.toggle("z-30");
}

// Global variable để track gallery image hiện tại
let currentGalleryIndex = 0;

// Open detail modal với gallery hình ảnh thật (cập nhật thêm nút lịch sử và form đặt tour)
function openDetailModal(id) {
  const heritage = heritageData.find((h) => h.id === id);
  if (!heritage) return;

  currentGalleryIndex = 0;
  const style = categoryStyles[heritage.category];
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("modal-content");
  const lang = currentLang;
  const t = translations[lang];

  content.innerHTML = `
        <div class="relative">
          <button onclick="closeModal()" class="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-xl">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Hero Image Gallery -->
          <div class="relative">
            <!-- Main Image -->
            <div id="main-gallery-image" class="h-72 md:h-96 relative overflow-hidden bg-gray-100">
              <img src="${heritage.gallery[0]}" alt="${heritage.name}" 
                id="gallery-main-img"
                class="w-full h-full object-cover transition-opacity duration-300"
                onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <!-- Navigation Arrows -->
              <button onclick="changeGalleryImage(-1, ${heritage.id})" class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button onclick="changeGalleryImage(1, ${heritage.id})" class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
              
              <!-- Overlay Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span class="px-4 py-2 bg-white/95 backdrop-blur-sm ${style.text} font-bold rounded-full text-sm shadow-lg">
                  ${heritage.type}
                </span>
              </div>
              
              <!-- Rating Badge -->
              <div class="absolute top-4 right-20 md:right-24 z-10 flex items-center gap-1 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <span class="text-yellow-500 text-lg">★</span>
                <span class="font-bold text-gray-800">${heritage.rating}</span>
              </div>
              
              <!-- Image Counter -->
              <div class="absolute bottom-20 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                <span id="gallery-counter">1</span> / ${heritage.gallery.length}
              </div>
            </div>
            
            <!-- Thumbnail Gallery -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" id="thumbnail-container">
                ${heritage.gallery
                  .map(
                    (img, idx) => `
                  <button onclick="setGalleryImage(${idx}, ${heritage.id})" 
                    class="gallery-thumb flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 ${idx === 0 ? "border-white ring-2 ring-white" : "border-white/50"} hover:border-white hover:scale-105 transition-all shadow-lg"
                    data-index="${idx}">
                    <img src="${img}" alt="Gallery ${idx + 1}" 
                      class="w-full h-full object-cover"
                      onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=60'" />
                  </button>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Title Section -->
            <div class="mb-5">
              <h2 class="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">${lang === "vi" ? heritage.name : heritage.name_en || heritage.name}</h2>
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="font-bold text-gray-800">${heritage.rating}</span>
                  <span>(${heritage.reviews.toLocaleString()} đánh giá)</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg class="w-5 h-5 ${style.text}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  <span>${heritage.address}</span>
                </div>
              </div>
            </div>
            
            <!-- Description -->
            <div class="mb-6 ${style.bg} border-l-4 ${style.border} rounded-r-xl p-4">
              <p class="text-gray-700 leading-relaxed">${lang === "vi" ? heritage.description : heritage.description_en || heritage.description}</p>
            </div>
            
            <!-- Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div class="group hover:scale-105 transition-all">
                <div class="flex items-center gap-4 bg-gradient-to-br ${style.color} text-white rounded-2xl p-5 shadow-lg">
                  <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-white/80 mb-1">${t.hours}</p>
                    <p class="font-bold text-lg">${heritage.hours}</p>
                  </div>
                </div>
              </div>
              
              <div class="group hover:scale-105 transition-all">
                <div class="flex items-center gap-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-5 shadow-lg">
                  <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-white/80 mb-1">${t.price}</p>
                    <p class="font-bold text-lg">${heritage.price}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Highlights -->
            <div class="mb-6">
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 ${style.text}" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-heading font-bold text-xl text-gray-800">${t.highlights}</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${heritage.highlights
                  .map(
                    (h, idx) => `
                  <div class="flex items-center gap-3 bg-gradient-to-r ${style.bg} hover:${style.border} border-2 border-transparent rounded-xl p-3 transition-all hover:shadow-md">
                    <div class="w-8 h-8 bg-gradient-to-br ${style.color} rounded-lg flex items-center justify-center flex-shrink-0">
                      <span class="text-white font-bold text-sm">${idx + 1}</span>
                    </div>
                    <span class="text-sm font-semibold text-gray-700">${h}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
            
            <!-- Travel Tips -->
            <div class="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-100">
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h4 class="font-heading font-bold text-lg text-gray-800">${t.travel_tips}</h4>
              </div>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>Nên đặt tour trước 1-2 tuần để đảm bảo chỗ</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>Chủ động tìm hiểu trước thông tin di sản (lịch sử, vị trí, thời gian mở cửa) để việc tham quan hiệu quả hơn</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>Tôn trọng và tuân thủ các quy định bảo tồn di sản, không xả rác, không tác động lên hiện vật</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>Thời điểm đẹp nhất: Tháng 2-8 (khô ráo, ít mưa)</span>
                </li>
              </ul>
            </div>
            
            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <button onclick="focusHeritage(${heritage.id}); closeModal();" 
                class="py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Xem bản đồ
              </button>
              <button onclick="toggleBookingForm(${heritage.id})" class="py-4 bg-gradient-to-r ${style.color} text-white font-bold rounded-2xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:scale-105">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                ${t.book_tour}
              </button>
            </div>

            <!-- Nút Câu chuyện lịch sử -->
            <button onclick="toggleHistoryStory(${heritage.id})" class="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-2xl mb-4 flex items-center justify-center gap-2 hover:shadow-xl transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              ${t.history_button}
            </button>

            <!-- Nội dung lịch sử (ẩn/mở) -->
            <div id="history-story-${heritage.id}" class="hidden mt-4 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 animate-fade-in">
              <p class="text-gray-700 leading-relaxed">${lang === "vi" ? heritage.historyStory : heritage.historyStory_en || heritage.historyStory}</p>
            </div>

            <!-- Form đặt tour (ẩn/mở) -->
            <div id="booking-form-${heritage.id}" class="hidden mt-6 p-6 bg-white rounded-2xl shadow-inner border border-gray-200">
              <h3 class="text-xl font-bold text-center mb-6 text-gray-800">Đặt tour cho ${lang === "vi" ? heritage.name : heritage.name_en || heritage.name}</h3>
              <form class="space-y-4">
                <input type="text" placeholder="${lang === "vi" ? "Họ và tên" : "Full name"}" class="w-full p-3 border rounded-lg" required>
                <input type="tel" placeholder="${lang === "vi" ? "Số điện thoại" : "Phone number"}" class="w-full p-3 border rounded-lg" required>
                <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg">
                <input type="date" class="w-full p-3 border rounded-lg">
                <textarea placeholder="${lang === "vi" ? "Ghi chú" : "Notes"}" rows="3" class="w-full p-3 border rounded-lg"></textarea>
                <button type="submit" class="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl">
                  ${t.send_request}
                </button>
              </form>
            </div>
          </div>
        </div>
      `;

  modal.classList.remove("hidden");
}

// Change gallery image
function changeGalleryImage(direction, heritageId) {
  const heritage = heritageData.find((h) => h.id === heritageId);
  if (!heritage) return;

  currentGalleryIndex += direction;
  if (currentGalleryIndex < 0)
    currentGalleryIndex = heritage.gallery.length - 1;
  if (currentGalleryIndex >= heritage.gallery.length) currentGalleryIndex = 0;

  updateGalleryDisplay(heritage);
}

// Set gallery image directly
function setGalleryImage(index, heritageId) {
  const heritage = heritageData.find((h) => h.id === heritageId);
  if (!heritage) return;

  currentGalleryIndex = index;
  updateGalleryDisplay(heritage);
}

// Update gallery display
function updateGalleryDisplay(heritage) {
  const mainImg = document.getElementById("gallery-main-img");
  const counter = document.getElementById("gallery-counter");
  const thumbs = document.querySelectorAll(".gallery-thumb");

  if (mainImg) {
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = heritage.gallery[currentGalleryIndex];
      mainImg.style.opacity = "1";
    }, 150);
  }

  if (counter) {
    counter.textContent = currentGalleryIndex + 1;
  }

  thumbs.forEach((thumb, idx) => {
    if (idx === currentGalleryIndex) {
      thumb.classList.add("border-white", "ring-2", "ring-white");
      thumb.classList.remove("border-white/50");
    } else {
      thumb.classList.remove("border-white", "ring-2", "ring-white");
      thumb.classList.add("border-white/50");
    }
  });
}

// Close modal
function closeModal() {
  document.getElementById("detail-modal").classList.add("hidden");
}

// Toggle functions
function toggleHistoryStory(id) {
  document.getElementById(`history-story-${id}`).classList.toggle("hidden");
}

function toggleBookingForm(id) {
  document.getElementById(`booking-form-${id}`).classList.toggle("hidden");
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === "vi" ? "en" : "vi";
  document.getElementById("lang-text").textContent =
    currentLang === "vi" ? "VI / EN" : "EN / VI";
  document.getElementById("platform-title").textContent =
    translations[currentLang].platform_title;
  document.getElementById("tagline").textContent =
    translations[currentLang].tagline;
  document.getElementById("welcome-message").textContent =
    translations[currentLang].welcome_message;
  document.getElementById("search-input").placeholder =
    translations[currentLang].search_placeholder;
  updateCategoryButtons();
  addMarkers();
  updateHeritageList(
    heritageData.filter(
      (h) => currentCategory === "all" || h.category === currentCategory,
    ),
  );
  // Nếu modal mở, reload modal với ngôn ngữ mới
  if (!document.getElementById("detail-modal").classList.contains("hidden")) {
    // Giả sử bạn có variable currentId, hoặc đóng và mở lại
    closeModal();
  }
}

function updateCategoryButtons() {
  const btns = document.querySelectorAll(".category-badge");
  if (btns.length >= 4) {
    btns[0].textContent = translations[currentLang].all;
    btns[1].textContent = translations[currentLang].cave;
    btns[2].textContent = translations[currentLang].heritage;
    btns[3].textContent = translations[currentLang].nature;
    // Nếu có thêm button, dịch tiếp
  }
}

// Initialize map when page loads
initMap();

// Gọi updateCategoryButtons ban đầu
updateCategoryButtons();

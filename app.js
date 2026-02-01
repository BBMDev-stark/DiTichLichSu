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
    heritage: "🏛️ Di tích",
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
    heritage: "🏛️ Heritage",
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
    address: "xã Lộc Thủy, tỉnh Quảng Trị",
    lat: 17.243940529116877,
    lng: 106.74987848294082,
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
    address: "Phường Đồng Hới, TP. Đồng Hới",
    lat: 17.463387226793756,
    lng: 106.62401869643756,
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
    address: " phường Đồng Hới , TP Đồng Hới, tỉnh Quảng Trị",
    lat: 17.4656005539287,
    lng: 106.62712056337027,
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
    name: "Nhà thờ Tam Tòa (tàn tích)",
    name_en: "Tam Toa Church Ruins",
    category: "heritage",
    type: "Di tích kiến trúc thời Pháp thuộc",
    description:
      "Tàn tích nhà thờ Công giáo bị phá hủy năm 1968, biểu tượng hòa bình và ký ức chiến tranh.",
    description_en:
      "Ruins of the Catholic church destroyed in 1968, symbol of peace and war memories.",
    address: "Phường Đồng Hới, TP. Đồng Hới",
    lat: 17.47560905250639,
    lng: 106.62337614777738,
    rating: 4.6,
    reviews: 1500,
    price: "Miễn phí",
    image: "https://api.sovaba.travel/uploads/tam_toa_sovaba_f9370a6943.jpg",
    thumbnail:
      "https://api.sovaba.travel/uploads/tam_toa_sovaba_f9370a6943.jpg",
    gallery: [
      "https://api.sovaba.travel/uploads/Nha_tho_tam_toa_cu_nam_o_trung_tam_thanh_pho_dong_hoi_quang_binh_24d9c0757e.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSJ1PyXCiaUd7L6vdU440UTouf_RfLCyUfw&s",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8b/ef/86/tam-toa-church.jpg?w=900&h=500&s=1",
    ],
    hours: "24/7",
    highlights: [
      "Tàn tích chiến tranh",
      "Kiến trúc Gothic",
      "Biểu tượng Đồng Hới",
      "Check-in hoàng hôn",
    ],
    historyStory:
      "Nhà thờ Tam Tòa là một tàn tích lịch sử đặc biệt, gắn liền với những biến động dữ dội của chiến tranh tại Quảng Bình trong thế kỷ XX. Công trình từng là một nhà thờ lớn, được xây dựng từ thời Pháp thuộc, mang phong cách kiến trúc phương Tây và giữ vai trò quan trọng trong đời sống tôn giáo, văn hóa của cộng đồng địa phương. Trong thời kỳ kháng chiến chống Mỹ, khu vực này trở thành trọng điểm đánh phá ác liệt, và nhà thờ Tam Tòa đã bị bom đạn chiến tranh tàn phá gần như hoàn toàn, chỉ còn lại phần tháp chuông và một số mảng tường đổ nát. Những gì còn sót lại của công trình không chỉ phản ánh sự khốc liệt của chiến tranh, mà còn trở thành chứng tích lịch sử sống động, nhắc nhớ về những mất mát, hy sinh của con người và vùng đất Quảng Bình. Ngày nay, tàn tích nhà thờ Tam Tòa được gìn giữ như một biểu tượng của ký ức chiến tranh, mang giá trị lịch sử – nhân văn sâu sắc, góp phần giáo dục thế hệ sau về giá trị của hòa bình và sự trân trọng quá khứ.",

    historyStory_en:
      "The ruins of Tam Toa Church stand on the poetic banks of the Nhat Le River as a silent yet powerful witness to a tragic and heroic period in the nation's history. Construction began in 1886 and was completed in 1890 during the French colonial era, serving as the cathedral for the Tam Toa parish—one of the oldest Catholic communities in the region. Boasting sophisticated Gothic architecture with pointed arches and a soaring bell tower, this church was once hailed as one of the most beautiful religious structures in Central Vietnam. However, during the devastating air war launched by the US against North Vietnam, the city of Dong Hoi was flattened by tens of thousands of tons of bombs. From 1964 to 1972, the area became a 'fire coordinate,' and on February 11, 1965, the majestic cathedral endured brutal bombardments that caused the entire structure to collapse, leaving only the scarred bell tower and crumbling pillars. After the war, rather than rebuilding on the original site, the authorities decided to preserve the ruins as a stark monument to war crimes. Today, Tam Toa Church is not only a historical landmark but also a symbol of rebirth—an eternal reminder of the price of peace and the indomitable spirit of the people of Quang Binh in the face of total destruction.",
  },
  {
    id: 5,
    name: "Hang Tám Cô",
    name_en: "Eight Girls Cave",
    category: "heritage",
    type: "Di tích thanh niên xung phong",
    description:
      "Nơi 8 nữ thanh niên xung phong hy sinh khi làm nhiệm vụ trong kháng chiến chống Mỹ.",
    description_en:
      "Site where 8 female youth volunteers sacrificed during the resistance war.",
    address: "Thượng Trạch",
    lat: 17.50276265799618,
    lng: 106.26023181178012,
    rating: 4.7,
    reviews: 1200,
    price: "Miễn phí",
    image:
      "https://vivuquangbinh.vn/wp-content/uploads/2025/04/hang-tam-co-quang-binh.jpg",
    thumbnail:
      "https://vivuquangbinh.vn/wp-content/uploads/2025/04/hang-tam-co-quang-binh.jpg",
    gallery: [
      "https://dulichnewtour.vn/ckfinder/images/Tours/hangtamco/hang-tam-co%20(1).jpg",
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/11/1/1415497/Hang-8-Co-41-01.JPG",
      "https://image.vietgoing.com/destination/large/vietgoing_tzl2104195978.webp",
      "https://static.tuoitre.vn/tto/i/s626/2009/05/17/WGUAFDR5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOn3UasdkRb4lWEirLtQd0PPkAAgCHZ4TaQ&s",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Di tích TNXP",
      "Hang lịch sử",
      "Tượng đài tri ân",
      "Đường HCM huyền thoại",
    ],
    historyStory:
      "Hang Tám Cô là một di tích lịch sử đặc biệt, gắn liền với câu chuyện bi tráng về sự hy sinh anh dũng của lực lượng thanh niên xung phong và bộ đội trong thời kỳ kháng chiến chống Mỹ. Trong những năm chiến tranh ác liệt, hang nằm trên tuyến đường chiến lược Trường Sơn, giữ vai trò quan trọng trong việc đảm bảo giao thông, vận chuyển lương thực, vũ khí và chi viện cho chiến trường miền Nam. Năm 1972, trong một trận bom dữ dội của không quân Mỹ, cửa hang bị sập hoàn toàn, khiến tám chiến sĩ thanh niên xung phong bị mắc kẹt bên trong. Dù đồng đội bên ngoài đã nỗ lực tìm mọi cách cứu hộ, nhưng do bom đạn đánh phá liên tục và địa hình hiểm trở, cả tám người đã anh dũng hy sinh trong lòng núi đá. Câu chuyện về Hang Tám Cô không chỉ phản ánh sự khốc liệt của chiến tranh, mà còn là biểu tượng sâu sắc cho tinh thần quả cảm, sự hy sinh thầm lặng và lòng yêu nước của thế hệ trẻ Việt Nam trong những năm tháng gian khổ. Ngày nay, Hang Tám Cô trở thành một địa chỉ đỏ mang giá trị lịch sử – tâm linh, là nơi tưởng niệm, tri ân những người đã ngã xuống vì độc lập, tự do của Tổ quốc, đồng thời góp phần giáo dục truyền thống cách mạng cho các thế hệ mai sau.",

    historyStory_en:
      "The Eight Ladies Cave (Hang Tam Co) stands as one of the most tragic and sacred historical relics on the Ho Chi Minh Trail, located at kilometer 16+200 of Route 20 Quyet Thang—the vital artery connecting Eastern and Western Truong Son. The poignant story began on November 14, 1972, during the fiercest stage of the war against the US, when a horrific B-52 bombardment struck this area. To escape the rain of bombs, a squad of eight youth volunteers (4 men and 4 women, aged only 18 to 20) took shelter in a roadside cave. The immense force of the explosion caused a massive limestone boulder weighing over 1,000 tons to collapse, completely sealing the entrance and trapping the eight young souls inside. For nine consecutive days and nights, their comrades outside used every available means—from manual tools to heavy machinery and even explosives—to shift the rock, but the gargantuan boulder remained immovable. Through small crevices, rescuers could only pump in thin rice porridge while listening to the desperate cries for help from within, which gradually faded into the silence of the vast jungle. Their sacrifice became an immortal symbol of the 'Splitting the Truong Son to Save the Nation' spirit of the Vietnamese youth. In 2010, the group was posthumously honored with the title of Hero of the People's Armed Forces, and the cave has since become a sacred 'red address' where every inch of soil and every leaf is imbued with the blood and unyielding patriotism of these heroes.",
  },
  {
    id: 6,
    name: "Hoành Sơn Quan",
    name_en: "Hoanh Son Pass Gate",
    category: "heritage",
    type: "Di tích cửa ải",
    description:
      "Cửa ải nổi tiếng trong thơ Hồ Xuân Hương, chứng tích phân chia Đàng Trong - Đàng Ngoài.",
    description_en:
      "Famous pass gate in Ho Xuan Huong's poetry, evidence of Dang Trong - Dang Ngoai division.",
    address: "Xã Phú Trạch, tỉnh Quảng Trị",
    lat: 17.956420783081235,
    lng: 106.46957838110254,
    rating: 4.6,
    reviews: 1823,
    price: "Miễn phí",
    image: "https://statics.vinpearl.com/hoanh-son-quan-1_1634298813.jpg",
    thumbnail: "https://statics.vinpearl.com/hoanh-son-quan-1_1634298813.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1fOEfzbd_iLQi457XobII4Nvn2mKEtg8dg&s",
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/hoanh-son-quan-1.jpg",
      "https://phongnhainfo.com/wp-content/uploads/2023/12/Hoanh-Son-Quan.jpg",
      "https://gcs.tripi.vn/public-tripi/tripi-feed/img/476159rTe/anh-mo-ta.png",
      "https://sgtt.thesaigontimes.vn/wp-content/uploads/2024/12/hoanh-son-quanh-6.jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Cửa ải lịch sử",
      "Đèo Ngang",
      "Thơ Hồ Xuân Hương",
      "Biên giới xưa",
    ],
    historyStory:
      "Hoành Sơn Quan là một di tích lịch sử quan trọng nằm trên đỉnh đèo Ngang, gắn liền với quá trình xác lập chủ quyền, quản lý lãnh thổ và bảo vệ biên cương của quốc gia trong lịch sử phong kiến Việt Nam. Công trình được xây dựng vào năm 1833 dưới triều vua Minh Mạng, như một cửa ải quân sự án ngữ con đường huyết mạch Bắc – Nam, có nhiệm vụ kiểm soát giao thông, phòng thủ và bảo đảm an ninh khu vực ranh giới giữa Quảng Bình và Hà Tĩnh. Với vị trí hiểm yếu “lưng tựa núi, mặt hướng biển”, Hoành Sơn Quan không chỉ thể hiện tư duy quân sự chiến lược của triều đình nhà Nguyễn, mà còn phản ánh vai trò đặc biệt của vùng đất Quảng Bình trong lịch sử giữ nước. Trải qua thời gian và nhiều biến động lịch sử, công trình vẫn còn lưu giữ những dấu tích kiến trúc cổ kính, trở thành chứng nhân cho một giai đoạn lịch sử gắn liền với việc củng cố quốc phòng và quản lý lãnh thổ. Ngày nay, Hoành Sơn Quan không chỉ mang giá trị lịch sử – kiến trúc, mà còn là biểu tượng cho ý chí bảo vệ biên cương, tinh thần tự chủ và bản lĩnh của dân tộc Việt Nam qua các thời kỳ.",

    historyStory_en:
      "Hoanh Son Quan, also known as the 'Gate to Heaven,' is an ancient military and administrative architectural relic perched atop the Ngang Pass on the Hoanh Son Mountain Range, marking the border between Ha Tinh and Quang Binh provinces. Built in 1827 during the 8th year of King Minh Mang's reign, this gateway was designed with massive stone blocks in a traditional 'Tam Quan' style, radiating a majestic and solemn beauty amidst the vast wilderness. Historically, Hoanh Son Quan served as a strategic 'bottleneck' on the North-South Mandarin Road and a vital military checkpoint to control movement between regions. Most notably, it is associated with the Trinh-Nguyen conflict, when this mountain range acted as a natural boundary dividing the country into Dang Trong and Dang Ngoai. Beyond its military significance, the pass has been a timeless inspiration for Vietnamese literature and art; it is immortalized in the soul of the people through the classic verses of Bà Huyện Thanh Quan in her poem 'Passing Ngang Pass,' which depicts a nostalgic longing before the setting sun. Despite the ravages of time and war, Hoanh Son Quan remains a steadfast historical landmark, testifying to the strategic vision of ancestors in preserving and protecting the nation's integrity.",
  },
  {
    id: 7,
    name: "Vũng Chùa - Đảo Yến",
    name_en: "Vung Chua - Yen Island",
    category: "heritage",
    type: "Khu lưu niệm Đại tướng Võ Nguyên Giáp",
    description:
      "Nơi an nghỉ của Đại tướng Võ Nguyên Giáp và mộ phần gia đình.",
    description_en: "Resting place of General Vo Nguyen Giap and family tombs.",
    address: "Đảo yến thuộc xã Phú Trạch, tỉnh Quảng Trị",
    lat: 17.911745812446178,
    lng: 106.49457544348924,
    rating: 4.9,
    reviews: 6234,
    price: "Miễn phí",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/26/c7/2f/vung-chua-d-o-y-n-noi.jpg?w=900&h=-1&s=1",
    thumbnail:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/26/c7/2f/vung-chua-d-o-y-n-noi.jpg?w=900&h=-1&s=1",
    gallery: [
      "https://pvv-photo.phuotvivu.com/res/photo/c/4/f/0/s0x0/4ebb8323e2ea2492b9ce0809c44a72c4",
      "https://tourdulichquangbinh.vn/wp-content/uploads/2022/01/vung-chua-dao-yen.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/26/c7/2f/vung-chua-d-o-y-n-noi.jpg?w=900&h=-1&s=1",
      "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2025/10/4/screenshot-1395-175954262067898374134-0-77-716-1223-crop-17595426591722016737136.png",
      "https://dulichnewtour.vn/ckfinder/images/vung-chua-dao-yen%20(9).jpg",
    ],
    hours: "07:00 - 17:00",
    highlights: [
      "Mộ Đại tướng",
      "Biển đẹp",
      "Nơi tưởng niệm",
      "Cảnh quan thiên nhiên",
    ],
    historyStory:
      "Vũng Chùa – Đảo Yến là một địa danh mang ý nghĩa lịch sử – văn hóa đặc biệt, gắn liền với tên tuổi và sự nghiệp của Võ Nguyên Giáp – vị Đại tướng huyền thoại của dân tộc Việt Nam. Nơi đây được Đại tướng lựa chọn làm nơi an nghỉ cuối cùng, thể hiện nguyện vọng trở về với đất mẹ, hòa mình vào thiên nhiên và quê hương đất nước. Vũng Chùa – Đảo Yến mang vẻ đẹp thanh bình, tĩnh lặng, đối lập với những năm tháng chiến tranh ác liệt mà Đại tướng đã trải qua, như một biểu tượng của hòa bình, sự giản dị và nhân cách lớn lao của ông. Từ khi trở thành nơi yên nghỉ của Đại tướng Võ Nguyên Giáp, Vũng Chùa – Đảo Yến không chỉ là điểm đến tâm linh thiêng liêng, mà còn là nơi để người dân và du khách bày tỏ lòng tri ân sâu sắc đối với một con người đã dành trọn đời mình cho độc lập, tự do của Tổ quốc. Địa danh này ngày nay mang giá trị tinh thần sâu sắc, góp phần giáo dục truyền thống yêu nước, lòng biết ơn và niềm tự hào dân tộc cho các thế hệ mai sau.",

    historyStory_en:
      "Vung Chua - Yen Island is a sacred landmark nestled at the foot of the majestic Hoanh Son mountain range in Quang Dong commune, Quang Trach district, Quang Binh province. This site has become a convergence point for the hearts of millions of Vietnamese people since it was chosen as the final resting place of General Vo Nguyen Giap, in accordance with his last wishes. Vung Chua is a sheltered bay, protected by three islands: Yen Island, Gio Island, and La Island, creating a feng-shui terrain described as 'crouching tiger, hidden dragon' facing the vast East Sea. Following the General's passing on October 4, 2013, a solemn tomb area was constructed on Tho Son Mountain, crafted entirely from solid blue stone brought from Thanh Hoa province. With a simple yet majestic architectural style, the tomb is not only a memorial for a world-class military genius but also a symbol of the profound bond between the legendary General and his sun-drenched, wind-swept homeland of Quang Binh. Every year, tens of thousands of people from all over the country make a pilgrimage here to offer incense and express deep gratitude to the 'Eldest Brother' of the Vietnam People's Army, who devoted his entire life to the nation's independence and freedom.",
  },
  {
    id: 8,
    name: "Lăng mộ Nguyễn Hữu Cảnh",
    name_en: "Nguyen Huu Canh Tomb",
    category: "heritage",
    type: "Di tích khai phá phương Nam",
    description:
      "Lăng mộ của Lễ Thành Hầu Nguyễn Hữu Cảnh - người có công mở mang bờ cõi phương Nam.",
    description_en:
      "Tomb of Le Thanh Hau Nguyen Huu Canh - pioneer of southern expansion.",
    address: "xã Trường Phú, tỉnh Quảng Trị",
    lat: 17.15,
    lng: 106.85,
    rating: 4.5,
    reviews: 2145,
    price: "Miễn phí",
    image:
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/lang-mo-nguyen-huu-canh-quang-binh.jpg",
    thumbnail:
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/lang-mo-nguyen-huu-canh-quang-binh.jpg",
    gallery: [
      "https://vcdn1-dulich.vnecdn.net/2022/01/06/6-DJI-0720-1641444501.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=DkLNK4r0RMC2KBEomkYQBw",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ahvBZ2Jpzg1v6wjAa952_QKwAglavp7Dpg&s",
      "https://api.sovaba.travel/uploads/sm_Lang_mo_Le_Thanh_hau_Nguyen_Huu_Canh_dc24c21dc9.jpg",
      "https://linhhungtourist.com.vn/wp-content/uploads/2023/09/lang-mo-nguyen-huu-canh-quang-binh-5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsw2P9PGOvXKtR6MOQFEEeCcQKbra1U_Jug&s",
    ],
    hours: "24/7",
    highlights: [
      "Lăng mộ cổ",
      "Nhân vật lịch sử",
      "Khai phá phương Nam",
      "Di tích cấp quốc gia",
    ],
    historyStory:
      "Lăng mộ Nguyễn Hữu Cảnh là di tích lịch sử gắn liền với cuộc đời và sự nghiệp của Nguyễn Hữu Cảnh – vị danh tướng có công lớn trong quá trình mở mang bờ cõi và xác lập chủ quyền của Đại Việt về phương Nam vào cuối thế kỷ XVII. Ông là người được chúa Nguyễn giao trọng trách kinh lược vùng đất Nam Bộ, tổ chức bộ máy hành chính, ổn định đời sống dân cư và đặt nền móng cho sự hình thành, phát triển lâu dài của vùng Gia Định – Đồng Nai. Sau khi qua đời, lăng mộ của ông được nhân dân và triều đình tôn tạo như một sự ghi nhận công lao to lớn đối với quốc gia. Trải qua nhiều biến động lịch sử, lăng mộ Nguyễn Hữu Cảnh không chỉ là nơi an nghỉ của một bậc công thần khai quốc, mà còn trở thành biểu tượng cho tinh thần mở cõi, ý chí kiên cường và tầm nhìn chiến lược của cha ông trong công cuộc xây dựng và bảo vệ lãnh thổ. Ngày nay, di tích mang giá trị lịch sử sâu sắc, góp phần nhắc nhớ các thế hệ sau về truyền thống yêu nước, lòng trung nghĩa và vai trò quan trọng của Nguyễn Hữu Cảnh trong tiến trình hình thành đất nước Việt Nam thống nhất từ Bắc chí Nam.",

    historyStory_en:
      "The Tomb of Nguyen Huu Canh is a profoundly sacred national historical site, the final resting place of a pioneer who played a primary role in shaping the modern S-shaped map of Vietnam. Marquis Nguyen Huu Canh (1650 - 1700), also known as Nguyen Huu Kinh, was born into a prestigious lineage of military officers in Van Ninh, Quang Ninh district, Quang Binh province. As a descendant of the legendary statesman Nguyen Trai, he inherited the elite traditions of a clan renowned for both literary and military brilliance. In 1698, under the orders of Lord Nguyen Phuc Chu, he led a historic expedition to the South, establishing the Gia Dinh Prefecture and officially incorporating the Dong Nai - Saigon region into the administrative map of Dang Trong. This monumental achievement laid the firm foundation for the reclamation and sovereign establishment of the Southern territories. Following his passing due to illness during a military campaign in 1700, his remains were brought back to be interred in his beloved homeland. The current tomb complex sits majestically on a hill within the An Ma mountain range, overlooking the winding Kien Giang River. Constructed with ancient blue stones and surrounded by the serene atmosphere of the mountains, this site is not merely a memorial to a military genius and an outstanding administrator but also a symbol of patriotism and the indomitable spirit of expansion. For over 300 years, through the countless upheavals of history, the tomb has stood as a spiritual landmark, reminding future generations of the silent sacrifice of a hero who devoted his life to the territorial integrity and prosperity of the Vietnamese nation.",
  },
  {
    id: 9,
    name: "Đền thờ Công chúa Liễu Hạnh",
    name_en: "Princess Lieu Hanh Temple",
    category: "heritage",
    type: "Di tích tín ngưỡng",
    description:
      "Đền thờ Thánh Mẫu Liễu Hạnh - một trong Tứ bất tử của dân gian Việt Nam.",
    description_en:
      "Temple dedicated to Holy Mother Lieu Hanh, one of Vietnam's Four Immortals.",
    address: "Gần Đèo Ngang",
    lat: 17.953371853739956,
    lng: 106.46862386178672,
    rating: 4.4,
    reviews: 1567,
    price: "Miễn phí",
    image:
      "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef5dbd64547caaf87285f6077ef7b3b7ab8df787fc03613cc2b2c58554c30b41f3b4a8989e234532edd9ba4e5a5de924c002477dacb7745cc4f5f9ad33cbcbec23/1729331688837-4852.jpeg",
    thumbnail:
      "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef5dbd64547caaf87285f6077ef7b3b7ab8df787fc03613cc2b2c58554c30b41f3b4a8989e234532edd9ba4e5a5de924c002477dacb7745cc4f5f9ad33cbcbec23/1729331688837-4852.jpeg",
    gallery: [
      "https://mia.vn/media/uploads/blog-du-lich/ghe-tham-den-tho-thanh-mau-lieu-hanh-quang-binh-linh-thieng-01-1652685072.jpeg",
      "https://quangbinhtourism.vn/wp-content/uploads/2019/06/den-thanh-mau-lieu-hanh-cong-chua-01.jpg",
      "https://statics.vinpearl.com/den-mau-lieu-hanh-1_1634804143.jpg",
      "https://baoquangbinh.vn/dataimages/202402/original/images775355_1.jpg",
      "https://phongnhaexplorer.com/wp-content/uploads/2018/08/den-tho-cong-chua-lieu-hanh-2.jpg",
    ],
    hours: "06:00 - 18:00",
    highlights: [
      "Tín ngưỡng dân gian",
      "Thánh Mẫu Liễu Hạnh",
      "Kiến trúc đền thờ",
      "Lễ hội hàng năm",
    ],
    historyStory:
      "Đền thờ Công chúa Liễu Hạnh là một di tích tâm linh quan trọng, gắn liền với tín ngưỡng dân gian và đời sống tinh thần của người Việt qua nhiều thế kỷ. Công chúa Liễu Hạnh được tôn vinh là một trong Tứ Bất Tử trong tín ngưỡng dân gian Việt Nam, biểu trưng cho quyền năng, đức độ và sự che chở đối với con người. Theo truyền thuyết, bà nhiều lần giáng trần, sống gần gũi với nhân dân, giúp đỡ người hiền lương, trừng phạt kẻ ác và bảo vệ công lý, qua đó thể hiện khát vọng về công bằng, nhân ái và cuộc sống tốt đẹp. Việc lập đền thờ Công chúa Liễu Hạnh không chỉ thể hiện lòng tôn kính của nhân dân đối với một nhân vật linh thiêng, mà còn phản ánh sự hình thành và phát triển của tín ngưỡng thờ Mẫu – một nét văn hóa đặc sắc của dân tộc Việt Nam. Ngày nay, đền thờ Công chúa Liễu Hạnh không chỉ là nơi sinh hoạt tâm linh, cầu bình an và may mắn, mà còn mang giá trị lịch sử – văn hóa sâu sắc, góp phần gìn giữ bản sắc văn hóa truyền thống và giáo dục các thế hệ sau về niềm tin, đạo lý và đời sống tinh thần của cha ông.",

    historyStory_en:
      "The Temple of Princess Lieu Hanh, situated at the foot of the majestic Ngang Pass in Quang Dong commune, Quang Trach district, is one of the most sacred spiritual sites in Quang Binh province. The temple is dedicated to Mother Lieu Hanh—the supreme deity in the Vietnamese Mother Goddess worship (Dao Mau) and one of the 'Four Immortals' in Vietnamese mythology. According to legend, after her incarnations in Nam Dinh and Thanh Hoa, she was captivated by the picturesque landscape of Ngang Pass and decided to descend here. She transformed into a fairy running a roadside tea shop to assist virtuous travelers and punish the wicked. Built during the Later Le Dynasty and renovated multiple times, the temple showcases traditional architecture across an area of nearly 350 square meters. Notably, the temple occupies a prestigious feng-shui position: 'leaning against the mountain and facing the water,' with the Hoanh Son range behind it and the vast East Sea in front, creating a serene and majestic atmosphere. This relic is not only a testament to the cultural exchange as Mother Goddess worship spread southward but also a place that upholds moral values of compassion and justice. Every Lunar New Year, thousands of pilgrims gather here to pray for peace and admire the ancient, tranquil beauty of a landmark deeply intertwined with national history and poetry.",
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
  // 1. Định nghĩa ranh giới (vùng chữ nhật) bao quanh tỉnh Quảng Bình
  // Tọa độ này bao gồm toàn bộ Quảng Bình và một chút lân cận để xem dễ dàng hơn
  const quangBinhBounds = [
    [16.8, 105.3], // Góc Tây Nam (Southwest)
    [18.2, 107.2], // Góc Đông Bắc (Northeast)
  ];

  map = L.map("map", {
    center: [17.6, 106.35],
    zoom: 10,
    zoomControl: false,
    minZoom: 9, // Tăng minZoom lên một chút để không thấy vùng quá rộng
    maxZoom: 18,
    maxBounds: quangBinhBounds, // Gắn cứng ranh giới
    maxBoundsViscosity: 1.0, // Độ "nhớt" = 1.0 nghĩa là bản đồ sẽ không cho phép kéo ra ngoài ranh giới dù chỉ 1 pixel
  });

  // Sử dụng tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  // Thêm hiệu ứng mượt mà khi người dùng cố kéo ra ngoài
  map.on("drag", function () {
    map.panInsideBounds(quangBinhBounds, { animate: false });
  });

  addMarkers();
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
  if (btns.length >= 2) {
    btns[0].textContent = translations[currentLang].all;
    btns[1].textContent = translations[currentLang].heritage;
    // Nếu có thêm button, dịch tiếp
  }
}

// Initialize map when page loads
initMap();

// Gọi updateCategoryButtons ban đầu
updateCategoryButtons();

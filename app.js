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
      "Nằm bên dòng sông Kiến Giang hiền hòa, chảy qua làng An Ninh, xã Lộc Thủy, huyện Lệ Thủy, Nhà lưu niệm Đại tướng Võ Nguyên Giáp là một không gian văn hóa - lịch sử đặc biệt, nơi khởi nguồn của một huyền thoại. Tại đây, vào ngày 25/8/1911, người con ưu tú của dân tộc đã cất tiếng khóc chào đời trong một gia đình nhà nho đức độ, giàu lòng yêu nước. Ngôi nhà gỗ 3 gian 2 chái truyền thống, nằm ẩn mình dưới vòm cây xanh ngắt, đã chứng kiến những năm tháng thiếu thời hun đúc nên ý chí và nhân cách của vị 'Anh cả' Quân đội Nhân dân Việt Nam. Trong những năm kháng chiến chống Pháp khốc liệt, vào năm 1947, ngôi nhà từng bị kẻ thù đốt cháy hòng xóa tan một biểu tượng cách mạng. Tuy nhiên, đến năm 1977, với tình cảm kính yêu vô hạn, chính quyền và nhân dân địa phương đã phục dựng lại nguyên trạng ngôi nhà trên đúng nền đất cũ. Ngày nay, nơi đây lưu giữ hàng trăm hiện vật, tư liệu quý giá cùng những kỷ vật giản dị như chiếc phản gỗ, bộ bàn ghế uống trà hay gốc khế cổ thụ hơn trăm tuổi. Tất cả hòa quyện thành một minh chứng sống động cho cuộc đời thanh bạch, đức độ của 'vị tướng không quân hàm' nổi tiếng thế giới – một thiên tài quân sự nhưng có tâm hồn vô cùng bình dị, luôn gắn bó máu thịt với quê hương.",

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
      "Quảng Bình Quan không chỉ là một di tích kiến trúc mà còn là biểu tượng rực rỡ của lịch sử quân sự Việt Nam thế kỷ XVII. Được xây dựng vào năm 1639 dưới thời Chúa Nguyễn Phúc Lan, đây là một trong những chốt chặn trọng yếu nhất thuộc hệ thống Lũy Thầy (Lũy Đào Duy Từ) – chiến lũy huyền thoại đã giúp quân Nguyễn đứng vững trước các cuộc tấn công của quân Trịnh, phân chia đất nước thành Đàng Trong và Đàng Ngoài suốt hơn hai thế kỷ. Nằm ở vị trí yết hầu trên con đường thiên lý Bắc - Nam, Quảng Bình Quan đóng vai trò như một 'cánh cổng thép', kiểm soát mọi sự lưu thông và là ranh giới sinh tồn của vùng đất phía Nam. Trải qua hàng trăm năm với bao biến cố thăng trầm, từ những cuộc giao tranh Trịnh - Nguyễn khốc liệt đến các cuộc chiến tranh chống ngoại xâm hiện đại, di tích đã nhiều lần bị hư hại rồi lại được phục dựng. Ngày nay, Quảng Bình Quan đứng sừng sững giữa lòng thành phố Đồng Hới như một chứng nhân lịch sử kiêu hùng, nhắc nhở thế hệ mai sau về trí tuệ quân sự bậc thầy và khát vọng bảo vệ bờ cõi của cha ông.",

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
      "Tượng đài Mẹ Suốt là biểu tượng rực rỡ của chủ nghĩa anh hùng cách mạng, vinh danh Anh hùng Lao động Nguyễn Thị Suốt (1906 - 1968) – người con gái dũng cảm của quê hương Quảng Bình. Trong những năm tháng khốc liệt nhất của cuộc kháng chiến chống Mỹ cứu nước, khi vùng đất lửa Đồng Hới phải hứng chịu hàng vạn tấn bom đạn, Mẹ Suốt dù đã ở tuổi 60 vẫn bất chấp hiểm nguy, một mình chèo đò đưa hàng ngàn cán bộ, chiến sĩ và vũ khí qua sông Nhật Lệ. Dòng sông khi ấy không một phút bình yên, bom rơi đạn lạc bủa vây, nhưng tay chèo của mẹ vẫn vững vàng, chuyên chở niềm tin và sức sống cho tiền tuyến. Mẹ đã anh dũng hy sinh vào ngày 13/10/1968 trong một trận oanh tạc của máy bay Mỹ, để lại niềm tiếc thương vô hạn và một huyền thoại bất tử về lòng yêu nước. Năm 1995, tượng đài Mẹ Suốt được khánh thành ngay bên bờ sông Nhật Lệ lịch sử. Với dáng đứng hiên ngang, tay cầm mái chèo hướng ra dòng sông, tượng đài không chỉ là sự tri ân của hậu thế mà còn là lời nhắc nhở về khí phách quật cường, 'gan chi gan rứa' của người phụ nữ Việt Nam trong bão táp chiến tranh.",

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
      "Di tích Nhà thờ Tam Tòa đứng bên bờ sông Nhật Lệ thơ mộng như một chứng nhân câm lặng nhưng đầy sức mạnh về một thời kỳ lịch sử bi tráng của dân tộc. Được khởi công vào năm 1886 và hoàn thành vào năm 1890 dưới thời Pháp thuộc, đây từng là thánh đường của giáo xứ Tam Tòa – một trong những cộng đồng Công giáo lâu đời nhất vùng đất này. Với lối kiến trúc Gothic tinh xảo, những vòm cửa cuốn nhọn và tháp chuông cao vút, ngôi nhà thờ này từng được mệnh danh là một trong những công trình kiến trúc tôn giáo đẹp nhất miền Trung Việt Nam lúc bấy giờ. Thế nhưng, trong cuộc chiến tranh phá hoại miền Bắc của đế quốc Mỹ, thành phố Đồng Hới đã bị san phẳng bởi hàng vạn tấn bom đạn. Từ năm 1964 đến 1972, nơi đây trở thành 'tọa độ lửa', và vào ngày 11/02/1965, ngôi nhà thờ đã hứng chịu những loạt bom tàn khốc, khiến toàn bộ cấu trúc bị đổ sập, chỉ còn lại tháp chuông loang lổ vết đạn và những cột trụ vỡ vụn. Sau chiến tranh, thay vì xây dựng lại trên nền cũ, chính quyền đã quyết định giữ nguyên trạng tàn tích này để làm chứng tích tội ác chiến tranh. Ngày nay, Nhà thờ Tam Tòa không chỉ là một điểm tham quan lịch sử mà còn là biểu tượng của sự hồi sinh, một lời nhắc nhở vĩnh cửu về cái giá của hòa bình và tinh thần bất khuất của người dân Quảng Bình trước mọi sự hủy diệt.",

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
      "Hang Tám Cô là một trong những chứng tích lịch sử bi tráng và linh thiêng nhất trên hệ thống đường mòn Hồ Chí Minh, nằm tại km 16+200 của con đường 20 Quyết Thắng – tuyến đường huyết mạch nối Đông sang Tây Trường Sơn. Câu chuyện bắt đầu vào ngày 14/11/1972, khi cuộc kháng chiến chống Mỹ đang bước vào giai đoạn quyết liệt nhất, một trận oanh kích kinh hoàng của máy bay B-52 Mỹ đã dội xuống vùng đất này. Để tránh bom, một tiểu đội thanh niên xung phong gồm 8 chiến sĩ (4 nam, 4 nữ, tuổi đời chỉ từ 18 đến 20) đã chạy vào trú ẩn trong một hang đá bên đường. Sức công phá của bom đạn đã khiến một tảng đá khổng lồ nặng hơn 1.000 tấn đổ sập xuống, bịt kín cửa hang, giam hãm 8 tâm hồn trẻ tuổi vào bên trong. Suốt 9 ngày đêm ròng rã, đồng đội bên ngoài đã dùng mọi phương tiện từ thủ công đến cơ giới, thậm chí dùng cả thuốc nổ để phá đá nhưng tảng đá quá lớn không hề lay chuyển. Qua khe hở nhỏ, người ta chỉ có thể truyền ống dẫn cháo loãng vào trong và nghe tiếng kêu cứu thảm thiết của các anh, các chị nhỏ dần rồi lịm tắt giữa đại ngàn âm u. Sự hy sinh của họ đã trở thành biểu tượng bất tử cho ý chí 'xẻ dọc Trường Sơn đi cứu nước' của thế hệ trẻ Việt Nam. Năm 2010, tập thể 8 chiến sĩ đã được Nhà nước truy tặng danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân, và hang đá năm xưa giờ đây đã trở thành một 'địa chỉ đỏ' thiêng liêng, nơi mỗi tấc đất, nhành cây đều thấm đượm máu xương và tinh thần yêu nước vô quản.",

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
      "Hoành Sơn Quan, hay còn được dân gian gọi là 'Cổng Trời', là một di tích kiến trúc quân sự và hành chính cổ kính nằm sừng sững trên đỉnh Đèo Ngang, thuộc dãy Hoành Sơn – nơi tiếp giáp giữa hai tỉnh Hà Tĩnh và Quảng Bình. Được xây dựng vào năm Minh Mạng thứ 8 (1827), cửa ải này được thiết kế theo kiểu cửa tam quan với những khối đá lớn xếp chồng lên nhau, tạo nên một vẻ đẹp uy nghiêm, trầm mặc giữa đại ngàn. Trong lịch sử, Hoành Sơn Quan đóng vai trò là một điểm nút giao thông chiến lược yết hầu trên con đường thiên lý Bắc - Nam và là một chốt chặn quân sự quan trọng bậc nhất giúp kiểm soát sự lưu thông giữa hai miền. Đặc biệt, nơi đây gắn liền với giai đoạn Trịnh - Nguyễn phân tranh, khi dãy núi này trở thành ranh giới tự nhiên ngăn cách Đàng Trong và Đàng Ngoài. Không chỉ có giá trị về mặt quân sự, Hoành Sơn Quan còn là nguồn cảm hứng vô tận cho thi ca nhạc họa; nó đã đi vào tâm thức người Việt qua những vần thơ bất hủ của Bà Huyện Thanh Quan trong bài 'Qua Đèo Ngang', khắc họa nỗi lòng hoài cổ trước cảnh sắc 'Bước tới Đèo Ngang bóng xế tà'. Dẫu qua bao thăng trầm của thời gian và những vết thương chiến tranh, Hoành Sơn Quan vẫn đứng đó như một cột mốc lịch sử vững chãi, minh chứng cho tầm nhìn chiến lược của cha ông trong việc giữ gìn và bảo vệ sự thống nhất của non sông đất nước.",

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
      "Vũng Chùa - Đảo Yến là một địa danh linh thiêng nằm dưới chân dãy Hoành Sơn hùng vĩ, thuộc xã Quảng Đông, huyện Quảng Trạch, tỉnh Quảng Bình. Nơi đây đã trở thành tâm điểm hội tụ trái tim của hàng triệu người con đất Việt kể từ khi được chọn làm nơi an nghỉ cuối cùng của Đại tướng Võ Nguyên Giáp theo đúng di nguyện của ông. Vũng Chùa là một vùng vịnh kín gió, được bao bọc bởi ba hòn đảo: đảo Yến, đảo Gió và đảo La, tạo nên thế phong thủy 'rồng cuộn hổ ngồi' hướng ra Biển Đông bao la. Sau khi Đại tướng qua đời vào ngày 4/10/2013, một khu mộ trang nghiêm đã được xây dựng tại núi Thọ Sơn, sử dụng hoàn toàn bằng đá xanh nguyên khối từ vùng đất Thanh Hóa. Với kiến trúc giản dị nhưng uy nghiêm, khu mộ không chỉ là nơi tưởng nhớ một thiên tài quân sự thế giới mà còn biểu tượng cho sự gắn bó máu thịt giữa vị tướng huyền thoại với quê hương Quảng Bình đầy nắng gió. Mỗi năm, hàng vạn dòng người từ khắp mọi miền tổ quốc vẫn lặng lẽ hành hương về đây để dâng nén tâm hương, bày tỏ lòng tri ân sâu sắc đối với người 'Anh Cả' của Quân đội Nhân dân Việt Nam, người đã dành trọn cả cuộc đời vì nền độc lập và tự do của dân tộc.",

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
      "Lăng mộ Nguyễn Hữu Cảnh là một di tích lịch sử quốc gia đặc biệt linh thiêng, nơi quy hồ của bậc tiền nhân có công đầu trong việc định hình bản đồ hình chữ S của tổ quốc. Chưởng cơ Lễ Thành Hầu Nguyễn Hữu Cảnh (1650 - 1700), húy là Kính, sinh trưởng trong một gia đình dòng dõi võ quan danh giá tại vùng đất Vạn Ninh, huyện Quảng Ninh, tỉnh Quảng Bình. Ông vốn là hậu duệ của công thần Nguyễn Trãi, thừa hưởng tinh hoa của một dòng tộc lừng lẫy về cả văn chương lẫn võ trận. Năm 1698, nhận mệnh từ Chúa Nguyễn Phúc Chu, ông đã thực hiện chuyến kinh lý lịch sử vào phương Nam, xác lập đơn vị hành chính phủ Gia Định, chính thức đưa vùng đất Đồng Nai - Sài Gòn vào bản đồ hành chính của Đàng Trong, đặt nền móng vững chắc cho công cuộc khai khẩn và xác lập chủ quyền tại vùng đất Nam Bộ. Sau khi lâm bệnh và qua đời trên đường hành quân về lại kinh kỳ vào năm 1700, linh cữu của ông đã được đưa về an táng tại quê nhà Quảng Bình. Khu lăng mộ hiện nay tọa lạc uy nghiêm trên một ngọn đồi thuộc dãy núi An Mã, hướng nhìn ra dòng sông Kiến Giang quanh co uốn lượn. Quần thể di tích được xây dựng bằng những phiến đá xanh cổ kính, bao quanh bởi không gian thanh tịnh của núi rừng, không chỉ là nơi tưởng niệm một thiên tài quân sự, một nhà quản trị hành chính lỗi lạc mà còn là biểu tượng của lòng yêu nước và ý chí mở mang bờ cõi của cha ông. Trải qua hơn 300 năm với bao thăng trầm của thời đại, ngôi mộ vẫn đứng vững như một cột mốc tâm linh, nhắc nhở hậu thế về sự hy sinh thầm lặng của người anh hùng đã tận hiến cuộc đời mình cho sự toàn vẹn lãnh thổ và phồn vinh của dân tộc Việt Nam.",

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
      "Đền thờ Công chúa Liễu Hạnh nằm dưới chân Đèo Ngang hùng vĩ, thuộc địa phận xã Quảng Đông, huyện Quảng Trạch, là một trong những điểm tâm linh linh thiêng nhất của vùng đất Quảng Bình. Đền thờ mẫu Liễu Hạnh – vị thần chủ trong tín ngưỡng thờ Mẫu Tam phủ của người Việt, đồng thời là một trong 'Tứ bất tử' của thần điện Việt Nam. Theo truyền thuyết, sau khi giáng trần tại Nam Định và Thanh Hóa, vì say đắm cảnh sắc hữu tình của Đèo Ngang, bà đã dừng chân tại đây, hóa thân thành tiên nữ mở quán nước cho khách bộ hành, vừa để giúp đỡ người dân hiền lành, vừa để trừng trị những kẻ tham tàn. Ngôi đền được xây dựng dưới thời vua Hậu Lê và trải qua nhiều lần trùng tu, mang đậm nét kiến trúc truyền thống với tổng diện tích gần 350m2. Đặc biệt, ngôi đền tọa lạc tại thế đất 'tọa sơn hướng thủy', lưng tựa dãy Hoành Sơn, mặt hướng ra biển Đông bao la, tạo nên một không gian thoát tục và uy nghiêm. Di tích này không chỉ minh chứng cho sự giao thoa văn hóa giữa các vùng miền khi tín ngưỡng thờ Mẫu lan tỏa vào phía Nam, mà còn là nơi lưu giữ những giá trị đạo đức tốt đẹp về lòng nhân ái và sự trừng ác dương thiện. Mỗi dịp lễ Tết, hàng ngàn du khách thập phương lại hội tụ về đây để cầu nguyện bình an và chiêm ngưỡng vẻ đẹp cổ kính, trầm mặc của một thắng cảnh gắn liền với lịch sử và thi ca.",

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
                  <span>Mang theo áo khoác vì nhiệt độ trong hang có thể thấp</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>Đi giày thể thao có đế chống trượt</span>
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

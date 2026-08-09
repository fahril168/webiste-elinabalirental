/**
 * ELINA BALI RENTAL - INTERACTIVE ENGINE
 * Features: Fleet Filtering, WhatsApp Message Generator, Price Calculator & Date Handler
 */

document.addEventListener('DOMContentLoaded', () => {
    // Complete Language Switcher Dictionary (ID / EN)
    const translations = {
        id: {
            top_tag: "Bersih, Nyaman & Harga Bersahabat",
            nav_home: "Beranda",
            nav_fleet: "Armada Motor",
            nav_gallery: "Galeri",
            nav_terms: "Syarat & Ketentuan",
            nav_location: "Kontak",
            btn_header_wa: "Chat WhatsApp",
            hero_title: 'Jelajahi keindahan Bali dengan <span>Nyaman & Gaya</span>',
            hero_desc: "Menyediakan pilihan motor terbaru yang selalu bersih, terawat, dan siap mengantar petualangan Anda dari Canggu ke seluruh pelosok Pulau Dewata.",
            lbl_select_bike: "Pilih Motor",
            opt_all_bikes: "Semua Tipe Motor",
            lbl_pick_date: "Tanggal Sewa",
            lbl_return_date: "Tanggal Kembali",
            lbl_area: "Area Antar",
            btn_search: "Cek Ketersediaan & Booking",
            trust_helmets: "Gratis 2 helm + jas hujan",
            trust_holder: "Navigasi GPS makin mudah",
            trust_oil: "Unit terawat & oli selalu baru",
            fleet_subtitle: "Pilihan Terbaik Untuk Anda",
            fleet_title: "Armada Motor Elina Bali Rental",
            fleet_desc: "Pilih motor impian Anda untuk keliling Bali. Semua unit dalam kondisi prima, bersih, dan wangi.",
            filter_all: "Semua Motor",
            filter_scooter: "Scooter Matic",
            filter_maxi: "Maxi Scooter",
            filter_classic: "Sport / Classic",
            badge_scoopy: "Terfavorit",
            cat_scoopy: "Matic Compact",
            desc_scoopy: "Lincah, hemat bahan bakar, dan stylish untuk membelah kemacetan serta gang sempit Canggu.",
            badge_nmax: "Terbaru 2024+",
            cat_nmax: "Premium Maxi Scooter",
            desc_nmax: "Generasi terbaru NMAX Neo 5. Posisi berkendara super nyaman, mesin bertenaga 155cc VVA, dan bagasi sangat luas.",
            badge_pcx: "Popular Luxury",
            cat_pcx: "Luxury Comfort",
            desc_pcx: "Berkendara elegan dengan performa halus 160cc eSP+, sistem keyless Honda Smart Key, dan pijakan kaki ergonomis.",
            badge_xmax: "Ultimate Touring",
            cat_xmax: "Big Scooter Touring",
            desc_xmax: "Pengalaman touring kelas atas di Bali. Mesin 250cc bertenaga besar, Traction Control, ABS, dan bagasi ekstra jumbo.",
            badge_xsr: "Retro Heritage",
            cat_xsr: "Classic Sport Manual",
            desc_xsr: "Desain neo-retro klasik yang ganteng maksimal untuk foto-foto estetis di pantai Bali dan cafe Canggu.",
            lbl_daily: "Harian",
            lbl_weekly: "Mingguan",
            lbl_per_day: "/hari",
            lbl_per_week: "/minggu",
            btn_calc_card: "Detail & Hitung",
            btn_book_card: "Sewa Sekarang",
            gallery_subtitle: "Dokumentasi & Momen Pelanggan",
            gallery_title: "Galeri Elina Bali Rental",
            gallery_desc: "Intip keseruan para pelanggan dan kondisi unit motor terawat kami saat digunakan menjelajahi Bali.",
            car_badge: "Layanan Sewa Mobil",
            car_title: "Butuh Sewa Mobil di Bali untuk Rombongan / Keluarga?",
            car_desc: "Selain motor, Elina Bali Rental juga menyediakan layanan sewa mobil bersih & nyaman (Lepas Kunci / Dengan Driver) untuk area Canggu, Kuta, Seminyak, Denpasar, hingga Bandara Ngurah Rai.",
            car_btn: "Tanya Harga Sewa Mobil via WA",
            features_subtitle: "Mengapa Memilih Kami?",
            features_title: "Keunggulan Elina Bali Rental",
            features_desc: "Komitmen kami adalah memberikan pengalaman sewa kendaraan terbaik dan tanpa ribet selama liburan Anda di Bali.",
            feat1_title: "Bersih & Higienis",
            feat1_desc: "Setiap unit dan helm dicuci, disinfeksi, dan dicek secara menyeluruh sebelum diserahkan kepada pelanggan.",
            feat2_title: "Unit Terawat & Prima",
            feat2_desc: "Semua motor dan mobil adalah unit generasi muda dengan perawatan berkala di bengkel resmi terpercaya.",
            feat3_title: "Free Antar-Jemput",
            feat3_desc: "Gratis pengantaran dan penjemputan unit untuk wilayah Canggu dan Kuta Utara. Area lain tersedia dengan biaya minimal.",
            feat4_title: "Harga Bersahabat & Transparan",
            feat4_desc: "Tidak ada biaya tersembunyi. Harga sewa sudah termasuk 2 helm bersih SNI dan jas hujan berkualitas.",
            feat5_title: "Customer Service 24/7",
            feat5_desc: "Tim respon cepat siap membantu kendala Anda di jalan kapan saja via WhatsApp dan Telepon.",
            feat6_title: "Proses Mudah & Cepat",
            feat6_desc: "Persyaratan simpel tanpa deposit berlebihan. Verifikasi identitas cepat dan motor siap dipakai!",
            terms_subtitle: "Informasi Penting",
            terms_title: "Syarat & Ketentuan Sewa",
            terms_desc: "Persyaratan mudah dan jelas demi keamanan serta kenyamanan bersama.",
            terms_dom_title: "Wisatawan Domestik (WNI)",
            terms_dom_1: "Memiliki KTP Asli (wajib diserahkan/diverifikasi).",
            terms_dom_2: "Memiliki SIM C Aktif untuk pengendara motor.",
            terms_dom_3: "Menunjukkan Tiket Pesawat PP / Tiket Kapal / Booking Hotel di Bali.",
            terms_dom_4: "Akun Media Sosial aktif (Instagram / Facebook / Linkedin).",
            terms_int_title: "International Tourists (WNA)",
            terms_int_1: "Original Passport (Valid for inspection/verification).",
            terms_int_2: "Valid International Driving Permit (IDP) or Driver's License.",
            terms_int_3: "Return Flight Ticket & Hotel/Villa Confirmation in Bali.",
            terms_int_4: "Active WhatsApp Contact & Social Media profile.",
            terms_note_text: "Fasilitas Termasuk Semua Motor:",
            loc_subtitle: "Kunjungi atau Hubungi Kami",
            loc_title: "Lokasi & Kontak Elina Bali Rental",
            loc_addr_lbl: "Alamat Utama:",
            loc_wa_lbl: "WhatsApp / Telepon",
            loc_hours_lbl: "Jam Operasional",
            loc_hours_val: "Buka Setiap Hari: 07.00 - 22.00 WITA",
            loc_area_lbl: "Area Layanan Antar-Jemput",
            loc_area_val: "Canggu, Pererenan, Umalas, Kerobokan, Seminyak, Kuta",
            btn_wa_contact: "Hubungi via WhatsApp",
            btn_call: "Panggil Sekarang",
            modal_subtitle: "Estimasi Harga & Form Sewa",
            modal_title_prefix: "Form Booking",
            lbl_cust_name: "Nama Lengkap *",
            lbl_cust_phone: "No. WhatsApp *",
            lbl_start_dt: "Tanggal & Jam Mulai *",
            lbl_end_dt: "Tanggal & Jam Selesai *",
            lbl_deliv_loc: "Lokasi Pengantaran *",
            lbl_helmets: "Jumlah Helm",
            lbl_notes: "Catatan Tambahan (Opsional)",
            lbl_duration: "Durasi Sewa:",
            lbl_total_price: "Estimasi Total Biaya:",
            btn_submit_modal: "Kirim Order ke WhatsApp (+6285337270961)",
            footer_desc: "Sewa Mobil & Motor Terpercaya di Bali. Mengutamakan kebersihan, kenyamanan unit, serta harga yang bersahabat untuk kebebasan berlibur Anda.",
            footer_fleet_head: "Armada Motor",
            footer_nav_head: "Navigasi",
            footer_contact_head: "Hubungi Kami"
        },
        en: {
            top_tag: "Clean, Comfortable & Friendly Rates",
            nav_home: "Home",
            nav_fleet: "Motor Fleet",
            nav_gallery: "Gallery",
            nav_terms: "Terms & Rules",
            nav_location: "Contact",
            btn_header_wa: "WhatsApp Us",
            hero_title: 'Explore Bali’s Beauty with <span>Comfort & Style</span>',
            hero_desc: "Providing the latest motorbikes that are clean, well-maintained, and ready to elevate your island ride from Canggu across Bali.",
            lbl_select_bike: "Select Bike",
            opt_all_bikes: "All Bike Models",
            lbl_pick_date: "Pick-up Date",
            lbl_return_date: "Return Date",
            lbl_area: "Delivery Area",
            btn_search: "Check Availability & Book",
            trust_helmets: "Free 2 helmets + raincoat",
            trust_holder: "Easy GPS navigation",
            trust_oil: "Well maintained & fresh oil",
            fleet_subtitle: "The Best Choice For You",
            fleet_title: "Elina Bali Motorbike Fleet",
            fleet_desc: "Choose your dream scooter to ride across Bali. All units are in prime condition, clean, and fresh.",
            filter_all: "All Bikes",
            filter_scooter: "Matic Scooter",
            filter_maxi: "Maxi Scooter",
            filter_classic: "Sport / Classic",
            badge_scoopy: "Most Popular",
            cat_scoopy: "Compact Scooter",
            desc_scoopy: "Agile, fuel-efficient, and stylish—perfect for navigating Canggu shortcuts and beach traffic.",
            badge_nmax: "Newest 2024+",
            cat_nmax: "Premium Maxi Scooter",
            desc_nmax: "Latest NMAX Neo 5 generation. Ultra-comfortable seating, powerful 155cc VVA engine, and massive under-seat storage.",
            badge_pcx: "Popular Luxury",
            cat_pcx: "Luxury Comfort",
            desc_pcx: "Smooth luxury riding with 160cc eSP+ engine, Honda Smart Key keyless ignition, and ergonomic footrests.",
            badge_xmax: "Ultimate Touring",
            cat_xmax: "Big Scooter Touring",
            desc_xmax: "Premium touring experience in Bali. Powerful 250cc engine, Traction Control, ABS brakes, and extra-large storage.",
            badge_xsr: "Retro Heritage",
            cat_xsr: "Classic Sport Manual",
            desc_xsr: "Stylish neo-retro classic design perfect for aesthetic photo rides around Bali beaches and Canggu cafes.",
            lbl_daily: "Daily",
            lbl_weekly: "Weekly",
            lbl_per_day: "/day",
            lbl_per_week: "/week",
            btn_calc_card: "Details & Calculate",
            btn_book_card: "Book Now",
            gallery_subtitle: "Fleet & Customer Moments",
            gallery_title: "Elina Bali Rental Gallery",
            gallery_desc: "Take a look at our happy customers and pristine motorbikes exploring the beauty of Bali.",
            car_badge: "Car Rental Service",
            car_title: "Need a Car Rental in Bali for Group or Family?",
            car_desc: "In addition to motorbikes, Elina Bali Rental provides clean & comfortable car rental options (Self-drive / With Driver) across Canggu, Kuta, Seminyak, Denpasar, and DPS Airport.",
            car_btn: "Inquire Car Rates via WhatsApp",
            features_subtitle: "Why Choose Us?",
            features_title: "Why Elina Bali Rental",
            features_desc: "Our commitment is to provide the best and hassle-free vehicle rental experience during your Bali vacation.",
            feat1_title: "Clean & Hygienic",
            feat1_desc: "Every bike and helmet is washed, sanitized, and thoroughly inspected before delivery.",
            feat2_title: "Pristine & Well Maintained",
            feat2_desc: "All motorbikes and cars are recent year models with regular official service maintenance.",
            feat3_title: "Free Delivery",
            feat3_desc: "Free bike delivery and pick-up within Canggu and North Kuta areas. Other areas available at minimal charge.",
            feat4_title: "Friendly & Transparent Pricing",
            feat4_desc: "No hidden fees. Rental rate includes 2 clean helmets and quality raincoats.",
            feat5_title: "24/7 Support",
            feat5_desc: "Fast response support team ready to assist your roadside needs anytime via WhatsApp & Phone.",
            feat6_title: "Easy & Fast Process",
            feat6_desc: "Simple requirements with no hassle deposits. Fast identity check and your bike is ready to ride!",
            terms_subtitle: "Important Information",
            terms_title: "Rental Terms & Conditions",
            terms_desc: "Simple and transparent requirements for our mutual safety and comfort.",
            terms_dom_title: "Domestic Tourists (WNI)",
            terms_dom_1: "Original National ID Card (KTP required for verification).",
            terms_dom_2: "Valid Driver's License (SIM C) for motorbikes.",
            terms_dom_3: "Return Flight/Ferry Ticket or Hotel/Villa Booking in Bali.",
            terms_dom_4: "Active Social Media profile (Instagram / Facebook / LinkedIn).",
            terms_int_title: "International Tourists (WNA)",
            terms_int_1: "Original Passport (Valid for inspection/verification).",
            terms_int_2: "Valid International Driving Permit (IDP) or Driver's License.",
            terms_int_3: "Return Flight Ticket & Hotel/Villa Confirmation in Bali.",
            terms_int_4: "Active WhatsApp Contact & Social Media profile.",
            terms_note_text: "Included Facilities for All Bikes:",
            loc_subtitle: "Visit or Contact Us",
            loc_title: "Elina Bali Rental Location & Contact",
            loc_addr_lbl: "Main Address:",
            loc_wa_lbl: "WhatsApp / Phone",
            loc_hours_lbl: "Operating Hours",
            loc_hours_val: "Open Daily: 07:00 - 22:00 WITA",
            loc_area_lbl: "Free Delivery Areas",
            loc_area_val: "Canggu, Pererenan, Umalas, Kerobokan, Seminyak, Kuta",
            btn_wa_contact: "Contact via WhatsApp",
            btn_call: "Call Now",
            modal_subtitle: "Price Estimate & Booking Form",
            modal_title_prefix: "Booking Form for",
            lbl_cust_name: "Full Name *",
            lbl_cust_phone: "WhatsApp Number *",
            lbl_start_dt: "Pick-up Date & Time *",
            lbl_end_dt: "Return Date & Time *",
            lbl_deliv_loc: "Delivery Location *",
            lbl_helmets: "Helmets Needed",
            lbl_notes: "Additional Notes (Optional)",
            lbl_duration: "Rental Duration:",
            lbl_total_price: "Estimated Total Price:",
            btn_submit_modal: "Send Order to WhatsApp (+6285337270961)",
            footer_desc: "Trusted Bike & Car Rental in Bali. Prioritizing cleanliness, well-maintained units, and friendly rates for your holiday freedom.",
            footer_fleet_head: "Motor Fleet",
            footer_nav_head: "Navigation",
            footer_contact_head: "Contact Us"
        }
    };

    let currentLang = localStorage.getItem('elina_lang') || 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('elina_lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const btnId = document.getElementById('btnLangId');
        const btnEn = document.getElementById('btnLangEn');

        if (btnId && btnEn) {
            if (lang === 'en') {
                btnEn.classList.add('active');
                btnId.classList.remove('active');
            } else {
                btnId.classList.add('active');
                btnEn.classList.remove('active');
            }
        }
    };

    const btnLangId = document.getElementById('btnLangId');
    const btnLangEn = document.getElementById('btnLangEn');

    if (btnLangId) btnLangId.addEventListener('click', () => setLanguage('id'));
    if (btnLangEn) btnLangEn.addEventListener('click', () => setLanguage('en'));

    // Initialize Language
    setLanguage(currentLang);

    // DOM Elements
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const fleetCards = document.querySelectorAll('.fleet-card');
    
    // Hero Elements
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    const heroBikeSelect = document.getElementById('heroBikeSelect');
    const heroStartDate = document.getElementById('heroStartDate');
    const heroEndDate = document.getElementById('heroEndDate');
    const heroLocation = document.getElementById('heroLocation');

    // Modal Elements
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const bookingForm = document.getElementById('bookingForm');
    const modalBikeTitle = document.getElementById('modalBikeTitle');
    const modalBikeNameText = document.getElementById('modalBikeNameText');
    const modalBikeImg = document.getElementById('modalBikeImg');
    const modalDailyRate = document.getElementById('modalDailyRate');
    const modalWeeklyRate = document.getElementById('modalWeeklyRate');
    const calcDuration = document.getElementById('calcDuration');
    const calcTotalPrice = document.getElementById('calcTotalPrice');

    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    let currentSelectedBike = 'Honda Scoopy';
    let currentDailyRate = 80000;
    let currentWeeklyRate = 500000;

    // Set Default Dates (Today & Tomorrow)
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDateForInput = (d) => {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const formatDateTimeForInput = (d, hour = "09:00") => {
        return `${formatDateForInput(d)}T${hour}`;
    };

    if (heroStartDate) heroStartDate.value = formatDateForInput(today);
    if (heroEndDate) heroEndDate.value = formatDateForInput(tomorrow);

    if (startDateInput) startDateInput.value = formatDateTimeForInput(today, "09:00");
    if (endDateInput) endDateInput.value = formatDateTimeForInput(tomorrow, "09:00");

    // Helper: Currency Formatter
    const formatIDR = (amount) => {
        return 'Rp ' + amount.toLocaleString('id-ID');
    };

    // 1. Mobile Menu Navigation
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (mobileToggle.querySelector('i')) {
                    mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
                }
            });
        });
    }

    // 2. Active Header Nav Link on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // 3. Fleet Category Filtering
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                fleetCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Direct WA Buttons on Cards
    document.querySelectorAll('.direct-wa-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const bikeName = btn.getAttribute('data-bike');
            const rate = btn.getAttribute('data-rate');
            const text = `Halo Elina Bali Rental, saya berminat sewa motor *${bikeName}* (${rate}). Apakah unit masih tersedia untuk di area Canggu/Kuta Utara?`;
            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
        });
    });

    // 5. Booking Modal & Calculator Engine
    const updatePriceCalculator = () => {
        const startVal = startDateInput.value;
        const endVal = endDateInput.value;

        if (!startVal || !endVal) return;

        const start = new Date(startVal);
        const end = new Date(endVal);

        const diffTime = end - start;
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 0) diffDays = 1; // minimum 1 day

        let total = 0;
        if (diffDays >= 7) {
            const weeks = Math.floor(diffDays / 7);
            const extraDays = diffDays % 7;
            total = (weeks * currentWeeklyRate) + (extraDays * currentDailyRate);
        } else {
            total = diffDays * currentDailyRate;
        }

        calcDuration.textContent = `${diffDays} Hari`;
        calcTotalPrice.textContent = formatIDR(total);
    };

    const openModalWithBike = (bikeName, dailyRate, weeklyRate, imgUrl) => {
        currentSelectedBike = bikeName;
        currentDailyRate = parseInt(dailyRate);
        currentWeeklyRate = parseInt(weeklyRate);

        modalBikeTitle.textContent = `Form Booking ${bikeName}`;
        modalBikeNameText.textContent = bikeName;
        modalDailyRate.textContent = `${formatIDR(currentDailyRate)} / hari`;
        modalWeeklyRate.textContent = `${formatIDR(currentWeeklyRate)} / minggu`;

        if (modalBikeImg) {
            modalBikeImg.src = imgUrl;
            modalBikeImg.alt = bikeName;
            modalBikeImg.onerror = () => {
                modalBikeImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 70' fill='%23C5A059'><rect width='100%' height='100%' fill='%23FAF6F0'/><text x='50%' y='50%' font-size='10' text-anchor='middle'>Elina Rental</text></svg>";
            };
        }

        updatePriceCalculator();
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.open-booking-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            const daily = btn.getAttribute('data-rate-daily');
            const weekly = btn.getAttribute('data-rate-weekly');
            const img = btn.getAttribute('data-img');
            openModalWithBike(name, daily, weekly, img);
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            bookingModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    if (startDateInput) startDateInput.addEventListener('change', updatePriceCalculator);
    if (endDateInput) endDateInput.addEventListener('change', updatePriceCalculator);

    // 6. Hero Search Widget Action
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => {
            const selectedBikeVal = heroBikeSelect.value;
            const startD = heroStartDate.value;
            const endD = heroEndDate.value;
            const loc = heroLocation.value;

            if (selectedBikeVal !== 'all') {
                const bikeMapping = {
                    'scoopy': { name: 'Honda Scoopy', daily: 80000, weekly: 500000, img: 'assets/images/bikes/scoopy.png' },
                    'nmax': { name: 'Yamaha NMAX Neo 5', daily: 140000, weekly: 900000, img: 'assets/images/bikes/yamahaneo.png' },
                    'pcx': { name: 'Honda PCX 160', daily: 150000, weekly: 950000, img: 'assets/images/bikes/pcx.png' },
                    'xmax': { name: 'Yamaha XMAX 250', daily: 300000, weekly: 1900000, img: 'assets/images/bikes/xmax.png' },
                    'xsr': { name: 'Yamaha XSR 155', daily: 180000, weekly: 1150000, img: 'assets/images/bikes/xsr.png' }
                };

                const target = bikeMapping[selectedBikeVal];
                if (target) {
                    if (startD) startDateInput.value = `${startD}T09:00`;
                    if (endD) endDateInput.value = `${endD}T09:00`;
                    if (loc) document.getElementById('deliveryLoc').value = loc;

                    openModalWithBike(target.name, target.daily, target.weekly, target.img);
                    return;
                }
            }

            // Scroll to fleet section if "Semua Tipe Motor"
            document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 7. Form Submit Handler -> Redirects to Formatted WhatsApp Message
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const start = startDateInput.value.replace('T', ' ');
            const end = endDateInput.value.replace('T', ' ');
            const loc = document.getElementById('deliveryLoc').value.trim();
            const helmets = document.getElementById('helmetCount').value;
            const note = document.getElementById('custNote').value.trim();
            const duration = calcDuration.textContent;
            const totalPrice = calcTotalPrice.textContent;

            const waText = 
`🛵 *BOOKING SEWA MOTOR - ELINA BALI RENTAL*
--------------------------------------------
👤 *Nama*: ${name}
📱 *No. HP*: ${phone}
🏍️ *Unit*: ${currentSelectedBike}
📅 *Tgl Sewa*: ${start}
🏁 *Tgl Kembali*: ${end} (${duration})
📍 *Lokasi Antar*: ${loc}
🪖 *Fasilitas Helm*: ${helmets}
✨ *Fitur Terdaftar*: 2 Helmets, Phone Holder, Rain Coat, Service Change Oil
${note ? `📝 *Catatan*: ${note}\n` : ''}💰 *Estimasi Biaya*: ${totalPrice}
--------------------------------------------
Mohon konfirmasi ketersediaan unit dan kelengkapan persyaratannya. Terima kasih!`;

            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`, '_blank');
        });
    }
});

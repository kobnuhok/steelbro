
/* ===== КОНФИГУРАЦИЯ ГАЛЕРЕИ ===== */
/* 
📸 НАСТРОЙКА ФОТОГАЛЕРЕИ:

СПОСОБ 1 - ЗАГРУЗКА СОБСТВЕННЫХ ИЗОБРАЖЕНИЙ:
1. Создайте папку "images" в корне проекта (кликните правой кнопкой → New Folder)
2. Загрузите свои фотографии в эту папку (перетащите файлы или Upload)
3. Замените пути ниже на ./images/ваше-фото.jpg

СПОСОБ 2 - ИСПОЛЬЗОВАНИЕ ВНЕШНИХ ССЫЛОК:
Замените пути на полные URL:
{ src: "https://ваш-сайт.ru/фото.jpg", alt: "Описание" }

НАСТРОЙКИ:
- src: путь к изображению
- alt: описание для поисковиков и людей с ограниченными возможностями

ПОДДЕРЖИВАЕМЫЕ ФОРМАТЫ: .jpg, .jpeg, .png, .webp
РЕКОМЕНДУЕМЫЕ РАЗМЕРЫ: 
- Минимум: 800x600 пикселей
- Оптимально: 1200x800 пикселей  
- Максимум: 2000x1500 пикселей (для быстрой загрузки)

ДОБАВЛЕНИЕ НОВЫХ ФОТО:
Скопируйте строку { src: "...", alt: "..." }, и добавьте в массив
*/
const galleryImages = [
    {
        src: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta.jpg",
        alt: "Парная тренировка на пилоне"
    },
    {
        src: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta (1).jpg",
        alt: "Break dance freeze"
    },
    {
        src: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta (2).jpg",
        alt: "Элементы растяжки на полу"
    },
    {
        src: "./images/cherries-9879407_1280.jpg",
        alt: "Командная поддержка на тренировке"
    },
    {
        src: "./images/christmas-6832792_1280.jpg",
        alt: "Индивидуальное занятие взрослой группы"
    },
    {
        src: "./images/mahonia-9895458_1280.jpg",
        alt: "Группа детей на занятии"
    }
];

/* ===== КОНФИГУРАЦИЯ ВИДЕО ГАЛЕРЕИ ===== */
/*
🎬 КАК НАСТРОИТЬ ВИДЕО С ВКОНТАКТЕ:

1. Получите ссылку на видео ВКонтакте:
   - Откройте видео на vk.com
   - Скопируйте полную ссылку. Поддерживаются форматы:
     * https://vk.com/video-123456_789012345 (группа)
     * https://vk.com/video123456_789012345 (пользователь)
     * https://vkvideo.ru/video-123456_789012345 (альтернативный формат)
   - Формат: video{owner_id}_{video_id}
     где owner_id может быть отрицательным для групп (например, -123456)
     и положительным для пользователей (например, 123456)

2. Добавьте в объект videoCategories:
   - vkVideoUrl: "ПОЛНАЯ_ССЫЛКА" (например, "https://vk.com/video-123456_789012345" или "https://vkvideo.ru/video-123456_789012345")
   - thumbnail: путь к вашей кастомной превью-картинке (НЕ превью VK!)
   - title и description: название и описание видео

3. ПРИМЕР:
   {
       id: 1,
       title: "Название видео",
       description: "Описание",
       thumbnail: "./images/my-video-preview.jpg",  // Ваша картинка
       vkVideoUrl: "https://vk.com/video-123456_789012345"  // Или https://vkvideo.ru/video-123456_789012345
   }

ВАЖНО:
- Используйте полную ссылку на видео (не только ID)
- Для групп owner_id отрицательный (начинается с минуса)
- Для пользователей owner_id положительный
- Превью используйте свои картинки, не превью VK

ДОБАВЛЕНИЕ ВИДЕО:
- Скопируйте объект { id, title, description, thumbnail, vkVideoUrl } в нужную категорию.
- Категории: breakdance, stretching, pole, kids. Можно добавить свои категории и карточки.
- Чтобы карточка в разделе «Галерея моментов» открывала новую категорию,
  добавьте data-video-category="имя_категории" в index.html.
*/
const videoCategories = {
    breakdance: [
        {
            id: 1,
            title: "Финал городского баттла",
            description: "Лучшие связки и freeze элементы от команды Steel Brothers.",
            thumbnail: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta (1).jpg",
            vkVideoUrl: "https://vk.com/video-123456_789012345"  // 🔄 Замените на реальную ссылку VK
        },
        {
            id: 2,
            title: "Тренировка по power moves",
            description: "Работаем над вращениями и переходами на полу.",
            thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            vkVideoUrl: "https://vk.com/video-123456_789012346"  // 🔄 Замените на реальную ссылку VK
        },
        {
            id: 3,
            title: "Командный showcase",
            description: "Выступление на городском фестивале уличной культуры.",
            thumbnail: "https://images.unsplash.com/photo-1550259114-f43da83ca5d7?auto=format&fit=crop&w=600&q=80",
            vkVideoUrl: "https://vk.com/video-123456_789012347"  // 🔄 Замените на реальную ссылку VK
        }
    ],
    stretching: [
        {
            id: 4,
            title: "Растяжка на шпагат",
            description: "Пошаговый тренинг на продольный шпагат для взрослых.",
            thumbnail: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta (2).jpg",
            vkVideoUrl: "https://vk.com/video-123456_789012348"  // 🔄 Замените на реальную ссылку VK
        },
        {
            id: 5,
            title: "Функциональная мобильность",
            description: "Упражнения на раскрытие плечевого пояса и тазобедренных суставов.",
            thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
            vkVideoUrl: "https://vk.com/video-123456_789012349"  // 🔄 Замените на реальную ссылку VK
        }
    ],
    pole: [
        {
            id: 6,
            title: "Pole sport: базовый класс",
            description: "Изучаем базовые подводки и комбинации на пилоне.",
            thumbnail: "./images/abstraktnaa-kompozicia-uf-ul-trafioleta.jpg",
            vkVideoUrl: "https://vkvideo.ru/video-197608964_456239636"  // 🔄 Замените на реальную ссылку VK
        },
        {
            id: 7,
            title: "Выступление на шоукейсе",
            description: "Постановка учеников средней группы на отчетном концерте.",
            thumbnail: "https://images.unsplash.com/photo-1583199542906-8a5600e3a737?auto=format&fit=crop&w=600&q=80",
            vkVideoUrl: "https://vk.com/video-123456_789012351"  // 🔄 Замените на реальную ссылку VK
        }
    ],
    kids: [
        {
            id: 8,
            title: "Детские тренировки",
            description: "Разминка и игровые упражнения для ребят 6-8 лет.",
            thumbnail: "./images/mahonia-9895458_1280.jpg",
            vkVideoUrl: "https://vk.com/video-123456_789012352"  // 🔄 Замените на реальную ссылку VK
        },
        {
            id: 9,
            title: "Выступление на празднике",
            description: "Наши юные спортсмены выступают для родителей.",
            thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
            vkVideoUrl: "https://vk.com/video-123456_789012353"  // 🔄 Замените на реальную ссылку VK
        }
    ]
};

const videoFilters = [
    { key: 'all', label: 'Все' },
    { key: 'breakdance', label: 'Брейк-данс' },
    { key: 'stretching', label: 'Stretching' },
    { key: 'pole', label: 'Pole Sport' },
    { key: 'kids', label: 'Детские' }
];

const videoCategoryTitles = {
    all: 'Все видео выступлений и тренировок',
    breakdance: 'Брейк-данс: выступления и тренировки',
    stretching: 'Stretching: растяжка и мобильность',
    pole: 'Pole Sport: тренировки и шоукейсы',
    kids: 'Детские программы: занятия и выступления'
};

/* ===== ПЕРЕМЕННЫЕ ===== */
let currentSlide = 0;
let currentImageIndex = 0;
let currentVideoCategory = 'all';

/* 
🖼 ДОПОЛНИТЕЛЬНО ПРО ГАЛЕРЕЮ МОМЕНТОВ (БЛОК В index.html):

- Сейчас секция «Галерея моментов» статична и управляется только разметкой/стилями.
- Чтобы добавить новые карточки, скопируйте <figure class="moment-card">...</figure> в index.html.
- Если решите вернуть динамическую видеогалерею:
    1. Восстановите объект videoCategories и функции openVideoModal/filterVideos.
    2. Замените статичные карточки на кнопки, открывающие модальное окно.
    3. Допишите обработчики в initializeScrollEffects, если нужны анимации для новых элементов.
*/

/* ===== ФУНКЦИИ КАРУСЕЛИ ===== */
function initializeCarousel() {
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        galleryImages.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToSlide(index);
            dotsContainer.appendChild(dot);
        });
    }
    updateCarouselImage();
}

function updateCarouselImage() {
    const mainImage = document.getElementById('mainImage');
    if (!mainImage) return;

    // Обработка ошибок загрузки изображений
    mainImage.onerror = function() {
        console.warn(`Не удалось загрузить изображение: ${this.src}`);
        // Fallback на Unsplash если локальное изображение не найдено
        this.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80";
        this.onerror = null; // Предотвращаем бесконечный цикл
    };

    mainImage.src = galleryImages[currentSlide].src;
    mainImage.alt = galleryImages[currentSlide].alt;

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    updateCarouselImage();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    updateCarouselImage();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarouselImage();
}

/* ===== ФУНКЦИИ МОДАЛЬНОГО ОКНА ===== */
function openModal(index) {
    currentImageIndex = index || currentSlide;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalCounter');

    if (!modal || !modalImage || !modalCounter) return;

    modal.classList.add('active');
    
    // Обработка ошибок для модального окна
    modalImage.onerror = function() {
        console.warn(`Не удалось загрузить изображение в модальном окне: ${this.src}`);
        this.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80";
        this.onerror = null;
    };
    
    modalImage.src = galleryImages[currentImageIndex].src;
    modalImage.alt = galleryImages[currentImageIndex].alt;
    modalCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextModalImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage();
}

function prevModalImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalCounter');

    if (!modalImage || !modalCounter) return;

    modalImage.onerror = function() {
        console.warn(`Не удалось загрузить изображение в модальном окне: ${this.src}`);
        this.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80";
        this.onerror = null;
    };

    modalImage.src = galleryImages[currentImageIndex].src;
    modalImage.alt = galleryImages[currentImageIndex].alt;
    modalCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

/* ===== ОБРАБОТКА ВИДЕО ===== */
function initializeVideoHandlers() {
    const momentCards = document.querySelectorAll('.moment-card[data-video-category]');

    momentCards.forEach(card => {
        const category = card.getAttribute('data-video-category') || 'all';

        card.addEventListener('click', () => openVideoModal(category));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openVideoModal(category);
            }
        });

        const ctaButton = card.querySelector('.moment-card-cta');
        if (ctaButton) {
            ctaButton.addEventListener('click', (event) => {
                event.preventDefault();
                openVideoModal(category);
            });
        }
    });
}

function openVideoModal(category = 'all') {
    const modal = document.getElementById('videoModal');
    const galleryGrid = document.getElementById('videoGalleryGrid');
    const filtersContainer = document.getElementById('videoFilters');
    const modalTitle = document.getElementById('videoModalTitle');

    if (!modal || !galleryGrid || !filtersContainer || !modalTitle) return;

    currentVideoCategory = category;
    modalTitle.textContent = videoCategoryTitles[category] || videoCategoryTitles.all;

    renderVideoFilters(filtersContainer, category);
    renderVideoItems(galleryGrid, category);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderVideoFilters(container, activeCategory) {
    container.innerHTML = '';

    videoFilters.forEach(filter => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'video-filter-btn';
        if (filter.key === activeCategory) {
            button.classList.add('active');
        }
        button.textContent = filter.label;
        button.addEventListener('click', () => filterVideos(filter.key));
        container.appendChild(button);
    });
}

function renderVideoItems(container, category) {
    container.innerHTML = '';

    const videosToShow = category === 'all'
        ? Object.values(videoCategories).flat()
        : (videoCategories[category] || []);

    if (!videosToShow.length) {
        const emptyState = document.createElement('div');
        emptyState.className = 'video-gallery-empty';
        emptyState.textContent = 'Видео скоро появятся. Следите за обновлениями!';
        container.appendChild(emptyState);
        return;
    }

    videosToShow.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-gallery-item';
        videoItem.addEventListener('click', () => openVideoLink(video));

        videoItem.innerHTML = `
            <div class="video-gallery-thumb">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-gallery-play-button">▶</div>
            </div>
            <div class="video-gallery-item-content">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        `;

        container.appendChild(videoItem);
    });
}

function filterVideos(category) {
    currentVideoCategory = category;

    const filtersContainer = document.getElementById('videoFilters');
    const galleryGrid = document.getElementById('videoGalleryGrid');
    const modalTitle = document.getElementById('videoModalTitle');

    if (!filtersContainer || !galleryGrid || !modalTitle) return;

    modalTitle.textContent = videoCategoryTitles[category] || videoCategoryTitles.all;

    renderVideoFilters(filtersContainer, category);
    renderVideoItems(galleryGrid, category);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ===== ФУНКЦИИ ДЛЯ РАБОТЫ С ВКОНТАКТЕ ===== */
function extractVkVideoParams(vkVideoUrl) {
    if (!vkVideoUrl) {
        return null;
    }
    
    // Поддерживаем оба формата ссылок VK:
    // https://vk.com/video-123456_789012345 (группа)
    // https://vk.com/video123456_789012345 (пользователь)
    // https://vkvideo.ru/video-123456_789012345 (альтернативный формат)
    // https://vkvideo.ru/video123456_789012345
    
    // Ищем паттерн video(-?\d+)_(\d+) в любом месте строки
    const match = vkVideoUrl.match(/video(-?\d+)_(\d+)/);
    if (!match) {
        return null;
    }
    
    return {
        ownerId: match[1],  // может быть отрицательным для групп
        videoId: match[2]
    };
}

function getVkEmbedUrl(vkVideoUrl) {
    if (!vkVideoUrl) return null;
    
    const params = extractVkVideoParams(vkVideoUrl);
    if (!params) {
        return null;
    }
    
    // Формируем embed URL для VK с автовоспроизведением и оптимизацией
    // Параметры:
    // - autoplay=1: автовоспроизведение
    // - hd=1: HD качество (ускоряет загрузку)
    // - api=1: включение API для управления
    return `https://vk.com/video_ext.php?oid=${params.ownerId}&id=${params.videoId}&autoplay=1&hd=1&api=1`;
}

function openVideoLink(video) {
    if (!video || !video.vkVideoUrl) {
        alert('Видео временно недоступно. Добавьте vkVideoUrl в файле script.js → videoCategories.');
        return;
    }

    const embedUrl = getVkEmbedUrl(video.vkVideoUrl);
    if (!embedUrl) {
        alert('Не удалось определить параметры видео ВКонтакте. Проверьте формат ссылки.\n\nПоддерживаемые форматы:\n- https://vk.com/video-123456_789012345\n- https://vkvideo.ru/video-123456_789012345');
        return;
    }

    openVideoPlayer(video, embedUrl);
}

function openVideoPlayer(video, embedUrl) {
    const playerModal = document.getElementById('videoPlayerModal');
    const playerIframe = document.getElementById('videoPlayerIframe');
    const playerTitle = document.getElementById('videoPlayerTitle');

    if (!playerModal || !playerIframe) {
        console.error('Модальное окно для воспроизведения видео не найдено');
        return;
    }

    // Устанавливаем заголовок сразу
    if (playerTitle) {
        playerTitle.textContent = video.title || 'Видео';
    }

    // Показываем модальное окно сразу
    playerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Устанавливаем src iframe сразу для быстрой загрузки и автовоспроизведения
    // VK начнет загружать видео сразу благодаря параметру autoplay=1 в URL
    playerIframe.src = embedUrl;
}

function closeVideoPlayer() {
    const playerModal = document.getElementById('videoPlayerModal');
    const playerIframe = document.getElementById('videoPlayerIframe');

    if (!playerModal) return;

    // Останавливаем воспроизведение видео
    if (playerIframe) {
        playerIframe.src = '';
    }

    playerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ===== НАВИГАЦИЯ ===== */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (!href || href === '#') {
                e.preventDefault();
                return;
            }

            e.preventDefault();

            const targetSection = document.querySelector(href);

            if (targetSection) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'true');
        }
    });
}

/* ===== КОНФИГУРАЦИЯ EMAILJS ===== */
/* 
📧 НАСТРОЙКА ОТПРАВКИ ФОРМ:

ПРОСТОЙ СПОСОБ (ТОЛЬКО EMAIL):
Измените TARGET_EMAIL ниже на ваш email - форма будет открывать почтовый клиент

ПРОДВИНУТЫЙ СПОСОБ (ПРЯМАЯ ОТПРАВКА):
1. Зарегистрируйтесь на https://emailjs.com (бесплатно до 200 писем/месяц)
2. Подключите ваш email сервис (Gmail, Outlook, и т.д.)
3. Создайте Email Template 
4. Скопируйте ваши данные в EMAILJS_CONFIG ниже:
   - SERVICE_ID: ID вашего email сервиса
   - TEMPLATE_ID: ID созданного шаблона
   - PUBLIC_KEY: ваш публичный ключ

СМЕНА EMAIL ПОЛУЧАТЕЛЯ:
Измените TARGET_EMAIL на нужный адрес
*/
const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',        // 🔄 Замените на ваш Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // 🔄 Замените на ваш Template ID  
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY'         // 🔄 Замените на ваш Public Key
};

const TARGET_EMAIL = 'kobnuhok12@gmail.com';  // 🔄 ЗАМЕНИТЕ НА ВАШ EMAIL
const BACKEND_ENDPOINT = 'https://your-backend.example.com/api/whatsapp-webhook'; // 🔄 Замените на ваш endpoint или оставьте как есть

/* ===== ОБРАБОТКА ФОРМ ===== */
function initializeFormHandlers() {
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name') || event.target[0].value;
    const phone = formData.get('phone') || event.target[1].value;
    const email = formData.get('email') || event.target[2].value;
    const message = formData.get('message') || event.target[3].value;
    const consent = formData.get('consent');

    if (!name || !phone || !email) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
    }

    if (!consent) {
        alert('Для отправки заявки необходимо дать согласие на обработку персональных данных.');
        return;
    }

    const submissionPayload = {
        name,
        phone,
        email,
        message,
        consentGiven: true,
        submittedAt: new Date().toISOString()
    };

    sendEmail(name, phone, email, message, event.target, submissionPayload);
}

function sendEmail(name, phone, email, message, form, submissionPayload) {
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
        sendEmailFallback(name, phone, email, message, form, submissionPayload);
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Отправляем...';
    submitButton.disabled = true;

    const templateParams = {
        to_email: TARGET_EMAIL,
        from_name: name,
        from_phone: phone,
        from_email: email,
        message: message,
        date: new Date().toLocaleString('ru-RU')
    };

    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Спасибо за заявку! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.');
            form.reset();
            notifyBackend(submissionPayload);
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert('Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.');
        })
        .finally(function() {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
}

function sendEmailFallback(name, phone, email, message, form, submissionPayload) {
    const subject = encodeURIComponent('Новая заявка с сайта Steel Brothers');
    const body = encodeURIComponent(`
Новая заявка с сайта Steel Brothers:

Имя: ${name}
Телефон: ${phone}
Email: ${email}
Сообщение: ${message}

Дата: ${new Date().toLocaleString('ru-RU')}
    `);

    const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    alert('EmailJS не настроен. Откроется ваш почтовый клиент для отправки.');
    form.reset();
    notifyBackend(submissionPayload);
}

function notifyBackend(payload) {
    if (!BACKEND_ENDPOINT || BACKEND_ENDPOINT.includes('your-backend.example.com')) {
        console.warn('BACKEND_ENDPOINT не настроен. Укажите URL вашего сервера для отправки уведомлений в WhatsApp.');
        return;
    }

    fetch(BACKEND_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Backend responded with status ${response.status}`);
            }
            console.log('Backend notified successfully');
        })
        .catch((error) => {
            console.warn('Не удалось отправить данные на backend для WhatsApp:', error);
        });
}

/* ===== ЭФФЕКТЫ ПРОКРУТКИ ===== */
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.direction-card, .review-item, .moment-card');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===== УПРАВЛЕНИЕ КЛАВИАТУРОЙ ===== */
document.addEventListener('keydown', function(e) {
    const photoModal = document.getElementById('photoModal');
    const videoModal = document.getElementById('videoModal');
    const videoPlayerModal = document.getElementById('videoPlayerModal');

    if (photoModal && photoModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            nextModalImage();
        } else if (e.key === 'ArrowLeft') {
            prevModalImage();
        }
    }

    if (videoModal && videoModal.classList.contains('active') && e.key === 'Escape') {
        closeVideoModal();
    }

    if (videoPlayerModal && videoPlayerModal.classList.contains('active') && e.key === 'Escape') {
        closeVideoPlayer();
    }
});

/* ===== СЕНСОРНЫЕ ЖЕСТЫ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ ===== */
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    const modal = document.getElementById('photoModal');
    if (modal && modal.classList.contains('active')) {
        touchStartX = e.changedTouches[0].screenX;
    }
});

document.addEventListener('touchend', function(e) {
    const modal = document.getElementById('photoModal');
    if (modal && modal.classList.contains('active')) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextModalImage();
        } else {
            prevModalImage();
        }
    }
}

/* ===== ИНИЦИАЛИЗАЦИЯ ===== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Steel Brothers website loaded successfully!');

    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    initializeCarousel();
    initializeNavigation();
    initializeFormHandlers();
    initializeVideoHandlers();
    initializeScrollEffects();
});

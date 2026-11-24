window.SCHEMAS = {
  coffee: {
    title: 'Кофейня: <em>часы, рейтинг, меню</em>',
    desc: 'LocalBusiness для кофейни — в выдаче видны рейтинг, адрес и часы работы.',
    url: 'zerno-coffee.ru', name: 'Кофейня «Зерно» — кофе своей обжарки',
    snippet: 'Обжариваем зерно сами раз в неделю. Свежая выпечка с семи утра. Бронирование стола онлайн.',
    rating: '4,9', reviews: '312 отзывов', extra: ['Открыто · Закроется в 22:00', 'ул. Примерная, 12', '₽₽'],
    json: {"@context":"https://schema.org","@type":"CafeOrCoffeeShop","name":"Кофейня «Зерно»","servesCuisine":"Кофе, выпечка","priceRange":"₽₽","address":{"@type":"PostalAddress","streetAddress":"ул. Примерная, 12","addressLocality":"Москва"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"22:00"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"312"}}
  },
  dental: {
    title: 'Клиника: <em>FAQ прямо в выдаче</em>',
    desc: 'Dentist + FAQPage — ответы на частые вопросы раскрываются под ссылкой.',
    url: 'belaya-liniya.ru', name: 'Стоматология «Белая линия» — лечение без боли',
    snippet: 'Цена фиксируется в плане лечения до начала работы. Гарантия до 3 лет. Запись онлайн.',
    rating: '4,9', reviews: '620 отзывов',
    faq: ['Сколько стоит консультация?', 'Больно ли лечить зубы?', 'Есть ли гарантия на пломбы?'],
    json: {"@context":"https://schema.org","@graph":[{"@type":"Dentist","name":"Стоматология «Белая линия»","telephone":"+7 900 000-00-00","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"620"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Сколько стоит консультация?","acceptedAnswer":{"@type":"Answer","text":"Консультация и план лечения — бесплатно."}},{"@type":"Question","name":"Больно ли лечить зубы?","acceptedAnswer":{"@type":"Answer","text":"Используем современную анестезию."}}]}]}
  },
  autoservice: {
    title: 'Автосервис: <em>цены на услуги</em>',
    desc: 'AutoRepair + Offer — в сниппете видны услуги и цены, ещё до перехода на сайт.',
    url: 'garage42.ru', name: 'Автосервис «Гараж 42» — ремонт в срок',
    snippet: 'Онлайн-расчёт стоимости ТО и запись с фиксированной ценой. Гарантия 12 месяцев.',
    rating: '4,8', reviews: '187 отзывов', prices: [['Замена масла', 'от 2 400 ₽'], ['Диагностика', 'от 3 200 ₽'], ['Развал-схождение', 'от 2 800 ₽']],
    json: {"@context":"https://schema.org","@type":"AutoRepair","name":"Автосервис «Гараж 42»","openingHours":"Mo-Su 09:00-21:00","hasOfferCatalog":{"@type":"OfferCatalog","name":"Услуги","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Замена масла"},"price":"2400","priceCurrency":"RUB"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Диагностика"},"price":"3200","priceCurrency":"RUB"}]}}
  },
  renovation: {
    title: 'Ремонт: <em>хлебные крошки и услуги</em>',
    desc: 'HomeAndConstructionBusiness + BreadcrumbList — понятный путь и цена в выдаче.',
    url: 'kvadrat-remont.ru', name: 'Ремонт квартир под ключ — от 9 500 ₽/м² | Квадрат',
    crumbs: 'kvadrat-remont.ru › Услуги › Капитальный ремонт',
    snippet: 'Фиксированная смета, ежедневный фотоотчёт и гарантия 3 года. Калькулятор стоимости онлайн.',
    rating: '4,7', reviews: '94 отзыва', extra: ['Цена: от 9 500 ₽ за м²'],
    json: {"@context":"https://schema.org","@graph":[{"@type":"HomeAndConstructionBusiness","name":"Квадрат","priceRange":"от 9 500 ₽/м²"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Услуги","item":"https://kvadrat-remont.ru/services/"},{"@type":"ListItem","position":2,"name":"Капитальный ремонт"}]}]}
  },
  product: {
    title: 'Интернет-магазин: <em>цена и наличие</em>',
    desc: 'Product + Offer + Review — карточка товара с ценой, наличием и звёздами.',
    url: 'shop-example.ru', name: 'Кофемолка жерновая Grind Pro — купить в Москве',
    snippet: 'Жерновая кофемолка с 30 степенями помола. Доставка завтра, гарантия 2 года.',
    rating: '4,6', reviews: '58 отзывов', extra: ['12 990 ₽', 'В наличии'],
    json: {"@context":"https://schema.org","@type":"Product","name":"Кофемолка жерновая Grind Pro","brand":{"@type":"Brand","name":"Grind"},"offers":{"@type":"Offer","price":"12990","priceCurrency":"RUB","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.6","reviewCount":"58"}}
  }
};

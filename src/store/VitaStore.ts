import { defineStore } from "pinia";

export const useVitaStore = defineStore('vitaStore', {
  state: () => ({
    vitamins: [
      {
        id: 1,
        name: "Концентрат рыбьего жира Омега 3",
        descr: "350 мг омега-3 в каждой капсуле. Выгоднее зарубежного аналога. Активный Компонент: омега-3. Цели продукта: Для сердца и сосудов, Для зрения, Для мозга, Для кожи и волос, Для иммунитета, Общеукрепляющее, Антиоксидантное действие",
        price: "398",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/19873f18fcdc61c75f8c2e8930865473.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 2,
        name: "Коллаген морской Суперкомплекс 20 саше",
        descr: "Beauty-инновация. Максимум морского коллагена из Японии - 10 000 мг, фитокерамиды из Франции. Твое преображение за 20 дней! Активный Компонент: морской коллаген, гиалуроновая кислота, коэнзим Q10, фитокерамиды, биотин, витамин С, витамин Е, витамин D, бета-каротин, марганец, инулин, глюкозамина гидрохлорид Цели продукта: Для суставов и связок, Для кожи и волос, Для костей",
        price: "2 939",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/aac47b1edecab8db2659e82b8a9d3974.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 3,
        name: "Ацетил-глутатион 30 таблеток",
        descr: "Первый в России стабильный и легкоусваиваемый S-ацетил-L-глутатион для замедления скорости старения и сохранения молодости. Активный Компонент: L-глутатион, S-ацетил. Цели продукта: Для печени, Для иммунитета, Антиоксидантное действие, Детоксикация организма, Для органов дыхания, Антивозрастной, Восстановление",
        price: "2 057",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/5d1108581f177bead5e812189f1ba926.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 4,
        name: "Магний хелат 120 таблеток",
        descr: "Легкодоступный магний в хелатной форме для максимального усвоения. Внимание: отгрузка товара может происходить как в старом, так и в новом дизайне. Активный Компонент: магний. Цели продукта: Для сердца и сосудов, Бодрость и антистресс, Успокаивающее и для сна, Общеукрепляющее, Для нервной системы",
        price: "1 490",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/1fa007d41dfd6bff5f0adfceb6f6ef59.png.webp",
        prod: "Эвалар"
      },
      {
        id: 5,
        name: "Ревмафлекс с экстрактом мартинии 60 капсул",
        descr: "Уменьшение боли при воспалении суставов без вреда для желудка. Внимание: отгрузка товара может происходить как в старом, так и в новом дизайне. Активный Компонент: экстракт мартинии. Цели продукта: Для суставов и связок, Укрепление костной ткани, Для костей, Противовоспалительные",
        price: "650",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_list/popup_big/1280/800/100/webp/261ee90bc914c89eaf0fb0b2e379d8dc.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 6,
        name: "Черника-Форте с витаминами и цинком 150 таблеток",
        descr: "Комплекс витаминов для зрения. Подходит взрослым и детям с 3 лет. Активный Компонент: экстракт черники, цинк, рутин, витамин С, витамин B6, витамин B2, витамин B1. Цели продукта: Для детей, Для мужчин, Для зрения, Для женщин",
        price: "415",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/2cab06f830be24e9c2dc863e1f2971e4.png.webp",
        prod: "Эвалар"
      },
      {
        id: 7,
        name: "Мультивитамины и минералы женские, 90 таблеток, EL",
        descr: "Инновационный комплекс с биоактивными фитокомпонентами для женщин от Evalar Laboratory способствует: сохранению естественной красоты кожи; здоровью волос и ногтей; профилактике возрастных изменений; защите организма от воздействия окислительного стресса. Активный Компонент: витамины, минералы. Цели продукта: Для кожи и волос, Для энергии и работоспособности, Для женского здоровья, Для иммунитета",
        price: "1 154",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/2893b9aa4c7edcb52907ba4a85ed940a.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 8,
        name: "Магний хелат 60 таблеток",
        descr: "Легкодоступный магний в хелатной форме для максимального усвоения. Внимание: отгрузка товара может происходить как в старом, так и в новом дизайне. Активный Компонент: магний Цели продукта: Для сердца и сосудов, Бодрость и антистресс, Успокаивающее и для сна, Общеукрепляющее, Для нервной системы",
        price: "1 049",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/c34994a269f22a1deff23d8d681082e0.png.webp",
        prod: "Эвалар"
      },
      {
        id: 9,
        name: "Мульти Коллаген, банка 225 г, EL",
        descr: "Мульти Коллаген от Evalar Laboratory это мощный комплекс коллагена с высокоусвояемыми компонентами в высоких дозировках. Активный Компонент: витамин С, коэнзим Q10, коллаген, метилсульфонилметан Цели продукта: Для суставов и связок, Для кожи и волос, При спортивных нагрузках, Восстановление, Омоложение",
        price: "2 309",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/9567dfbb6679995652e947ce7476e936.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 10,
        name: "Железо хелат 60 капсул",
        descr: "Легкодоступное железо в хелатной форме. Без побочных эффектов со стороны ЖКТ.Активный Компонент: железо, витамин C, фолат, витамин B12. Цели продукта: Для энергии и работоспособности, Для поддержания уровня гемоглобина, При анемии, От усталости",
        price: "498",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/09fa8d5f149eb8f8bf4bae3db3770be5.png.webp",
        prod: "Эвалар"
      },
      {
        id: 11,
        name: "Гиалуроновая кислота 30 капсул",
        descr: "Максимум1 гиалуроновой кислоты - 150 мг в каждой капсуле. До 40% выгоднее зарубежного аналога!2 Хит продаж в аптеках3. Активный Компонент: гиалуроновая кислота. Пол: Для женщин. Цели продукта: Для суставов и связок, Увлажнение, Антивозрастной, Для укрепления и упругости, Защита кожи, От морщин, Тонизирование",
        price: "1 154",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/bdb87d4481c137e14715df77c5559773.png.webp",
        prod: "Эвалар"
      },
      {
        id: 12,
        name: "Таурин 1000 мг 60 таблеток",
        descr: "Оптимальная доза таурина для улучшения метаболизма, здоровья сердца, повышения выносливости и увеличения энергии. Активный Компонент: таурин. Цели продукта: Для сердца и сосудов, Для зрения, Для энергии и работоспособности, При спортивных нагрузках, Общеукрепляющее, Для снижения/контроля уровня холестерина, Для снижения уровня сахара в крови",
        price: "493",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/76522fe1b73a36bdb2fd637048fd5f22.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 13,
        name: "Спирулина Эвалар 1000 мг, 100 таблеток",
        descr: "Максимум спирулины в одной таблетке*. Природный источник уникальных пигментов фикоцианинов, белка, витаминов и минералов в микроводоросли спирулине. В 2 раза выгоднее по цене зарубежного аналога. Активный Компонент: спирулина. Цели продукта: Для иммунитета, Нормализация обменных процессов в организме, Детоксикация организма",
        price: "734",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/0ed386fc408d65bb84655a0ade61a0a8.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 14,
        name: "Селен + Цинк Эвалар 60 капсул",
        descr: "Комплекс селена и цинка, усиленный витаминами С и Д для красоты кожи, волос и ногтей с максимальным усвоением1. Улучшенная органическая форма нутриентов. Без побочных эффектов2. Активный Компонент: витамин С, витамин D3, цинк, селен. Цели продукта: Для сердца и сосудов, Для кожи и волос, Для женского здоровья, Для мужского здоровья, Для иммунитета",
        price: "734",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/d8154b95e6094821171d483d7c0376a8.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 15,
        name: "Натуральный витамин К2 100 мкг + Д3, 30 капсул",
        descr: "Натуральный витамин К2 в активной форме МК7 (менахинон-7) усиленный витамином D3 для нормализации кальциевого обмена. Активный Компонент: витамин D3, витамин K. Цели продукта: Для сердца и сосудов, Укрепление костной ткани, Для иммунитета, Для костей, Для зубов",
        price: "588",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/650c14af338b93f46665d6d5a236478a.png.webp",
        prod: "Эвалар"
      },
      {
        id: 16,
        name: "Хонда форте 60 таблеток",
        descr: "Оптимальные дозировки хондроитина и глюкозамина – по 500 мг –  для естественного обновления хрящевой ткани суставов и позвоночника, улучшения подвижности и гибкости суставов. Выгоднее по цене на 50%!1. Активный Компонент: глюкозамин, хондроитин, экстракт лопуха. Цели продукта: Для суставов и связок, Для мужчин, Для женщин, Противовоспалительны. ",
        price: "1 301",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/298abb4d06589d396b920839f99a4561.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 17,
        name: "Кальций Магний Цинк+Д3, 90 таблеток, Эвалар",
        descr: "Комплекс важнейших минералов в сочетании с витамином D3 для поддержки здоровья костей и зубов. Активный Компонент: кальций, магний, цинк, витамин D3. Цели продукта: Для сердца и сосудов, Для костей, Для нервной системы",
        price: "713",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/3d2d6da7676a3e9bd96668e92acbb623.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 18,
        name: "Магний L-треонат, 90 таблеток, EL",
        descr: "Магний L-треонат от Evalar Laboratory — это новая революционная форма магния. Активный Компонент: магний, магний L-треонат. Цели продукта: Бодрость и антистресс, Для мозга, Для нервной системы, Расслаблени ",
        price: "2 032",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/25fce811d3ad7227dbcce8d1bcb9cc15.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 19,
        name: "Паритет 15 капсул",
        descr: "Паритет — для высокого уровня тестостерона! Активный Компонент: экстракт йохимбе, цинк, экстракт эурикомы, экстракт имбиря, экстракт пантов марала, никотинамид, витамин Е. Цели продукта: Для мужского здоровья, Для повышения тестостерона",
        price: "650",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/a8f5c2e40ead5cff0cec3b73ac789d7f.jpg.webp",
        prod: "Эвалар"
      },
      {
        id: 20,
        name: "Холин, 700 мг, 60 таблеток, EL",
        descr: "Холин 350 мг от Evalar Laboratory усилен цитидином, витаминоподобным веществом, которое наш организм не может синтезировать самостоятельно. Цитидин способствует регенерации поврежденных нервных волокон, ускоряет их восстановление после повреждений. Активный Компонент: холин, цитидин. Цели продукта: Для печени, Для мозга, Для снижения/контроля уровня холестерина, Для нервной системы",
        price: "955",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail/470/900/100/webp/a3283c48e51ba1f4a81caf4c52352085.jpg.webp",
        prod: "Эвалар"
      }
    ]
  })
});
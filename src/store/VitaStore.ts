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
        country: "Россия"
      },
      {
        id: 2,
        name: "Коллаген морской Суперкомплекс 20 саше-пакетов",
        descr: "Beauty-инновация. Максимум морского коллагена из Японии - 10 000 мг, фитокерамиды из Франции. Твое преображение за 20 дней! Активный Компонент: морской коллаген, гиалуроновая кислота, коэнзим Q10, фитокерамиды, биотин, витамин С, витамин Е, витамин D, бета-каротин, марганец, инулин, глюкозамина гидрохлорид Цели продукта: Для суставов и связок, Для кожи и волос, Для костей",
        price: "2939",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/aac47b1edecab8db2659e82b8a9d3974.jpg.webp",
        country: "Россия"
      },
      {
        id: 3,
        name: "Ацетил-глутатион 30 таблеток",
        descr: "Первый в России стабильный и легкоусваиваемый S-ацетил-L-глутатион для замедления скорости старения и сохранения молодости. Активный Компонент: L-глутатион, S-ацетил. Цели продукта: Для печени, Для иммунитета, Антиоксидантное действие, Детоксикация организма, Для органов дыхания, Антивозрастной, Восстановление",
        price: "2057",
        imageUrl: "https://fitomarket.ru/upload/webp-converter.micro/converted_images/catalog_detail_card/catalog_detail_popup/1280/1024/100/webp/5d1108581f177bead5e812189f1ba926.jpg.webp",
        country: "Россия"
      },
    ]
  })
});
import React from 'react';
import './App.scss';

import HeroBlock from './Components/HeroBlock/hero_block';
import MainFacts from './Components/MainFacts/main_facts';
import PoliticsBlock from './Components/PoliticsBlock/politics_block';
import Footer from './Components/Footer/footer';
import AirQuality from './Components/AirQuality/air_quality';

import gc_logo from './assets/gc_logo.svg';
import itn_logo from './assets/itn_mix.svg';
import shid_logo from './assets/shid_emozhl_logo.svg';

function App() {

  // for HeroBlock
  const sponsor_logo_arr = [
    shid_logo,
    itn_logo,
    gc_logo,
  ];

  const hero_links = [
    {
      title: "Основные факты",
      href:  "#mainfacts" 
    },
    {
      title: "Индекс качества воздуха",
      href:  "#idxquality" 
    },
    {
      title: "Политика по уменьшению загрязнений",
      href:  "#politics" 
    },
  ];

  // for MainFacts
  const slides_facts = [
    {
      id: "100",
      img_url: require("./assets/MainFactsSlides/slide-1.jpg"),
      caption: "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      id: "101",
      img_url: require("./assets/MainFactsSlides/slide-2.jpg"),
      caption: "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      id: "102",
      img_url: require("./assets/MainFactsSlides/slide-3.jpg"),
      caption: "Загрязнение воздуха – нарушение прав человека"
    },
    {
      id: "103",
      img_url: require("./assets/MainFactsSlides/slide-4.jpg"),
      caption: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      id: "104",
      img_url: require("./assets/MainFactsSlides/slide-5.jpg"),
      caption: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    },
  ];
  
  // for PoliticsBlock
  const sectors = [
    {
			name: "Промышленность",
			img_url: require("./assets/PoliticsBlockImg/politics_1.jpg"),
			tooltip: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
		},
		{
			name: "Транспорт",
			img_url: require("./assets/PoliticsBlockImg/politics_2.jpg"),
			tooltip: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
		},
		{
			name: "Городское планирование",
			img_url: require("./assets/PoliticsBlockImg/politics_3.jpg"),
			tooltip: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
		},
		{
			name: "Энергия",
			img_url: require("./assets/PoliticsBlockImg/politics_4.jpg"),
			tooltip: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
		},
		{
			name: "Энергетика",
			img_url: require("./assets/PoliticsBlockImg/politics_5.jpg"),
			tooltip: "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
		},
		{
			name: "Утилизация отходов",
			img_url: require("./assets/PoliticsBlockImg/politics_6.jpg"),
			tooltip: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
		},
  ];


  return (
    <>
      <HeroBlock header = "Качество атмосферного воздуха и здоровье"
                 links = {hero_links}
                 sponsor_logo = {sponsor_logo_arr}
      />

      <MainFacts header = "Основные факты"
                 slides = {slides_facts}
      />

      <AirQuality/>

      <PoliticsBlock header = "Политика по уменьшению загрязнений"
                     subheader = "Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                     sectors_arr = {sectors}
      />

      <Footer f_sponsor_logo = {sponsor_logo_arr}
              f_links = {hero_links}
      />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "확정된 개발호재로<br />살수록 높아지는 미래가치",
    contentText:
      "첨단 시스템반도체 국가산업단지,<br />도안반도체클러스터 일반산업단지 등<br />가까이에서 누리는 비전과 프리미엄",
  },
  {
    img: section2Image2,
    titleText: "남다른 혁신설계",
    contentText:
      "선호도 높은 중·대형 평면 설계와 넉넉한 수납공간,<br />와이드하고 스마트한 생활공간",
  },
  {
    img: section2Image3,
    titleText: "수도권을 더 빠르게<br />광역으로 통하는 특급 교통",
    contentText:
      "세종~포천고속도로, 반도체고속도로(계획),<br />1호선, SRT(운행중), 경강선 연장(계획),<br />주요 간선도로 확장 등 특급 교통망",
  },
  {
    img: section2Image4,
    titleText: "학교를 더 가깝게<br />안심 학세권 프리미엄",
    contentText:
      "단지 앞 처인초·중·고교와 인접 학원가 조성,<br />도보권에서 누리는 원스톱 교육환경",
  },
  {
    img: section2Image5,
    titleText: "압도적인 브랜드 프리미엄<br />1군 브랜드",
    contentText:
      "베스트 아파트 브랜드 2년 연속 1위,<br />브랜드 평판 71개월 연속 1위,<br />힐스테이트의 브랜드 프리미엄",
  },
  {
    img: section2Image6,
    titleText: "편리한 생활중심",
    contentText:
      "롯데프레시, 한숲애비뉴, 남사스포츠센터,<br />다양한 공원 등 풍부한 생활 인프라",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
        <Helmet>
          {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="robots" content="index, follow" />

          {/* SEO 최적화를 위한 메타 태그 */}
          <title>힐스테이트 도안리버파크 - 입지안내</title>
          <meta
            name="description"
            content="힐스테이트 도안리버파크의 입지 정보를 확인하세요. 도안 신도시 중심의 교통망, 생활 인프라, 교육·쇼핑 시설 등 편리한 주변 환경과 주거 가치를 소개합니다."
          />
          <meta
            name="keywords"
            content="힐스테이트 도안리버파크, 도안 힐스테이트, 도안 신도시 입지"
          />
          <link
            rel="canonical"
            href="https://www.alwatanyh.com/LocationEnvironment/intro"
          />

          {/* Open Graph - 소셜 미디어 공유 최적화 */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="힐스테이트 도안리버파크" />
          <meta property="og:title" content="힐스테이트 도안리버파크 - 입지안내" />
          <meta
            property="og:description"
            content="도안 신도시 중심 입지. 교통망, 생활 인프라, 교육·쇼핑 시설 등 풍부한 편의 환경과 주거 가치를 한눈에 확인하세요."
          />
          <meta
            property="og:image"
            content="https://www.alwatanyh.com/Main1.png"
          />
          <meta
            property="og:url"
            content="https://www.alwatanyh.com/LocationEnvironment/intro"
          />

          {/* Twitter 카드 설정 */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="힐스테이트 도안리버파크 - 입지안내" />
          <meta
            name="twitter:description"
            content="도안 신도시 핵심 입지의 교통·생활·교육 인프라와 주거 가치를 소개합니다."
          />
          <meta
            name="twitter:image"
            content="https://www.alwatanyh.com/Main1.png"
          />
          <meta
            name="twitter:url"
            content="https://www.alwatanyh.com/LocationEnvironment/intro"
          />

          {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "힐스테이트 도안리버파크 - 입지안내",
              "description":
                "힐스테이트 도안리버파크의 입지 정보를 확인하세요. 도안 신도시 중심의 교통망, 생활 인프라, 교육·쇼핑 시설 등 편리한 주변 환경과 주거 가치를 소개합니다.",
              "url": "https://www.alwatanyh.com/LocationEnvironment/intro"
            })}
          </script>
        </Helmet>

        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          힐스테이트 도안리버파크 - 입지안내
        </h1>
        <p className={styles.screenReaderOnly}>
          도안 신도시 중심 입지의 교통·생활·교육 인프라와 주거 가치를 소개합니다.
        </p>

        <div className={styles.textBox}>
          <div>생활의 중심이 되는 자리</div>
          <div>힐스테이트 도안리버파크, 도안 신도시 핵심 입지</div>
        </div>


      <img src={page1} className={styles.image2} alt="힐스테이트 도안리버파크-image1" />

   
      <div className={styles.section2}>
				{LocationSection.map((value, idx) => (
					<LocationSectionBox
						image={value.img}
						title={value.titleText}
						text={value.contentText}
					/>
				))}
			</div>

      {/* <div className={styles.commonBox}>
				
				<div className={styles.notice}>
					※아주대학교 평택병원 및 카이스트 평택캠퍼스 관련 내용은 '평택시청' 2024년 주요업무계획을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※평택동부고속화도로 관련 내용은 '평택시 고지 제 2023-407호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨 교통분야 3대 혁신 전략'을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※신설도로  관련내용은 '경기도 평택시 고시 제2023-316호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계 기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을 알려드립니다

				</div>
				<div className={styles.notice}>
					※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경, 허가관청 및 국가시책에 따라 변경될 수 있습니다.
				</div>
	
			</div> */}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
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
    <title>힐스테이트 도안리버파크 - 브랜드 소개</title>
    <meta
      name="description"
      content="힐스테이트 도안리버파크의 브랜드 철학과 가치를 소개합니다. 현대건설 힐스테이트는 사람 중심 설계와 혁신 기술, 지속가능한 주거 철학을 바탕으로 고급스럽고 실용적인 주거 문화를 제시합니다."
    />
    <meta
      name="keywords"
      content="힐스테이트 도안리버파크, 도안 힐스테이트, 브랜드 소개"
    />
    <link
      rel="canonical"
      href="https://www.alwatanyh.com/Brand/intro"
    />

    {/* Open Graph - 소셜 미디어 공유 최적화 */}
    <meta
      property="og:title"
      content="힐스테이트 도안리버파크 - 브랜드 소개"
    />
    <meta
      property="og:description"
      content="힐스테이트 도안리버파크의 브랜드 철학과 가치를 소개합니다. 사람 중심 설계, 혁신 기술, 지속가능한 주거 철학으로 새로운 라이프스타일을 제안합니다."
    />
    <meta
      property="og:image"
      content="https://www.alwatanyh.com/Main1.png"
    />
    <meta
      property="og:url"
      content="https://www.alwatanyh.com/Brand/intro"
    />
    <meta property="og:site_name" content="힐스테이트 도안리버파크" />

    {/* Twitter 카드 설정 */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="힐스테이트 도안리버파크 - 브랜드 소개"
    />
    <meta
      name="twitter:description"
      content="힐스테이트 도안리버파크의 브랜드 철학과 가치를 소개합니다. 사람 중심 설계와 혁신 기술, 지속가능한 주거 철학으로 고급스러운 생활을 완성합니다."
    />
    <meta
      name="twitter:image"
      content="https://www.alwatanyh.com/Main1.png"
    />
    <meta
      name="twitter:url"
      content="https://www.alwatanyh.com/Brand/intro"
    />

    {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "힐스테이트 도안리버파크 - 브랜드 소개",
          "description": "힐스테이트 도안리버파크의 브랜드 철학과 가치를 소개합니다. 현대건설 힐스테이트는 사람 중심 설계와 혁신 기술, 지속가능한 주거 철학을 바탕으로 고급스럽고 실용적인 주거 문화를 제시합니다.",
          "url": "https://www.alwatanyh.com/Brand/intro"
        }
      `}
    </script>
  </Helmet>

  <Header isChanged={isScroll} />
  <FixIcon />

  <Bener title="힐스테이트" />

  <MenuBar contents={menuContents} />
  {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크 - 브랜드 소개
      </h1>
      <p className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크는 사람 중심 설계와 검증된 품질을 바탕으로
        고급스럽고 실용적인 주거 환경을 제공합니다. 지속가능한 철학과
        혁신 기술로 새로운 주거 문화를 제시합니다.
      </p>

  <div
    className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
  >
          <div>생활의 기준을 높이는 선택</div>
          <div>힐스테이트 도안리버파크, 도안 신도시의 중심에 서다</div>
        </div>

      <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="힐스테이트 도안리버파크 brand-Image1"
      />

      <Footer />
    </div>
  );
};

export default Brand1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


const Brand2 = () => {
  const menuContents = [
    { title: "홍보영상", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
          <title>힐스테이트 도안리버파크 - 홍보영상</title>
          <meta
            name="description"
            content="힐스테이트 도안리버파크의 홍보영상을 통해 세련된 디자인과 최신 편의시설을 확인하세요."
          />
          <link rel="canonical" href="https://www.alwatanyh.com/Brand/video" />

          {/* Open Graph */}
          <meta property="og:title" content="힐스테이트 도안리버파크 - 홍보영상" />
          <meta
            property="og:description"
            content="도안 신도시 중심, 힐스테이트 도안리버파크의 홍보영상을 만나보세요."
          />
          <meta property="og:image" content="https://www.alwatanyh.com/Main1.png" />
          <meta property="og:url" content="https://www.alwatanyh.com/Brand/video" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />

      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크의 홍보영상을 통해 단지의 세련된 디자인과 최신 편의시설을 확인하세요. 
        도안 신도시의 새로운 라이프스타일을 영상으로 만나보실 수 있습니다.
      </p>


      <div>
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      
        <div>힐스테이트 도안리버파크가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

       <div className={styles.videoContainer}>
				<YouTube
					videoId="ljBXHPSwxPI"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div> 


      <Footer />
    </div>
  );
};

export default Brand2;
